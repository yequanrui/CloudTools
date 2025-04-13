import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'color-table',
  templateUrl: './color-table.component.html',
  styleUrls: ['./color-table.component.scss'],
})
export class ColorTableComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
