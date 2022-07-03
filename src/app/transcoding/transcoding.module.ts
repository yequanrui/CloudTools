import { NgModule } from '@angular/core';
import { ButtonModule, CheckBoxModule, LayoutModule, PopoverModule, RadioModule, TabsModule, TextareaModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { TranscodingRoutingModule } from './transcoding-routing.module';
import { TranscodingComponent } from './transcoding.component';

@NgModule({
  imports: [
    ButtonModule,
    CheckBoxModule,
    LayoutModule,
    PopoverModule,
    RadioModule,
    TabsModule,
    TextareaModule,
    SharedModule,
    TranscodingRoutingModule,
  ],
  declarations: [TranscodingComponent],
})
export class TranscodingModule {}
