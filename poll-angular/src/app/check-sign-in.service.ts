import { ApiService } from './api.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckSignInService implements CanActivate, OnInit{

  constructor(private apiService: ApiService, private router: Router) { }

  isAllow = false;

  ngOnInit(): void {
    alert('check sign in');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.apiService.getUser().pipe(
      map((resp) => {
        // alert('You are already signed in');
        this.router.navigate(['/home']);
        return false;
      }),
      catchError((error) => {
        // alert('No user signed in');
        return of(true);
      })
    )
  }


}
