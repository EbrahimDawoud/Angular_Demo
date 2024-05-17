import { Component } from '@angular/core';
import { DeptServiceService } from '../../services/dept-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-edit',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './department-edit.component.html',
  styleUrl: './department-edit.component.css'
})
export class DepartmentEditComponent {
    
    department = { id: 0, name: '', description: ''};
    id:number = 0;
    constructor( public deptService:DeptServiceService,private route: ActivatedRoute, private router : Router) { }
    ngOnInit(): void {
        // console.log(this.route.snapshot.params["id"])
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        // this.id = +this.route.snapshot.params['id'];
        
        this.department = this.deptService.getById(+this.id)||{id:0,name:'',description:'asdf'};        
    }
    save(): void {
        if(this.department.name.trim()=='' || this.department.description.trim()=='' )
            {
              alert("Please fill all fields");
              return;
            }
            else{
            //   if(this.department.id<=0){
            //     alert("Please enter a valid id");
            //     return;
            //   }
            //   if(this.deptService.getById(this.department.id)!=null)
            //   {
            //     alert("This id already exists");
            //     return;
            //   }
              if(this.department.name.trim().length<3)
              {
                alert("Please enter a valid name with at least 3 characters");
                return;
              }
              //test by regex if the name has any special charachter
                if(!/^[a-zA-Z0-9]*$/.test(this.department.name.trim()))
                {
                    alert("Please enter a valid name with only letters and numbers");
                    return;
                }
                if(this.department.description.trim().length<10)
                    {
                    alert("Please enter a valid description with at least 10 characters");
                    return;
                    } 
                    if (!/^[a-zA-Z\s]*$/.test(this.department.description.trim())) 
                      {
                      console.log(this.department.description)
                        alert("Please enter a valid description with only letters");
                        return;
                    }   
              
        
        this.deptService.update(this.id, this.department);
         this.router.navigateByUrl('/deptList');
    }
    


}
}