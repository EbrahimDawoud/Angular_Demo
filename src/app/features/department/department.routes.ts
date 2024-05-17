import { Routes } from "@angular/router";
import { DepartmentListComponent } from "./components/department-list/department-list.component";
import { DepartmentDetailsComponent } from "./components/department-details/department-details.component";
import { canLoginGuard } from "../../core/guard/can-login.guard";




export const deptRoutes: Routes = [

    {path:"", component: DepartmentListComponent,children:[
        {path:"details/:id", component: DepartmentDetailsComponent},

    ] ,canActivate:[canLoginGuard]},
]