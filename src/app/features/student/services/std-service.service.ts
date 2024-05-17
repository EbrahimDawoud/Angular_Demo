import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StdService {

  constructor() { 
    this.students = [
      {
        id: 1,
        name: 'Selmy',
        age: 20,
        email: 'EbrahimOsamaDawou@gmail.com',
        Dept: 'OS'
      },
      {
        id: 2,
        name: 'Hema',
        age: 21,
        email: ' ',
        Dept: 'PD'
      },
      {
        id: 3,
        name: 'Mohamed',
        age: 22,
        email: 'jasdhfkj@example.com',
        Dept: 'CS'
      }
    ]
  }

  students: Student[] = [];

  getAll():Student[]{
    return this.students;
  }
  getById(id:number):Student|undefined{
    return this.students.find(s=>s.id==id);
  }
  add(std:Student){
    this.students.push(std);
  }
  edit(id:number|null, std:Student|undefined){
     this.students.map((Std, id)=>{
      if(std?.id == id){
        return std;
      }
      return Std;
     })
  }
  delete(id:number){
    this.students.filter((std)=>std.id != id);
  }
}
