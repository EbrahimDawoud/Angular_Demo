import { Component } from '@angular/core';
import { Department } from '../../models/Department';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DeptServiceService } from '../../services/dept-service.service';

@Component({
  selector: 'app-department-add',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './department-add.component.html',
  styleUrl: './department-add.component.css'
})
export class DepartmentAddComponent {
  dept:Department = {id:0,name:'', description:''};
  
  constructor(
    public deptService: DeptServiceService,
    public router: Router) {}
    
  addDept(){
    
    if(this.dept.name.trim()=='' || this.dept.description.trim()=='' )
      {
        alert("Please fill all fields");
        return;
      }
      else{
        if(this.dept.id<=0){
          alert("Please enter a valid id");
          return;
        }
        if(this.deptService.getById(this.dept.id)!=null)
        {
          alert("This id already exists");
          return;
        }
        if(this.dept.name.trim().length<3)
        {
          alert("Please enter a valid name with at least 3 characters");
          return;
        }
        if(this.dept.description.trim().length<10)
        {
          alert("Please enter a valid description with at least 10 characters");
          return;
        }
  
      this.deptService.add({...this.dept});
      this.router.navigate(['deptList']);
        
      }
  }
  
}
