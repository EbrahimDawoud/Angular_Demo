import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  counter:number = 0;
  log(message: string){

    console.log("counter: "+this.counter++ +", log from hello service: " + message);
  }
  constructor() { }
}
