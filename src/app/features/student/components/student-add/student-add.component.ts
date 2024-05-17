import { Component } from '@angular/core';
import { Student } from '../../models/Student';
import { Subscription } from 'rxjs';
import { StdService } from '../../services/std-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
  std:Student=new Student(1,"",1,"","");
  constructor(public studentService:StdService,private route:Router){
     
  }
  addStudent(){
    this.studentService.add(this.std);
    this.route.navigate(['student/list']);
  }
}
