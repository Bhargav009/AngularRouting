import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
      .map((response: Response) => {
        // console.log(response);
        let data = response.json();
        if (data && data.token) {
          localStorage.setItem('token', data.token);
          return true;
        }
        return false;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    return token;
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token)
      return null;
    let jwtHelper = new JwtHelper();
    console.log(jwtHelper.decodeToken(token));
    return new JwtHelper().decodeToken(token);
  }
}

