export class Role {
  name: string;
  catalogs: Catalog[];
}
export class Catalog {
  name: string;
  icon: string;
  routeLink: string;
  top: number;
  height: number;
  originalHeight: number;
  arrowTop: number;
  active: boolean;
  isSubMenuShow: boolean;
  apps: App[];
}
export class App {
  name: string;
  routeLink: string;
  active: boolean;
}
