import {Component, ViewChild} from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
// declare var jquery: any;
 declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SideMenuComponent)
  private sideMenu: SideMenuComponent;

  isCollapsed = false;
  constructor() { }

  onCollapse() {
    this.isCollapsed = this.sideMenu.collapse();
  }
}
