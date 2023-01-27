/**
 * 从数组中去除重复项
 * @param arr 原数组
 * @returns 去重后的数组
 */
const unique = (arr: []) => [...new Set(arr)];
