import { Component } from '@angular/core';
import { HelloService } from '../../../shared/services/hello.service';

@Component({
  selector: 'app-serv-comp2',
  standalone: true,
  imports: [],
  templateUrl: './serv-comp2.component.html',
  styleUrl: './serv-comp2.component.css'
})
export class ServComp2Component {
  /**
   *
   */
  constructor(public loggerService: HelloService) {
    this.loggerService.log("constructor from serv-comp2");
  }

  log(){
    this.loggerService.log("log from serv-comp2");
}
}
