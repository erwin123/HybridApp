import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { AccountService } from './account.service';

import { ACCOUNTS } from '../mock-login'
import { Account } from '../models/account';


@Injectable()
export class AuthdataService {
  private loginUrl = 'https://reqres.in/api/login';  // URL to web api
  acc : Account;
  accArr : Account[];
  constructor(private http: Http, private httpClient: HttpClient, private accService: AccountService) { }


  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json'); 
  }

  loginMockService(username: string, password: string){
    /*
    this.accService.loginAccount()
    .subscribe(res => {
      if (res) {
        this.acc = res.find(acc => acc.username === username && acc.password === password);
        console.log(this.acc);
        return this.acc;
      }
    },
    err => {
      return err;
    });
    */
    return this.accService.loginAccount2();
   
  }

  loginMock(username: string, password: string) {
    let result = of(ACCOUNTS.find(acc => acc.username === username && acc.password === password));
    result.subscribe(val=>this.acc = val);
    return this.acc;
  }

  login(username: string, password: string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http
      .post(this.loginUrl, { email: username, password: password },{ headers: headers })
      //.map(res =>res.json());
      .map(res => {
        // login successful if there's a jwt token in the response
        if (res) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(res));
        }

        return res;
    });
      
  }
 
  logout() {
    localStorage.removeItem('currentUser');
  }
}