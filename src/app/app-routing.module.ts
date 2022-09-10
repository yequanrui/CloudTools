import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./content/content.module').then((m) => m.ContentModule) },
  { path: 'RepoAxis', loadChildren: () => import('./repo-axis/repo-axis.module').then((m) => m.RepoAxisModule) },
  { path: 'Transcoding', loadChildren: () => import('./transcoding/transcoding.module').then((m) => m.TranscodingModule) },
  { path: 'JsEquality', loadChildren: () => import('./js-equality/js-equality.module').then((m) => m.JsEqualityModule) },
  { path: 'NowcoderTest', loadChildren: () => import('./nowcoder-test/nowcoder-test.module').then((m) => m.NowcoderTestModule) },
  { path: 'AcousticCalc', loadChildren: () => import('./acoustic-calc/acoustic-calc.module').then((m) => m.AcousticCalcModule) },
  { path: 'QRCode', loadChildren: () => import('./qr-code/qr-code.module').then(m => m.QrCodeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
