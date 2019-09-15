import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpIntercepterAuthService} from './service/http/http-intercepter-auth.service';



@NgModule({
  declarations: [AppComponent, WelcomeComponent, LoginComponent, ErrorComponent, ListTodosComponent, MenuComponent, FooterComponent, LogoutComponent, TodoComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterAuthService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
