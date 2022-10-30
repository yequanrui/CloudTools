import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { NowcoderTestRoutingModule } from './nowcoder-test-routing.module';
import { NowcoderTestComponent } from './nowcoder-test.component';
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
    NowcoderTestRoutingModule,
  ],
  declarations: [NowcoderTestComponent],
})
export class NowcoderTestModule {}
