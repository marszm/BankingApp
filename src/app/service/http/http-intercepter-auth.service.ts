import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterAuthService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let username = 'admin';
    let password = 'admin';
    let basicAuthHeaderString ='basic'+window.btoa(username+':'+password);
    req = req.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
        }
      });
    return next.handle(req);
  }
}
