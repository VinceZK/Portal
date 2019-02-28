export class Role {
  name: string;
  categories: Catalog[]; // Containing Catalogs
}
export class Catalog {
  name: string;
  icon: string;  // Catalog Icon using Font Awesome, like: "fas fa-search"
  routeLink?: string; // routeLink in Angular navigation and route system
  top?: number; // hover submenu position to the page top
  height?: number; // hover submenu height dynamically calculated based on the page height
  originalHeight?: number; // the original hover submenu height based on the number of APPs contained
  arrowTop?: number; // arrow position to the page top
  active?: boolean; // Indicates current catalog is in active status, that is one of the APPs contained is in shown.
  isSubMenuShow?: boolean; // Indicates the submenu is in shown (hovered)
  apps?: App[]; // Containing APPs
}
export class App {
  name: string;
  appID: string;
  routeLink: string; // RouteLink in Angular navigation and route system
  isExternal: boolean; // Whether it is an external app or internal app
  originalRouteLink?: string; // original route link for external apps
  active?: boolean; // Indicates current APP is in active status, that is the APP is in shown.
}
export class UserBasicInfo {
  userID: string;
  userName?: string;
  displayName?: string;
  email?: string;
}
