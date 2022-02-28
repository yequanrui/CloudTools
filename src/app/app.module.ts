import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
// DevUI部分组件依赖angular动画，需要引入animations模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LayoutModule } from 'ng-devui';
import { DevUIGlobalConfig, DevUIGlobalConfigToken } from 'ng-devui/utils/globalConfig';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}

const devui_global_config: DevUIGlobalConfig = {
  global: {
    showAnimation: false,
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],

  providers: [
    {
      provide: DevUIGlobalConfigToken,
      useValue: devui_global_config,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
