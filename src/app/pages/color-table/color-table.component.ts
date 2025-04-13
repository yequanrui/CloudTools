import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { colorTable } from './color-table.data';

@Component({
  selector: 'color-table',
  templateUrl: './color-table.component.html',
  styleUrls: ['./color-table.component.scss'],
})
export class ColorTableComponent implements OnInit {
  colorTable = colorTable;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
