import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repoAxis',
    pathMatch: 'full',
  },
  {
    path: 'repoAxis',
    loadChildren: () => import('./repo-axis/repo-axis.module').then((m) => m.RepoAxisModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
