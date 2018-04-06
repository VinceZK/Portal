import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {App} from "../role";
import {HistoryService} from "../history.service";

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {
  @Output() onCollapse = new EventEmitter<boolean>();
  navHistory: App[];
  currentApp: App;
  dropdown = {
    historyOpen: false,
    notificationOpen: false,
    preferenceOpen: false
  };
  constructor(private history: HistoryService) { }

  ngOnInit() {
    this.history.currentHistoryObserver.subscribe(history => this.navHistory = history );
    this.history.currentAppObserver.subscribe(currentApp => this.currentApp = currentApp );
  }

  @HostListener('document:mouseup', ['$event', 'dropdown'])
  mouseupDocument($event, dropdown): void {
    if ($event.srcElement.className !== 'dk-nav-toggle'){
      dropdown.historyOpen = false;
      dropdown.notificationOpen = false;
      dropdown.preferenceOpen = false;
    }
  }

  collapse() {
    this.onCollapse.emit();
  }

  toggleHistoryDropdown() {
    this.dropdown.historyOpen = !this.dropdown.historyOpen;
    this.dropdown.notificationOpen = false;
    this.dropdown.preferenceOpen = false;
  }

  toggleNotificationDropdown() {
    this.dropdown.notificationOpen = !this.dropdown.notificationOpen;
    this.dropdown.historyOpen = false;
    this.dropdown.preferenceOpen = false;
  }

  togglePreferenceOpen() {
    this.dropdown.preferenceOpen = !this.dropdown.preferenceOpen;
    this.dropdown.historyOpen = false;
    this.dropdown.notificationOpen = false;
  }
}
