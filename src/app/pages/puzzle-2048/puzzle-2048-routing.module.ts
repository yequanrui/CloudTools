import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Puzzle2048Component } from './puzzle-2048.component';

const routes: Routes = [{ path: '', component: Puzzle2048Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Puzzle2048RoutingModule {}
