import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = ''
  errorMessage = 'invalid credentials'
  invalidLogin = false
  constructor() { }

  ngOnInit() {
  }

  handleLogin() {

    if(this.username === 'admin' && this.password === 'admin') {
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }

  }
}
