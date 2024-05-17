import { Component } from '@angular/core';
import { Student } from '../../student/models/Student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  // title = 'lab2';
  // isDeleted:boolean=true;
  // EditStd:Student=new Student(1,'',0,'','','','');
  // status:boolean= true;
  // students: Student[] = [
  //   {
  //     id: 1,
  //     name: 'Selmy',
  //     age: 20,
  //     email: 'EbrahimOsamaDawou@gmail.com',
  //     phone: '032432',
  //     address: 'cairo',
  //     Dept: 'OS'
  //   },
  //   {
  //     id: 2,
  //     name: 'Ahmed',
  //     age: 21,
  //     email: ' ',
  //     phone: '032432',
  //     address: 'cairo',
  //     Dept: 'PD'
  //   },
  //   {
  //     id: 3,
  //     name: 'Mohamed',
  //     age: 22,
  //     email: 'jasdhfkj@example.com',
  //     phone: '032432',
  //     address: 'cairo',
  //     Dept: 'CS'
  //   }
  // ];

  constructor() {
  }

  // deleteStudent(id: number) {
  //   this.isDeleted = confirm('Are you sure you want to delete this student?');
  //   if (this.isDeleted)
  //     this.students = this.students.filter(student => student.id !== id);
  // }
  // std:Student=new Student(4,'Ebrahim',20,'','','','');
  // addStudent() {
  //   if(this.std.name=='' || this.std.email=='' || this.std.phone=='' || this.std.address=='' )
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
  // editStudent(id: number) {
  //   this.status = false;
  //   this.students = this.students.map(student => {
  //     if (student.id === id) {
  //       this.EditStd = {...student};
  //       return {
  //        ...student
  //       };
  //     }
  //     return student;
  //   });
  // }
  // updateStudent() {
  //   this.students = this.students.map(student => {
  //     if (student.id === this.EditStd.id) {
  //       return {
  //         ...this.EditStd
  //       };
  //     }
  //     return student;
  //   });
  //   this.status = true;
  // }
  // back(){
  //   this.status=true;
  // }

}
