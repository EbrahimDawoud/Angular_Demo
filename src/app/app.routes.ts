import { Routes } from '@angular/router';
import { StudentComponent } from './features/components/student/student.component';
import { DepartmentComponent } from './features/components/department/department.component';
import { ParentComponent } from './features/pages/parent/parent.component';
import { Component } from '@angular/core';
import { ChildComponent } from './features/pages/child/child.component';

import { DepartmentDetailsComponent } from './features/department/components/department-details/department-details.component';
import { DepartmentEditComponent } from './features/department/components/department-edit/department-edit.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';
import { DepartmentAddComponent } from './features/department/components/department-add/department-add.component';
import { LoginComponent } from './core/login/login.component';
import { canLoginGuard } from './core/guard/can-login.guard';
import { AccessDeniedComponent } from './core/access-denied/access-denied.component';

export const routes: Routes = [

    {path:"home" , component: HomeComponent },
    {path:"", redirectTo:"home", pathMatch:"full"},
   
    {path:'student', component: StudentComponent},
    {path:'department', component: DepartmentComponent},
    {path:"login", component: LoginComponent},
    {path:"parent", component: ParentComponent},
    {path:"child", component: ChildComponent},
    {path:"deptList", loadChildren:()=> import('./features/department/department.routes').then(m=>m.deptRoutes)},
    {path:"student", loadChildren:()=> import('./features/student/student.routes').then(m=>m.studentRoutes),canActivate:[canLoginGuard]},
    {path:"detpDetails/:id", component: DepartmentDetailsComponent},
    {path:"deptEdit/:id", component: DepartmentEditComponent},
    {path:"deptList/add", component: DepartmentAddComponent},
    {path:"denied", component:AccessDeniedComponent},
    {path:"**", component:NotFoundComponent},

];
