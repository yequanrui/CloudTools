import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AcousticCalcRoutingModule } from './acoustic-calc-routing.module';
import { AcousticCalcComponent } from './acoustic-calc.component';

@NgModule({
  imports: [SharedModule, AcousticCalcRoutingModule],
  declarations: [AcousticCalcComponent],
})
export class AcousticCalcModule {}
