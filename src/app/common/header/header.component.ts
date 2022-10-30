import { Component, OnInit } from '@angular/core';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appName = environment.appName;

  constructor() {}

  ngOnInit() {}

  onSearch(event: string) {}
}
