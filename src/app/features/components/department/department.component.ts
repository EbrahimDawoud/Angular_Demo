import { Component } from '@angular/core';
import { Department } from '../../department/models/Department';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
status:boolean= true;
  departments: Department[] = [
    {
      id: 1,
      name: 'OS',
      description: 'Operating System'
    },
    {
      id: 2,
      name: 'PD',
      description: 'Professional Development'
    },
    {
      id: 3,
      name: 'CS',
      description: 'Computer Science'
    }
  ];
  EditDept:Department=new Department(1,'OS','Operating System');
  dept:Department=new Department(4,'AI','Artificial Intelligence');
  constructor() {
  }
  addDept(){
    
    if(this.dept.name=='' || this.dept.description=='' )
      {
        alert("Please fill all fields");
        return;
      }
      else{
        if(this.dept.id<=0){
          alert("Please enter a valid id");
          return;
        }
        if(this.departments.find(s=>s.id==this.dept.id)!=null)
        {
          alert("This id already exists");
          return;
        }
        if(this.dept.name.length<3)
        {
          alert("Please enter a valid name with at least 3 characters");
          return;
        }
        if(this.dept.description.length<10)
        {
          alert("Please enter a valid description with at least 10 characters");
          return;
        }
  
      this.departments.push({...this.dept});
        
      }
  }
  back(){
    this.status=true;
  }
  deleteDept(id: number) {  
    if(confirm('Are you sure you want to delete this department?'))
    this.departments = this.departments.filter(dept => dept.id !== id);
  }
  editDept(id:number){
    this.status=false;
    this.departments = this.departments.map(dept => {
      if (dept.id === id) {
        this.EditDept = {...dept};
        return {
         ...dept
        };
      }
      return dept;
    });      
  }
  updateStudent() {
    this.departments = this.departments.map(dept => {
      if (dept.id === this.EditDept.id) {
        return {
          ...this.EditDept
        };
      }
      return dept;
    });
    this.status=true;
  }    
}