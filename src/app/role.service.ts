import { Injectable } from '@angular/core';
import { Role, App } from './role';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class RoleService {
  private roleUrl = 'api/role';
  private roleAppUrl = 'api/apps';

  constructor(private http: HttpClient) { }

  getRoleDetail(): Observable<Role> {
     return this.http.get<Role>(this.roleUrl);
  }

  searchApp(term: string): Observable<App[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<App[]>(this.roleAppUrl + `/?name=${term}`);
  }

  getApp(routeLink: string): Observable<App> {
    return this.http.get<App>(this.roleAppUrl + `/?routeLink=${routeLink}`);
  }
}
