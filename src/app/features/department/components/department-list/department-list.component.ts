import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DeptServiceService } from '../../services/dept-service.service';
import { Department } from '../../models/Department';
import { Router, RouterModule } from '@angular/router';
import { BASE_URL } from '../../../../core/auth/base-url.token';
import { GenericSerService } from '../../../../shared/services/generic-ser.service';
import { DeptDto } from '../../models/Dept';
export function createDeptUrl(baseUrl: string): string {
  return `${baseUrl}dept/`;
}
@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: 'DEPT_URL',
      useFactory: createDeptUrl,
      deps: [BASE_URL]
    },
    {
      provide: GenericSerService,
      useClass: GenericSerService
    }
  ],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})

export class DepartmentListComponent {
  
  departments:DeptDto[] = [];
  constructor(
     public router: Router,
     @Inject('DEPT_URL') private deptUrl: string,
     public genSer: GenericSerService<DeptDto>
  ) { }
  ngOnInit(): void {
    console.log(this.deptUrl)
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
