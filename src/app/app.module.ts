import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// DevUI部分组件依赖angular动画，需要引入animations模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LayoutModule, SplitterModule } from 'ng-devui';
import { DEVUI_LANG, I18nService, ZH_CN } from 'ng-devui/i18n';
import { DevUIGlobalConfig, DevUIGlobalConfigToken } from 'ng-devui/utils';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MenuModule } from './menu/menu.module';
import { AppComponent } from './app.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}

const devui_global_config: DevUIGlobalConfig = { global: { showAnimation: true } };

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    SplitterModule,
    HeaderModule,
    FooterModule,
    MenuModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: DEVUI_LANG, useValue: ZH_CN }, I18nService, { provide: DevUIGlobalConfigToken, useValue: devui_global_config }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
