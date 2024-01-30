import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  // Poll API

  getPolls(): Observable<any> {
    return this.http.get('http://localhost:8080/api/poll/allPoll', { withCredentials: true });
  }

  getPoll(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/poll/pollById/${id}`, { withCredentials: true });
  }

  savePoll(payload: any): Observable<any> {
    const choicesArray = payload.choices.map((choice: { title: string }) => ({ title: choice }));

    const postData = {
      title: payload.title,
      userId: payload.userId,
      choices: choicesArray,
    }

    console.log(postData);

    return this.http.post('http://localhost:8080/api/poll/createPoll',
      postData, { withCredentials: true });
  }

  checkVoted(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/poll/checkVotedPoll/${id}`, { withCredentials: true });
  }

  votePoll(payload: any): Observable<any> {
    return this.http.post(`http://localhost:8080/api/poll/votePoll`, payload, { withCredentials: true });
  }

  getPollResult(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/poll/GetPollResult/${id}`, { withCredentials: true });
  }

  getCountPolls(): Observable<any> {
    return this.http.get('http://localhost:8080/api/poll/countPolls', { withCredentials: true });
  }

  getCountPollLogs(): Observable<any> {
    return this.http.get('http://localhost:8080/api/poll/countPollLogs', { withCredentials: true });
  }

  getPollByUserId(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/poll/pollByUserId/${id}`, { withCredentials: true });
  }
  
  deletePoll(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/poll/deletePoll/${id}`, { withCredentials: true });
  }


  //User API

  getUser(): Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/getUserData', { withCredentials: true });
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/getUsers', { withCredentials: true });
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/auth/getUserById/${id}`, { withCredentials: true });
  }

  getUsersByRole(roleName: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/auth/getUsersByRole/${roleName}`, { withCredentials: true });
  }

  getCountUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/api/user/countUsers', { withCredentials: true });
  }

  getCountAdmins(): Observable<any> {
    return this.http.get('http://localhost:8080/api/user/countAdmins', { withCredentials: true });
  }

  getCountMods(): Observable<any> {
    return this.http.get('http://localhost:8080/api/user/countMods', { withCredentials: true });
  }

  updateUser(payload: any): Observable<any> {
    return this.http.put(`http://localhost:8080/api/user/UpdateUser`, payload, { withCredentials: true });
  }

  updateUserRoles(userId: string, payload: any): Observable<any> {
    return this.http.put(`http://localhost:8080/api/auth/updateUserRoles/${userId}`, payload, { withCredentials: true });
  }
}
