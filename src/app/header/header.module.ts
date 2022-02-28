import { NgModule } from '@angular/core';
import { DropDownModule, RadioModule, SearchModule, ToggleModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { GithubBtnModule } from '@components/github-btn';
import { HeaderComponent } from './header.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';

@NgModule({
  imports: [DropDownModule, RadioModule, SearchModule, ToggleModule, SharedModule, GithubBtnModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, LanguageSwitchComponent, ThemePickerComponent],
})
export class HeaderModule {}
