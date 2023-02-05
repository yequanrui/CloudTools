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
  columnOptions = [
    { field: 'scene', header: '场景', fieldType: 'text' },
    { field: 'type', header: '模式', fieldType: 'text' },
    { field: 'zoomRatio', header: '变焦倍数', fieldType: 'text' },
    { field: 'meteringMode', header: '测光方式', fieldType: 'text' },
    { field: 'iso', header: '感光度', fieldType: 'text' },
    { field: 'shutterSpeed', header: '快门速度', fieldType: 'text' },
    { field: 'exposureValue', header: '曝光补偿', fieldType: 'text' },
    { field: 'focusingMode', header: '对焦方式', fieldType: 'text' },
    { field: 'whiteBalance', header: '白平衡', fieldType: 'text' },
  ];
  tableWidthConfig: TableWidthConfig[] = [
    { field: 'scene', width: '20%' },
    { field: 'zoomRatio', width: '20%' },
    { field: 'meteringMode', width: '20%' },
    { field: 'type', width: '20%' },
    { field: 'iso', width: '15%' },
    { field: 'shutterSpeed', width: '15%' },
    { field: 'exposureValue', width: '15%' },
    { field: 'focusingMode', width: '15%' },
    { field: 'whiteBalance', width: '15%' },
  ];

  constructor() {}

  ngOnInit() {}
}
