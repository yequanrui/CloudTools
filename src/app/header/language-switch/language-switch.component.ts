import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I18nUtil } from 'ng-devui/i18n';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
  selector: 'language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent implements OnInit {
  @Input() languageArr: string[] = ['中文', 'English'];
  @Output() languageEvent = new EventEmitter<string>();
  currentLang: string;

  constructor(private broadcast: BroadcastService) {}

  ngOnInit(): void {
    this.currentLang = I18nUtil.getCurrentLanguage();
  }

  changeLanguage(): void {
    this.currentLang = this.currentLang === 'zh-cn' ? 'en-us' : 'zh-cn';
    localStorage.setItem('lang', this.currentLang);
    this.languageEvent.emit(this.currentLang);
    this.broadcast.send('languageEvent', this.currentLang);
  }
}
