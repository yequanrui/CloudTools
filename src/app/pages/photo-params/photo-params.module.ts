import { NgModule } from '@angular/core';
import { AlertModule, DataTableModule, LayoutModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { PipesModule } from '@pipes/pipes.module';
import { PhotoParamsRoutingModule } from './photo-params-routing.module';
import { PhotoParamsComponent } from './photo-params.component';

@NgModule({
  imports: [AlertModule, DataTableModule, LayoutModule, SharedModule, PipesModule, PhotoParamsRoutingModule],
  declarations: [PhotoParamsComponent],
})
export class PhotoParamsModule {}
