import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]),
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
    console.log(this.reactiveForm.value);
  }
}
