import { Injectable } from '@angular/core';
import { Department } from '../models/Department';
@Injectable({
  providedIn: 'root'
})
export class DeptServiceService {
  
 private departments: Department[] = [
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
  constructor() { }
  // load: () => Department[] = () => {
  //   return this.departments;
  // }

  load():Department[]
  {
    return this.departments;
  }
  add(dept: Department): void {
    // dept.id = +uuid();
    this.departments.push(dept);
  }
  delete(id:number): void {
    this.departments = this.departments.filter(d => d.id !== id);
  }
  update(id:number, dept:Department){
    this.departments = this.departments.map((dep, index) => {
      if(dep.id === id){
        return dept;
      }
      return dep;
    })
    console.log(this.departments)
  }
  getById(id:number|string) {
    return this.departments.find(d => d.id == id);
  }


 
}
