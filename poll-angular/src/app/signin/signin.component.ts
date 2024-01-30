import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  constructor(private authService: AuthService, private router: Router) { }

  reactiveForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })

  loading: boolean = false;

  onSubmit() {
    this.loading = true;
    // console.log(this.reactiveForm.value);
    this.authService.signin(this.reactiveForm.value).subscribe(
      (data) => {
        alert('Welcome ' + this.reactiveForm.value.username);
      },
      (error) => {
        console.error('Signin error:', error);
        alert('Username or Password may not correct! please try again.');
        this.loading = false;
      },() => {
        window.location.reload();
        // this.loading = false;
      }
    );
  }
}
