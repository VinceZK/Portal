import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {App} from "./role";

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  apps: App[] = [];
  isCollapsed = false;
  private isCollapsedSubject = new Subject<boolean>();
  isCollapsed$ = this.isCollapsedSubject.asObservable();

  updateIsCollapsed(status: boolean): void {
    this.isCollapsed = status;
    this.isCollapsedSubject.next(this.isCollapsed);
  }

}
