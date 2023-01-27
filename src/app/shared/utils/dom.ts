/**
 * 平滑滚动到页面顶部
 */
const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

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
 * 判断当前用户是否为Apple设备
 * @returns true/false
 */
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

/**
 * 获取网页上选中的文字
 * @returns string
 */
const getSelectedText = () => window.getSelection().toString();

/**
 * 将文本复制到剪贴板
 * @param text 要复制的文本
 * @returns
 */
const copyClipboard = (text: string) => navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
