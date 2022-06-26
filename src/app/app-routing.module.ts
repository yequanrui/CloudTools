import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./content/content.module').then((m) => m.ContentModule),
  },
  {
    path: 'RepoAxis',
    loadChildren: () => import('./repo-axis/repo-axis.module').then((m) => m.RepoAxisModule),
  },
  {
    path: 'NowcoderTest',
    loadChildren: () => import('./nowcoder-test/nowcoder-test.module').then((m) => m.NowcoderTestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
