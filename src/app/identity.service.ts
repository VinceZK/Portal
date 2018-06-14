import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class IdentityService {
  private logoutUrl = 'http://localhost:3001/api/logout';

  constructor(private http: HttpClient) { }

  logout(): Observable<any> {
    console.log('begin logout');
    return this.http.delete(this.logoutUrl, httpOptions).pipe(
      catchError(this.handleError<any>('Logout')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
