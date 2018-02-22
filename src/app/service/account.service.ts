import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Account } from '../models/account';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountService {
  private accountUrl = 'api/account';  // URL to web api

  constructor(
    private httpClient: HttpClient,private http: Http
  ) { }

  
  loginAccount () : Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.accountUrl)
      .pipe(
        tap(res => console.log('fetched heroes')),
        catchError(this.handleError('loginAccount', []))
      );
  }

  loginAccount2 () : Observable<any>{
    
     return this.http.get(this.accountUrl).map(res =>res.json());

} 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
