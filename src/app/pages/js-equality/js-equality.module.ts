import { NgModule } from '@angular/core';
import { AlertModule, CheckBoxModule, LayoutModule, PopoverModule, TabsModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { JsEqualityRoutingModule } from './js-equality-routing.module';
import { JsEqualityComponent } from './js-equality.component';

@NgModule({
  imports: [AlertModule, CheckBoxModule, LayoutModule, PopoverModule, TabsModule, SharedModule, JsEqualityRoutingModule],
  declarations: [JsEqualityComponent],
})
export class JsEqualityModule {}
