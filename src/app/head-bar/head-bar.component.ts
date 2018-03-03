import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  constructor(private history: HistoryService) { }

  ngOnInit() {
    this.history.currentHistoryObserver.subscribe(history => this.navHistory = history );
    this.history.currentAppObserver.subscribe(currentApp => this.currentApp = currentApp );
  }

  collapse() {
    this.onCollapse.emit();
  }

  clickLink(app: App): void {
    this.history.addHistory(app);
  }
}
