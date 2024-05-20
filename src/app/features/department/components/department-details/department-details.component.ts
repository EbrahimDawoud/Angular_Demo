import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { BASE_URL } from '../../../../core/auth/base-url.token';
import { GenericSerService } from '../../../../shared/services/generic-ser.service';
import { DeptDto } from '../../models/Dept';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [RouterModule, RouterLink],
  providers: [
    {
      provide: BASE_URL,
      useValue: 'Dept' 
    },
    GenericSerService
  ],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent implements OnDestroy {

  sub:Subscription|null = null;
  constructor( 
    private genSer: GenericSerService<DeptDto>,
    private route: ActivatedRoute 
  ) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  deprtment:DeptDto|null =null;
  id:number = 0;
  testId: string="";
  ngOnInit(): void {
    // this.id = (this.route.snapshot.paramMap.get('id')!==null) ? parseInt(this.route.snapshot.paramMap.get('id') || '0') : 0;
    // console.log(this.id);
    this.sub=this.route.params.subscribe(params => {
  
      this.genSer.getById(params['id']).subscribe(d=>{this.deprtment= d})

    });
  }





}
