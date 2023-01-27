/**
 * 反转字符串
 * @param str 要反转的字符串
 * @returns 反转后的字符串
 */
const reverse = (str: string) => str.split('').reverse().join('');

/**
 * 计算字符串中特定字符的个数
 * @param str 字符串
 * @param char 特定字符
 * @returns 个数
 */
const charCount = (str: string, char: string) => str.split(char).length - 1;
