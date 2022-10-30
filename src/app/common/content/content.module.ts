import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';

@NgModule({
  imports: [SharedModule, ContentRoutingModule],
  declarations: [ContentComponent],
})
export class ContentModule {}
