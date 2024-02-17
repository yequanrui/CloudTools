import { NgModule } from '@angular/core';
import { ButtonModule, DatepickerProModule, LayoutModule, PopoverModule, TagsModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [ButtonModule, DatepickerProModule, LayoutModule, PopoverModule, TagsModule, SharedModule, CalendarRoutingModule],
  declarations: [CalendarComponent],
})
export class CalendarModule {}
