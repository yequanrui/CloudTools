import { NgModule } from '@angular/core';
import { ButtonModule, CardModule, InputNumberModule, TextareaModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { QrCodeRoutingModule } from './qr-code-routing.module';
import { QrCodeComponent } from './qr-code.component';

@NgModule({
  imports: [ButtonModule, CardModule, InputNumberModule, TextareaModule, SharedModule, QrCodeRoutingModule],
  declarations: [QrCodeComponent],
})
export class QrCodeModule {}
