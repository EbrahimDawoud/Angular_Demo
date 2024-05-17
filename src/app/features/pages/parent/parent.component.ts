import { Component, Input, input } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ServCompComponent } from '../serv-comp/serv-comp.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, ServCompComponent],
  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {
  test="hema";
  getvalue(value:string){
    this.test=value;
  }
}
