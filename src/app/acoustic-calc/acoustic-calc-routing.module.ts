import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcousticCalcComponent } from './acoustic-calc.component';

const routes: Routes = [{ path: '', component: AcousticCalcComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcousticCalcRoutingModule {}
