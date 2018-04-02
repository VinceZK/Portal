import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Role, App} from "./role";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const role: Role = <Role> {
      name: 'Consolidation Specialist',
      catalogs: [
        {
          name: 'Search', icon: 'fas fa-search', height: 4, originalHeight: 4,
          routeLink: '/appSearch', active: false, isSubMenuShow: false, apps: []
        },
        {
          name: 'Dashboard', icon: 'fas fa-tachometer-alt', height: 17, originalHeight: 17,
          active: false, isSubMenuShow: false,
          apps: [
            {name: 'Bubble', routeLink: '/dashboard', active: false},
            {name: 'Dashboard1', routeLink: '/mockup/dashboard1', active: false},
            {name: 'Dashboard2', routeLink: '/mockup/dashboard2', active: false},
            {name: 'Dashboard3', routeLink: '/mockup/dashboard3', active: false}
          ]
        },
        {
          name: 'External APP', icon: 'fas fa-link', routeLink: '/external-app/1',
          active: false, isSubMenuShow: false, apps: []
        },
        {
          name: 'Forms', icon: 'fas fa-dot-circle', height: 29, originalHeight: 29,
          active: false, isSubMenuShow: false,
          apps: [
            {name: 'HandsonTable', routeLink: '/handsontable', active: false},
            {name: 'Standard', routeLink: '/mockup/standard', active: false},
            {name: 'Extended', routeLink: '/mockup/extended', active: false},
            {name: 'Validation', routeLink: '/mockup/validation', active: false},
            {name: 'Upload', routeLink: '/mockup/upload', active: false},
            {name: 'Standard Table', routeLink: '/mockup/standard-table', active: false},
            {name: 'Extended Table', routeLink: '/mockup/extended-table', active: false},
            {name: 'Grid Table', routeLink: '/mockup/grid-table', active: false},
            {name: 'Ngx Table', routeLink: '/mockup/ngx-table', active: false}
          ]
        },
        {
          name: 'Elements', icon: 'fas fa-calendar-check', height: 17, originalHeight: 17,
          active: false, isSubMenuShow: false,
          apps: [
            {name: 'Calendar', routeLink: '/mockup/calendar', active: false},
            {name: 'Gallery', routeLink: '/mockup/gallery', active: false},
            {name: 'Profile', routeLink: '/mockup/profile', active: false},
            {name: 'Panel', routeLink: '/mockup/panel', active: false}
          ]
        },
      ]
    };

    const apps: App[] = [
      {name: 'Bubble', routeLink: '/dashboard', active: false},
      {name: 'Dashboard1', routeLink: '/mockup/dashboard1', active: false},
      {name: 'Dashboard2', routeLink: '/mockup/dashboard2', active: false},
      {name: 'Dashboard3', routeLink: '/mockup/dashboard3', active: false},
      {name: 'External APP', routeLink: '/external-app/1', active: false},
      {name: 'HandsonTable', routeLink: '/handsontable', active: false},
      {name: 'Standard', routeLink: '/mockup/standard', active: false},
      {name: 'Extended', routeLink: '/mockup/extended', active: false},
      {name: 'Validation', routeLink: '/mockup/validation', active: false},
      {name: 'Upload', routeLink: '/mockup/upload', active: false},
      {name: 'Standard Table', routeLink: '/mockup/standard-table', active: false},
      {name: 'Extended Table', routeLink: '/mockup/extended-table', active: false},
      {name: 'Grid Table', routeLink: '/mockup/grid-table', active: false},
      {name: 'Ngx Table', routeLink: '/mockup/ngx-table', active: false},
      {name: 'Calendar', routeLink: '/mockup/calendar', active: false},
      {name: 'Gallery', routeLink: '/mockup/gallery', active: false},
      {name: 'Profile', routeLink: '/mockup/profile', active: false},
      {name: 'Panel', routeLink: '/mockup/panel', active: false}
    ];
    return {role, apps};
  }
}
