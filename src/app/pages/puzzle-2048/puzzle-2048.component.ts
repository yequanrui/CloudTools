import { Component } from '@angular/core';
import { Pages } from '@data/repo';

@Component({
  selector: 'puzzle-2048',
  templateUrl: './puzzle-2048.component.html',
  styleUrls: [],
})
export class Puzzle2048Component {
  uri = '/MyWebCollection/2048/';

  constructor() {
    const origin = location.hostname.includes('localhost') ? `//${location.hostname}:8080/Web` : location.origin;
    this.uri = origin + this.uri;
  }
}
