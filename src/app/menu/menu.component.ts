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
    this.translate.onLangChange.subscribe((params) => {
      this.menu = [
        {
          title: this.translate.instant('menu.management'),
          children: [
            {
              title: this.translate.instant('menu.repoAxis'),
              link: '/RepoAxis',
              linkType: 'routerLink',
              active: this.path.includes('/RepoAxis'),
            },
          ],
        },
        {
          title: this.translate.instant('menu.development'),
          children: [
            { title: this.translate.instant('menu.transcoding'), link: '/Transcoding', linkType: 'routerLink' },
            { title: this.translate.instant('menu.jsEquality'), link: '/JsEquality', linkType: 'routerLink' },
            { title: this.translate.instant('menu.nowcoderTest'), link: '/NowcoderTest', linkType: 'routerLink' },
          ],
        },
        {
          title: this.translate.instant('menu.office'),
          children: [
            { title: this.translate.instant('menu.acousticCalc'), link: '/AcousticCalc', linkType: 'routerLink' },
            { title: this.translate.instant('menu.qrCode'), link: '/QRCode', linkType: 'routerLink' },
          ],
        },
      ];
    });
  }

  activeItemChange(event: any) {
    console.log(event);
  }
}
