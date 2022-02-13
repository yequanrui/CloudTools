import { Component, OnInit } from '@angular/core';
import { DevConfigService } from 'ng-devui/utils/globalConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

  constructor(private devConfigService: DevConfigService) {
    if (location.hostname === 'localhost') {
      this.toolSets.forEach(
        (tool) => (tool.url = `http://localhost:8080/Html${tool.url}`)
      );
    }
  }

  ngOnInit() {
    this.devConfigService.set('global', {
      showAnimation: false,
    });
  }
}
