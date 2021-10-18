import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeAxisComponent } from './time-axis.component';

const routes: Routes = [{ path: '/', component: TimeAxisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeAxisRoutingModule {}
