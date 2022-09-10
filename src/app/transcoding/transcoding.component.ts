import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transcoding',
  templateUrl: './transcoding.component.html',
  styleUrls: [],
})
export class TranscodingComponent implements OnInit {
  customSource = '这是一个例子,this is a example';
  tabs: any[] = [
    { title: 'URL转码', sourceName: 'URL', sourceValue: location.href, targetName: '编码结果' },
    { title: 'Base64', sourceName: '原文', sourceValue: this.customSource, targetName: '编码结果' },
    { title: 'Native/Unicode', sourceName: 'Native', sourceValue: this.customSource, targetName: 'Unicode' },
    { title: 'Native/UTF-8', sourceName: 'Native', sourceValue: this.customSource, targetName: 'UTF-8' },
    { title: 'Native/ASCII', sourceName: 'Native', sourceValue: this.customSource, targetName: 'ASCII' },
  ];
  activeTab: any;
  source = '';
  target = '';
  urlRadios = [
    { name: 'encodeURI', title: '使用JavaScript encodeURI()函数，用于完整的URL编码。' },
    { name: 'encodeURIComponent', title: '使用JavaScript encodeURIComponent()函数，用于拼接URL的参数。' },
  ];
  urlRadio = this.urlRadios[0];
  ignoreLetter = true;

  constructor() {
    this.tabs.forEach((tab, index) => {
      tab.id = index;
    });
    this.activeTabChange(0);
  }

  ngOnInit() {}

  activeTabChange(tabId: any) {
    this.activeTab = this.tabs[tabId];
    this.source = this.activeTab.sourceValue;
    this.target = '';
  }

  encode() {
    switch (this.activeTab.id) {
      case 0:
        this.target = this.urlRadio.name === 'encodeURI' ? encodeURI(this.source) : encodeURIComponent(this.source);
        break;
      case 1:
        this.target = window.btoa(unescape(encodeURIComponent(this.source)));
        break;
      case 2:
        this.native2Unicode();
        break;
      case 3:
        this.target = this.source.replace(/[^\u0000-\u00FF]/g, ($0) => escape($0).replace(/(%u)(\w{4})/gi, '&#x$2;'));
        break;
      case 4:
        this.native2Ascii();
        break;
      default:
        break;
    }
  }

  decode() {
    switch (this.activeTab.id) {
      case 0:
        this.source = this.urlRadio.name === 'encodeURI' ? decodeURI(this.target) : decodeURIComponent(this.target);
        break;
      case 1:
        this.source = decodeURIComponent(escape(window.atob(this.target)));
        break;
      case 2:
        this.unicode2Native();
        break;
      case 3:
        this.source = unescape(this.target.replace(/&#x/g, '%u').replace(/;/g, ''));
        break;
      case 4:
        this.ascii2Native();
        break;
      default:
        break;
    }
  }

  native2Unicode() {
    this.target = '';
    for (let i = 0; i < this.source.length; i++) {
      this.target += `&#${this.source.charCodeAt(i)};`;
    }
  }

  unicode2Native() {
    const code = this.target.match(/&#(\d+);/g);
    if (code) {
      this.source = '';
      for (let i = 0; i < code.length; i++) {
        this.source += String.fromCharCode(Number(code[i].replace(/[&#;]/g, '')));
      }
    }
  }

  native2Ascii() {
    const chars = this.source.split('');
    let ascii = '';
    for (let i = 0; i < chars.length; i++) {
      const code = Number(chars[i].charCodeAt(0));
      if (!this.ignoreLetter || code > 127) {
        let charAscii = code.toString(16);
        charAscii = new String('0000').substring(charAscii.length, 4) + charAscii;
        ascii += `\\u${charAscii}`;
      } else {
        ascii += chars[i];
      }
    }
    this.target = ascii;
  }

  ascii2Native() {
    const chars = this.target.split('\\u');
    let native = chars[0];
    for (let i = 1; i < chars.length; i++) {
      const code = chars[i];
      native += String.fromCharCode(parseInt(`0x${code.substring(0, 4)}`));
      code.length > 4 && (native += code.substring(4, code.length));
    }
    this.source = native;
  }
}
