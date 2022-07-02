import { NgModule } from '@angular/core';
import { CheckBoxModule, PopoverModule, TabsModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { JsEqualityRoutingModule } from './js-equality-routing.module';
import { JsEqualityComponent } from './js-equality.component';

@NgModule({
  imports: [CheckBoxModule, PopoverModule, TabsModule, SharedModule, JsEqualityRoutingModule],
  declarations: [JsEqualityComponent],
})
export class JsEqualityModule {}
