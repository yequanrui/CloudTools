/**
 * 浅克隆对象
 * @param str 要反转的字符串
 * @returns 反转后的字符串
 */
const cloneObject = (obj: object) => Object.assign({}, obj);

/**
 * 合并两个对象
 * @param obj1 要合并的对象1
 * @param obj2 要合并的对象2
 * @returns 合并后的对象
 */
const merged = (obj1: object, obj2: object) => Object.assign({}, obj1, obj2);
