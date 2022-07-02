import { ITest } from '@data/test';

const template = `function func(line) {
  // TODO
}
let line;
while ((line = readline())) {
  func(line);
}`;

const tests: ITest[] = [
  {
    name: 'HJ1 字符串最后一个单词的长度',
    code: '',
    demo: [
      {
        name: '示例1',
        input: 'hello nowcoder',
        output: '8',
      },
    ],
  },
];

export { tests, template };
