import { NgModule } from '@angular/core';
import { FormModule, SearchModule, TagsModule, TimeAxisModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { RepoAxisRoutingModule } from './repo-axis-routing.module';
import { RepoAxisComponent } from './repo-axis.component';

@NgModule({
  imports: [FormModule, SearchModule, TagsModule, TimeAxisModule, SharedModule, RepoAxisRoutingModule],
  declarations: [RepoAxisComponent],
})
export class RepoAxisModule {}
