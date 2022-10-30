import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsEqualityComponent } from './js-equality.component';

const routes: Routes = [{ path: '', component: JsEqualityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsEqualityRoutingModule { }
