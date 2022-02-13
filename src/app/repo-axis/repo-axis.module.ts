import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoAxisRoutingModule } from './repo-axis-routing.module';
import { RepoAxisComponent } from './repo-axis.component';

@NgModule({
  imports: [CommonModule, RepoAxisRoutingModule],
  declarations: [RepoAxisComponent],
})
export class RepoAxisModule {}
