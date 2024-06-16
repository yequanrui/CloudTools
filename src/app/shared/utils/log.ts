export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FATAL,
}

export class Logger {
  static level = LogLevel[0]; // 默认为DEBUG级别

  constructor() {
    // 生产环境中设置日志等级
    if (process.env['NODE_ENV'] === 'production') {
      Logger.setLevel(LogLevel[2]);
    }
  }

  static setLevel(newLevel: string) {
    this.level = newLevel;
  }

  static shouldLog(level: string) {
    return LogLevel[level] >= LogLevel[this.level];
  }

  static formatStack(stack: string) {
    if (!stack) return '';
    // 格式化错误堆栈的逻辑
    return stack
      .split('\n')
      .map((line) => `    at ${line}`)
      .join('\n');
  }

  static sendLog(message: string) {
    // 假设我们有一个日志收集的API
    const logEndpoint = '/api/logs';
    fetch(logEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    }).catch((error) => {
      console.error('Failed to send log', error);
    });
  }

  static log(level: string, message: string, error?: { stack: any }) {
    if (!this.shouldLog(level)) return;
    const timestamp = new Date().toISOString();
    let formattedMessage = `[${timestamp}] [${level}] ${message}`;
    // 格式化错误堆栈
    if (error) {
      formattedMessage += `\n${this.formatStack(error.stack)}`;
    }
    switch (level) {
      case LogLevel[0]:
        console.debug(formattedMessage);
        break;
      case LogLevel[1]:
        console.info(formattedMessage);
        break;
      case LogLevel[2]:
        console.warn(formattedMessage);
        break;
      case LogLevel[3]:
      case LogLevel[4]:
        console.error(formattedMessage);
        break;
      default:
        console.log(formattedMessage);
    }
    // 根据环境变量判断是否发送日志到后端
    if (process.env['NODE_ENV'] === 'production') {
      this.sendLog(formattedMessage);
    }
  }

  static debug(message: string) {
    this.log(LogLevel[0], message);
  }

  static info(message: string) {
    this.log(LogLevel[1], message);
  }

  static warn(message: string) {
    this.log(LogLevel[2], message);
  }

  static error(message: string, error?: { stack: any }) {
    this.log(LogLevel[3], message, error);
  }

  static fatal(message: string, error?: { stack: any }) {
    this.log(LogLevel[4], message, error);
  }
}
