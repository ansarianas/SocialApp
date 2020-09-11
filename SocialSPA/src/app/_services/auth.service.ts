import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseURL = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) { }

  login(model: any): Observable<any> {
    return this.http.post(this.baseURL + 'login', model).pipe(map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    }));
  }

  register(model: any): Observable<any> {
    return this.http.post(this.baseURL + 'register', model);
  }
}
