import { Routes } from '@angular/router';
import { StudentComponent } from './features/components/student/student.component';
import { DepartmentComponent } from './features/components/department/department.component';
import { ParentComponent } from './features/pages/parent/parent.component';
import { Component } from '@angular/core';
import { ChildComponent } from './features/pages/child/child.component';
import { DepartmentListComponent } from './features/department/components/department-list/department-list.component';
import { StudentListComponent } from './features/student/components/student-list/student-list.component';
import { DepartmentDetailsComponent } from './features/department/components/department-details/department-details.component';
import { DepartmentEditComponent } from './features/department/components/department-edit/department-edit.component';

export const routes: Routes = [
    {path: 'student', component: StudentComponent},
    {path: 'department', component: DepartmentComponent},
    {path:"parent", component: ParentComponent},
    {path:"child", component: ChildComponent},
    {path:"deptList", component: DepartmentListComponent},
    {path:"studentList", component: StudentListComponent},
    {path:"detpDetails/:id", component: DepartmentDetailsComponent},
    {path:"deptEdit/:id", component: DepartmentEditComponent},

    


];
