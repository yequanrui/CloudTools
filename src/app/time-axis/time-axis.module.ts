import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAxisRoutingModule } from './time-axis-routing.module';
import { TimeAxisComponent } from './time-axis.component';

@NgModule({
  imports: [CommonModule, TimeAxisRoutingModule],
  declarations: [TimeAxisComponent],
})
export class TimeAxisModule {}
