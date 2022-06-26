import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NowcoderTestComponent } from './nowcoder-test.component';

const routes: Routes = [{ path: '', component: NowcoderTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NowcoderTestRoutingModule {}
