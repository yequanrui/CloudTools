"use strict";(self.webpackChunkCloudTools=self.webpackChunkCloudTools||[]).push([[149],{8149:(S,p,l)=>{l.r(p),l.d(p,{NowcoderTestModule:()=>J});var f=l(2033),m=l(9985),h=l(2047),s=l(5935),g=l(8633),w=l(7314),b=l(2771),_=l(4343),A=l(5290),C=l(3160),k=l(5469);const x=[{name:"IPv4\u5730\u5740\u8f6c\u6362\u6210\u6574\u6570",diff:6,text:"\u5b58\u5728\u4e00\u79cd\u865a\u62dfIPv4\u5730\u5740\uff0c\u75314\u5c0f\u8282\u7ec4\u6210\uff0c\u6bcf\u8282\u7684\u8303\u56f4\u4e3a0~128\uff0c\u4ee5#\u53f7\u95f4\u9694\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a\n(1~128)#(0~255)#(0~255)#(0~255)\n\u8bf7\u5229\u7528\u8fd9\u4e2a\u7279\u6027\u628a\u865a\u62dfIPv4\u5730\u5740\u8f6c\u6362\u4e3a\u4e00\u4e2a32\u4f4d\u7684\u6574\u6570\uff0cIPv4\u5730\u5740\u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u7ed9\u51fa\uff0c\u8981\u6c42\u6bcf\u4e2aIPvV4\u5730\u5740\u53ea\u80fd\u5bf9\u5e94\u5230\u552f\u4e00\u7684\u6574\u6570\u4e0a\u3002\n\u5982\u679c\u662f\u975e\u6cd5IPv4\uff0c\u8fd4\u56deinvalid IP\u3002\n\u8f93\u5165\u63cf\u8ff0\n\u8f93\u5165\u4e00\u884c\uff0c\u865a\u62dfIPv4\u5730\u5740\u683c\u5f0f\u5b57\u7b26\u4e32\n\u8f93\u51fa\u63cf\u8ff0\n\u8f93\u51fa\u4e00\u884c\uff0c\u6309\u7167\u8981\u6c42\u8f93\u51fa\u6574\u578b\u6216\u8005\u7279\u5b9a\u5b57\u7b26\n\u793a\u4f8b1 \u8f93\u5165\u8f93\u51fa\u793a\u4f8b\u4ec5\u4f9b\u8c03\u8bd5\uff0c\u540e\u53f0\u5224\u9898\u6570\u636e\u4e00\u822c\u4e0d\u5305\u542b\u793a\u4f8b\n\u8f93\u5165\n100#101#1#5\n\u8f93\u51fa\n1684340997\n\u793a\u4f8b2  \u8f93\u5165\u8f93\u51fa\u793a\u4f8b\u4ec5\u4f9b\u8c03\u8bd5\uff0c\u540e\u53f0\u5224\u9898\u6570\u636e\u4e00\u822c\u4e0d\u5305\u542b\u793a\u4f8b\n\u8f93\u5165\n1#2#3\n\u8f93\u51fa\ninvalid IP",code:'function func(line) {\n  let res = "invalid IP";\n  if (!line) {\n    print(res);\n  } else {\n    const arr = line.split("#").map(Number);\n    if (arr.length !== 4 || (arr[0] < 1 && arr[0] > 128)) {\n      print(res);\n    } else {\n      let ip = "0x";\n      for (let i = 0; i < arr.length; i++) {\n        if (i > 0 && arr[i] < 0 && arr[i] > 255) {\n          print(res);\n          break;\n        }\n        ip += arr[i].toString(16).padStart(2,\'0\');\n      }\n      print(Number(ip).toString(10));\n    }\n  }\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}',demos:[{name:"\u793a\u4f8b1",input:"128#0#255#255",output:"2147549183"},{name:"\u793a\u4f8b2",input:"100#101#1#5",output:"1684340997"},{name:"\u793a\u4f8b3",input:"1#2#3",output:"invalid IP"}]},{name:"\u5355\u8bcd\u63a5\u9f99",diff:6,text:"\u5355\u8bcd\u63a5\u9f99\u7684\u89c4\u5219\u662f\uff1a\n\u53ef\u7528\u4e8e\u63a5\u9f99\u7684\u5355\u8bcd\u9996\u5b57\u6bcd\u5fc5\u987b\u8981\u524d\u4e00\u4e2a\u5355\u8bcd\u7684\u5c3e\u5b57\u6bcd\u76f8\u540c\uff1b\n\u5f53\u5b58\u5728\u591a\u4e2a\u9996\u5b57\u6bcd\u76f8\u540c\u7684\u5355\u8bcd\u65f6\uff0c\u53d6\u957f\u5ea6\u6700\u957f\u7684\u5355\u8bcd\uff0c\u5982\u679c\u957f\u5ea6\u4e5f\u76f8\u7b49\uff0c\u5219\u53d6\u5b57\u5178\u5e8f\u6700\u5c0f\u7684\u5355\u8bcd\uff1b\u5df2\u7ecf\u53c2\u4e0e\u63a5\u9f99\u7684\u5355\u8bcd\u4e0d\u80fd\u91cd\u590d\u4f7f\u7528\u3002\n\u73b0\u7ed9\u5b9a\u4e00\u7ec4\u5168\u90e8\u7531\u5c0f\u5199\u5b57\u6bcd\u7ec4\u6210\u5355\u8bcd\u6570\u7ec4\uff0c\u5e76\u6307\u5b9a\u5176\u4e2d\u7684\u4e00\u4e2a\u5355\u8bcd\u4f5c\u4e3a\u8d77\u59cb\u5355\u8bcd\uff0c\u8fdb\u884c\u5355\u8bcd\u63a5\u9f99\uff0c\n\u8bf7\u8f93\u51fa\u6700\u957f\u7684\u5355\u8bcd\u4e32\uff0c\u5355\u8bcd\u4e32\u662f\u5355\u8bcd\u62fc\u63a5\u800c\u6210\uff0c\u4e2d\u95f4\u6ca1\u6709\u7a7a\u683c\u3002\n\u8f93\u5165\u63cf\u8ff0:\n\u8f93\u5165\u7684\u7b2c\u4e00\u884c\u4e3a\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\uff0c\u8868\u793a\u8d77\u59cb\u5355\u8bcd\u5728\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15K\uff0c0 <= K < N \uff1b\n\u8f93\u5165\u7684\u7b2c\u4e8c\u884c\u4e3a\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\uff0c\u8868\u793a\u5355\u8bcd\u7684\u4e2a\u6570N\uff1b\n\u63a5\u4e0b\u6765\u7684N\u884c\uff0c\u5206\u522b\u8868\u793a\u5355\u8bcd\u6570\u7ec4\u4e2d\u7684\u5355\u8bcd\u3002\n\u8f93\u51fa\u63cf\u8ff0:\n\u8f93\u51fa\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u6700\u7ec8\u62fc\u63a5\u7684\u5355\u8bcd\u4e32\u3002\n\u793a\u4f8b1  \u8f93\u5165\u8f93\u51fa\u793a\u4f8b\u4ec5\u4f9b\u8c03\u8bd5\uff0c\u540e\u53f0\u5224\u9898\u6570\u636e\u4e00\u822c\u4e0d\u5305\u542b\u793a\u4f8b\n\u8f93\u5165\n0\n6\nword\ndd\nda\ndc\ndword\nd\n\u8f93\u51fa\nworddwordda\n\u8bf4\u660e\n\u5148\u786e\u5b9a\u8d77\u59cb\u5355\u8bcdword\uff0c\u518d\u63a5\u4ee5d\u5f00\u5934\u7684\u4e14\u957f\u5ea6\u6700\u957f\u7684\u5355\u8bcddword\uff0c\u5269\u4f59\u4ee5d\u5f00\u5934\u4e14\u957f\u5ea6\u6700\u957f\u7684\u6709dd\u3001da\u3001dc\uff0c\u5219\u53d6\u5b57\u5178\u5e8f\u6700\u5c0f\u7684da\uff0c\u6240\u4ee5\u6700\u540e\u8f93\u51faworddwordda\u3002\n\u793a\u4f8b2  \u8f93\u5165\u8f93\u51fa\u793a\u4f8b\u4ec5\u4f9b\u8c03\u8bd5\uff0c\u540e\u53f0\u5224\u9898\u6570\u636e\u4e00\u822c\u4e0d\u5305\u542b\u793a\u4f8b\n\u8f93\u5165\n4\n6\nword\ndd\nda\ndc\ndword\nd\n\u8f93\u51fa\ndwordda\n\u8bf4\u660e\n\u5148\u786e\u5b9a\u8d77\u59cb\u5355\u8bcddword\uff0c\u5269\u4f59\u4ee5d\u5f00\u5934\u4e14\u957f\u5ea6\u6700\u957f\u7684\u6709dd\u3001da\u3001dc\uff0c\u5219\u53d6\u5b57\u5178\u5e8f\u6700\u5c0f\u7684da\uff0c\u6240\u4ee5\u6700\u540e\u8f93\u51fadwordda\u3002\n\u5907\u6ce8:\n\u5355\u8bcd\u4e2a\u6570N\u7684\u53d6\u503c\u8303\u56f4\u4e3a[1, 20]\uff1b\n\u5355\u4e2a\u5355\u8bcd\u7684\u957f\u5ea6\u7684\u53d6\u503c\u8303\u56f4\u4e3a[1, 30]\uff1b",code:'function func(line) {\n  const k = Number(line);\n  const n = Number(readline());\n  const arr = [];\n  for (let i = 0; i < n; i++) {\n    arr.push(readline());\n  }\n  let str = arr[k];\n  let newArr = arr.slice(0, k).concat(arr.slice(k + 1));\n  newArr = newArr.sort().sort((a, b) => b.length - a.length);\n  let char = str.slice(-1);\n  let len = str.length;\n  for (let i = 0; i < newArr.length; i++) {\n    if (newArr[i].length === len) {\n      continue;\n    }\n    if (newArr[i].startsWith(char)) {\n      str += newArr[i];\n      char = newArr[i].slice(-1);\n      len = newArr[i].length;\n    }\n  }\n  print(str);\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}\nlet index = 0,\n  n = 6,\n  letterArr = ["word", "dd", "da", "dc", "dword", "d"],\n  results = [];\n\ngetLetter(index, letterArr);\n\nfunction getLetter(idx, arr) {\n  //\u627e\u5230\u6570\u7ec4\u4e2d\uff0c\u5bf9\u5e94\u4e0b\u6807\u7684\u5355\u8bcd\n  let letter = arr[idx];\n  // console.log(letter, "letter");\n  results.push(letter);\n  let finalword = letter[letter.length - 1];\n  //\u6784\u9020\u4e00\u4e2a\u5220\u9664\u6307\u5b9a\u5355\u8bcd\u540e\u7684\u6570\u7ec4\n  arr.splice(idx, 1);\n  console.log(arr);\n  //\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u6709\u4ee5finalword\u5f00\u5934\u7684\u5355\u8bcd\n  var ismatch = arr.some(function (x) {\n    return x.startsWith(finalword);\n  });\n  if (!ismatch) {\n    //\u6570\u7ec4\u4e2d\u6ca1\u6709\u5339\u914d\u7684\u5355\u8bcd\uff0c\u5219\u8fd4\u56de\uff0c\u9000\u51fa\u5faa\u73af\n    return false;\n  }\n  //\u627e\u5230\u6570\u7ec4\u4e2d\u4ee5finalword\u5f00\u5934\u7684 \u957f\u5ea6\u6700\u957f\u7684\u5355\u8bcd/\u5e8f\u5217\u53f7\u6700\u5c0f\u7684\n  let _lenarr = [],\n    len = 0;\n  //\u627e\u957f\u5ea6\u6700\u957f\u7684\n  for (var i = 0; i < arr.length; i++) {\n    let strlen = arr[i].length;\n    if (strlen > len) {\n      len = strlen;\n      _lenarr = [];\n      _lenarr.push(arr[i]);\n    } else if (strlen == len) {\n      _lenarr.push(arr[i]);\n    }\n  }\n  //\u540c\u7b49\u957f\u5ea6\u7684 \u5bf9\u6570\u7ec4\u8fdb\u884c\u6392\u5e8f \u53d6\u5e8f\u5217\u53f7\u6700\u5c0f\n  _lenarr.sort();\n  let letteridx = arr.indexOf(_lenarr[0]);\n  let obj = {\n    index: letteridx,\n    arr: arr,\n  };\n  return getLetter(obj.index, obj.arr);\n}\nlet ans = results.join("");\nconsole.log(ans);',demos:[{name:"\u793a\u4f8b1",input:"0\n6\nword\ndd\nda\ndc\ndword\nd",output:"worddwordda"},{name:"\u793a\u4f8b2",input:"4\n6\nword\ndd\nda\ndc\ndword\nd",output:"dwordda"}]},{name:"\u6700\u957f\u65b9\u8fde\u7eed\u65b9\u6ce2\u4fe1\u53f7",diff:7,text:"\u8f93\u5165\u4e00\u4e32\u65b9\u6ce2\u4fe1\u53f7\uff0c\u6c42\u53d6\u6700\u957f\u7684\u5b8c\u5168\u8fde\u7eed\u4ea4\u66ff\u65b9\u6ce2\u4fe1\u53f7\uff0c\u5e76\u5c06\u5176\u8f93\u51fa\uff0c\u5982\u679c\u6709\u76f8\u540c\u957f\u5ea6\u7684\u4ea4\u66ff\u65b9\u6ce2\u4fe1\u53f7\uff0c\u8f93\u51fa\u4efb\u4e00\u5373\u53ef\uff0c\n\u65b9\u6ce2\u4fe1\u53f7\u9ad8\u4f4d\u75281\u6807\u8bc6\uff0c\u4f4e\u4f4d\u75280\u6807\u8bc6\uff0c\u5982\u56fe\uff1a\n\u8bf4\u660e\uff1a\n1\uff09 \u4e00\u4e2a\u5b8c\u6574\u7684\u4fe1\u53f7\u4e00\u5b9a\u4ee50\u5f00\u59cb\u7136\u540e\u4ee50\u7ed3\u5c3e\uff0c\u5373010\u662f\u4e00\u4e2a\u5b8c\u6574\u4fe1\u53f7\uff0c\u4f46101\uff0c1010\uff0c0101\u4e0d\u662f\n2\uff09\u8f93\u5165\u7684\u4e00\u4e32\u65b9\u6ce2\u4fe1\u53f7\u662f\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u5b8c\u6574\u4fe1\u53f7\u7ec4\u6210\n3\uff09 \u4e24\u4e2a\u76f8\u90bb\u4fe1\u53f7\u4e4b\u95f4\u53ef\u80fd\u67090\u4e2a\u6216\u591a\u4e2a\u4f4e\u4f4d\uff0c\u59820110010\uff0c011000010\n4\uff09 \u540c\u4e00\u4e2a\u4fe1\u53f7\u4e2d\u53ef\u4ee5\u6709\u8fde\u7eed\u7684\u9ad8\u4f4d\uff0c\u598201110101011110001010\uff0c\u524d14\u4f4d\u662f\u4e00\u4e2a\u5177\u6709\u8fde\u7eed\u9ad8\u4f4d\u7684\u4fe1\u53f7\n5\uff09 \u5b8c\u5168\u8fde\u7eed\u4ea4\u66ff\u65b9\u6ce2\u662f\u630710\u4ea4\u66ff\uff0c\u598201010\u662f\u5b8c\u5168\u8fde\u7eed\u4ea4\u66ff\u65b9\u6ce2\uff0c0110\u4e0d\u662f\n\u8f93\u5165\u63cf\u8ff0\n\u8f93\u5165\u4fe1\u53f7\u5b57\u7b26\u4e32\uff08\u957f\u5ea6 >= 3 \u4e14 <= 1024\uff09\uff1a\n0010101010110000101000010\n\u6ce8\uff1a\u8f93\u5165\u603b\u662f\u5408\u6cd5\u7684\uff0c\u4e0d\u7528\u8003\u8651\u5f02\u5e38\u60c5\u51b5\n\u8f93\u51fa\u63cf\u8ff0\n\u8f93\u51fa\u6700\u957f\u7684\u5b8c\u5168\u8fde\u7eed\u4ea4\u66ff\u65b9\u6ce2\u4fe1\u53f7\u4e32\uff1a01010\n\u82e5\u4e0d\u5b58\u5728\u5b8c\u5168\u8fde\u7eed\u4ea4\u66ff\u65b9\u6ce2\u4fe1\u53f7\u4e32\uff0c\u8f93\u51fa -1\u3002\n\u793a\u4f8b1  \u8f93\u5165\u8f93\u51fa\u793a\u4f8b\u4ec5\u4f9b\u8c03\u8bd5\uff0c\u540e\u53f0\u5224\u9898\u6570\u636e\u4e00\u822c\u4e0d\u5305\u542b\u793a\u4f8b\n\u8f93\u5165\n00101010101100001010010\n\u8f93\u51fa\n01010",code:'function func(line) {\n  const arr = line.split("00");\n  let res = [];\n  for (let i = 0; i < arr.length; i++) {\n    arr[i] = `${i !== 0 ? "0" : ""}${arr[i]}${i !== arr.length - 1 ? "0" : ""}`;\n    if (arr[i] !== "0" && !arr[i].includes("00") && !arr[i].includes("11")) {\n      res.push(arr[i]);\n    }\n  }\n  res = res.sort((a, b) => b - a);\n  print(res.length ? res[0] : -1);\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}',demos:[{name:"\u793a\u4f8b1",input:"00101010101100001010010",output:"01010"}]},{name:"\u534e\u4e3a2016\u6821\u56ed\u62db\u8058\u4e0a\u673a\u7b14\u8bd5\u9898-1",diff:6,code:"function func(line) {\n  const [n, m] = line.split(' ').map(Number);\n  const s = readline().split(' ').map(Number);\n  const scores = [];\n  // \u7ed9\u6bcf\u4e2a\u5b66\u751f\u521d\u59cb\u5316\u539f\u59cb\u5206\u6570\n  for (let i = 0; i < n; i++) {\n    scores[i] = s[i];\n  }\n  for (let i = 0; i < m; i++) {\n    const [c, a, b] = readline().split(' ');\n    if (c === 'Q') {\n      // a\u548cb\u8981\u5148\u5224\u65ad\u5927\u5c0f\uff0c\u518d\u4ece\u539f\u59cb\u5206\u6570\u6570\u7ec4\u91cc\u622a\u53d6\uff0c\u6700\u540e\u518d\u6253\u5370\u6700\u5927\u503c\n      const [min, max] = [a, b].map(Number).sort((x, y) => x - y);\n      const temp = scores.slice(min - 1, max);\n      print(Math.max(...temp));\n    } else if (c === 'U') {\n      // \u66f4\u65b0\u64cd\u4f5c\u76f4\u63a5\u8d4b\u503c\u5373\u53ef\n      scores[Number(a) - 1] = Number(b);\n    }\n  }\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}",demos:[{name:"\u793a\u4f8b1",input:"5 7\n1 2 3 4 5\nQ 1 5\nU 3 6\nQ 3 4\nQ 4 5\nU 4 5\nU 2 9\nQ 1 5",output:"5\n6\n5\n9"},{name:"\u793a\u4f8b2",input:"3 2\n1 2 3\nU 2 8\nQ 3 1",output:"8"}]},{name:"\u534e\u4e3a2016\u6821\u56ed\u62db\u8058\u4e0a\u673a\u7b14\u8bd5\u9898-2",diff:6,code:"const res = {};\nfunction func(line) {\n  const [name, num] = line.split(' ');\n  // \u957f\u5ea6\u8d85\u8fc716\u4e2a\u5b57\u7b26\uff0c\u5219\u53ea\u8f93\u51fa\u540e16\u4e2a\u5b57\u7b26\n  const str = name.substr(name.lastIndexOf('\\\\') + 1).substr(-16);\n  res[`${str} ${num}`] = (res[`${str} ${num}`] || 0) + 1;\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}\nObject.keys(res)\n  // \u4ece\u591a\u5230\u5c11\u6392\u5e8f\n  .sort((a, b) => res[b] - res[a])\n  // \u53ea\u8f93\u51fa\u524d8\u6761\u8bb0\u5f55\n  .slice(0, 8)\n  .forEach((e) => {\n    print(`${e} ${res[e]}`);\n  });",demos:[{name:"\u793a\u4f8b1",input:"E:\\V1R2\\product\\fpgadrive.c 1325",output:"fpgadrive.c 1325 1"}]},{name:"\u534e\u4e3a2016\u6821\u56ed\u62db\u8058\u4e0a\u673a\u7b14\u8bd5\u9898-3",diff:7,code:"function func(line) {\n  // \u4e0d\u7ba1\u8c01\u6709\u738b\u70b8\uff0c\u80af\u5b9a\u662f\u738b\u70b8\u6700\u5927\n  if (line.includes('joker JOKER')) {\n    print('joker JOKER');\n  } else {\n    // \u5148\u62c6\u5206\u4e24\u624b\u724c\uff0c\u518d\u5206\u522b\u62c6\u5355\u724c\n    const [p1, p2] = line.split('-');\n    const l1 = p1.split(' ');\n    const l2 = p2.split(' ');\n    // \u8c01\u6709\u70b8\u5f39\u4e14\u53e6\u4e00\u4e2a\u6ca1\u6709\uff0c\u90a3\u8c01\u5c31\u6700\u5927\n    if (l1.length === 4 && l2.length !== 4) {\n      print(p1);\n    } else if (l2.length === 4 && l1.length !== 4) {\n      print(p2);\n    }\n    // \u724c\u6570\u76f8\u540c\u65f6\u6bd4\u8f83\u9996\u724c\u5927\u5c0f\n    else if (l1.length === l2.length) {\n      // \u901a\u8fc7\u5e8f\u53f7\u5224\u65ad\u724c\u9762\u5927\u5c0f\n      function count(str) {\n        return '345678910JQKA2jokerJOKER'.indexOf(str);\n      }\n      print(count(l1[0]) > count(l2[0]) ? p1 : p2);\n    } else {\n      // \u5269\u4e0b\u7684\u5c31\u90fd\u662f\u5f02\u5e38\n      print('ERROR');\n    }\n  }\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}",demos:[{name:"\u793a\u4f8b1",input:"4 4 4 4-joker JOKER",output:"joker JOKER"}]},{name:"HJ1. \u5b57\u7b26\u4e32\u6700\u540e\u4e00\u4e2a\u5355\u8bcd\u7684\u957f\u5ea6",diff:2,link:"https://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da?tpId=37",code:'function func(line) {\n  // \u4f7f\u7528lastIndexOf\u53d6\u6700\u540e\u4e00\u4e2a\u7a7a\u683c\u7684\u5e8f\u53f7\uff0c\u7528\u603b\u957f\u5ea6\u51cf\u53bb\u8be5\u5e8f\u53f7\u518d\u51cf1\u5373\u662f\u6700\u540e\u4e00\u9879\u7684\u957f\u5ea6\n  print(line.length - 1 - line.lastIndexOf(" "));\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}',demos:[{name:"\u793a\u4f8b1",input:"hello nowcoder",output:"8"}]},{name:"HJ3. \u660e\u660e\u7684\u968f\u673a\u6570",diff:4,link:"https://www.nowcoder.com/practice/3245215fffb84b7b81285493eae92ff0?tpId=37",code:"const res = [];\nfunction func(line) {\n  res.push(line);\n  // \u5982\u679c\u9664\u9996\u4f4d\u540e\u7684\u6570\u7ec4\u957f\u5ea6\u7b49\u4e8e\u9996\u4f4d\u7684\u503c\uff0c\u8fdb\u5165\u8ba1\u7b97\n  if (res.length - 1 === Number(res[0])) {\n    // \u53bb\u6389\u9996\u4f4d\n    res.shift();\n    // \u5229\u7528Set\u53bb\u91cd\uff0c\u4ece\u5c0f\u5230\u5927\u6392\u5e8f\u5e76\u6253\u5370\n    Array.from(new Set(res))\n      .sort((a, b) => a - b)\n      .map((e) => print(e));\n  }\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}",demos:[{name:"\u793a\u4f8b1",input:"3\n2\n2\n1",output:"1\n2"}]},{name:"HJ7. \u53d6\u8fd1\u4f3c\u503c",diff:1,link:"https://www.nowcoder.com/practice/3ab09737afb645cc82c35d56a5ce802a?tpId=37",code:"function func(line) {\n  // \u4f7f\u7528parseFloat\u5224\u65ad\u662f\u5426\u6d6e\u70b9\u6570\uff0c\u518d\u4f7f\u7528round\u53d6\u6574\n  !isNaN(parseFloat(line)) && print(Math.round(line));\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}",demos:[{name:"\u793a\u4f8b1",input:"5.5",output:"6"},{name:"\u793a\u4f8b2",input:"2.499",output:"2"}]},{name:"HJ28. \u7d20\u6570\u4f34\u4fa3",diff:5,link:"https://www.nowcoder.com/practice/b9eae162e02f4f928eac37d7699b352e?tpId=37",code:"const res = [];\nfunction func(line) {\n  res.push(line);\n  // \u957f\u5ea6\u4e3a2\u65f6\u8fdb\u5165\u8ba1\u7b97\n  if (res.length === 2) {\n    // \u7d20\u6570\uff1a\u53ea\u80fd\u88ab1\u548c\u81ea\u8eab\u6574\u9664\u7684\u6570\n    function isPrime(n) {\n      if (n >= 2) {\n        for (let i = 2; i < Math.ceil(n / 2); i++) {\n          if (n % i === 0) {\n            return false;\n          }\n        }\n        return true;\n      } else {\n        return false;\n      }\n    }\n    // \u5308\u7259\u5229\u7b97\u6cd5\uff1a\u5148\u914d\u5bf9\u7684\u5148\u5f97\uff0c\u540e\u914d\u5bf9\u7684\u80fd\u8ba9\u5c31\u8ba9\uff0c\u8ba9\u4e0d\u4e86\u65f6\u5c31\u662f\u6700\u5927\u914d\u5bf9\u6570\n    function find(oddNum, evenArr, used, matchArr) {\n      for (let i = 0; i < evenArr.length; i++) {\n        // \u5faa\u73af\u6bcf\u4e2a\u5076\u6570\u4e0e\u4f20\u5165\u7684\u5947\u6570\u914d\u5bf9\n        if (isPrime(oddNum + evenArr[i]) && used[i] == 0) {\n          // \u5982\u679c\u5f53\u524d\u5076\u6570\u4e0e\u4f20\u5165\u7684\u5947\u6570\u5339\u914d\uff0c\u5e76\u4e14\u5f53\u524d\u5076\u6570\u4f4d\u8fd8\u6ca1\u6709\u5339\u914d\u8fc7\u5947\u6570\n          used[i] = 1;\n          // \u5982\u679c\u7b2ci\u4e2a\u5076\u6570\u6ca1\u6709\u4f34\u4fa3\n          // \u6216\u8005\u7b2ci\u4e2a\u5076\u6570\u539f\u6765\u6709\u4f34\u4fa3\uff0c\u5e76\u4e14\u8be5\u4f34\u4fa3\u80fd\u591f\u91cd\u65b0\u627e\u5230\u4f34\u4fa3\u7684\u8bdd(\u8fd9\u91cc\u6709\u9012\u5f52\u8c03\u7528)\n          // \u5219\u5947\u6570x\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u7b2ci\u4e2a\u5076\u6570\u7684\u4f34\u4fa3\n          // \u8fd9\u91cc\u91c7\u7528\u4e86\u5308\u7259\u5229\u7b97\u6cd5\uff0c\u80fd\u8ba9\u5219\u8ba9\n          if (matchArr[i] == 0 || find(matchArr[i], evenArr, used, matchArr)) {\n            matchArr[i] = oddNum;\n            return true;\n          }\n        }\n      }\n      //\u904d\u5386\u5b8c\u5076\u6570\u90fd\u6ca1\u6709\u53ef\u4ee5\u4e0e\u4f20\u5165\u5947\u6570\u505a\u4f34\u4fa3\u7684\uff0c\u8be5\u5947\u6570\u53ea\u80fd\u5b64\u72ec\u7ec8\u8001\u4e86\n      return false;\n    }\n    // \u4f20\u5165\u6bcf\u4e00\u8f6e\u8f93\u5165\u7684\u5076\u6570\u548c\u5947\u6570\u5e8f\u5217\n    function getRes(oddArr, evenArr) {\n      // \u6784\u9020matchArr\u7528\u4e8e\u5b58\u653e\u548c\u5076\u6570\u5e8f\u5217\u80fd\u914d\u5bf9\u7684\u5947\u6570\u7684\u503c\uff0c\u4e0d\u662f\u4e0b\u6807\n      const matchArr = new Array(evenArr.length).fill(0);\n      // count\u5b58\u653e\u80fd\u914d\u5bf9\u7684\u5947\u6570\u4e2a\u6570\n      let count = 0;\n      // \u5faa\u73af\u5947\u6570\n      for (let i = 0; i < oddArr.length; i++) {\n        // \u6784\u9020used\u5b58\u653e\u80fd\u5076\u6570\u662f\u5426\u5df2\u7ecf\u914d\u5bf9\uff0c\u8bb0\u5f55\u5df2\u7ecf\u914d\u5bf9\u7684\u4e0b\u6807\uff0c\u91cd\u70b9\u662f\u6bcf\u6b21\u5947\u6570\u904d\u5386\u9700\u91cd\u7f6e\uff0c\u9012\u5f52\u65f6\u4e0d\u91cd\u7f6e\n        // \u53ef\u4ee5\u7406\u89e3\u5bf9\u6bcf\u4e2a\u65b0\u4f20\u53bb\u7684\u5947\u6570\u6765\u8bf4\uff0c\u6240\u6709\u5076\u6570\u90fd\u662f\u6f5c\u5728\u5bf9\u8c61\uff0c\u5f53\u5bf9\u9012\u5f52\u7684\u539f\u914d\u5947\u6570\u6765\u8bb2\uff0c\u4e0d\u80fd\u518d\u53bb\u914d\u5bf9\u5df2\u7ecf\u914d\u5bf9\u7684\u5076\u6570\n        const used = new Array(evenArr.length).fill(0);\n        find(oddArr[i], evenArr, used, matchArr) && count++;\n      }\n      print(count);\n    }\n    // \u5229\u7528split\u5206\u5272\u6210\u6570\u7ec4\uff0cslice\u518d\u6b21\u5206\u5272\uff0c\u4fdd\u8bc1\u6570\u7ec4\u957f\u5ea6\u548c\u524d\u9762\u8f93\u5165\u7684\u957f\u5ea6\u4e00\u81f4\n    const arr = res[1].split(' ').slice(0, Number(res[0])).map(Number);\n    // \u7d20\u6570\u4e2d\u9664\u4e862\u90fd\u662f\u5947\u6570\uff0c\u4e14\u6b64\u5904\u4e0d\u53ef\u80fd\u4e3a2\uff0c\u6240\u4ee5\u8f93\u5165\u7684\u4e24\u4e2a\u6b63\u6574\u6570\u53ea\u80fd\u662f\u4e00\u5947\u4e00\u5076\uff0c\u5148\u5206\u79bb\u5947\u5076\n    const [oddArr, evenArr] = [[], []];\n    arr.forEach((item) => {\n      item % 2 !== 0 ? oddArr.push(item) : evenArr.push(item);\n    });\n    // \u5c06\u6bcf\u4e00\u8f6e\u7684\u5947\u5076\u6570\u7ec4\u4f20\u51fa\n    getRes(oddArr, evenArr);\n  }\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}",demos:[{name:"\u793a\u4f8b1",input:"4\n2 5 6 13",output:"2"},{name:"\u793a\u4f8b2",input:"2\n3 6",output:"0"}]},{name:"HJ66. \u914d\u7f6e\u6587\u4ef6\u6062\u590d",diff:3,link:"https://www.nowcoder.com/practice/ca6ac6ef9538419abf6f883f7d6f6ee5?tpId=37",code:"function func(line) {\n  const map = {\n    'reset board': 'board fault',\n    'board add': 'where to add',\n    'board delete': 'no board at all',\n    'reboot backplane': 'impossible',\n    'backplane abort': 'install first',\n    'he he': 'unknown command',\n  };\n  const arr = line.split(' ');\n  let cmd = 'unknown command';\n  if (arr.length === 1) {\n    'reset'.startsWith(arr[0]) && (cmd = 'reset what');\n  } else if (arr.length === 2) {\n    const cmds = [];\n    for (let key in map) {\n      const keys = key.split(' ');\n      if (keys[0].startsWith(arr[0]) && keys[1].startsWith(arr[1])) {\n        cmds.push(map[key]);\n      }\n    }\n    // \u552f\u4e00\u786e\u5b9a\u547d\u4ee4\u624d\u8d4b\u503c\n    cmds.length === 1 && (cmd = cmds[0]);\n  }\n  print(cmd);\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}",demos:[{name:"\u793a\u4f8b1",input:"reset\nreset board\nboard add\nboard delet\nreboot backplane\nbackplane abort",output:"reset what\nboard fault\nwhere to add\nno board at all\nimpossible\ninstall first"},{name:"\u793a\u4f8b2",input:"r b\nb a\nbo a\nreb\nr\nres",output:"unknown command\nunknown command\nwhere to add\nunknown command\nreset what\nreset what"}]},{name:"HJ70. \u77e9\u9635\u4e58\u6cd5\u8ba1\u7b97\u91cf\u4f30\u7b97",diff:3,link:"https://www.nowcoder.com/practice/15e41630514445719a942e004edc0a5b?tpId=37",code:"function func(line) {\n  // \u521b\u5efa\u4e8c\u7ef4\u6570\u7ec4\u4fdd\u5b58\u8f93\u5165\u77e9\u9635\n  const arr = [];\n  for (let i = 0; i < line; i++) {\n    arr[i] = readline().trim().split(' ').map(Number);\n  }\n  // \u83b7\u53d6\u8ba1\u7b97\u6cd5\u5219\n  const method = readline();\n  // result\u6a21\u62df\u6808\u7ed3\u6784\uff0c\u4fdd\u5b58\u5f85\u8ba1\u7b97\u7684\u6570\u636e\n  let result = [];\n  let count = 0;\n  // \u904d\u5386\u8ba1\u7b97\u6cd5\u5219\u5b57\u7b26\u4e32\n  for (let i = 0; i < method.length; i++) {\n    if (method[i] === '(') {\n      // \u9047\u5230\u524d\u62ec\u53f7\u4e0d\u505a\u5904\u7406\n    } else if (method[i] === ')') {\n      // \u5f53\u9047\u5230\u540e\u62ec\u53f7\u7684\u65f6\u5019\uff0c\u51fa\u6808\u8ba1\u7b97\u5e76\u5c06\u7ed3\u679c\u91cd\u65b0\u5165\u6808\n      if (result.length >= 2) {\n        const second = result.pop();\n        const first = result.pop();\n        count += first[0] * first[1] * second[1];\n        result.push([first[0], second[1]]);\n      }\n    } else {\n      // \u9047\u5230\u975e\u62ec\u53f7\uff0c\u8fdb\u884c\u5165\u6808\u64cd\u4f5c\n      // \u901a\u8fc7\u5b57\u6bcd\u7684ascii\u503c\u5224\u65ad\u5bf9\u5e94\u77e9\u9635\u7684\u987a\u5e8f\n      result.push(arr[method.charCodeAt(i) - 65]);\n    }\n  }\n  print(count);\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}",demos:[{name:"\u793a\u4f8b1",input:"3\n50 10\n10 20\n20 5\n(A(BC))",output:"3500"}]}];var e=l(652),y=l(2435),u=l(9838);const c=()=>[0,8],F=()=>({height:"100%"}),N=()=>({enable:!0}),R=o=>({selectedItemWithTemplate:o}),v=()=>[8,0];function I(o,a){if(1&o&&e.nrm(0,"d-tag",21),2&o){const r=e.XpG().option,i=e.XpG();e.Y8G("tag",i.difficulty[r.diff-1].title)("customColor",i.difficulty[r.diff-1].color)}}function E(o,a){if(1&o&&(e.EFF(0),e.DNE(1,I,1,2,"d-tag",20)),2&o){const r=a.option;e.SpI(" ",r[a.filterKey]," "),e.R7$(),e.Y8G("ngIf",r.diff)}}function M(o,a){if(1&o){const r=e.RV6();e.j41(0,"d-button",22),e.bIt("btnClick",function(){e.eBV(r);const t=e.XpG();return e.Njj(t.goToLink(t.test.link))}),e.EFF(1,"\u8df3\u8f6c\u539f\u9898"),e.k0s()}}const j=[{path:"",component:(()=>{class o{constructor(){this.timeout=2e3,this.difficulty=[{id:1,title:"\u5165\u95e8",color:"#9faad7"},{id:2,title:"\u7b80\u5355",color:"#5e7ce0"},{id:3,title:"\u4e2d\u7b49",color:"#50d4ab"},{id:4,title:"\u8f83\u96be",color:"#fac20a"},{id:5,title:"\u56f0\u96be",color:"#f66f6a"},{id:6,title:"100\u5206",color:"#6cbfff"},{id:7,title:"200\u5206",color:"#a97af8"}],this.template="function func(line) {\n  // TODO\n}\nlet line;\nwhile ((line = readline())) {\n  func(line);\n}",this.tests=x,this.demos=[],this.code="",this.input="",this.output="",this.result=""}goToLink(r=""){r&&k.A8.jumpOuterUrl(r)}selectTest(r){this.code=r?.code||"",this.demos=r?.demos||[],this.demo=this.demos[0],this.selectDemo(this.demo)}selectDemo(r){this.input=r?.input||"",this.output=r?.output?`${r.output}\n`:"",this.result=""}setCode(r=""){this.code=r}setInput(r=""){this.input=r}runCode(){this.result="";const i=new Blob([`\n    const inputText = String.raw\`${this.input}\`;\n    function* readlineGenerator() {\n      const text = inputText.split("\\n");\n      let line = 0;\n      while (line < text.length) yield text[line++];\n    }\n    const line = readlineGenerator();\n    const readline = () => line.next().value;\n    const print = (str) => {\n      self.postMessage(str.toString());\n    };\n    // \u62a5\u9519\u5219\u4f20\u51fa\n    try {\n      (function () {${this.code}})();\n    } catch (e) {\n      print(e);\n    }`]),t=new Worker(window.URL.createObjectURL(i));t.addEventListener("message",d=>this.result+=`${d.data}\n`),setTimeout(()=>{t.terminate()},this.timeout)}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["nowcoder-test"]],decls:46,vars:61,consts:[[3,"dFlex","dFlexContainer","dAlign","dGutter","dStyle"],["type","info",3,"closeable","showIcon"],[3,"dFlexContainer","dJustify"],[2,"flex-wrap","nowarp",3,"dFlex","dAlign","dJustify"],[3,"dFlex"],["placeholder","\u8bf7\u9009\u62e9\u9898\u76ee","filterKey","name",3,"ngModelChange","valueChange","width","allowClear","isSearch","options","ngModel","extraConfig"],[3,"dSpace"],["bsStyle","text",3,"btnClick",4,"ngIf"],["bsStyle","primary",3,"btnClick"],["bsStyle","common",3,"btnClick"],[3,"dFlex","dAlign","dJustify"],["placeholder","\u8bf7\u9009\u62e9\u793a\u4f8b","filterKey","name",3,"ngModelChange","valueChange","allowClear","isSearch","options","ngModel"],[3,"ngModelChange","ngModel"],[3,"dFlex","dFlexContainer","dJustify","dStyle"],["dTextarea","","spellcheck","false","placeholder","\u6d4b\u8bd5\u4ee3\u7801",3,"ngModelChange","ngModel"],[3,"dFlex","dFlexContainer","dSpace"],["dTextarea","","spellcheck","false","placeholder","\u8f93\u5165\u7528\u4f8b",3,"ngModelChange","ngModel"],[3,"dAlign","dJustify"],["dTextarea","","spellcheck","false","placeholder","\u9884\u8ba1\u8f93\u51fa\u7ed3\u679c",3,"ngModelChange","ngModel"],["dTextarea","","readonly","","spellcheck","false","placeholder","\u5b9e\u9645\u8f93\u51fa\u7ed3\u679c",3,"ngModelChange","ngModel","error"],[3,"tag","customColor",4,"ngIf"],[3,"tag","customColor"],["bsStyle","text",3,"btnClick"]],template:function(i,t){1&i&&(e.j41(0,"d-row",0)(1,"d-col")(2,"d-alert",1),e.EFF(3," \u725b\u5ba2\u7f51JavaScript V8\u6a21\u62df\u73af\u5883\uff0c\u63d0\u4f9b"),e.j41(4,"code"),e.EFF(5,"readline()"),e.k0s(),e.EFF(6,"\u548c"),e.j41(7,"code"),e.EFF(8,"print()"),e.k0s(),e.EFF(9,"\u63a5\u53e3 "),e.k0s()(),e.j41(10,"d-col",2)(11,"d-row",3)(12,"d-col",4)(13,"d-select",5),e.mxI("ngModelChange",function(n){return e.DH7(t.test,n)||(t.test=n),n}),e.bIt("valueChange",function(n){return t.selectTest(n)}),e.DNE(14,E,2,2,"ng-template"),e.k0s()(),e.j41(15,"d-col",6)(16,"span"),e.DNE(17,M,2,0,"d-button",7),e.k0s(),e.j41(18,"d-button",8),e.bIt("btnClick",function(){return t.setCode(t.template)}),e.EFF(19,"\u4ee3\u7801\u6a21\u677f"),e.k0s(),e.j41(20,"d-button",9),e.bIt("btnClick",function(){return t.setCode()}),e.EFF(21,"\u6e05\u7a7a\u4ee3\u7801"),e.k0s()()(),e.j41(22,"d-row",10)(23,"d-col",4)(24,"d-select",11),e.mxI("ngModelChange",function(n){return e.DH7(t.demo,n)||(t.demo=n),n}),e.bIt("valueChange",function(n){return t.selectDemo(n)}),e.k0s()(),e.j41(25,"d-col"),e.EFF(26," \u8d85\u65f6\u9650\u5236\uff08\u6beb\u79d2\uff09: "),e.j41(27,"d-input-number",12),e.mxI("ngModelChange",function(n){return e.DH7(t.timeout,n)||(t.timeout=n),n}),e.k0s()()()(),e.j41(28,"d-col",4)(29,"d-row",13)(30,"d-col",4)(31,"textarea",14),e.mxI("ngModelChange",function(n){return e.DH7(t.code,n)||(t.code=n),n}),e.k0s()(),e.j41(32,"d-col",15)(33,"d-row",4)(34,"textarea",16),e.mxI("ngModelChange",function(n){return e.DH7(t.input,n)||(t.input=n),n}),e.k0s()(),e.j41(35,"d-row",17)(36,"d-button",8),e.bIt("btnClick",function(){return t.runCode()}),e.EFF(37,"\u6267\u884c\u4ee3\u7801"),e.k0s(),e.j41(38,"d-button",9),e.bIt("btnClick",function(){return t.setInput()}),e.EFF(39,"\u6e05\u7a7a\u8f93\u5165"),e.k0s()(),e.j41(40,"d-row",15)(41,"d-col",4)(42,"textarea",18),e.mxI("ngModelChange",function(n){return e.DH7(t.output,n)||(t.output=n),n}),e.k0s()(),e.j41(43,"d-col",4)(44,"textarea",19),e.mxI("ngModelChange",function(n){return e.DH7(t.result,n)||(t.result=n),n}),e.EFF(45,"            "),e.k0s()()()()()()()),2&i&&(e.Y8G("dFlex",1)("dFlexContainer","column")("dAlign","stretch")("dGutter",e.lJ4(52,c))("dStyle",e.lJ4(53,F)),e.R7$(2),e.Y8G("closeable",!1)("showIcon",!1),e.R7$(8),e.Y8G("dFlexContainer","row")("dJustify","between"),e.R7$(),e.Y8G("dFlex",.64)("dAlign","center")("dJustify","between"),e.R7$(),e.Y8G("dFlex",.5),e.R7$(),e.Y8G("width",180)("allowClear",!0)("isSearch",!0)("options",t.tests),e.R50("ngModel",t.test),e.Y8G("extraConfig",e.eq3(55,R,e.lJ4(54,N))),e.R7$(2),e.Y8G("dSpace",e.lJ4(57,c)),e.R7$(2),e.Y8G("ngIf",null==t.test?null:t.test.link),e.R7$(5),e.Y8G("dFlex",.34)("dAlign","center")("dJustify","between"),e.R7$(),e.Y8G("dFlex",.5),e.R7$(),e.Y8G("allowClear",!0)("isSearch",!0)("options",t.demos),e.R50("ngModel",t.demo),e.R7$(3),e.R50("ngModel",t.timeout),e.R7$(),e.Y8G("dFlex",1),e.R7$(),e.Y8G("dFlex",1)("dFlexContainer","row")("dJustify","between")("dStyle",e.lJ4(58,F)),e.R7$(),e.Y8G("dFlex",.64),e.R7$(),e.R50("ngModel",t.code),e.R7$(),e.Y8G("dFlex",.34)("dFlexContainer","column")("dSpace",e.lJ4(59,v)),e.R7$(),e.Y8G("dFlex",.5),e.R7$(),e.R50("ngModel",t.input),e.R7$(),e.Y8G("dAlign","center")("dJustify","between"),e.R7$(5),e.Y8G("dFlex",.5)("dFlexContainer","row")("dSpace",e.lJ4(60,c)),e.R7$(),e.Y8G("dFlex",.5),e.R7$(),e.R50("ngModel",t.output),e.R7$(),e.Y8G("dFlex",.5),e.R7$(),e.R50("ngModel",t.result),e.Y8G("error",!!t.result&&t.result!==t.output))},dependencies:[f.Cy,m.Qp,h.n,s.Z4,s.Re,s.Mj,s.mf,s._W,s.$x,g.wB,w.eX,b.i,y.bT,u.me,u.BC,u.vS],styles:["textarea[_ngcontent-%COMP%]{height:100%}"]})}return o})()}];let G=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.$C({type:o});static#n=this.\u0275inj=e.G2t({imports:[C.iI.forChild(j),C.iI]})}return o})(),J=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.$C({type:o});static#n=this.\u0275inj=e.G2t({imports:[f.Zi,m.tm,h.O,s.RH,g.py,w.QD,b.N,_._,A.G,G]})}return o})()}}]);