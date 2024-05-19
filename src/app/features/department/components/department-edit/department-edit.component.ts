import { Component } from '@angular/core';
import { DeptServiceService } from '../../services/dept-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BASE_URL } from '../../../../core/auth/base-url.token';
import { GenericSerService } from '../../../../shared/services/generic-ser.service';
import { DeptDto } from '../../models/Dept';

@Component({
  selector: 'app-department-edit',
  standalone: true,
  imports: [FormsModule, RouterModule],
  providers:[
    GenericSerService
  ],
  templateUrl: './department-edit.component.html',
  styleUrl: './department-edit.component.css'
})
export class DepartmentEditComponent {
    
    department:DeptDto = {dept_Id:1, dept_Name:"kasdfjlk",noofStudents:2};
    id:number = 0;
    constructor( public deptService:GenericSerService<DeptDto>,private route: ActivatedRoute, private router : Router) { }
    ngOnInit(): void {
        // console.log(this.route.snapshot.params["id"])
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.deptService.getById(+this.id).subscribe((d=>{console.log(d)
              this.department= d;
            }))        

        });
        
    }
    save(): void {
      this.deptService.update(this.department, this.department.dept_Id).subscribe(d=>console.log(d))
    //     if(this.department.name.trim()=='' || this.department.description.trim()=='' )
    //         {
    //           alert("Please fill all fields");
    //           return;
    //         }
    //         else{
    //         //   if(this.department.id<=0){
    //         //     alert("Please enter a valid id");
    //         //     return;
    //         //   }
    //         //   if(this.deptService.getById(this.department.id)!=null)
    //         //   {
    //         //     alert("This id already exists");
    //         //     return;
    //         //   }
    //           if(this.department.name.trim().length<3)
    //           {
    //             alert("Please enter a valid name with at least 3 characters");
    //             return;
    //           }
    //           //test by regex if the name has any special charachter
    //             if(!/^[a-zA-Z0-9]*$/.test(this.department.name.trim()))
    //             {
    //                 alert("Please enter a valid name with only letters and numbers");
    //                 return;
    //             }
    //             if(this.department.description.trim().length<10)
    //                 {
    //                 alert("Please enter a valid description with at least 10 characters");
    //                 return;
    //                 } 
    //                 if (!/^[a-zA-Z\s]*$/.test(this.department.description.trim())) 
    //                   {
    //                   console.log(this.department.description)
    //                     alert("Please enter a valid description with only letters");
    //                     return;
    //                 }   
              
        
    //     this.deptService.update(this.id, this.department);
    //      this.router.navigateByUrl('/deptList');
    // }
    


}
}