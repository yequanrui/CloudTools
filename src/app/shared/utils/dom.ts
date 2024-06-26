/**
 * 平滑滚动到页面顶部
 */
const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

/**
 * 平滑滚动到元素视图
 * @param el 目标元素
 */
const smoothScroll = (el: string) => document.querySelector(el).scrollIntoView({ behavior: 'smooth' });

/**
 * 切换全屏模式
 * @param toggle 是否开启全屏
 * @param el 要全屏的元素
 */
const fullscreen = (toggle = true, el = 'body') => (toggle ? document.querySelector(el).requestFullscreen() : document.exitFullscreen());

// 进入全屏
const enterFullScreen = (el: any) => {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
};

// 退出全屏
const exitFullscreen = () => {
  const el: any = document.documentElement;
  if (document.exitFullscreen) {
    el.exitFullscreen();
  } else if (el.webkitExitFullscreen) {
    el.webkitExitFullscreen();
  } else if (el.mozCancelFullScreen) {
    el.mozCancelFullScreen();
  } else if (el.msExitFullscreen) {
    el.msExitFullscreen();
  }
};

// 当前处于全屏的元素
const fullscreenElement = () => {
  const el: any = document.documentElement;
  return el.fullscreenElement || el.webkitFullscreenElement || el.mozFullScreenElement || el.msFullscreenElement || null;
};

// 是否处于全屏
const isFullscreen = () => !!fullscreenElement();

// 切换全屏
const toggleFullScreen = (el: any) => {
  isFullscreen() ? exitFullscreen() : enterFullScreen(el);
};

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
 * 检查指定元素是否包含另一个元素
 * @param parent 指定元素
 * @param child 另一个元素
 * @returns true/false
 */
const elementContains = (parent: Element, child: Element) => parent !== child && parent.contains(child);

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

/**
 * 检查设备是否支持触摸事件
 */
const supportsTouchEvents = () => window && 'ontouchstart' in window;
