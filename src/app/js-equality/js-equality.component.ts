import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'js-equality',
  templateUrl: './js-equality.component.html',
  styleUrls: ['./js-equality.component.scss'],
})
export class JsEqualityComponent implements OnInit {
  values = [
    true,
    false,
    1,
    0,
    -1,
    "`'true'`",
    "`'false'`",
    "`'1'`",
    "`'0'`",
    "`'-1'`",
    '',
    '`null`',
    '`undefined`',
    Infinity,
    -Infinity,
    '`[]`',
    '`{}`',
    [[]],
    [0],
    [1],
    "`parseFloat('nan')`",
  ];

  constructor(private translate: TranslateService) {
    if (('' + window.location.search).match(/reordered/)) {
      this.values = [
        false,
        0,
        "`'0'`",
        [0],
        '',
        '`[]`',
        [[]],
        true,
        1,
        "`'1'`",
        [1],
        -1,
        "`'-1'`",
        "`'true'`",
        "`'false'`",
        Infinity,
        -Infinity,
        '`null`',
        '`undefined`',
        '`{}`',
        "`parseFloat('nan')`",
      ];
    }
  }

  ngOnInit() {}
}
