// RollToolsApi接口列表：https://www.mxnzp.com/doc/list
export const ROLL_API = 'https://www.mxnzp.com/api';
export const ROLL_APP_ID = 'uabgjfo1lqifojqj';
export const ROLL_APP_SECRET = 'rUBKXEKaXJcvqHnaqRyv938gfs1I1RuP';

export interface IRoolResp<T> {
  code: number;
  msg: string;
  data: T;
}

export interface ICalendar {
  date: string; // 当前日期
  lunarCalendar: string; // 农历日期
  yearTips: string; // 天干地支纪年法描述，例如：壬申
  solarTerms: string; // 节气描述，例如：冬至
  chineseZodiac: string; // 属相，例如：猴
  constellation: string; // 星座，例如：摩羯座
  suit: string; // 宜事项
  avoid: string; // 忌事项
  weekDay: number; // 当前周第几天（1-周一、2-周二...7-周日）
  dayOfYear: number; // 这一年的第几天
  weekOfYear: number; // 这一年的第几周
  type?: number; // 类型（0-工作日、1-假日、2-节假日）如果ignoreHoliday参数为true，这个字段不返回
  typeDes?: string; // 类型描述（国庆、休息日、工作日等）如果ignoreHoliday参数为true，这个字段不返回
  indexWorkDayOfMonth?: number; // 如果当前是工作日 则返回是当前月的第几个工作日，否则返回0 如果ignoreHoliday参数为true，这个字段不返回
}

export interface IHistoryToday {
  title: string; // 历史事件的名称
  year: string; // 历史事件的名称
  month: number; // 该历史事件发生所对应的月份
  day: number; // 该历史事件发生所对应的日期
  picUrl?: string; // 历史事件所对应的图片，可能为空
  details?: string; // 历史事件的详细介绍，如果type=1，则此字段有返回值，否则不返回
}
