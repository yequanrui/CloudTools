import { Component, OnInit } from '@angular/core';
import { TableWidthConfig } from 'ng-devui';
import { PhotoParamsSource } from './photo-params.data';

@Component({
  selector: 'photo-params',
  templateUrl: './photo-params.component.html',
  styleUrls: ['./photo-params.component.scss'],
})
export class PhotoParamsComponent implements OnInit {
  photoParams = PhotoParamsSource;
  dataTableOptions = {
    columns: [
      { field: 'scene', header: '场景', fieldType: 'text' },
      { field: 'type', header: '模式', fieldType: 'text' },
      { field: 'iso', header: 'ISO', fieldType: 'text' },
      { field: 'shutterSpeed', header: '快门', fieldType: 'text' },
      { field: 'whiteBalance', header: '白平衡', fieldType: 'text' },
    ],
  };
  tableWidthConfig: TableWidthConfig[] = [
    { field: '#', width: '5%' },
    { field: 'scene', width: '20%' },
    { field: 'type', width: '20%' },
    { field: 'iso', width: '15%' },
    { field: 'shutterSpeed', width: '15%' },
    { field: 'whiteBalance', width: '15%' },
  ];

  constructor() {}

  ngOnInit() {}
}
