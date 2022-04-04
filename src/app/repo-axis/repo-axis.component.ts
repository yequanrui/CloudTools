import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TimeAxisData } from 'ng-devui';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'repo-axis',
  templateUrl: './repo-axis.component.html',
  styleUrls: ['./repo-axis.component.scss'],
})
export class RepoAxisComponent implements OnInit {
  showLoading = false;
  userName = 'yequanrui';
  repoAxisTemplate: TimeAxisData = {
    model: 'template', // 可选，模型
    direction: 'horizontal', // 可选，设置时间轴方向
    horizontalAlign: 'left', // 可选，仅当direction为horizontal时，设置内容对齐方式
    list: [], // 可选，列表数据
  };

  constructor(private translate: TranslateService, private apiService: ApiService) {}

  ngOnInit() {
    this.getRepoList();
  }

  getRepoList(userName = this.userName) {
    if (!userName) {
      return;
    }
    this.showLoading = true;
    this.apiService.getRepos(userName).subscribe({
      next: (res) =>
        (this.repoAxisTemplate.list = res
          ? res.map((repo, index) => {
              const axis = {
                text: repo.name,
                dotColor: 'var(--devui-success)',
                lineStyle: { style: 'dashed' },
                data: {
                  ...repo,
                  status: this.translate.instant('repoAxis.archived'),
                  color: 'var(--devui-danger)',
                  backgroundColor: 'rgba(255, 230, 230, 0.2)',
                  position: index % 2 === 0 ? 'top' : 'bottom',
                },
              };
              return axis;
            })
          : []),
      complete: () => (this.showLoading = false),
    });
  }
}
