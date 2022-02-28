import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EN_US, I18nService, I18nUtil, ZH_CN } from 'ng-devui/i18n';
import { BroadcastService } from '@services/broadcast.service';

@Component({
  selector: 'language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent implements OnInit {
  languages = [
    { key: ZH_CN, lang: '简体中文', prefix: 'CN' },
    { key: EN_US, lang: 'English', prefix: 'US' },
  ];
  language = ZH_CN;

  constructor(private translate: TranslateService, private i18n: I18nService, private broadcast: BroadcastService) {}

  ngOnInit(): void {
    this.language = I18nUtil.getCurrentLanguage();
  }

  onLanguageChange(language: string) {
    this.language = language;
    localStorage.setItem(this.i18n.LANG_KEY, this.language);
    this.i18n.toggleLang(this.language);
    this.translate.use(this.language);
    this.broadcast.send('language-changed', this.language);
  }
}
