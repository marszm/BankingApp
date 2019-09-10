import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
