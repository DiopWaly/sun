import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DossierComponent } from './dossier/dossier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import {AgmCoreModule} from '@agm/core';
import { ResultatComponent } from './resultat/resultat.component';
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
import { TestComponent } from './test/test.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MenuComponent,
    FooterComponent,
    DossierComponent,
    ResultatComponent,
    TestComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwMP4QNMrB3z7ozZAMKOb1sQpk5eKJLFg',
      libraries: ['places']
    }),
    NgxBootstrapConfirmModule,
    HttpClientModule,
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
