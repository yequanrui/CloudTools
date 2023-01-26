import { Component } from '@angular/core';
import { HelperUtils } from 'ng-devui';

@Component({
  selector: 'puzzle-2048',
  templateUrl: './puzzle-2048.component.html',
  styleUrls: ['./puzzle-2048.component.scss'],
})
export class Puzzle2048Component {
  activeTab: string | number;
  uri = '/MyWebCollection/2048/';
  cardList = [
    {
      name: 'My 2048',
      author: 'yequanrui',
      desc: 'My version of 2048',
      icon: 'https://yequanrui.github.io/2048/favicon.ico',
      url: 'https://yequanrui.github.io/2048/',
    },
    {
      name: '2048',
      author: 'gabrielecirulli',
      desc: 'Original version of 2048',
      icon: 'https://gabrielecirulli.github.io/2048/favicon.ico',
      url: 'https://gabrielecirulli.github.io/2048/',
    },
    {
      name: '16384',
      author: 'aNNiMON',
      desc: '8x8 version of 2048',
      icon: 'https://annimon.github.io/16384/favicon.ico',
      url: 'https://annimon.github.io/16384/',
    },
    {
      name: '2048-AI',
      author: 'ovolve',
      desc: 'AI for the game 2048',
      icon: 'https://ovolve.github.io/2048-AI/favicon.ico',
      url: 'https://ovolve.github.io/2048-AI/',
    },
  ];

  constructor() {
    const origin = location.hostname.includes('localhost') ? `//${location.hostname}:8080/Web` : location.origin;
    this.uri = origin + this.uri;
  }

  goTo(url: string) {
    url && HelperUtils.jumpOuterUrl(url);
  }
}
