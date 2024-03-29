import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ImgService } from '@services/img.service';
import { ZH_CN, EN_US, I18nUtil } from 'ng-devui/i18n';
import { DevConfigService } from 'ng-devui/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  collapsed = true;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private devConfigService: DevConfigService,
    private imgService: ImgService
  ) {
    this.translate.addLangs([ZH_CN, EN_US]);
    const currentLang = I18nUtil.getCurrentLanguage() || ZH_CN;
    this.translate.setDefaultLang(currentLang);
    this.translate.use(currentLang);
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
    this.imgService.init();
  }

  ngOnInit() {
    this.collapsed = !/^\/CloudTools\/home$/.test(location.pathname);
    this.devConfigService.set('global', { showAnimation: true });
  }
}
