import { Component } from '@angular/core';
import { StdService } from '../../services/std-service.service';
import { Subscription } from 'rxjs';
import { Student } from '../../models/Student';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css'
})
export class StudentEditComponent {
  std:Student|undefined=undefined;
  EditStd:Student|undefined=undefined;
  id:number|null= null;
  sub:Subscription|null=null;
  constructor(public studentService:StdService,private route:ActivatedRoute){
    this.sub = this.route.params.subscribe((param)=>{
      this.id = +param['id'];
      this.EditStd = this.studentService.getById(this.id);
      console.log(this.id)
    }) 
  }
  updateStudent(){
    this.studentService.edit(this.id,this.EditStd);
  }
}
