import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FormModule, SearchModule, TagsModule, TimeAxisModule } from 'ng-devui';
import { RepoAxisComponent } from './repo-axis.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormModule,
    SearchModule,
    TagsModule,
    TimeAxisModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: RepoAxisComponent }]),
  ],
  declarations: [RepoAxisComponent],
})
export class RepoAxisModule {}
