import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acoustic-calc',
  templateUrl: './acoustic-calc.component.html',
  styleUrls: ['./acoustic-calc.component.scss'],
})
export class AcousticCalcComponent implements OnInit {
  result = '0';
  operate = true;
  xop = true;

  constructor() {}

  ngOnInit() {}

  // 点击计算器键盘执行操作
  command(num: string) {
    let str = this.result; // 获取里面的内容
    str = str === '0' ? '' : str; // 如果是0就是""填充
    str += num; // 拼接点击的数字
    this.result = str; // 赋值给文本框
    this.play(num);
  }

  // 点击小数点
  dot(m: string) {
    if (this.xop) {
      this.result += '.';
      this.xop = false;
    }
    this.play(m); // 播放音效
  }

  // 点击操作符
  tools(op: string, m: string) {
    if (this.operate) {
      let num = this.result;
      num = num === '0' ? '0' : num;
      this.result = num + op; // 拼接操作符
      this.operate = false;
      this.xop = true;
    }
    this.play(m); // 播放音效
  }

  // 计算等于
  equal(m: string) {
    this.play(m);
    this.result = `${eval(this.result)}`; //运算结果
    this.operate = true;
    //如果要检索的字符串值没有出现，则该方法返回 -1
    this.xop = this.result.indexOf('.') === -1 ? true : false;
  }

  // 播放键盘声音
  play(num: string) {
    const music: any = document.getElementById('music');
    music.src = `../../assets/audio/calc/${num}.wav`;
    music.play();
  }

  // 清空
  clearzero(m: string) {
    this.result = '0';
    this.operate = true;
    this.xop = true;
    this.play(m);
  }
}
