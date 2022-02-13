import { NgModule } from '@angular/core';
import { DropDownModule, RadioModule, SearchModule } from 'ng-devui';
import { SharedModule } from '../shared/shared.module';
import { GithubBtnModule } from '../shared/components';
import { HeaderComponent } from './header.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';

@NgModule({
  imports: [DropDownModule, RadioModule, SearchModule, SharedModule, GithubBtnModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, LanguageSwitchComponent, ThemePickerComponent],
})
export class HeaderModule {}
