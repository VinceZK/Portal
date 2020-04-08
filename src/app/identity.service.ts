import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {App, Role} from "./role";
import {Entity, QueryObject} from "jor-angular";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";
import {Message, MessageService, messageType} from "ui-message-angular";
import {Session} from 'ui-logon-angular';
import {UserList} from "./user";
import {formatDate} from "@angular/common";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class IdentityService {
  private originalHost = environment.originalHost;
  private session: Session;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private router: Router) {
  }

  setSession( data: any ) {
    this.session = <Session>data;
  }

  get Session(): Session {
    if (this.session) { return this. session; }
    const defaultSession = new Session();
    defaultSession.USER_ID = 'DH001';
    defaultSession.LANGUAGE = 'EN';
    return defaultSession;
  }

  get CurrentTime(): string {
    return formatDate( new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US' );
  }

  /**
   * Get a role detail information from backend based on an authenticated user
   * @returns {Observable<Role>}
   */
  getRoleDetail(): Observable<Role[]> {
    return this.http.post<Role[]>(this.originalHost + `/api/function/getRoleDetail`, {}, httpOptions).pipe(
      catchError(this.handleError<any>('getRoleDetail')));
  }

  /**
   * Get an APP detail based on a routeLink
   * @param {string} routeLink
   * @returns {Observable<App>}
   */
  getApp(routeLink: string): Observable<App> {
    if (routeLink.substr(0, 13) === '/external-app') {
      return this.http.post<Entity>(this.originalHost + `/api/entity/instance`,
        {RELATION_ID: 'app', APP_ID: routeLink.substr(14)}, httpOptions).pipe(
        map(appEntity => {
          const app: App = new App;
          if (Array.isArray(appEntity)) { appEntity = appEntity[0]; } // Could return an array, like message or multiple entities
          if (appEntity['ENTITY_ID']) { // It returns entity instance, rather than an error message;
            app.name = appEntity['app'][0]['NAME'];
            app.routeLink = routeLink;
          }
          return app;
        }),
        catchError(this.handleError<any>('getApp')));
    } else {
      return this.http.post<Entity>(this.originalHost + `/api/entity/instance`,
        {RELATION_ID: 'app', ROUTE_LINK: routeLink}, httpOptions).pipe(
        map(appEntity => {
          const app: App = new App;
          if (Array.isArray(appEntity)) { appEntity = appEntity[0]; }
          if (appEntity['ENTITY_ID']) {
            app.name = appEntity['app'][0]['NAME'];
            app.routeLink = appEntity['app'][0]['ROUTE_LINK'];
          }
          return app;
        }),
        catchError(this.handleError<any>('getApp')));
    }
  }

  /**
   * Get an APP's routelink from its appID
   * @param appID
   */
  getAppRouteLink(appID: string): Observable<string> {
    return this.http.post<string>(this.originalHost + `/api/entity/instance`,
      {RELATION_ID: 'app', APP_ID: appID}, httpOptions).pipe(
      map(appEntity => {
        if (Array.isArray(appEntity)) { appEntity = appEntity[0]; } // Could return an array, like message or multiple entities
        if (appEntity['ENTITY_ID']) { // It returns entity instance, rather than an error message;
          return appEntity['app'][0]['ROUTE_LINK'];
        } else {
          return 'appNotFound';
        }
      }),
      catchError(this.handleError<any>('getAppRouteLink')));
  }

  /**
   * Search Users by USER_ID and USER_NAME.
   * Return a list with columns USER_ID, USER_NAME, DISPLAY_NAME, LOCK, and PWD_STATE
   * Wildcard search is supported using '*' or '%'.
   **/
  searchUsers(userID: string, userName: string): Observable<UserList[] | Message[]> {
    const queryObject = new QueryObject();
    queryObject.ENTITY_ID = 'person';
    queryObject.RELATION_ID = 'r_user';
    queryObject.PROJECTION = ['USER_ID', 'USER_NAME', 'DISPLAY_NAME', 'LOCK', 'PWD_STATE'];
    queryObject.FILTER = [];
    if (userID) {
      if (userID.includes('*') || userID.includes('%')) {
        queryObject.FILTER.push({FIELD_NAME: 'USER_ID', OPERATOR: 'CN', LOW: userID});
      } else {
        queryObject.FILTER.push({FIELD_NAME: 'USER_ID', OPERATOR: 'EQ', LOW: userID});
      }
    }
    if (userName) {
      if (userName.includes('*')) {
        userName = userName.replace(/\*/gi, '%');
        queryObject.FILTER.push({FIELD_NAME: 'USER_NAME', OPERATOR: 'CN', LOW: userName});
      } else {
        queryObject.FILTER.push({FIELD_NAME: 'USER_NAME', OPERATOR: 'EQ', LOW: userName});
      }
    }
    queryObject.SORT = ['USER_ID'];
    return this.http.post<any>(this.originalHost + `/api/query`, queryObject, httpOptions).pipe(
      catchError(this.handleError<any>('searchObjects')));
  }

  /**
   * Get detail information of a user from USER_ID
   * Return information in Relations: r_user, r_employee, r_email, r_address, and r_personalization.
   * The relationship to user role is also inquired with information in Relation: r_role
   **/
  getUserDetail(userID: string): Observable<Entity | Message[]> {
    const pieceObject = {
      ID: { RELATION_ID: 'r_user', USER_ID: userID},
      piece: {RELATIONS: ['r_user', 'r_employee', 'r_email', 'r_address', 'r_personalization'],
              RELATIONSHIPS: [
                {
                  RELATIONSHIP_ID: 'rs_user_role',
                  PARTNER_ENTITY_PIECES: { RELATIONS: ['r_role'] }
                }]
      }
    };
    return this.http.post<Entity | Message[]>(
      this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(
      catchError(this.handleError<any>('getUserDetail')));
  }

  /**
   * Get user by User ID, only return information in Relations: r_user
   * This service call is mainly used to check whether the given USER_ID already exists
   **/
  getUserByUserID(userID: string): Observable<Entity | Message[]> {
    const pieceObject = {
      ID: { RELATION_ID: 'r_user', USER_ID: userID},
      piece: {RELATIONS: ['r_user']}
    };
    return this.http.post<Entity | Message[]>(
      this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(
      catchError(this.handleError<any>('getUserByUserID')));
  }

  getUserByUserName(userName: string): Observable<Entity | Message[]> {
    const pieceObject = {
      ID: { RELATION_ID: 'r_user', USER_NAME: userName},
      piece: {RELATIONS: ['r_user']}
    };
    return this.http.post<Entity | Message[]>(
      this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(
      catchError(this.handleError<any>('getUserByUserName')));
  }

  getRoleDesc(roleID: string): Observable<{}> {
    const pieceObject = {
      ID: { RELATION_ID: 'r_role', NAME: roleID},
      piece: {RELATIONS: ['r_role']}
    };
    return this.http.post<{}>(
      this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(
       map(instance => {
         return 'INSTANCE_GUID' in instance ?
         {
           INSTANCE_GUID: instance['INSTANCE_GUID'],
           DESCRIPTION: instance['r_role'] ? instance['r_role'][0]['DESCRIPTION'] : ''
         } : instance[0];
       }),
       catchError(this.handleError<any>('getRoleDesc')));
  }

  /**
   * Save an entity to DB
   * A generic entity in JSON is given. If the JSON has attribute INSTANCE_GUID, it calls PUT, otherwise, POST
   **/
  saveUser(user: Entity): Observable<Entity | Message[]> {
    if (user['INSTANCE_GUID']) {
      return this.http.put<Entity | Message[]>(
        this.originalHost + `/api/entity`, user, httpOptions).pipe(
        catchError(this.handleError<any>('saveUser')));
    } else {
      return this.http.post<Entity | Message[]>(
        this.originalHost + `/api/entity`, user, httpOptions).pipe(
        catchError(this.handleError<any>('saveUser')));
    }
  }

  /**
   * Delete an entity from DB
   * A GUID of entity instance is given. After the call, the instance will be deleted permanently
   **/
  deleteUser(userGUID: string): Observable<null | Message[]> {
    return this.http.delete<null | Message[]>(this.originalHost + `/api/entity/instance/` + userGUID, httpOptions).pipe(
      catchError(this.handleError<any>('deleteUser'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 401) {
        this.messageService.addMessage('EXCEPTION', 'NOT_AUTHENTICATED_OR_SESSION_EXPIRED', messageType.Exception);
      } else {
        this.messageService.addMessage('EXCEPTION', 'GENERIC', messageType.Exception, operation, error.message);
      }

      this.router.navigate(['errors']);
      console.error(operation, error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
