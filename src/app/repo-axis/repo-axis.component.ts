import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TimeAxisData } from 'ng-devui';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'repo-axis',
  templateUrl: './repo-axis.component.html',
  styleUrls: ['./repo-axis.component.scss'],
})
export class RepoAxisComponent implements OnInit, AfterViewInit {
  @ViewChild('yearShow') yearShow!: TemplateRef<any>;
  showLoading = false;
  userName = 'yequanrui';
  repoAxisTemplate: TimeAxisData = {
    model: 'template', // 可选，模型
    direction: 'horizontal', // 可选，设置时间轴方向
    position: 'left', // 可选，仅当direction为vertical时定义时间参数位置
    horizontalAlign: 'left', // 可选，仅当direction为horizontal时，设置内容对齐方式
    list: [], // 可选，列表数据
  };
  timeAxisTemplate = {
    direction: 'horizontal',
    model: 'template',
    horizontalAlign: 'left',
    list: [
      {
        text: 'hello',
        dotColor: 'var(--devui-success)',
        lineStyle: { style: 'dashed' },
        extraElement: {},
        data: { title: '第四季度交付版本1.0', date: '2019/11/01', status: '已发布', color: 'var(--devui-success)', position: 'bottom' },
      },
      {
        text: 'world',
        dotColor: 'var(--devui-danger)',
        lineStyle: { style: 'dashed' },
        data: {
          title: '第一季度交付版本2.0',
          date: '2020/03/01',
          status: '未开始',
          color: 'var(--devui-danger)',
          backgroundColor: 'rgba(255, 230, 230, 0.2)',
          position: 'top',
        },
      },
      {
        text: 'nihao',
        dotColor: 'var(--devui-warning)',
        lineStyle: { style: 'dashed' },
        data: { title: '第二季度交付版本1.0', date: '2020/05/01', status: '进行中', color: 'var(--devui-warning)', position: 'bottom' },
      },
      {
        text: 'DevUI',
        dotColor: 'var(--devui-danger)',
        lineStyle: { style: 'dashed' },
        data: { title: '第三季度交付版本1.0', date: '2020/09/01', status: '未开始', color: 'var(--devui-danger)', position: 'top' },
      },
      {
        text: 'Awesome',
        dotColor: 'var(--devui-success)',
        lineStyle: { style: 'dashed' },
        data: { title: '第三季度交付版本1.0', date: '2020/09/01', status: '已发布', color: 'var(--devui-success)', position: 'bottom' },
      },
    ],
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getRepoList();
  }

  ngAfterViewInit() {
    this.timeAxisTemplate.list[0].extraElement = this.yearShow;
  }

  getRepoList(userName = this.userName) {
    if (!userName) {
      return;
    }
    this.showLoading = true;
    this.apiService.getRepos(userName).subscribe({
      next: (res) => (this.repoAxisTemplate.list = res),
      complete: () => (this.showLoading = false),
    });
  }
}
