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
    name: '华为2016校园招聘上机笔试题-1',
    code: `function func(line) {
  const [n, m] = line.split(" ").map(Number);
  const s = readline().split(" ").map(Number);
  const scores = [];
  // 给每个学生初始化原始分数
  for (let i = 0; i < n; i++) {
    scores[i] = s[i];
  }
  for (let i = 0; i < m; i++) {
    const [c, a, b] = readline().split(" ");
    if (c === "Q") {
      // a和b要先判断大小，再从原始分数数组里截取，最后再打印最大值
      const [min, max] = [a, b].map(Number).sort((x, y) => x - y);
      const temp = scores.slice(min - 1, max);
      print(Math.max(...temp));
    } else if (c === "U") {
      // 更新操作直接赋值即可
      scores[Number(a) - 1] = Number(b);
    }
  }
}
let line;
while ((line = readline())) {
  func(line);
}`,
    demos: [
      {
        name: '示例1',
        input: `5 7
1 2 3 4 5
Q 1 5
U 3 6
Q 3 4
Q 4 5
U 4 5
U 2 9
Q 1 5`,
        output: `5
6
5
9`,
      },
      {
        name: '示例2',
        input: `3 2
1 2 3
U 2 8
Q 3 1`,
        output: `8`,
      },
    ],
  },
  {
    name: '华为2016校园招聘上机笔试题-2',
    code: `const res = {};
function func(line) {
  const [name, num] = line.split(" ");
  // 长度超过16个字符，则只输出后16个字符
  const str = name.substr(name.lastIndexOf("\\\\") + 1).substr(-16);
  res[\`\${str} \${num}\`] = (res[\`\${str} \${num}\`] || 0) + 1;
}
let line;
while ((line = readline())) {
  func(line);
}
Object.keys(res)
  // 从多到少排序
  .sort((a, b) => res[b] - res[a])
  // 只输出前8条记录
  .slice(0, 8)
  .forEach((e) => {
    print(\`\${e} \${res[e]}\`);
  });`,
    demos: [
      {
        name: '示例1',
        input: 'E:\\V1R2\\product\\fpgadrive.c 1325',
        output: 'fpgadrive.c 1325 1',
      },
    ],
  },
  {
    name: '华为2016校园招聘上机笔试题-3',
    code: `function func(line) {
  // 不管谁有王炸，肯定是王炸最大
  if (line.includes("joker JOKER")) {
    print("joker JOKER");
  } else {
    // 先拆分两手牌，再分别拆单牌
    const [p1, p2] = line.split("-");
    const l1 = p1.split(" ");
    const l2 = p2.split(" ");
    // 谁有炸弹且另一个没有，那谁就最大
    if (l1.length === 4 && l2.length !== 4) {
      print(p1);
    } else if (l2.length === 4 && l1.length !== 4) {
      print(p2);
    }
    // 牌数相同时比较首牌大小
    else if (l1.length === l2.length) {
      // 通过序号判断牌面大小
      function count(str) {
        return "345678910JQKA2jokerJOKER".indexOf(str);
      }
      print(count(l1[0]) > count(l2[0]) ? p1 : p2);
    } else {
      // 剩下的就都是异常
      print("ERROR");
    }
  }
}
let line;
while ((line = readline())) {
  func(line);
}`,
    demos: [
      {
        name: '示例1',
        input: '4 4 4 4-joker JOKER',
        output: 'joker JOKER',
      },
    ],
  },
  {
    name: 'HJ1 字符串最后一个单词的长度',
    link: 'https://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da?tpId=37',
    code: `function func(line) {
  // 使用lastIndexOf取最后一个空格的序号，用总长度减去该序号再减1即是最后一项的长度
  print(line.length - 1 - line.lastIndexOf(" "));
}
let line;
while ((line = readline())) {
  func(line);
}`,
    demos: [
      {
        name: '示例1',
        input: 'hello nowcoder',
        output: '8',
      },
    ],
  },
  {
    name: 'HJ66 配置文件恢复',
    link: 'https://www.nowcoder.com/practice/ca6ac6ef9538419abf6f883f7d6f6ee5?tpId=37',
    code: `function func(line) {
  const map = {
    "reset board": "board fault",
    "board add": "where to add",
    "board delete": "no board at all",
    "reboot backplane": "impossible",
    "backplane abort": "install first",
    "he he": "unknown command",
  };
  const arr = line.split(" ");
  let cmd = "unknown command";
  if (arr.length === 1) {
    "reset".startsWith(arr[0]) && (cmd = "reset what");
  } else if (arr.length === 2) {
    const cmds = [];
    for (let key in map) {
      const keys = key.split(" ");
      if (keys[0].startsWith(arr[0]) && keys[1].startsWith(arr[1])) {
        cmds.push(map[key]);
      }
    }
    // 唯一确定命令才赋值
    cmds.length === 1 && (cmd = cmds[0]);
  }
  print(cmd);
}
let line;
while ((line = readline())) {
  func(line);
}`,
    demos: [
      {
        name: '示例1',
        input: `reset
reset board
board add
board delet
reboot backplane
backplane abort`,
        output: `reset what
board fault
where to add
no board at all
impossible
install first`,
      },
      {
        name: '示例2',
        input: `r b
b a
bo a
reb
r
res`,
        output: `unknown command
unknown command
where to add
unknown command
reset what
reset what`,
      },
    ],
  },
  {
    name: 'HJ70 矩阵乘法计算量估算',
    link: 'https://www.nowcoder.com/practice/15e41630514445719a942e004edc0a5b?tpId=37',
    code: `function func(line) {
  // 创建二维数组保存输入矩阵
  const arr = [];
  for (let i = 0; i < line; i++) {
    arr[i] = readline().trim().split(" ").map(Number);
  }
  // 获取计算法则
  const method = readline();
  // result模拟栈结构，保存待计算的数据
  let result = [];
  let count = 0;
  // 遍历计算法则字符串
  for (let i = 0; i < method.length; i++) {
    if (method[i] === "(") {
      // 遇到前括号不做处理
    } else if (method[i] === ")") {
      // 当遇到后括号的时候，出栈计算并将结果重新入栈
      if (result.length >= 2) {
        const second = result.pop();
        const first = result.pop();
        count += first[0] * first[1] * second[1];
        result.push([first[0], second[1]]);
      }
    } else {
      // 遇到非括号，进行入栈操作
      // 通过字母的ascii值判断对应矩阵的顺序
      result.push(arr[method.charCodeAt(i) - 65]);
    }
  }
  print(count);
}
let line;
while ((line = readline())) {
  func(line);
}`,
    demos: [
      {
        name: '示例1',
        input: `3
50 10
10 20
20 5
(A(BC))`,
        output: '3500',
      },
    ],
  },
];

export { tests, template };
