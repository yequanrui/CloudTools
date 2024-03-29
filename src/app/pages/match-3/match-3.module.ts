import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PipesModule } from '@pipes/pipes.module';
import { Match3RoutingModule } from './match-3-routing.module';
import { Match3Component } from './match-3.component';

@NgModule({
  imports: [SharedModule, PipesModule, Match3RoutingModule],
  declarations: [Match3Component],
})
export class Match3Module {}
