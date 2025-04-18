import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import { AlertModule, CheckBoxModule, LayoutModule, PopoverModule, TabsModule } from 'ng-devui';
import { JsEqualityComponent } from './js-equality.component';

@NgModule({
  imports: [
    AlertModule,
    CheckBoxModule,
    LayoutModule,
    PopoverModule,
    TabsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: JsEqualityComponent }]),
  ],
  declarations: [JsEqualityComponent],
})
export class JsEqualityModule {}
