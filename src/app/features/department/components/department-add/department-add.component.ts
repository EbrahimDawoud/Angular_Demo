import { Component } from '@angular/core';
import { Department } from '../../models/Department';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DeptServiceService } from '../../services/dept-service.service';
import { GenericSerService } from '../../../../shared/services/generic-ser.service';
import { DeptDto } from '../../models/Dept';
import { BASE_URL } from '../../../../core/auth/base-url.token';

@Component({
  selector: 'app-department-add',
  standalone: true,
  imports: [FormsModule, RouterModule],
  providers: [
    { provide: BASE_URL, useValue: 'dept' },
    GenericSerService
   ],
  templateUrl: './department-add.component.html',
  styleUrl: './department-add.component.css'
})
export class DepartmentAddComponent {
  dept:DeptDto = {dept_Id:0,dept_Name:'', noofStudents:0};
  
  constructor(
    // public deptService: DeptServiceService,
    public router: Router,
    private genSer:GenericSerService<DeptDto>
  ) {}
    
  addDept(){
    
    if(this.dept.dept_Name.trim()=='' )
      {
        alert("Please fill all fields");
        return;
      }
      else{
        if(this.dept.dept_Id<=0){
          alert("Please enter a valid id");
          return;
        }
        try{
        this.genSer.getById(this.dept.dept_Id).subscribe(d=>{
          if(d!=null)
            {
              alert("This id already exists");
              return;
            }       
          })
        }
        catch(e){
          console.log(e)
        }
        if(this.dept.dept_Name.trim().length<3)
        {
          alert("Please enter a valid name with at least 3 characters");
          return;
        }
       
        this.genSer.add(this.dept).subscribe(d=>console.log(d))

  
      this.router.navigate(['deptList']);
        
      }
  }
  
}
