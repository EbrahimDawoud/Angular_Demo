import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input("sName") name:string="Aly";
  @Output() onNameChange:EventEmitter<string>=new EventEmitter<string>();
  lName:string="Hussain";
save(value:string){
  console.log(value);
this.lName=value;
  console.log("Save button is clicked");
  this.onNameChange.emit(this.lName);

}
}
