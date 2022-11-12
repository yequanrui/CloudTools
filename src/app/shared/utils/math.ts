/**
 * 判断一个数是奇数还是偶数
 * @param num 数字
 * @returns true/false
 */
const IsEven = (num: number) => num % 2 === 0;

/**
 * 获取随机布尔值
 * @returns true/false
 */
const randomBool = () => Math.random() >= 0.5;

/**
 * 获取所有参数的平均值
 * @param args 要取平均值的数集
 * @returns 平均值
 */
const average = (...args: any[]) => args.reduce((a, b) => a + b) / args.length;

/**
 * 摄氏度转换华氏度
 * @param celsius 摄氏度
 * @returns 华氏度
 */
const celsiusToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;

/**
 * 华氏度转换摄氏度
 * @param fahrenheit 华氏度
 * @returns 摄氏度
 */
const fahrenheitToCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9;
