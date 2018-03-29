import {Component, OnInit, ViewChild} from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {of} from "rxjs/observable/of";
import {RoleService} from "./role.service";
import {HistoryService} from "./history.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(SideMenuComponent)
  private sideMenu: SideMenuComponent;

  isCollapsed = false;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private roleService: RoleService,
              private historyService: HistoryService
              ) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => this.roleService.getApp(route.snapshot.url.join('/')))
      .subscribe(event => {
        if (event[0]) {
          // TODO: flag current app in orange.
          this.sideMenu.activateApp(event[0]);
          this.historyService.addHistory(event[0]);
        }
      });
  }

  onCollapse() {
    this.isCollapsed = this.sideMenu.collapse();
  }
}
