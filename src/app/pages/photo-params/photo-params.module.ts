import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AlertModule, DataTableModule, LayoutModule } from 'ng-devui';
import { PhotoParamsRoutingModule } from './photo-params-routing.module';
import { PhotoParamsComponent } from './photo-params.component';

@NgModule({
  imports: [AlertModule, DataTableModule, LayoutModule, SharedModule, PhotoParamsRoutingModule],
  declarations: [PhotoParamsComponent],
})
export class PhotoParamsModule {}
