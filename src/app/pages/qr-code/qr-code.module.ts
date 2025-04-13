import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import { ButtonModule, CardModule, InputNumberModule, TextareaModule } from 'ng-devui';
import { QrCodeComponent } from './qr-code.component';

@NgModule({
  imports: [
    ButtonModule,
    CardModule,
    InputNumberModule,
    TextareaModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: QrCodeComponent }]),
  ],
  declarations: [QrCodeComponent],
})
export class QrCodeModule {}
