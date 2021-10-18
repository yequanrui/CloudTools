import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  logoSrc =
    'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  title = 'CloudTools';
  toolSets = [
    {
      id: 'dev',
      name: 'DevTools',
      desc: 'Toolset for Development',
      url: '/DevTools',
    },
    {
      id: 'win',
      name: 'WinTools',
      desc: 'Toolset for Windows',
      url: '/WinTools',
    },
    {
      id: 'win',
      name: 'AndroidTools',
      desc: 'Toolset for Android',
      url: '/AndroidTools',
    },
  ];
  apiDocs = [];

  constructor() {
    if (location.hostname === 'localhost') {
      this.toolSets.forEach(
        (tool) => (tool.url = `http://localhost:8080/Html${tool.url}`)
      );
    }
  }

  ngOnInit() {}

  onSearch(event: string) {}
}
