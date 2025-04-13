import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import { AnchorModule, BackTopModule, LayoutModule, PanelModule, PopoverModule, StickyModule } from 'ng-devui';
import { MenuModule } from 'ng-devui/menu';
import { ColorTableComponent } from './color-table.component';

@NgModule({
  imports: [
    AnchorModule,
    BackTopModule,
    LayoutModule,
    MenuModule,
    PanelModule,
    PopoverModule,
    StickyModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ColorTableComponent }]),
  ],
  declarations: [ColorTableComponent],
})
export class ColorTableModule {}
