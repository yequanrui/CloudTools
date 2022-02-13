import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'repo-axis',
  templateUrl: './repo-axis.component.html',
  styleUrls: ['./repo-axis.component.scss'],
})
export class RepoAxisComponent implements OnInit {
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
