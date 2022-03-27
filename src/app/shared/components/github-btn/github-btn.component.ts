import { Component, Input, OnInit } from '@angular/core';
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
  ghbtnsLink = 'https://ghbtns.com/github-btn.html';
  repoLink!: SafeResourceUrl;
  width = 100;
  height = 20;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.showRepo) {
      let repoLink = `${this.ghbtnsLink}?user=${this.userName}`;
      const subfixMap: any = {
        star: `&repo=${this.repoName}&type=${this.type}&count=${this.showCount}`,
        fork: `&repo=${this.repoName}&type=${this.type}&count=${this.showCount}`,
        watch: `&repo=${this.repoName}&type=${this.type}&v=2&count=${this.showCount}`,
        follow: `&type=${this.type}&count=${this.showCount}`,
        default: `&type=${this.type}`,
      };
      repoLink += subfixMap[this.type || 'default'];
      this.size && (repoLink += `&size=${this.size}`);
      this.repoLink = this.sanitizer.bypassSecurityTrustResourceUrl(repoLink);
    }
  }
}
