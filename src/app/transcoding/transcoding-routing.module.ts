import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranscodingComponent } from './transcoding.component';

const routes: Routes = [{ path: '', component: TranscodingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranscodingRoutingModule {}
