import { Injectable } from '@angular/core';
import { Department } from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class DeptServiceService {
 private departments: Department[] = [];
  constructor() { 
    this.departments = [
      { id: 1, name: 'IT', description: 'Information Technology' },
      { id: 2, name: 'HR', description: 'Human Resources' },
      { id: 3, name: 'FIN', description: 'Finance' },
      { id: 4, name: 'SALES', description: 'Sales' },
      { id: 5, name: 'MARKETING', description: 'Marketing' },
    ];
  }
  // load: () => Department[] = () => {
  //   return this.departments;
  // }


  load():Department[]
  {
    return this.departments;
  }
  add(dept: Department): void {
    this.departments.push(dept);
  }
  delete(id:number): void {
    this.departments = this.departments.filter(d => d.id !== id);
  }
  update(id:number, dept:Department){
    this.departments = this.departments.map((dep, index) => {
      if(dep.id === id){
        console.log(dept);
        return dept;
      }
      return dep;
    })
    console.log(this.departments  )
  }
  getById(id:number) {
    return this.departments.find(d => d.id === id);
  }


 
}
