(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"app-dashboard-dashboard-module"
	],
	"app/handsontable/handsontable.module": [
		"./src/app/handsontable/handsontable.module.ts",
		"app-handsontable-handsontable-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    // The dashboard app is lazy loading
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'handsontable', loadChildren: 'app/handsontable/handsontable.module#HandsontableModule' },
    { path: 'errors', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"] },
    { path: 'pageNotFound', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* navigation Frame work */\n.dk-frame-view {\n  display: flex;\n  flex-direction: column;\n  min-width: 768px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.dk-frame-content {\n  display: flex;\n  position: static;\n  height: 100%;\n  width: auto;\n}\n.dk-content-area{\n  overflow: auto;\n  padding-left: 1rem;\n  padding-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0NBQ2I7QUFDRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBuYXZpZ2F0aW9uIEZyYW1lIHdvcmsgKi9cbi5kay1mcmFtZS12aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiA3NjhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRrLWZyYW1lLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmRrLWNvbnRlbnQtYXJlYXtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dk-frame-view\">\n  <!-- Head Bar Navigation -->\n  <app-head-bar (onCollapse)=\"onCollapse()\"></app-head-bar>\n\n  <div class=\"dk-frame-content\">\n    <!-- Side Bar Navigation -->\n    <app-side-menu></app-side-menu>\n\n    <!-- Content Area -->\n    <div class=\"dk-content-area\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/side-menu/side-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.service */ "./src/app/history.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity.service */ "./src/app/identity.service.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share.service */ "./src/app/share.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, identityService, shareService, historyService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.identityService = identityService;
        this.shareService = shareService;
        this.historyService = historyService;
        this.isCollapsed = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (route) {
            var url = '';
            while (route.firstChild) {
                route = route.firstChild;
                if (route.snapshot.url.length > 0) {
                    url = url ? url + '/' + route.snapshot.url.join('/') : route.snapshot.url.join('/');
                }
            }
            return url;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (url) {
            if (_this.shareService.apps.length === 0) {
                return _this.identityService.getApp('/' + url);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(_this.shareService.apps.find(function (app) { return app.routeLink === '/' + url; }));
            }
        }))
            .subscribe(function (app) {
            if (app.routeLink) {
                _this.sideMenu.activateApp(app);
                _this.historyService.addHistory(app);
            }
        });
    };
    AppComponent.prototype.onCollapse = function () {
        this.isCollapsed = this.sideMenu.collapse();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"]),
        __metadata("design:type", _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"])
    ], AppComponent.prototype, "sideMenu", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"],
            _share_service__WEBPACK_IMPORTED_MODULE_6__["ShareService"],
            _history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/side-menu/side-menu.component.ts");
/* harmony import */ var _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./head-bar/head-bar.component */ "./src/app/head-bar/head-bar.component.ts");
/* harmony import */ var _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mockup/mockup.module */ "./src/app/mockup/mockup.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./external-app/external-app.module */ "./src/app/external-app/external-app.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"],
                _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_5__["HeadBarComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ui_message_angular__WEBPACK_IMPORTED_MODULE_11__["MessageModule"],
                _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_6__["MockupModule"],
                _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_8__["ExternalAppModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dk-message></dk-message>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _external_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external-app.component */ "./src/app/external-app/external-app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'external-app/:appID', component: _external_app_component__WEBPACK_IMPORTED_MODULE_2__["ExternalAppComponent"]
    }
];
var ExternalAppRoutingModule = /** @class */ (function () {
    function ExternalAppRoutingModule() {
    }
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
    return ExternalAppRoutingModule;
}());



/***/ }),

/***/ "./src/app/external-app/external-app.component.css":
/*!*********************************************************!*\
  !*** ./src/app/external-app/external-app.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-content-iframe{\n  position: fixed;\n  height: 100%;\n  border-width: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0ZXJuYWwtYXBwL2V4dGVybmFsLWFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9leHRlcm5hbC1hcHAvZXh0ZXJuYWwtYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWNvbnRlbnQtaWZyYW1le1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/external-app/external-app.component.html":
/*!**********************************************************!*\
  !*** ./src/app/external-app/external-app.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe [src]=\"appUrl\" class=\"nav-content-iframe\" [style.width]=\"iFrameWidth\">\n</iframe>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../identity.service */ "./src/app/identity.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExternalAppComponent = /** @class */ (function () {
    function ExternalAppComponent(route, shareService, identityService, sanitizer, router) {
        this.route = route;
        this.shareService = shareService;
        this.identityService = identityService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.apps = [];
    }
    ExternalAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shareService.isCollapsed ? this.iFrameWidth = '95%' : this.iFrameWidth = '80%';
        this.shareService.isCollapsed$.subscribe(function (isCollapsed) {
            isCollapsed ? _this.iFrameWidth = '95%' : _this.iFrameWidth = '80%';
        });
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            var appID = params.get('appID');
            if (_this.shareService.apps.length === 0) {
                return _this.identityService.getAppRouteLink(appID);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_this.shareService.apps.find(function (app) { return app.appID === appID; }).originalRouteLink);
            }
        })).subscribe(function (routeLink) {
            if (routeLink === 'appNotFound') {
                _this.router.navigate(['pageNotFound']);
            }
            else {
                var appDangerousUrl = routeLink.substr(0, 4) === 'http' ? routeLink :
                    window.location.origin + routeLink;
                _this.appUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(appDangerousUrl);
            }
        });
    };
    ExternalAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-external-app',
            template: __webpack_require__(/*! ./external-app.component.html */ "./src/app/external-app/external-app.component.html"),
            styles: [__webpack_require__(/*! ./external-app.component.css */ "./src/app/external-app/external-app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"],
            _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ExternalAppComponent);
    return ExternalAppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _external_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external-app-routing.module */ "./src/app/external-app/external-app-routing.module.ts");
/* harmony import */ var _external_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./external-app.component */ "./src/app/external-app/external-app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExternalAppModule = /** @class */ (function () {
    function ExternalAppModule() {
    }
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
    return ExternalAppModule;
}());



/***/ }),

/***/ "./src/app/head-bar/head-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/head-bar/head-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Head Navigation Bar */\n.dk-navbar-inverse{\n  background-color: #2f3c48;\n  display: flex;\n  position: static;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  border-color: #080808;\n}\n.dk-nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.dk-nav>li {\n  display: inline-block;\n}\n.dk-nav>li>a {\n  padding: 10px 15px;\n}\n.dk-nav>li,\n.dk-nav>li>a {\n  position: relative;\n}\n.dk-nav>li>a:focus,\n.dk-nav>li>a:hover {\n  text-decoration: none;\n}\n.dk-nav-toggle{\n  /*Used for figure out toggle in navigation bar*/\n}\n.dk-navbar-nav>li {\n  float:none;\n}\n.dk-navbar-nav>li>a {\n  color: #fafafa;\n  max-width: 100%;\n  display: inline-block;\n  box-sizing: border-box;\n  white-space: pre-line;\n  word-wrap: break-word;\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: Arial,Helvetica,sans-serif;\n  background-color: #2f3c48;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  line-height: 20px;\n}\n.dk-navbar-center{\n  flex-grow:1;\n}\n.dk-navbar-app-title {\n  position: relative;\n  margin: 0 auto;\n  float: none;\n  display: block;\n  width: 300px;\n  text-align: center;\n}\n.dk-navbar-header,\n.dk-navbar-right {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.dk-navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 10px 10px;\n  font-size: 18px;\n  line-height: 30px;\n}\n.dk-navbar-brand>img {\n  display: block;\n  width: 29%;\n}\n.dk-navbar-toggle {\n  display: block;\n  float: left;\n  margin-left: 0.3rem;\n  margin-right: 0;\n  position: relative;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid;\n  border-color: #333;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.dk-navbar-toggle:hover {\n  background-color: #333;\n}\n.dk-navbar-toggle:focus {\n  outline: 0;\n}\n.dk-sr-only {\n  border: 0;\n  clip: rect(0,0,0,0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.dk-navbar-toggle .dk-icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n  background-color: #fff;\n}\n.dk-navbar-toggle .dk-icon-bar+.dk-icon-bar {\n  margin-top: 4px;\n}\n.dk-caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dk-label {\n  display: inline;\n  padding: .3em .6em .3em .3em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  margin-right: 0.5rem;\n}\n.dk-label-warning {\n  background-color: #f0ad4e;\n}\n.dk-badge {\n  position: absolute;\n  top: 1rem;\n  padding: .1rem .4rem;\n  border-radius: .625rem;\n  left: 2.3rem;\n  background-color: #f05050;\n}\n.dk-dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  border-radius: 4px;\n}\n.dk-navbar-nav>li>.dk-dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.open>.dk-dropdown-menu {\n  display: block;\n}\n.dk-dropdown-menu>li>a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: 400;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n  text-decoration: none;\n  background-color: transparent;\n}\n.dk-dropdown-menu>li>a:hover {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dk-dropdown-menu .dk-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dk-text-center {\n  text-align: center;\n}\n.fas {\n  margin-right: 0.5rem;\n}\n@media (min-width: 768px) {\n  .dk-navbar-right\n  .dk-dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .dk-navbar-right {\n    float: right!important;\n    margin-right: -15px;\n  }\n}\n@media (max-width: 767px) {\n  .dk-navbar-nav .open .dk-dropdown-menu {\n    position: absolute;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n    left: auto;\n    right: 1px;\n  }\n  .dk-navbar-nav .open .dk-dropdown-menu > li > a {\n    padding: 3px 20px;\n    line-height: 20px;\n    color: #333;\n  }\n  .dk-navbar-inverse .dk-navbar-nav .open .dk-dropdown-menu > li > a:hover,\n  .dk-navbar-inverse .dk0navbar-nav .open .dk-dropdown-menu > li > a:focus {\n    color: #262626;\n    text-decoration: none;\n    background-color: #f5f5f5;\n  }\n}\n@media (min-width: 150px) {\n  .dk-navbar-nav {\n    float: left;\n    margin: 0 1rem 0 0;\n  }\n  .dk-navbar-app-title {\n    margin: 0 auto;\n    float: none;\n  }\n  .dk-navbar-nav > li {\n    float: left;\n  }\n  .dk-navbar-app-title > li{\n    float: none;\n  }\n  .dk-navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZC1iYXIvaGVhZC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGNBQWM7RUFDZCxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEOztFQUVFLG1CQUFtQjtDQUNwQjtBQUNEOztFQUVFLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsZ0RBQWdEO0NBQ2pEO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjtBQUNEOztFQUVFLCtCQUF1QjtFQUF2Qiw0QkFBdUI7RUFBdkIsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsV0FBVztDQUNaO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSx1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsbUNBQW1DO0NBQ3BDO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFFBQVE7RUFDUixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFOztJQUVFLFNBQVM7SUFDVCxXQUFXO0dBQ1o7RUFDRDtJQUNFLHVCQUF1QjtJQUN2QixvQkFBb0I7R0FDckI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLFdBQVc7R0FDWjtFQUNEO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0dBQ2I7RUFDRDs7SUFFRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDBCQUEwQjtHQUMzQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLGVBQWU7SUFDZixZQUFZO0dBQ2I7RUFDRDtJQUNFLFlBQVk7R0FDYjtFQUNEO0lBQ0UsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0dBQ3RCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkLWJhci9oZWFkLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVhZCBOYXZpZ2F0aW9uIEJhciAqL1xuLmRrLW5hdmJhci1pbnZlcnNle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYzQ4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAzMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDgwODA4O1xufVxuLmRrLW5hdiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5kay1uYXY+bGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZGstbmF2PmxpPmEge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4uZGstbmF2PmxpLFxuLmRrLW5hdj5saT5hIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRrLW5hdj5saT5hOmZvY3VzLFxuLmRrLW5hdj5saT5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmRrLW5hdi10b2dnbGV7XG4gIC8qVXNlZCBmb3IgZmlndXJlIG91dCB0b2dnbGUgaW4gbmF2aWdhdGlvbiBiYXIqL1xufVxuLmRrLW5hdmJhci1uYXY+bGkge1xuICBmbG9hdDpub25lO1xufVxuLmRrLW5hdmJhci1uYXY+bGk+YSB7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2M0ODtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5kay1uYXZiYXItY2VudGVye1xuICBmbGV4LWdyb3c6MTtcbn1cbi5kay1uYXZiYXItYXBwLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxvYXQ6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kay1uYXZiYXItaGVhZGVyLFxuLmRrLW5hdmJhci1yaWdodCB7XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG4uZGstbmF2YmFyLWJyYW5kIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmRrLW5hdmJhci1icmFuZD5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI5JTtcbn1cbi5kay1uYXZiYXItdG9nZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOXB4IDEwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGstbmF2YmFyLXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4uZGstbmF2YmFyLXRvZ2dsZTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uZGstc3Itb25seSB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwLDAsMCwwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xufVxuLmRrLW5hdmJhci10b2dnbGUgLmRrLWljb24tYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmRrLW5hdmJhci10b2dnbGUgLmRrLWljb24tYmFyKy5kay1pY29uLWJhciB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5kay1jYXJldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXRvcDogNHB4IGRhc2hlZDtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uZGstbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IC4zZW0gLjZlbSAuM2VtIC4zZW07XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uZGstbGFiZWwtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XG59XG4uZGstYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcGFkZGluZzogLjFyZW0gLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IC42MjVyZW07XG4gIGxlZnQ6IDIuM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNTA1MDtcbn1cbi5kay1kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiAycHggMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmRrLW5hdmJhci1uYXY+bGk+LmRrLWRyb3Bkb3duLW1lbnUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5vcGVuPi5kay1kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZGstZHJvcGRvd24tbWVudT5saT5hIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBjbGVhcjogYm90aDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjMzMzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRrLWRyb3Bkb3duLW1lbnU+bGk+YTpob3ZlciB7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4uZGstZHJvcGRvd24tbWVudSAuZGstZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDlweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xufVxuLmRrLXRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZhcyB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kay1uYXZiYXItcmlnaHRcbiAgLmRrLWRyb3Bkb3duLW1lbnUge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbiAgLmRrLW5hdmJhci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0IWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmRrLW5hdmJhci1uYXYgLm9wZW4gLmRrLWRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDFweDtcbiAgfVxuICAuZGstbmF2YmFyLW5hdiAub3BlbiAuZGstZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XG4gICAgcGFkZGluZzogM3B4IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgLmRrLW5hdmJhci1pbnZlcnNlIC5kay1uYXZiYXItbmF2IC5vcGVuIC5kay1kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyLFxuICAuZGstbmF2YmFyLWludmVyc2UgLmRrMG5hdmJhci1uYXYgLm9wZW4gLmRrLWRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTUwcHgpIHtcbiAgLmRrLW5hdmJhci1uYXYge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcbiAgfVxuICAuZGstbmF2YmFyLWFwcC10aXRsZSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLmRrLW5hdmJhci1uYXYgPiBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmRrLW5hdmJhci1hcHAtdGl0bGUgPiBsaXtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAuZGstbmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/head-bar/head-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/head-bar/head-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"dk-navbar-inverse\">\n  <div class=\"dk-navbar-header\">\n    <button type=\"button\" class=\"dk-navbar-toggle\" (click)=\"collapse()\">\n      <span class=\"dk-sr-only\">Toggle navigation</span>\n      <span class=\"dk-icon-bar\"></span>\n      <span class=\"dk-icon-bar\"></span>\n      <span class=\"dk-icon-bar\"></span>\n    </button>\n    <a class=\"dk-navbar-brand\" href=\"#\"><img alt=\"Brand\" src=\"assets/darkhouse.png\"></a>\n  </div>\n\n  <!-- Application Name or Title -->\n  <div class=\"dk-navbar-center\">\n    <ul class=\"dk-nav dk-navbar-nav dk-navbar-app-title\">\n      <li [ngClass]=\"{'open': dropdown.historyOpen}\">\n        <a (click)=\"toggleHistoryDropdown()\" class=\"dk-nav-toggle\">{{currentApp.name}} <b class=\"dk-caret\"></b></a>\n        <ul class=\"dk-dropdown-menu\">\n          <li *ngFor=\"let app of navHistory\"><a routerLink=\"{{app.routeLink}}\">\n            {{app.name}}</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n  <!-- Generic Functions in the header bar -->\n  <div class=\"dk-navbar-right\">\n    <ul class=\"dk-nav dk-navbar-nav\">\n      <li [ngClass]=\"{'open': dropdown.notificationOpen}\">\n        <a (click)=\"toggleNotificationDropdown()\" class=\"dk-nav-toggle\"><span\n          class=\"fas fa-bell\"></span><span class=\"dk-label dk-badge\">32</span>\n        </a>\n        <ul class=\"dk-dropdown-menu\">\n          <li><a href=\"#\"><span class=\"dk-label dk-label-warning\">4:00 AM</span>Favourites Snippet</a></li>\n          <li><a href=\"#\"><span class=\"dk-label dk-label-warning\">4:30 AM</span>Email marketing</a></li>\n          <li><a href=\"#\"><span class=\"dk-label dk-label-warning\">5:00 AM</span>Subscriber focused email\n            design</a></li>\n          <li class=\"dk-divider\"></li>\n          <li><a href=\"#\" class=\"dk-text-center\">View All</a></li>\n        </ul>\n      </li>\n      <li [ngClass]=\"{'open': dropdown.preferenceOpen}\">\n        <a (click)=\"togglePreferenceOpen()\" class=\"dk-nav-toggle\"><span\n          class=\"fas fa-user\"></span>{{userBasicInfo.displayName}} <b class=\"dk-caret\"></b>\n        </a>\n        <ul class=\"dk-dropdown-menu\">\n          <li><a href=\"#\"><span class=\"fas fa-user\"></span>Profile</a></li>\n          <li><a href=\"#\"><span class=\"fas fa-cog\"></span>Settings</a></li>\n          <li class=\"dk-divider\"></li>\n          <li><a (click)=\"logout()\"><span class=\"fas fa-power-off\"></span>Logout</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../role */ "./src/app/role.ts");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../identity.service */ "./src/app/identity.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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





var HeadBarComponent = /** @class */ (function () {
    function HeadBarComponent(document, history, identity) {
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
    HeadBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.history.currentHistoryObserver.subscribe(function (history) { return _this.navHistory = history; });
        this.history.currentAppObserver.subscribe(function (currentApp) { return _this.currentApp = currentApp; });
        this.identity.getLogonUser().subscribe(function (logonUser) { return _this.userBasicInfo = logonUser; });
    };
    HeadBarComponent.prototype.mouseupDocument = function ($event, dropdown) {
        if ($event.srcElement.className !== 'dk-nav-toggle') {
            dropdown.historyOpen = false;
            dropdown.notificationOpen = false;
            dropdown.preferenceOpen = false;
        }
    };
    HeadBarComponent.prototype.collapse = function () {
        this.onCollapse.emit();
    };
    HeadBarComponent.prototype.toggleHistoryDropdown = function () {
        this.dropdown.historyOpen = !this.dropdown.historyOpen;
        this.dropdown.notificationOpen = false;
        this.dropdown.preferenceOpen = false;
    };
    HeadBarComponent.prototype.toggleNotificationDropdown = function () {
        this.dropdown.notificationOpen = !this.dropdown.notificationOpen;
        this.dropdown.historyOpen = false;
        this.dropdown.preferenceOpen = false;
    };
    HeadBarComponent.prototype.togglePreferenceOpen = function () {
        this.dropdown.preferenceOpen = !this.dropdown.preferenceOpen;
        this.dropdown.historyOpen = false;
        this.dropdown.notificationOpen = false;
    };
    HeadBarComponent.prototype.logout = function () {
        var _this = this;
        this.identity.logout().subscribe(function () { return _this.document.location.href = window.location.origin; });
    };
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
            template: __webpack_require__(/*! ./head-bar.component.html */ "./src/app/head-bar/head-bar.component.html"),
            styles: [__webpack_require__(/*! ./head-bar.component.css */ "./src/app/head-bar/head-bar.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"],
            _identity_service__WEBPACK_IMPORTED_MODULE_3__["IdentityService"]])
    ], HeadBarComponent);
    return HeadBarComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var HistoryService = /** @class */ (function () {
    function HistoryService() {
        this.navHistory = [];
        this.historySource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentApp = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ name: 'Home' });
        this.NUM_OF_HISTORY = 10;
        this.currentHistoryObserver = this.historySource.asObservable();
        this.currentAppObserver = this.currentApp.asObservable();
    }
    HistoryService.prototype.addHistory = function (app) {
        var idx = this.navHistory.map(function (ele) { return ele.routeLink; })
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
    };
    HistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], HistoryService);
    return HistoryService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role */ "./src/app/role.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var IdentityService = /** @class */ (function () {
    function IdentityService(http, router) {
        this.http = http;
        this.router = router;
        this.originalHost = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].originalHost;
    }
    /**
     * Logout the system
     */
    IdentityService.prototype.logout = function () {
        return this.http.delete(this.originalHost + '/api/logout', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Logout')));
    };
    IdentityService.prototype.getLogonUser = function () {
        return this.http.get(this.originalHost + '/api/session', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userSession) {
            var userInfo = new _role__WEBPACK_IMPORTED_MODULE_4__["UserBasicInfo"]();
            userInfo.userID = userSession['identity']['userBasic']['USER_ID'];
            userInfo.userName = userSession['identity']['userBasic']['USER_NAME'];
            userInfo.displayName = userSession['identity']['userBasic']['DISPLAY_NAME'];
            return userInfo;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDetail')));
    };
    /**
     * Get a role detail information from backend based on an authenticated user
     * @returns {Observable<Role>}
     */
    IdentityService.prototype.getRoleDetail = function () {
        return this.http.post(this.originalHost + "/api/function/getRoleDetail", {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDetail')));
    };
    /**
     * Get an APP detail based on a routeLink
     * @param {string} routeLink
     * @returns {Observable<App>}
     */
    IdentityService.prototype.getApp = function (routeLink) {
        if (routeLink.substr(0, 13) === '/external-app') {
            return this.http.post(this.originalHost + "/api/entity/instance", { RELATION_ID: 'app', APP_ID: routeLink.substr(14) }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (appEntity) {
                var app = new _role__WEBPACK_IMPORTED_MODULE_4__["App"];
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
            return this.http.post(this.originalHost + "/api/entity/instance", { RELATION_ID: 'app', ROUTE_LINK: routeLink }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (appEntity) {
                var app = new _role__WEBPACK_IMPORTED_MODULE_4__["App"];
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
    };
    /**
     * Get an APP's routelink from its appID
     * @param appID
     */
    IdentityService.prototype.getAppRouteLink = function (appID) {
        return this.http.post(this.originalHost + "/api/entity/instance", { RELATION_ID: 'app', APP_ID: appID }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (appEntity) {
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
    };
    IdentityService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO add messages to message service
            _this.router.navigate(['errors']);
            console.error(operation, error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    IdentityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], IdentityService);
    return IdentityService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mockup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mockup.component */ "./src/app/mockup/mockup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'mockup/:UI', component: _mockup_component__WEBPACK_IMPORTED_MODULE_2__["MockupComponent"]
    }
];
var MockupRoutingModule = /** @class */ (function () {
    function MockupRoutingModule() {
    }
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
    return MockupRoutingModule;
}());



/***/ }),

/***/ "./src/app/mockup/mockup.component.css":
/*!*********************************************!*\
  !*** ./src/app/mockup/mockup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vY2t1cC9tb2NrdXAuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MockupComponent = /** @class */ (function () {
    function MockupComponent(route) {
        this.route = route;
    }
    MockupComponent.prototype.ngOnInit = function () { };
    MockupComponent.prototype.ngDoCheck = function () {
        this.mockupUI = 'assets/' + this.route.snapshot.paramMap.get('UI') + '.png';
    };
    MockupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mockup',
            template: '<img [src]="mockupUI" style="max-width: 100%">',
            styles: [__webpack_require__(/*! ./mockup.component.css */ "./src/app/mockup/mockup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MockupComponent);
    return MockupComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mockup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mockup.component */ "./src/app/mockup/mockup.component.ts");
/* harmony import */ var _mockup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mockup-routing.module */ "./src/app/mockup/mockup-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MockupModule = /** @class */ (function () {
    function MockupModule() {
    }
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
    return MockupModule;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Page not found!</h2>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



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
var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());

var Catalog = /** @class */ (function () {
    function Catalog() {
    }
    return Catalog;
}());

var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());

var UserBasicInfo = /** @class */ (function () {
    function UserBasicInfo() {
    }
    return UserBasicInfo;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ShareService = /** @class */ (function () {
    function ShareService() {
        this.apps = [];
        this.isCollapsed = false;
        this.isCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isCollapsed$ = this.isCollapsedSubject.asObservable();
    }
    ShareService.prototype.updateIsCollapsed = function (status) {
        this.isCollapsed = status;
        this.isCollapsedSubject.next(this.isCollapsed);
    };
    ShareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ShareService);
    return ShareService;
}());



/***/ }),

/***/ "./src/app/side-menu/side-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/side-menu/side-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Side Navigation Bar*/\n.dk-side-menu {\n  font-family: Arial,Helvetica,sans-serif;\n  font-size: 1.5rem;\n  font-weight: 200;\n  position: static;\n  width: 24rem;\n  height: 100%;\n  background: #3f5161;\n  color: #fafafa;;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n  z-index: 1031;\n}\n.dk-menu-list {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  overflow: auto;\n}\n.dk-search-box {\n  line-height: 2.5rem;\n  background-color: #2f3c48;\n  border-width: 1px;\n  border-color: gray;\n}\n.dk-side-menu-collapsed {\n  width: 5rem;\n  background: #394958;\n}\n.dk-side-menu-hover {\n  display: block;\n  position: absolute;\n  visibility: hidden;\n  opacity:0;\n  width: 20rem;\n  left: 6rem;\n  border-radius: 0.3rem;\n  z-index: 1031;\n  overflow: auto;\n  background: #394958;\n  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);\n  bottom: 1rem;\n}\n.dk-side-menu-hover-show {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.3s linear, opacity 0.3s linear;\n}\n.dk-side-menu ul,\n.dk-side-menu li {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  line-height: 4rem;\n  cursor: pointer;\n}\n.dk-side-menu li a {\n  display: block;\n  text-decoration: none;\n  color: #fafafa;\n}\n.dk-menu-search {\n  list-style-position: inside;\n  border-bottom: 1px;\n  border-bottom-color: dimgray;\n  border-bottom-style: solid;\n}\n.dk-menu-search-hover {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 45rem;\n}\n.dk-menu-content {\n  width: 100%;\n}\n.dk-menu-content-hover {\n  z-index: 1031;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  padding-bottom: 1rem;\n}\n.dk-menu-content-hover>li {\n  padding-left: 1rem;\n  border-bottom: thin dotted #fafafa;\n}\n.dk-menu-content>li:hover {\n  background-color: #4f5b69;\n  transition: all 0.3s ease;\n}\n.dk-menu-content>li>a:hover {\n  border-left: 4px solid #d19b3d;\n  transition: all 0.3s ease;\n}\n.arrow {\n  float: right;\n  margin: 1rem !important;\n}\n.dk-menu-content>li {\n  display: none;\n}\n.dk-menu-content>li.menuDisplay {\n  display: list-item;\n}\n.dk-menu-content>li.active{\n  background-color: #465969;\n  border-bottom: 1px solid #4d6377;\n  z-index: 60;\n}\n.dk-menu-content>li.active>a{\n  border-left: 4px solid #d19b3d;\n  z-index: 60;\n}\n.dk-sub-menu {\n  display: block;\n  overflow: hidden;\n}\n.dk-sub-menu.expended {\n  opacity: 1;\n  max-height: 50rem;\n  transition: opacity 0.5s, max-height 0.5s;\n}\n.dk-sub-menu.collapsed {\n  opacity: 0;\n  max-height: 0;\n  transition: opacity 275ms, max-height 0.28s;\n}\n.dk-sub-menu li {\n  background-color: #394958;\n  border: none;\n  line-height: 2.8rem;\n  padding-left: 4rem;\n}\n.dk-sub-menu-collapsed li {\n  line-height: 3rem;\n  padding-left: 2rem;\n}\n.dk-sub-menu li.active{\n  color: #d19b3d;\n}\n.dk-sub-menu li.active a {\n  color: #d19b3d;\n}\n.dk-sub-menu li:hover {\n  background-color: #4f7393;\n}\n.dk-popover-arrow {\n  content: \" \";\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  left: 5.5rem;\n  background-color: #394958;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  pointer-events: none;\n  position: absolute;\n  z-index: 1030;\n  visibility: hidden;\n  opacity: 0;\n  /*transition: none;*/\n}\n.dk-popover-arrow-show {\n  /*width: 1rem;*/\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.3s 10ms linear, opacity 0.3s 0.2s linear;\n}\n.dk-separator {\n  margin: 0.25rem 1rem;\n  height: 1px;\n  min-height: 1px;\n  background-color: #0092d1;\n}\n.dk-menu-bottom {\n  display: block;\n  vertical-align: bottom;\n  position: static;\n}\n.dk-menu-bottom>.dk-menu-content>li {\n  display: list-item;\n}\n.fas{\n  margin:0 1.3rem;\n  font-size: 1.8rem;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUF1QjtBQUN2QjtFQUNFLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsY0FBYztDQUNmO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLFlBQVk7RUFDWixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix5Q0FBeUM7RUFDekMsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHdEQUF3RDtDQUN6RDtBQUNEOztFQUVFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSw0QkFBb0I7RUFBcEIseUJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsbUNBQW1DO0NBQ3BDO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSwrQkFBK0I7RUFDL0IsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyxZQUFZO0NBQ2I7QUFDRDtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0NBQ2I7QUFDRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMENBQTBDO0NBQzNDO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLDRDQUE0QztDQUM3QztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtFQUFrRTtDQUNuRTtBQUNEO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypTaWRlIE5hdmlnYXRpb24gQmFyKi9cbi5kay1zaWRlLW1lbnUge1xuICBmb250LWZhbWlseTogQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB3aWR0aDogMjRyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzNmNTE2MTtcbiAgY29sb3I6ICNmYWZhZmE7O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB6LWluZGV4OiAxMDMxO1xufVxuLmRrLW1lbnUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZGstc2VhcmNoLWJveCB7XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjNjNDg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGdyYXk7XG59XG4uZGstc2lkZS1tZW51LWNvbGxhcHNlZCB7XG4gIHdpZHRoOiA1cmVtO1xuICBiYWNrZ3JvdW5kOiAjMzk0OTU4O1xufVxuLmRrLXNpZGUtbWVudS1ob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTowO1xuICB3aWR0aDogMjByZW07XG4gIGxlZnQ6IDZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgei1pbmRleDogMTAzMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMzOTQ5NTg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gIGJvdHRvbTogMXJlbTtcbn1cbi5kay1zaWRlLW1lbnUtaG92ZXItc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4zcyBsaW5lYXIsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4uZGstc2lkZS1tZW51IHVsLFxuLmRrLXNpZGUtbWVudSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kay1zaWRlLW1lbnUgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmFmYWZhO1xufVxuLmRrLW1lbnUtc2VhcmNoIHtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICBib3JkZXItYm90dG9tOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGRpbWdyYXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xufVxuLmRrLW1lbnUtc2VhcmNoLWhvdmVyIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWF4LWhlaWdodDogNDVyZW07XG59XG4uZGstbWVudS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGstbWVudS1jb250ZW50LWhvdmVyIHtcbiAgei1pbmRleDogMTAzMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbi5kay1tZW51LWNvbnRlbnQtaG92ZXI+bGkge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IHRoaW4gZG90dGVkICNmYWZhZmE7XG59XG4uZGstbWVudS1jb250ZW50PmxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNWI2OTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5kay1tZW51LWNvbnRlbnQ+bGk+YTpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2QxOWIzZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hcnJvdyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4uZGstbWVudS1jb250ZW50PmxpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5kay1tZW51LWNvbnRlbnQ+bGkubWVudURpc3BsYXkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG4uZGstbWVudS1jb250ZW50PmxpLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NTk2OTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZDYzNzc7XG4gIHotaW5kZXg6IDYwO1xufVxuLmRrLW1lbnUtY29udGVudD5saS5hY3RpdmU+YXtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZDE5YjNkO1xuICB6LWluZGV4OiA2MDtcbn1cbi5kay1zdWItbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRrLXN1Yi1tZW51LmV4cGVuZGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgbWF4LWhlaWdodDogNTByZW07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cywgbWF4LWhlaWdodCAwLjVzO1xufVxuLmRrLXN1Yi1tZW51LmNvbGxhcHNlZCB7XG4gIG9wYWNpdHk6IDA7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjc1bXMsIG1heC1oZWlnaHQgMC4yOHM7XG59XG4uZGstc3ViLW1lbnUgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0OTU4O1xuICBib3JkZXI6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cbi5kay1zdWItbWVudS1jb2xsYXBzZWQgbGkge1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuLmRrLXN1Yi1tZW51IGxpLmFjdGl2ZXtcbiAgY29sb3I6ICNkMTliM2Q7XG59XG4uZGstc3ViLW1lbnUgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogI2QxOWIzZDtcbn1cbi5kay1zdWItbWVudSBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjczOTM7XG59XG4uZGstcG9wb3Zlci1hcnJvdyB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbGVmdDogNS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0OTU4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDMwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIC8qdHJhbnNpdGlvbjogbm9uZTsqL1xufVxuLmRrLXBvcG92ZXItYXJyb3ctc2hvdyB7XG4gIC8qd2lkdGg6IDFyZW07Ki9cbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjNzIDEwbXMgbGluZWFyLCBvcGFjaXR5IDAuM3MgMC4ycyBsaW5lYXI7XG59XG4uZGstc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwLjI1cmVtIDFyZW07XG4gIGhlaWdodDogMXB4O1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDkyZDE7XG59XG4uZGstbWVudS1ib3R0b20ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cbi5kay1tZW51LWJvdHRvbT4uZGstbWVudS1jb250ZW50PmxpIHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuLmZhc3tcbiAgbWFyZ2luOjAgMS4zcmVtO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/side-menu/side-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/side-menu/side-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #sideMenu class=\"dk-side-menu\" [class.dk-side-menu-collapsed]=\"isCollapsed\" (mouseleave)=\"mouseleaveMenu()\" >\n  <div class=\"dk-menu-list\">\n    <!-- side menu in expended mode -->\n    <ul *ngIf=\"!isCollapsed\" class=\"dk-menu-content\">\n      <li *ngFor=\"let category of role.categories; index as i;\"\n          [ngClass]=\"{'active':category.active,\n                      'collapsed':!category.isSubMenuShow,\n                      'dk-menu-search': category.routeLink === '/appSearch',\n                      'menuDisplay': category.routeLink === '/appSearch' || menuDisplay}\">\n        <span *ngIf=\"category.routeLink === '/appSearch'\" [ngClass]=\"category.icon\" aria-hidden=\"true\"></span>\n        <input *ngIf=\"category.routeLink === '/appSearch'\" #searchBox class=\"dk-search-box\" placeholder=\"Search\"\n               (keyup)=\"searchApp(searchBox.value)\" (keypress)=\"enterApp($event)\"/>\n        <ul *ngIf=\"category.routeLink === '/appSearch'\" class=\"dk-sub-menu\">\n          <li *ngFor=\"let app of apps$ | async\" >\n            <a routerLink=\"{{app.routeLink}}\">{{app.name}}</a>\n          </li>\n        </ul>\n\n        <a *ngIf=\"category.routeLink && category.routeLink !== '/appSearch'\" routerLink=\"{{category.routeLink}}\">\n          <span [ngClass]=\"category.icon\" aria-hidden=\"true\"></span> {{category.name}}\n        </a>\n        <a *ngIf=\"!category.routeLink\" (click)=\"clickRow(i)\">\n          <span [ngClass]=\"category.icon\" aria-hidden=\"true\"></span> {{category.name}}\n          <span *ngIf=\"category.apps && category.apps.length > 0\" class=\"fas arrow\"\n                [ngClass]=\"{'fa-angle-right': !category.isSubMenuShow, 'fa-angle-down': category.isSubMenuShow}\">\n          </span>\n        </a>\n        <ul *ngIf=\"!category.routeLink\" class=\"dk-sub-menu\"\n            [ngClass]=\"{'expended':category.isSubMenuShow, 'collapsed':!category.isSubMenuShow}\">\n          <li *ngFor=\"let app of category.apps\" [ngClass]=\"{'active':app.active}\">\n            <a routerLink=\"{{app.routeLink}}\">{{app.name}}</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n    <!-- side menu in collapsed mode -->\n    <ul *ngIf=\"isCollapsed\" class=\"dk-menu-content\">\n      <li *ngFor=\"let category of role.categories; index as i\" class=\"menuDisplay\" [ngClass]=\"{'active':category.active}\"\n          (mouseenter)=\"mouseenterRow(i)\" (mouseleave)=\"mouseleaveRow(i)\" (click)=\"clickRow(i)\">\n        <a *ngIf=\"category.routeLink === '/appSearch'\">\n          <span [ngClass]=\"category.icon\" aria-hidden=\"true\"></span>\n        </a>\n        <div *ngIf=\"category.routeLink === '/appSearch'\"\n             class=\"dk-side-menu dk-side-menu-hover dk-menu-search-hover\"\n             [ngClass]=\"{'dk-side-menu-hover-show':category.isSubMenuShow}\"\n             [style.top.rem]=\"category.top\">\n          <ul class=\"dk-menu-content-hover\">\n            <li><input #searchBox class=\"dk-search-box\" placeholder=\"Search\" class=\"dk-search-box\"\n                       (keyup)=\"searchApp(searchBox.value)\" (keypress)=\"enterApp($event)\"/></li>\n            <ul class=\"dk-sub-menu dk-sub-menu-collapsed\">\n              <li *ngFor=\"let app of apps$ | async\" >\n                <a routerLink=\"{{app.routeLink}}\" (click)=\"hideSubMenu()\">{{app.name}}</a>\n              </li>\n            </ul>\n          </ul>\n        </div>\n        <span *ngIf=\"category.routeLink === '/appSearch'\"\n              class=\"dk-popover-arrow\" [ngClass]=\"{'dk-popover-arrow-show':category.isSubMenuShow}\"\n              [style.top.rem]=\"category.arrowTop\"></span>\n\n        <a *ngIf=\"category.routeLink !== '/appSearch' && category.apps.length === 0\" routerLink=\"{{category.routeLink}}\">\n          <span [ngClass]=\"category.icon\" aria-hidden=\"true\"></span>\n        </a>\n        <a *ngIf=\"category.routeLink !== '/appSearch' && category.apps.length > 0\">\n          <span [ngClass]=\"category.icon\" aria-hidden=\"true\"></span>\n        </a>\n\n        <div *ngIf=\"category.routeLink !== '/appSearch' && category.apps.length > 0\"\n             class=\"dk-side-menu dk-side-menu-hover\"\n             [style.top.rem]=\"category.top\"\n             [style.height.rem]=\"category.height\"\n             [ngClass]=\"{'dk-side-menu-hover-show':category.isSubMenuShow}\">\n          <ul class=\"dk-menu-content-hover\">\n            <li><a>{{category.name}}</a></li>\n            <ul class=\"dk-sub-menu dk-sub-menu-collapsed\">\n              <li *ngFor=\"let app of category.apps\" [ngClass]=\"{'active':app.active}\">\n                <a routerLink=\"{{app.routeLink}}\" (click)=\"hideSubMenu()\">{{app.name}}</a>\n              </li>\n            </ul>\n          </ul>\n        </div>\n        <span *ngIf=\"category.routeLink !== '/appSearch' && category.apps.length > 0\"\n              class=\"dk-popover-arrow\" [ngClass]=\"{'dk-popover-arrow-show':category.isSubMenuShow}\"\n              [style.top.rem]=\"category.arrowTop\"></span>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"dk-separator\"></div>\n\n  <div class=\"dk-menu-bottom\">\n    <ul *ngIf=\"!isCollapsed\" class=\"dk-menu-content\">\n      <li >\n        <a href=\"#\">\n          <span class=\"fas fa-question-circle\" aria-hidden=\"true\"></span> Useful Links\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <span class=\"fas fa-balance-scale\" aria-hidden=\"true\"></span> Legal Information\n        </a>\n      </li>\n    </ul>\n    <ul *ngIf=\"isCollapsed\" class=\"dk-menu-content\">\n      <li (mouseenter)=\"mouseenterRow(0)\" (mouseleave)=\"mouseleaveRow(0)\" (click)=\"clickRow(0)\" >\n        <a href=\"#\">\n          <span class=\"fas fa-question-circle\" aria-hidden=\"true\"></span>\n        </a>\n      </li>\n      <li (mouseenter)=\"mouseenterRow(0)\" (mouseleave)=\"mouseleaveRow(0)\" (click)=\"clickRow(0)\">\n        <a href=\"#\">\n          <span class=\"fas fa-balance-scale\" aria-hidden=\"true\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../role */ "./src/app/role.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fuzzysort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuzzysort */ "./node_modules/fuzzysort/fuzzysort.js");
/* harmony import */ var fuzzysort__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fuzzysort__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../identity.service */ "./src/app/identity.service.ts");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
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










var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(identityService, messageService, shareService, router) {
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
    SideMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rem = parseInt(window.getComputedStyle(document.head).getPropertyValue('font-size'), 10);
        this.identityService.getRoleDetail().subscribe(function (roles) { return _this._processRoleData(roles); });
        this.shareService.updateIsCollapsed(this.isCollapsed);
        this.apps$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            var results = fuzzysort__WEBPACK_IMPORTED_MODULE_5__["go"](term, _this.shareService.apps, { key: 'name' });
            var returnedApps = [];
            results.forEach(function (result) { return returnedApps.push(result.obj); });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(returnedApps);
        }));
        this.apps$.subscribe(function (searchedApps) { return _this.searchedApps = searchedApps; });
    };
    SideMenuComponent.prototype._processRoleData = function (roles) {
        var _this = this;
        this.role = roles[0]; // Currently, only support one role per user logon
        if (this.role['msgCat']) {
            this.messageService.clearMessages();
            roles.forEach(function (msg) { return _this.messageService.add(msg); });
            this.router.navigate(['errors']);
        }
        else {
            this.role.categories.forEach(function (category) {
                category.height = category.originalHeight = (category.apps.length + 1) * 3 + 2;
                category.active = false;
                category.isSubMenuShow = false;
                category.apps.forEach(function (app) {
                    if (app.isExternal) {
                        app.originalRouteLink = app.routeLink;
                        app.routeLink = '/external-app/' + app.appID;
                    }
                    app.active = false;
                    _this.shareService.apps.push(app);
                });
                if (category.apps.length === 1) {
                    category.routeLink = category.apps[0].routeLink;
                    category.apps = [];
                }
            });
        }
    };
    SideMenuComponent.prototype.searchApp = function (term) {
        this.searchTerms.next(term);
        this.menuDisplay = !term;
    };
    SideMenuComponent.prototype.enterApp = function ($event) {
        if ($event.keyCode === 13 && this.searchedApps[0]) {
            this.router.navigate([this.searchedApps[0].routeLink]);
        }
    };
    SideMenuComponent.prototype.collapse = function () {
        for (var _i = 0, _a = this.role.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            category.isSubMenuShow = false;
        }
        this.menuDisplay = true;
        this.isCollapsed = !this.isCollapsed;
        this.shareService.updateIsCollapsed(this.isCollapsed);
        return this.isCollapsed;
    };
    SideMenuComponent.prototype.activateSubMenu = function (row) {
        var menuHeight = this.sideMenu.nativeElement.offsetHeight / this.rem;
        var menuScrollTop = this.sideMenu.nativeElement.getElementsByClassName('dk-menu-list')[0].scrollTop / this.rem;
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
    };
    SideMenuComponent.prototype.deactivateSubMenu = function (row) {
        this.role.categories[row].isSubMenuShow = false;
    };
    /**
     * Keep track of the last few locations of the mouse.
     */
    SideMenuComponent.prototype.mousemoveDocument = function (e, mouseLocs) {
        mouseLocs.push({ x: e.pageX, y: e.pageY });
        if (mouseLocs.length > 3) { // '30' of the past mouse locations to track
            mouseLocs.shift();
        }
    };
    /**
     * Cancel possible row activations when leaving the menu entirely
     */
    SideMenuComponent.prototype.mouseleaveMenu = function () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        // If exitMenu is supplied and returns true, deactivate the
        // currently active row on menu exit.
        if (this.activeRow && !this.isMouseInMenuArea()) {
            this.deactivateSubMenu(this.activeRow);
        }
        this.activeRow = null;
    };
    /**
     * Check if the mouse is in the area of main menu and sub-menu.
     */
    SideMenuComponent.prototype.isMouseInMenuArea = function () {
        if (!this.activeRow) {
            return false;
        }
        var menu = this.sideMenu.nativeElement;
        var offset = {
            left: menu.offsetLeft,
            top: menu.offsetTop
        };
        var upperLeft = {
            x: offset.left + menu.offsetWidth,
            y: this.role.categories[this.activeRow].top * this.rem
        };
        var upperRight = {
            x: upperLeft.x + this.rem,
            y: upperLeft.y
        };
        var lowerLeft = {
            x: offset.left + menu.offsetWidth,
            y: upperLeft.y + this.role.categories[this.activeRow].height * this.rem
        };
        var lowerRight = {
            x: lowerLeft.x + this.rem,
            y: lowerLeft.y
        };
        var loc = this.mouseLocs[this.mouseLocs.length - 1];
        return (loc && ((loc.x <= upperRight.x && loc.y <= lowerRight.y && loc.y >= upperRight.y)
            || (loc.x <= upperLeft.x && loc.y >= offset.top && loc.y <= offset.top + menu.offsetHeight)));
    };
    /**
     * Trigger a possible row activation whenever entering a new row.
     */
    SideMenuComponent.prototype.mouseenterRow = function (row) {
        if (this.timeoutId) {
            // Cancel any previous activation delays
            clearTimeout(this.timeoutId);
        }
        this.possiblyActivate(row);
    };
    /**
     * Trigger a row deactivation whenever leaving a row.
     */
    SideMenuComponent.prototype.mouseleaveRow = function (row) {
        if (!this.isMouseInMenuArea()) {
            this.deactivateSubMenu(row);
        }
    };
    /**
     * Set the current opened app to be active
     * @param {App} app
     */
    SideMenuComponent.prototype.activateApp = function (app) {
        // Clear the existing active app
        var appIdx = -1;
        var catalogIdx = this.role.categories.findIndex(function (category) { return category.active === true; });
        if (catalogIdx > -1) {
            this.role.categories[catalogIdx].active = false;
            if (!this.role.categories[catalogIdx].routeLink) {
                appIdx = this.role.categories[catalogIdx].apps.findIndex(function (app1) { return app1.active === true; });
                if (appIdx > -1) {
                    this.role.categories[catalogIdx].apps[appIdx].active = false;
                }
            }
        }
        // Set the new active app
        catalogIdx = this.role.categories.findIndex(function (category) {
            if (category.routeLink === app.routeLink) {
                return true;
            }
            else {
                appIdx = category.apps.findIndex(function (app1) { return app1.routeLink === app.routeLink; });
                return appIdx > -1;
            }
        });
        if (catalogIdx > -1) {
            this.role.categories[catalogIdx].active = true;
            if (appIdx > -1) {
                this.role.categories[catalogIdx].apps[appIdx].active = true;
            }
        }
    };
    /**
     * Immediately activate a row if the user clicks on it.
     */
    SideMenuComponent.prototype.clickRow = function (row) {
        if (this.isCollapsed) {
            this.activate(row);
        }
        else {
            this.role.categories[row].isSubMenuShow = !this.role.categories[row].isSubMenuShow;
        }
    };
    /**
     * Hide the sub-menu
     */
    SideMenuComponent.prototype.hideSubMenu = function () {
        this.role.categories[this.activeRow].isSubMenuShow = false;
    };
    /**
     * Activate a menu row.
     */
    SideMenuComponent.prototype.activate = function (row) {
        if (row === this.activeRow) {
            return;
        }
        if (this.activeRow) {
            this.deactivateSubMenu(this.activeRow);
        }
        this.activateSubMenu(row);
        this.activeRow = row;
    };
    /**
     * Possibly activate a menu row. If mouse movement indicates that we
     * shouldn't activate yet because user may be trying to enter
     * a submenu's content, then delay and check again later.
     */
    SideMenuComponent.prototype.possiblyActivate = function (row) {
        var _this = this;
        var delay = this.activationDelay();
        if (delay) {
            this.timeoutId = setTimeout(function () { return _this.possiblyActivate(row); }, delay);
        }
        else {
            this.activate(row);
        }
    };
    /**
     * Return the amount of time that should be used as a delay before the
     * currently hovered row is activated.
     *
     * Returns 0 if the activation should happen immediately. Otherwise,
     * returns the number of milliseconds that should be delayed before
     * checking again to see if the row should be activated.
     */
    SideMenuComponent.prototype.activationDelay = function () {
        if (!this.activeRow) {
            // If there is no other submenu row already active, then
            // go ahead and activate immediately.
            return 0;
        }
        var menu = this.sideMenu.nativeElement;
        var rem = parseInt(window.getComputedStyle(document.head).getPropertyValue('font-size'), 10);
        var offset = {
            left: menu.offsetLeft,
            top: menu.offsetTop
        };
        var upperLeft = {
            x: offset.left,
            y: this.role.categories[this.activeRow].top * rem + this.TOLERANCE
        };
        var upperRight = {
            x: offset.left + menu.offsetWidth + rem,
            y: upperLeft.y
        };
        var lowerLeft = {
            x: offset.left,
            y: upperLeft.y + this.role.categories[this.activeRow].height * rem
        };
        var lowerRight = {
            x: offset.left + menu.offsetWidth + rem,
            y: lowerLeft.y
        };
        var loc = this.mouseLocs[this.mouseLocs.length - 1];
        var prevLoc = this.mouseLocs[0];
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
        var decreasingCorner = upperRight, increasingCorner = lowerRight;
        var decreasingSlope = slope(loc, decreasingCorner), increasingSlope = slope(loc, increasingCorner), prevDecreasingSlope = slope(prevLoc, decreasingCorner), prevIncreasingSlope = slope(prevLoc, increasingCorner);
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
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sideMenu'),
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
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.css */ "./src/app/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_identity_service__WEBPACK_IMPORTED_MODULE_7__["IdentityService"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _share_service__WEBPACK_IMPORTED_MODULE_9__["ShareService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


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
//# sourceMappingURL=main.js.map