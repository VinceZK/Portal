import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Role, App} from "./role";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const role: Role = <Role> {
      name: 'Consolidation Specialist',
      catalogs: [
        {
          name: 'Dashboard', icon: 'glyphicon glyphicon-dashboard', routeLink: '/dashboard', active: false,
          isSubMenuShow: false, apps: []
        },
        {
          name: 'Data Collection', icon: 'glyphicon glyphicon-cloud-upload', height: 26, originalHeight: 26,
          active: true, isSubMenuShow: false,
          apps: [
            {name: 'Packages', routeLink: '/mockup/Packages', active: true},
            {name: 'Balance Sheet', routeLink: '/mockup/PackageDetail', active: false},
            {name: 'Input Form', routeLink: '/mockup/PackageDetailInput', active: false},
            {name: 'Package Upload', routeLink: '/mockup/PackageUpload', active: false},
            {name: 'Currency Translation', routeLink: '/mockup/CurrencyTranslation', active: false},
            {name: 'Data Validation', routeLink: '/mockup/PackageControls', active: false},
            {name: 'External APP', routeLink: '/external-app/1', active: false}
          ]
        },
        {
          name: 'Consolidation', icon: 'glyphicon glyphicon-compressed', height: 17, originalHeight: 17,
          active: false, isSubMenuShow: false,
          apps: [
            {name: 'Journal Posting', routeLink: '/mockup/JournalPosting', active: false},
            {name: 'Reconciliation', routeLink: '/mockup/Reconciliation', active: false},
            {name: 'Run Consolidation', routeLink: '/mockup/ConsolidationPara', active: false},
            {name: 'Carry Forward', routeLink: '/mockup/CarryForward', active: false}
          ]
        },
        {
          name: 'Reports', icon: 'glyphicon glyphicon-list-alt', height: 17, originalHeight: 17,
          active: false, isSubMenuShow: false,
          apps: [
            {name: 'Balance Sheets', routeLink: '/mockup/ReportBS', active: false},
            {name: 'Journal Entries', routeLink: '/mockup/JournalEntries', active: false},
            {name: 'Income Statements', routeLink: '/mockup/IncomeStatement', active: false},
            {name: 'Cash Flow', routeLink: '/mockup/CashFlow', active: false}
          ]
        },
      ]
    };

    const apps: App[] = [
      {name: 'Dashboard', routeLink: '/dashboard', active: false},
      {name: 'Packages', routeLink: '/mockup/Packages', active: true},
      {name: 'Balance Sheet', routeLink: '/mockup/PackageDetail', active: false},
      {name: 'Input Form', routeLink: '/mockup/PackageDetailInput', active: false},
      {name: 'Package Upload', routeLink: '/mockup/PackageUpload', active: false},
      {name: 'Currency Translation', routeLink: '/mockup/CurrencyTranslation', active: false},
      {name: 'Data Validation', routeLink: '/mockup/PackageControls', active: false},
      {name: 'External APP', routeLink: '/external-app/1', active: false},
      {name: 'Journal Posting', routeLink: '/mockup/JournalPosting', active: false},
      {name: 'Reconciliation', routeLink: '/mockup/Reconciliation', active: false},
      {name: 'Run Consolidation', routeLink: '/mockup/ConsolidationPara', active: false},
      {name: 'Carry Forward', routeLink: '/mockup/CarryForward', active: false},
      {name: 'Balance Sheets', routeLink: '/mockup/ReportBS', active: false},
      {name: 'Journal Entries', routeLink: '/mockup/JournalEntries', active: false},
      {name: 'Income Statements', routeLink: '/mockup/IncomeStatement', active: false},
      {name: 'Cash Flow', routeLink: '/mockup/CashFlow', active: false}
    ];
    return {role, apps};
  }
}
