import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'] // Fix styleUrl to styleUrls
})
export class ReactiveFormComponent {
  constructor(private form: FormBuilder) { }
  
  hema = this.form.group({
    userName: [
      '', 
      [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.hema.invalid) {
      return;
    }
    console.log(this.hema.value);
  }
}
