import { Component } from '@angular/core';
import { IDemo, IDiff, ITest } from 'src/app/shared/datas/test';
import { HelperUtils } from 'ng-devui';
import { template, tests } from './nowcoder-test.data';

@Component({
  selector: 'nowcoder-test',
  templateUrl: './nowcoder-test.component.html',
  styles: [
    `
      textarea {
        height: 100%;
      }
    `,
  ],
})
export class NowcoderTestComponent {
  timeout = 2000;
  difficulty: IDiff[] = [
    { id: 1, title: '入门', color: '#9faad7' },
    { id: 2, title: '简单', color: '#5e7ce0' },
    { id: 3, title: '中等', color: '#50d4ab' },
    { id: 4, title: '较难', color: '#fac20a' },
    { id: 5, title: '困难', color: '#f66f6a' },
    { id: 6, title: '100分', color: '#6cbfff' },
    { id: 7, title: '200分', color: '#a97af8' },
  ];
  template = template;
  tests: ITest[] = tests;
  test!: ITest;
  demos: IDemo[] = [];
  demo!: IDemo;
  code = '';
  input = '';
  output = '';
  result = '';

  goToLink(link = '') {
    link && HelperUtils.jumpOuterUrl(link);
  }

  selectTest(test: ITest) {
    this.code = test?.code || '';
    this.demos = test?.demos || [];
    this.demo = this.demos[0];
    this.selectDemo(this.demo);
  }

  selectDemo(demo: IDemo) {
    this.input = demo?.input || '';
    this.output = demo?.output ? `${demo.output}\n` : '';
    this.result = '';
  }

  setCode(code = '') {
    this.code = code;
  }

  setInput(input = '') {
    this.input = input;
  }

  runCode() {
    this.result = '';
    // 在Web Worker中定义一些方法
    const codeText = `
    const inputText = String.raw\`${this.input}\`;
    function* readlineGenerator() {
      const text = inputText.split("\\n");
      let line = 0;
      while (line < text.length) yield text[line++];
    }
    const line = readlineGenerator();
    const readline = () => line.next().value;
    const print = (str) => {
      self.postMessage(str.toString());
    };
    // 报错则传出
    try {
      (function () {${this.code}})();
    } catch (e) {
      print(e);
    }`;
    // 构建一个Blob对象
    const blob = new Blob([codeText]);
    // 通过window.URL创建一个url指向Blob对象，并构建Worker
    const worker = new Worker(window.URL.createObjectURL(blob));
    // 监听Web Worker收信事件
    worker.addEventListener('message', (e) => (this.result += `${e.data}\n`));
    // 超时直接停止Worker
    setTimeout(() => {
      worker.terminate();
    }, this.timeout);
  }
}
