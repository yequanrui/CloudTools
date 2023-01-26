import { Component } from '@angular/core';

@Component({
  selector: 'match-3',
  templateUrl: './match-3.component.html',
  styleUrls: [],
})
export class Match3Component {
  uri = '/MyWebCollection/match-3/';

  constructor() {
    const origin = location.hostname.includes('localhost') ? `//${location.hostname}:8080/Web` : location.origin;
    this.uri = origin + this.uri;
  }
}
