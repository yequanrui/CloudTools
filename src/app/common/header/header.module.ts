import { NgModule } from '@angular/core';
import { DCommonModule, SearchModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { GithubBtnModule } from '@components/github-btn';
import { LanguageSwitchModule } from './language-switch/language-switch.module';
import { ThemePickerModule } from './theme-picker/theme-picker.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [DCommonModule, SearchModule, SharedModule, GithubBtnModule, LanguageSwitchModule, ThemePickerModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class HeaderModule {}
