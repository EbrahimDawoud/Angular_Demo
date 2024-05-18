import { Component, OnDestroy } from '@angular/core';
import { Department } from '../../models/Department';
import { DeptServiceService } from '../../services/dept-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { BASE_URL } from '../../../../core/auth/base-url.token';
import { GenericSerService } from '../../../../shared/services/generic-ser.service';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [RouterModule, RouterLink],
  providers: [
    {
      provide: BASE_URL,
      useValue: 'https://localhost:7041/api/Dept/' 
    },
    GenericSerService
  ],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent implements OnDestroy {

  sub:Subscription|null = null;
  constructor( 
    private deptService: DeptServiceService,
    private route: ActivatedRoute 
  ) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  deprtment:Department = { id: 0, name: '', description: ''};
  id:number = 0;
  testId: string="";
  ngOnInit(): void {
    // this.id = (this.route.snapshot.paramMap.get('id')!==null) ? parseInt(this.route.snapshot.paramMap.get('id') || '0') : 0;
    // console.log(this.id);
    this.sub=this.route.params.subscribe(params => {
  
      this.deprtment = this.deptService.getById(params['id']) || { id: 0, name: '', description: ''};

    });
  }





}
