import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signin(payload: any): Observable<any>{
    console.log("payload in service : ",payload);
    return this.http.post('http://localhost:8080/api/auth/signin', payload, { withCredentials: true });
  }

  signup(payload: any): Observable<any>{
    return this.http.post('http://localhost:8080/api/auth/signup', payload, { withCredentials: true });
  }

  signout(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/auth/signout', { withCredentials: true } );
  }

  isAdminAndModPermission(): Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/adminAndModPermission', { withCredentials: true });
  }
}
