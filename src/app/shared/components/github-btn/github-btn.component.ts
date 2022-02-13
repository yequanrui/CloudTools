import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'github-btn',
  templateUrl: './github-btn.component.html',
  styleUrls: ['./github-btn.component.scss'],
})
export class GithubBtnComponent implements OnInit {
  @Input() showRepo = true;
  @Input() title = 'Github';
  @Input() userName = 'yequanrui'; // 用户名
  @Input() repoName = 'yequanrui'; // 仓库名
  @Input() type = 'star'; // 按钮类型（star/watch/fork/sponsor/follow）
  @Input() size = ''; // 按钮大小（默认空，可选large）
  @Input() showCount = true;
  repoLink: SafeResourceUrl;
  width = 100;
  height = 20;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.showRepo) {
      let repoLink = `https://ghbtns.com/github-btn.html?user=${this.userName}`;
      switch (this.type) {
        case 'star':
        case 'fork':
          repoLink += `&repo=${this.repoName}&type=${this.type}&count=${this.showCount}`;
          break;
        case 'watch':
          repoLink += `&repo=${this.repoName}&type=${this.type}&v=2&count=${this.showCount}`;
          break;
        case 'follow':
          repoLink += `&type=${this.type}&count=${this.showCount}`;
          break;
        default:
          repoLink += `&type=${this.type}`;
          break;
      }
      this.size && (repoLink += `&size=${this.size}`);
      this.repoLink = this.sanitizer.bypassSecurityTrustResourceUrl(repoLink);
    }
  }
}
