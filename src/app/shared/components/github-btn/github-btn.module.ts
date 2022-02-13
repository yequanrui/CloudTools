import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { GithubBtnComponent } from './github-btn.component';

@NgModule({
  imports: [SharedModule],
  exports: [GithubBtnComponent],
  declarations: [GithubBtnComponent],
})
export class GithubBtnModule {}
