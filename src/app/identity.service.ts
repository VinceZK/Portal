import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {App, Role, UserBasicInfo} from "./role";
import {Entity, QueryObject} from "jor-angular";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";
import {Message, MessageService, messageType} from "ui-message-angular";
import {msgStore} from "./msgStore";
import {UserList} from "./user";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class IdentityService {
  private originalHost = environment.originalHost;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private router: Router) {
    this.messageService.setMessageStore(msgStore, 'EN');
  }

  /**
   * Logout the system
   */
  logout(): Observable<any> {
    return this.http.delete(this.originalHost + '/api/logout', httpOptions).pipe(
      catchError(this.handleError<any>('Logout')));
  }

  getLogonUser(): Observable<UserBasicInfo> {
    return this.http.get<UserBasicInfo>(this.originalHost + '/api/session', httpOptions).pipe(
      map( userSession => {
        const userInfo = new UserBasicInfo();
        userInfo.userID = userSession['identity']['userBasic']['USER_ID'];
        userInfo.userName = userSession['identity']['userBasic']['USER_NAME'];
        userInfo.displayName = userSession['identity']['userBasic']['DISPLAY_NAME'];
        return userInfo;
      }),
      catchError(this.handleError<any>('getRoleDetail')));
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

  searchUsers(userID: string, userName: string): Observable<UserList[] | Message[]> {
    const queryObject = new QueryObject();
    queryObject.ENTITY_ID = 'person';
    queryObject.RELATION_ID = 'r_user';
    queryObject.PROJECTION = ['USER_ID', 'USER_NAME', 'DISPLAY_NAME', 'LOCK', 'PWD_STATE'];
    queryObject.FILTER = [];
    if (userID) {
      if (userID.includes('*')) {
        userID = userID.replace(/\*/gi, '%');
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
    return this.http.post<string>(
      this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(
       map(instance => {
         return 'INSTANCE_GUID' in instance ?
         {
           INSTANCE_GUID: instance['INSTANCE_GUID'],
           DESCRIPTION: instance['r_role'] ? instance['r_role'][0].DESCRIPTION : ''
         } : instance[0];
       }),
       catchError(this.handleError<any>('getRoleDesc')));
  }

  saveUser(user: Entity): Observable<Entity | Message[]> {
    if (user['INSTANCE_GUID']) {
      return this.http.put<Entity | Message[]>(
        this.originalHost + `/api/entity`, user, httpOptions).pipe(
        catchError(this.handleError<any>('getUserByUserName')));
    } else {
      return this.http.post<Entity | Message[]>(
        this.originalHost + `/api/entity`, user, httpOptions).pipe(
        catchError(this.handleError<any>('getUserByUserName')));
    }
  }

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
