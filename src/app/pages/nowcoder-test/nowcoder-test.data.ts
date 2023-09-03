import { ITest } from 'src/app/shared/datas/test';

const template = `function func(line) {
  // TODO
}
let line;
while ((line = readline())) {
  func(line);
}`;

const tests: ITest[] = [
  {
    name: 'IPv4地址转换成整数',
    diff: 6,
    text: `存在一种虚拟IPv4地址，由4小节组成，每节的范围为0~128，以#号间隔，格式如下：
(1~128)#(0~255)#(0~255)#(0~255)
请利用这个特性把虚拟IPv4地址转换为一个32位的整数，IPv4地址以字符串形式给出，要求每个IPvV4地址只能对应到唯一的整数上。
如果是非法IPv4，返回invalid IP。
输入描述
输入一行，虚拟IPv4地址格式字符串
输出描述
输出一行，按照要求输出整型或者特定字符
示例1 输入输出示例仅供调试，后台判题数据一般不包含示例
输入
100#101#1#5
输出
1684340997
示例2  输入输出示例仅供调试，后台判题数据一般不包含示例
输入
1#2#3
输出
invalid IP`,
    code: `function func(line) {
  let res = "invalid IP";
  if (!line) {
    print(res);
  } else {
    const arr = line.split("#").map(Number);
    if (arr.length !== 4 || (arr[0] < 1 && arr[0] > 128)) {
      print(res);
    } else {
      let ip = "0x";
      for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] < 0 && arr[i] > 255) {
          print(res);
          break;
        }
        ip += arr[i].toString(16).padStart(2,'0');
      }
      print(Number(ip).toString(10));
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
        input: `128#0#255#255`,
        output: `2147549183`,
      },
      {
        name: '示例2',
        input: `100#101#1#5`,
        output: `1684340997`,
      },
      {
        name: '示例3',
        input: `1#2#3`,
        output: `invalid IP`,
      },
    ],
  },
  {
    name: '单词接龙',
    diff: 6,
    text: `单词接龙的规则是：
可用于接龙的单词首字母必须要前一个单词的尾字母相同；
当存在多个首字母相同的单词时，取长度最长的单词，如果长度也相等，则取字典序最小的单词；已经参与接龙的单词不能重复使用。
现给定一组全部由小写字母组成单词数组，并指定其中的一个单词作为起始单词，进行单词接龙，
请输出最长的单词串，单词串是单词拼接而成，中间没有空格。
输入描述:
输入的第一行为一个非负整数，表示起始单词在数组中的索引K，0 <= K < N ；
输入的第二行为一个非负整数，表示单词的个数N；
接下来的N行，分别表示单词数组中的单词。
输出描述:
输出一个字符串，表示最终拼接的单词串。
示例1  输入输出示例仅供调试，后台判题数据一般不包含示例
输入
0
6
word
dd
da
dc
dword
d
输出
worddwordda
说明
先确定起始单词word，再接以d开头的且长度最长的单词dword，剩余以d开头且长度最长的有dd、da、dc，则取字典序最小的da，所以最后输出worddwordda。
示例2  输入输出示例仅供调试，后台判题数据一般不包含示例
输入
4
6
word
dd
da
dc
dword
d
输出
dwordda
说明
先确定起始单词dword，剩余以d开头且长度最长的有dd、da、dc，则取字典序最小的da，所以最后输出dwordda。
备注:
单词个数N的取值范围为[1, 20]；
单个单词的长度的取值范围为[1, 30]；`,
    code: `function func(line) {
  const k = Number(line);
  const n = Number(readline());
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(readline());
  }
  let str = arr[k];
  let newArr = arr.slice(0, k).concat(arr.slice(k + 1));
  newArr = newArr.sort().sort((a, b) => b.length - a.length);
  let char = str.slice(-1);
  let len = str.length;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length === len) {
      continue;
    }
    if (newArr[i].startsWith(char)) {
      str += newArr[i];
      char = newArr[i].slice(-1);
      len = newArr[i].length;
    }
  }
  print(str);
}
let line;
while ((line = readline())) {
  func(line);
}
let index = 0,
  n = 6,
  letterArr = ["word", "dd", "da", "dc", "dword", "d"],
  results = [];

getLetter(index, letterArr);

function getLetter(idx, arr) {
  //找到数组中，对应下标的单词
  let letter = arr[idx];
  // console.log(letter, "letter");
  results.push(letter);
  let finalword = letter[letter.length - 1];
  //构造一个删除指定单词后的数组
  arr.splice(idx, 1);
  console.log(arr);
  //判断数组中是否有以finalword开头的单词
  var ismatch = arr.some(function (x) {
    return x.startsWith(finalword);
  });
  if (!ismatch) {
    //数组中没有匹配的单词，则返回，退出循环
    return false;
  }
  //找到数组中以finalword开头的 长度最长的单词/序列号最小的
  let _lenarr = [],
    len = 0;
  //找长度最长的
  for (var i = 0; i < arr.length; i++) {
    let strlen = arr[i].length;
    if (strlen > len) {
      len = strlen;
      _lenarr = [];
      _lenarr.push(arr[i]);
    } else if (strlen == len) {
      _lenarr.push(arr[i]);
    }
  }
  //同等长度的 对数组进行排序 取序列号最小
  _lenarr.sort();
  let letteridx = arr.indexOf(_lenarr[0]);
  let obj = {
    index: letteridx,
    arr: arr,
  };
  return getLetter(obj.index, obj.arr);
}
let ans = results.join("");
console.log(ans);`,
    demos: [
      {
        name: '示例1',
        input: `0
6
word
dd
da
dc
dword
d`,
        output: `worddwordda`,
      },
      {
        name: '示例2',
        input: `4
6
word
dd
da
dc
dword
d`,
        output: `dwordda`,
      },
    ],
  },
  {
    name: '最长方连续方波信号',
    diff: 7,
    text: `输入一串方波信号，求取最长的完全连续交替方波信号，并将其输出，如果有相同长度的交替方波信号，输出任一即可，
方波信号高位用1标识，低位用0标识，如图：
说明：
1） 一个完整的信号一定以0开始然后以0结尾，即010是一个完整信号，但101，1010，0101不是
2）输入的一串方波信号是由一个或多个完整信号组成
3） 两个相邻信号之间可能有0个或多个低位，如0110010，011000010
4） 同一个信号中可以有连续的高位，如01110101011110001010，前14位是一个具有连续高位的信号
5） 完全连续交替方波是指10交替，如01010是完全连续交替方波，0110不是
输入描述
输入信号字符串（长度 >= 3 且 <= 1024）：
0010101010110000101000010
注：输入总是合法的，不用考虑异常情况
输出描述
输出最长的完全连续交替方波信号串：01010
若不存在完全连续交替方波信号串，输出 -1。
示例1  输入输出示例仅供调试，后台判题数据一般不包含示例
输入
00101010101100001010010
输出
01010`,
    code: `function func(line) {
  const arr = line.split("00");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = \`\${i !== 0 ? "0" : ""}\${arr[i]}\${i !== arr.length - 1 ? "0" : ""}\`;
    if (arr[i] !== "0" && !arr[i].includes("00") && !arr[i].includes("11")) {
      res.push(arr[i]);
    }
  }
  res = res.sort((a, b) => b - a);
  print(res.length ? res[0] : -1);
}
let line;
while ((line = readline())) {
  func(line);
}`,
    demos: [
      {
        name: '示例1',
        input: `00101010101100001010010`,
        output: `01010`,
      },
    ],
  },
  {
    name: '华为2016校园招聘上机笔试题-1',
    diff: 6,
    code: `function func(line) {
  const [n, m] = line.split(' ').map(Number);
  const s = readline().split(' ').map(Number);
  const scores = [];
  // 给每个学生初始化原始分数
  for (let i = 0; i < n; i++) {
    scores[i] = s[i];
  }
  for (let i = 0; i < m; i++) {
    const [c, a, b] = readline().split(' ');
    if (c === 'Q') {
      // a和b要先判断大小，再从原始分数数组里截取，最后再打印最大值
      const [min, max] = [a, b].map(Number).sort((x, y) => x - y);
      const temp = scores.slice(min - 1, max);
      print(Math.max(...temp));
    } else if (c === 'U') {
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
    diff: 6,
    code: `const res = {};
function func(line) {
  const [name, num] = line.split(' ');
  // 长度超过16个字符，则只输出后16个字符
  const str = name.substr(name.lastIndexOf('\\\\') + 1).substr(-16);
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
    diff: 7,
    code: `function func(line) {
  // 不管谁有王炸，肯定是王炸最大
  if (line.includes('joker JOKER')) {
    print('joker JOKER');
  } else {
    // 先拆分两手牌，再分别拆单牌
    const [p1, p2] = line.split('-');
    const l1 = p1.split(' ');
    const l2 = p2.split(' ');
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
        return '345678910JQKA2jokerJOKER'.indexOf(str);
      }
      print(count(l1[0]) > count(l2[0]) ? p1 : p2);
    } else {
      // 剩下的就都是异常
      print('ERROR');
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
    name: 'HJ1. 字符串最后一个单词的长度',
    diff: 2,
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
    name: 'HJ3. 明明的随机数',
    diff: 4,
    link: 'https://www.nowcoder.com/practice/3245215fffb84b7b81285493eae92ff0?tpId=37',
    code: `const res = [];
function func(line) {
  res.push(line);
  // 如果除首位后的数组长度等于首位的值，进入计算
  if (res.length - 1 === Number(res[0])) {
    // 去掉首位
    res.shift();
    // 利用Set去重，从小到大排序并打印
    Array.from(new Set(res))
      .sort((a, b) => a - b)
      .map((e) => print(e));
  }
}
let line;
while ((line = readline())) {
  func(line);
}`,
    demos: [
      {
        name: '示例1',
        input: `3
2
2
1`,
        output: `1
2`,
      },
    ],
  },
  {
    name: 'HJ7. 取近似值',
    diff: 1,
    link: 'https://www.nowcoder.com/practice/3ab09737afb645cc82c35d56a5ce802a?tpId=37',
    code: `function func(line) {
  // 使用parseFloat判断是否浮点数，再使用round取整
  !isNaN(parseFloat(line)) && print(Math.round(line));
}
let line;
while ((line = readline())) {
  func(line);
}`,
    demos: [
      {
        name: '示例1',
        input: '5.5',
        output: '6',
      },
      {
        name: '示例2',
        input: '2.499',
        output: '2',
      },
    ],
  },
  {
    name: 'HJ28. 素数伴侣',
    diff: 5,
    link: 'https://www.nowcoder.com/practice/b9eae162e02f4f928eac37d7699b352e?tpId=37',
    code: `const res = [];
function func(line) {
  res.push(line);
  // 长度为2时进入计算
  if (res.length === 2) {
    // 素数：只能被1和自身整除的数
    function isPrime(n) {
      if (n >= 2) {
        for (let i = 2; i < Math.ceil(n / 2); i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
    // 匈牙利算法：先配对的先得，后配对的能让就让，让不了时就是最大配对数
    function find(oddNum, evenArr, used, matchArr) {
      for (let i = 0; i < evenArr.length; i++) {
        // 循环每个偶数与传入的奇数配对
        if (isPrime(oddNum + evenArr[i]) && used[i] == 0) {
          // 如果当前偶数与传入的奇数匹配，并且当前偶数位还没有匹配过奇数
          used[i] = 1;
          // 如果第i个偶数没有伴侣
          // 或者第i个偶数原来有伴侣，并且该伴侣能够重新找到伴侣的话(这里有递归调用)
          // 则奇数x可以设置为第i个偶数的伴侣
          // 这里采用了匈牙利算法，能让则让
          if (matchArr[i] == 0 || find(matchArr[i], evenArr, used, matchArr)) {
            matchArr[i] = oddNum;
            return true;
          }
        }
      }
      //遍历完偶数都没有可以与传入奇数做伴侣的，该奇数只能孤独终老了
      return false;
    }
    // 传入每一轮输入的偶数和奇数序列
    function getRes(oddArr, evenArr) {
      // 构造matchArr用于存放和偶数序列能配对的奇数的值，不是下标
      const matchArr = new Array(evenArr.length).fill(0);
      // count存放能配对的奇数个数
      let count = 0;
      // 循环奇数
      for (let i = 0; i < oddArr.length; i++) {
        // 构造used存放能偶数是否已经配对，记录已经配对的下标，重点是每次奇数遍历需重置，递归时不重置
        // 可以理解对每个新传去的奇数来说，所有偶数都是潜在对象，当对递归的原配奇数来讲，不能再去配对已经配对的偶数
        const used = new Array(evenArr.length).fill(0);
        find(oddArr[i], evenArr, used, matchArr) && count++;
      }
      print(count);
    }
    // 利用split分割成数组，slice再次分割，保证数组长度和前面输入的长度一致
    const arr = res[1].split(' ').slice(0, Number(res[0])).map(Number);
    // 素数中除了2都是奇数，且此处不可能为2，所以输入的两个正整数只能是一奇一偶，先分离奇偶
    const [oddArr, evenArr] = [[], []];
    arr.forEach((item) => {
      item % 2 !== 0 ? oddArr.push(item) : evenArr.push(item);
    });
    // 将每一轮的奇偶数组传出
    getRes(oddArr, evenArr);
  }
}
let line;
while ((line = readline())) {
  func(line);
}`,
    demos: [
      {
        name: '示例1',
        input: `4
2 5 6 13`,
        output: '2',
      },
      {
        name: '示例2',
        input: `2
3 6`,
        output: '0',
      },
    ],
  },
  {
    name: 'HJ66. 配置文件恢复',
    diff: 3,
    link: 'https://www.nowcoder.com/practice/ca6ac6ef9538419abf6f883f7d6f6ee5?tpId=37',
    code: `function func(line) {
  const map = {
    'reset board': 'board fault',
    'board add': 'where to add',
    'board delete': 'no board at all',
    'reboot backplane': 'impossible',
    'backplane abort': 'install first',
    'he he': 'unknown command',
  };
  const arr = line.split(' ');
  let cmd = 'unknown command';
  if (arr.length === 1) {
    'reset'.startsWith(arr[0]) && (cmd = 'reset what');
  } else if (arr.length === 2) {
    const cmds = [];
    for (let key in map) {
      const keys = key.split(' ');
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
    name: 'HJ70. 矩阵乘法计算量估算',
    diff: 3,
    link: 'https://www.nowcoder.com/practice/15e41630514445719a942e004edc0a5b?tpId=37',
    code: `function func(line) {
  // 创建二维数组保存输入矩阵
  const arr = [];
  for (let i = 0; i < line; i++) {
    arr[i] = readline().trim().split(' ').map(Number);
  }
  // 获取计算法则
  const method = readline();
  // result模拟栈结构，保存待计算的数据
  let result = [];
  let count = 0;
  // 遍历计算法则字符串
  for (let i = 0; i < method.length; i++) {
    if (method[i] === '(') {
      // 遇到前括号不做处理
    } else if (method[i] === ')') {
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
