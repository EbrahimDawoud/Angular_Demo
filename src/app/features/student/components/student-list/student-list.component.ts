import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StdService } from '../../services/std-service.service';
import { StdDto } from '../../models/StudentDTO';
import { GenericSerService } from '../../../../shared/services/generic-ser.service';
import { BASE_URL } from '../../../../core/auth/base-url.token';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule, RouterModule],
  providers:[
    {
      provide: BASE_URL,useValue:"Student"
    },
    GenericSerService
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  
  // students: Student[] = [  ];
  students:StdDto[]=[];

  constructor(public stdSrvice:GenericSerService<StdDto>) {
  }
  ngOnInit(): void {
    this.stdSrvice.getAll().subscribe(data=>this.students=data);
  }


  // deleteStudent(id: number) {
  //   if(confirm('Are you sure you want to delete this student?')){}
  //     this.students = this.students.filter(student => student.id !== id);
  // }
  // std:Student=new Student(4,'Ebrahim',20,'','');
  // addStudent() {
  //   if(this.std.name=='' || this.std.email=='' )
  //   {
  //     alert("Please fill all fields");
  //     return;
  //   }
  //   else{
  //     if(this.std.id<=0){
  //       alert("Please enter a valid id");
  //       return;
  //     }
  //     if(this.students.find(s=>s.id==this.std.id)!=null)
  //     {
  //       alert("This id already exists");
  //       return;
  //     }
  //     if(this.std.name.length<3)
  //     {
  //       alert("Please enter a valid name with at least 3 characters");
  //       return;
  //     }

  //     if(this.std.age<=0)
  //     {
  //       alert("Please enter a valid age");
  //       return;
  //     }
     
  //      if(this.std.email.indexOf('@')==-1 || this.std.email.indexOf('.')==-1)
  //     {
  //       alert("Please enter a valid email");
  //       return;
  //     }
      
  //   }
  //   this.students.push({ ...this.std });
  // }
  

}
