export interface ITest {
  name: string; // 题目名
  diff?: number; //题目难度
  link?: string; // 题目链接
  text?: string; // 题目内容
  code: string; // 题解代码
  demos: IDemo[]; // 用例示例
}
export interface IDemo {
  name: string; // 示例名
  input: string; // 输入用例
  output: string; // 输出结果
}
export interface IDiff {
  id: number; // 难度编号
  title: string; // 难度标题
  color: string; // 难度颜色
}
