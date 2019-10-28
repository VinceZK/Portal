(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dk-frame-view\">\n  <!-- Head Bar Navigation -->\n  <app-head-bar (onCollapse)=\"onCollapse()\"></app-head-bar>\n\n  <div class=\"dk-frame-content\">\n    <!-- Side Bar Navigation -->\n    <app-side-menu></app-side-menu>\n\n    <!-- Content Area -->\n    <div class=\"dk-content-area\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n<!--<router-outlet></router-outlet>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dk-message></dk-message>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/external-app/external-app.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/external-app/external-app.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<iframe [src]=\"appUrl\" class=\"nav-content-iframe\" [style.width]=\"iFrameWidth\">-->\n<!--</iframe>-->\n\n<iframe [src]=\"appUrl\" class=\"nav-content-iframe\">\n</iframe>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/head-bar/head-bar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/head-bar/head-bar.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"dk-navbar-inverse\">\n  <div class=\"dk-navbar-header\">\n    <button type=\"button\" class=\"dk-navbar-toggle\" (click)=\"collapse()\">\n      <span class=\"dk-sr-only\">Toggle navigation</span>\n      <span class=\"dk-icon-bar\"></span>\n      <span class=\"dk-icon-bar\"></span>\n      <span class=\"dk-icon-bar\"></span>\n    </button>\n    <a class=\"dk-navbar-brand\" href=\"#\"><img alt=\"Brand\" src=\"assets/darkhouse.png\"></a>\n  </div>\n\n  <!-- Application Name or Title -->\n  <div class=\"dk-navbar-center\">\n    <ul class=\"dk-nav dk-navbar-nav dk-navbar-app-title\">\n      <li [ngClass]=\"{'open': dropdown.historyOpen}\">\n        <a (click)=\"toggleHistoryDropdown()\" class=\"dk-nav-toggle\">{{currentApp.name}} <b class=\"dk-caret\"></b></a>\n        <ul class=\"dk-dropdown-menu\">\n          <li *ngFor=\"let app of navHistory\"><a routerLink=\"{{app.routeLink}}\">\n            {{app.name}}</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n  <!-- Generic Functions in the header bar -->\n  <div class=\"dk-navbar-right\">\n    <ul class=\"dk-nav dk-navbar-nav\">\n      <li [ngClass]=\"{'open': dropdown.notificationOpen}\">\n        <a (click)=\"toggleNotificationDropdown()\" class=\"dk-nav-toggle\"><span\n          class=\"fas fa-bell\"></span><span class=\"dk-label dk-badge\">32</span>\n        </a>\n        <ul class=\"dk-dropdown-menu\">\n          <li><a href=\"#\"><span class=\"dk-label dk-label-warning\">4:00 AM</span>Favourites Snippet</a></li>\n          <li><a href=\"#\"><span class=\"dk-label dk-label-warning\">4:30 AM</span>Email marketing</a></li>\n          <li><a href=\"#\"><span class=\"dk-label dk-label-warning\">5:00 AM</span>Subscriber focused email\n            design</a></li>\n          <li class=\"dk-divider\"></li>\n          <li><a href=\"#\" class=\"dk-text-center\">View All</a></li>\n        </ul>\n      </li>\n      <li [ngClass]=\"{'open': dropdown.preferenceOpen}\">\n        <a (click)=\"togglePreferenceOpen()\" class=\"dk-nav-toggle\"><span\n          class=\"fas fa-user\"></span>{{userBasicInfo && userBasicInfo.displayName}} <b class=\"dk-caret\"></b>\n        </a>\n        <ul class=\"dk-dropdown-menu\">\n          <li><a href=\"#\"><span class=\"fas fa-user\"></span>Profile</a></li>\n          <li><a href=\"#\"><span class=\"fas fa-cog\"></span>Settings</a></li>\n          <li class=\"dk-divider\"></li>\n          <li><a (click)=\"logout()\"><span class=\"fas fa-power-off\"></span>Logout</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Page not found!</h2>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/side-menu/side-menu.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/side-menu/side-menu.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #sideMenu class=\"dk-side-menu\" [class.dk-side-menu-collapsed]=\"isCollapsed\" (mouseleave)=\"mouseleaveMenu()\" >\n  <div class=\"dk-menu-list\">\n    <!-- side menu in expended mode -->\n    <ul *ngIf=\"!isCollapsed\" class=\"dk-menu-content\">\n      <li *ngFor=\"let category of role.categories; index as i;\"\n          [ngClass]=\"{'active':category.active,\n                      'collapsed':!category.isSubMenuShow,\n                      'dk-menu-search': category.routeLink === '/appSearch',\n                      'menuDisplay': category.routeLink === '/appSearch' || menuDisplay}\">\n        <span *ngIf=\"category.routeLink === '/appSearch'\" [ngClass]=\"category.icon\" aria-hidden=\"true\"></span>\n        <input *ngIf=\"category.routeLink === '/appSearch'\" #searchBox class=\"dk-search-box\" placeholder=\"Search\"\n               (keyup)=\"searchApp(searchBox.value)\" (keypress)=\"enterApp($event)\"/>\n        <ul *ngIf=\"category.routeLink === '/appSearch'\" class=\"dk-sub-menu\">\n          <li *ngFor=\"let app of apps$ | async\" >\n            <a routerLink=\"{{app.routeLink}}\">{{app.name}}</a>\n          </li>\n        </ul>\n\n        <a *ngIf=\"category.routeLink && category.routeLink !== '/appSearch'\" routerLink=\"{{category.routeLink}}\">\n          <span [ngClass]=\"category.icon\" aria-hidden=\"true\"></span> {{category.name}}\n        </a>\n        <a *ngIf=\"!category.routeLink\" (click)=\"clickRow(i)\">\n          <span [ngClass]=\"category.icon\" aria-hidden=\"true\"></span> {{category.name}}\n          <span *ngIf=\"category.apps && category.apps.length > 0\" class=\"fas arrow\"\n                [ngClass]=\"{'fa-angle-right': !category.isSubMenuShow, 'fa-angle-down': category.isSubMenuShow}\">\n          </span>\n        </a>\n        <ul *ngIf=\"!category.routeLink\" class=\"dk-sub-menu\"\n            [ngClass]=\"{'expended':category.isSubMenuShow, 'collapsed':!category.isSubMenuShow}\">\n          <li *ngFor=\"let app of category.apps\" [ngClass]=\"{'active':app.active}\">\n            <a routerLink=\"{{app.routeLink}}\">{{app.name}}</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n    <!-- side menu in collapsed mode -->\n    <ul *ngIf=\"isCollapsed\" class=\"dk-menu-content\">\n      <li *ngFor=\"let category of role.categories; index as i\" class=\"menuDisplay\" [ngClass]=\"{'active':category.active}\"\n          (mouseenter)=\"mouseenterRow(i)\" (mouseleave)=\"mouseleaveRow(i)\" (click)=\"clickRow(i)\">\n        <a *ngIf=\"category.routeLink === '/appSearch'\">\n          <span [ngClass]=\"category.icon\" aria-hidden=\"true\"></span>\n        </a>\n        <div *ngIf=\"category.routeLink === '/appSearch'\"\n             class=\"dk-side-menu dk-side-menu-hover dk-menu-search-hover\"\n             [ngClass]=\"{'dk-side-menu-hover-show':category.isSubMenuShow}\"\n             [style.top.rem]=\"category.top\">\n          <ul class=\"dk-menu-content-hover\">\n            <li><input #searchBox class=\"dk-search-box\" placeholder=\"Search\" class=\"dk-search-box\"\n                       (keyup)=\"searchApp(searchBox.value)\" (keypress)=\"enterApp($event)\"/></li>\n            <ul class=\"dk-sub-menu dk-sub-menu-collapsed\">\n              <li *ngFor=\"let app of apps$ | async\" >\n                <a routerLink=\"{{app.routeLink}}\" (click)=\"hideSubMenu()\">{{app.name}}</a>\n              </li>\n            </ul>\n          </ul>\n        </div>\n        <span *ngIf=\"category.routeLink === '/appSearch'\"\n              class=\"dk-popover-arrow\" [ngClass]=\"{'dk-popover-arrow-show':category.isSubMenuShow}\"\n              [style.top.rem]=\"category.arrowTop\"></span>\n\n        <a *ngIf=\"category.routeLink !== '/appSearch' && category.apps.length === 0\" routerLink=\"{{category.routeLink}}\">\n          <span [ngClass]=\"category.icon\" aria-hidden=\"true\"></span>\n        </a>\n        <a *ngIf=\"category.routeLink !== '/appSearch' && category.apps.length > 0\">\n          <span [ngClass]=\"category.icon\" aria-hidden=\"true\"></span>\n        </a>\n\n        <div *ngIf=\"category.routeLink !== '/appSearch' && category.apps.length > 0\"\n             class=\"dk-side-menu dk-side-menu-hover\"\n             [style.top.rem]=\"category.top\"\n             [style.height.rem]=\"category.height\"\n             [ngClass]=\"{'dk-side-menu-hover-show':category.isSubMenuShow}\">\n          <ul class=\"dk-menu-content-hover\">\n            <li><a>{{category.name}}</a></li>\n            <ul class=\"dk-sub-menu dk-sub-menu-collapsed\">\n              <li *ngFor=\"let app of category.apps\" [ngClass]=\"{'active':app.active}\">\n                <a routerLink=\"{{app.routeLink}}\" (click)=\"hideSubMenu()\">{{app.name}}</a>\n              </li>\n            </ul>\n          </ul>\n        </div>\n        <span *ngIf=\"category.routeLink !== '/appSearch' && category.apps.length > 0\"\n              class=\"dk-popover-arrow\" [ngClass]=\"{'dk-popover-arrow-show':category.isSubMenuShow}\"\n              [style.top.rem]=\"category.arrowTop\"></span>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"dk-separator\"></div>\n\n  <div class=\"dk-menu-bottom\">\n    <ul *ngIf=\"!isCollapsed\" class=\"dk-menu-content\">\n      <li >\n        <a href=\"#\">\n          <span class=\"fas fa-question-circle\" aria-hidden=\"true\"></span> Useful Links\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <span class=\"fas fa-balance-scale\" aria-hidden=\"true\"></span> Legal Information\n        </a>\n      </li>\n    </ul>\n    <ul *ngIf=\"isCollapsed\" class=\"dk-menu-content\">\n      <li (mouseenter)=\"mouseenterRow(0)\" (mouseleave)=\"mouseleaveRow(0)\" (click)=\"clickRow(0)\" >\n        <a href=\"#\">\n          <span class=\"fas fa-question-circle\" aria-hidden=\"true\"></span>\n        </a>\n      </li>\n      <li (mouseenter)=\"mouseenterRow(0)\" (mouseleave)=\"mouseleaveRow(0)\" (click)=\"clickRow(0)\">\n        <a href=\"#\">\n          <span class=\"fas fa-balance-scale\" aria-hidden=\"true\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-address/user-address.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-address/user-address.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-4\">\n  <div class=\"card-body\">\n    <div *ngFor=\"let userAddressForm of userAddressFormArray.controls; let i = index\" class=\"card mb-4\">\n      <button type=\"button\" id=\"remove\" class=\"dk-close-button close d-flex justify-content-end mr-2\" aria-label=\"Close\" (click)=\"deleteAddress(i)\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <div class=\"card-body row\" [formGroup]=\"userAddressForm\">\n        <div class=\"col-3 row form-group ml-2 mr-2\"\n             [class.dk-invalid]=\"userAddressForm.get('TYPE').invalid && (userAddressForm.touched || userAddressForm.dirty)\">\n          <label for=\"addressType\" class=\"col-form-label dk-form-label\"> Address Type:\n            <span class=\"dk-invalid-feedback\">{{userAddressForm.get('TYPE').errors?.required ? 'Required': null}}</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"addressType\" [readonly]=\"readonly\"\n                 name=\"addressType\" formControlName=\"TYPE\">\n        </div>\n        <div class=\"col-6 row form-group mr-2\"\n             [class.dk-invalid]=\"userAddressForm.get('ADDRESS_VALUE').invalid && (userAddressForm.touched || userAddressForm.dirty)\">\n          <label for=\"address\" class=\"col-form-label dk-form-label\"> Address:\n            <span class=\"dk-invalid-feedback\">{{userAddressForm.get('ADDRESS_VALUE').errors?.required ? 'Required': null}}</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"address\" [readonly]=\"readonly\"\n                 name=\"address\" formControlName=\"ADDRESS_VALUE\">\n        </div>\n        <div class=\"col-1 row form-group mr-2\">\n          <label for=\"primaryAddress\" class=\"col-form-label dk-form-label\">Primary</label>\n          <input type=\"radio\" class=\"form-control\" id=\"primaryAddress\" [value]=\"1\" name=\"PRIMARY\" formControlName=\"PRIMARY\">\n        </div>\n\n        <div class=\"col-md-3 row form-group ml-2\">\n          <label for=\"postcode\" class=\"col-form-label dk-form-label\"> Postcode:\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"postcode\" [readonly]=\"readonly\"\n                 name=\"postcode\" formControlName=\"POSTCODE\">\n        </div>\n        <div class=\"col-md-3 row form-group ml-2\">\n          <label for=\"city\" class=\"col-form-label dk-form-label\"> City:\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"city\" [readonly]=\"readonly\"\n                 name=\"city\" formControlName=\"CITY\">\n        </div>\n        <div class=\"col-md-3 row form-group ml-2\">\n          <label for=\"country\" class=\"col-form-label dk-form-label\">Country:\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"country\" [readonly]=\"readonly\"\n                 name=\"country\" formControlName=\"COUNTRY\">\n        </div>\n      </div>\n    </div>\n    <button type=\"button\" id=\"add\" class=\"btn btn-primary float-right\" [disabled]=\"readonly\" (click)=\"addAddress()\">Add</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-basic/user-basic.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-basic/user-basic.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-4\">\n  <div class=\"card-header\">Name</div>\n  <div class=\"card-body\">\n    <form [formGroup]=\"userBasicNamesForm\" class=\"mt-2 pl-4 row\">\n      <div class=\"col-md-4 row form-group mr-2\"\n           [class.dk-invalid]=\"userBasicNamesForm.get('USER_NAME').invalid && (userBasicNamesForm.touched || userBasicNamesForm.dirty)\">\n        <label for=\"userName\" class=\"col-form-label dk-form-label\">User Name:\n          <span class=\"dk-invalid-feedback\">{{userBasicNamesForm.get('USER_NAME').errors?.required ? 'Required': null}}</span>\n          <span class=\"dk-invalid-feedback\">{{userBasicNamesForm.get('USER_NAME').errors?.message}}</span>\n        </label>\n        <input type=\"text\" class=\"form-control\" id=\"userName\" [readonly]=\"readonly\"\n               name=\"userName\" formControlName=\"USER_NAME\">\n      </div>\n      <div class=\"col-md-4 row form-group mr-2\"\n           [class.dk-invalid]=\"userBasicNamesForm.get('DISPLAY_NAME').invalid && (userBasicNamesForm.touched || userBasicNamesForm.dirty)\">\n        <label for=\"displayName\" class=\"col-form-label dk-form-label\">Display Name:\n          <span class=\"dk-invalid-feedback\">{{userBasicNamesForm.get('DISPLAY_NAME').errors?.required ? 'Required': null}}</span>\n        </label>\n        <input type=\"text\" class=\"form-control\" id=\"displayName\" [readonly]=\"readonly\"\n               name=\"displayName\" formControlName=\"DISPLAY_NAME\">\n      </div>\n      <div class=\"col-md-4 row form-group mr-2\"></div>\n      <div class=\"col-md-4 row form-group mr-2\">\n        <label for=\"givenName\" class=\"col-form-label dk-form-label\">Given Name:\n        </label>\n        <input type=\"text\" class=\"form-control\" id=\"givenName\" [readonly]=\"readonly\"\n               name=\"givenName\" formControlName=\"GIVEN_NAME\">\n      </div>\n      <div class=\"col-md-4 row form-group mr-2 \">\n        <label for=\"middleName\" class=\"col-form-label dk-form-label\">Middle Name:\n        </label>\n        <input type=\"text\" class=\"form-control\" id=\"middleName\" [readonly]=\"readonly\"\n               name=\"middleName\" formControlName=\"MIDDLE_NAME\">\n      </div>\n      <div class=\"col-md-4 row form-group mr-2\">\n        <label for=\"familyName\" class=\"col-form-label dk-form-label\">Family Name:\n        </label>\n        <input type=\"text\" class=\"form-control\" id=\"familyName\" [readonly]=\"readonly\"\n               name=\"familyName\" formControlName=\"FAMILY_NAME\">\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"card mt-4\">\n  <div class=\"card-header\">Employee</div>\n  <div class=\"card-body\">\n    <form [formGroup]=\"userBasicEmployeeForm\" class=\"mt-2 pl-4 row\">\n      <div class=\"col-md-6 col-lg-4 row form-group mr-2\"\n           [class.dk-invalid]=\"userBasicEmployeeForm.get('COMPANY_ID').invalid && (userBasicEmployeeForm.touched || userBasicEmployeeForm.dirty)\">\n        <label for=\"companyID\" class=\"col-form-label dk-form-label\">Company:\n          <span class=\"dk-invalid-feedback\">{{userBasicEmployeeForm.get('COMPANY_ID').errors?.required ? 'Required': null}}</span>\n        </label>\n        <input type=\"text\" class=\"form-control\" id=\"companyID\" [readonly]=\"readonly\"\n               name=\"companyID\" formControlName=\"COMPANY_ID\">\n      </div>\n      <div class=\"col-md-6 col-lg-4 row form-group mr-2\">\n        <label for=\"DepartmentID\" class=\"col-form-label dk-form-label\">Department:\n        </label>\n        <input type=\"text\" class=\"form-control\" id=\"DepartmentID\" [readonly]=\"readonly\"\n               name=\"DepartmentID\" formControlName=\"DEPARTMENT_ID\">\n      </div>\n      <div class=\"col-md-6 col-lg-4 row form-group mr-2\">\n        <label for=\"title\" class=\"col-form-label dk-form-label\">Title:\n        </label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" [readonly]=\"readonly\"\n               name=\"title\" formControlName=\"TITLE\">\n      </div>\n      <div class=\"col-md-6 col-lg-4 row form-group mr-2\">\n        <label for=\"gender\" class=\"col-form-label dk-form-label\">Gender:\n        </label>\n        <input type=\"text\" class=\"form-control\" id=\"gender\" [readonly]=\"readonly\"\n               name=\"gender\" formControlName=\"GENDER\">\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar dk-fixed-top navbar-light bg-light\">\n  <div>\n    <span class=\"font-weight-bold mb-0 mx-1\">{{isNewMode? 'New User' : readonly? 'Display User' : 'Change User'}}</span>\n  </div>\n\n  <div class=\"flex-row-reverse\">\n    <button class=\"btn btn-lg btn-outline-primary mr-2\" type=\"button\" title=\"Edit/Display\" id=\"editDisplay\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"> Edit</span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"> Display</span>\n    </button>\n    <button class=\"btn btn-lg btn-outline-primary mr-2\" type=\"button\" title=\"Save\" id=\"save\" (click)=\"save()\" [disabled]=\"readonly\">\n      <span class=\"fas fa-save\"> Save</span>\n    </button>\n  </div>\n</nav>\n\n<div class=\"mt-2 mb-2\">\n  <dk-message></dk-message>\n</div>\n\n<div *ngIf=\"userForm\" class=\"ml-2\">\n  <div class=\"mt-2 ml-3 row\">\n    <div class=\"col-md-6 col-lg-4 row form-group mr-2\" [formGroup]=\"userForm\"\n         [class.dk-invalid]=\"userForm.get('USER_ID').invalid && (userForm.touched || userForm.dirty)\">\n      <label for=\"user_id\" class=\"col-form-label dk-form-label\">User ID:\n        <span class=\"dk-invalid-feedback\">{{userForm.get('USER_ID').errors?.required ? 'Required': null}}</span>\n        <span class=\"dk-invalid-feedback\">{{userForm.get('USER_ID').errors?.message}}</span>\n      </label>\n      <input id=\"user_id\" name=\"user_id\" formControlName=\"USER_ID\" type=\"text\" class=\"form-control\" [readonly]=\"!isNewMode\">\n    </div>\n    <div class=\"col-md-6 col-lg-4 row form-group mr-2\" [formGroup]=\"userForm\">\n      <label for=\"lockStatus\" class=\"col-form-label dk-form-label\">Lock Status:</label>\n      <div id=\"lockStatus\" class=\"form-control dk-icon\">\n        <span *ngIf=\"userForm.get('LOCK').value\" class=\"fas fa-lock\" > Locked</span>\n        <span *ngIf=\"!userForm.get('LOCK').value\" class=\"fas fa-lock-open\"> Unlocked</span>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-lg-4 row form-group mr-2\" [formGroup]=\"userForm\">\n      <label for=\"passwordStatus\" class=\"col-form-label dk-form-label\">Password Status:</label>\n      <div id=\"passwordStatus\" class=\"form-control dk-icon\" [ngSwitch]=\"userForm.get('PWD_STATUS').value\">\n        <div *ngSwitchCase=\"\">\n          <span class=\"badge badge-primary\">Initial</span>\n        </div>\n        <div *ngSwitchCase=\"1\">\n          <span class=\"badge badge-success\">Active</span>\n        </div>\n        <div *ngSwitchCase=\"2\">\n          <span class=\"badge badge-warning\">Renew</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ul class=\"nav nav-tabs mt-1\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"tabStrip===1\" href=\"javascript:void(0);\" (click)=\"switchTabStrip(1)\">Basic</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"tabStrip===2\" href=\"javascript:void(0);\" (click)=\"switchTabStrip(2)\">Email</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"tabStrip===3\" href=\"javascript:void(0);\" (click)=\"switchTabStrip(3)\">Address</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"tabStrip===4\" href=\"javascript:void(0);\" (click)=\"switchTabStrip(4)\">Personalization</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"tabStrip===5\" href=\"javascript:void(0);\" (click)=\"switchTabStrip(5)\">Role</a>\n    </li>\n  </ul>\n\n  <div class=\"mt-2\" [ngSwitch]=\"tabStrip\">\n    <app-user-basic *ngSwitchCase=\"1\" [userForm]=\"userForm\" [readonly]=\"readonly\"></app-user-basic>\n    <app-user-email *ngSwitchCase=\"2\" [userForm]=\"userForm\" [readonly]=\"readonly\"></app-user-email>\n    <app-user-address *ngSwitchCase=\"3\" [userForm]=\"userForm\" [readonly]=\"readonly\"></app-user-address>\n    <app-user-personalization *ngSwitchCase=\"4\" [userForm]=\"userForm\" [readonly]=\"readonly\"></app-user-personalization>\n    <app-user-role *ngSwitchCase=\"5\" [userForm]=\"userForm\" [readonly]=\"readonly\"></app-user-role>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-email/user-email.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-email/user-email.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-4\">\n  <div class=\"card-body\">\n    <div *ngFor=\"let userEmailForm of userEmailFormArray.controls; let i = index\" class=\"card mb-4\">\n      <button type=\"button\" id=\"remove\" class=\"dk-close-button close d-flex justify-content-end mr-2\" aria-label=\"Close\" (click)=\"deleteEmail(i)\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <div class=\"card-body row\" [formGroup]=\"userEmailForm\">\n        <div class=\"col-3 row form-group ml-2 mr-2\"\n             [class.dk-invalid]=\"userEmailForm.get('TYPE').invalid && (userEmailForm.touched || userEmailForm.dirty)\">\n          <label for=\"emailType\" class=\"col-form-label dk-form-label\"> Email Type:\n            <span class=\"dk-invalid-feedback\">{{userEmailForm.get('TYPE').errors?.required ? 'Required': null}}</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"emailType\" [readonly]=\"readonly\"\n                 name=\"emailType\" formControlName=\"TYPE\">\n        </div>\n        <div class=\"col-6 row form-group mr-2\"\n             [class.dk-invalid]=\"userEmailForm.get('EMAIL').invalid && (userEmailForm.touched || userEmailForm.dirty)\">\n          <label for=\"emailAddress\" class=\"col-form-label dk-form-label\"> Email Address:\n            <span class=\"dk-invalid-feedback\">{{userEmailForm.get('EMAIL').errors?.required ? 'Required': null}}</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"emailAddress\" [readonly]=\"readonly\"\n                 name=\"emailAddress\" formControlName=\"EMAIL\">\n        </div>\n        <div class=\"col-1 row form-group mr-2\">\n          <label for=\"primaryEmail\" class=\"col-form-label dk-form-label\">Primary</label>\n          <input type=\"radio\" class=\"form-control\" id=\"primaryEmail\" [value]=\"1\" name=\"PRIMARY\" formControlName=\"PRIMARY\">\n        </div>\n      </div>\n    </div>\n    <button type=\"button\" id=\"add\" class=\"btn btn-primary float-right\" [disabled]=\"readonly\" (click)=\"addEmail()\">Add</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-personalization/user-personalization.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-personalization/user-personalization.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"userPersonalizationForm\" class=\"mt-4 ml-2 pl-4 row\">\n  <div class=\"col-md-6 col-lg-4 row form-group mr-2\">\n    <label for=\"language\" class=\"col-form-label dk-form-label\">Language:\n    </label>\n    <input type=\"text\" class=\"form-control\" id=\"language\" [readonly]=\"readonly\"\n           name=\"language\" formControlName=\"LANGUAGE\">\n  </div>\n  <div class=\"col-md-6 col-lg-4 row form-group mr-2\">\n    <label for=\"timezone\" class=\"col-form-label dk-form-label\">Timezone:\n    </label>\n    <input type=\"text\" class=\"form-control\" id=\"timezone\" [readonly]=\"readonly\"\n           name=\"timezone\" formControlName=\"TIMEZONE\">\n  </div>\n  <div class=\"col-md-6 col-lg-4 row form-group mr-2\">\n    <label for=\"decimalFormat\" class=\"col-form-label dk-form-label\">Decimal Format:\n    </label>\n    <input type=\"text\" class=\"form-control\" id=\"decimalFormat\" [readonly]=\"readonly\"\n           name=\"decimalFormat\" formControlName=\"DECIMAL_FORMAT\">\n  </div>\n  <div class=\"col-md-6 col-lg-4 row form-group mr-2\">\n    <label for=\"datetimeFormat\" class=\"col-form-label dk-form-label\">Date and Time Format:\n    </label>\n    <input type=\"text\" class=\"form-control\" id=\"datetimeFormat\" [readonly]=\"readonly\"\n           name=\"datetimeFormat\" formControlName=\"DATE_FORMAT\">\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-role/user-role.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-role/user-role.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-bordered dk-table ml-3 mt-4\" [formGroup]=\"userForm\">\n  <thead class=\"thead-light dk-form-label\">\n    <tr>\n      <th scope=\"col\">Role</th>\n      <th scope=\"col\">Description</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n\n  <tbody formArrayName=\"userRole\" class=\"mb-4\">\n    <tr *ngFor=\"let userRoleForm of userRoleFormArray.controls; let i = index\">\n      <td [formGroup]=\"userRoleForm\"\n          [class.dk-invalid]=\"userRoleForm.get('NAME').invalid && (userRoleForm.touched || userRoleForm.dirty)\">\n        <div class=\"input-group dk-name\">\n          <input class=\"form-control\" type=\"text\" formControlName=\"NAME\"\n               [readonly]=\"readonly || oldRole(userRoleForm) && userRoleForm.valid\" (change)=\"onChangeRoleID(i)\">\n          <div class=\"invalid-tooltip\">\n            {{userRoleForm.get('NAME').errors?.message}}\n          </div>\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary btn-light\" type=\"button\" id=\"searchPermission\"\n            (click)=\"onSearchHelp(i, userRoleForm)\">\n              <span class=\"fas fa-search\"></span>\n            </button>\n          </div>\n        </div>\n      </td>\n      <td [formGroup]=\"userRoleForm\" class=\"dk-description\">\n        <input type=\"text\" formControlName=\"DESCRIPTION\" readonly class=\"form-control\">\n      </td>\n      <td class=\"dk-actions\">\n        <button class=\"btn\" type=\"button\" id=\"delete\" [disabled]=\"readonly\" (click)=\"deleteRole(i)\" title=\"Delete\">\n          <span class=\"far fa-trash-alt\"></span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<dk-app-search-help></dk-app-search-help>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-list/user-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-list/user-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-3 pt-3\">\n  <div class=\"mt-2 pl-4 row\">\n    <div class=\"col-6 form-group row\">\n      <label for=\"user_id\" class=\"col-sm-3 col-form-label\">User ID:</label>\n      <input id=\"user_id\" name=\"user_id\" [(ngModel)]=\"userID\" type=\"text\" class=\"col-sm-6 form-control\" (keyup)=\"enterSearch($event)\" autofocus>\n    </div>\n    <div class=\"col-6 form-group row\">\n      <label for=\"user_name\" class=\"col-sm-3 col-form-label\">User Name:</label>\n      <input id=\"user_name\" name=\"user_name\" [(ngModel)]=\"userName\" type=\"text\" class=\"col-sm-6 form-control\" (keyup)=\"enterSearch($event)\">\n    </div>\n  </div>\n\n  <div class=\"mb-4\">\n    <button type=\"button\" id=\"search\" class=\"btn btn-primary float-right mr-4\" (click)=\"search()\">Search</button>\n  </div>\n</div>\n\n<div class=\"mt-2 mb-4 mx-4\">\n  <dk-message></dk-message>\n  <div class=\"btn-toolbar justify-content-end my-2\" role=\"toolbar\">\n    <button type=\"button\" id=\"new\" class=\"btn btn-light\" (click)=\"newUser()\"><span class=\"fas fa-plus\"></span> New</button>\n  </div>\n  <table class=\"table table-bordered table-sm\">\n    <thead class=\"thead-light\">\n    <tr>\n      <th scope=\"col\">User ID</th>\n      <th scope=\"col\">User Name</th>\n      <th scope=\"col\">Display Name</th>\n      <th scope=\"col\">Locked?</th>\n      <th scope=\"col\">Password State</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td><a [routerLink]=\"['/users', user.USER_ID, {action: 'display'}]\">{{user.USER_ID}}</a></td>\n      <td>{{user.USER_NAME}}</td>\n      <td>{{user.DISPLAY_NAME}}</td>\n      <td class=\"dk-lock\">\n        <span *ngIf=\"user.LOCK\" class=\"fas fa-lock\" title=\"Locked\"></span>\n        <span *ngIf=\"!user.LOCK\" class=\"fas fa-lock-open\" title=\"Unlocked\"></span>\n      </td>\n      <td class=\"dk-password-state\" [ngSwitch]=\"user.PWD_STATE\">\n        <div *ngSwitchCase=\"\">\n          <span class=\"badge badge-primary\">Initial</span>\n        </div>\n        <div *ngSwitchCase=\"1\">\n          <span class=\"badge badge-success\">Active</span>\n        </div>\n        <div *ngSwitchCase=\"2\">\n          <span class=\"badge badge-warning\">Renew</span>\n        </div>\n      </td>\n      <td class=\"dk-actions\">\n        <button title=\"Display\" id=\"display\" class=\"btn\" type=\"button\" (click)=\"displayUser(user.USER_ID)\">\n          <span class=\"fas fa-search\"></span>\n        </button>\n        <button title=\"Change\" id=\"change\" class=\"btn\" type=\"button\" (click)=\"changeUser(user.USER_ID)\">\n          <span class=\"fas fa-pen\"></span>\n        </button>\n        <button title=\"Delete\" id=\"delete\" class=\"btn\" type=\"button\" (click)=\"deleteUser(user.USER_ID)\">\n          <span class=\"far fa-trash-alt\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n  <div class=\"modal fade dk-modal-open\" [class.show]=\"showDeletionConfirmation\"\n       [ngStyle]=\"{'display': displayDeletionConfirmation}\" id=\"deletionConfirmation\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"confirmDeletion\">Confirm Deletion</h5>\n          <button type=\"button\" class=\"close\" (click)=\"cancelDeletion()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Are you sure to delete the user '{{toBeDeletedUser}}'?</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" id=\"cancel\" class=\"btn btn-secondary\" (click)=\"cancelDeletion()\">Cancel</button>\n          <button type=\"button\" id=\"confirm\" class=\"btn btn-primary\" (click)=\"confirmDeletion()\">Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "./src/app/user/user-list/user-list.component.ts");
/* harmony import */ var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user-detail/user-detail.component */ "./src/app/user/user-detail/user-detail.component.ts");
/* harmony import */ var _work_protection_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-protection.guard */ "./src/app/work-protection.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







const routes = [
    // The dashboard app is lazy loading
    // { path: 'users', loadChildren: 'app/user/user.module#UserModule'},
    { path: 'users', component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
    { path: 'users/:userID', component: _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"], canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_6__["WorkProtectionGuard"]] },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | app-dashboard-dashboard-module */ "app-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! app/dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardModule) },
    { path: 'handsontable', loadChildren: () => __webpack_require__.e(/*! import() | app-handsontable-handsontable-module */ "app-handsontable-handsontable-module").then(__webpack_require__.bind(null, /*! app/handsontable/handsontable.module */ "./src/app/handsontable/handsontable.module.ts")).then(m => m.HandsontableModule) },
    { path: 'errors', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"] },
    { path: 'pageNotFound', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* navigation Frame work */\n.dk-frame-view {\n  display: flex;\n  flex-direction: column;\n  min-width: 768px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.dk-frame-content {\n  display: flex;\n  position: static;\n  height: 100%;\n  width: auto;\n}\n.dk-content-area{\n  width: -webkit-fill-available;\n  width: -moz-available;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100%;\n  padding-left: 1rem;\n  padding-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbmF2aWdhdGlvbiBGcmFtZSB3b3JrICovXG4uZGstZnJhbWUtdmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNzY4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5kay1mcmFtZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbn1cbi5kay1jb250ZW50LWFyZWF7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB3aWR0aDogLW1vei1hdmFpbGFibGU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/side-menu/side-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.service */ "./src/app/history.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity.service */ "./src/app/identity.service.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share.service */ "./src/app/share.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jor-angular */ "./node_modules/jor-angular/fesm2015/jor-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










let AppComponent = class AppComponent {
    constructor(router, activatedRoute, identityService, shareService, historyService, entityService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.identityService = identityService;
        this.shareService = shareService;
        this.historyService = historyService;
        this.entityService = entityService;
        this.isCollapsed = false;
        this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].originalHost);
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(route => route.outlet === 'primary'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(route => {
            let url = '';
            while (route.firstChild) {
                route = route.firstChild;
                if (route.snapshot.url.length > 0) {
                    url = url ? url + '/' + route.snapshot.url.join('/') : route.snapshot.url.join('/');
                }
            }
            return url;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(url => {
            if (this.shareService.apps.length === 0) {
                // return this.identityService.getApp('/' + url);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.shareService.apps.find(app => app.routeLink === '/' + url));
            }
        }))
            .subscribe(app => {
            if (app && app['routeLink']) {
                this.sideMenu.activateApp(app);
                this.historyService.addHistory(app);
            }
        });
    }
    onCollapse() {
        this.isCollapsed = this.sideMenu.collapse();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"] },
    { type: _share_service__WEBPACK_IMPORTED_MODULE_6__["ShareService"] },
    { type: _history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"] },
    { type: jor_angular__WEBPACK_IMPORTED_MODULE_8__["EntityService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"], { static: true }),
    __metadata("design:type", _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"])
], AppComponent.prototype, "sideMenu", void 0);
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"],
        _share_service__WEBPACK_IMPORTED_MODULE_6__["ShareService"],
        _history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"],
        jor_angular__WEBPACK_IMPORTED_MODULE_8__["EntityService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/side-menu/side-menu.component.ts");
/* harmony import */ var _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./head-bar/head-bar.component */ "./src/app/head-bar/head-bar.component.ts");
/* harmony import */ var _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mockup/mockup.module */ "./src/app/mockup/mockup.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./external-app/external-app.module */ "./src/app/external-app/external-app.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm2015/ui-message-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./custom.reuse.strategy */ "./src/app/custom.reuse.strategy.ts");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "./src/app/user/user-list/user-list.component.ts");
/* harmony import */ var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-detail/user-detail.component */ "./src/app/user/user-detail/user-detail.component.ts");
/* harmony import */ var _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user-detail/user-basic/user-basic.component */ "./src/app/user/user-detail/user-basic/user-basic.component.ts");
/* harmony import */ var _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user-detail/user-personalization/user-personalization.component */ "./src/app/user/user-detail/user-personalization/user-personalization.component.ts");
/* harmony import */ var _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/user-detail/user-role/user-role.component */ "./src/app/user/user-detail/user-role/user-role.component.ts");
/* harmony import */ var _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user-detail/user-email/user-email.component */ "./src/app/user/user-detail/user-email/user-email.component.ts");
/* harmony import */ var _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user-detail/user-address/user-address.component */ "./src/app/user/user-detail/user-address/user-address.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jor-angular */ "./node_modules/jor-angular/fesm2015/jor-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};























let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"],
            _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_5__["HeadBarComponent"],
            _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"],
            _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailComponent"],
            _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_16__["UserBasicComponent"],
            _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_17__["UserPersonalizationComponent"],
            _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_18__["UserRoleComponent"],
            _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_19__["UserEmailComponent"],
            _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_20__["UserAddressComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
            _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_11__["MessageModule"],
            _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_6__["MockupModule"],
            _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_8__["ExternalAppModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            jor_angular__WEBPACK_IMPORTED_MODULE_22__["JorAngularModule"]
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouteReuseStrategy"], useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_13__["CustomReuseStrategy"] }
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/custom.reuse.strategy.ts":
/*!******************************************!*\
  !*** ./src/app/custom.reuse.strategy.ts ***!
  \******************************************/
/*! exports provided: CustomReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomReuseStrategy", function() { return CustomReuseStrategy; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class CustomReuseStrategy {
    constructor() {
        this.routesToCache = ['users'];
        this.storedRouteHandles = new Map();
    }
    /**
     * When navigation from a reusable component, and if shouldReuseRoute return false,
     * this method is invoked to decide whether the current route should be stored.
     * @param route
     */
    shouldDetach(route) {
        // console.log('detaching', route);
        return this.routesToCache.indexOf(route.routeConfig.path) > -1;
    }
    /**
     * If the current route need to be stored, that is shouldDetach return true,
     * then on this method, you can implement a way to store routes. Usually in a Map.
     * @param route
     * @param handle
     */
    store(route, handle) {
        // console.log('store', route);
        this.storedRouteHandles.set(route.routeConfig.path, handle);
    }
    /**
     * When navigation to a reusable component, and if shouldReuseRoute return false,
     * this method is invoked to decide whether the target component can be get from a reuse buffer.
     * @param route
     */
    shouldAttach(route) {
        // console.log('shouldAttach', route);
        return this.storedRouteHandles.has(route.routeConfig.path);
    }
    /**
     * If shouldAttach return true, then this method is invoke to retrieve the component from the buffer.
     * @param route
     */
    retrieve(route) {
        return this.storedRouteHandles.get(route.routeConfig.path);
    }
    /**
     * By default, Angular doesn't re-initializing the same component if the navigation is not to
     * a different one. For example, you switch different entity ID in the same entity type detail page.
     * In this way, shouldReuseRoute should return true to avoid executing other methods in this Class.
     * However, if you navigate from search&list component to entity detail component, then the method should return false.
     * So that other methods can be executed to decide whether the search&list component should be stored for future reuse.
     * @param future
     * @param curr
     */
    shouldReuseRoute(future, curr) {
        // console.log('shouldReuseRoute, future:', future, 'current:', curr);
        return future.routeConfig === curr.routeConfig;
    }
}


/***/ }),

/***/ "./src/app/dialog.service.ts":
/*!***********************************!*\
  !*** ./src/app/dialog.service.ts ***!
  \***********************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let DialogService = class DialogService {
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns observable resolving to `true`=confirm or `false`=cancel
     */
    confirm(message) {
        const confirmation = window.confirm(message || 'Is it OK?');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(confirmation);
    }
};
DialogService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], DialogService);



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ErrorPageComponent = class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorPageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-error-page',
        template: __importDefault(__webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], ErrorPageComponent);



/***/ }),

/***/ "./src/app/external-app/external-app-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/external-app/external-app-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ExternalAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalAppRoutingModule", function() { return ExternalAppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _external_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external-app.component */ "./src/app/external-app/external-app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



const routes = [
    {
        path: 'external-app/:appID', component: _external_app_component__WEBPACK_IMPORTED_MODULE_2__["ExternalAppComponent"]
    }
];
let ExternalAppRoutingModule = class ExternalAppRoutingModule {
};
ExternalAppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], ExternalAppRoutingModule);



/***/ }),

/***/ "./src/app/external-app/external-app.component.css":
/*!*********************************************************!*\
  !*** ./src/app/external-app/external-app.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-content-iframe{\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-width: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0ZXJuYWwtYXBwL2V4dGVybmFsLWFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2V4dGVybmFsLWFwcC9leHRlcm5hbC1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29udGVudC1pZnJhbWV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/external-app/external-app.component.ts":
/*!********************************************************!*\
  !*** ./src/app/external-app/external-app.component.ts ***!
  \********************************************************/
/*! exports provided: ExternalAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalAppComponent", function() { return ExternalAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../identity.service */ "./src/app/identity.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let ExternalAppComponent = class ExternalAppComponent {
    constructor(route, shareService, identityService, sanitizer, router) {
        this.route = route;
        this.shareService = shareService;
        this.identityService = identityService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.apps = [];
    }
    ngOnInit() {
        // this.shareService.isCollapsed ? this.iFrameWidth = '95%' : this.iFrameWidth = '80%';
        // this.shareService.isCollapsed$.subscribe( isCollapsed => {
        //   isCollapsed ? this.iFrameWidth = '95%' : this.iFrameWidth = '80%';
        // });
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((params) => {
            const appID = params.get('appID');
            if (this.shareService.apps.length === 0) {
                return this.identityService.getAppRouteLink(appID);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.shareService.apps.find(app => app.appID === appID).originalRouteLink);
            }
        })).subscribe(routeLink => {
            if (routeLink === 'appNotFound') {
                this.router.navigate(['pageNotFound']);
            }
            else {
                const appDangerousUrl = routeLink.substr(0, 4) === 'http' ? routeLink :
                    window.location.origin + routeLink;
                this.appUrl = this.sanitizer.bypassSecurityTrustResourceUrl(appDangerousUrl);
            }
        });
    }
};
ExternalAppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"] },
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ExternalAppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-external-app',
        template: __importDefault(__webpack_require__(/*! raw-loader!./external-app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/external-app/external-app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./external-app.component.css */ "./src/app/external-app/external-app.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"],
        _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], ExternalAppComponent);



/***/ }),

/***/ "./src/app/external-app/external-app.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/external-app/external-app.module.ts ***!
  \*****************************************************/
/*! exports provided: ExternalAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalAppModule", function() { return ExternalAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _external_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external-app-routing.module */ "./src/app/external-app/external-app-routing.module.ts");
/* harmony import */ var _external_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./external-app.component */ "./src/app/external-app/external-app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ExternalAppModule = class ExternalAppModule {
};
ExternalAppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _external_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExternalAppRoutingModule"]
        ],
        declarations: [
            _external_app_component__WEBPACK_IMPORTED_MODULE_3__["ExternalAppComponent"]
        ]
    })
], ExternalAppModule);



/***/ }),

/***/ "./src/app/head-bar/head-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/head-bar/head-bar.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Head Navigation Bar */\n.dk-navbar-inverse{\n  background-color: #2f3c48;\n  display: flex;\n  position: static;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  border-color: #080808;\n}\n.dk-nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.dk-nav>li {\n  display: inline-block;\n}\n.dk-nav>li>a {\n  padding: 10px 15px;\n}\n.dk-nav>li,\n.dk-nav>li>a {\n  position: relative;\n}\n.dk-nav>li>a:focus,\n.dk-nav>li>a:hover {\n  text-decoration: none;\n}\n.dk-nav-toggle{\n  /*Used for figure out toggle in navigation bar*/\n}\n.dk-navbar-nav>li {\n  float:none;\n}\n.dk-navbar-nav>li>a {\n  color: #fafafa;\n  max-width: 100%;\n  display: inline-block;\n  box-sizing: border-box;\n  white-space: pre-line;\n  word-wrap: break-word;\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: Arial,Helvetica,sans-serif;\n  background-color: #2f3c48;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  line-height: 20px;\n}\n.dk-navbar-center{\n  flex-grow:1;\n}\n.dk-navbar-app-title {\n  position: relative;\n  margin: 0 auto;\n  float: none;\n  display: block;\n  width: 300px;\n  text-align: center;\n}\n.dk-navbar-header,\n.dk-navbar-right {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.dk-navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 10px 10px;\n  font-size: 18px;\n  line-height: 30px;\n}\n.dk-navbar-brand>img {\n  display: block;\n  width: 29%;\n}\n.dk-navbar-toggle {\n  display: block;\n  float: left;\n  margin-left: 0.3rem;\n  margin-right: 0;\n  position: relative;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid;\n  border-color: #333;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.dk-navbar-toggle:hover {\n  background-color: #333;\n}\n.dk-navbar-toggle:focus {\n  outline: 0;\n}\n.dk-sr-only {\n  border: 0;\n  clip: rect(0,0,0,0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.dk-navbar-toggle .dk-icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n  background-color: #fff;\n}\n.dk-navbar-toggle .dk-icon-bar+.dk-icon-bar {\n  margin-top: 4px;\n}\n.dk-caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dk-label {\n  display: inline;\n  padding: .3em .6em .3em .3em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  margin-right: 0.5rem;\n}\n.dk-label-warning {\n  background-color: #f0ad4e;\n}\n.dk-badge {\n  position: absolute;\n  top: 1rem;\n  padding: .1rem .4rem;\n  border-radius: .625rem;\n  left: 2.3rem;\n  background-color: #f05050;\n}\n.dk-dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  border-radius: 4px;\n}\n.dk-navbar-nav>li>.dk-dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.open>.dk-dropdown-menu {\n  display: block;\n}\n.dk-dropdown-menu>li>a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: 400;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n  text-decoration: none;\n  background-color: transparent;\n}\n.dk-dropdown-menu>li>a:hover {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dk-dropdown-menu .dk-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dk-text-center {\n  text-align: center;\n}\n.fas {\n  margin-right: 0.5rem;\n}\n@media (min-width: 768px) {\n  .dk-navbar-right\n  .dk-dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .dk-navbar-right {\n    float: right!important;\n    margin-right: -15px;\n  }\n}\n@media (max-width: 767px) {\n  .dk-navbar-nav .open .dk-dropdown-menu {\n    position: absolute;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n    left: auto;\n    right: 1px;\n  }\n  .dk-navbar-nav .open .dk-dropdown-menu > li > a {\n    padding: 3px 20px;\n    line-height: 20px;\n    color: #333;\n  }\n  .dk-navbar-inverse .dk-navbar-nav .open .dk-dropdown-menu > li > a:hover,\n  .dk-navbar-inverse .dk0navbar-nav .open .dk-dropdown-menu > li > a:focus {\n    color: #262626;\n    text-decoration: none;\n    background-color: #f5f5f5;\n  }\n}\n@media (min-width: 150px) {\n  .dk-navbar-nav {\n    float: left;\n    margin: 0 1rem 0 0;\n  }\n  .dk-navbar-app-title {\n    margin: 0 auto;\n    float: none;\n  }\n  .dk-navbar-nav > li {\n    float: left;\n  }\n  .dk-navbar-app-title > li{\n    float: none;\n  }\n  .dk-navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZC1iYXIvaGVhZC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEI7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsT0FBTztFQUNQLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLDhCQUFzQjtFQUF0QiwyQkFBc0I7RUFBdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0U7O0lBRUUsUUFBUTtJQUNSLFVBQVU7RUFDWjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxVQUFVO0lBQ1YsVUFBVTtFQUNaO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjtFQUNBOztJQUVFLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWQtYmFyL2hlYWQtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZWFkIE5hdmlnYXRpb24gQmFyICovXG4uZGstbmF2YmFyLWludmVyc2V7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjNjNDg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDMwO1xuICBib3JkZXItY29sb3I6ICMwODA4MDg7XG59XG4uZGstbmF2IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmRrLW5hdj5saSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5kay1uYXY+bGk+YSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5kay1uYXY+bGksXG4uZGstbmF2PmxpPmEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGstbmF2PmxpPmE6Zm9jdXMsXG4uZGstbmF2PmxpPmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZGstbmF2LXRvZ2dsZXtcbiAgLypVc2VkIGZvciBmaWd1cmUgb3V0IHRvZ2dsZSBpbiBuYXZpZ2F0aW9uIGJhciovXG59XG4uZGstbmF2YmFyLW5hdj5saSB7XG4gIGZsb2F0Om5vbmU7XG59XG4uZGstbmF2YmFyLW5hdj5saT5hIHtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYzQ4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmRrLW5hdmJhci1jZW50ZXJ7XG4gIGZsZXgtZ3JvdzoxO1xufVxuLmRrLW5hdmJhci1hcHAtdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRrLW5hdmJhci1oZWFkZXIsXG4uZGstbmF2YmFyLXJpZ2h0IHtcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbn1cbi5kay1uYXZiYXItYnJhbmQge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uZGstbmF2YmFyLWJyYW5kPmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjklO1xufVxuLmRrLW5hdmJhci10b2dnbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA5cHggMTBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kay1uYXZiYXItdG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbi5kay1uYXZiYXItdG9nZ2xlOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5kay1zci1vbmx5IHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAsMCwwLDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG59XG4uZGstbmF2YmFyLXRvZ2dsZSAuZGstaWNvbi1iYXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uZGstbmF2YmFyLXRvZ2dsZSAuZGstaWNvbi1iYXIrLmRrLWljb24tYmFyIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLmRrLWNhcmV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItdG9wOiA0cHggZGFzaGVkO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5kay1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogLjNlbSAuNmVtIC4zZW0gLjNlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5kay1sYWJlbC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcbn1cbi5kay1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAuMXJlbSAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogLjYyNXJlbTtcbiAgbGVmdDogMi4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1MDUwO1xufVxuLmRrLWRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW46IDJweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZGstbmF2YmFyLW5hdj5saT4uZGstZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuLm9wZW4+LmRrLWRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kay1kcm9wZG93bi1tZW51PmxpPmEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4IDIwcHg7XG4gIGNsZWFyOiBib3RoO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgY29sb3I6ICMzMzM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZGstZHJvcGRvd24tbWVudT5saT5hOmhvdmVyIHtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbi5kay1kcm9wZG93bi1tZW51IC5kay1kaXZpZGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogOXB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG59XG4uZGstdGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmFzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmRrLW5hdmJhci1yaWdodFxuICAuZGstZHJvcGRvd24tbWVudSB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgfVxuICAuZGstbmF2YmFyLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZGstbmF2YmFyLW5hdiAub3BlbiAuZGstZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMXB4O1xuICB9XG4gIC5kay1uYXZiYXItbmF2IC5vcGVuIC5kay1kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICAuZGstbmF2YmFyLWludmVyc2UgLmRrLW5hdmJhci1uYXYgLm9wZW4gLmRrLWRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsXG4gIC5kay1uYXZiYXItaW52ZXJzZSAuZGswbmF2YmFyLW5hdiAub3BlbiAuZGstZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyB7XG4gICAgY29sb3I6ICMyNjI2MjY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNTBweCkge1xuICAuZGstbmF2YmFyLW5hdiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICB9XG4gIC5kay1uYXZiYXItYXBwLXRpdGxlIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAuZGstbmF2YmFyLW5hdiA+IGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuZGstbmF2YmFyLWFwcC10aXRsZSA+IGxpe1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5kay1uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/head-bar/head-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/head-bar/head-bar.component.ts ***!
  \************************************************/
/*! exports provided: HeadBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadBarComponent", function() { return HeadBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../role */ "./src/app/role.ts");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../identity.service */ "./src/app/identity.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let HeadBarComponent = class HeadBarComponent {
    constructor(document, history, identity) {
        this.document = document;
        this.history = history;
        this.identity = identity;
        this.onCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdown = {
            historyOpen: false,
            notificationOpen: false,
            preferenceOpen: false
        };
        this.userBasicInfo = new _role__WEBPACK_IMPORTED_MODULE_1__["UserBasicInfo"]();
    }
    ngOnInit() {
        this.history.currentHistoryObserver.subscribe(history => this.navHistory = history);
        this.history.currentAppObserver.subscribe(currentApp => this.currentApp = currentApp);
        this.identity.getLogonUser().subscribe(logonUser => this.userBasicInfo = logonUser);
    }
    mouseupDocument($event, dropdown) {
        if ($event.srcElement.className !== 'dk-nav-toggle') {
            dropdown.historyOpen = false;
            dropdown.notificationOpen = false;
            dropdown.preferenceOpen = false;
        }
    }
    collapse() {
        this.onCollapse.emit();
    }
    toggleHistoryDropdown() {
        this.dropdown.historyOpen = !this.dropdown.historyOpen;
        this.dropdown.notificationOpen = false;
        this.dropdown.preferenceOpen = false;
    }
    toggleNotificationDropdown() {
        this.dropdown.notificationOpen = !this.dropdown.notificationOpen;
        this.dropdown.historyOpen = false;
        this.dropdown.preferenceOpen = false;
    }
    togglePreferenceOpen() {
        this.dropdown.preferenceOpen = !this.dropdown.preferenceOpen;
        this.dropdown.historyOpen = false;
        this.dropdown.notificationOpen = false;
    }
    logout() {
        this.identity.logout().subscribe(() => this.document.location.href = window.location.origin);
    }
};
HeadBarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
    { type: _history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"] },
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_3__["IdentityService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], HeadBarComponent.prototype, "onCollapse", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:mouseup', ['$event', 'dropdown']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], HeadBarComponent.prototype, "mouseupDocument", null);
HeadBarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-head-bar',
        template: __importDefault(__webpack_require__(/*! raw-loader!./head-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/head-bar/head-bar.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./head-bar.component.css */ "./src/app/head-bar/head-bar.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
    __metadata("design:paramtypes", [Object, _history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"],
        _identity_service__WEBPACK_IMPORTED_MODULE_3__["IdentityService"]])
], HeadBarComponent);



/***/ }),

/***/ "./src/app/history.service.ts":
/*!************************************!*\
  !*** ./src/app/history.service.ts ***!
  \************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HistoryService = class HistoryService {
    constructor() {
        this.navHistory = [];
        this.historySource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentApp = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ name: 'Home' });
        this.NUM_OF_HISTORY = 10;
        this.currentHistoryObserver = this.historySource.asObservable();
        this.currentAppObserver = this.currentApp.asObservable();
    }
    addHistory(app) {
        const idx = this.navHistory.map(ele => ele.routeLink)
            .indexOf(app.routeLink);
        if (idx > -1) {
            this.navHistory.splice(idx, 1);
        }
        this.navHistory.push(app);
        if (this.navHistory.length > this.NUM_OF_HISTORY) {
            this.navHistory.shift();
        }
        this.historySource.next(this.navHistory);
        this.currentApp.next(app);
    }
};
HistoryService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [])
], HistoryService);



/***/ }),

/***/ "./src/app/identity.service.ts":
/*!*************************************!*\
  !*** ./src/app/identity.service.ts ***!
  \*************************************/
/*! exports provided: IdentityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return IdentityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role */ "./src/app/role.ts");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jor-angular */ "./node_modules/jor-angular/fesm2015/jor-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm2015/ui-message-angular.js");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./msgStore */ "./src/app/msgStore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let IdentityService = class IdentityService {
    constructor(http, messageService, router) {
        this.http = http;
        this.messageService = messageService;
        this.router = router;
        this.originalHost = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].originalHost;
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_9__["msgStore"], 'EN');
    }
    /**
     * Logout the system
     */
    logout() {
        return this.http.delete(this.originalHost + '/api/logout', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Logout')));
    }
    getLogonUser() {
        return this.http.get(this.originalHost + '/api/session', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(userSession => {
            const userInfo = new _role__WEBPACK_IMPORTED_MODULE_4__["UserBasicInfo"]();
            userInfo.userID = userSession['identity']['userBasic']['USER_ID'];
            userInfo.userName = userSession['identity']['userBasic']['USER_NAME'];
            userInfo.displayName = userSession['identity']['userBasic']['DISPLAY_NAME'];
            return userInfo;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDetail')));
    }
    /**
     * Get a role detail information from backend based on an authenticated user
     * @returns {Observable<Role>}
     */
    getRoleDetail() {
        return this.http.post(this.originalHost + `/api/function/getRoleDetail`, {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDetail')));
    }
    /**
     * Get an APP detail based on a routeLink
     * @param {string} routeLink
     * @returns {Observable<App>}
     */
    getApp(routeLink) {
        if (routeLink.substr(0, 13) === '/external-app') {
            return this.http.post(this.originalHost + `/api/entity/instance`, { RELATION_ID: 'app', APP_ID: routeLink.substr(14) }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(appEntity => {
                const app = new _role__WEBPACK_IMPORTED_MODULE_4__["App"];
                if (Array.isArray(appEntity)) {
                    appEntity = appEntity[0];
                } // Could return an array, like message or multiple entities
                if (appEntity['ENTITY_ID']) { // It returns entity instance, rather than an error message;
                    app.name = appEntity['app'][0]['NAME'];
                    app.routeLink = routeLink;
                }
                return app;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getApp')));
        }
        else {
            return this.http.post(this.originalHost + `/api/entity/instance`, { RELATION_ID: 'app', ROUTE_LINK: routeLink }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(appEntity => {
                const app = new _role__WEBPACK_IMPORTED_MODULE_4__["App"];
                if (Array.isArray(appEntity)) {
                    appEntity = appEntity[0];
                }
                if (appEntity['ENTITY_ID']) {
                    app.name = appEntity['app'][0]['NAME'];
                    app.routeLink = appEntity['app'][0]['ROUTE_LINK'];
                }
                return app;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getApp')));
        }
    }
    /**
     * Get an APP's routelink from its appID
     * @param appID
     */
    getAppRouteLink(appID) {
        return this.http.post(this.originalHost + `/api/entity/instance`, { RELATION_ID: 'app', APP_ID: appID }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(appEntity => {
            if (Array.isArray(appEntity)) {
                appEntity = appEntity[0];
            } // Could return an array, like message or multiple entities
            if (appEntity['ENTITY_ID']) { // It returns entity instance, rather than an error message;
                return appEntity['app'][0]['ROUTE_LINK'];
            }
            else {
                return 'appNotFound';
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAppRouteLink')));
    }
    searchUsers(userID, userName) {
        const queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_5__["QueryObject"]();
        queryObject.ENTITY_ID = 'person';
        queryObject.RELATION_ID = 'r_user';
        queryObject.PROJECTION = ['USER_ID', 'USER_NAME', 'DISPLAY_NAME', 'LOCK', 'PWD_STATE'];
        queryObject.FILTER = [];
        if (userID) {
            if (userID.includes('*') || userID.includes('%')) {
                queryObject.FILTER.push({ FIELD_NAME: 'USER_ID', OPERATOR: 'CN', LOW: userID });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'USER_ID', OPERATOR: 'EQ', LOW: userID });
            }
        }
        if (userName) {
            if (userName.includes('*')) {
                userName = userName.replace(/\*/gi, '%');
                queryObject.FILTER.push({ FIELD_NAME: 'USER_NAME', OPERATOR: 'CN', LOW: userName });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'USER_NAME', OPERATOR: 'EQ', LOW: userName });
            }
        }
        queryObject.SORT = ['USER_ID'];
        return this.http.post(this.originalHost + `/api/query`, queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchObjects')));
    }
    getUserDetail(userID) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_user', USER_ID: userID },
            piece: { RELATIONS: ['r_user', 'r_employee', 'r_email', 'r_address', 'r_personalization'],
                RELATIONSHIPS: [
                    {
                        RELATIONSHIP_ID: 'rs_user_role',
                        PARTNER_ENTITY_PIECES: { RELATIONS: ['r_role'] }
                    }
                ]
            }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserDetail')));
    }
    getUserByUserID(userID) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_user', USER_ID: userID },
            piece: { RELATIONS: ['r_user'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserByUserID')));
    }
    getUserByUserName(userName) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_user', USER_NAME: userName },
            piece: { RELATIONS: ['r_user'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserByUserName')));
    }
    getRoleDesc(roleID) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_role', NAME: roleID },
            piece: { RELATIONS: ['r_role'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(instance => {
            return 'INSTANCE_GUID' in instance ?
                {
                    INSTANCE_GUID: instance['INSTANCE_GUID'],
                    DESCRIPTION: instance['r_role'] ? instance['r_role'][0]['DESCRIPTION'] : ''
                } : instance[0];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDesc')));
    }
    saveUser(user) {
        if (user['INSTANCE_GUID']) {
            return this.http.put(this.originalHost + `/api/entity`, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveUser')));
        }
        else {
            return this.http.post(this.originalHost + `/api/entity`, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveUser')));
        }
    }
    deleteUser(userGUID) {
        return this.http.delete(this.originalHost + `/api/entity/instance/` + userGUID, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteUser')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            if (error.status === 401) {
                this.messageService.addMessage('EXCEPTION', 'NOT_AUTHENTICATED_OR_SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["messageType"].Exception);
            }
            else {
                this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["messageType"].Exception, operation, error.message);
            }
            this.router.navigate(['errors']);
            console.error(operation, error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
};
IdentityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
IdentityService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], IdentityService);



/***/ }),

/***/ "./src/app/mockup/mockup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mockup/mockup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MockupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockupRoutingModule", function() { return MockupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mockup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mockup.component */ "./src/app/mockup/mockup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



const routes = [
    {
        path: 'mockup/:UI', component: _mockup_component__WEBPACK_IMPORTED_MODULE_2__["MockupComponent"]
    }
];
let MockupRoutingModule = class MockupRoutingModule {
};
MockupRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], MockupRoutingModule);



/***/ }),

/***/ "./src/app/mockup/mockup.component.css":
/*!*********************************************!*\
  !*** ./src/app/mockup/mockup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vY2t1cC9tb2NrdXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/mockup/mockup.component.ts":
/*!********************************************!*\
  !*** ./src/app/mockup/mockup.component.ts ***!
  \********************************************/
/*! exports provided: MockupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockupComponent", function() { return MockupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let MockupComponent = class MockupComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() { }
    ngDoCheck() {
        this.mockupUI = 'assets/' + this.route.snapshot.paramMap.get('UI') + '.png';
    }
};
MockupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
MockupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mockup',
        template: '<img [src]="mockupUI" style="max-width: 100%">',
        styles: [__importDefault(__webpack_require__(/*! ./mockup.component.css */ "./src/app/mockup/mockup.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
], MockupComponent);



/***/ }),

/***/ "./src/app/mockup/mockup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/mockup/mockup.module.ts ***!
  \*****************************************/
/*! exports provided: MockupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockupModule", function() { return MockupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _mockup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mockup.component */ "./src/app/mockup/mockup.component.ts");
/* harmony import */ var _mockup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mockup-routing.module */ "./src/app/mockup/mockup-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let MockupModule = class MockupModule {
};
MockupModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _mockup_routing_module__WEBPACK_IMPORTED_MODULE_3__["MockupRoutingModule"]
        ],
        declarations: [
            _mockup_component__WEBPACK_IMPORTED_MODULE_2__["MockupComponent"]
        ]
    })
], MockupModule);



/***/ }),

/***/ "./src/app/msgStore.ts":
/*!*****************************!*\
  !*** ./src/app/msgStore.ts ***!
  \*****************************/
/*! exports provided: msgStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgStore", function() { return msgStore; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const msgStore = [
    { msgCat: "EXCEPTION",
        msgName: "GENERIC",
        msgText: {
            EN: { shortText: "Exception Occurs in Operation: '%s'",
                longText: "%s1" }
        }
    },
    { msgCat: "EXCEPTION",
        msgName: "NOT_AUTHENTICATED_OR_SESSION_EXPIRED",
        msgText: {
            EN: { shortText: "You are not authenticated or your session is expired!",
                longText: "You are not authenticated or your session is expired, please <a href='/logon'>re-logon</a>." }
        }
    },
    { msgCat: "GENERAL",
        msgName: "EMPTY_LIST",
        msgText: {
            EN: { shortText: "No result is found",
                longText: "The system cannot find any items meet the search criteria." }
        }
    },
    { msgCat: "GENERAL",
        msgName: "UNSAVED_CHANGES",
        msgText: {
            EN: {
                shortText: "There are unsaved changes. Do you want to save the changes?",
                longText: ""
            }
        }
    },
    { msgCat: "GENERAL",
        msgName: "NO_CHANGE",
        msgText: {
            EN: {
                shortText: "No change is made, saving is not necessary.",
                longText: "The data is not changed, thus there is no need to save changes"
            }
        }
    },
    { msgCat: "USER",
        msgName: "INVALID",
        msgText: {
            EN: { shortText: "Data is invalid, please check.",
                longText: "The data still contains some errors, please make sure all mandatory fields are filled!" }
        }
    },
    { msgCat: "USER",
        msgName: "USER_NAME_EXISTS",
        msgText: {
            EN: { shortText: "User name: '%s' already exists!",
                longText: "" }
        }
    },
    { msgCat: "USER",
        msgName: "USER_ID_EXISTS",
        msgText: {
            EN: { shortText: "User ID: '%s' already exists!",
                longText: "" }
        }
    },
    { msgCat: "USER",
        msgName: "AT_LEAST_ONE_EMAIL",
        msgText: {
            EN: {
                shortText: "At least one email needs to be maintained!",
                longText: ""
            }
        }
    },
    { msgCat: "USER",
        msgName: "USER_SAVED",
        msgText: {
            EN: {
                shortText: "User '%s' is saved!",
                longText: ""
            }
        }
    }
];


/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-not-found',
        template: __importDefault(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/role.ts":
/*!*************************!*\
  !*** ./src/app/role.ts ***!
  \*************************/
/*! exports provided: Role, Catalog, App, UserBasicInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catalog", function() { return Catalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBasicInfo", function() { return UserBasicInfo; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Role {
}
class Catalog {
}
class App {
}
class UserBasicInfo {
}


/***/ }),

/***/ "./src/app/share.service.ts":
/*!**********************************!*\
  !*** ./src/app/share.service.ts ***!
  \**********************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ShareService = class ShareService {
    constructor() {
        this.apps = [];
        this.isCollapsed = false;
        this.isCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isCollapsed$ = this.isCollapsedSubject.asObservable();
    }
    updateIsCollapsed(status) {
        this.isCollapsed = status;
        this.isCollapsedSubject.next(this.isCollapsed);
    }
};
ShareService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], ShareService);



/***/ }),

/***/ "./src/app/side-menu/side-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/side-menu/side-menu.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*Side Navigation Bar*/\n.dk-side-menu {\n  font-family: Arial,Helvetica,sans-serif;\n  font-size: 1.5rem;\n  font-weight: 200;\n  position: static;\n  width: 24rem;\n  height: 100%;\n  background: #3f5161;\n  color: #fafafa;;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n  z-index: 1031;\n}\n.dk-menu-list {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  overflow: auto;\n}\n.dk-search-box {\n  line-height: 2.5rem;\n  background-color: #2f3c48;\n  border-width: 1px;\n  border-color: gray;\n}\n.dk-side-menu-collapsed {\n  width: 5rem;\n  background: #394958;\n}\n.dk-side-menu-hover {\n  display: block;\n  position: absolute;\n  visibility: hidden;\n  opacity:0;\n  width: 22rem;\n  left: 6rem;\n  border-radius: 0.3rem;\n  z-index: 1031;\n  overflow: auto;\n  background: #394958;\n  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);\n  bottom: 1rem;\n}\n.dk-side-menu-hover-show {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.3s linear, opacity 0.3s linear;\n}\n.dk-side-menu ul,\n.dk-side-menu li {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  line-height: 4rem;\n  cursor: pointer;\n}\n.dk-side-menu li a {\n  display: block;\n  text-decoration: none;\n  color: #fafafa;\n}\n.dk-menu-search {\n  list-style-position: inside;\n  border-bottom: 1px;\n  border-bottom-color: dimgray;\n  border-bottom-style: solid;\n}\n.dk-menu-search-hover {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 45rem;\n}\n.dk-menu-content {\n  width: 100%;\n}\n.dk-menu-content-hover {\n  z-index: 1031;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  padding-bottom: 1rem;\n}\n.dk-menu-content-hover>li {\n  padding-left: 1rem;\n  border-bottom: thin dotted #fafafa;\n}\n.dk-menu-content>li:hover {\n  background-color: #4f5b69;\n  transition: all 0.3s ease;\n}\n.dk-menu-content>li>a:hover {\n  border-left: 4px solid #d19b3d;\n  transition: all 0.3s ease;\n}\n.arrow {\n  float: right;\n  margin: 1rem !important;\n}\n.dk-menu-content>li {\n  display: none;\n}\n.dk-menu-content>li.menuDisplay {\n  display: list-item;\n}\n.dk-menu-content>li.active{\n  background-color: #465969;\n  border-bottom: 1px solid #4d6377;\n  z-index: 60;\n}\n.dk-menu-content>li.active>a{\n  border-left: 4px solid #d19b3d;\n  z-index: 60;\n}\n.dk-sub-menu {\n  display: block;\n  overflow: hidden;\n}\n.dk-sub-menu.expended {\n  opacity: 1;\n  max-height: 50rem;\n  transition: opacity 0.5s, max-height 0.5s;\n}\n.dk-sub-menu.collapsed {\n  opacity: 0;\n  max-height: 0;\n  transition: opacity 275ms, max-height 0.28s;\n}\n.dk-sub-menu li {\n  background-color: #394958;\n  border: none;\n  line-height: 2.8rem;\n  padding-left: 4rem;\n}\n.dk-sub-menu-collapsed li {\n  line-height: 3rem;\n  padding-left: 2rem;\n}\n.dk-sub-menu li.active{\n  color: #d19b3d;\n}\n.dk-sub-menu li.active a {\n  color: #d19b3d;\n}\n.dk-sub-menu li:hover {\n  background-color: #4f7393;\n}\n.dk-popover-arrow {\n  content: \" \";\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  left: 5.5rem;\n  background-color: #394958;\n  transform: rotate(-45deg);\n  pointer-events: none;\n  position: absolute;\n  z-index: 1030;\n  visibility: hidden;\n  opacity: 0;\n  /*transition: none;*/\n}\n.dk-popover-arrow-show {\n  /*width: 1rem;*/\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.3s 10ms linear, opacity 0.3s 0.2s linear;\n}\n.dk-separator {\n  margin: 0.25rem 1rem;\n  height: 1px;\n  min-height: 1px;\n  background-color: #0092d1;\n}\n.dk-menu-bottom {\n  display: block;\n  vertical-align: bottom;\n  position: static;\n}\n.dk-menu-bottom>.dk-menu-content>li {\n  display: list-item;\n}\n.fas{\n  margin:0 1.3rem;\n  font-size: 1.8rem;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0QjtFQUNFLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHVEQUF1RDtBQUN6RDtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlFQUFpRTtBQUNuRTtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypTaWRlIE5hdmlnYXRpb24gQmFyKi9cbi5kay1zaWRlLW1lbnUge1xuICBmb250LWZhbWlseTogQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB3aWR0aDogMjRyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzNmNTE2MTtcbiAgY29sb3I6ICNmYWZhZmE7O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB6LWluZGV4OiAxMDMxO1xufVxuLmRrLW1lbnUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZGstc2VhcmNoLWJveCB7XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjNjNDg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGdyYXk7XG59XG4uZGstc2lkZS1tZW51LWNvbGxhcHNlZCB7XG4gIHdpZHRoOiA1cmVtO1xuICBiYWNrZ3JvdW5kOiAjMzk0OTU4O1xufVxuLmRrLXNpZGUtbWVudS1ob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTowO1xuICB3aWR0aDogMjJyZW07XG4gIGxlZnQ6IDZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgei1pbmRleDogMTAzMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMzOTQ5NTg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gIGJvdHRvbTogMXJlbTtcbn1cbi5kay1zaWRlLW1lbnUtaG92ZXItc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4zcyBsaW5lYXIsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4uZGstc2lkZS1tZW51IHVsLFxuLmRrLXNpZGUtbWVudSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kay1zaWRlLW1lbnUgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmFmYWZhO1xufVxuLmRrLW1lbnUtc2VhcmNoIHtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICBib3JkZXItYm90dG9tOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGRpbWdyYXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xufVxuLmRrLW1lbnUtc2VhcmNoLWhvdmVyIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWF4LWhlaWdodDogNDVyZW07XG59XG4uZGstbWVudS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGstbWVudS1jb250ZW50LWhvdmVyIHtcbiAgei1pbmRleDogMTAzMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbi5kay1tZW51LWNvbnRlbnQtaG92ZXI+bGkge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IHRoaW4gZG90dGVkICNmYWZhZmE7XG59XG4uZGstbWVudS1jb250ZW50PmxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNWI2OTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5kay1tZW51LWNvbnRlbnQ+bGk+YTpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2QxOWIzZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hcnJvdyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4uZGstbWVudS1jb250ZW50PmxpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5kay1tZW51LWNvbnRlbnQ+bGkubWVudURpc3BsYXkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG4uZGstbWVudS1jb250ZW50PmxpLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NTk2OTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZDYzNzc7XG4gIHotaW5kZXg6IDYwO1xufVxuLmRrLW1lbnUtY29udGVudD5saS5hY3RpdmU+YXtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZDE5YjNkO1xuICB6LWluZGV4OiA2MDtcbn1cbi5kay1zdWItbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRrLXN1Yi1tZW51LmV4cGVuZGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgbWF4LWhlaWdodDogNTByZW07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cywgbWF4LWhlaWdodCAwLjVzO1xufVxuLmRrLXN1Yi1tZW51LmNvbGxhcHNlZCB7XG4gIG9wYWNpdHk6IDA7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjc1bXMsIG1heC1oZWlnaHQgMC4yOHM7XG59XG4uZGstc3ViLW1lbnUgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0OTU4O1xuICBib3JkZXI6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cbi5kay1zdWItbWVudS1jb2xsYXBzZWQgbGkge1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuLmRrLXN1Yi1tZW51IGxpLmFjdGl2ZXtcbiAgY29sb3I6ICNkMTliM2Q7XG59XG4uZGstc3ViLW1lbnUgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogI2QxOWIzZDtcbn1cbi5kay1zdWItbWVudSBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjczOTM7XG59XG4uZGstcG9wb3Zlci1hcnJvdyB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbGVmdDogNS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0OTU4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDMwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIC8qdHJhbnNpdGlvbjogbm9uZTsqL1xufVxuLmRrLXBvcG92ZXItYXJyb3ctc2hvdyB7XG4gIC8qd2lkdGg6IDFyZW07Ki9cbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjNzIDEwbXMgbGluZWFyLCBvcGFjaXR5IDAuM3MgMC4ycyBsaW5lYXI7XG59XG4uZGstc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwLjI1cmVtIDFyZW07XG4gIGhlaWdodDogMXB4O1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDkyZDE7XG59XG4uZGstbWVudS1ib3R0b20ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cbi5kay1tZW51LWJvdHRvbT4uZGstbWVudS1jb250ZW50PmxpIHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuLmZhc3tcbiAgbWFyZ2luOjAgMS4zcmVtO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/side-menu/side-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/side-menu/side-menu.component.ts ***!
  \**************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../role */ "./src/app/role.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fuzzysort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuzzysort */ "./node_modules/fuzzysort/fuzzysort.js");
/* harmony import */ var fuzzysort__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fuzzysort__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../identity.service */ "./src/app/identity.service.ts");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm2015/ui-message-angular.js");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










let SideMenuComponent = class SideMenuComponent {
    constructor(identityService, messageService, shareService, router) {
        this.identityService = identityService;
        this.messageService = messageService;
        this.shareService = shareService;
        this.router = router;
        this.activeRow = null;
        this.mouseLocs = [];
        this.lastDelayLoc = null;
        this.timeoutId = null;
        this.rem = 0;
        this.searchTerms = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.menuDisplay = true;
        this.TOLERANCE = 75; // bigger = more forgive when entering submenu
        this.DELAY = 600; // ms delay when user appears to be entering submenu
        this.isCollapsed = false;
        this.role = new _role__WEBPACK_IMPORTED_MODULE_1__["Role"];
    }
    ngOnInit() {
        this.rem = parseInt(window.getComputedStyle(document.head).getPropertyValue('font-size'), 10);
        this.identityService.getRoleDetail().subscribe(roles => this._processRoleData(roles));
        this.shareService.updateIsCollapsed(this.isCollapsed);
        this.apps$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => {
            const results = fuzzysort__WEBPACK_IMPORTED_MODULE_5__["go"](term, this.shareService.apps, { key: 'name' });
            const returnedApps = [];
            results.forEach(result => returnedApps.push(result.obj));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(returnedApps);
        }));
        this.apps$.subscribe(searchedApps => this.searchedApps = searchedApps);
    }
    _processRoleData(roles) {
        if (!roles) {
            return;
        }
        this.role = roles[0]; // Currently, only support one role per user logon
        if (this.role['msgCat']) {
            this.messageService.clearMessages();
            roles.forEach(msg => this.messageService.add(msg));
            this.router.navigate(['errors']);
        }
        else {
            this.role.categories.forEach(category => {
                category.height = category.originalHeight = (category.apps.length + 1) * 3 + 2;
                category.active = false;
                category.isSubMenuShow = false;
                category.apps.forEach(app => {
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
    searchApp(term) {
        this.searchTerms.next(term);
        this.menuDisplay = !term;
    }
    enterApp($event) {
        if ($event.keyCode === 13 && this.searchedApps[0]) {
            this.router.navigate([this.searchedApps[0].routeLink]);
        }
    }
    collapse() {
        for (const category of this.role.categories) {
            category.isSubMenuShow = false;
        }
        this.menuDisplay = true;
        this.isCollapsed = !this.isCollapsed;
        this.shareService.updateIsCollapsed(this.isCollapsed);
        return this.isCollapsed;
    }
    activateSubMenu(row) {
        const menuHeight = this.sideMenu.nativeElement.offsetHeight / this.rem;
        const menuScrollTop = this.sideMenu.nativeElement.getElementsByClassName('dk-menu-list')[0].scrollTop / this.rem;
        if (menuHeight + 1 - 4 * row + menuScrollTop <= this.role.categories[row].originalHeight) {
            this.role.categories[row].top = null;
            if (menuHeight + 3 <= this.role.categories[row].originalHeight) {
                this.role.categories[row].height = menuHeight + 3;
            }
            else {
                this.role.categories[row].height = this.role.categories[row].originalHeight;
            }
        }
        else {
            this.role.categories[row].top = 5 + 4 * row - menuScrollTop;
        }
        this.role.categories[row].arrowTop = 6 + 4 * row - menuScrollTop;
        this.role.categories[row].isSubMenuShow = true;
    }
    deactivateSubMenu(row) {
        this.role.categories[row].isSubMenuShow = false;
    }
    /**
     * Keep track of the last few locations of the mouse.
     */
    mousemoveDocument(e, mouseLocs) {
        mouseLocs.push({ x: e.pageX, y: e.pageY });
        if (mouseLocs.length > 3) { // '30' of the past mouse locations to track
            mouseLocs.shift();
        }
    }
    /**
     * Cancel possible row activations when leaving the menu entirely
     */
    mouseleaveMenu() {
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
    isMouseInMenuArea() {
        if (!this.activeRow) {
            return false;
        }
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
    mouseenterRow(row) {
        if (this.timeoutId) {
            // Cancel any previous activation delays
            clearTimeout(this.timeoutId);
        }
        this.possiblyActivate(row);
    }
    /**
     * Trigger a row deactivation whenever leaving a row.
     */
    mouseleaveRow(row) {
        if (!this.isMouseInMenuArea()) {
            this.deactivateSubMenu(row);
        }
    }
    /**
     * Set the current opened app to be active
     * @param {App} app
     */
    activateApp(app) {
        // Clear the existing active app
        let appIdx = -1;
        let catalogIdx = this.role.categories.findIndex(category => category.active === true);
        if (catalogIdx > -1) {
            this.role.categories[catalogIdx].active = false;
            if (!this.role.categories[catalogIdx].routeLink) {
                appIdx = this.role.categories[catalogIdx].apps.findIndex(app1 => app1.active === true);
                if (appIdx > -1) {
                    this.role.categories[catalogIdx].apps[appIdx].active = false;
                }
            }
        }
        // Set the new active app
        catalogIdx = this.role.categories.findIndex(category => {
            if (category.routeLink === app.routeLink) {
                return true;
            }
            else {
                appIdx = category.apps.findIndex(app1 => app1.routeLink === app.routeLink);
                return appIdx > -1;
            }
        });
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
    clickRow(row) {
        if (this.isCollapsed) {
            this.activate(row);
        }
        else {
            this.role.categories[row].isSubMenuShow = !this.role.categories[row].isSubMenuShow;
        }
    }
    /**
     * Hide the sub-menu
     */
    hideSubMenu() {
        this.role.categories[this.activeRow].isSubMenuShow = false;
    }
    /**
     * Activate a menu row.
     */
    activate(row) {
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
    possiblyActivate(row) {
        const delay = this.activationDelay();
        if (delay) {
            this.timeoutId = setTimeout(() => this.possiblyActivate(row), delay);
        }
        else {
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
    activationDelay() {
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
        const decreasingCorner = upperRight, increasingCorner = lowerRight;
        const decreasingSlope = slope(loc, decreasingCorner), increasingSlope = slope(loc, increasingCorner), prevDecreasingSlope = slope(prevLoc, decreasingCorner), prevIncreasingSlope = slope(prevLoc, increasingCorner);
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
};
SideMenuComponent.ctorParameters = () => [
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_7__["IdentityService"] },
    { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
    { type: _share_service__WEBPACK_IMPORTED_MODULE_9__["ShareService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sideMenu', { static: true }),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], SideMenuComponent.prototype, "sideMenu", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:mousemove', ['$event', 'mouseLocs']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SideMenuComponent.prototype, "mousemoveDocument", null);
SideMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-side-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./side-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/side-menu/side-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./side-menu.component.css */ "./src/app/side-menu/side-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [_identity_service__WEBPACK_IMPORTED_MODULE_7__["IdentityService"],
        ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
        _share_service__WEBPACK_IMPORTED_MODULE_9__["ShareService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SideMenuComponent);



/***/ }),

/***/ "./src/app/user/user-detail/async-validators.ts":
/*!******************************************************!*\
  !*** ./src/app/user/user-detail/async-validators.ts ***!
  \******************************************************/
/*! exports provided: existingUserNameValidator, existingUserIDValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingUserNameValidator", function() { return existingUserNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingUserIDValidator", function() { return existingUserIDValidator; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


function existingUserNameValidator(identityService, messageService, userID) {
    return (control) => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => identityService.getUserByUserName(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            if (data['r_user'] && data['r_user'][0]['USER_ID'] !== userID) {
                return { message: messageService.generateMessage('USER', 'USER_NAME_EXISTS', 'E', control.value).msgShortText };
            }
            else {
                return null;
            }
        }))));
    };
}
function existingUserIDValidator(identityService, messageService) {
    return (control) => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => identityService.getUserByUserID(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            if (data['r_user'] && data['r_user'][0]['USER_ID'] === control.value) {
                return { message: messageService.generateMessage('USER', 'USER_ID_EXISTS', 'E', control.value).msgShortText };
            }
            else {
                return null;
            }
        }))));
    };
}


/***/ }),

/***/ "./src/app/user/user-detail/user-address/user-address.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/user/user-detail/user-address/user-address.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1hZGRyZXNzL3VzZXItYWRkcmVzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user-detail/user-address/user-address.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/user-detail/user-address/user-address.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddressComponent", function() { return UserAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let UserAddressComponent = class UserAddressComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.userAddressFormArray = this.userForm.get('addresses');
    }
    addAddress() {
        const addressFormGroup = this.fb.group({
            ADDRESS_ID: [''],
            TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ADDRESS_VALUE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            POSTCODE: [''],
            CITY: [''],
            COUNTRY: [''],
            PRIMARY: []
        });
        if (this.userAddressFormArray.length === 0) {
            addressFormGroup.get('PRIMARY').setValue(1);
            addressFormGroup.get('PRIMARY').markAsDirty();
        }
        this.userAddressFormArray.push(addressFormGroup);
    }
    deleteAddress(index) {
        if (this.userAddressFormArray.length > 1 &&
            this.userAddressFormArray.at(index).value['PRIMARY']) {
            const newPrimaryIndex = index === 0 ? 1 : 0;
            this.userAddressFormArray.at(newPrimaryIndex).get('PRIMARY').setValue(1);
            this.userAddressFormArray.at(newPrimaryIndex).get('PRIMARY').markAsDirty();
        }
        this.userAddressFormArray.removeAt(index);
        this.userAddressFormArray.markAsDirty();
    }
};
UserAddressComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], UserAddressComponent.prototype, "readonly", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
], UserAddressComponent.prototype, "userForm", void 0);
UserAddressComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-address',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-address/user-address.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-address.component.css */ "./src/app/user/user-detail/user-address/user-address.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], UserAddressComponent);



/***/ }),

/***/ "./src/app/user/user-detail/user-basic/user-basic.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user/user-detail/user-basic/user-basic.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dk-form-label {\n  font-size: 1.2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLWJhc2ljL3VzZXItYmFzaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1iYXNpYy91c2VyLWJhc2ljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/user/user-detail/user-basic/user-basic.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-detail/user-basic/user-basic.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBasicComponent", function() { return UserBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let UserBasicComponent = class UserBasicComponent {
    constructor() { }
    ngOnInit() {
        this.userBasicNamesForm = this.userForm.get('userBasic.names');
        this.userBasicEmployeeForm = this.userForm.get('userBasic.employee');
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], UserBasicComponent.prototype, "readonly", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
], UserBasicComponent.prototype, "userForm", void 0);
UserBasicComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-basic',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-basic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-basic/user-basic.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-basic.component.css */ "./src/app/user/user-detail/user-basic/user-basic.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], UserBasicComponent);



/***/ }),

/***/ "./src/app/user/user-detail/user-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/user-detail/user-detail.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dk-btn-size {\n  font-size: 1.5rem;\n}\n.dk-form-label {\n  font-size: 1.2rem;\n}\n.dk-fixed-top {\n  position: relative;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 500;\n}\n.dk-icon {\n  border: none;\n  font-size: 1.2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstYnRuLXNpemUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5kay1mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uZGstZml4ZWQtdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1MDA7XG59XG4uZGstaWNvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/user/user-detail/user-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/user-detail/user-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm2015/ui-message-angular.js");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../msgStore */ "./src/app/msgStore.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../identity.service */ "./src/app/identity.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jor-angular */ "./node_modules/jor-angular/fesm2015/jor-angular.js");
/* harmony import */ var _async_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./async-validators */ "./src/app/user/user-detail/async-validators.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dialog.service */ "./src/app/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











let UserDetailComponent = class UserDetailComponent {
    constructor(fb, route, router, dialogService, identityService, uiMapperService, messageService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
        this.identityService = identityService;
        this.uiMapperService = uiMapperService;
        this.messageService = messageService;
        this.readonly = true;
        this.isNewMode = false;
        this.originalUserValue = {};
        this.changedUser = {};
        this.tabStrip = 1;
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_4__["msgStore"], 'EN');
    }
    get pwdStatus() {
        switch (this.userForm.get('PWD_STATUS').value) {
            case '':
                return 'Initial';
            case 1:
                return 'Active';
            case 3:
                return 'Need Change';
            default:
                return 'Initial';
        }
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => {
            this.action = params.get('action');
            if (this.action === 'new') {
                this.isNewMode = true;
                return this._createNewUser();
            }
            else {
                this.isNewMode = false;
                return this.identityService.getUserDetail(params.get('userID'));
            }
        })).subscribe(data => {
            if ('ENTITY_ID' in data) {
                this.instanceGUID = data['INSTANCE_GUID'];
                this._generateUserForm(data);
                if (this.isNewMode || this.action === 'change') {
                    this._switch2EditMode();
                }
                else {
                    this._switch2DisplayMode();
                }
            }
            else {
                const errorMessages = data;
                errorMessages.forEach(msg => this.messageService.add(msg));
            }
        });
    }
    switchTabStrip(tabStripID) {
        this.tabStrip = tabStripID;
    }
    switchEditDisplay() {
        if (this.readonly) {
            this._switch2EditMode();
        }
        else {
            if (this.userForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(confirm => {
                    if (confirm) {
                        this.userForm.reset(this.originalUserValue);
                        this._switch2DisplayMode();
                    }
                });
            }
            else {
                this._switch2DisplayMode();
            }
        }
        this.messageService.clearMessages();
    }
    _switch2DisplayMode() {
        this.readonly = true;
        this._setCheckBoxState();
        const userIDCtrl = this.userForm.get('USER_ID');
        userIDCtrl.clearAsyncValidators();
        const userNameCtrl = this.userForm.get('userBasic.names.USER_NAME');
        userNameCtrl.clearAsyncValidators();
        const emailArray = this.userForm.get('emails');
        let lastIndex = emailArray.length - 1;
        while (lastIndex >= 0) {
            const emailFormGroup = emailArray.at(lastIndex);
            if (emailFormGroup.invalid || !emailFormGroup.value.EMAIL) {
                emailArray.removeAt(lastIndex);
            }
            lastIndex--;
        }
        const addressArray = this.userForm.get('addresses');
        lastIndex = addressArray.length - 1;
        while (lastIndex >= 0) {
            const addressFormGroup = addressArray.at(lastIndex);
            if (addressFormGroup.invalid || !addressFormGroup.value.ADDRESS_VALUE) {
                addressArray.removeAt(lastIndex);
            }
            lastIndex--;
        }
        const roleArray = this.userForm.get('userRole');
        lastIndex = roleArray.length - 1;
        while (lastIndex >= 0) {
            const roleFormGroup = roleArray.at(lastIndex);
            if (roleFormGroup.invalid || !roleFormGroup.value.NAME) {
                roleArray.removeAt(lastIndex);
            }
            lastIndex--;
        }
        this.userForm.markAsPristine();
        // Replace the URL from change to display
        window.history.replaceState({}, '', `/users/${userIDCtrl.value};action=display`);
    }
    _switch2EditMode() {
        this.readonly = false;
        this._setCheckBoxState();
        const userIDCtrl = this.userForm.get('USER_ID');
        if (this.isNewMode) {
            userIDCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_9__["existingUserIDValidator"])(this.identityService, this.messageService));
        }
        const userNameCtrl = this.userForm.get('userBasic.names.USER_NAME');
        userNameCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_9__["existingUserNameValidator"])(this.identityService, this.messageService, this.userForm.get('USER_ID').value));
        const roleArray = this.userForm.get('userRole');
        roleArray.push(this.fb.group({
            NAME: [''],
            DESCRIPTION: [''],
            system_role_INSTANCE_GUID: [''],
            RELATIONSHIP_INSTANCE_GUID: [''],
        }));
        // Replace the URL from to display
        if (this.action === 'display') {
            this.action = 'change';
        }
        window.history.replaceState({}, '', `/users/${userIDCtrl.value};action=` + this.action);
    }
    _createNewUser() {
        const userDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_8__["Entity"]();
        userDetail['ENTITY_ID'] = 'person';
        userDetail['r_user'] = [
            { USER_ID: '', LOCK: 0, PWD_STATUS: '', USER_NAME: '', DISPLAY_NAME: '',
                GIVEN_NAME: '', MIDDLE_NAME: '', FAMILY_NAME: '' }
        ];
        userDetail['r_employee'] = [
            { TITLE: '', DEPARTMENT_ID: '', COMPANY_ID: '', GENDER: '' }
        ];
        userDetail['r_email'] = [];
        userDetail['r_personalization'] = [
            { USER_ID: '', LANGUAGE: '', TIMEZONE: '', DECIMAL_FORMAT: '', DATE_FORMAT: '' }
        ];
        userDetail['relationships'] = [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(userDetail);
    }
    _generateUserForm(data) {
        this.userForm = this.fb.group({
            USER_ID: [data['r_user'][0]['USER_ID'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            LOCK: [data['r_user'][0]['LOCK']],
            PWD_STATUS: [data['r_user'][0]['PWD_STATUS']],
            userBasic: this.fb.group({
                names: this.fb.group({
                    USER_NAME: [data['r_user'][0]['USER_NAME'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    DISPLAY_NAME: [data['r_user'][0]['DISPLAY_NAME'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    GIVEN_NAME: [data['r_user'][0]['GIVEN_NAME']],
                    MIDDLE_NAME: [data['r_user'][0]['MIDDLE_NAME']],
                    FAMILY_NAME: [data['r_user'][0]['FAMILY_NAME']]
                }),
                employee: this.fb.group({
                    TITLE: [data['r_employee'][0]['TITLE']],
                    DEPARTMENT_ID: [data['r_employee'][0]['DEPARTMENT_ID']],
                    COMPANY_ID: [data['r_employee'][0]['COMPANY_ID'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    GENDER: [data['r_employee'][0]['GENDER']]
                })
            }),
            emails: this.fb.array([]),
            addresses: this.fb.array([]),
            userPersonalization: this.fb.group({
                USER_ID: [data['r_personalization'] ? data['r_personalization'][0]['USER_ID'] : ''],
                LANGUAGE: [data['r_personalization'] ? data['r_personalization'][0]['LANGUAGE'] : ''],
                TIMEZONE: [data['r_personalization'] ? data['r_personalization'][0]['TIMEZONE'] : ''],
                DECIMAL_FORMAT: [data['r_personalization'] ? data['r_personalization'][0]['DECIMAL_FORMAT'] : ''],
                DATE_FORMAT: [data['r_personalization'] ? data['r_personalization'][0]['DATE_FORMAT'] : '']
            }),
            userRole: this.fb.array([])
        });
        const emailArray = this.userForm.get('emails');
        data['r_email'].forEach(email => {
            emailArray.push(this.fb.group({
                EMAIL: [email['EMAIL'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                TYPE: [email['TYPE'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                PRIMARY: [email['PRIMARY']]
            }));
        });
        const addressArray = this.userForm.get('addresses');
        if (data['r_address']) {
            data['r_address'].forEach(address => {
                addressArray.push(this.fb.group({
                    ADDRESS_ID: [address['ADDRESS_ID']],
                    TYPE: [address['TYPE'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    ADDRESS_VALUE: [address['ADDRESS_VALUE'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    POSTCODE: [address['POSTCODE']],
                    CITY: [address['CITY']],
                    COUNTRY: [address['COUNTRY']],
                    PRIMARY: [address['PRIMARY']]
                }));
            });
        }
        const roleArray = this.userForm.get('userRole');
        const userRoleRelationship = data['relationships'][0];
        if (userRoleRelationship) {
            userRoleRelationship.values.forEach(value => {
                const roleInstance = value.PARTNER_INSTANCES[0];
                roleArray.push(this.fb.group({
                    NAME: [roleInstance['r_role'][0]['NAME']],
                    DESCRIPTION: [roleInstance['r_role'][0]['DESCRIPTION']],
                    system_role_INSTANCE_GUID: [roleInstance['INSTANCE_GUID']],
                    RELATIONSHIP_INSTANCE_GUID: [value['RELATIONSHIP_INSTANCE_GUID']]
                }));
            });
        }
        this.originalUserValue = this.userForm.getRawValue();
    }
    _resetUserValue(data) {
        this.originalUserValue = {
            USER_ID: data['r_user'][0]['USER_ID'],
            LOCK: data['r_user'][0]['LOCK'],
            PWD_STATUS: data['r_user'][0]['PWD_STATUS'],
            userBasic: {
                names: {
                    USER_NAME: data['r_user'][0]['USER_NAME'],
                    DISPLAY_NAME: data['r_user'][0]['DISPLAY_NAME'],
                    GIVEN_NAME: data['r_user'][0]['GIVEN_NAME'],
                    MIDDLE_NAME: data['r_user'][0]['MIDDLE_NAME'],
                    FAMILY_NAME: data['r_user'][0]['FAMILY_NAME']
                },
                employee: {
                    TITLE: data['r_employee'][0]['TITLE'],
                    DEPARTMENT_ID: data['r_employee'][0]['DEPARTMENT_ID'],
                    COMPANY_ID: data['r_employee'][0]['COMPANY_ID'],
                    GENDER: data['r_employee'][0]['GENDER']
                }
            },
            emails: [],
            addresses: [],
            userPersonalization: {
                USER_ID: data['r_personalization'] ? data['r_personalization'][0]['USER_ID'] : '',
                LANGUAGE: data['r_personalization'] ? data['r_personalization'][0]['LANGUAGE'] : '',
                TIMEZONE: data['r_personalization'] ? data['r_personalization'][0]['TIMEZONE'] : '',
                DECIMAL_FORMAT: data['r_personalization'] ? data['r_personalization'][0]['DECIMAL_FORMAT'] : '',
                DATE_FORMAT: data['r_personalization'] ? data['r_personalization'][0]['DATE_FORMAT'] : ''
            },
            userRole: []
        };
        data['r_email'].forEach(email => {
            this.originalUserValue['emails'].push({
                EMAIL: email['EMAIL'],
                TYPE: email['TYPE'],
                PRIMARY: email['PRIMARY']
            });
        });
        if (data['r_address']) {
            data['r_address'].forEach(address => {
                this.originalUserValue['addresses'].push({
                    ADDRESS_ID: address['ADDRESS_ID'],
                    TYPE: address['TYPE'],
                    ADDRESS_VALUE: address['ADDRESS_VALUE'],
                    POSTCODE: address['POSTCODE'],
                    CITY: address['CITY'],
                    COUNTRY: address['COUNTRY'],
                    PRIMARY: address['PRIMARY']
                });
            });
        }
        const userRoleRelationship = data['relationships'][0];
        if (userRoleRelationship) {
            userRoleRelationship.values.forEach(value => {
                const roleInstance = value.PARTNER_INSTANCES[0];
                this.originalUserValue['userRole'].push({
                    NAME: [roleInstance['r_role'][0]['NAME']],
                    DESCRIPTION: [roleInstance['r_role'][0]['DESCRIPTION']],
                    system_role_INSTANCE_GUID: [roleInstance['INSTANCE_GUID']],
                    RELATIONSHIP_INSTANCE_GUID: [value['RELATIONSHIP_INSTANCE_GUID']]
                });
            });
        }
        this.userForm.reset(this.originalUserValue);
    }
    _setCheckBoxState() {
        const userEmailFormArray = this.userForm.get('emails');
        const userAddressFormArray = this.userForm.get('addresses');
        if (this.readonly) {
            userEmailFormArray.controls.forEach(userEmailForm => userEmailForm.get('PRIMARY').disable());
            userAddressFormArray.controls.forEach(userEmailForm => userEmailForm.get('PRIMARY').disable());
        }
        else {
            userEmailFormArray.controls.forEach(userEmailForm => userEmailForm.get('PRIMARY').enable());
            userAddressFormArray.controls.forEach(userEmailForm => userEmailForm.get('PRIMARY').enable());
        }
    }
    save() {
        this.messageService.clearMessages();
        if (this._composeChangesToUser()) {
            this.identityService.saveUser(this.changedUser).subscribe(data => {
                this.changedUser = {};
                if ('INSTANCE_GUID' in data) {
                    const userID = data['r_user'][0]['USER_ID'];
                    this.instanceGUID = data['INSTANCE_GUID'];
                    this.isNewMode = false;
                    this.identityService.getUserDetail(userID).subscribe(userData => {
                        if ('ENTITY_ID' in userData) {
                            this._switch2DisplayMode();
                            this._resetUserValue(userData);
                        }
                        else {
                            const errorMessages = userData;
                            errorMessages.forEach(msg => this.messageService.add(msg));
                        }
                    });
                    this.messageService.reportMessage('USER', 'USER_SAVED', 'S', userID);
                }
                else {
                    const errorMessages = data;
                    errorMessages.forEach(msg => this.messageService.add(msg));
                }
            });
        }
    }
    _composeChangesToUser() {
        if (this.userForm.invalid) {
            this.messageService.reportMessage('USER', 'INVALID', 'E');
            return false;
        }
        if (this.userForm.dirty === false) {
            this.messageService.reportMessage('GENERAL', 'NO_CHANGE', 'W');
            return false;
        }
        this.changedUser['ENTITY_ID'] = 'person';
        this.changedUser['INSTANCE_GUID'] = this.instanceGUID;
        if (this.isNewMode) {
            this.changedUser['person'] = { action: 'add' };
        }
        const userBasicFormGroup = this.userForm.get('userBasic');
        const userID = this.userForm.get('USER_ID').value;
        if (userBasicFormGroup.dirty) {
            const userBasicNamesFormGroup = userBasicFormGroup.get('names');
            this.changedUser['r_user'] = this.uiMapperService.composeChangedRelation(userBasicNamesFormGroup, { USER_ID: userID }, this.isNewMode);
            const userBasicEmployeeFormGroup = userBasicFormGroup.get('employee');
            this.changedUser['r_employee'] = this.uiMapperService.composeChangedRelation(userBasicEmployeeFormGroup, { USER_ID: userID }, this.isNewMode);
        }
        const userEmailFormArray = this.userForm.get('emails');
        this.changedUser['r_email'] = this.uiMapperService.composeChangedRelationArray(userEmailFormArray, this.originalUserValue['emails'], { EMAIL: null });
        const userAddressFormArray = this.userForm.get('addresses');
        this.changedUser['r_address'] = this.uiMapperService.composeChangedRelationArray(userAddressFormArray, this.originalUserValue['addresses'], { ADDRESS_ID: null });
        const userPersonalizationFormGroup = this.userForm.get('userPersonalization');
        this.changedUser['r_personalization'] = this.uiMapperService.composeChangedRelation(userPersonalizationFormGroup, { USER_ID: userID }, !userPersonalizationFormGroup.get('USER_ID').value);
        const userRoleFormArray = this.userForm.get('userRole');
        const relationship = this.uiMapperService.composeChangedRelationship('rs_user_role', [{ ENTITY_ID: 'permission', ROLE_ID: 'system_role' }], userRoleFormArray, this.originalUserValue['userRole'], ['NAME', 'DESCRIPTION']);
        if (relationship) {
            this.changedUser['relationships'] = [relationship];
        }
        return true;
    }
    canDeactivate() {
        if (this.isNewMode || (this.userForm && this.userForm.dirty)) {
            return this.dialogService.confirm('Discard changes?');
        }
        else {
            return true;
        }
    }
};
UserDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] },
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] },
    { type: jor_angular__WEBPACK_IMPORTED_MODULE_8__["UiMapperService"] },
    { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
UserDetailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-detail',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-detail.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user/user-detail/user-detail.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"],
        _identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"],
        jor_angular__WEBPACK_IMPORTED_MODULE_8__["UiMapperService"],
        ui_message_angular__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], UserDetailComponent);



/***/ }),

/***/ "./src/app/user/user-detail/user-email/user-email.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user/user-detail/user-email/user-email.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1lbWFpbC91c2VyLWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user/user-detail/user-email/user-email.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-detail/user-email/user-email.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEmailComponent", function() { return UserEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm2015/ui-message-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let UserEmailComponent = class UserEmailComponent {
    constructor(fb, messageService) {
        this.fb = fb;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.userEmailFormArray = this.userForm.get('emails');
        if (!this.readonly && this.userEmailFormArray.length === 0) {
            this.addEmail();
        }
    }
    addEmail() {
        const emailFormGroup = this.fb.group({
            EMAIL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            PRIMARY: ['']
        });
        if (this.userEmailFormArray.length === 0) {
            emailFormGroup.get('PRIMARY').setValue(1);
            emailFormGroup.get('PRIMARY').markAsDirty();
        }
        this.userEmailFormArray.push(emailFormGroup);
    }
    deleteEmail(index) {
        if (this.userEmailFormArray.length === 1) {
            this.messageService.reportMessage('USER', 'AT_LEAST_ONE_EMAIL', 'E');
        }
        else {
            if (this.userEmailFormArray.at(index).value['PRIMARY']) {
                const newPrimaryIndex = index === 0 ? 1 : 0;
                this.userEmailFormArray.at(newPrimaryIndex).get('PRIMARY').setValue(1);
                this.userEmailFormArray.at(newPrimaryIndex).get('PRIMARY').markAsDirty();
            }
            this.userEmailFormArray.removeAt(index);
            this.userEmailFormArray.markAsDirty();
        }
    }
};
UserEmailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], UserEmailComponent.prototype, "readonly", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
], UserEmailComponent.prototype, "userForm", void 0);
UserEmailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-email',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-email/user-email.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-email.component.css */ "./src/app/user/user-detail/user-email/user-email.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
], UserEmailComponent);



/***/ }),

/***/ "./src/app/user/user-detail/user-personalization/user-personalization.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/user/user-detail/user-personalization/user-personalization.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dk-form-label {\n  font-size: 1.2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLXBlcnNvbmFsaXphdGlvbi91c2VyLXBlcnNvbmFsaXphdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLXBlcnNvbmFsaXphdGlvbi91c2VyLXBlcnNvbmFsaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWZvcm0tbGFiZWwge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/user/user-detail/user-personalization/user-personalization.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/user/user-detail/user-personalization/user-personalization.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserPersonalizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPersonalizationComponent", function() { return UserPersonalizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let UserPersonalizationComponent = class UserPersonalizationComponent {
    constructor() { }
    ngOnInit() {
        this.userPersonalizationForm = this.userForm.get('userPersonalization');
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], UserPersonalizationComponent.prototype, "readonly", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
], UserPersonalizationComponent.prototype, "userForm", void 0);
UserPersonalizationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-personalization',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-personalization.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-personalization/user-personalization.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-personalization.component.css */ "./src/app/user/user-detail/user-personalization/user-personalization.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], UserPersonalizationComponent);



/***/ }),

/***/ "./src/app/user/user-detail/user-role/user-role.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/user-detail/user-role/user-role.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name{\n  width: 20rem;\n}\n.dk-description{\n  width: 40rem;\n}\n.dk-actions{\n  width: 3rem;\n}\n.dk-form-label {\n  font-size: 1.2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLXJvbGUvdXNlci1yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1yb2xlL3VzZXItcm9sZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1uYW1le1xuICB3aWR0aDogMjByZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiA0MHJlbTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogM3JlbTtcbn1cbi5kay1mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/user/user-detail/user-role/user-role.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-detail/user-role/user-role.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleComponent", function() { return UserRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../identity.service */ "./src/app/identity.service.ts");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ "./node_modules/jor-angular/fesm2015/jor-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let UserRoleComponent = class UserRoleComponent {
    constructor(fb, identityService) {
        this.fb = fb;
        this.identityService = identityService;
    }
    ngOnInit() {
        this.userRoleFormArray = this.userForm.get('userRole');
        // Recheck each role since every time the template is initialized, Angular clears the error status.
        if (!this.readonly) {
            this.userRoleFormArray.controls.forEach((ctrl, index) => {
                this.onChangeRoleID(index);
            });
        }
    }
    deleteRole(index) {
        if (index !== this.userRoleFormArray.length - 1) {
            this.userRoleFormArray.removeAt(index);
            this.userRoleFormArray.markAsDirty();
        }
    }
    onChangeRoleID(index) {
        const currentRole = this.userRoleFormArray.at(index);
        if (this.oldRole(currentRole)) {
            currentRole.get('NAME').setErrors({ message: 'Duplicate Role' });
            return;
        }
        if (index === this.userRoleFormArray.length - 1 && currentRole.value.NAME.trim() !== '') {
            // Only work if the last line is not new and empty
            this.userRoleFormArray.push(this.fb.group({
                NAME: [''],
                DESCRIPTION: [''],
                system_role_INSTANCE_GUID: [''],
                RELATIONSHIP_INSTANCE_GUID: ['']
            }));
        }
        if (currentRole.value.NAME) {
            this.identityService.getRoleDesc(currentRole.value.NAME).subscribe(data => {
                if (data['msgCat']) {
                    currentRole.get('NAME').setErrors({ message: data['msgShortText'] });
                }
                else {
                    currentRole.get('DESCRIPTION').setValue(data['DESCRIPTION']);
                    currentRole.get('system_role_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);
                }
            });
        }
    }
    oldRole(userRoleForm) {
        const existIndex = this.userRoleFormArray.controls.findIndex(role => role.value.NAME === userRoleForm.value.NAME && role.pristine && role.value.NAME !== '');
        return existIndex !== -1;
    }
    onSearchHelp(rowID, exportObject) {
        const afterExportFn = function (context, ruleIdx) {
            return () => context.onChangeRoleID(ruleIdx);
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModalByEntity('permission', 'r_role', exportObject, this.readonly, null, null, afterExportFn);
    }
};
UserRoleComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], UserRoleComponent.prototype, "readonly", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
], UserRoleComponent.prototype, "userForm", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], { static: true }),
    __metadata("design:type", jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"])
], UserRoleComponent.prototype, "searchHelpComponent", void 0);
UserRoleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-role',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-detail/user-role/user-role.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-role.component.css */ "./src/app/user/user-detail/user-role/user-role.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"]])
], UserRoleComponent);



/***/ }),

/***/ "./src/app/user/user-list/user-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dk-lock {\n  width: 5rem;\n  max-width: 5rem;\n  min-width: 5rem;\n}\n.dk-password-state {\n  width: 15rem;\n  max-width: 15rem;\n  min-width: 15rem;\n}\n.dk-actions{\n  width: 9rem;\n  min-width: 9rem;\n  max-width: 9rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay1sb2NrIHtcbiAgd2lkdGg6IDVyZW07XG4gIG1heC13aWR0aDogNXJlbTtcbiAgbWluLXdpZHRoOiA1cmVtO1xufVxuLmRrLXBhc3N3b3JkLXN0YXRlIHtcbiAgd2lkdGg6IDE1cmVtO1xuICBtYXgtd2lkdGg6IDE1cmVtO1xuICBtaW4td2lkdGg6IDE1cmVtO1xufVxuLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiA5cmVtO1xuICBtaW4td2lkdGg6IDlyZW07XG4gIG1heC13aWR0aDogOXJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm2015/ui-message-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../identity.service */ "./src/app/identity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let UserListComponent = class UserListComponent {
    constructor(identityService, messageService, router) {
        this.identityService = identityService;
        this.messageService = messageService;
        this.router = router;
        this.showDeletionConfirmation = false;
    }
    get displayDeletionConfirmation() { return this.showDeletionConfirmation ? 'block' : 'none'; }
    ngOnInit() {
    }
    search() {
        this.messageService.clearMessages();
        this.users = [];
        this.userID = this.userID ? this.userID.trim() : '';
        this.userName = this.userName ? this.userName.trim() : '';
        this.identityService.searchUsers(this.userID, this.userName).subscribe(data => {
            if (!data[0]) {
                this.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["messageType"].Warning);
            }
            else if (data[0]['msgCat']) {
                const messages = data;
                messages.forEach(msg => this.messageService.add(msg));
            }
            else {
                this.users = data;
            }
        });
    }
    enterSearch($event) {
        if ($event.keyCode === 13) {
            this.search();
        }
    }
    newUser() {
        this.router.navigate(['users', '/', { action: 'new' }]);
    }
    displayUser(userID) {
        this.router.navigate(['users', userID, { action: 'display' }]);
    }
    changeUser(userID) {
        this.router.navigate(['users', userID, { action: 'change' }]);
    }
    deleteUser(userID) {
        this.toBeDeletedUser = userID;
        this.showDeletionConfirmation = true;
    }
    cancelDeletion() {
        this.showDeletionConfirmation = false;
    }
    confirmDeletion() {
        const toBeDeletedUserGUID = this.users.find(ele => ele.USER_ID === this.toBeDeletedUser).INSTANCE_GUID;
        this.identityService.deleteUser(toBeDeletedUserGUID).subscribe(errorMsg => {
            this.showDeletionConfirmation = false;
            if (errorMsg) {
                const messages = errorMsg;
                messages.forEach(msg => this.messageService.add(msg));
            }
            else {
                this.search();
            }
        });
    }
};
UserListComponent.ctorParameters = () => [
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_3__["IdentityService"] },
    { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-list/user-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-list.component.css */ "./src/app/user/user-list/user-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_identity_service__WEBPACK_IMPORTED_MODULE_3__["IdentityService"],
        ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserListComponent);



/***/ }),

/***/ "./src/app/work-protection.guard.ts":
/*!******************************************!*\
  !*** ./src/app/work-protection.guard.ts ***!
  \******************************************/
/*! exports provided: WorkProtectionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkProtectionGuard", function() { return WorkProtectionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let WorkProtectionGuard = class WorkProtectionGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
};
WorkProtectionGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], WorkProtectionGuard);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    originalHost: 'http://localhost:3000'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/VinceZK/workspace/javascript/Portal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map