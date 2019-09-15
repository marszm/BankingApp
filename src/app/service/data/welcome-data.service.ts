import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean {

  constructor(public message: string){}

}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) {}

  exexuteHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  exexuteHelloWorldBeanServicePathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization :basicAuthHeaderString
    //   })

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/${name}`
      // {headers}
      );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'admin';
  //   let password = 'admin';
  //   let basicAuthHeaderString ='basic'+window.btoa(username+':'+password);
  //   return basicAuthHeaderString;
  // }
}
