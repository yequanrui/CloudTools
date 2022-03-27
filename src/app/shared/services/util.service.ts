import { Injectable, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private title: Title) {}

  /**
   * 设置当前HTML文档的标题
   * @param title 标题内容
   */
  setTitle(title = 'CloudTools') {
    this.title.setTitle(title);
  }

  /**
   * 打开全局通知
   * @param content 消息内容，支持纯文本和模板
   * @param summary 消息标题，当设置超时时间，未设置标题时，不展示标题和关闭按钮
   * @param severity 消息类型，预设值有common、success、error、warn、info
   */
  openToast(content: string | TemplateRef<any> = 'content', summary = 'summary', severity = 'info') {
    console.log(content);
  }
}
