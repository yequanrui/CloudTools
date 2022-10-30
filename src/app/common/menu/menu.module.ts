import { NgModule } from '@angular/core';
import { AccordionModule, BadgeModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [AccordionModule, BadgeModule, SharedModule],
  exports: [MenuComponent],
  declarations: [MenuComponent],
})
export class MenuModule {}
