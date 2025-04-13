import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import { ButtonModule, DatepickerProModule, LayoutModule, PopoverModule, TagsModule } from 'ng-devui';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    ButtonModule,
    DatepickerProModule,
    LayoutModule,
    PopoverModule,
    TagsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: CalendarComponent }]),
  ],
  declarations: [CalendarComponent],
})
export class CalendarModule {}
