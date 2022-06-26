import { Component } from '@angular/core';

@Component({
  selector: 'nowcoder-test',
  templateUrl: './nowcoder-test.component.html',
  styleUrls: [],
})
export class NowcoderTestComponent  {
  timeout = 2000;
  template = `function func(line) {
  // TODO
}
let line;
while ((line = readline())) {
  func(line);
}`;
  code = '';
  input = '';
  output = '';

  setCode(code = '') {
    this.code = code;
  }

  setInput(input = '') {
    this.input = input;
  }

  runCode() {
    this.output = '';
    // 在Web Worker中定义一些方法
    const codeText = `
    const inputText = \`${this.input}\`;
    function* readlineGenerator() {
      const text = inputText.split("\\n");
      let line = 0;
      while (line < text.length) yield text[line++];
    }
    const line = readlineGenerator();
    const readline = () => line.next().value;
    const print = (str) => {
      console.log(str);
      self.postMessage(str.toString());
    };
    // 报错则传出
    try {
      (function () {${this.code}})();
    } catch (e) {
      print(e);
    }
    `;
    // 构建一个Blob对象
    const blob = new Blob([codeText]);
    // 通过window.URL创建一个url指向Blob对象，并构建Worker
    const worker = new Worker(window.URL.createObjectURL(blob));
    // 监听Web Worker收信事件
    worker.addEventListener('message', (e) => (this.output += `${e.data}\n`));
    // 超时直接停止Worker
    setTimeout(() => {
      worker.terminate();
    }, this.timeout);
  }
}
