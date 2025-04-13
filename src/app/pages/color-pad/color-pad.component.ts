import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'color-pad',
  templateUrl: './color-pad.component.html',
  styleUrls: ['./color-pad.component.scss'],
})
export class ColorPadComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}
}
