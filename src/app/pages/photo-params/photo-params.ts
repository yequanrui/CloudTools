export interface PhotoParams {
  scene: string;
  type: PhotoTypes;
  iso: number;
  shutterSpeed: string;
  whiteBalance: string;
}

export type PhotoTypes = '专业模式' | '延时摄影';
