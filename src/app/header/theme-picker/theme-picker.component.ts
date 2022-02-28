import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from 'ng-devui/theme';

declare global {
  interface Window {
    devuiThemeService: ThemeService;
    devuiThemes: { [themeName: string]: Theme };
    devuiCurrentTheme: string;
  }
}


@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
})
export class ThemePickerComponent implements OnInit {
  themeService!: ThemeService;
  themes!: { [themeName: string]: Theme };
  theme!: string;
  largeFontTheme!: Theme;
  fontSize: 'normal' | 'large' = 'normal';
  themeMode: 'light' | 'dark' = 'light';
  themePrefix: 'devui' | 'green' | string = 'devui';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.themeService = window.devuiThemeService;
      this.themes = window.devuiThemes;
      this.theme = window.devuiCurrentTheme;
    }
    this.themePrefix = this.getThemePrefix();
    this.themeMode = this.themes[this.theme]?.isDark ? 'dark' : 'light';
    this.cdr.detectChanges();
  }

  getThemePrefix() {
    return this.theme.split('-')[0] !== 'devui' && this.theme.split('-')[0] !== 'green' ? 'devui' : this.theme.split('-')[0];
  }

  themesChange() {
    this.theme = `${this.themePrefix}-${this.themeMode}-theme`;
    this.themeService && this.themeService.applyTheme(this.themes[this.theme]);
  }
}
