import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import { AlertModule, CheckBoxModule, LayoutModule, PopoverModule, TabsModule } from 'ng-devui';
import { ColorTableComponent } from './color-table.component';

@NgModule({
  imports: [
    AlertModule,
    CheckBoxModule,
    LayoutModule,
    PopoverModule,
    TabsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ColorTableComponent }]),
  ],
  declarations: [ColorTableComponent],
})
export class ColorTableModule {}
