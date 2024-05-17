import { Component } from '@angular/core';
import { Department } from '../../models/Department';
import { DeptServiceService } from '../../services/dept-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent {

  constructor( 
    private deptService: DeptServiceService,
    private route: ActivatedRoute // Inject the ActivatedRoute module
  ) {}

  deprtment:Department = { id: 0, name: '', description: ''};
  id:number = 0;
  testId: string="";
  ngOnInit(): void {
    // this.id = (this.route.snapshot.paramMap.get('id')!==null) ? parseInt(this.route.snapshot.paramMap.get('id') || '0') : 0;
    // console.log(this.id);
    this.route.params.subscribe(params => {
      this.testId = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', this.testId);
      this.deprtment = this.deptService.getById(+this.testId) || { id: 0, name: '', description: ''};

    });
  }





}
