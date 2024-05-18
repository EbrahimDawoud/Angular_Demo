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
import { BASE_URL_WITH_DEPT } from './core/auth/additional.token';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    { provide: BASE_URL, useValue: 'https://localhost:7041/api/' } ,
    {
      provide: BASE_URL_WITH_DEPT,
      useFactory: appendDeptToBaseUrl, // Factory function to append "dept/"
      deps: [BASE_URL]
    }

  ],
  imports: [RouterOutlet, HeaderComponent, FooterComponent, StudentComponent, CommonModule, FormsModule, DepartmentComponent, PowerPipe ,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
export function appendDeptToBaseUrl(baseUrl: string): string {
  return `${baseUrl}dept/`;
}
