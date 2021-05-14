import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
import { HttpRequestInterceptor } from './shared/helpers/http-request.interceptor';


const maskConfig: Partial<IConfig> = {
  validation: false
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
