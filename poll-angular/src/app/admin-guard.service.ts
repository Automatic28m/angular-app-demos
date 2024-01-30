import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, concatMap, map, of, switchMap, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

interface User {
  id: string;
  username: string;
  email: string;
  // Add other properties as needed
}

@Injectable({
  providedIn: 'root'
})

export class AdminGuardService implements CanActivate {

  constructor(private apiService: ApiService, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.authService.isAdminAndModPermission().pipe(
      map(() => {
        return true; // or return this.allowed; if you have additional logic
      }),
      catchError((error) => {
        alert('You have no permission!');
        return of(false);
      })
    );
  }
}
