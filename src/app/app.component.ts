import {Component, OnInit, ViewChild} from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {RoleService} from "./role.service";
import {HistoryService} from "./history.service";
import {filter, map, mergeMap} from "rxjs/operators";


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
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      filter(route => route.outlet === 'primary'),
      map(route => {
        let url = '';
        while (route.firstChild) {
          route = route.firstChild;
          if ( route.snapshot.url.length > 0 ) {
            url = url ? url + '/' + route.snapshot.url.join('/') : route.snapshot.url.join('/');
          }
        }
        return url;
      }),
      mergeMap(url => this.roleService.getApp(url)))
      .subscribe(event => {
        if (event[0]) {
          this.sideMenu.activateApp(event[0]);
          this.historyService.addHistory(event[0]);
        }
      });
  }

  onCollapse() {
    this.isCollapsed = this.sideMenu.collapse();
  }
}
