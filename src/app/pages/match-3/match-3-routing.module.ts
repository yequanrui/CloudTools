import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Match3Component } from './match-3.component';

const routes: Routes = [{ path: '', component: Match3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Match3RoutingModule {}
