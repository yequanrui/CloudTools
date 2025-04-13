import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import {
  AlertModule,
  ButtonModule,
  InputNumberModule,
  LayoutModule,
  SelectModule,
  TagsModule,
  TextareaModule,
  TextInputModule,
} from 'ng-devui';
import { NowcoderTestComponent } from './nowcoder-test.component';

@NgModule({
  imports: [
    AlertModule,
    ButtonModule,
    InputNumberModule,
    LayoutModule,
    SelectModule,
    TagsModule,
    TextareaModule,
    TextInputModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: NowcoderTestComponent }]),
  ],
  declarations: [NowcoderTestComponent],
})
export class NowcoderTestModule {}
