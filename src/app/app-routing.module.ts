import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('@common/content/content.module').then((m) => m.ContentModule) },
  { path: 'repo-axis', loadChildren: () => import('@pages/repo-axis/repo-axis.module').then((m) => m.RepoAxisModule) },
  { path: 'transcoding', loadChildren: () => import('@pages/transcoding/transcoding.module').then((m) => m.TranscodingModule) },
  { path: 'js-equality', loadChildren: () => import('@pages/js-equality/js-equality.module').then((m) => m.JsEqualityModule) },
  { path: 'nowcoder-test', loadChildren: () => import('@pages/nowcoder-test/nowcoder-test.module').then((m) => m.NowcoderTestModule) },
  { path: 'acoustic-calc', loadChildren: () => import('@pages/acoustic-calc/acoustic-calc.module').then((m) => m.AcousticCalcModule) },
  { path: 'qr-code', loadChildren: () => import('@pages/qr-code/qr-code.module').then((m) => m.QrCodeModule) },
  { path: 'periodic-table', loadChildren: () => import('@pages/periodic-table/periodic-table.module').then((m) => m.PeriodicTableModule) },
  { path: 'puzzle-2048', loadChildren: () => import('./pages/puzzle-2048/puzzle-2048.module').then((m) => m.Puzzle2048Module) },
  { path: 'match-3', loadChildren: () => import('./pages/match-3/match-3.module').then((m) => m.Match3Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
