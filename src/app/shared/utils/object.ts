/**
 * 判断对象是否为空
 * @param obj 要判断的对象
 */
const isEmpty = (obj: object) => Reflect.ownKeys(obj).length === 0;

/**
 * 浅克隆对象
 * @param obj 要克隆的对象
 * @returns 克隆后的对象
 */
const cloneObject = (obj: object) => Object.assign({}, obj);

/**
 * 合并两个对象
 * @param obj1 要合并的对象1
 * @param obj2 要合并的对象2
 * @returns 合并后的对象
 */
const merged = (obj1: object, obj2: object) => Object.assign({}, obj1, obj2);
