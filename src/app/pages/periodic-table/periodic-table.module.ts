import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import { CardModule, PopoverModule } from 'ng-devui';
import { PeriodicTableComponent } from './periodic-table.component';

@NgModule({
  imports: [CardModule, PopoverModule, SharedModule, RouterModule.forChild([{ path: '', component: PeriodicTableComponent }])],
  declarations: [PeriodicTableComponent],
})
export class PeriodicTableModule {}
