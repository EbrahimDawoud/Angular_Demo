import { Component } from '@angular/core';
import { ServComp2Component } from '../serv-comp2/serv-comp2.component';

@Component({
  selector: 'app-serv-comp',
  standalone: true,
  imports: [ServComp2Component],
  templateUrl: './serv-comp.component.html',
  styleUrl: './serv-comp.component.css'
})
export class ServCompComponent {
  log(){
    console.log("log from serv-comp");
  }
}
