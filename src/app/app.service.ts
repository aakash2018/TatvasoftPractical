import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  signUp(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users`, data);
  }

  login(data: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users?email=` + data.email + `users?password=` + data.password + ``);
  }

  getAllBlogs(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/blogs`);
  }

  addBlogs(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/blogs`);
  }

  editBlogs(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/blogs`);
  }
  
  deleteBlogs(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/blogs`);
  }
}
