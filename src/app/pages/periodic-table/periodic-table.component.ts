import { Component, OnInit } from '@angular/core';
import { periodicList } from './periodic-table.data';

@Component({
  selector: 'periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss'],
})
export class PeriodicTableComponent implements OnInit {
  list = periodicList;

  constructor() {}

  ngOnInit() {}

  selectElement() {}
}
