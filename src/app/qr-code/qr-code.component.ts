import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent {
  qrApi = 'https://api.qrserver.com/v1/create-qr-code/';
  qrSize = 160;
  qrSrc = '';
  qrText = '';
  btnText = this.translate.instant('qrCode.generate');

  constructor(private translate: TranslateService) {}

  generateCode() {
    this.btnText = this.translate.instant('qrCode.generating');
    this.qrSrc = `${this.qrApi}?size=${this.qrSize}x${this.qrSize}&data=${this.qrText}`;
  }

  loadImg() {
    this.btnText = this.translate.instant('qrCode.generate');
  }
}
