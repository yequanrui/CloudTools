import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '@pipes/pipes.module';
import { SharedModule } from '@shared';
import { Match3Component } from './match-3.component';

@NgModule({
  imports: [SharedModule, PipesModule, RouterModule.forChild([{ path: '', component: Match3Component }])],
  declarations: [Match3Component],
})
export class Match3Module {}
