import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Theme, ThemeService, ThemeServiceFollowSystemOff, ThemeServiceFollowSystemOn } from 'ng-devui/theme';
import { Subscription } from 'rxjs';
import { LargeFontSize } from './theme-data-more';

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
export class ThemePickerComponent implements OnInit, OnDestroy {
  sub: Subscription | undefined;
  themeService!: ThemeService;
  themes!: { [themeName: string]: Theme };
  theme!: string;
  themeMode: 'light' | 'dark' = 'light';
  themePrefix: 'devui' | 'green' | string = 'devui';
  themePrefersColorScheme!: boolean;
  largeFontSizeMode = false;
  largeFontTheme!: Theme;
  fontSize: 'normal' | 'large' = 'normal';
  activeThemeType: string | number = 'devuiTheme';
  advancedThemeList = [
    { value: 'infinity', url: 'assets/img/infinity.png' },
    { value: 'sweet', url: 'assets/img/sweet.png' },
    { value: 'provence', url: 'assets/img/provence.png' },
    { value: 'deep', url: 'assets/img/deep.png' },
    { value: 'galaxy', url: 'assets/img/galaxy.png' },
  ];
  currentAdvancedTheme = 'infinity';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.themeService = window.devuiThemeService;
      this.themes = window.devuiThemes;
      this.theme = window.devuiCurrentTheme;
    }
    this.themePrefix = this.getThemePrefix();
    this.themeMode = this.themes[this.theme]?.isDark ? 'dark' : 'light';
    this.largeFontSizeMode = this.theme === 'devui-large-font-theme';
    this.largeFontTheme = this.themes['devui-large-font-theme'];
    this.themePrefersColorScheme = this.getThemePrefersColorSchemeOn();
    this.initTheme();
    this.cdr.detectChanges();
    this.themePrefersColorScheme && this.themePrefersColorSchemeChange(true);
  }

  ngOnDestroy() {
    this.themePrefersColorScheme && ThemeServiceFollowSystemOff(this.sub);
  }

  getThemePrefix() {
    return this.theme.split('-')[0] !== 'devui' && this.theme.split('-')[0] !== 'green' ? 'devui' : this.theme.split('-')[0];
  }

  initTheme() {
    if (this.checkInitThemeType()) {
      this.activeThemeType = 'advancedTheme';
      this.currentAdvancedTheme = this.getUserCustomTheme().split('-')[0];
      this.advancedThemeChange(this.currentAdvancedTheme);
    } else {
      this.activeThemeType = 'devuiTheme';
      this.themesChange();
    }
  }

  checkInitThemeType() {
    return this.advancedThemeList.some((item) => this.getUserCustomTheme().startsWith(item.value));
  }

  getUserCustomTheme() {
    return localStorage.getItem('user-custom-theme') || '';
  }

  themePrefixChange(prefix: string) {
    this.themePrefix = prefix;
    this.themePrefersColorScheme ? this.themePrefersColorSchemeChange(true) : this.themesChange();
  }

  themesChange() {
    if (this.largeFontSizeMode) {
      this.largeFontTheme.data = {
        ...this.themes[`${this.themePrefix}-${this.themeMode}-theme`].data,
        ...LargeFontSize,
      };
      this.theme = `devui-large-font-theme`;
    } else {
      this.theme = `${this.themePrefix}-${this.themeMode}-theme`;
    }
    this.themeService && this.themeService.applyTheme(this.themes[this.theme]);
  }

  advancedThemeChange(theme: string) {
    this.currentAdvancedTheme = theme;
    const validTheme = `${theme}-theme`;
    this.themeService.applyTheme(this.themes[validTheme]);
  }

  themeFontSizeChange() {
    if (typeof window !== 'undefined' && this.largeFontSizeMode) {
      this.largeFontTheme.data = { ...this.themes[window['devuiCurrentTheme']].data, ...LargeFontSize };
      this.theme = `devui-large-font-theme`;
    } else {
      this.theme = `${this.themePrefix}-${this.themeMode}-theme`;
    }
    this.themeService.applyTheme(this.themes[this.theme]);
  }

  themeFontSizeSchemeChange(event: boolean) {
    if (event) {
      this.sub && ThemeServiceFollowSystemOff(this.sub);
      this.sub = ThemeServiceFollowSystemOn({
        lightThemeName: `${this.themePrefix}-light-large-theme`,
        darkThemeName: `${this.themePrefix}-dark-large-theme`,
      });
      this.setThemeFontSizeScheme('on');
    } else {
      ThemeServiceFollowSystemOff(this.sub);
      this.setThemeFontSizeScheme('off');
      this.sub = undefined;
      this.themesChange();
    }
  }

  themePrefersColorSchemeChange(event: boolean) {
    if (event) {
      this.sub && ThemeServiceFollowSystemOff(this.sub);
      this.sub = ThemeServiceFollowSystemOn({
        lightThemeName: `${this.themePrefix}-light-theme`,
        darkThemeName: `${this.themePrefix}-dark-theme`,
      });
      this.setThemePrefersColorScheme('on');
    } else {
      ThemeServiceFollowSystemOff(this.sub);
      this.setThemePrefersColorScheme('off');
      this.sub = undefined;
      this.themesChange();
    }
  }

  getThemeFontSizeSchemeOn() {
    return localStorage.getItem('devuiThemeFontSizeScheme') === 'on';
  }

  setThemeFontSizeScheme(value: 'on' | 'off') {
    localStorage.setItem('devuiThemeFontSizeScheme', value);
  }

  getThemePrefersColorSchemeOn() {
    return localStorage.getItem('devuiThemePrefersColorScheme') === 'on';
  }

  setThemePrefersColorScheme(value: 'on' | 'off') {
    localStorage.setItem('devuiThemePrefersColorScheme', value);
  }

  activeTabChange(tab: string | number) {
    tab === 'advancedTheme' ? this.advancedThemeChange(this.currentAdvancedTheme) : this.themesChange();
  }
}
