import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import { AlertModule, ButtonModule, CheckBoxModule, LayoutModule, PopoverModule, RadioModule, TabsModule, TextareaModule } from 'ng-devui';
import { TranscodingComponent } from './transcoding.component';

@NgModule({
  imports: [
    AlertModule,
    ButtonModule,
    CheckBoxModule,
    LayoutModule,
    PopoverModule,
    RadioModule,
    TabsModule,
    TextareaModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: TranscodingComponent }]),
  ],
  declarations: [TranscodingComponent],
})
export class TranscodingModule {}
