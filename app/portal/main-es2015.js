(self["webpackChunkangular_portal"] = self["webpackChunkangular_portal"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ 21142);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-page/error-page.component */ 97446);
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user-list/user-list.component */ 40846);
/* harmony import */ var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user-detail/user-detail.component */ 68081);
/* harmony import */ var _work_protection_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-protection.guard */ 24023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);








const routes = [
    // The dashboard app is lazy loading
    // { path: 'users', loadChildren: 'app/user/user.module#UserModule'},
    { path: 'users', component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__.UserListComponent },
    { path: 'users/:userID', component: _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__.UserDetailComponent, canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_4__.WorkProtectionGuard] },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! app/dashboard/dashboard.module */ 34814)).then(m => m.DashboardModule) },
    { path: 'handsontable', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_handsontable_handsontable_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! app/handsontable/handsontable.module */ 83113)).then(m => m.HandsontableModule) },
    { path: 'errors', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_1__.ErrorPageComponent },
    { path: 'pageNotFound', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-menu/side-menu.component */ 74806);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./msgStore */ 87534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity.service */ 8934);
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share.service */ 56425);
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history.service */ 89875);
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jor-angular */ 69120);
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ui-message-angular */ 23540);
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ui-logon-angular */ 46231);
/* harmony import */ var _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./head-bar/head-bar.component */ 48177);
















class AppComponent {
    constructor(router, activatedRoute, identityService, shareService, historyService, entityService, messageService, logonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.identityService = identityService;
        this.shareService = shareService;
        this.historyService = historyService;
        this.entityService = entityService;
        this.messageService = messageService;
        this.logonService = logonService;
        this.isCollapsed = false;
        this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.originalHost);
        this.logonService.setHost(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.originalHost);
        this.logonService.session().subscribe(data => {
            this.identityService.setSession(data);
            this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_2__.msgStore, this.identityService.Session.LANGUAGE);
        });
    }
    ngOnInit() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => this.activatedRoute), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(route => route.outlet === 'primary'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(route => {
            let url = '';
            while (route.firstChild) {
                route = route.firstChild;
                if (route.snapshot.url.length > 0) {
                    url = url ? url + '/' + route.snapshot.url.join('/') : route.snapshot.url.join('/');
                }
            }
            return url;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(url => {
            if (this.shareService.apps.length === 0) {
                // return this.identityService.getApp('/' + url);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(null);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(this.shareService.apps.find(app => app.routeLink === '/' + url));
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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_3__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_share_service__WEBPACK_IMPORTED_MODULE_4__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_history_service__WEBPACK_IMPORTED_MODULE_5__.HistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_13__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_14__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ui_logon_angular__WEBPACK_IMPORTED_MODULE_15__.LogonService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_0__.SideMenuComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
    } }, decls: 6, vars: 0, consts: [[1, "dk-frame-view"], [3, "onCollapse"], [1, "dk-frame-content"], [1, "dk-content-area"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "app-head-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onCollapse", function AppComponent_Template_app_head_bar_onCollapse_1_listener() { return ctx.onCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "app-side-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } }, directives: [_head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_6__.HeadBarComponent, _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_0__.SideMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], styles: [".dk-frame-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 768px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.dk-frame-content[_ngcontent-%COMP%] {\n  display: flex;\n  position: static;\n  height: 100%;\n  width: auto;\n}\n.dk-content-area[_ngcontent-%COMP%]{\n  width: -webkit-fill-available;\n  width: -moz-available;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100%;\n  padding-left: 1rem;\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBuYXZpZ2F0aW9uIEZyYW1lIHdvcmsgKi9cbi5kay1mcmFtZS12aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiA3NjhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRrLWZyYW1lLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmRrLWNvbnRlbnQtYXJlYXtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-menu/side-menu.component */ 74806);
/* harmony import */ var _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head-bar/head-bar.component */ 48177);
/* harmony import */ var _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mockup/mockup.module */ 75761);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./external-app/external-app.module */ 79837);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ 21142);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-page/error-page.component */ 97446);
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ui-message-angular */ 23540);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom.reuse.strategy */ 16850);
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user-list/user-list.component */ 40846);
/* harmony import */ var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user-detail/user-detail.component */ 68081);
/* harmony import */ var _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user-detail/user-basic/user-basic.component */ 59509);
/* harmony import */ var _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user-detail/user-personalization/user-personalization.component */ 97634);
/* harmony import */ var _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user-detail/user-role/user-role.component */ 67795);
/* harmony import */ var _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user-detail/user-email/user-email.component */ 87992);
/* harmony import */ var _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-detail/user-address/user-address.component */ 44594);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jor-angular */ 69120);
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ui-logon-angular */ 46231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouteReuseStrategy, useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_8__.CustomReuseStrategy }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            ui_message_angular__WEBPACK_IMPORTED_MODULE_20__.MessageModule,
            _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_4__.MockupModule,
            _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_5__.ExternalAppModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            jor_angular__WEBPACK_IMPORTED_MODULE_22__.JorAngularModule,
            ui_logon_angular__WEBPACK_IMPORTED_MODULE_23__.LogonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_2__.SideMenuComponent,
        _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_3__.HeadBarComponent,
        _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__.UserListComponent,
        _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__.UserDetailComponent,
        _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_11__.UserBasicComponent,
        _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_12__.UserPersonalizationComponent,
        _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_13__.UserRoleComponent,
        _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_14__.UserEmailComponent,
        _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_15__.UserAddressComponent,
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent,
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__.ErrorPageComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        ui_message_angular__WEBPACK_IMPORTED_MODULE_20__.MessageModule,
        _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_4__.MockupModule,
        _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_5__.ExternalAppModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        jor_angular__WEBPACK_IMPORTED_MODULE_22__.JorAngularModule,
        ui_logon_angular__WEBPACK_IMPORTED_MODULE_23__.LogonModule] }); })();


/***/ }),

/***/ 16850:
/*!******************************************!*\
  !*** ./src/app/custom.reuse.strategy.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomReuseStrategy": function() { return /* binding */ CustomReuseStrategy; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

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
CustomReuseStrategy.ɵfac = function CustomReuseStrategy_Factory(t) { return new (t || CustomReuseStrategy)(); };
CustomReuseStrategy.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomReuseStrategy, factory: CustomReuseStrategy.ɵfac });


/***/ }),

/***/ 51969:
/*!***********************************!*\
  !*** ./src/app/dialog.service.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogService": function() { return /* binding */ DialogService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class DialogService {
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns observable resolving to `true`=confirm or `false`=cancel
     */
    confirm(message) {
        const confirmation = window.confirm(message || 'Is it OK?');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(confirmation);
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(); };
DialogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 97446:
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageComponent": function() { return /* binding */ ErrorPageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-message-angular */ 23540);


class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 1, vars: 0, template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dk-message");
    } }, directives: [ui_message_angular__WEBPACK_IMPORTED_MODULE_1__.MessageComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 17634:
/*!*************************************************************!*\
  !*** ./src/app/external-app/external-app-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalAppRoutingModule": function() { return /* binding */ ExternalAppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _external_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external-app.component */ 43118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: 'external-app/:appID', component: _external_app_component__WEBPACK_IMPORTED_MODULE_0__.ExternalAppComponent
    }
];
class ExternalAppRoutingModule {
}
ExternalAppRoutingModule.ɵfac = function ExternalAppRoutingModule_Factory(t) { return new (t || ExternalAppRoutingModule)(); };
ExternalAppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExternalAppRoutingModule });
ExternalAppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExternalAppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 43118:
/*!********************************************************!*\
  !*** ./src/app/external-app/external-app.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalAppComponent": function() { return /* binding */ ExternalAppComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../share.service */ 56425);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../identity.service */ 8934);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);







class ExternalAppComponent {
    constructor(route, shareService, identityService, sanitizer, router) {
        this.route = route;
        this.shareService = shareService;
        this.identityService = identityService;
        this.sanitizer = sanitizer;
        this.router = router;
        // iFrameWidth: string;
        this.apps = [];
    }
    ngOnInit() {
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((params) => {
            const appID = params.get('appID');
            if (this.shareService.apps.length === 0) {
                return this.identityService.getAppRouteLink(appID);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.shareService.apps.find(app => app.appID === appID).originalRouteLink);
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
}
ExternalAppComponent.ɵfac = function ExternalAppComponent_Factory(t) { return new (t || ExternalAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_share_service__WEBPACK_IMPORTED_MODULE_0__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_1__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ExternalAppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExternalAppComponent, selectors: [["app-external-app"]], decls: 1, vars: 1, consts: [[1, "nav-content-iframe", 3, "src"]], template: function ExternalAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "iframe", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.appUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeResourceUrl"]);
    } }, styles: [".nav-content-iframe[_ngcontent-%COMP%]{\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsLWFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJleHRlcm5hbC1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29udGVudC1pZnJhbWV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuIl19 */"] });


/***/ }),

/***/ 79837:
/*!*****************************************************!*\
  !*** ./src/app/external-app/external-app.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalAppModule": function() { return /* binding */ ExternalAppModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _external_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external-app-routing.module */ 17634);
/* harmony import */ var _external_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external-app.component */ 43118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class ExternalAppModule {
}
ExternalAppModule.ɵfac = function ExternalAppModule_Factory(t) { return new (t || ExternalAppModule)(); };
ExternalAppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ExternalAppModule });
ExternalAppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _external_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExternalAppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExternalAppModule, { declarations: [_external_app_component__WEBPACK_IMPORTED_MODULE_1__.ExternalAppComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _external_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExternalAppRoutingModule] }); })();


/***/ }),

/***/ 48177:
/*!************************************************!*\
  !*** ./src/app/head-bar/head-bar.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadBarComponent": function() { return /* binding */ HeadBarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-logon-angular */ 46231);
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../history.service */ 89875);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../identity.service */ 8934);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);









function HeadBarComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", app_r1.routeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", app_r1.name, "");
} }
const _c0 = function (a0) { return { "open": a0 }; };
class HeadBarComponent {
    constructor(document, history, logonService, identityService) {
        this.document = document;
        this.history = history;
        this.logonService = logonService;
        this.identityService = identityService;
        this.onCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.dropdown = {
            historyOpen: false,
            notificationOpen: false,
            preferenceOpen: false
        };
        this.userBasicInfo = new ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__.Session();
    }
    ngOnInit() {
        this.history.currentHistoryObserver.subscribe(history => this.navHistory = history);
        this.history.currentAppObserver.subscribe(currentApp => this.currentApp = currentApp);
        this.logonService.session().subscribe(session => this.userBasicInfo = session);
        this.userBasicInfo = this.identityService.Session;
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
        this.logonService.logout().subscribe(() => this.document.location.href = window.location.origin);
    }
}
HeadBarComponent.ɵfac = function HeadBarComponent_Factory(t) { return new (t || HeadBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_history_service__WEBPACK_IMPORTED_MODULE_0__.HistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__.LogonService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_1__.IdentityService)); };
HeadBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeadBarComponent, selectors: [["app-head-bar"]], hostBindings: function HeadBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseup", function HeadBarComponent_mouseup_HostBindingHandler($event) { return ctx.mouseupDocument($event, ctx.dropdown); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, outputs: { onCollapse: "onCollapse" }, decls: 64, vars: 12, consts: [[1, "dk-navbar-inverse"], [1, "dk-navbar-header"], ["type", "button", 1, "dk-navbar-toggle", 3, "click"], [1, "dk-sr-only"], [1, "dk-icon-bar"], ["href", "#", 1, "dk-navbar-brand"], ["alt", "Brand", "src", "assets/darkhouse.png"], [1, "dk-navbar-center"], [1, "dk-nav", "dk-navbar-nav", "dk-navbar-app-title"], [3, "ngClass"], [1, "dk-nav-toggle", 3, "click"], [1, "dk-caret"], [1, "dk-dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "dk-navbar-right"], [1, "dk-nav", "dk-navbar-nav"], [1, "fas", "fa-bell"], [1, "dk-label", "dk-badge"], ["href", "#"], [1, "dk-label", "dk-label-warning"], [1, "dk-divider"], ["href", "#", 1, "dk-text-center"], [1, "fas", "fa-user"], [1, "fas", "fa-cog"], [3, "click"], [1, "fas", "fa-power-off"], [3, "routerLink"]], template: function HeadBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeadBarComponent_Template_button_click_2_listener() { return ctx.collapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeadBarComponent_Template_a_click_13_listener() { return ctx.toggleHistoryDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "b", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HeadBarComponent_li_17_Template, 3, 2, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeadBarComponent_Template_a_click_21_listener() { return ctx.toggleNotificationDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "32");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "4:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Favourites Snippet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "4:30 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Email marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "5:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Subscriber focused email design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeadBarComponent_Template_a_click_46_listener() { return ctx.togglePreferenceOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "b", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeadBarComponent_Template_a_click_61_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.dropdown.historyOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.currentApp.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.navHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.dropdown.notificationOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.dropdown.preferenceOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.userBasicInfo && ctx.userBasicInfo.DISPLAY_NAME, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: [".dk-navbar-inverse[_ngcontent-%COMP%]{\n  background-color: #2f3c48;\n  display: flex;\n  position: static;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  border-color: #080808;\n}\n.dk-nav[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n.dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.dk-nav-toggle[_ngcontent-%COMP%]{\n  \n}\n.dk-navbar-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  float:none;\n}\n.dk-navbar-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  color: #fafafa;\n  max-width: 100%;\n  display: inline-block;\n  box-sizing: border-box;\n  white-space: pre-line;\n  word-wrap: break-word;\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: Arial,Helvetica,sans-serif;\n  background-color: #2f3c48;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  line-height: 20px;\n}\n.dk-navbar-center[_ngcontent-%COMP%]{\n  flex-grow:1;\n}\n.dk-navbar-app-title[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  float: none;\n  display: block;\n  width: 300px;\n  text-align: center;\n}\n.dk-navbar-header[_ngcontent-%COMP%], .dk-navbar-right[_ngcontent-%COMP%] {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.dk-navbar-brand[_ngcontent-%COMP%] {\n  float: left;\n  height: 50px;\n  padding: 10px 10px;\n  font-size: 18px;\n  line-height: 30px;\n}\n.dk-navbar-brand[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 29%;\n}\n.dk-navbar-toggle[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  margin-left: 0.3rem;\n  margin-right: 0;\n  position: relative;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid;\n  border-color: #333;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.dk-navbar-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #333;\n}\n.dk-navbar-toggle[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.dk-sr-only[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0,0,0,0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.dk-navbar-toggle[_ngcontent-%COMP%]   .dk-icon-bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n  background-color: #fff;\n}\n.dk-navbar-toggle[_ngcontent-%COMP%]   .dk-icon-bar[_ngcontent-%COMP%] + .dk-icon-bar[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.dk-caret[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dk-label[_ngcontent-%COMP%] {\n  display: inline;\n  padding: .3em .6em .3em .3em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  margin-right: 0.5rem;\n}\n.dk-label-warning[_ngcontent-%COMP%] {\n  background-color: #f0ad4e;\n}\n.dk-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  padding: .1rem .4rem;\n  border-radius: .625rem;\n  left: 2.3rem;\n  background-color: #f05050;\n}\n.dk-dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  border-radius: 4px;\n}\n.dk-navbar-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .dk-dropdown-menu[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.open[_ngcontent-%COMP%] > .dk-dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n.dk-dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: 400;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n  text-decoration: none;\n  background-color: transparent;\n}\n.dk-dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dk-dropdown-menu[_ngcontent-%COMP%]   .dk-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dk-text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.fas[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n@media (min-width: 768px) {\n  .dk-navbar-right[_ngcontent-%COMP%]   .dk-dropdown-menu[_ngcontent-%COMP%] {\n    right: 0;\n    left: auto;\n  }\n  .dk-navbar-right[_ngcontent-%COMP%] {\n    float: right!important;\n    margin-right: -15px;\n  }\n}\n@media (max-width: 767px) {\n  .dk-navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dk-dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n    left: auto;\n    right: 1px;\n  }\n  .dk-navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dk-dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 3px 20px;\n    line-height: 20px;\n    color: #333;\n  }\n  .dk-navbar-inverse[_ngcontent-%COMP%]   .dk-navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dk-dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dk-navbar-inverse[_ngcontent-%COMP%]   .dk0navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dk-dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    color: #262626;\n    text-decoration: none;\n    background-color: #f5f5f5;\n  }\n}\n@media (min-width: 150px) {\n  .dk-navbar-nav[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0 1rem 0 0;\n  }\n  .dk-navbar-app-title[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    float: none;\n  }\n  .dk-navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    float: left;\n  }\n  .dk-navbar-app-title[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\n    float: none;\n  }\n  .dk-navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWQtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCO0FBQ3hCO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLE9BQU87RUFDUCxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVDQUF1QztFQUN2Qyx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSw4QkFBc0I7RUFBdEIsMkJBQXNCO0VBQXRCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFOztJQUVFLFFBQVE7SUFDUixVQUFVO0VBQ1o7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsVUFBVTtJQUNWLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTs7SUFFRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoiaGVhZC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlYWQgTmF2aWdhdGlvbiBCYXIgKi9cbi5kay1uYXZiYXItaW52ZXJzZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2M0ODtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMzA7XG4gIGJvcmRlci1jb2xvcjogIzA4MDgwODtcbn1cbi5kay1uYXYge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uZGstbmF2PmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmRrLW5hdj5saT5hIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLmRrLW5hdj5saSxcbi5kay1uYXY+bGk+YSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kay1uYXY+bGk+YTpmb2N1cyxcbi5kay1uYXY+bGk+YTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5kay1uYXYtdG9nZ2xle1xuICAvKlVzZWQgZm9yIGZpZ3VyZSBvdXQgdG9nZ2xlIGluIG5hdmlnYXRpb24gYmFyKi9cbn1cbi5kay1uYXZiYXItbmF2PmxpIHtcbiAgZmxvYXQ6bm9uZTtcbn1cbi5kay1uYXZiYXItbmF2PmxpPmEge1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjNjNDg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4uZGstbmF2YmFyLWNlbnRlcntcbiAgZmxleC1ncm93OjE7XG59XG4uZGstbmF2YmFyLWFwcC10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGstbmF2YmFyLWhlYWRlcixcbi5kay1uYXZiYXItcmlnaHQge1xuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xufVxuLmRrLW5hdmJhci1icmFuZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5kay1uYXZiYXItYnJhbmQ+aW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyOSU7XG59XG4uZGstbmF2YmFyLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDlweCAxMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRrLW5hdmJhci10b2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuLmRrLW5hdmJhci10b2dnbGU6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmRrLXNyLW9ubHkge1xuICBib3JkZXI6IDA7XG4gIGNsaXA6IHJlY3QoMCwwLDAsMCk7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbn1cbi5kay1uYXZiYXItdG9nZ2xlIC5kay1pY29uLWJhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5kay1uYXZiYXItdG9nZ2xlIC5kay1pY29uLWJhcisuZGstaWNvbi1iYXIge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uZGstY2FyZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci10b3A6IDRweCBkYXNoZWQ7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmRrLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAuM2VtIC42ZW0gLjNlbSAuM2VtO1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYm9yZGVyLXJhZGl1czogLjI1ZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmRrLWxhYmVsLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlO1xufVxuLmRrLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIHBhZGRpbmc6IC4xcmVtIC40cmVtO1xuICBib3JkZXItcmFkaXVzOiAuNjI1cmVtO1xuICBsZWZ0OiAyLjNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDUwNTA7XG59XG4uZGstZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbjogMnB4IDAgMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5kay1uYXZiYXItbmF2PmxpPi5kay1kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG4ub3Blbj4uZGstZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmRrLWRyb3Bkb3duLW1lbnU+bGk+YSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAzcHggMjBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBjb2xvcjogIzMzMztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5kay1kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIge1xuICBjb2xvcjogIzI2MjYyNjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLmRrLWRyb3Bkb3duLW1lbnUgLmRrLWRpdmlkZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiA5cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbn1cbi5kay10ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mYXMge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZGstbmF2YmFyLXJpZ2h0XG4gIC5kay1kcm9wZG93bi1tZW51IHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG4gIC5kay1uYXZiYXItcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5kay1uYXZiYXItbmF2IC5vcGVuIC5kay1kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxcHg7XG4gIH1cbiAgLmRrLW5hdmJhci1uYXYgLm9wZW4gLmRrLWRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIC5kay1uYXZiYXItaW52ZXJzZSAuZGstbmF2YmFyLW5hdiAub3BlbiAuZGstZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlcixcbiAgLmRrLW5hdmJhci1pbnZlcnNlIC5kazBuYXZiYXItbmF2IC5vcGVuIC5kay1kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzI2MjYyNjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE1MHB4KSB7XG4gIC5kay1uYXZiYXItbmF2IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gIH1cbiAgLmRrLW5hdmJhci1hcHAtdGl0bGUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5kay1uYXZiYXItbmF2ID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5kay1uYXZiYXItYXBwLXRpdGxlID4gbGl7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLmRrLW5hdmJhci1uYXYgPiBsaSA+IGEge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 89875:
/*!************************************!*\
  !*** ./src/app/history.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryService": function() { return /* binding */ HistoryService; }
/* harmony export */ });
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 76329);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class HistoryService {
    constructor() {
        this.navHistory = [];
        this.historySource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.currentApp = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({ name: 'Home' });
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
}
HistoryService.ɵfac = function HistoryService_Factory(t) { return new (t || HistoryService)(); };
HistoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HistoryService, factory: HistoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8934:
/*!*************************************!*\
  !*** ./src/app/identity.service.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentityService": function() { return /* binding */ IdentityService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role */ 81611);
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jor-angular */ 69120);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ui-message-angular */ 23540);
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-logon-angular */ 46231);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);













const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' })
};
class IdentityService {
    constructor(http, messageService, router) {
        this.http = http;
        this.messageService = messageService;
        this.router = router;
        this.originalHost = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.originalHost;
    }
    setSession(data) {
        this.session = data;
    }
    get Session() {
        if (this.session) {
            return this.session;
        }
        const defaultSession = new ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__.Session();
        defaultSession.USER_ID = 'DH001';
        defaultSession.LANGUAGE = 'EN';
        return defaultSession;
    }
    get CurrentTime() {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
    }
    /**
     * Get a role detail information from backend based on an authenticated user
     * @returns {Observable<Role>}
     */
    getRoleDetail() {
        return this.http.post(this.originalHost + `/api/function/getRoleDetail`, {}, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('getRoleDetail')));
    }
    /**
     * Get an APP detail based on a routeLink
     * @param {string} routeLink
     * @returns {Observable<App>}
     */
    getApp(routeLink) {
        if (routeLink.substr(0, 13) === '/external-app') {
            return this.http.post(this.originalHost + `/api/entity/instance`, { RELATION_ID: 'app', APP_ID: routeLink.substr(14) }, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(appEntity => {
                const app = new _role__WEBPACK_IMPORTED_MODULE_0__.App;
                if (Array.isArray(appEntity)) {
                    appEntity = appEntity[0];
                } // Could return an array, like message or multiple entities
                if (appEntity['ENTITY_ID']) { // It returns entity instance, rather than an error message;
                    app.name = appEntity['app'][0]['NAME'];
                    app.routeLink = routeLink;
                }
                return app;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('getApp')));
        }
        else {
            return this.http.post(this.originalHost + `/api/entity/instance`, { RELATION_ID: 'app', ROUTE_LINK: routeLink }, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(appEntity => {
                const app = new _role__WEBPACK_IMPORTED_MODULE_0__.App;
                if (Array.isArray(appEntity)) {
                    appEntity = appEntity[0];
                }
                if (appEntity['ENTITY_ID']) {
                    app.name = appEntity['app'][0]['NAME'];
                    app.routeLink = appEntity['app'][0]['ROUTE_LINK'];
                }
                return app;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('getApp')));
        }
    }
    /**
     * Get an APP's routelink from its appID
     * @param appID
     */
    getAppRouteLink(appID) {
        return this.http.post(this.originalHost + `/api/entity/instance`, { RELATION_ID: 'app', APP_ID: appID }, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(appEntity => {
            if (Array.isArray(appEntity)) {
                appEntity = appEntity[0];
            } // Could return an array, like message or multiple entities
            if (appEntity['ENTITY_ID']) { // It returns entity instance, rather than an error message;
                return appEntity['app'][0]['ROUTE_LINK'];
            }
            else {
                return 'appNotFound';
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('getAppRouteLink')));
    }
    /**
     * Search Users by USER_ID and USER_NAME.
     * Return a list with columns USER_ID, USER_NAME, DISPLAY_NAME, LOCK, and PWD_STATE
     * Wildcard search is supported using '*' or '%'.
     **/
    searchUsers(userID, userName) {
        const queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_7__.QueryObject();
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
        return this.http.post(this.originalHost + `/api/query`, queryObject, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('searchObjects')));
    }
    /**
     * Get detail information of a user from USER_ID
     * Return information in Relations: r_user, r_employee, r_email, r_address, and r_personalization.
     * The relationship to user role is also inquired with information in Relation: r_role
     **/
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
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('getUserDetail')));
    }
    /**
     * Get user by User ID, only return information in Relations: r_user
     * This service call is mainly used to check whether the given USER_ID already exists
     **/
    getUserByUserID(userID) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_user', USER_ID: userID },
            piece: { RELATIONS: ['r_user'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('getUserByUserID')));
    }
    getUserByUserName(userName) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_user', USER_NAME: userName },
            piece: { RELATIONS: ['r_user'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('getUserByUserName')));
    }
    getRoleDesc(roleID) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_role', NAME: roleID },
            piece: { RELATIONS: ['r_role'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(instance => {
            return 'INSTANCE_GUID' in instance ?
                {
                    INSTANCE_GUID: instance['INSTANCE_GUID'],
                    DESCRIPTION: instance['r_role'] ? instance['r_role'][0]['DESCRIPTION'] : ''
                } : instance[0];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('getRoleDesc')));
    }
    /**
     * Save an entity to DB
     * A generic entity in JSON is given. If the JSON has attribute INSTANCE_GUID, it calls PUT, otherwise, POST
     **/
    saveUser(user) {
        if (user['INSTANCE_GUID']) {
            return this.http.put(this.originalHost + `/api/entity`, user, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('saveUser')));
        }
        else {
            return this.http.post(this.originalHost + `/api/entity`, user, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('saveUser')));
        }
    }
    /**
     * Delete an entity from DB
     * A GUID of entity instance is given. After the call, the instance will be deleted permanently
     **/
    deleteUser(userGUID) {
        return this.http.delete(this.originalHost + `/api/entity/instance/` + userGUID, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('deleteUser')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            if (error.status === 401) {
                this.messageService.addMessage('EXCEPTION', 'NOT_AUTHENTICATED_OR_SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_8__.messageType.Exception);
            }
            else {
                this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_8__.messageType.Exception, operation, error.message);
            }
            this.router.navigate(['errors']);
            console.error(operation, error); // log to console instead
            // Let the app keep running by returning an empty result.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(result);
        };
    }
}
IdentityService.ɵfac = function IdentityService_Factory(t) { return new (t || IdentityService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_8__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router)); };
IdentityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: IdentityService, factory: IdentityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32983:
/*!*************************************************!*\
  !*** ./src/app/mockup/mockup-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockupRoutingModule": function() { return /* binding */ MockupRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mockup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mockup.component */ 31365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: 'mockup/:UI', component: _mockup_component__WEBPACK_IMPORTED_MODULE_0__.MockupComponent
    }
];
class MockupRoutingModule {
}
MockupRoutingModule.ɵfac = function MockupRoutingModule_Factory(t) { return new (t || MockupRoutingModule)(); };
MockupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MockupRoutingModule });
MockupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MockupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 31365:
/*!********************************************!*\
  !*** ./src/app/mockup/mockup.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockupComponent": function() { return /* binding */ MockupComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);


class MockupComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() { }
    ngDoCheck() {
        this.mockupUI = 'assets/' + this.route.snapshot.paramMap.get('UI') + '.png';
    }
}
MockupComponent.ɵfac = function MockupComponent_Factory(t) { return new (t || MockupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
MockupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MockupComponent, selectors: [["app-mockup"]], decls: 1, vars: 1, consts: [[2, "max-width", "100%", 3, "src"]], template: function MockupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mockupUI, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2NrdXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 75761:
/*!*****************************************!*\
  !*** ./src/app/mockup/mockup.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockupModule": function() { return /* binding */ MockupModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _mockup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mockup.component */ 31365);
/* harmony import */ var _mockup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mockup-routing.module */ 32983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class MockupModule {
}
MockupModule.ɵfac = function MockupModule_Factory(t) { return new (t || MockupModule)(); };
MockupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MockupModule });
MockupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _mockup_routing_module__WEBPACK_IMPORTED_MODULE_1__.MockupRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MockupModule, { declarations: [_mockup_component__WEBPACK_IMPORTED_MODULE_0__.MockupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _mockup_routing_module__WEBPACK_IMPORTED_MODULE_1__.MockupRoutingModule] }); })();


/***/ }),

/***/ 87534:
/*!*****************************!*\
  !*** ./src/app/msgStore.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "msgStore": function() { return /* binding */ msgStore; }
/* harmony export */ });
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

/***/ 21142:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": function() { return /* binding */ NotFoundComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 81611:
/*!*************************!*\
  !*** ./src/app/role.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": function() { return /* binding */ Role; },
/* harmony export */   "Catalog": function() { return /* binding */ Catalog; },
/* harmony export */   "App": function() { return /* binding */ App; },
/* harmony export */   "UserBasicInfo": function() { return /* binding */ UserBasicInfo; }
/* harmony export */ });
class Role {
}
class Catalog {
}
class App {
}
class UserBasicInfo {
}


/***/ }),

/***/ 56425:
/*!**********************************!*\
  !*** ./src/app/share.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareService": function() { return /* binding */ ShareService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class ShareService {
    constructor() {
        this.apps = [];
        this.isCollapsed = false;
        this.isCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.isCollapsed$ = this.isCollapsedSubject.asObservable();
    }
    updateIsCollapsed(status) {
        this.isCollapsed = status;
        this.isCollapsedSubject.next(this.isCollapsed);
    }
}
ShareService.ɵfac = function ShareService_Factory(t) { return new (t || ShareService)(); };
ShareService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShareService, factory: ShareService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 74806:
/*!**************************************************!*\
  !*** ./src/app/side-menu/side-menu.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideMenuComponent": function() { return /* binding */ SideMenuComponent; }
/* harmony export */ });
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../role */ 81611);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 87519);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/Subject */ 13409);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fuzzysort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuzzysort */ 7876);
/* harmony import */ var fuzzysort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuzzysort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../identity.service */ 8934);
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ui-message-angular */ 23540);
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share.service */ 56425);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);











const _c0 = ["sideMenu"];
function SideMenuComponent_ul_3_li_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 15);
} if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", category_r6.icon);
} }
function SideMenuComponent_ul_3_li_1_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function SideMenuComponent_ul_3_li_1_input_2_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r16.searchApp(_r15.value); })("keypress", function SideMenuComponent_ul_3_li_1_input_2_Template_input_keypress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r18.enterApp($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SideMenuComponent_ul_3_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", app_r20.routeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](app_r20.name);
} }
function SideMenuComponent_ul_3_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SideMenuComponent_ul_3_li_1_ul_3_li_1_Template, 3, 2, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r10.apps$));
} }
function SideMenuComponent_ul_3_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", category_r6.routeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", category_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", category_r6.name, " ");
} }
const _c1 = function (a0, a1) { return { "fa-angle-right": a0, "fa-angle-down": a1 }; };
function SideMenuComponent_ul_3_li_1_a_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 23);
} if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](1, _c1, !category_r6.isSubMenuShow, category_r6.isSubMenuShow));
} }
function SideMenuComponent_ul_3_li_1_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SideMenuComponent_ul_3_li_1_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.clickRow(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SideMenuComponent_ul_3_li_1_a_5_span_3_Template, 1, 4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", category_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", category_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r6.apps && category_r6.apps.length > 0);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function SideMenuComponent_ul_3_li_1_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, app_r29.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", app_r29.routeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](app_r29.name);
} }
const _c3 = function (a0, a1) { return { "expended": a0, "collapsed": a1 }; };
function SideMenuComponent_ul_3_li_1_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SideMenuComponent_ul_3_li_1_ul_6_li_1_Template, 3, 5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c3, category_r6.isSubMenuShow, !category_r6.isSubMenuShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", category_r6.apps);
} }
const _c4 = function (a0, a1, a2, a3) { return { "active": a0, "collapsed": a1, "dk-menu-search": a2, "menuDisplay": a3 }; };
function SideMenuComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SideMenuComponent_ul_3_li_1_span_1_Template, 1, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SideMenuComponent_ul_3_li_1_input_2_Template, 2, 0, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SideMenuComponent_ul_3_li_1_ul_3_Template, 3, 3, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SideMenuComponent_ul_3_li_1_a_4_Template, 3, 3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SideMenuComponent_ul_3_li_1_a_5_Template, 4, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SideMenuComponent_ul_3_li_1_ul_6_Template, 2, 5, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](7, _c4, category_r6.active, !category_r6.isSubMenuShow, category_r6.routeLink === "/appSearch", category_r6.routeLink === "/appSearch" || ctx_r5.menuDisplay));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r6.routeLink === "/appSearch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r6.routeLink === "/appSearch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r6.routeLink === "/appSearch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r6.routeLink && category_r6.routeLink !== "/appSearch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !category_r6.routeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !category_r6.routeLink);
} }
function SideMenuComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SideMenuComponent_ul_3_li_1_Template, 7, 12, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.role.categories);
} }
function SideMenuComponent_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", category_r32.icon);
} }
function SideMenuComponent_ul_4_li_1_div_2_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SideMenuComponent_ul_4_li_1_div_2_li_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r45.hideSubMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", app_r44.routeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](app_r44.name);
} }
const _c5 = function (a0) { return { "dk-side-menu-hover-show": a0 }; };
function SideMenuComponent_ul_4_li_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function SideMenuComponent_ul_4_li_1_div_2_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r47.searchApp(_r42.value); })("keypress", function SideMenuComponent_ul_4_li_1_div_2_Template_input_keypress_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r49.enterApp($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SideMenuComponent_ul_4_li_1_div_2_li_6_Template, 3, 2, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", category_r32.top, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c5, category_r32.isSubMenuShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, ctx_r35.apps$));
} }
const _c6 = function (a0) { return { "dk-popover-arrow-show": a0 }; };
function SideMenuComponent_ul_4_li_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 35);
} if (rf & 2) {
    const category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", category_r32.arrowTop, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c6, category_r32.isSubMenuShow));
} }
function SideMenuComponent_ul_4_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", category_r32.routeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", category_r32.icon);
} }
function SideMenuComponent_ul_4_li_1_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", category_r32.icon);
} }
function SideMenuComponent_ul_4_li_1_div_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SideMenuComponent_ul_4_li_1_div_6_li_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r56.hideSubMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, app_r55.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", app_r55.routeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](app_r55.name);
} }
function SideMenuComponent_ul_4_li_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SideMenuComponent_ul_4_li_1_div_6_li_6_Template, 3, 5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", category_r32.top, "rem")("height", category_r32.height, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c5, category_r32.isSubMenuShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", category_r32.apps);
} }
function SideMenuComponent_ul_4_li_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 35);
} if (rf & 2) {
    const category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", category_r32.arrowTop, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c6, category_r32.isSubMenuShow));
} }
function SideMenuComponent_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function SideMenuComponent_ul_4_li_1_Template_li_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r61); const i_r33 = restoredCtx.index; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r60.mouseenterRow(i_r33); })("mouseleave", function SideMenuComponent_ul_4_li_1_Template_li_mouseleave_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r61); const i_r33 = restoredCtx.index; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r62.mouseleaveRow(i_r33); })("click", function SideMenuComponent_ul_4_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r61); const i_r33 = restoredCtx.index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r63.clickRow(i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SideMenuComponent_ul_4_li_1_a_1_Template, 2, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SideMenuComponent_ul_4_li_1_div_2_Template, 8, 8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SideMenuComponent_ul_4_li_1_span_3_Template, 1, 5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SideMenuComponent_ul_4_li_1_a_4_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SideMenuComponent_ul_4_li_1_a_5_Template, 2, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SideMenuComponent_ul_4_li_1_div_6_Template, 7, 9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SideMenuComponent_ul_4_li_1_span_7_Template, 1, 5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, category_r32.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r32.routeLink === "/appSearch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r32.routeLink === "/appSearch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r32.routeLink === "/appSearch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r32.routeLink !== "/appSearch" && category_r32.apps.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r32.routeLink !== "/appSearch" && category_r32.apps.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r32.routeLink !== "/appSearch" && category_r32.apps.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", category_r32.routeLink !== "/appSearch" && category_r32.apps.length > 0);
} }
function SideMenuComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SideMenuComponent_ul_4_li_1_Template, 8, 10, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.role.categories);
} }
function SideMenuComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Useful Links ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Legal Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SideMenuComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function SideMenuComponent_ul_8_Template_li_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r64.mouseenterRow(0); })("mouseleave", function SideMenuComponent_ul_8_Template_li_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r66.mouseleaveRow(0); })("click", function SideMenuComponent_ul_8_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r67.clickRow(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function SideMenuComponent_ul_8_Template_li_mouseenter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r68.mouseenterRow(0); })("mouseleave", function SideMenuComponent_ul_8_Template_li_mouseleave_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r69.mouseleaveRow(0); })("click", function SideMenuComponent_ul_8_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r70.clickRow(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class SideMenuComponent {
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
        this.searchTerms = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.menuDisplay = true;
        this.TOLERANCE = 75; // bigger = more forgive when entering submenu
        this.DELAY = 600; // ms delay when user appears to be entering submenu
        this.isCollapsed = false;
        this.role = new _role__WEBPACK_IMPORTED_MODULE_0__.Role;
    }
    ngOnInit() {
        this.rem = parseInt(window.getComputedStyle(document.head).getPropertyValue('font-size'), 10);
        this.identityService.getRoleDetail().subscribe(roles => this._processRoleData(roles));
        this.shareService.updateIsCollapsed(this.isCollapsed);
        this.apps$ = this.searchTerms.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)((term) => {
            const results = fuzzysort__WEBPACK_IMPORTED_MODULE_1__.go(term, this.shareService.apps, { key: 'name' });
            const returnedApps = [];
            results.forEach(result => returnedApps.push(result.obj));
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(returnedApps);
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
        console.log($event);
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
}
SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) { return new (t || SideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_share_service__WEBPACK_IMPORTED_MODULE_3__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router)); };
SideMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SideMenuComponent, selectors: [["app-side-menu"]], viewQuery: function SideMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
    } }, hostBindings: function SideMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousemove", function SideMenuComponent_mousemove_HostBindingHandler($event) { return ctx.mousemoveDocument($event, ctx.mouseLocs); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    } }, decls: 9, vars: 6, consts: [[1, "dk-side-menu", 3, "mouseleave"], ["sideMenu", ""], [1, "dk-menu-list"], ["class", "dk-menu-content", 4, "ngIf"], [1, "dk-separator"], [1, "dk-menu-bottom"], [1, "dk-menu-content"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "dk-search-box", "placeholder", "Search", 3, "keyup", "keypress", 4, "ngIf"], ["class", "dk-sub-menu", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [3, "click", 4, "ngIf"], ["class", "dk-sub-menu", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["placeholder", "Search", 1, "dk-search-box", 3, "keyup", "keypress"], ["searchBox", ""], [1, "dk-sub-menu"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [3, "click"], ["class", "fas arrow", 3, "ngClass", 4, "ngIf"], [1, "fas", "arrow", 3, "ngClass"], [1, "dk-sub-menu", 3, "ngClass"], ["class", "menuDisplay", 3, "ngClass", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], [1, "menuDisplay", 3, "ngClass", "mouseenter", "mouseleave", "click"], [4, "ngIf"], ["class", "dk-side-menu dk-side-menu-hover dk-menu-search-hover", 3, "ngClass", "top", 4, "ngIf"], ["class", "dk-popover-arrow", 3, "ngClass", "top", 4, "ngIf"], ["class", "dk-side-menu dk-side-menu-hover", 3, "top", "height", "ngClass", 4, "ngIf"], [1, "dk-side-menu", "dk-side-menu-hover", "dk-menu-search-hover", 3, "ngClass"], [1, "dk-menu-content-hover"], [1, "dk-sub-menu", "dk-sub-menu-collapsed"], [3, "routerLink", "click"], [1, "dk-popover-arrow", 3, "ngClass"], [1, "dk-side-menu", "dk-side-menu-hover", 3, "ngClass"], ["href", "#"], ["aria-hidden", "true", 1, "fas", "fa-question-circle"], ["aria-hidden", "true", 1, "fas", "fa-balance-scale"], [3, "mouseenter", "mouseleave", "click"]], template: function SideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseleave", function SideMenuComponent_Template_div_mouseleave_0_listener() { return ctx.mouseleaveMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SideMenuComponent_ul_3_Template, 2, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SideMenuComponent_ul_4_Template, 2, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SideMenuComponent_ul_7_Template, 9, 0, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SideMenuComponent_ul_8_Template, 7, 0, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("dk-side-menu-collapsed", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe], styles: [".dk-side-menu[_ngcontent-%COMP%] {\n  font-family: Arial,Helvetica,sans-serif;\n  font-size: 1.5rem;\n  font-weight: 200;\n  position: static;\n  width: 24rem;\n  height: 100%;\n  background: #3f5161;\n  color: #fafafa;;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n  z-index: 1031;\n}\n.dk-menu-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  overflow: auto;\n}\n.dk-search-box[_ngcontent-%COMP%] {\n  line-height: 2.5rem;\n  background-color: #2f3c48;\n  border-width: 1px;\n  border-color: gray;\n}\n.dk-side-menu-collapsed[_ngcontent-%COMP%] {\n  width: 5rem;\n  background: #394958;\n}\n.dk-side-menu-hover[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  visibility: hidden;\n  opacity:0;\n  width: 22rem;\n  left: 6rem;\n  border-radius: 0.3rem;\n  z-index: 1031;\n  overflow: auto;\n  background: #394958;\n  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);\n  bottom: 1rem;\n}\n.dk-side-menu-hover-show[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.3s linear, opacity 0.3s linear;\n}\n.dk-side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .dk-side-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  line-height: 4rem;\n  cursor: pointer;\n}\n.dk-side-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: #fafafa;\n}\n.dk-menu-search[_ngcontent-%COMP%] {\n  list-style-position: inside;\n  border-bottom: 1px;\n  border-bottom-color: dimgray;\n  border-bottom-style: solid;\n}\n.dk-menu-search-hover[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 45rem;\n}\n.dk-menu-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dk-menu-content-hover[_ngcontent-%COMP%] {\n  z-index: 1031;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  padding-bottom: 1rem;\n}\n.dk-menu-content-hover[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  border-bottom: thin dotted #fafafa;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover {\n  background-color: #4f5b69;\n  transition: all 0.3s ease;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\n  border-left: 4px solid #d19b3d;\n  transition: all 0.3s ease;\n}\n.arrow[_ngcontent-%COMP%] {\n  float: right;\n  margin: 1rem !important;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  display: none;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li.menuDisplay[_ngcontent-%COMP%] {\n  display: list-item;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%]{\n  background-color: #465969;\n  border-bottom: 1px solid #4d6377;\n  z-index: 60;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\n  border-left: 4px solid #d19b3d;\n  z-index: 60;\n}\n.dk-sub-menu[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n.dk-sub-menu.expended[_ngcontent-%COMP%] {\n  opacity: 1;\n  max-height: 50rem;\n  transition: opacity 0.5s, max-height 0.5s;\n}\n.dk-sub-menu.collapsed[_ngcontent-%COMP%] {\n  opacity: 0;\n  max-height: 0;\n  transition: opacity 275ms, max-height 0.28s;\n}\n.dk-sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #394958;\n  border: none;\n  line-height: 2.8rem;\n  padding-left: 4rem;\n}\n.dk-sub-menu-collapsed[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 3rem;\n  padding-left: 2rem;\n}\n.dk-sub-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{\n  color: #d19b3d;\n}\n.dk-sub-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d19b3d;\n}\n.dk-sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #4f7393;\n}\n.dk-popover-arrow[_ngcontent-%COMP%] {\n  content: \" \";\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  left: 5.5rem;\n  background-color: #394958;\n  transform: rotate(-45deg);\n  pointer-events: none;\n  position: absolute;\n  z-index: 1030;\n  visibility: hidden;\n  opacity: 0;\n  \n}\n.dk-popover-arrow-show[_ngcontent-%COMP%] {\n  \n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.3s 10ms linear, opacity 0.3s 0.2s linear;\n}\n.dk-separator[_ngcontent-%COMP%] {\n  margin: 0.25rem 1rem;\n  height: 1px;\n  min-height: 1px;\n  background-color: #0092d1;\n}\n.dk-menu-bottom[_ngcontent-%COMP%] {\n  display: block;\n  vertical-align: bottom;\n  position: static;\n}\n.dk-menu-bottom[_ngcontent-%COMP%] > .dk-menu-content[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  display: list-item;\n}\n.fas[_ngcontent-%COMP%]{\n  margin:0 1.3rem;\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0QjtFQUNFLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHVEQUF1RDtBQUN6RDtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlFQUFpRTtBQUNuRTtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNpZGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypTaWRlIE5hdmlnYXRpb24gQmFyKi9cbi5kay1zaWRlLW1lbnUge1xuICBmb250LWZhbWlseTogQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB3aWR0aDogMjRyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzNmNTE2MTtcbiAgY29sb3I6ICNmYWZhZmE7O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB6LWluZGV4OiAxMDMxO1xufVxuLmRrLW1lbnUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZGstc2VhcmNoLWJveCB7XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjNjNDg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGdyYXk7XG59XG4uZGstc2lkZS1tZW51LWNvbGxhcHNlZCB7XG4gIHdpZHRoOiA1cmVtO1xuICBiYWNrZ3JvdW5kOiAjMzk0OTU4O1xufVxuLmRrLXNpZGUtbWVudS1ob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTowO1xuICB3aWR0aDogMjJyZW07XG4gIGxlZnQ6IDZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgei1pbmRleDogMTAzMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMzOTQ5NTg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gIGJvdHRvbTogMXJlbTtcbn1cbi5kay1zaWRlLW1lbnUtaG92ZXItc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4zcyBsaW5lYXIsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4uZGstc2lkZS1tZW51IHVsLFxuLmRrLXNpZGUtbWVudSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kay1zaWRlLW1lbnUgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmFmYWZhO1xufVxuLmRrLW1lbnUtc2VhcmNoIHtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICBib3JkZXItYm90dG9tOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGRpbWdyYXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xufVxuLmRrLW1lbnUtc2VhcmNoLWhvdmVyIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWF4LWhlaWdodDogNDVyZW07XG59XG4uZGstbWVudS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGstbWVudS1jb250ZW50LWhvdmVyIHtcbiAgei1pbmRleDogMTAzMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbi5kay1tZW51LWNvbnRlbnQtaG92ZXI+bGkge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IHRoaW4gZG90dGVkICNmYWZhZmE7XG59XG4uZGstbWVudS1jb250ZW50PmxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNWI2OTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5kay1tZW51LWNvbnRlbnQ+bGk+YTpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2QxOWIzZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hcnJvdyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4uZGstbWVudS1jb250ZW50PmxpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5kay1tZW51LWNvbnRlbnQ+bGkubWVudURpc3BsYXkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG4uZGstbWVudS1jb250ZW50PmxpLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NTk2OTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZDYzNzc7XG4gIHotaW5kZXg6IDYwO1xufVxuLmRrLW1lbnUtY29udGVudD5saS5hY3RpdmU+YXtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZDE5YjNkO1xuICB6LWluZGV4OiA2MDtcbn1cbi5kay1zdWItbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRrLXN1Yi1tZW51LmV4cGVuZGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgbWF4LWhlaWdodDogNTByZW07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cywgbWF4LWhlaWdodCAwLjVzO1xufVxuLmRrLXN1Yi1tZW51LmNvbGxhcHNlZCB7XG4gIG9wYWNpdHk6IDA7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjc1bXMsIG1heC1oZWlnaHQgMC4yOHM7XG59XG4uZGstc3ViLW1lbnUgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0OTU4O1xuICBib3JkZXI6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cbi5kay1zdWItbWVudS1jb2xsYXBzZWQgbGkge1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuLmRrLXN1Yi1tZW51IGxpLmFjdGl2ZXtcbiAgY29sb3I6ICNkMTliM2Q7XG59XG4uZGstc3ViLW1lbnUgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogI2QxOWIzZDtcbn1cbi5kay1zdWItbWVudSBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjczOTM7XG59XG4uZGstcG9wb3Zlci1hcnJvdyB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbGVmdDogNS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0OTU4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDMwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIC8qdHJhbnNpdGlvbjogbm9uZTsqL1xufVxuLmRrLXBvcG92ZXItYXJyb3ctc2hvdyB7XG4gIC8qd2lkdGg6IDFyZW07Ki9cbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjNzIDEwbXMgbGluZWFyLCBvcGFjaXR5IDAuM3MgMC4ycyBsaW5lYXI7XG59XG4uZGstc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwLjI1cmVtIDFyZW07XG4gIGhlaWdodDogMXB4O1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDkyZDE7XG59XG4uZGstbWVudS1ib3R0b20ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cbi5kay1tZW51LWJvdHRvbT4uZGstbWVudS1jb250ZW50PmxpIHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuLmZhc3tcbiAgbWFyZ2luOjAgMS4zcmVtO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuIl19 */"] });


/***/ }),

/***/ 26921:
/*!******************************************************!*\
  !*** ./src/app/user/user-detail/async-validators.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "existingUserNameValidator": function() { return /* binding */ existingUserNameValidator; },
/* harmony export */   "existingUserIDValidator": function() { return /* binding */ existingUserIDValidator; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 46797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);


function existingUserNameValidator(identityService, messageService, userID) {
    return (control) => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(500).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => identityService.getUserByUserName(control.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(500).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => identityService.getUserByUserID(control.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
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

/***/ 44594:
/*!*************************************************************************!*\
  !*** ./src/app/user/user-detail/user-address/user-address.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAddressComponent": function() { return /* binding */ UserAddressComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ 69120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);





function UserAddressComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAddressComponent_div_2_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteAddress(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dk-app-attribute-form2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dk-app-attribute-form2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dk-app-attribute-form2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dk-app-attribute-form2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dk-app-attribute-form2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userAddressForm_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userAddressForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("TYPE"))("formGroup", userAddressForm_r1)("readonly", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("ADDRESS_VALUE"))("formGroup", userAddressForm_r1)("readonly", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("POSTCODE"))("formGroup", userAddressForm_r1)("readonly", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("CITY"))("formGroup", userAddressForm_r1)("readonly", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("COUNTRY"))("formGroup", userAddressForm_r1)("readonly", ctx_r0.readonly);
} }
class UserAddressComponent {
    constructor(fb, attributeControlService) {
        this.fb = fb;
        this.attributeControlService = attributeControlService;
    }
    ngOnInit() {
        this.userAddressFormArray = this.userForm.get('addresses');
        this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'r_address').ATTRIBUTES);
    }
    getAttrCtrlFromID(fieldName) {
        return this.attrCtrls.find(attrCtrl => attrCtrl.name === fieldName);
    }
    addAddress() {
        const addressFormGroup = this.fb.group({
            ADDRESS_ID: [''],
            TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            ADDRESS_VALUE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
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
}
UserAddressComponent.ɵfac = function UserAddressComponent_Factory(t) { return new (t || UserAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__.AttributeControlService)); };
UserAddressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAddressComponent, selectors: [["app-user-address"]], inputs: { readonly: "readonly", userForm: "userForm", relationMetas: "relationMetas" }, decls: 5, vars: 2, consts: [[1, "card", "mt-4"], [1, "card-body"], ["class", "card mb-4", 4, "ngFor", "ngForOf"], ["type", "button", "id", "add", 1, "btn", "btn-primary", "float-right", 3, "disabled", "click"], [1, "card", "mb-4"], ["type", "button", "id", "remove", "aria-label", "Close", 1, "dk-close-button", "close", "d-flex", "justify-content-end", "mr-2", 3, "click"], ["aria-hidden", "true"], [1, "card-body", "row", 3, "formGroup"], [1, "col-3", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"], [1, "col-6", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"], [1, "col-1", "row", "form-group", "mr-2"], ["for", "primaryAddress", 1, "col-form-label", "dk-form-label"], ["type", "radio", "id", "primaryAddress", "name", "PRIMARY", "formControlName", "PRIMARY", 1, "form-control", 3, "value"], [1, "col-md-3", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"]], template: function UserAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAddressComponent_div_2_Template, 14, 17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAddressComponent_Template_button_click_3_listener() { return ctx.addAddress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userAddressFormArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, jor_angular__WEBPACK_IMPORTED_MODULE_2__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFkZHJlc3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 59509:
/*!*********************************************************************!*\
  !*** ./src/app/user/user-detail/user-basic/user-basic.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBasicComponent": function() { return /* binding */ UserBasicComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ 69120);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);



class UserBasicComponent {
    constructor(attributeControlService) {
        this.attributeControlService = attributeControlService;
    }
    ngOnInit() {
        this.userBasicNamesForm = this.userForm.get('userBasic.names');
        this.userBasicEmployeeForm = this.userForm.get('userBasic.employee');
        this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'r_employee').ATTRIBUTES);
        this.attrCtrls = this.attrCtrls.concat(this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'r_user').ATTRIBUTES));
    }
    getAttrCtrlFromID(fieldName) {
        return this.attrCtrls.find(attrCtrl => attrCtrl.name === fieldName);
    }
}
UserBasicComponent.ɵfac = function UserBasicComponent_Factory(t) { return new (t || UserBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeControlService)); };
UserBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserBasicComponent, selectors: [["app-user-basic"]], inputs: { readonly: "readonly", userForm: "userForm", relationMetas: "relationMetas" }, decls: 20, vars: 27, consts: [[1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], [1, "mt-2", "row"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"], [1, "col-md-4"]], template: function UserBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dk-app-attribute-form2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dk-app-attribute-form2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dk-app-attribute-form2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "dk-app-attribute-form2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dk-app-attribute-form2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "dk-app-attribute-form2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "dk-app-attribute-form2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "dk-app-attribute-form2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "dk-app-attribute-form2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("USER_NAME"))("formGroup", ctx.userBasicNamesForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DISPLAY_NAME"))("formGroup", ctx.userBasicNamesForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("GIVEN_NAME"))("formGroup", ctx.userBasicNamesForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("MIDDLE_NAME"))("formGroup", ctx.userBasicNamesForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("FAMILY_NAME"))("formGroup", ctx.userBasicNamesForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("COMPANY_ID"))("formGroup", ctx.userBasicEmployeeForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DEPARTMENT_ID"))("formGroup", ctx.userBasicEmployeeForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("TITLE"))("formGroup", ctx.userBasicEmployeeForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("GENDER"))("formGroup", ctx.userBasicEmployeeForm)("readonly", ctx.readonly);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective], styles: [".dk-form-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYmFzaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ1c2VyLWJhc2ljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 68081:
/*!***********************************************************!*\
  !*** ./src/app/user/user-detail/user-detail.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailComponent": function() { return /* binding */ UserDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jor-angular */ 69120);
/* harmony import */ var _async_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-validators */ 26921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialog.service */ 51969);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../identity.service */ 8934);
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ui-message-angular */ 23540);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-basic/user-basic.component */ 59509);
/* harmony import */ var _user_email_user_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-email/user-email.component */ 87992);
/* harmony import */ var _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-address/user-address.component */ 44594);
/* harmony import */ var _user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-personalization/user-personalization.component */ 97634);
/* harmony import */ var _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-role/user-role.component */ 67795);


















function UserDetailComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserDetailComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Locked");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Unlocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Initial");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Renew");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_app_user_basic_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-user-basic", 34);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userForm", ctx_r8.userForm)("relationMetas", ctx_r8.relationMetas)("readonly", ctx_r8.readonly);
} }
function UserDetailComponent_div_13_app_user_email_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-user-email", 34);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userForm", ctx_r9.userForm)("relationMetas", ctx_r9.relationMetas)("readonly", ctx_r9.readonly);
} }
function UserDetailComponent_div_13_app_user_address_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-user-address", 34);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userForm", ctx_r10.userForm)("relationMetas", ctx_r10.relationMetas)("readonly", ctx_r10.readonly);
} }
function UserDetailComponent_div_13_app_user_personalization_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-user-personalization", 34);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userForm", ctx_r11.userForm)("relationMetas", ctx_r11.relationMetas)("readonly", ctx_r11.readonly);
} }
function UserDetailComponent_div_13_app_user_role_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-user-role", 35);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userForm", ctx_r12.userForm)("readonly", ctx_r12.readonly);
} }
function UserDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Lock Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, UserDetailComponent_div_13_span_7_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UserDetailComponent_div_13_span_8_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Password Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UserDetailComponent_div_13_div_13_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, UserDetailComponent_div_13_div_14_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, UserDetailComponent_div_13_div_15_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13.switchTabStrip(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.switchTabStrip(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r16.switchTabStrip(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r17.switchTabStrip(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Personalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r18.switchTabStrip(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, UserDetailComponent_div_13_app_user_basic_33_Template, 1, 3, "app-user-basic", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, UserDetailComponent_div_13_app_user_email_34_Template, 1, 3, "app-user-email", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, UserDetailComponent_div_13_app_user_address_35_Template, 1, 3, "app-user-address", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, UserDetailComponent_div_13_app_user_personalization_36_Template, 1, 3, "app-user-personalization", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, UserDetailComponent_div_13_app_user_role_37_Template, 1, 2, "app-user-role", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("USER_ID"))("formGroup", ctx_r2.userForm)("readonly", !ctx_r2.isNewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("LOCK").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.userForm.get("LOCK").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx_r2.userForm.get("PWD_STATUS").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 5);
} }
class UserDetailComponent {
    constructor(fb, route, router, dialogService, identityService, attributeControlService, entityService, uiMapperService, messageService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
        this.identityService = identityService;
        this.attributeControlService = attributeControlService;
        this.entityService = entityService;
        this.uiMapperService = uiMapperService;
        this.messageService = messageService;
        this.readonly = true;
        this.isNewMode = false;
        this.originalUserValue = {};
        this.changedUser = {};
        this.tabStrip = 1;
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
        this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((params) => {
            this.action = params.get('action');
            if (this.action === 'new') {
                this.isNewMode = true;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([this.entityService.getRelationMetaOfEntity('person'), this._createNewUser()]);
            }
            else {
                this.isNewMode = false;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([this.entityService.getRelationMetaOfEntity('person'),
                    this.identityService.getUserDetail(params.get('userID'))]);
            }
        })).subscribe(data => {
            this.relationMetas = data[0];
            this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'r_user').ATTRIBUTES);
            if ('ENTITY_ID' in data[1]) {
                this.instanceGUID = data[1]['INSTANCE_GUID'];
                this._generateUserForm(data[1]);
                if (this.isNewMode || this.action === 'change') {
                    this._switch2EditMode();
                }
                else {
                    this._switch2DisplayMode();
                }
            }
            else {
                const errorMessages = data[1];
                errorMessages.forEach(msg => this.messageService.add(msg));
            }
        });
    }
    getAttrCtrlFromID(fieldName) {
        return this.attrCtrls.find(attrCtrl => attrCtrl.name === fieldName);
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
            userIDCtrl.setAsyncValidators((0,_async_validators__WEBPACK_IMPORTED_MODULE_0__.existingUserIDValidator)(this.identityService, this.messageService));
        }
        const userNameCtrl = this.userForm.get('userBasic.names.USER_NAME');
        userNameCtrl.setAsyncValidators((0,_async_validators__WEBPACK_IMPORTED_MODULE_0__.existingUserNameValidator)(this.identityService, this.messageService, this.userForm.get('USER_ID').value));
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
        const userDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_11__.Entity();
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(userDetail);
    }
    _generateUserForm(data) {
        this.userForm = this.fb.group({
            USER_ID: [data['r_user'][0]['USER_ID'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            LOCK: [data['r_user'][0]['LOCK']],
            PWD_STATUS: [data['r_user'][0]['PWD_STATUS']],
            userBasic: this.fb.group({
                names: this.fb.group({
                    USER_NAME: [data['r_user'][0]['USER_NAME'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
                    DISPLAY_NAME: [data['r_user'][0]['DISPLAY_NAME'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
                    GIVEN_NAME: [data['r_user'][0]['GIVEN_NAME']],
                    MIDDLE_NAME: [data['r_user'][0]['MIDDLE_NAME']],
                    FAMILY_NAME: [data['r_user'][0]['FAMILY_NAME']]
                }),
                employee: this.fb.group({
                    TITLE: [data['r_employee'][0]['TITLE']],
                    DEPARTMENT_ID: [data['r_employee'][0]['DEPARTMENT_ID']],
                    COMPANY_ID: [data['r_employee'][0]['COMPANY_ID'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
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
                EMAIL: [email['EMAIL'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
                TYPE: [email['TYPE'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
                PRIMARY: [email['PRIMARY']]
            }));
        });
        const addressArray = this.userForm.get('addresses');
        if (data['r_address']) {
            data['r_address'].forEach(address => {
                addressArray.push(this.fb.group({
                    ADDRESS_ID: [address['ADDRESS_ID']],
                    TYPE: [address['TYPE'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
                    ADDRESS_VALUE: [address['ADDRESS_VALUE'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
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
        const userEmployeeForm = this.userForm.get('userBasic').get('employee');
        const userPersonalizationForm = this.userForm.get('userPersonalization');
        if (this.readonly) {
            userEmailFormArray.controls.forEach(userEmailForm => {
                userEmailForm.get('PRIMARY').disable();
                userEmailForm.get('TYPE').disable();
            });
            userAddressFormArray.controls.forEach(userAddressForm => {
                userAddressForm.get('PRIMARY').disable();
                userAddressForm.get('TYPE').disable();
            });
            userEmployeeForm.get('GENDER').disable();
            userPersonalizationForm.get('LANGUAGE').disable();
            userPersonalizationForm.get('TIMEZONE').disable();
            userPersonalizationForm.get('DECIMAL_FORMAT').disable();
            userPersonalizationForm.get('DATE_FORMAT').disable();
        }
        else {
            userEmailFormArray.controls.forEach(userEmailForm => {
                userEmailForm.get('PRIMARY').enable();
                userEmailForm.get('TYPE').enable();
            });
            userAddressFormArray.controls.forEach(userAddressForm => {
                userAddressForm.get('PRIMARY').enable();
                userAddressForm.get('TYPE').enable();
            });
            userEmployeeForm.get('GENDER').enable();
            userPersonalizationForm.get('LANGUAGE').enable();
            userPersonalizationForm.get('TIMEZONE').enable();
            userPersonalizationForm.get('DECIMAL_FORMAT').enable();
            userPersonalizationForm.get('DATE_FORMAT').enable();
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
            this.changedUser['person'] = { action: 'add', TYPE: 'employee', SYSTEM_ACCESS: 'PORTAL' };
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
}
UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) { return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_11__.AttributeControlService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_11__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_11__.UiMapperService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_15__.MessageService)); };
UserDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: UserDetailComponent, selectors: [["app-user-detail"]], decls: 14, vars: 5, consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-lg", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-lg", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"], [1, "col-md-6", "col-lg-4", "row", "form-group", "mr-2", 3, "formGroup"], ["for", "lockStatus", 1, "col-form-label", "dk-form-label"], ["id", "lockStatus", 1, "form-control", "dk-icon"], ["class", "fas fa-lock", 4, "ngIf"], ["class", "fas fa-lock-open", 4, "ngIf"], ["for", "passwordStatus", 1, "col-form-label", "dk-form-label"], ["id", "passwordStatus", 1, "form-control", "dk-icon", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "userForm", "relationMetas", "readonly", 4, "ngSwitchCase"], [3, "userForm", "readonly", 4, "ngSwitchCase"], [1, "fas", "fa-lock"], [1, "fas", "fa-lock-open"], [1, "badge", "badge-primary"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"], [3, "userForm", "relationMetas", "readonly"], [3, "userForm", "readonly"]], template: function UserDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_5_listener() { return ctx.switchEditDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UserDetailComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, UserDetailComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_8_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UserDetailComponent_div_13_Template, 38, 26, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.isNewMode ? "New User" : ctx.readonly ? "Display User" : "Change User");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ui_message_angular__WEBPACK_IMPORTED_MODULE_15__.MessageComponent, jor_angular__WEBPACK_IMPORTED_MODULE_11__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitchCase, _user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_3__.UserBasicComponent, _user_email_user_email_component__WEBPACK_IMPORTED_MODULE_4__.UserEmailComponent, _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_5__.UserAddressComponent, _user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_6__.UserPersonalizationComponent, _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_7__.UserRoleComponent], styles: [".dk-btn-size[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.dk-form-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.dk-fixed-top[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 500;\n}\n.dk-icon[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ1c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWJ0bi1zaXplIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uZGstZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmRrLWZpeGVkLXRvcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNTAwO1xufVxuLmRrLWljb24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 87992:
/*!*********************************************************************!*\
  !*** ./src/app/user/user-detail/user-email/user-email.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEmailComponent": function() { return /* binding */ UserEmailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ 23540);
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ 69120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);






function UserEmailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEmailComponent_div_2_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteEmail(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dk-app-attribute-form2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dk-app-attribute-form2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userEmailForm_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userEmailForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("TYPE"))("formGroup", userEmailForm_r1)("readonly", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("EMAIL"))("formGroup", userEmailForm_r1)("readonly", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
} }
class UserEmailComponent {
    constructor(fb, messageService, attributeControlService) {
        this.fb = fb;
        this.messageService = messageService;
        this.attributeControlService = attributeControlService;
    }
    ngOnInit() {
        this.userEmailFormArray = this.userForm.get('emails');
        this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'r_email').ATTRIBUTES);
        if (!this.readonly && this.userEmailFormArray.length === 0) {
            this.addEmail();
        }
    }
    getAttrCtrlFromID(fieldName) {
        return this.attrCtrls.find(attrCtrl => attrCtrl.name === fieldName);
    }
    addEmail() {
        const emailFormGroup = this.fb.group({
            EMAIL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
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
}
UserEmailComponent.ɵfac = function UserEmailComponent_Factory(t) { return new (t || UserEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_3__.AttributeControlService)); };
UserEmailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserEmailComponent, selectors: [["app-user-email"]], inputs: { readonly: "readonly", userForm: "userForm", relationMetas: "relationMetas" }, decls: 5, vars: 2, consts: [[1, "card", "mt-4"], [1, "card-body"], ["class", "card mb-4", 4, "ngFor", "ngForOf"], ["type", "button", "id", "add", 1, "btn", "btn-primary", "float-right", 3, "disabled", "click"], [1, "card", "mb-4"], ["type", "button", "id", "remove", "aria-label", "Close", 1, "dk-close-button", "close", "d-flex", "justify-content-end", "mr-2", 3, "click"], ["aria-hidden", "true"], [1, "card-body", "row", 3, "formGroup"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"], [1, "col-1", "row", "form-group", "mr-2"], ["for", "primaryEmail", 1, "col-form-label", "dk-form-label"], ["type", "radio", "id", "primaryEmail", "name", "PRIMARY", "formControlName", "PRIMARY", 1, "form-control", 3, "value"]], template: function UserEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserEmailComponent_div_2_Template, 11, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEmailComponent_Template_button_click_3_listener() { return ctx.addEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userEmailFormArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, jor_angular__WEBPACK_IMPORTED_MODULE_3__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 97634:
/*!*****************************************************************************************!*\
  !*** ./src/app/user/user-detail/user-personalization/user-personalization.component.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPersonalizationComponent": function() { return /* binding */ UserPersonalizationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ 69120);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);



class UserPersonalizationComponent {
    constructor(attributeControlService) {
        this.attributeControlService = attributeControlService;
    }
    ngOnInit() {
        this.userPersonalizationForm = this.userForm.get('userPersonalization');
        this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'r_personalization').ATTRIBUTES);
    }
    getAttrCtrlFromID(fieldName) {
        return this.attrCtrls.find(attrCtrl => attrCtrl.name === fieldName);
    }
}
UserPersonalizationComponent.ɵfac = function UserPersonalizationComponent_Factory(t) { return new (t || UserPersonalizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeControlService)); };
UserPersonalizationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPersonalizationComponent, selectors: [["app-user-personalization"]], inputs: { readonly: "readonly", userForm: "userForm", relationMetas: "relationMetas" }, decls: 5, vars: 12, consts: [[1, "mt-4", "ml-2", "row"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"]], template: function UserPersonalizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("LANGUAGE"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("TIMEZONE"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DECIMAL_FORMAT"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DATE_FORMAT"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective], styles: [".dk-form-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGVyc29uYWxpemF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoidXNlci1wZXJzb25hbGl6YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay1mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ 67795:
/*!*******************************************************************!*\
  !*** ./src/app/user/user-detail/user-role/user-role.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoleComponent": function() { return /* binding */ UserRoleComponent; }
/* harmony export */ });
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ 69120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../identity.service */ 8934);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);






function UserRoleComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserRoleComponent_tr_10_Template_input_change_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onChangeRoleID(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserRoleComponent_tr_10_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const userRoleForm_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onSearchHelp(i_r2, userRoleForm_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserRoleComponent_tr_10_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.deleteRole(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userRoleForm_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", userRoleForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx_r0.readonly || ctx_r0.oldRole(userRoleForm_r1) && userRoleForm_r1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", userRoleForm_r1.get("NAME").errors == null ? null : userRoleForm_r1.get("NAME").errors.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", userRoleForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.readonly);
} }
class UserRoleComponent {
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
}
UserRoleComponent.ɵfac = function UserRoleComponent_Factory(t) { return new (t || UserRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService)); };
UserRoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserRoleComponent, selectors: [["app-user-role"]], viewQuery: function UserRoleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__.SearchHelpComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
    } }, inputs: { readonly: "readonly", userForm: "userForm" }, decls: 12, vars: 2, consts: [[1, "table", "table-bordered", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light", "dk-form-label"], ["scope", "col"], ["formArrayName", "userRole", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group", "dk-name"], ["type", "text", "formControlName", "NAME", 1, "form-control", 3, "readonly", "change"], [1, "invalid-tooltip"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], [1, "dk-description", 3, "formGroup"], ["type", "text", "formControlName", "DESCRIPTION", "readonly", "", 1, "form-control"], [1, "dk-actions"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", 3, "disabled", "click"], [1, "far", "fa-trash-alt"]], template: function UserRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserRoleComponent_tr_10_Template, 14, 5, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dk-app-search-help");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userRoleFormArray.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, jor_angular__WEBPACK_IMPORTED_MODULE_3__.SearchHelpComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 40rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 3rem;\n}\n.dk-form-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcm9sZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoidXNlci1yb2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmRrLW5hbWV7XG4gIHdpZHRoOiAyMHJlbTtcbn1cbi5kay1kZXNjcmlwdGlvbntcbiAgd2lkdGg6IDQwcmVtO1xufVxuLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiAzcmVtO1xufVxuLmRrLWZvcm0tbGFiZWwge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 40846:
/*!*******************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": function() { return /* binding */ UserListComponent; }
/* harmony export */ });
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ 23540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../identity.service */ 8934);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);







function UserListComponent_tr_35_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 41);
} }
function UserListComponent_tr_35_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 42);
} }
function UserListComponent_tr_35_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Initial");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserListComponent_tr_35_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserListComponent_tr_35_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Renew");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { action: "display" }; };
const _c1 = function (a1, a2) { return ["/users", a1, a2]; };
function UserListComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserListComponent_tr_35_span_9_Template, 1, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserListComponent_tr_35_span_10_Template, 1, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserListComponent_tr_35_div_12_Template, 3, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserListComponent_tr_35_div_13_Template, 3, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserListComponent_tr_35_div_14_Template, 3, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const user_r1 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.displayUser(user_r1.USER_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const user_r1 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.changeUser(user_r1.USER_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const user_r1 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.deleteUser(user_r1.USER_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c1, user_r1.USER_ID, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.USER_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.USER_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.DISPLAY_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r1.LOCK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !user_r1.LOCK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", user_r1.PWD_STATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 2);
} }
const _c2 = function (a0) { return { "display": a0 }; };
class UserListComponent {
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
                this.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.messageType.Warning);
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
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
UserListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 53, vars: 9, consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "user_id", 1, "col-sm-3", "col-form-label"], ["id", "user_id", "name", "user_id", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["for", "user_name", 1, "col-sm-3", "col-form-label"], ["id", "user_name", "name", "user_name", "type", "text", 1, "col-sm-6", "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-primary", 3, "click"], [3, "routerLink"], [1, "dk-lock"], ["class", "fas fa-lock", "title", "Locked", 4, "ngIf"], ["class", "fas fa-lock-open", "title", "Unlocked", 4, "ngIf"], [1, "dk-password-state", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", 3, "click"], [1, "far", "fa-trash-alt"], ["title", "Locked", 1, "fas", "fa-lock"], ["title", "Unlocked", 1, "fas", "fa-lock-open"], [1, "badge", "badge-primary"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "User ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.userID = $event; })("keyup", function UserListComponent_Template_input_keyup_5_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "User Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.userName = $event; })("keyup", function UserListComponent_Template_input_keyup_9_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_11_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_16_listener() { return ctx.newUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Display Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Locked?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Password State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, UserListComponent_tr_35_Template, 22, 13, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Confirm Deletion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_42_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_49_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_51_listener() { return ctx.confirmDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Are you sure to delete the user '", ctx.toBeDeletedUser, "'?");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase], styles: [".dk-lock[_ngcontent-%COMP%] {\n  width: 5rem;\n  max-width: 5rem;\n  min-width: 5rem;\n}\n.dk-password-state[_ngcontent-%COMP%] {\n  width: 15rem;\n  max-width: 15rem;\n  min-width: 15rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 9rem;\n  min-width: 9rem;\n  max-width: 9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWxvY2sge1xuICB3aWR0aDogNXJlbTtcbiAgbWF4LXdpZHRoOiA1cmVtO1xuICBtaW4td2lkdGg6IDVyZW07XG59XG4uZGstcGFzc3dvcmQtc3RhdGUge1xuICB3aWR0aDogMTVyZW07XG4gIG1heC13aWR0aDogMTVyZW07XG4gIG1pbi13aWR0aDogMTVyZW07XG59XG4uZGstYWN0aW9uc3tcbiAgd2lkdGg6IDlyZW07XG4gIG1pbi13aWR0aDogOXJlbTtcbiAgbWF4LXdpZHRoOiA5cmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 24023:
/*!******************************************!*\
  !*** ./src/app/work-protection.guard.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkProtectionGuard": function() { return /* binding */ WorkProtectionGuard; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class WorkProtectionGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
WorkProtectionGuard.ɵfac = function WorkProtectionGuard_Factory(t) { return new (t || WorkProtectionGuard)(); };
WorkProtectionGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkProtectionGuard, factory: WorkProtectionGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    originalHost: 'http://localhost:3000'
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map