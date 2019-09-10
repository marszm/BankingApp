import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'invalid credentials'
  invalidLogin = false



  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {

    if(this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['welcome'])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }

  }
}
