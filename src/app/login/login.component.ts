import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {BasicAuthenticationService} from '../service/http/basic-authentication.service';

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



  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleJWTAuthLogin() {
  this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).
    subscribe(
      data => {
        this.router.navigate(['welcome',this.username]);
        this.invalidLogin = false;
  },
    error => {
        this.invalidLogin = true;
    }
  )
  }
}
