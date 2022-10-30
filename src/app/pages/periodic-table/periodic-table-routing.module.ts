import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodicTableComponent } from './periodic-table.component';

const routes: Routes = [{ path: '', component: PeriodicTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodicTableRoutingModule {}
