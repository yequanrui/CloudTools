import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'time-axis',
  templateUrl: './time-axis.component.html',
  styleUrls: ['./time-axis.component.scss'],
})
export class TimeAxisComponent implements OnInit {
  repos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.generateTimeline('yequanrui');
  }

  generateTimeline(name: string) {
    this.apiService.getRepos(name).subscribe(
      (res) => (this.repos = res || []),
      (err) => (this.repos = [])
    );
  }
}
