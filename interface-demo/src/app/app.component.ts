import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface FormData {
  name: string;
  favNumber: number;
  country: string;
  subscribe: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, DoCheck {
  title = 'reactive-form-demo';
  reactiveForm: FormGroup;
  formData: FormData;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]),
      favNumber: new FormControl(null, Validators.pattern(/^-?\d*(\.\d+)?$/)), // Add Validators.pattern to enforce number
      country: new FormControl(null,
        [
          Validators.required
        ]),
      subscribe: new FormControl(true),
    });
  }

  ngDoCheck() {
    console.log(this.reactiveForm.value);
  }

  onSubmit() {
    this.formData = this.reactiveForm.value;
    console.log("Submitted data : ", this.formData);
  }
}
