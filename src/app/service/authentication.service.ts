import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {

    if(username === 'admin' && password === 'admin') {
      console.log('before'+this.isUserLoggedIn());
      sessionStorage.setItem('authenticationUser', username);
      console.log('after'+this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticationUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticationUser');
  }

}
