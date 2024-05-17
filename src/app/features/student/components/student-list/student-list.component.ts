import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StdService } from '../../services/std-service.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  
  students: Student[] = [  ];

  constructor(public stdSrvice:StdService) {
  }
  ngOnInit(): void {
    this.students=this.stdSrvice.getAll()
  }


  deleteStudent(id: number) {
    if(confirm('Are you sure you want to delete this student?')){}
      this.students = this.students.filter(student => student.id !== id);
  }
  std:Student=new Student(4,'Ebrahim',20,'','');
  addStudent() {
    if(this.std.name=='' || this.std.email=='' )
    {
      alert("Please fill all fields");
      return;
    }
    else{
      if(this.std.id<=0){
        alert("Please enter a valid id");
        return;
      }
      if(this.students.find(s=>s.id==this.std.id)!=null)
      {
        alert("This id already exists");
        return;
      }
      if(this.std.name.length<3)
      {
        alert("Please enter a valid name with at least 3 characters");
        return;
      }

      if(this.std.age<=0)
      {
        alert("Please enter a valid age");
        return;
      }
     
       if(this.std.email.indexOf('@')==-1 || this.std.email.indexOf('.')==-1)
      {
        alert("Please enter a valid email");
        return;
      }
      
    }
    this.students.push({ ...this.std });
  }
  

}
