import { Injectable } from '@angular/core';
import {App} from "./role";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class HistoryService {
  private navHistory: App[] = [];
  private historySource = new BehaviorSubject<App[]>([]);
  private currentApp = new BehaviorSubject<App>(<App>{name: 'Home'});
  private readonly NUM_OF_HISTORY = 10;
  currentHistoryObserver = this.historySource.asObservable();
  currentAppObserver = this.currentApp.asObservable();

  constructor() { }

  addHistory(app: App) {
    const idx = this.navHistory.indexOf(app);
    if ( idx > -1 ) {
      this.navHistory.splice(idx, 1);
    }
    this.navHistory.push(app);
    if (this.navHistory.length > this.NUM_OF_HISTORY ) {
      this.navHistory.shift();
    }
    this.historySource.next(this.navHistory);
    this.currentApp.next(app);
  }
}
