import { Component, OnInit } from '@angular/core';
import { Env } from '@datas/env';
import { ImgService } from '@services/img.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appName = Env.AppName;
  IMG = ImgService.imgList;

  constructor() {}

  ngOnInit() {}

  onSearch(event: string) {}
}
