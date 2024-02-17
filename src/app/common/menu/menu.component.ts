import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  path = location.pathname;
  menu: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    const isLocal = location.hostname.includes('localhost');
    this.translate.onLangChange.subscribe(() => {
      this.menu = [
        {
          title: this.translate.instant('menu.management'),
          children: [{ title: this.translate.instant('menu.repoAxis'), link: '/repo-axis', linkType: 'routerLink' }],
        },
        {
          title: this.translate.instant('menu.development'),
          children: [
            { title: this.translate.instant('menu.transcoding'), link: '/transcoding', linkType: 'routerLink' },
            { title: this.translate.instant('menu.jsEquality'), link: '/js-equality', linkType: 'routerLink', disabled: !isLocal },
            { title: this.translate.instant('menu.nowcoderTest'), link: '/nowcoder-test', linkType: 'routerLink' },
          ],
        },
        {
          title: this.translate.instant('menu.graphics'),
          children: [{ title: this.translate.instant('menu.photoParams'), link: '/photo-params', linkType: 'routerLink' }],
        },
        {
          title: this.translate.instant('menu.office'),
          children: [
            { title: this.translate.instant('menu.acousticCalc'), link: '/acoustic-calc', linkType: 'routerLink' },
            { title: this.translate.instant('menu.qrCode'), link: '/qr-code', linkType: 'routerLink' },
          ],
        },
        {
          title: this.translate.instant('menu.daily'),
          children: [{ title: this.translate.instant('menu.calendar'), link: '/calendar', linkType: 'routerLink' }],
        },
        {
          title: this.translate.instant('menu.study'),
          children: [{ title: this.translate.instant('menu.periodicTable'), link: '/periodic-table', linkType: 'routerLink' }],
        },
        {
          title: this.translate.instant('menu.entertainment'),
          children: [
            { title: this.translate.instant('menu.2048'), link: '/puzzle-2048', linkType: 'routerLink' },
            { title: this.translate.instant('menu.match3'), link: '/match-3', linkType: 'routerLink' },
          ],
        },
      ];
    });
  }
}
