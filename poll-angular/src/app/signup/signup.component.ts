import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private authService: AuthService) { }

  reactiveForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
  })

  onSubmit() {
    if (this.reactiveForm.value.password != this.reactiveForm.value.confirmPassword) {
      alert('Confirm password is not correct! please try again.');
    } else {
      this.authService.signup(this.reactiveForm.value).subscribe(
        (data) => {
          console.log('Signup success:', data);
          alert('Sign up successfully, please sign in.');
        },
        (error) => {
          console.error('Signup error:', error);
          alert('Something went wrong! please try again');
        }
      );
    }
  }
}
