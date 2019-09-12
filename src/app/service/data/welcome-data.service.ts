import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }

  exexuteHelloWorldBeanService() {
    return console.log("exexuteHelloWorldBeanService");
  }

}
