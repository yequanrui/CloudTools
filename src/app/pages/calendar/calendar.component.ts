import { Component, OnInit, ViewChild } from '@angular/core';
import { DatepickerProComponent } from 'ng-devui/datepicker-pro';
import { ICalendar, IHistoryToday } from '@datas/roll';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @ViewChild('datepicker') datepickerPro: DatepickerProComponent;
  format = { default: 'yyyy年MM月dd日', year: 'yyyy', month: 'yyyyMM', day: 'yyyyMMdd' };
  date = new Date();
  calendar: ICalendar;
  histories: IHistoryToday[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCalendar('20231005').subscribe((res) => {
      this.calendar = res;
      this.apiService.getHistoryToday(1).subscribe((res) => (this.histories = res));
    });
  }

  setToday() {
    this.date = new Date();
  }

  clear() {
    this.datepickerPro.clear();
  }

  onChange(date) {
    console.log(date);
  }
}
