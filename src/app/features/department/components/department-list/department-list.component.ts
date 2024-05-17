import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DeptServiceService } from '../../services/dept-service.service';
import { Department } from '../../models/Department';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
  
  departments:Department[] = [];

  constructor(
     private deptService: DeptServiceService
  ) { }
  ngOnInit(): void {
    this.departments = this.deptService.load();
  }


}
