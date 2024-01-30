import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.scss'
})
export class SignoutComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.signout().subscribe(
      (response) => {
        console.log(response);
        alert(response.message);
        this.router.navigate(['/signin']);
        // location.reload();
      },
      (error) => {
        console.error(error);
        alert('Something went wrong! please try again.');
      }
    );
  }

  ngOnDestroy(): void {
    location.reload();
  }
}
