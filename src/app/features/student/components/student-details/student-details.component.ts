import { Component } from '@angular/core';
import { Student } from '../../models/Student';
import { StdService } from '../../services/std-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  std:Student|undefined=undefined;
  id:number|null= null;
  sub:Subscription|null=null;
  constructor(public studentService:StdService,private route:ActivatedRoute, private routes:Router){
    this.sub = this.route.params.subscribe((param)=>{
      this.std = this.studentService.getById(+param['id']);
    }) 
  }
  back(){
    this.routes.navigate(['student/list']);
  }
}
