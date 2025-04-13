import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '@pipes/pipes.module';
import { SharedModule } from '@shared';
import { AlertModule, DataTableModule, LayoutModule } from 'ng-devui';
import { PhotoParamsComponent } from './photo-params.component';

@NgModule({
  imports: [
    AlertModule,
    DataTableModule,
    LayoutModule,
    SharedModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: PhotoParamsComponent }]),
  ],
  declarations: [PhotoParamsComponent],
})
export class PhotoParamsModule {}
