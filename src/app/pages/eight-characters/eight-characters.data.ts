// 天干
export const enum HeavenlyStems {
  Jia = '甲',
  Yi = '乙',
  Bing = '丙',
  Ding = '丁',
  Wu = '戊',
  Ji = '己',
  Geng = '庚',
  Xin = '辛',
  Ren = '壬',
  Gui = '癸',
}

// 地支
export const enum EarthlyBranches {
  Zi = '子',
  Chou = '丑',
  Yin = '寅',
  Mao = '卯',
  Chen = '辰',
  Si = '巳',
  Wu = '午',
  Wei = '未',
  Shen = '申',
  You = '酉',
  Xu = '戌',
  Hai = '亥',
}

// 计算子时的天干：甲己还加甲，乙庚丙作初，丙辛起戊子，丁壬庚子居，戊癸推壬子，时元定不虚。
export const hourMap = {
  [HeavenlyStems.Jia]: HeavenlyStems.Jia,
  [HeavenlyStems.Yi]: HeavenlyStems.Bing,
  [HeavenlyStems.Bing]: HeavenlyStems.Wu,
  [HeavenlyStems.Ding]: HeavenlyStems.Geng,
  [HeavenlyStems.Wu]: HeavenlyStems.Ren,
  [HeavenlyStems.Ji]: HeavenlyStems.Jia,
  [HeavenlyStems.Geng]: HeavenlyStems.Bing,
  [HeavenlyStems.Xin]: HeavenlyStems.Wu,
  [HeavenlyStems.Ren]: HeavenlyStems.Geng,
  [HeavenlyStems.Gui]: HeavenlyStems.Ren,
};
