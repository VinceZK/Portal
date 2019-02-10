import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { Role, App } from '../role';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Router} from "@angular/router";
import {Subject} from "rxjs/internal/Subject";
import {Observable} from "rxjs/internal/Observable";
import * as fuzzySort from "fuzzysort";
import {of} from "rxjs";
import {IdentityService} from "../identity.service";
import {MessageService} from "ui-message-angular";
import {ShareService} from "../share.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  private activeRow = null;
  private mouseLocs = [];
  private lastDelayLoc = null;
  private timeoutId = null;
  private rem = 0;
  private searchTerms = new Subject<string>();
  private menuDisplay = true;
  private readonly TOLERANCE = 75;  // bigger = more forgive when entering submenu
  private readonly DELAY = 600;  // ms delay when user appears to be entering submenu

  isCollapsed = false;
  role: Role = new Role;
  apps$: Observable<App[]>;
  searchedApps: App[];
  // apps: App[] = [];

  @ViewChild('sideMenu')
  sideMenu: ElementRef;

  constructor(private identityService: IdentityService,
              private messageService: MessageService,
              private shareService: ShareService,
              private router: Router
              ) {}

  ngOnInit() {
    this.rem = parseInt(window.getComputedStyle(document.head).getPropertyValue('font-size'), 10);
    this.identityService.getRoleDetail().subscribe(roles => this._processRoleData(roles));
    this.shareService.updateIsCollapsed(this.isCollapsed);
    this.apps$ = this.searchTerms.pipe (
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        const results = fuzzySort.go(term, this.shareService.apps, {key: 'name'});
        const returnedApps = [];
        results.forEach(result => returnedApps.push(result.obj));
        return of(returnedApps as App[]);
      })
    );
    this.apps$.subscribe(searchedApps => this.searchedApps = searchedApps );
  }

  _processRoleData(roles): void {
    this.role = roles[0]; // Currently, only support one role per user logon
    if (this.role['msgCat']) {
      this.messageService.clearMessages();
      roles.forEach( msg => this.messageService.add(msg));
      this.router.navigate(['errors']);
    } else {
      this.role.categories.forEach(category => {
        category.height = category.originalHeight = (category.apps.length + 1) * 3 + 2;
        category.active = false;
        category.isSubMenuShow = false;
        category.apps.forEach( app => {
          if (app.isExternal) {
            app.originalRouteLink = app.routeLink;
            app.routeLink = '/external-app/' + app.appID;
          }
          app.active = false;
          this.shareService.apps.push(app);
        });
        if (category.apps.length === 1) {
          category.routeLink = category.apps[0].routeLink;
          category.apps = [];
        }
      });
    }
  }

  searchApp(term: string): void {
    this.searchTerms.next(term);
    this.menuDisplay = !term;
  }

  enterApp($event): void {
    if ($event.keyCode === 13 && this.searchedApps[0]) {
      this.router.navigate([this.searchedApps[0].routeLink]);
    }
  }

  collapse(): boolean {
    for (const category of this.role.categories) {
      category.isSubMenuShow = false;
    }
    this.menuDisplay = true;
    this.isCollapsed = !this.isCollapsed;
    this.shareService.updateIsCollapsed(this.isCollapsed);
    return this.isCollapsed;
  }

  activateSubMenu(row): void {
    const menuHeight = this.sideMenu.nativeElement.offsetHeight / this.rem;
    const menuScrollTop = this.sideMenu.nativeElement.getElementsByClassName('dk-menu-list')[0].scrollTop / this.rem;
    if (menuHeight + 1 - 4 * row + menuScrollTop <= this.role.categories[row].originalHeight) {
      this.role.categories[row].top = null;
      if ( menuHeight + 3 <= this.role.categories[row].originalHeight) {
        this.role.categories[row].height = menuHeight + 3;
      } else {
        this.role.categories[row].height = this.role.categories[row].originalHeight;
      }
    } else {
      this.role.categories[row].top = 5 + 4 * row - menuScrollTop;
    }
    this.role.categories[row].arrowTop = 6 + 4 * row - menuScrollTop;
    this.role.categories[row].isSubMenuShow = true;
  }

  deactivateSubMenu(row): void {
    this.role.categories[row].isSubMenuShow = false;
  }

  /**
   * Keep track of the last few locations of the mouse.
   */
  @HostListener('document:mousemove', ['$event', 'mouseLocs'])
  mousemoveDocument(e, mouseLocs): void {
    mouseLocs.push({x: e.pageX, y: e.pageY});

    if (mouseLocs.length > 3) { // '30' of the past mouse locations to track
      mouseLocs.shift();
    }
  }

  /**
   * Cancel possible row activations when leaving the menu entirely
   */
  mouseleaveMenu(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    // If exitMenu is supplied and returns true, deactivate the
    // currently active row on menu exit.
    if (this.activeRow && !this.isMouseInMenuArea()) {
      this.deactivateSubMenu(this.activeRow);
    }

    this.activeRow = null;
  }

  /**
   * Check if the mouse is in the area of main menu and sub-menu.
   */
  isMouseInMenuArea(): boolean {
    if (!this.activeRow) { return false; }

    const menu = this.sideMenu.nativeElement;
    const offset = {
      left: menu.offsetLeft,
      top: menu.offsetTop
    };
    const upperLeft = {
      x: offset.left + menu.offsetWidth,
      y: this.role.categories[this.activeRow].top * this.rem
    };
    const upperRight = {
      x: upperLeft.x + this.rem,
      y: upperLeft.y
    };
    const lowerLeft = {
      x: offset.left + menu.offsetWidth,
      y: upperLeft.y + this.role.categories[this.activeRow].height * this.rem
    };
    const lowerRight = {
      x: lowerLeft.x + this.rem,
      y: lowerLeft.y
    };
    const loc = this.mouseLocs[this.mouseLocs.length - 1];
    return (loc && ((loc.x <= upperRight.x && loc.y <= lowerRight.y && loc.y >= upperRight.y)
      || (loc.x <= upperLeft.x && loc.y >= offset.top && loc.y <= offset.top + menu.offsetHeight)));
  }

  /**
   * Trigger a possible row activation whenever entering a new row.
   */
  mouseenterRow(row): void {
    if (this.timeoutId) {
      // Cancel any previous activation delays
      clearTimeout(this.timeoutId);
    }
    this.possiblyActivate(row);
  }

  /**
   * Trigger a row deactivation whenever leaving a row.
   */
  mouseleaveRow(row): void {
    if (!this.isMouseInMenuArea()) {
      this.deactivateSubMenu(row);
    }
  }

  /**
   * Set the current opened app to be active
   * @param {App} app
   */
  activateApp(app: App) {
    // Clear the existing active app
    let appIdx = -1;
    let catalogIdx = this.role.categories.findIndex(category => category.active === true );
    if (catalogIdx > -1 ) {
      this.role.categories[catalogIdx].active = false;
      if (!this.role.categories[catalogIdx].routeLink) {
        appIdx = this.role.categories[catalogIdx].apps.findIndex(app1 => app1.active === true );
        if (appIdx > -1) {
          this.role.categories[catalogIdx].apps[appIdx].active = false;
        }
      }
    }
    // Set the new active app
    catalogIdx = this.role.categories.findIndex(category => {
      if ( category.routeLink === app.routeLink ) {
        return true;
      } else {
        appIdx = category.apps.findIndex( app1 => app1.routeLink === app.routeLink);
        return appIdx > -1;
      }});
    if (catalogIdx > -1) {
      this.role.categories[catalogIdx].active = true;
      if (appIdx > -1) {
        this.role.categories[catalogIdx].apps[appIdx].active = true;
      }
    }
  }

  /**
   * Immediately activate a row if the user clicks on it.
   */
  clickRow(row): void {
    if (this.isCollapsed) {
      this.activate(row);
    } else {
      this.role.categories[row].isSubMenuShow = !this.role.categories[row].isSubMenuShow;
    }
  }

  /**
   * Hide the sub-menu
   */
  hideSubMenu(): void {
    this.role.categories[this.activeRow].isSubMenuShow = false;
  }

  /**
   * Activate a menu row.
   */
  activate(row): void {
    if (row === this.activeRow) {
      return;
    }

    if (this.activeRow) {
      this.deactivateSubMenu(this.activeRow);
    }

    this.activateSubMenu(row);
    this.activeRow = row;
  }

  /**
   * Possibly activate a menu row. If mouse movement indicates that we
   * shouldn't activate yet because user may be trying to enter
   * a submenu's content, then delay and check again later.
   */
  possiblyActivate(row): void {
    const delay = this.activationDelay();

    if (delay) {
      this.timeoutId = setTimeout(() => this.possiblyActivate(row), delay);
    } else {
      this.activate(row);
    }
  }

  /**
   * Return the amount of time that should be used as a delay before the
   * currently hovered row is activated.
   *
   * Returns 0 if the activation should happen immediately. Otherwise,
   * returns the number of milliseconds that should be delayed before
   * checking again to see if the row should be activated.
   */
  activationDelay(): number {

    if (!this.activeRow) {
      // If there is no other submenu row already active, then
      // go ahead and activate immediately.
      return 0;
    }

    const menu = this.sideMenu.nativeElement;
    const rem = parseInt(window.getComputedStyle(document.head).getPropertyValue('font-size'), 10);
    const offset = {
      left: menu.offsetLeft,
      top: menu.offsetTop
    };
    const upperLeft = {
      x: offset.left,
      y: this.role.categories[this.activeRow].top * rem + this.TOLERANCE
    };
    const upperRight = {
      x: offset.left + menu.offsetWidth + rem,
      y: upperLeft.y
    };
    const lowerLeft = {
      x: offset.left,
      y: upperLeft.y + this.role.categories[this.activeRow].height * rem
    };
    const lowerRight = {
      x: offset.left + menu.offsetWidth + rem,
      y: lowerLeft.y
    };
    const loc = this.mouseLocs[this.mouseLocs.length - 1];

    let prevLoc = this.mouseLocs[0];

    if (!loc) {
      return 0;
    }

    if (!prevLoc) {
      prevLoc = loc;
    }

    if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
      prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
      // If the previous mouse location was outside of the entire
      // menu's bounds, immediately activate.
      return 0;
    }

    if (this.lastDelayLoc &&
      loc.x === this.lastDelayLoc.x && loc.y === this.lastDelayLoc.y) {
      // If the mouse hasn't moved since the last time we checked
      // for activation status, immediately activate.
      return 0;
    }

    // Detect if the user is moving towards the currently activated
    // submenu.
    function slope(a, b) {
      return (b.y - a.y) / (b.x - a.x);
    }

    const decreasingCorner = upperRight,
      increasingCorner = lowerRight;

    const decreasingSlope = slope(loc, decreasingCorner),
      increasingSlope = slope(loc, increasingCorner),
      prevDecreasingSlope = slope(prevLoc, decreasingCorner),
      prevIncreasingSlope = slope(prevLoc, increasingCorner);

    if (decreasingSlope < prevDecreasingSlope &&
      increasingSlope > prevIncreasingSlope) {
      // Mouse is moving from previous location towards the
      // currently activated submenu. Delay before activating a
      // new menu row, because user may be moving into submenu.
      this.lastDelayLoc = loc;
      return this.DELAY;
    }

    this.lastDelayLoc = null;
    return 0;
  }
}
