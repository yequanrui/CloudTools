import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Broadcast } from '@datas/broadcast';
import { ImgList } from '@datas/img';
import { ImgDarkList } from '@datas/img-dark';
import { BroadcastService } from '@services/broadcast.service';

@Injectable({
  providedIn: 'root',
})
export class ImgService {
  static imgList = ImgList;

  constructor(private broadcast: BroadcastService) {}

  init() {
    combineLatest([this.broadcast.on(Broadcast.LangSwitch), this.broadcast.on(Broadcast.ThemeChange)]).subscribe((data) => {
      debugger;
      ImgService.imgList = ImgDarkList;
    });
  }
}
