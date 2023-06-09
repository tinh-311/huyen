import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';

import { ToolbarModule } from 'primeng/toolbar';
import { LoginComponent } from './login/login.component';
import { HeaderLoginComponent } from './login/header-login/header-login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BirthdayComponent } from './birthday/birthday.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HeaderLoginComponent,
    RegisterComponent,
    HomeComponent,
    BirthdayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
