export interface ITest {
  name: string; // 题目名
  text?: string; // 题目内容
  link?: string; // 题目链接
  code: string; // 题解代码
  demos: IDemo[]; // 用例示例
}
export interface IDemo {
  name: string; // 示例名
  input: string; // 输入用例
  output: string; // 输出结果
}
