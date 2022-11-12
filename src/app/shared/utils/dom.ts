/**
 * 滚动到页面顶部
 */
const toTop = () => window.scrollTo(0, 0);

/**
 * 确定当前选项卡是否可见
 * @returns true/false
 */
const isBrowserTabInView = () => document.hidden;

/**
 * 检查指定元素是否被聚焦
 * @param el 指定元素
 * @returns true/false
 */
const elementIsFocus = (el: Element) => el === document.activeElement;

/**
 * 判断当前用户是否为 Apple 设备
 * @returns true/false
 */
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
