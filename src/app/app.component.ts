import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { StudentComponent } from './features/components/student/student.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from './features/components/department/department.component';
import { PowerPipe } from './shared/pipes/power.pipe';
import { HomeComponent } from './core/home/home.component';
import { BASE_URL } from './core/auth/base-url.token';
import { environment } from '../environments/environment.development';
import { ReactiveFormComponent } from './features/pages/Forms/reactive-form/reactive-form.component';
import { TmplateFormComponent } from './features/pages/Forms/tmplate-form/tmplate-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    { provide: BASE_URL, useValue: environment.baseUrl } ,

  ],
  imports: [RouterOutlet, HeaderComponent, FooterComponent, StudentComponent, CommonModule, FormsModule, DepartmentComponent, PowerPipe ,HomeComponent, ReactiveFormComponent, TmplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}