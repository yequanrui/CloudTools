import { NgModule } from '@angular/core';
import { AddUnitPipe } from './add-unit.pipe';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [AddUnitPipe, SafeUrlPipe],
  imports: [],
  exports: [AddUnitPipe, SafeUrlPipe],
})
export class PipesModule {}
