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

  /**
   * to be redefined
   * Get a role detail information from backend based on an authenticated user
   * @returns {Observable<Role>}
   */
  getRoleDetail(): Observable<Role> {
     return this.http.get<Role>(this.roleUrl);
  }

  /**
   * to be redefined
   * Fuzzy search APPs based on a search term
   * @param {string} term
   * @returns {Observable<App[]>}
   */
  searchApp(term: string): Observable<App[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<App[]>(this.roleAppUrl + `/?name=${term}`);
  }

  /**
   * to be redefined
   * Get an APP detail based on a routeLink
   * @param {string} routeLink
   * @returns {Observable<App>}
   */
  getApp(routeLink: string): Observable<App> {
    return this.http.get<App>(this.roleAppUrl + `/?routeLink=${routeLink}`);
  }
}
