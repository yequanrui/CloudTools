export interface PhotoParams {
  /** 摄影场景 */
  scene: string;
  /** 摄影模式 */
  type: PhotoTypes;
  /** 测光方式 */
  meteringMode: MeteringMode;
  /** 感光度：感光度越高，曝光所需时间越短，但画面的噪点越多 */
  iso: number;
  /** 快门速度：也就是曝光时间，曝光时间结束前需保持设备静止，否则画面会模糊 */
  shutterSpeed: string;
  /** 曝光补偿：用于改变相机建议的曝光值，使照片更亮或更暗 */
  exposureValue?: number;
  /** 对焦方式 */
  focusingMode: FocusingMode;
  /** 白平衡：确保成像色彩不受光源色彩影响，可根据光源类型选择相应的白平衡或自定义白平衡 */
  whiteBalance: string;
}

/**
 * 摄影模式
 */
export type PhotoTypes = '专业模式' | '延时摄影';

/**
 * 测光方式
 * 矩阵测光：对画面广泛区域进行测光
 * 中央重点测光：对整个画面进行测光，但最大比重分配给中央区域
 * 点测光：对画面测光点周围约2.5%进行测光
 */
export type MeteringMode = '矩阵测光' | '中央重点测光' | '点测光';

/**
 * 对焦方式
 * 单次自动对焦(AF-S)
 * 连续自动对焦(AF-C)：取景画面发生较大变化时再次自动对焦
 * 手动对焦(MF)
 */
export type FocusingMode = 'AF-S' | 'AF-C' | 'MF';
