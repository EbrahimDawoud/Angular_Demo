import { Component } from '@angular/core';
import { DeptServiceService } from '../../services/dept-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-edit.component.html',
  styleUrl: './department-edit.component.css'
})
export class DepartmentEditComponent {
    
    department = { id: 0, name: '', description: ''};
    id:number = 0;
    constructor( public deptService:DeptServiceService,private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        
    }
    save(): void {
        this.deptService.update(this.id, this.department);
    }
    


}
