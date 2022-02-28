import { NgModule } from '@angular/core';
import { DropDownModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { LanguageSwitchComponent } from './language-switch.component';

@NgModule({
  imports: [DropDownModule, SharedModule],
  exports: [LanguageSwitchComponent],
  declarations: [LanguageSwitchComponent],
})
export class LanguageSwitchModule {}
