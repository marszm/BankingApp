import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  exexuteAuthenticationService(username, password) {

    let basicAuthHeaderString ='basic'+window.btoa(username+':'+password);
    let headers = new HttpHeaders({
      Authorization :basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticationUser',username);
            sessionStorage.setItem('token',basicAuthHeaderString);
            return data;
          }
        )
    );
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedToken())
    return sessionStorage.getItem('token');
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticationUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticationUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticationUser');
    sessionStorage.removeItem('token');
  }

}
export class AuthenticationBean {


  constructor(public message: string) {
  }
}
