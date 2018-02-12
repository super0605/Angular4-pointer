import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Observable
} from 'rxjs/Observable';
import {
  of
} from 'rxjs/observable/of';
import {
  catchError,
  map,
  tap
} from 'rxjs/operators';

import { environment } from './../../environments/environment';
/**
 * @description
 * @class
 */
@Injectable()
export class UserService {
  public token : string;
  public httpOptions: Object;
  private apiUrl = environment.apiUrl;
  
  constructor(
    private http: HttpClient
  ) {}

  getUser() {
    const url = `${this.apiUrl}user`;
    this.token = localStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
    };
    return this.http.get(url, this.httpOptions)
      .pipe(
        tap((res) => {
          return res;
        }),
        catchError((err: any) => Observable.throw({ status: err.status, ...err.error }))
      );
  }

  getServices() {
    const url = `${this.apiUrl}services`;
    this.token = localStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
    };
    return this.http.get(url, this.httpOptions)
      .pipe(
        tap((res) => {
          return res;
        }),
        catchError((err: any) => Observable.throw({ status: err.status, ...err.error }))
      );
  }

}
