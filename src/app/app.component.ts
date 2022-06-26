import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EN_US, I18nUtil, ZH_CN } from 'ng-devui/i18n';
import { DevConfigService } from 'ng-devui/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menu = [
    {
      title: 'Development',
      open: true,
      children: [
        { title: 'GitHub Timeline', link: '/RepoAxis', linkType: 'routerLink' },
        { title: 'NowCoder Test', link: '/NowcoderTest', linkType: 'routerLink' },
      ],
    },
    {
      title: 'Advanced',
      children: [
        { title: 'Data Table (disabled)', disabled: true, link: '/components/zh-cn/datatable', linkType: 'routerLink' },
        { title: 'Drag Drop', link: '/components/zh-cn/dragdrop', linkType: 'routerLink' },
      ],
    },
    {
      title: 'Others',
      children: [
        { title: 'Icon Library', link: '/icon', linkType: 'routerLink' },
        { title: 'Home Page(External link open in this window)', link: '/', linkType: 'hrefLink' },
      ],
    },
  ];

  constructor(private router: Router, private translate: TranslateService, private devConfigService: DevConfigService) {
    this.translate.addLangs([ZH_CN, EN_US]);
    const currentLang = I18nUtil.getCurrentLanguage();
    this.translate.setDefaultLang(currentLang || ZH_CN);
    const oldHandler = this.router.errorHandler;
    this.router.errorHandler = (err: any) => {
      // 加载失败的时候刷新重试一次
      if (err.stack && err.stack.indexOf('Error: Loading chunk') >= 0) {
        if (localStorage.getItem('lastChunkError') !== err.stack) {
          localStorage.setItem('lastChunkError', err.stack);
          window.location.reload();
        } else {
          console.error(`We really don't find the chunk...`);
        }
      }
      oldHandler(err);
    };
  }

  ngOnInit() {
    this.devConfigService.set('global', { showAnimation: true });
  }
}
