import { Component, OnInit } from '@angular/core';
import { TableWidthConfig } from 'ng-devui';
import { PhotoParams } from './photo-params';

@Component({
  selector: 'photo-params',
  templateUrl: './photo-params.component.html',
  styleUrls: ['./photo-params.component.scss'],
})
export class PhotoParamsComponent implements OnInit {
  photoParams: PhotoParams[];
  dataTableOptions = {
    columns: [
      { field: 'scene', header: '场景', fieldType: 'text' },
      { field: 'type', header: '模式', fieldType: 'text' },
      { field: 'iso', header: 'ISO', fieldType: 'text' },
      { field: 'shutterSpeed', header: 'Gender', fieldType: 'text' },
      { field: 'whiteBalance', header: '白平衡', fieldType: 'text' },
    ],
  };
  tableWidthConfig: TableWidthConfig[] = [
    { field: 'checkbox', width: '36px' },
    { field: '#', width: '10%' },
    { field: 'scene', width: '20%' },
    { field: 'type', width: '16%' },
    { field: 'iso', width: '12%' },
    { field: 'shutterSpeed', width: '12%' },
    { field: 'whiteBalance', width: '12%' },
  ];

  constructor() {}

  ngOnInit() {}
}
