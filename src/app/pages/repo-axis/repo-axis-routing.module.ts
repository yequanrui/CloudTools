import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoAxisComponent } from './repo-axis.component';

const routes: Routes = [{ path: '', component: RepoAxisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepoAxisRoutingModule {}
