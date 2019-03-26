import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(
    private http: Http,
    private authService: AuthService) {
  }

  getOrders() {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    let options = new RequestOptions({ headers: headers });
    return this.http.get('/api/orders', options)
      .map(response => response.json());
  }
}
