/**
 * 判断日期是否为工作日
 * @param date
 * @returns true/false
 */
const isWorkday = (date: Date) => date.getDay() % 6 !== 0;

/**
 * 从日期对象获取时间
 * @param date 日期对象
 * @returns 时间字符串
 */
const timeBeginDate = (date: Date) => date.toTimeString().slice(0, 8);
