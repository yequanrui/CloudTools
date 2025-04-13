import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import { AlertModule, CheckBoxModule, LayoutModule, PopoverModule, TabsModule } from 'ng-devui';
import { ColorPadComponent } from './color-pad.component';

@NgModule({
  imports: [
    AlertModule,
    CheckBoxModule,
    LayoutModule,
    PopoverModule,
    TabsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ColorPadComponent }]),
  ],
  declarations: [ColorPadComponent],
})
export class ColorPadModule {}
