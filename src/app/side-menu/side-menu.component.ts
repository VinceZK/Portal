import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  isCollapsed = false;
  subMenu = [
    {top: 0, height: 0, originalHeight: 0, visible: 'none', arrow: 1},
    {top: null, height: 18, originalHeight: 26, visible: 'block', arrow: 1 }, // 4 + 3 * 7 + 1
    {top: 13, height: 17, originalHeight: 17, visible: 'none', arrow: 1}, // 4 + 3 * 4 + 1
    {top: 17, height: 17, originalHeight: 17, visible: 'none', arrow: 1}  // 4 + 3 * 4 + 1
  ];

  activeRow = null;
  mouseLocs = [];
  lastDelayLoc = null;
  timeoutId = null;

  TOLERANCE = 75;  // bigger = more forgivey when entering submenu
  DELAY = 600;  // ms delay when user appears to be entering submenu
  MIN_HEIGHT = 18; // minimal side menu height (rem)

  @ViewChild('sideMenu')
  sideMenu: ElementRef;

  constructor() {}

  ngOnInit() {
  }

  collapse(): boolean {
    this.isCollapsed = !this.isCollapsed;
    return this.isCollapsed;
  }

  activateSubMenu(row): void {
    const rem = parseInt(window.getComputedStyle(document.head).getPropertyValue('font-size'), 10);
    const menuHeight = this.sideMenu.nativeElement.offsetHeight / rem;

    // if (menuHeight + 6 <= this.subMenu[row].originalHeight) {
    //   this.subMenu[row].top = null;
    //   if ( menuHeight + 4 <= this.subMenu[row].originalHeight) {
    //     this.subMenu[row].height = menuHeight + 4;
    //   }
    // } else {
    //   this.subMenu[row].top = 5;
    // }
    this.subMenu[row].visible  = 'block';
  }

  deactivateSubMenu(row): void {
    this.subMenu[row].visible  = 'none';
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
    const rem = parseInt(window.getComputedStyle(document.head).getPropertyValue('font-size'), 10);
    const offset = {
      left: menu.offsetLeft,
      top: menu.offsetTop
    };
    const upperLeft = {
      x: offset.left + menu.offsetWidth,
      y: this.subMenu[this.activeRow].top * rem
    };
    const upperRight = {
      x: upperLeft.x + rem,
      y: upperLeft.y
    };
    const lowerLeft = {
      x: offset.left + menu.offsetWidth,
      y: upperLeft.y + this.subMenu[this.activeRow].height * rem
    };
    const lowerRight = {
      x: lowerLeft.x + rem,
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
   * Immediately activate a row if the user clicks on it.
   */
  clickRow(row): void {
    this.activate(row);
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
      y: this.subMenu[this.activeRow].top * rem + this.TOLERANCE
    };
    const upperRight = {
      x: offset.left + menu.offsetWidth + rem,
      y: upperLeft.y
    };
    const lowerLeft = {
      x: offset.left,
      y: upperLeft.y + this.subMenu[this.activeRow].height * rem
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
