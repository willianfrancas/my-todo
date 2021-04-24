import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackAlertComponent } from './shared/feedback-alert/feedback-alert.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeedbackAlertComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    AuthModule.forRoot(),
    AppRoutingModule,
    MainModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  ,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
