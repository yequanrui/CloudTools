import { Component } from '@angular/core';
import { Pages } from '@data/repo';

@Component({
  selector: 'match-3',
  templateUrl: './match-3.component.html',
  styleUrls: [],
})
export class Match3Component {
  uri = '/MyWebCollection/sheep/';

  constructor() {
    const origin = location.hostname.includes('localhost') ? `//${location.hostname}:8080/Web` : location.origin;
    this.uri = origin + this.uri;
  }
}
