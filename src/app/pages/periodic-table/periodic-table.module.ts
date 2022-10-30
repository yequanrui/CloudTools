import { NgModule } from '@angular/core';
import { CardModule, PopoverModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { PeriodicTableRoutingModule } from './periodic-table-routing.module';
import { PeriodicTableComponent } from './periodic-table.component';

@NgModule({
  imports: [CardModule, PopoverModule, SharedModule, PeriodicTableRoutingModule],
  declarations: [PeriodicTableComponent],
})
export class PeriodicTableModule {}
