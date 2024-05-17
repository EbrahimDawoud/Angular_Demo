import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DeptServiceService } from '../../services/dept-service.service';
import { Department } from '../../models/Department';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
  
  departments:Department[] = [];

  constructor(
     private deptService: DeptServiceService,
     public router: Router
  ) { }
  ngOnInit(): void {
    this.departments = this.deptService.load();
  }
  Add(){
    this.router.navigate(['deptList/add']);
  }
  deleteDept(id:number){
    if(confirm('Are you sure you want to delete this department?'))
    {
      this.deptService.delete(id);
      this.departments = this.deptService.load();
    }
    
  }


}
