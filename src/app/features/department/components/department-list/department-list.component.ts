import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DeptServiceService } from '../../services/dept-service.service';
import { Department } from '../../models/Department';
import { Router, RouterModule } from '@angular/router';
import { BASE_URL } from '../../../../core/auth/base-url.token';
import { GenericSerService } from '../../../../shared/services/generic-ser.service';
import { DeptDto } from '../../models/Dept';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [
   { provide: BASE_URL, useValue: 'dept' },
   GenericSerService
  ],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})

export class DepartmentListComponent {
  
  departments:DeptDto[] = [];
  constructor(
     public router: Router,
     public genSer: GenericSerService<DeptDto>
  ) { }
  ngOnInit(): void {
     this.genSer.getAll().subscribe(d=>{
      this.departments = d;
     })
     this.genSer.getById(10).subscribe(d=>{console.log(d)})
  }
  Add(){
    this.router.navigate(['deptList/add']);
  }
  deleteDept(id:number){
    if(confirm('Are you sure you want to delete this department?'))
    {
      this.genSer.delete(id).subscribe(d=>console.log(d))
    }
    
  }


}
