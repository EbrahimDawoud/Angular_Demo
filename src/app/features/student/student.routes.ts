import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentAddComponent } from './components/student-add/student-add.component';

export const studentRoutes: Routes = [
    { path: '', component: StudentListComponent },
    { path: 'details/:id', component: StudentDetailsComponent },
    { path: 'edit/:id', component: StudentEditComponent },
    { path: 'add', component: StudentAddComponent },
    { path: 'list', component: StudentListComponent}
];
