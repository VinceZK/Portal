(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/logon/fesm2015/ui-logon-angular.js":
/*!*************************************************!*\
  !*** ./dist/logon/fesm2015/ui-logon-angular.js ***!
  \*************************************************/
/*! exports provided: LandingPageComponent, LogonComponent, LogonModule, LogonService, PluralField, Projection, QueryObject, Selection, Sort, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogonComponent", function() { return LogonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogonModule", function() { return LogonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogonService", function() { return LogonService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralField", function() { return PluralField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projection", function() { return Projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryObject", function() { return QueryObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm2015/ui-message-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const msgStore = [
    { msgCat: 'EXCEPTION',
        msgName: 'GENERIC',
        msgText: {
            EN: { shortText: 'Exception Occurs',
                longText: '%s1' }
        }
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class LogonService {
    /**
     * @param {?} http
     * @param {?} messageService
     */
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.host = '';
        this.messageService.setMessageStore(msgStore, 'EN');
    }
    /**
     * @param {?} host
     * @return {?}
     */
    setHost(host) {
        this.host = host;
    }
    /**
     * @param {?} userid
     * @param {?} password
     * @return {?}
     */
    logon(userid, password) {
        return this.http.post(this.host ? this.host + '/api/logon' : 'api/logon', { username: userid, password: password }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Logon')));
    }
    /**
     * @return {?}
     */
    logout() {
        return this.http.delete(this.host ? this.host + '/api/logout' : 'api/logout', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Logout')));
    }
    /**
     * @return {?}
     */
    session() {
        return this.http.get(this.host ? this.host + '/api/session' : 'api/session', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Get session')));
    }
    /**
     * @param {?} queryObject
     * @return {?}
     */
    query(queryObject) {
        return this.http.post(this.host ? this.host + '/api/query' : 'api/query', queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('query')));
    }
    /**
     * @param {?} instanceGUID
     * @return {?}
     */
    read(instanceGUID) {
        return this.http.get(this.host ? this.host + `/api/entity/instance/${instanceGUID}` : `api/entity/instance/${instanceGUID}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('read')));
    }
    /**
     * @private
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    handleError(operation = 'operation', result) {
        return (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["messageType"].Exception, JSON.stringify(error));
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])((/** @type {?} */ (result)));
        });
    }
}
LogonService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LogonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
/** @nocollapse */ LogonService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LogonService_Factory() { return new LogonService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); }, token: LogonService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class User {
}
if (false) {}
class PluralField {
}
if (false) {}
class QueryObject {
}
if (false) {}
class Projection {
}
if (false) {}
class Selection {
}
if (false) {}
class Sort {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LogonComponent {
    /**
     * @param {?} document
     * @param {?} router
     * @param {?} route
     * @param {?} autofill
     * @param {?} logonService
     * @param {?} messageService
     */
    constructor(document, router, route, autofill, logonService, messageService) {
        this.document = document;
        this.router = router;
        this.route = route;
        this.autofill = autofill;
        this.logonService = logonService;
        this.messageService = messageService;
        this.user = new User;
        this.isWaiting = false;
        this.title = 'Logon Portal';
        this.userLabel = 'User ID';
        this.pwdLabel = 'Password';
        this.btnLabel = 'Logon';
        this.redirectUrl = '';
        this.redirectPath = '';
        this.host = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.autofill.monitor(this.inputUserID.nativeElement);
        this.autofill.monitor(this.inputPassword.nativeElement);
        if (this.route.snapshot.data['title']) {
            this.title = this.route.snapshot.data['title'];
        }
        if (this.route.snapshot.data['userLabel']) {
            this.userLabel = this.route.snapshot.data['userLabel'];
        }
        if (this.route.snapshot.data['pwdLabel']) {
            this.pwdLabel = this.route.snapshot.data['pwdLabel'];
        }
        if (this.route.snapshot.data['btnLabel']) {
            this.btnLabel = this.route.snapshot.data['btnLabel'];
        }
        if (this.route.snapshot.data['redirectUrl']) {
            this.redirectUrl = this.route.snapshot.data['redirectUrl'];
        }
        if (this.route.snapshot.data['redirectPath']) {
            this.redirectPath = this.route.snapshot.data['redirectPath'];
        }
        if (this.route.snapshot.data['host']) {
            this.host = this.route.snapshot.data['host'];
        }
        this.logonService.setHost(this.host);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.autofill.stopMonitoring(this.inputUserID.nativeElement);
        this.autofill.stopMonitoring(this.inputPassword.nativeElement);
    }
    /**
     * @return {?}
     */
    logon() {
        this.isWaiting = true;
        this.logonService.logon(this.user.userid, this.user.password).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.isWaiting = false;
            if (!data) {
                return;
            }
            if (data.err) {
                if (Array.isArray(data.err)) {
                    data.err.forEach((/**
                     * @param {?} err
                     * @return {?}
                     */
                    err => this.messageService.add(err)));
                }
                else {
                    this.messageService.report((/** @type {?} */ (data.err)));
                }
            }
            else {
                this.user.displayName = data.user['DISPLAY_NAME'];
                this.user.userid = data.user['USER_ID'];
                this.user.username = data.user['USER_NAME'];
                this.user.locked = data.user['LOCK'];
                this.user.pwdState = data.user['PWD_STATE'];
                this.user.name = data.user['GIVEN_NAME'];
                if (this.redirectPath) {
                    this.router.navigateByUrl(this.redirectPath);
                }
                else if (this.redirectUrl) {
                    this.document.location.href = this.redirectUrl;
                }
            }
        }));
    }
}
LogonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'dk-logon',
                template: "<form class=\"dk-form-logon\" (ngSubmit)=\"logon()\">\n  <fieldset [disabled]=\"isWaiting\">\n    <div class=\"text-center dk-mb-4\">\n      <!--<img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">-->\n      <h1 class=\"dk-form-title dk-mb-3 font-weight-normal\">{{title}}</h1>\n    </div>\n\n    <div class=\"dk-message-area\">\n      <dk-message></dk-message>\n    </div>\n\n    <div class=\"dk-form-label-group\">\n      <input type=\"text\" id=\"inputUserID\" name=\"inputUserID\" #inputUserID class=\"form-control dk-form-control\"\n             [(ngModel)]=\"user.userid\" placeholder=\"User ID\" required=\"\" autofocus=\"\">\n      <label for=\"inputUserID\">{{userLabel}}</label>\n    </div>\n\n    <div class=\"dk-form-label-group\">\n      <input type=\"password\" id=\"inputPassword\" name=\"inputPassword\" #inputPassword class=\"form-control dk-form-control\"\n             [(ngModel)]=\"user.password\" placeholder=\"Password\" required=\"\">\n      <label for=\"inputPassword\">{{pwdLabel}}</label>\n    </div>\n\n    <button class=\"btn dk-btn-lg btn-primary btn-block\" type=\"submit\">\n      <i *ngIf=\"isWaiting\" class=\"fas fa-spinner fa-spin\"></i> {{btnLabel}}\n    </button>\n  </fieldset>\n</form>\n\n",
                styles: [".dk-form-logon{width:100%;max-width:420px;padding:15px;margin:0 auto;line-height:1.5;--input-padding-x:0.75rem;--input-padding-y:0.75rem}.dk-form-logon label{margin-bottom:.5rem;font-size:1rem}.dk-message-area{margin-bottom:.5rem}.dk-mb-3{margin-bottom:1rem}.dk-mb-4{margin-bottom:1.5rem}.dk-form-title{font-size:1.75rem;line-height:1.2;color:inherit;font-family:inherit}.dk-form-label-group{position:relative;margin-bottom:1rem}.dk-form-control{font-size:1rem;border-radius:.25rem;height:calc(2.9rem + 2px)}.dk-form-label-group>input,.dk-form-label-group>label{padding:var(--input-padding-y) var(--input-padding-x)}.dk-form-label-group>label{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;border:1px solid transparent;border-radius:.25rem;transition:.1s ease-in-out}.dk-form-label-group input::-webkit-input-placeholder{color:transparent}.dk-form-label-group input:-ms-input-placeholder{color:transparent}.dk-form-label-group input::-ms-input-placeholder{color:transparent}.dk-form-label-group input::-moz-placeholder{color:transparent}.dk-form-label-group input::placeholder{color:transparent}.dk-form-label-group input:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start;transition:background-color 50000s ease-in-out}.dk-form-label-group input:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}.dk-form-label-group input.cdk-text-field-autofilled,.dk-form-label-group input:not(:placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));padding-bottom:calc(var(--input-padding-y)/ 3)}.dk-form-label-group input.cdk-text-field-autofilled~label,.dk-form-label-group input:not(:placeholder-shown)~label{padding-top:calc(var(--input-padding-y)/ 3);padding-bottom:calc(var(--input-padding-y)/ 3);font-size:.75rem;color:#777}.dk-btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}"]
            }] }
];
/** @nocollapse */
LogonComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__["AutofillMonitor"] },
    { type: LogonService },
    { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
LogonComponent.propDecorators = {
    inputUserID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputUserID', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true },] }],
    inputPassword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputPassword', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true },] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    userLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pwdLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    btnLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    redirectUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    redirectPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    host: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LandingPageComponent {
    /**
     * @param {?} router
     * @param {?} logonService
     */
    constructor(router, logonService) {
        this.router = router;
        this.logonService = logonService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    logout() {
        this.logonService.logout().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.router.navigateByUrl('');
        }));
    }
    /**
     * @return {?}
     */
    session() {
        this.logonService.session().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.result = data;
        }));
    }
    /**
     * @return {?}
     */
    query() {
        /** @type {?} */
        const queryObject = (/** @type {?} */ ({
            ENTITY_ID: 'person',
            RELATION_ID: 'r_user'
        }));
        this.logonService.query(queryObject).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this.result = data));
    }
    /**
     * @return {?}
     */
    read() {
        this.logonService.read('2FBE7490E10F11E8A90957FA46F2CECA').subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this.result = data));
    }
}
LandingPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'dk-landing-page',
                template: "<h4>\n  Logon Successfully\n</h4>\n\n<div class=\"btn-group\" role=\"group\">\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"logout()\">Logout</button>\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"session()\">Get Session</button>\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"query()\">Query</button>\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"read()\">Read</button>\n</div>\n<div class=\"container\">\n  <pre>{{result | json}}</pre>\n</div>\n"
            }] }
];
/** @nocollapse */
LandingPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: LogonService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LogonModule {
}
LogonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageModule"]
                ],
                declarations: [LogonComponent, LandingPageComponent],
                exports: [LogonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ui-logon-angular.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dk-logon-view\">\n  <router-outlet></router-outlet>\n</div>\n");

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dk-logon-view {\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWxvZ29uLXZpZXcge1xufVxuIl19 */");

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-logon-angular */ "./dist/logon/fesm2015/ui-logon-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







const appRoutes = [
    {
        path: '', component: ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LogonComponent"],
        data: {
            title: 'Logon Portal (DH001/Dark1234)', userLabel: 'User ID', pwdLabel: 'Password', btnLabel: 'Sign In',
            redirectPath: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectPath, redirectUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectUrl, host: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host
        }
    },
    { path: 'landing', component: ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LogonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    redirectPath: '',
    redirectUrl: '/portal/external-app/Modeling',
    host: 'http://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! /Users/VinceZK/workspace/javascript/Logon/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map