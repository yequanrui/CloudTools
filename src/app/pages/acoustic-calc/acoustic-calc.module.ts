import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import { AcousticCalcComponent } from './acoustic-calc.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: AcousticCalcComponent }])],
  declarations: [AcousticCalcComponent],
})
export class AcousticCalcModule {}
