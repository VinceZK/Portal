function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error-page/error-page.component */
    "./src/app/error-page/error-page.component.ts");
    /* harmony import */


    var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/user-list/user-list.component */
    "./src/app/user/user-list/user-list.component.ts");
    /* harmony import */


    var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/user-detail/user-detail.component */
    "./src/app/user/user-detail/user-detail.component.ts");
    /* harmony import */


    var _work_protection_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./work-protection.guard */
    "./src/app/work-protection.guard.ts");

    var routes = [// The dashboard app is lazy loading
    // { path: 'users', loadChildren: 'app/user/user.module#UserModule'},
    {
      path: 'users',
      component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]
    }, {
      path: 'users/:userID',
      component: _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"],
      canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_6__["WorkProtectionGuard"]]
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | app-dashboard-dashboard-module */
        "app-dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! app/dashboard/dashboard.module */
        "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      }
    }, {
      path: 'handsontable',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | app-handsontable-handsontable-module */
        "app-handsontable-handsontable-module").then(__webpack_require__.bind(null,
        /*! app/handsontable/handsontable.module */
        "./src/app/handsontable/handsontable.module.ts")).then(function (m) {
          return m.HandsontableModule;
        });
      }
    }, {
      path: 'errors',
      component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]
    }, {
      path: 'pageNotFound',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }, {
      path: '**',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./side-menu/side-menu.component */
    "./src/app/side-menu/side-menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./history.service */
    "./src/app/history.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./identity.service */
    "./src/app/identity.service.ts");
    /* harmony import */


    var _share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./share.service */
    "./src/app/share.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! jor-angular */
    "./node_modules/jor-angular/__ivy_ngcc__/fesm2015/jor-angular.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ui_message_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ui-message-angular */
    "./node_modules/ui-message-angular/__ivy_ngcc__/fesm2015/ui-message-angular.js");
    /* harmony import */


    var ui_logon_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ui-logon-angular */
    "./node_modules/ui-logon-angular/__ivy_ngcc__/fesm2015/ui-logon-angular.js");
    /* harmony import */


    var _msgStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./msgStore */
    "./src/app/msgStore.ts");
    /* harmony import */


    var _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./head-bar/head-bar.component */
    "./src/app/head-bar/head-bar.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, activatedRoute, identityService, shareService, historyService, entityService, messageService, logonService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.identityService = identityService;
        this.shareService = shareService;
        this.historyService = historyService;
        this.entityService = entityService;
        this.messageService = messageService;
        this.logonService = logonService;
        this.isCollapsed = false;
        this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].originalHost);
        this.logonService.setHost(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].originalHost);
        this.logonService.session().subscribe(function (data) {
          _this.identityService.setSession(data);

          _this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_12__["msgStore"], _this.identityService.Session.LANGUAGE);
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return _this2.activatedRoute;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (route) {
            return route.outlet === 'primary';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (route) {
            var url = '';

            while (route.firstChild) {
              route = route.firstChild;

              if (route.snapshot.url.length > 0) {
                url = url ? url + '/' + route.snapshot.url.join('/') : route.snapshot.url.join('/');
              }
            }

            return url;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (url) {
            if (_this2.shareService.apps.length === 0) {
              // return this.identityService.getApp('/' + url);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(_this2.shareService.apps.find(function (app) {
                return app.routeLink === '/' + url;
              }));
            }
          })).subscribe(function (app) {
            if (app && app['routeLink']) {
              _this2.sideMenu.activateApp(app);

              _this2.historyService.addHistory(app);
            }
          });
        }
      }, {
        key: "onCollapse",
        value: function onCollapse() {
          this.isCollapsed = this.sideMenu.collapse();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_share_service__WEBPACK_IMPORTED_MODULE_6__["ShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_8__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_10__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_logon_angular__WEBPACK_IMPORTED_MODULE_11__["LogonService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
        }
      },
      decls: 6,
      vars: 0,
      consts: [[1, "dk-frame-view"], [3, "onCollapse"], [1, "dk-frame-content"], [1, "dk-content-area"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-head-bar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCollapse", function AppComponent_Template_app_head_bar_onCollapse_1_listener($event) {
            return ctx.onCollapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_13__["HeadBarComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".dk-frame-view[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 768px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.dk-frame-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  position: static;\n  height: 100%;\n  width: auto;\n}\n.dk-content-area[_ngcontent-%COMP%]{\n  width: -webkit-fill-available;\n  width: -moz-available;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100%;\n  padding-left: 1rem;\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbmF2aWdhdGlvbiBGcmFtZSB3b3JrICovXG4uZGstZnJhbWUtdmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNzY4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5kay1mcmFtZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbn1cbi5kay1jb250ZW50LWFyZWF7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB3aWR0aDogLW1vei1hdmFpbGFibGU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]
        }, {
          type: _share_service__WEBPACK_IMPORTED_MODULE_6__["ShareService"]
        }, {
          type: _history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__["EntityService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_10__["MessageService"]
        }, {
          type: ui_logon_angular__WEBPACK_IMPORTED_MODULE_11__["LogonService"]
        }];
      }, {
        sideMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./side-menu/side-menu.component */
    "./src/app/side-menu/side-menu.component.ts");
    /* harmony import */


    var _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./head-bar/head-bar.component */
    "./src/app/head-bar/head-bar.component.ts");
    /* harmony import */


    var _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mockup/mockup.module */
    "./src/app/mockup/mockup.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./external-app/external-app.module */
    "./src/app/external-app/external-app.module.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./error-page/error-page.component */
    "./src/app/error-page/error-page.component.ts");
    /* harmony import */


    var ui_message_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ui-message-angular */
    "./node_modules/ui-message-angular/__ivy_ngcc__/fesm2015/ui-message-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./custom.reuse.strategy */
    "./src/app/custom.reuse.strategy.ts");
    /* harmony import */


    var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./user/user-list/user-list.component */
    "./src/app/user/user-list/user-list.component.ts");
    /* harmony import */


    var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user/user-detail/user-detail.component */
    "./src/app/user/user-detail/user-detail.component.ts");
    /* harmony import */


    var _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user/user-detail/user-basic/user-basic.component */
    "./src/app/user/user-detail/user-basic/user-basic.component.ts");
    /* harmony import */


    var _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user/user-detail/user-personalization/user-personalization.component */
    "./src/app/user/user-detail/user-personalization/user-personalization.component.ts");
    /* harmony import */


    var _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./user/user-detail/user-role/user-role.component */
    "./src/app/user/user-detail/user-role/user-role.component.ts");
    /* harmony import */


    var _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./user/user-detail/user-email/user-email.component */
    "./src/app/user/user-detail/user-email/user-email.component.ts");
    /* harmony import */


    var _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./user/user-detail/user-address/user-address.component */
    "./src/app/user/user-detail/user-address/user-address.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! jor-angular */
    "./node_modules/jor-angular/__ivy_ngcc__/fesm2015/jor-angular.js");
    /* harmony import */


    var ui_logon_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ui-logon-angular */
    "./node_modules/ui-logon-angular/__ivy_ngcc__/fesm2015/ui-logon-angular.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouteReuseStrategy"],
        useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_13__["CustomReuseStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], ui_message_angular__WEBPACK_IMPORTED_MODULE_11__["MessageModule"], _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_6__["MockupModule"], _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_8__["ExternalAppModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], jor_angular__WEBPACK_IMPORTED_MODULE_22__["JorAngularModule"], ui_logon_angular__WEBPACK_IMPORTED_MODULE_23__["LogonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"], _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_5__["HeadBarComponent"], _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"], _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailComponent"], _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_16__["UserBasicComponent"], _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_17__["UserPersonalizationComponent"], _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_18__["UserRoleComponent"], _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_19__["UserEmailComponent"], _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_20__["UserAddressComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], ui_message_angular__WEBPACK_IMPORTED_MODULE_11__["MessageModule"], _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_6__["MockupModule"], _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_8__["ExternalAppModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], jor_angular__WEBPACK_IMPORTED_MODULE_22__["JorAngularModule"], ui_logon_angular__WEBPACK_IMPORTED_MODULE_23__["LogonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"], _head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_5__["HeadBarComponent"], _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"], _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailComponent"], _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_16__["UserBasicComponent"], _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_17__["UserPersonalizationComponent"], _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_18__["UserRoleComponent"], _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_19__["UserEmailComponent"], _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_20__["UserAddressComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], ui_message_angular__WEBPACK_IMPORTED_MODULE_11__["MessageModule"], _mockup_mockup_module__WEBPACK_IMPORTED_MODULE_6__["MockupModule"], _external_app_external_app_module__WEBPACK_IMPORTED_MODULE_8__["ExternalAppModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], jor_angular__WEBPACK_IMPORTED_MODULE_22__["JorAngularModule"], ui_logon_angular__WEBPACK_IMPORTED_MODULE_23__["LogonModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          providers: [{
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouteReuseStrategy"],
            useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_13__["CustomReuseStrategy"]
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/custom.reuse.strategy.ts":
  /*!******************************************!*\
    !*** ./src/app/custom.reuse.strategy.ts ***!
    \******************************************/

  /*! exports provided: CustomReuseStrategy */

  /***/
  function srcAppCustomReuseStrategyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomReuseStrategy", function () {
      return CustomReuseStrategy;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CustomReuseStrategy =
    /*#__PURE__*/
    function () {
      function CustomReuseStrategy() {
        _classCallCheck(this, CustomReuseStrategy);

        this.routesToCache = ['users'];
        this.storedRouteHandles = new Map();
      }
      /**
       * When navigation from a reusable component, and if shouldReuseRoute return false,
       * this method is invoked to decide whether the current route should be stored.
       * @param route
       */


      _createClass(CustomReuseStrategy, [{
        key: "shouldDetach",
        value: function shouldDetach(route) {
          // console.log('detaching', route);
          return this.routesToCache.indexOf(route.routeConfig.path) > -1;
        }
        /**
         * If the current route need to be stored, that is shouldDetach return true,
         * then on this method, you can implement a way to store routes. Usually in a Map.
         * @param route
         * @param handle
         */

      }, {
        key: "store",
        value: function store(route, handle) {
          // console.log('store', route);
          this.storedRouteHandles.set(route.routeConfig.path, handle);
        }
        /**
         * When navigation to a reusable component, and if shouldReuseRoute return false,
         * this method is invoked to decide whether the target component can be get from a reuse buffer.
         * @param route
         */

      }, {
        key: "shouldAttach",
        value: function shouldAttach(route) {
          // console.log('shouldAttach', route);
          return this.storedRouteHandles.has(route.routeConfig.path);
        }
        /**
         * If shouldAttach return true, then this method is invoke to retrieve the component from the buffer.
         * @param route
         */

      }, {
        key: "retrieve",
        value: function retrieve(route) {
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

      }, {
        key: "shouldReuseRoute",
        value: function shouldReuseRoute(future, curr) {
          // console.log('shouldReuseRoute, future:', future, 'current:', curr);
          return future.routeConfig === curr.routeConfig;
        }
      }]);

      return CustomReuseStrategy;
    }();

    CustomReuseStrategy.ɵfac = function CustomReuseStrategy_Factory(t) {
      return new (t || CustomReuseStrategy)();
    };

    CustomReuseStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomReuseStrategy,
      factory: CustomReuseStrategy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomReuseStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dialog.service.ts":
  /*!***********************************!*\
    !*** ./src/app/dialog.service.ts ***!
    \***********************************/

  /*! exports provided: DialogService */

  /***/
  function srcAppDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogService", function () {
      return DialogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DialogService =
    /*#__PURE__*/
    function () {
      function DialogService() {
        _classCallCheck(this, DialogService);
      }

      _createClass(DialogService, [{
        key: "confirm",

        /**
         * Ask user to confirm an action. `message` explains the action and choices.
         * Returns observable resolving to `true`=confirm or `false`=cancel
         */
        value: function confirm(message) {
          var confirmation = window.confirm(message || 'Is it OK?');
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(confirmation);
        }
      }]);

      return DialogService;
    }();

    DialogService.ɵfac = function DialogService_Factory(t) {
      return new (t || DialogService)();
    };

    DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DialogService,
      factory: DialogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/error-page/error-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/error-page/error-page.component.ts ***!
    \****************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function srcAppErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ui_message_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ui-message-angular */
    "./node_modules/ui-message-angular/__ivy_ngcc__/fesm2015/ui-message-angular.js");

    var ErrorPageComponent =
    /*#__PURE__*/
    function () {
      function ErrorPageComponent() {
        _classCallCheck(this, ErrorPageComponent);
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) {
      return new (t || ErrorPageComponent)();
    };

    ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorPageComponent,
      selectors: [["app-error-page"]],
      decls: 1,
      vars: 0,
      template: function ErrorPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dk-message");
        }
      },
      directives: [ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error-page',
          templateUrl: './error-page.component.html',
          styleUrls: ['./error-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/external-app/external-app-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/external-app/external-app-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ExternalAppRoutingModule */

  /***/
  function srcAppExternalAppExternalAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalAppRoutingModule", function () {
      return ExternalAppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _external_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./external-app.component */
    "./src/app/external-app/external-app.component.ts");

    var routes = [{
      path: 'external-app/:appID',
      component: _external_app_component__WEBPACK_IMPORTED_MODULE_2__["ExternalAppComponent"]
    }];

    var ExternalAppRoutingModule = function ExternalAppRoutingModule() {
      _classCallCheck(this, ExternalAppRoutingModule);
    };

    ExternalAppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExternalAppRoutingModule
    });
    ExternalAppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExternalAppRoutingModule_Factory(t) {
        return new (t || ExternalAppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExternalAppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExternalAppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/external-app/external-app.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/external-app/external-app.component.ts ***!
    \********************************************************/

  /*! exports provided: ExternalAppComponent */

  /***/
  function srcAppExternalAppExternalAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalAppComponent", function () {
      return ExternalAppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../share.service */
    "./src/app/share.service.ts");
    /* harmony import */


    var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../identity.service */
    "./src/app/identity.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ExternalAppComponent =
    /*#__PURE__*/
    function () {
      function ExternalAppComponent(route, shareService, identityService, sanitizer, router) {
        _classCallCheck(this, ExternalAppComponent);

        this.route = route;
        this.shareService = shareService;
        this.identityService = identityService;
        this.sanitizer = sanitizer;
        this.router = router; // iFrameWidth: string;

        this.apps = [];
      }

      _createClass(ExternalAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            var appID = params.get('appID');

            if (_this3.shareService.apps.length === 0) {
              return _this3.identityService.getAppRouteLink(appID);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_this3.shareService.apps.find(function (app) {
                return app.appID === appID;
              }).originalRouteLink);
            }
          })).subscribe(function (routeLink) {
            if (routeLink === 'appNotFound') {
              _this3.router.navigate(['pageNotFound']);
            } else {
              var appDangerousUrl = routeLink.substr(0, 4) === 'http' ? routeLink : window.location.origin + routeLink;
              _this3.appUrl = _this3.sanitizer.bypassSecurityTrustResourceUrl(appDangerousUrl);
            }
          });
        }
      }]);

      return ExternalAppComponent;
    }();

    ExternalAppComponent.ɵfac = function ExternalAppComponent_Factory(t) {
      return new (t || ExternalAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ExternalAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExternalAppComponent,
      selectors: [["app-external-app"]],
      decls: 1,
      vars: 1,
      consts: [[1, "nav-content-iframe", 3, "src"]],
      template: function ExternalAppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      styles: [".nav-content-iframe[_ngcontent-%COMP%]{\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0ZXJuYWwtYXBwL2V4dGVybmFsLWFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2V4dGVybmFsLWFwcC9leHRlcm5hbC1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29udGVudC1pZnJhbWV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExternalAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-external-app',
          templateUrl: './external-app.component.html',
          styleUrls: ['./external-app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/external-app/external-app.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/external-app/external-app.module.ts ***!
    \*****************************************************/

  /*! exports provided: ExternalAppModule */

  /***/
  function srcAppExternalAppExternalAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalAppModule", function () {
      return ExternalAppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _external_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./external-app-routing.module */
    "./src/app/external-app/external-app-routing.module.ts");
    /* harmony import */


    var _external_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./external-app.component */
    "./src/app/external-app/external-app.component.ts");

    var ExternalAppModule = function ExternalAppModule() {
      _classCallCheck(this, ExternalAppModule);
    };

    ExternalAppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExternalAppModule
    });
    ExternalAppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExternalAppModule_Factory(t) {
        return new (t || ExternalAppModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _external_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExternalAppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExternalAppModule, {
        declarations: [_external_app_component__WEBPACK_IMPORTED_MODULE_3__["ExternalAppComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _external_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExternalAppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExternalAppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _external_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExternalAppRoutingModule"]],
          declarations: [_external_app_component__WEBPACK_IMPORTED_MODULE_3__["ExternalAppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/head-bar/head-bar.component.ts":
  /*!************************************************!*\
    !*** ./src/app/head-bar/head-bar.component.ts ***!
    \************************************************/

  /*! exports provided: HeadBarComponent */

  /***/
  function srcAppHeadBarHeadBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadBarComponent", function () {
      return HeadBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../history.service */
    "./src/app/history.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ui-logon-angular */
    "./node_modules/ui-logon-angular/__ivy_ngcc__/fesm2015/ui-logon-angular.js");
    /* harmony import */


    var _identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../identity.service */
    "./src/app/identity.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeadBarComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var app_r107 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", app_r107.routeLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", app_r107.name, "");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "open": a0
      };
    };

    var HeadBarComponent =
    /*#__PURE__*/
    function () {
      function HeadBarComponent(document, history, logonService, identityService) {
        _classCallCheck(this, HeadBarComponent);

        this.document = document;
        this.history = history;
        this.logonService = logonService;
        this.identityService = identityService;
        this.onCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdown = {
          historyOpen: false,
          notificationOpen: false,
          preferenceOpen: false
        };
        this.userBasicInfo = new ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__["Session"]();
      }

      _createClass(HeadBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.history.currentHistoryObserver.subscribe(function (history) {
            return _this4.navHistory = history;
          });
          this.history.currentAppObserver.subscribe(function (currentApp) {
            return _this4.currentApp = currentApp;
          });
          this.logonService.session().subscribe(function (session) {
            return _this4.userBasicInfo = session;
          });
          this.userBasicInfo = this.identityService.Session;
        }
      }, {
        key: "mouseupDocument",
        value: function mouseupDocument($event, dropdown) {
          if ($event.srcElement.className !== 'dk-nav-toggle') {
            dropdown.historyOpen = false;
            dropdown.notificationOpen = false;
            dropdown.preferenceOpen = false;
          }
        }
      }, {
        key: "collapse",
        value: function collapse() {
          this.onCollapse.emit();
        }
      }, {
        key: "toggleHistoryDropdown",
        value: function toggleHistoryDropdown() {
          this.dropdown.historyOpen = !this.dropdown.historyOpen;
          this.dropdown.notificationOpen = false;
          this.dropdown.preferenceOpen = false;
        }
      }, {
        key: "toggleNotificationDropdown",
        value: function toggleNotificationDropdown() {
          this.dropdown.notificationOpen = !this.dropdown.notificationOpen;
          this.dropdown.historyOpen = false;
          this.dropdown.preferenceOpen = false;
        }
      }, {
        key: "togglePreferenceOpen",
        value: function togglePreferenceOpen() {
          this.dropdown.preferenceOpen = !this.dropdown.preferenceOpen;
          this.dropdown.historyOpen = false;
          this.dropdown.notificationOpen = false;
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this5 = this;

          this.logonService.logout().subscribe(function () {
            return _this5.document.location.href = window.location.origin;
          });
        }
      }]);

      return HeadBarComponent;
    }();

    HeadBarComponent.ɵfac = function HeadBarComponent_Factory(t) {
      return new (t || HeadBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__["LogonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]));
    };

    HeadBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeadBarComponent,
      selectors: [["app-head-bar"]],
      hostBindings: function HeadBarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function HeadBarComponent_mouseup_HostBindingHandler($event) {
            return ctx.mouseupDocument($event, ctx.dropdown);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        onCollapse: "onCollapse"
      },
      decls: 64,
      vars: 12,
      consts: [[1, "dk-navbar-inverse"], [1, "dk-navbar-header"], ["type", "button", 1, "dk-navbar-toggle", 3, "click"], [1, "dk-sr-only"], [1, "dk-icon-bar"], ["href", "#", 1, "dk-navbar-brand"], ["alt", "Brand", "src", "assets/darkhouse.png"], [1, "dk-navbar-center"], [1, "dk-nav", "dk-navbar-nav", "dk-navbar-app-title"], [3, "ngClass"], [1, "dk-nav-toggle", 3, "click"], [1, "dk-caret"], [1, "dk-dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "dk-navbar-right"], [1, "dk-nav", "dk-navbar-nav"], [1, "fas", "fa-bell"], [1, "dk-label", "dk-badge"], ["href", "#"], [1, "dk-label", "dk-label-warning"], [1, "dk-divider"], ["href", "#", 1, "dk-text-center"], [1, "fas", "fa-user"], [1, "fas", "fa-cog"], [3, "click"], [1, "fas", "fa-power-off"], [3, "routerLink"]],
      template: function HeadBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadBarComponent_Template_button_click_2_listener($event) {
            return ctx.collapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Toggle navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadBarComponent_Template_a_click_13_listener($event) {
            return ctx.toggleHistoryDropdown();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "b", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeadBarComponent_li_17_Template, 3, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadBarComponent_Template_a_click_21_listener($event) {
            return ctx.toggleNotificationDropdown();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "32");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "4:00 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Favourites Snippet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "4:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email marketing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "5:00 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Subscriber focused email design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "View All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadBarComponent_Template_a_click_46_listener($event) {
            return ctx.togglePreferenceOpen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "b", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadBarComponent_Template_a_click_61_listener($event) {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.dropdown.historyOpen));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentApp.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navHistory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.dropdown.notificationOpen));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.dropdown.preferenceOpen));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.userBasicInfo && ctx.userBasicInfo.DISPLAY_NAME, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".dk-navbar-inverse[_ngcontent-%COMP%]{\n  background-color: #2f3c48;\n  display: -webkit-box;\n  display: flex;\n  position: static;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  border-color: #080808;\n}\n.dk-nav[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n.dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .dk-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.dk-nav-toggle[_ngcontent-%COMP%]{\n  \n}\n.dk-navbar-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  float:none;\n}\n.dk-navbar-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  color: #fafafa;\n  max-width: 100%;\n  display: inline-block;\n  box-sizing: border-box;\n  white-space: pre-line;\n  word-wrap: break-word;\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: Arial,Helvetica,sans-serif;\n  background-color: #2f3c48;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  line-height: 20px;\n}\n.dk-navbar-center[_ngcontent-%COMP%]{\n  -webkit-box-flex:1;\n          flex-grow:1;\n}\n.dk-navbar-app-title[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  float: none;\n  display: block;\n  width: 300px;\n  text-align: center;\n}\n.dk-navbar-header[_ngcontent-%COMP%], .dk-navbar-right[_ngcontent-%COMP%] {\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}\n.dk-navbar-brand[_ngcontent-%COMP%] {\n  float: left;\n  height: 50px;\n  padding: 10px 10px;\n  font-size: 18px;\n  line-height: 30px;\n}\n.dk-navbar-brand[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 29%;\n}\n.dk-navbar-toggle[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  margin-left: 0.3rem;\n  margin-right: 0;\n  position: relative;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid;\n  border-color: #333;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.dk-navbar-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #333;\n}\n.dk-navbar-toggle[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.dk-sr-only[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0,0,0,0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.dk-navbar-toggle[_ngcontent-%COMP%]   .dk-icon-bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n  background-color: #fff;\n}\n.dk-navbar-toggle[_ngcontent-%COMP%]   .dk-icon-bar[_ngcontent-%COMP%] + .dk-icon-bar[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.dk-caret[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dk-label[_ngcontent-%COMP%] {\n  display: inline;\n  padding: .3em .6em .3em .3em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  margin-right: 0.5rem;\n}\n.dk-label-warning[_ngcontent-%COMP%] {\n  background-color: #f0ad4e;\n}\n.dk-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  padding: .1rem .4rem;\n  border-radius: .625rem;\n  left: 2.3rem;\n  background-color: #f05050;\n}\n.dk-dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  border-radius: 4px;\n}\n.dk-navbar-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .dk-dropdown-menu[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.open[_ngcontent-%COMP%] > .dk-dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n.dk-dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: 400;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n  text-decoration: none;\n  background-color: transparent;\n}\n.dk-dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dk-dropdown-menu[_ngcontent-%COMP%]   .dk-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dk-text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.fas[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n@media (min-width: 768px) {\n  .dk-navbar-right[_ngcontent-%COMP%]   .dk-dropdown-menu[_ngcontent-%COMP%] {\n    right: 0;\n    left: auto;\n  }\n  .dk-navbar-right[_ngcontent-%COMP%] {\n    float: right!important;\n    margin-right: -15px;\n  }\n}\n@media (max-width: 767px) {\n  .dk-navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dk-dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n    left: auto;\n    right: 1px;\n  }\n  .dk-navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dk-dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 3px 20px;\n    line-height: 20px;\n    color: #333;\n  }\n  .dk-navbar-inverse[_ngcontent-%COMP%]   .dk-navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dk-dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dk-navbar-inverse[_ngcontent-%COMP%]   .dk0navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dk-dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    color: #262626;\n    text-decoration: none;\n    background-color: #f5f5f5;\n  }\n}\n@media (min-width: 150px) {\n  .dk-navbar-nav[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0 1rem 0 0;\n  }\n  .dk-navbar-app-title[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    float: none;\n  }\n  .dk-navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    float: left;\n  }\n  .dk-navbar-app-title[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\n    float: none;\n  }\n  .dk-navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZC1iYXIvaGVhZC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEI7RUFDRSx5QkFBeUI7RUFDekIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixPQUFPO0VBQ1AsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1Q0FBdUM7RUFDdkMseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBVztVQUFYLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSw4QkFBc0I7RUFBdEIsMkJBQXNCO0VBQXRCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFOztJQUVFLFFBQVE7SUFDUixVQUFVO0VBQ1o7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsVUFBVTtJQUNWLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTs7SUFFRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkLWJhci9oZWFkLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVhZCBOYXZpZ2F0aW9uIEJhciAqL1xuLmRrLW5hdmJhci1pbnZlcnNle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzYzQ4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAzMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDgwODA4O1xufVxuLmRrLW5hdiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5kay1uYXY+bGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZGstbmF2PmxpPmEge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4uZGstbmF2PmxpLFxuLmRrLW5hdj5saT5hIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRrLW5hdj5saT5hOmZvY3VzLFxuLmRrLW5hdj5saT5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmRrLW5hdi10b2dnbGV7XG4gIC8qVXNlZCBmb3IgZmlndXJlIG91dCB0b2dnbGUgaW4gbmF2aWdhdGlvbiBiYXIqL1xufVxuLmRrLW5hdmJhci1uYXY+bGkge1xuICBmbG9hdDpub25lO1xufVxuLmRrLW5hdmJhci1uYXY+bGk+YSB7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2M0ODtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5kay1uYXZiYXItY2VudGVye1xuICBmbGV4LWdyb3c6MTtcbn1cbi5kay1uYXZiYXItYXBwLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxvYXQ6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kay1uYXZiYXItaGVhZGVyLFxuLmRrLW5hdmJhci1yaWdodCB7XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG4uZGstbmF2YmFyLWJyYW5kIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmRrLW5hdmJhci1icmFuZD5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI5JTtcbn1cbi5kay1uYXZiYXItdG9nZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOXB4IDEwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGstbmF2YmFyLXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4uZGstbmF2YmFyLXRvZ2dsZTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uZGstc3Itb25seSB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwLDAsMCwwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xufVxuLmRrLW5hdmJhci10b2dnbGUgLmRrLWljb24tYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmRrLW5hdmJhci10b2dnbGUgLmRrLWljb24tYmFyKy5kay1pY29uLWJhciB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5kay1jYXJldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXRvcDogNHB4IGRhc2hlZDtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uZGstbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IC4zZW0gLjZlbSAuM2VtIC4zZW07XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uZGstbGFiZWwtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XG59XG4uZGstYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcGFkZGluZzogLjFyZW0gLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IC42MjVyZW07XG4gIGxlZnQ6IDIuM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNTA1MDtcbn1cbi5kay1kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiAycHggMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmRrLW5hdmJhci1uYXY+bGk+LmRrLWRyb3Bkb3duLW1lbnUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5vcGVuPi5kay1kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZGstZHJvcGRvd24tbWVudT5saT5hIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBjbGVhcjogYm90aDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjMzMzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRrLWRyb3Bkb3duLW1lbnU+bGk+YTpob3ZlciB7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4uZGstZHJvcGRvd24tbWVudSAuZGstZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDlweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xufVxuLmRrLXRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZhcyB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kay1uYXZiYXItcmlnaHRcbiAgLmRrLWRyb3Bkb3duLW1lbnUge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbiAgLmRrLW5hdmJhci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0IWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmRrLW5hdmJhci1uYXYgLm9wZW4gLmRrLWRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDFweDtcbiAgfVxuICAuZGstbmF2YmFyLW5hdiAub3BlbiAuZGstZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XG4gICAgcGFkZGluZzogM3B4IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgLmRrLW5hdmJhci1pbnZlcnNlIC5kay1uYXZiYXItbmF2IC5vcGVuIC5kay1kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyLFxuICAuZGstbmF2YmFyLWludmVyc2UgLmRrMG5hdmJhci1uYXYgLm9wZW4gLmRrLWRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTUwcHgpIHtcbiAgLmRrLW5hdmJhci1uYXYge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcbiAgfVxuICAuZGstbmF2YmFyLWFwcC10aXRsZSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLmRrLW5hdmJhci1uYXYgPiBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmRrLW5hdmJhci1hcHAtdGl0bGUgPiBsaXtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAuZGstbmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-head-bar',
          templateUrl: './head-bar.component.html',
          styleUrls: ['./head-bar.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: _history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"]
        }, {
          type: ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__["LogonService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]
        }];
      }, {
        onCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mouseupDocument: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mouseup', ['$event', 'dropdown']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/history.service.ts":
  /*!************************************!*\
    !*** ./src/app/history.service.ts ***!
    \************************************/

  /*! exports provided: HistoryService */

  /***/
  function srcAppHistoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryService", function () {
      return HistoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);

    var HistoryService =
    /*#__PURE__*/
    function () {
      function HistoryService() {
        _classCallCheck(this, HistoryService);

        this.navHistory = [];
        this.historySource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentApp = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          name: 'Home'
        });
        this.NUM_OF_HISTORY = 10;
        this.currentHistoryObserver = this.historySource.asObservable();
        this.currentAppObserver = this.currentApp.asObservable();
      }

      _createClass(HistoryService, [{
        key: "addHistory",
        value: function addHistory(app) {
          var idx = this.navHistory.map(function (ele) {
            return ele.routeLink;
          }).indexOf(app.routeLink);

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
      }]);

      return HistoryService;
    }();

    HistoryService.ɵfac = function HistoryService_Factory(t) {
      return new (t || HistoryService)();
    };

    HistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HistoryService,
      factory: HistoryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/identity.service.ts":
  /*!*************************************!*\
    !*** ./src/app/identity.service.ts ***!
    \*************************************/

  /*! exports provided: IdentityService */

  /***/
  function srcAppIdentityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityService", function () {
      return IdentityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./role */
    "./src/app/role.ts");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jor-angular */
    "./node_modules/jor-angular/__ivy_ngcc__/fesm2015/jor-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ui_message_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ui-message-angular */
    "./node_modules/ui-message-angular/__ivy_ngcc__/fesm2015/ui-message-angular.js");
    /* harmony import */


    var ui_logon_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ui-logon-angular */
    "./node_modules/ui-logon-angular/__ivy_ngcc__/fesm2015/ui-logon-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var IdentityService =
    /*#__PURE__*/
    function () {
      function IdentityService(http, messageService, router) {
        _classCallCheck(this, IdentityService);

        this.http = http;
        this.messageService = messageService;
        this.router = router;
        this.originalHost = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].originalHost;
      }

      _createClass(IdentityService, [{
        key: "setSession",
        value: function setSession(data) {
          this.session = data;
        }
      }, {
        key: "getRoleDetail",

        /**
         * Get a role detail information from backend based on an authenticated user
         * @returns {Observable<Role>}
         */
        value: function getRoleDetail() {
          return this.http.post(this.originalHost + "/api/function/getRoleDetail", {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDetail')));
        }
        /**
         * Get an APP detail based on a routeLink
         * @param {string} routeLink
         * @returns {Observable<App>}
         */

      }, {
        key: "getApp",
        value: function getApp(routeLink) {
          if (routeLink.substr(0, 13) === '/external-app') {
            return this.http.post(this.originalHost + "/api/entity/instance", {
              RELATION_ID: 'app',
              APP_ID: routeLink.substr(14)
            }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (appEntity) {
              var app = new _role__WEBPACK_IMPORTED_MODULE_4__["App"]();

              if (Array.isArray(appEntity)) {
                appEntity = appEntity[0];
              } // Could return an array, like message or multiple entities


              if (appEntity['ENTITY_ID']) {
                // It returns entity instance, rather than an error message;
                app.name = appEntity['app'][0]['NAME'];
                app.routeLink = routeLink;
              }

              return app;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getApp')));
          } else {
            return this.http.post(this.originalHost + "/api/entity/instance", {
              RELATION_ID: 'app',
              ROUTE_LINK: routeLink
            }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (appEntity) {
              var app = new _role__WEBPACK_IMPORTED_MODULE_4__["App"]();

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

      }, {
        key: "getAppRouteLink",
        value: function getAppRouteLink(appID) {
          return this.http.post(this.originalHost + "/api/entity/instance", {
            RELATION_ID: 'app',
            APP_ID: appID
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (appEntity) {
            if (Array.isArray(appEntity)) {
              appEntity = appEntity[0];
            } // Could return an array, like message or multiple entities


            if (appEntity['ENTITY_ID']) {
              // It returns entity instance, rather than an error message;
              return appEntity['app'][0]['ROUTE_LINK'];
            } else {
              return 'appNotFound';
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAppRouteLink')));
        }
        /**
         * Search Users by USER_ID and USER_NAME.
         * Return a list with columns USER_ID, USER_NAME, DISPLAY_NAME, LOCK, and PWD_STATE
         * Wildcard search is supported using '*' or '%'.
         **/

      }, {
        key: "searchUsers",
        value: function searchUsers(userID, userName) {
          var queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_5__["QueryObject"]();
          queryObject.ENTITY_ID = 'person';
          queryObject.RELATION_ID = 'r_user';
          queryObject.PROJECTION = ['USER_ID', 'USER_NAME', 'DISPLAY_NAME', 'LOCK', 'PWD_STATE'];
          queryObject.FILTER = [];

          if (userID) {
            if (userID.includes('*') || userID.includes('%')) {
              queryObject.FILTER.push({
                FIELD_NAME: 'USER_ID',
                OPERATOR: 'CN',
                LOW: userID
              });
            } else {
              queryObject.FILTER.push({
                FIELD_NAME: 'USER_ID',
                OPERATOR: 'EQ',
                LOW: userID
              });
            }
          }

          if (userName) {
            if (userName.includes('*')) {
              userName = userName.replace(/\*/gi, '%');
              queryObject.FILTER.push({
                FIELD_NAME: 'USER_NAME',
                OPERATOR: 'CN',
                LOW: userName
              });
            } else {
              queryObject.FILTER.push({
                FIELD_NAME: 'USER_NAME',
                OPERATOR: 'EQ',
                LOW: userName
              });
            }
          }

          queryObject.SORT = ['USER_ID'];
          return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchObjects')));
        }
        /**
         * Get detail information of a user from USER_ID
         * Return information in Relations: r_user, r_employee, r_email, r_address, and r_personalization.
         * The relationship to user role is also inquired with information in Relation: r_role
         **/

      }, {
        key: "getUserDetail",
        value: function getUserDetail(userID) {
          var pieceObject = {
            ID: {
              RELATION_ID: 'r_user',
              USER_ID: userID
            },
            piece: {
              RELATIONS: ['r_user', 'r_employee', 'r_email', 'r_address', 'r_personalization'],
              RELATIONSHIPS: [{
                RELATIONSHIP_ID: 'rs_user_role',
                PARTNER_ENTITY_PIECES: {
                  RELATIONS: ['r_role']
                }
              }]
            }
          };
          return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserDetail')));
        }
        /**
         * Get user by User ID, only return information in Relations: r_user
         * This service call is mainly used to check whether the given USER_ID already exists
         **/

      }, {
        key: "getUserByUserID",
        value: function getUserByUserID(userID) {
          var pieceObject = {
            ID: {
              RELATION_ID: 'r_user',
              USER_ID: userID
            },
            piece: {
              RELATIONS: ['r_user']
            }
          };
          return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserByUserID')));
        }
      }, {
        key: "getUserByUserName",
        value: function getUserByUserName(userName) {
          var pieceObject = {
            ID: {
              RELATION_ID: 'r_user',
              USER_NAME: userName
            },
            piece: {
              RELATIONS: ['r_user']
            }
          };
          return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserByUserName')));
        }
      }, {
        key: "getRoleDesc",
        value: function getRoleDesc(roleID) {
          var pieceObject = {
            ID: {
              RELATION_ID: 'r_role',
              NAME: roleID
            },
            piece: {
              RELATIONS: ['r_role']
            }
          };
          return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (instance) {
            return 'INSTANCE_GUID' in instance ? {
              INSTANCE_GUID: instance['INSTANCE_GUID'],
              DESCRIPTION: instance['r_role'] ? instance['r_role'][0]['DESCRIPTION'] : ''
            } : instance[0];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDesc')));
        }
        /**
         * Save an entity to DB
         * A generic entity in JSON is given. If the JSON has attribute INSTANCE_GUID, it calls PUT, otherwise, POST
         **/

      }, {
        key: "saveUser",
        value: function saveUser(user) {
          if (user['INSTANCE_GUID']) {
            return this.http.put(this.originalHost + "/api/entity", user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveUser')));
          } else {
            return this.http.post(this.originalHost + "/api/entity", user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveUser')));
          }
        }
        /**
         * Delete an entity from DB
         * A GUID of entity instance is given. After the call, the instance will be deleted permanently
         **/

      }, {
        key: "deleteUser",
        value: function deleteUser(userGUID) {
          return this.http["delete"](this.originalHost + "/api/entity/instance/" + userGUID, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteUser')));
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var _this6 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            if (error.status === 401) {
              _this6.messageService.addMessage('EXCEPTION', 'NOT_AUTHENTICATED_OR_SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["messageType"].Exception);
            } else {
              _this6.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["messageType"].Exception, operation, error.message);
            }

            _this6.router.navigate(['errors']);

            console.error(operation, error); // log to console instead
            // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }, {
        key: "Session",
        get: function get() {
          if (this.session) {
            return this.session;
          }

          var defaultSession = new ui_logon_angular__WEBPACK_IMPORTED_MODULE_9__["Session"]();
          defaultSession.USER_ID = 'DH001';
          defaultSession.LANGUAGE = 'EN';
          return defaultSession;
        }
      }, {
        key: "CurrentTime",
        get: function get() {
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
        }
      }]);

      return IdentityService;
    }();

    IdentityService.ɵfac = function IdentityService_Factory(t) {
      return new (t || IdentityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    IdentityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IdentityService,
      factory: IdentityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdentityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mockup/mockup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/mockup/mockup-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: MockupRoutingModule */

  /***/
  function srcAppMockupMockupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockupRoutingModule", function () {
      return MockupRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mockup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mockup.component */
    "./src/app/mockup/mockup.component.ts");

    var routes = [{
      path: 'mockup/:UI',
      component: _mockup_component__WEBPACK_IMPORTED_MODULE_2__["MockupComponent"]
    }];

    var MockupRoutingModule = function MockupRoutingModule() {
      _classCallCheck(this, MockupRoutingModule);
    };

    MockupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MockupRoutingModule
    });
    MockupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MockupRoutingModule_Factory(t) {
        return new (t || MockupRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MockupRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockupRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/mockup/mockup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/mockup/mockup.component.ts ***!
    \********************************************/

  /*! exports provided: MockupComponent */

  /***/
  function srcAppMockupMockupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockupComponent", function () {
      return MockupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MockupComponent =
    /*#__PURE__*/
    function () {
      function MockupComponent(route) {
        _classCallCheck(this, MockupComponent);

        this.route = route;
      }

      _createClass(MockupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.mockupUI = 'assets/' + this.route.snapshot.paramMap.get('UI') + '.png';
        }
      }]);

      return MockupComponent;
    }();

    MockupComponent.ɵfac = function MockupComponent_Factory(t) {
      return new (t || MockupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    MockupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MockupComponent,
      selectors: [["app-mockup"]],
      decls: 1,
      vars: 1,
      consts: [[2, "max-width", "100%", 3, "src"]],
      template: function MockupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mockupUI, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vY2t1cC9tb2NrdXAuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mockup',
          template: '<img [src]="mockupUI" style="max-width: 100%">',
          styleUrls: ['./mockup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mockup/mockup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/mockup/mockup.module.ts ***!
    \*****************************************/

  /*! exports provided: MockupModule */

  /***/
  function srcAppMockupMockupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockupModule", function () {
      return MockupModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _mockup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mockup.component */
    "./src/app/mockup/mockup.component.ts");
    /* harmony import */


    var _mockup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mockup-routing.module */
    "./src/app/mockup/mockup-routing.module.ts");

    var MockupModule = function MockupModule() {
      _classCallCheck(this, MockupModule);
    };

    MockupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MockupModule
    });
    MockupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MockupModule_Factory(t) {
        return new (t || MockupModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _mockup_routing_module__WEBPACK_IMPORTED_MODULE_3__["MockupRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MockupModule, {
        declarations: [_mockup_component__WEBPACK_IMPORTED_MODULE_2__["MockupComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _mockup_routing_module__WEBPACK_IMPORTED_MODULE_3__["MockupRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _mockup_routing_module__WEBPACK_IMPORTED_MODULE_3__["MockupRoutingModule"]],
          declarations: [_mockup_component__WEBPACK_IMPORTED_MODULE_2__["MockupComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/msgStore.ts":
  /*!*****************************!*\
    !*** ./src/app/msgStore.ts ***!
    \*****************************/

  /*! exports provided: msgStore */

  /***/
  function srcAppMsgStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "msgStore", function () {
      return msgStore;
    });

    var msgStore = [{
      msgCat: "EXCEPTION",
      msgName: "GENERIC",
      msgText: {
        EN: {
          shortText: "Exception Occurs in Operation: '%s'",
          longText: "%s1"
        }
      }
    }, {
      msgCat: "EXCEPTION",
      msgName: "NOT_AUTHENTICATED_OR_SESSION_EXPIRED",
      msgText: {
        EN: {
          shortText: "You are not authenticated or your session is expired!",
          longText: "You are not authenticated or your session is expired, please <a href='/logon'>re-logon</a>."
        }
      }
    }, {
      msgCat: "GENERAL",
      msgName: "EMPTY_LIST",
      msgText: {
        EN: {
          shortText: "No result is found",
          longText: "The system cannot find any items meet the search criteria."
        }
      }
    }, {
      msgCat: "GENERAL",
      msgName: "UNSAVED_CHANGES",
      msgText: {
        EN: {
          shortText: "There are unsaved changes. Do you want to save the changes?",
          longText: ""
        }
      }
    }, {
      msgCat: "GENERAL",
      msgName: "NO_CHANGE",
      msgText: {
        EN: {
          shortText: "No change is made, saving is not necessary.",
          longText: "The data is not changed, thus there is no need to save changes"
        }
      }
    }, {
      msgCat: "USER",
      msgName: "INVALID",
      msgText: {
        EN: {
          shortText: "Data is invalid, please check.",
          longText: "The data still contains some errors, please make sure all mandatory fields are filled!"
        }
      }
    }, {
      msgCat: "USER",
      msgName: "USER_NAME_EXISTS",
      msgText: {
        EN: {
          shortText: "User name: '%s' already exists!",
          longText: ""
        }
      }
    }, {
      msgCat: "USER",
      msgName: "USER_ID_EXISTS",
      msgText: {
        EN: {
          shortText: "User ID: '%s' already exists!",
          longText: ""
        }
      }
    }, {
      msgCat: "USER",
      msgName: "AT_LEAST_ONE_EMAIL",
      msgText: {
        EN: {
          shortText: "At least one email needs to be maintained!",
          longText: ""
        }
      }
    }, {
      msgCat: "USER",
      msgName: "USER_SAVED",
      msgText: {
        EN: {
          shortText: "User '%s' is saved!",
          longText: ""
        }
      }
    }];
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/role.ts":
  /*!*************************!*\
    !*** ./src/app/role.ts ***!
    \*************************/

  /*! exports provided: Role, Catalog, App, UserBasicInfo */

  /***/
  function srcAppRoleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return Role;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Catalog", function () {
      return Catalog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "App", function () {
      return App;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserBasicInfo", function () {
      return UserBasicInfo;
    });

    var Role = function Role() {
      _classCallCheck(this, Role);
    };

    var Catalog = function Catalog() {
      _classCallCheck(this, Catalog);
    };

    var App = function App() {
      _classCallCheck(this, App);
    };

    var UserBasicInfo = function UserBasicInfo() {
      _classCallCheck(this, UserBasicInfo);
    };
    /***/

  },

  /***/
  "./src/app/share.service.ts":
  /*!**********************************!*\
    !*** ./src/app/share.service.ts ***!
    \**********************************/

  /*! exports provided: ShareService */

  /***/
  function srcAppShareServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareService", function () {
      return ShareService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ShareService =
    /*#__PURE__*/
    function () {
      function ShareService() {
        _classCallCheck(this, ShareService);

        this.apps = [];
        this.isCollapsed = false;
        this.isCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isCollapsed$ = this.isCollapsedSubject.asObservable();
      }

      _createClass(ShareService, [{
        key: "updateIsCollapsed",
        value: function updateIsCollapsed(status) {
          this.isCollapsed = status;
          this.isCollapsedSubject.next(this.isCollapsed);
        }
      }]);

      return ShareService;
    }();

    ShareService.ɵfac = function ShareService_Factory(t) {
      return new (t || ShareService)();
    };

    ShareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShareService,
      factory: ShareService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/side-menu/side-menu.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/side-menu/side-menu.component.ts ***!
    \**************************************************/

  /*! exports provided: SideMenuComponent */

  /***/
  function srcAppSideMenuSideMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function () {
      return SideMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../role */
    "./src/app/role.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/internal/Subject */
    "./node_modules/rxjs/internal/Subject.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var fuzzysort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! fuzzysort */
    "./node_modules/fuzzysort/fuzzysort.js");
    /* harmony import */


    var fuzzysort__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(fuzzysort__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _identity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../identity.service */
    "./src/app/identity.service.ts");
    /* harmony import */


    var ui_message_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ui-message-angular */
    "./node_modules/ui-message-angular/__ivy_ngcc__/fesm2015/ui-message-angular.js");
    /* harmony import */


    var _share_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../share.service */
    "./src/app/share.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["sideMenu"];

    function SideMenuComponent_ul_3_li_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
      }

      if (rf & 2) {
        var category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", category_r6.icon);
      }
    }

    function SideMenuComponent_ul_3_li_1_input_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SideMenuComponent_ul_3_li_1_input_2_Template_input_keyup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r16.searchApp(_r15.value);
        })("keypress", function SideMenuComponent_ul_3_li_1_input_2_Template_input_keypress_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r18.enterApp($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SideMenuComponent_ul_3_li_1_ul_3_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var app_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", app_r20.routeLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r20.name);
      }
    }

    function SideMenuComponent_ul_3_li_1_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_ul_3_li_1_ul_3_li_1_Template, 3, 2, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r10.apps$));
      }
    }

    function SideMenuComponent_ul_3_li_1_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", category_r6.routeLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", category_r6.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r6.name, " ");
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "fa-angle-right": a0,
        "fa-angle-down": a1
      };
    };

    function SideMenuComponent_ul_3_li_1_a_5_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
      }

      if (rf & 2) {
        var category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, !category_r6.isSubMenuShow, category_r6.isSubMenuShow));
      }
    }

    function SideMenuComponent_ul_3_li_1_a_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_ul_3_li_1_a_5_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.clickRow(i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideMenuComponent_ul_3_li_1_a_5_span_3_Template, 1, 4, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", category_r6.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r6.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r6.apps && category_r6.apps.length > 0);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "active": a0
      };
    };

    function SideMenuComponent_ul_3_li_1_ul_6_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var app_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, app_r29.active));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", app_r29.routeLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r29.name);
      }
    }

    var _c3 = function _c3(a0, a1) {
      return {
        "expended": a0,
        "collapsed": a1
      };
    };

    function SideMenuComponent_ul_3_li_1_ul_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_ul_3_li_1_ul_6_li_1_Template, 3, 5, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, category_r6.isSubMenuShow, !category_r6.isSubMenuShow));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r6.apps);
      }
    }

    var _c4 = function _c4(a0, a1, a2, a3) {
      return {
        "active": a0,
        "collapsed": a1,
        "dk-menu-search": a2,
        "menuDisplay": a3
      };
    };

    function SideMenuComponent_ul_3_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_ul_3_li_1_span_1_Template, 1, 1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideMenuComponent_ul_3_li_1_input_2_Template, 2, 0, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideMenuComponent_ul_3_li_1_ul_3_Template, 3, 3, "ul", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideMenuComponent_ul_3_li_1_a_4_Template, 3, 3, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SideMenuComponent_ul_3_li_1_a_5_Template, 4, 3, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SideMenuComponent_ul_3_li_1_ul_6_Template, 2, 5, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r6 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c4, category_r6.active, !category_r6.isSubMenuShow, category_r6.routeLink === "/appSearch", category_r6.routeLink === "/appSearch" || ctx_r5.menuDisplay));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r6.routeLink === "/appSearch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r6.routeLink === "/appSearch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r6.routeLink === "/appSearch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r6.routeLink && category_r6.routeLink !== "/appSearch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !category_r6.routeLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !category_r6.routeLink);
      }
    }

    function SideMenuComponent_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_ul_3_li_1_Template, 7, 12, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.role.categories);
      }
    }

    function SideMenuComponent_ul_4_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", category_r32.icon);
      }
    }

    function SideMenuComponent_ul_4_li_1_div_2_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_ul_4_li_1_div_2_li_6_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r45.hideSubMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var app_r44 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", app_r44.routeLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r44.name);
      }
    }

    var _c5 = function _c5(a0) {
      return {
        "dk-side-menu-hover-show": a0
      };
    };

    function SideMenuComponent_ul_4_li_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SideMenuComponent_ul_4_li_1_div_2_Template_input_keyup_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r47.searchApp(_r42.value);
        })("keypress", function SideMenuComponent_ul_4_li_1_div_2_Template_input_keypress_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r49.enterApp($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SideMenuComponent_ul_4_li_1_div_2_li_6_Template, 3, 2, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", category_r32.top, "rem");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c5, category_r32.isSubMenuShow));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r35.apps$));
      }
    }

    var _c6 = function _c6(a0) {
      return {
        "dk-popover-arrow-show": a0
      };
    };

    function SideMenuComponent_ul_4_li_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 35);
      }

      if (rf & 2) {
        var category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", category_r32.arrowTop, "rem");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c6, category_r32.isSubMenuShow));
      }
    }

    function SideMenuComponent_ul_4_li_1_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", category_r32.routeLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", category_r32.icon);
      }
    }

    function SideMenuComponent_ul_4_li_1_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", category_r32.icon);
      }
    }

    function SideMenuComponent_ul_4_li_1_div_6_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_ul_4_li_1_div_6_li_6_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r56.hideSubMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var app_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, app_r55.active));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", app_r55.routeLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r55.name);
      }
    }

    function SideMenuComponent_ul_4_li_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SideMenuComponent_ul_4_li_1_div_6_li_6_Template, 3, 5, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", category_r32.top, "rem")("height", category_r32.height, "rem");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c5, category_r32.isSubMenuShow));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r32.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r32.apps);
      }
    }

    function SideMenuComponent_ul_4_li_1_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 35);
      }

      if (rf & 2) {
        var category_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", category_r32.arrowTop, "rem");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c6, category_r32.isSubMenuShow));
      }
    }

    function SideMenuComponent_ul_4_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SideMenuComponent_ul_4_li_1_Template_li_mouseenter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var i_r33 = ctx.index;

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r60.mouseenterRow(i_r33);
        })("mouseleave", function SideMenuComponent_ul_4_li_1_Template_li_mouseleave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var i_r33 = ctx.index;

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r62.mouseleaveRow(i_r33);
        })("click", function SideMenuComponent_ul_4_li_1_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var i_r33 = ctx.index;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r63.clickRow(i_r33);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_ul_4_li_1_a_1_Template, 2, 1, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideMenuComponent_ul_4_li_1_div_2_Template, 8, 8, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideMenuComponent_ul_4_li_1_span_3_Template, 1, 5, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideMenuComponent_ul_4_li_1_a_4_Template, 2, 2, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SideMenuComponent_ul_4_li_1_a_5_Template, 2, 1, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SideMenuComponent_ul_4_li_1_div_6_Template, 7, 9, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SideMenuComponent_ul_4_li_1_span_7_Template, 1, 5, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, category_r32.active));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r32.routeLink === "/appSearch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r32.routeLink === "/appSearch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r32.routeLink === "/appSearch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r32.routeLink !== "/appSearch" && category_r32.apps.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r32.routeLink !== "/appSearch" && category_r32.apps.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r32.routeLink !== "/appSearch" && category_r32.apps.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r32.routeLink !== "/appSearch" && category_r32.apps.length > 0);
      }
    }

    function SideMenuComponent_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_ul_4_li_1_Template, 8, 10, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.role.categories);
      }
    }

    function SideMenuComponent_ul_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Useful Links ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Legal Information ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SideMenuComponent_ul_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SideMenuComponent_ul_8_Template_li_mouseenter_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.mouseenterRow(0);
        })("mouseleave", function SideMenuComponent_ul_8_Template_li_mouseleave_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.mouseleaveRow(0);
        })("click", function SideMenuComponent_ul_8_Template_li_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.clickRow(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SideMenuComponent_ul_8_Template_li_mouseenter_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.mouseenterRow(0);
        })("mouseleave", function SideMenuComponent_ul_8_Template_li_mouseleave_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.mouseleaveRow(0);
        })("click", function SideMenuComponent_ul_8_Template_li_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.clickRow(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SideMenuComponent =
    /*#__PURE__*/
    function () {
      function SideMenuComponent(identityService, messageService, shareService, router) {
        _classCallCheck(this, SideMenuComponent);

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
        this.role = new _role__WEBPACK_IMPORTED_MODULE_1__["Role"]();
      }

      _createClass(SideMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.rem = parseInt(window.getComputedStyle(document.head).getPropertyValue('font-size'), 10);
          this.identityService.getRoleDetail().subscribe(function (roles) {
            return _this7._processRoleData(roles);
          });
          this.shareService.updateIsCollapsed(this.isCollapsed);
          this.apps$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            var results = fuzzysort__WEBPACK_IMPORTED_MODULE_5__["go"](term, _this7.shareService.apps, {
              key: 'name'
            });
            var returnedApps = [];
            results.forEach(function (result) {
              return returnedApps.push(result.obj);
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(returnedApps);
          }));
          this.apps$.subscribe(function (searchedApps) {
            return _this7.searchedApps = searchedApps;
          });
        }
      }, {
        key: "_processRoleData",
        value: function _processRoleData(roles) {
          var _this8 = this;

          if (!roles) {
            return;
          }

          this.role = roles[0]; // Currently, only support one role per user logon

          if (this.role['msgCat']) {
            this.messageService.clearMessages();
            roles.forEach(function (msg) {
              return _this8.messageService.add(msg);
            });
            this.router.navigate(['errors']);
          } else {
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

                _this8.shareService.apps.push(app);
              });

              if (category.apps.length === 1) {
                category.routeLink = category.apps[0].routeLink;
                category.apps = [];
              }
            });
          }
        }
      }, {
        key: "searchApp",
        value: function searchApp(term) {
          this.searchTerms.next(term);
          this.menuDisplay = !term;
        }
      }, {
        key: "enterApp",
        value: function enterApp($event) {
          if ($event.keyCode === 13 && this.searchedApps[0]) {
            this.router.navigate([this.searchedApps[0].routeLink]);
          }
        }
      }, {
        key: "collapse",
        value: function collapse() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.role.categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var category = _step.value;
              category.isSubMenuShow = false;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.menuDisplay = true;
          this.isCollapsed = !this.isCollapsed;
          this.shareService.updateIsCollapsed(this.isCollapsed);
          return this.isCollapsed;
        }
      }, {
        key: "activateSubMenu",
        value: function activateSubMenu(row) {
          var menuHeight = this.sideMenu.nativeElement.offsetHeight / this.rem;
          var menuScrollTop = this.sideMenu.nativeElement.getElementsByClassName('dk-menu-list')[0].scrollTop / this.rem;

          if (menuHeight + 1 - 4 * row + menuScrollTop <= this.role.categories[row].originalHeight) {
            this.role.categories[row].top = null;

            if (menuHeight + 3 <= this.role.categories[row].originalHeight) {
              this.role.categories[row].height = menuHeight + 3;
            } else {
              this.role.categories[row].height = this.role.categories[row].originalHeight;
            }
          } else {
            this.role.categories[row].top = 5 + 4 * row - menuScrollTop;
          }

          this.role.categories[row].arrowTop = 6 + 4 * row - menuScrollTop;
          this.role.categories[row].isSubMenuShow = true;
        }
      }, {
        key: "deactivateSubMenu",
        value: function deactivateSubMenu(row) {
          this.role.categories[row].isSubMenuShow = false;
        }
        /**
         * Keep track of the last few locations of the mouse.
         */

      }, {
        key: "mousemoveDocument",
        value: function mousemoveDocument(e, mouseLocs) {
          mouseLocs.push({
            x: e.pageX,
            y: e.pageY
          });

          if (mouseLocs.length > 3) {
            // '30' of the past mouse locations to track
            mouseLocs.shift();
          }
        }
        /**
         * Cancel possible row activations when leaving the menu entirely
         */

      }, {
        key: "mouseleaveMenu",
        value: function mouseleaveMenu() {
          if (this.timeoutId) {
            clearTimeout(this.timeoutId);
          } // If exitMenu is supplied and returns true, deactivate the
          // currently active row on menu exit.


          if (this.activeRow && !this.isMouseInMenuArea()) {
            this.deactivateSubMenu(this.activeRow);
          }

          this.activeRow = null;
        }
        /**
         * Check if the mouse is in the area of main menu and sub-menu.
         */

      }, {
        key: "isMouseInMenuArea",
        value: function isMouseInMenuArea() {
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
          return loc && (loc.x <= upperRight.x && loc.y <= lowerRight.y && loc.y >= upperRight.y || loc.x <= upperLeft.x && loc.y >= offset.top && loc.y <= offset.top + menu.offsetHeight);
        }
        /**
         * Trigger a possible row activation whenever entering a new row.
         */

      }, {
        key: "mouseenterRow",
        value: function mouseenterRow(row) {
          if (this.timeoutId) {
            // Cancel any previous activation delays
            clearTimeout(this.timeoutId);
          }

          this.possiblyActivate(row);
        }
        /**
         * Trigger a row deactivation whenever leaving a row.
         */

      }, {
        key: "mouseleaveRow",
        value: function mouseleaveRow(row) {
          if (!this.isMouseInMenuArea()) {
            this.deactivateSubMenu(row);
          }
        }
        /**
         * Set the current opened app to be active
         * @param {App} app
         */

      }, {
        key: "activateApp",
        value: function activateApp(app) {
          // Clear the existing active app
          var appIdx = -1;
          var catalogIdx = this.role.categories.findIndex(function (category) {
            return category.active === true;
          });

          if (catalogIdx > -1) {
            this.role.categories[catalogIdx].active = false;

            if (!this.role.categories[catalogIdx].routeLink) {
              appIdx = this.role.categories[catalogIdx].apps.findIndex(function (app1) {
                return app1.active === true;
              });

              if (appIdx > -1) {
                this.role.categories[catalogIdx].apps[appIdx].active = false;
              }
            }
          } // Set the new active app


          catalogIdx = this.role.categories.findIndex(function (category) {
            if (category.routeLink === app.routeLink) {
              return true;
            } else {
              appIdx = category.apps.findIndex(function (app1) {
                return app1.routeLink === app.routeLink;
              });
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

      }, {
        key: "clickRow",
        value: function clickRow(row) {
          if (this.isCollapsed) {
            this.activate(row);
          } else {
            this.role.categories[row].isSubMenuShow = !this.role.categories[row].isSubMenuShow;
          }
        }
        /**
         * Hide the sub-menu
         */

      }, {
        key: "hideSubMenu",
        value: function hideSubMenu() {
          this.role.categories[this.activeRow].isSubMenuShow = false;
        }
        /**
         * Activate a menu row.
         */

      }, {
        key: "activate",
        value: function activate(row) {
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

      }, {
        key: "possiblyActivate",
        value: function possiblyActivate(row) {
          var _this9 = this;

          var delay = this.activationDelay();

          if (delay) {
            this.timeoutId = setTimeout(function () {
              return _this9.possiblyActivate(row);
            }, delay);
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

      }, {
        key: "activationDelay",
        value: function activationDelay() {
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

          if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x || prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
            // If the previous mouse location was outside of the entire
            // menu's bounds, immediately activate.
            return 0;
          }

          if (this.lastDelayLoc && loc.x === this.lastDelayLoc.x && loc.y === this.lastDelayLoc.y) {
            // If the mouse hasn't moved since the last time we checked
            // for activation status, immediately activate.
            return 0;
          } // Detect if the user is moving towards the currently activated
          // submenu.


          function slope(a, b) {
            return (b.y - a.y) / (b.x - a.x);
          }

          var decreasingCorner = upperRight,
              increasingCorner = lowerRight;
          var decreasingSlope = slope(loc, decreasingCorner),
              increasingSlope = slope(loc, increasingCorner),
              prevDecreasingSlope = slope(prevLoc, decreasingCorner),
              prevIncreasingSlope = slope(prevLoc, increasingCorner);

          if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
            // Mouse is moving from previous location towards the
            // currently activated submenu. Delay before activating a
            // new menu row, because user may be moving into submenu.
            this.lastDelayLoc = loc;
            return this.DELAY;
          }

          this.lastDelayLoc = null;
          return 0;
        }
      }]);

      return SideMenuComponent;
    }();

    SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) {
      return new (t || SideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_7__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_share_service__WEBPACK_IMPORTED_MODULE_9__["ShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideMenuComponent,
      selectors: [["app-side-menu"]],
      viewQuery: function SideMenuComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
        }
      },
      hostBindings: function SideMenuComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function SideMenuComponent_mousemove_HostBindingHandler($event) {
            return ctx.mousemoveDocument($event, ctx.mouseLocs);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      decls: 9,
      vars: 6,
      consts: [[1, "dk-side-menu", 3, "mouseleave"], ["sideMenu", ""], [1, "dk-menu-list"], ["class", "dk-menu-content", 4, "ngIf"], [1, "dk-separator"], [1, "dk-menu-bottom"], [1, "dk-menu-content"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "dk-search-box", "placeholder", "Search", 3, "keyup", "keypress", 4, "ngIf"], ["class", "dk-sub-menu", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [3, "click", 4, "ngIf"], ["class", "dk-sub-menu", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["placeholder", "Search", 1, "dk-search-box", 3, "keyup", "keypress"], ["searchBox", ""], [1, "dk-sub-menu"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [3, "click"], ["class", "fas arrow", 3, "ngClass", 4, "ngIf"], [1, "fas", "arrow", 3, "ngClass"], [1, "dk-sub-menu", 3, "ngClass"], ["class", "menuDisplay", 3, "ngClass", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], [1, "menuDisplay", 3, "ngClass", "mouseenter", "mouseleave", "click"], [4, "ngIf"], ["class", "dk-side-menu dk-side-menu-hover dk-menu-search-hover", 3, "ngClass", "top", 4, "ngIf"], ["class", "dk-popover-arrow", 3, "ngClass", "top", 4, "ngIf"], ["class", "dk-side-menu dk-side-menu-hover", 3, "top", "height", "ngClass", 4, "ngIf"], [1, "dk-side-menu", "dk-side-menu-hover", "dk-menu-search-hover", 3, "ngClass"], [1, "dk-menu-content-hover"], [1, "dk-sub-menu", "dk-sub-menu-collapsed"], [3, "routerLink", "click"], [1, "dk-popover-arrow", 3, "ngClass"], [1, "dk-side-menu", "dk-side-menu-hover", 3, "ngClass"], ["href", "#"], ["aria-hidden", "true", 1, "fas", "fa-question-circle"], ["aria-hidden", "true", 1, "fas", "fa-balance-scale"], [3, "mouseenter", "mouseleave", "click"]],
      template: function SideMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function SideMenuComponent_Template_div_mouseleave_0_listener($event) {
            return ctx.mouseleaveMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideMenuComponent_ul_3_Template, 2, 1, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideMenuComponent_ul_4_Template, 2, 1, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SideMenuComponent_ul_7_Template, 9, 0, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SideMenuComponent_ul_8_Template, 7, 0, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dk-side-menu-collapsed", ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: [".dk-side-menu[_ngcontent-%COMP%] {\n  font-family: Arial,Helvetica,sans-serif;\n  font-size: 1.5rem;\n  font-weight: 200;\n  position: static;\n  width: 24rem;\n  height: 100%;\n  background: #3f5161;\n  color: #fafafa;;\n  display: -webkit-box;;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 1031;\n}\n.dk-menu-list[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  overflow: auto;\n}\n.dk-search-box[_ngcontent-%COMP%] {\n  line-height: 2.5rem;\n  background-color: #2f3c48;\n  border-width: 1px;\n  border-color: gray;\n}\n.dk-side-menu-collapsed[_ngcontent-%COMP%] {\n  width: 5rem;\n  background: #394958;\n}\n.dk-side-menu-hover[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  visibility: hidden;\n  opacity:0;\n  width: 22rem;\n  left: 6rem;\n  border-radius: 0.3rem;\n  z-index: 1031;\n  overflow: auto;\n  background: #394958;\n  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);\n  bottom: 1rem;\n}\n.dk-side-menu-hover-show[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.3s linear, opacity 0.3s linear;\n  transition: visibility 0.3s linear, opacity 0.3s linear;\n}\n.dk-side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .dk-side-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  line-height: 4rem;\n  cursor: pointer;\n}\n.dk-side-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: #fafafa;\n}\n.dk-menu-search[_ngcontent-%COMP%] {\n  list-style-position: inside;\n  border-bottom: 1px;\n  border-bottom-color: dimgray;\n  border-bottom-style: solid;\n}\n.dk-menu-search-hover[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 45rem;\n}\n.dk-menu-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dk-menu-content-hover[_ngcontent-%COMP%] {\n  z-index: 1031;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  padding-bottom: 1rem;\n}\n.dk-menu-content-hover[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  border-bottom: thin dotted #fafafa;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover {\n  background-color: #4f5b69;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\n  border-left: 4px solid #d19b3d;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.arrow[_ngcontent-%COMP%] {\n  float: right;\n  margin: 1rem !important;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  display: none;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li.menuDisplay[_ngcontent-%COMP%] {\n  display: list-item;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%]{\n  background-color: #465969;\n  border-bottom: 1px solid #4d6377;\n  z-index: 60;\n}\n.dk-menu-content[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\n  border-left: 4px solid #d19b3d;\n  z-index: 60;\n}\n.dk-sub-menu[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n.dk-sub-menu.expended[_ngcontent-%COMP%] {\n  opacity: 1;\n  max-height: 50rem;\n  -webkit-transition: opacity 0.5s, max-height 0.5s;\n  transition: opacity 0.5s, max-height 0.5s;\n}\n.dk-sub-menu.collapsed[_ngcontent-%COMP%] {\n  opacity: 0;\n  max-height: 0;\n  -webkit-transition: opacity 275ms, max-height 0.28s;\n  transition: opacity 275ms, max-height 0.28s;\n}\n.dk-sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #394958;\n  border: none;\n  line-height: 2.8rem;\n  padding-left: 4rem;\n}\n.dk-sub-menu-collapsed[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 3rem;\n  padding-left: 2rem;\n}\n.dk-sub-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{\n  color: #d19b3d;\n}\n.dk-sub-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d19b3d;\n}\n.dk-sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #4f7393;\n}\n.dk-popover-arrow[_ngcontent-%COMP%] {\n  content: \" \";\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  left: 5.5rem;\n  background-color: #394958;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  pointer-events: none;\n  position: absolute;\n  z-index: 1030;\n  visibility: hidden;\n  opacity: 0;\n  \n}\n.dk-popover-arrow-show[_ngcontent-%COMP%] {\n  \n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.3s 10ms linear, opacity 0.3s 0.2s linear;\n  transition: visibility 0.3s 10ms linear, opacity 0.3s 0.2s linear;\n}\n.dk-separator[_ngcontent-%COMP%] {\n  margin: 0.25rem 1rem;\n  height: 1px;\n  min-height: 1px;\n  background-color: #0092d1;\n}\n.dk-menu-bottom[_ngcontent-%COMP%] {\n  display: block;\n  vertical-align: bottom;\n  position: static;\n}\n.dk-menu-bottom[_ngcontent-%COMP%] > .dk-menu-content[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  display: list-item;\n}\n.fas[_ngcontent-%COMP%]{\n  margin:0 1.3rem;\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0QjtFQUNFLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsaUNBQXlCO0VBQXpCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG1CQUFZO1VBQVosWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsK0RBQXVEO0VBQXZELHVEQUF1RDtBQUN6RDtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUF5QjtFQUF6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixpQ0FBeUI7RUFBekIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsaURBQXlDO0VBQXpDLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtREFBMkM7RUFBM0MsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YseUVBQWlFO0VBQWpFLGlFQUFpRTtBQUNuRTtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypTaWRlIE5hdmlnYXRpb24gQmFyKi9cbi5kay1zaWRlLW1lbnUge1xuICBmb250LWZhbWlseTogQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB3aWR0aDogMjRyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzNmNTE2MTtcbiAgY29sb3I6ICNmYWZhZmE7O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB6LWluZGV4OiAxMDMxO1xufVxuLmRrLW1lbnUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZGstc2VhcmNoLWJveCB7XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjNjNDg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGdyYXk7XG59XG4uZGstc2lkZS1tZW51LWNvbGxhcHNlZCB7XG4gIHdpZHRoOiA1cmVtO1xuICBiYWNrZ3JvdW5kOiAjMzk0OTU4O1xufVxuLmRrLXNpZGUtbWVudS1ob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTowO1xuICB3aWR0aDogMjJyZW07XG4gIGxlZnQ6IDZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgei1pbmRleDogMTAzMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMzOTQ5NTg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gIGJvdHRvbTogMXJlbTtcbn1cbi5kay1zaWRlLW1lbnUtaG92ZXItc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4zcyBsaW5lYXIsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4uZGstc2lkZS1tZW51IHVsLFxuLmRrLXNpZGUtbWVudSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kay1zaWRlLW1lbnUgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmFmYWZhO1xufVxuLmRrLW1lbnUtc2VhcmNoIHtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICBib3JkZXItYm90dG9tOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGRpbWdyYXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xufVxuLmRrLW1lbnUtc2VhcmNoLWhvdmVyIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWF4LWhlaWdodDogNDVyZW07XG59XG4uZGstbWVudS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGstbWVudS1jb250ZW50LWhvdmVyIHtcbiAgei1pbmRleDogMTAzMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbi5kay1tZW51LWNvbnRlbnQtaG92ZXI+bGkge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IHRoaW4gZG90dGVkICNmYWZhZmE7XG59XG4uZGstbWVudS1jb250ZW50PmxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNWI2OTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5kay1tZW51LWNvbnRlbnQ+bGk+YTpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2QxOWIzZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hcnJvdyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4uZGstbWVudS1jb250ZW50PmxpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5kay1tZW51LWNvbnRlbnQ+bGkubWVudURpc3BsYXkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG4uZGstbWVudS1jb250ZW50PmxpLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NTk2OTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ZDYzNzc7XG4gIHotaW5kZXg6IDYwO1xufVxuLmRrLW1lbnUtY29udGVudD5saS5hY3RpdmU+YXtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZDE5YjNkO1xuICB6LWluZGV4OiA2MDtcbn1cbi5kay1zdWItbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRrLXN1Yi1tZW51LmV4cGVuZGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgbWF4LWhlaWdodDogNTByZW07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cywgbWF4LWhlaWdodCAwLjVzO1xufVxuLmRrLXN1Yi1tZW51LmNvbGxhcHNlZCB7XG4gIG9wYWNpdHk6IDA7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjc1bXMsIG1heC1oZWlnaHQgMC4yOHM7XG59XG4uZGstc3ViLW1lbnUgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0OTU4O1xuICBib3JkZXI6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cbi5kay1zdWItbWVudS1jb2xsYXBzZWQgbGkge1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuLmRrLXN1Yi1tZW51IGxpLmFjdGl2ZXtcbiAgY29sb3I6ICNkMTliM2Q7XG59XG4uZGstc3ViLW1lbnUgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogI2QxOWIzZDtcbn1cbi5kay1zdWItbWVudSBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjczOTM7XG59XG4uZGstcG9wb3Zlci1hcnJvdyB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbGVmdDogNS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0OTU4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDMwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIC8qdHJhbnNpdGlvbjogbm9uZTsqL1xufVxuLmRrLXBvcG92ZXItYXJyb3ctc2hvdyB7XG4gIC8qd2lkdGg6IDFyZW07Ki9cbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjNzIDEwbXMgbGluZWFyLCBvcGFjaXR5IDAuM3MgMC4ycyBsaW5lYXI7XG59XG4uZGstc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwLjI1cmVtIDFyZW07XG4gIGhlaWdodDogMXB4O1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDkyZDE7XG59XG4uZGstbWVudS1ib3R0b20ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cbi5kay1tZW51LWJvdHRvbT4uZGstbWVudS1jb250ZW50PmxpIHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuLmZhc3tcbiAgbWFyZ2luOjAgMS4zcmVtO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-menu',
          templateUrl: './side-menu.component.html',
          styleUrls: ['./side-menu.component.css']
        }]
      }], function () {
        return [{
          type: _identity_service__WEBPACK_IMPORTED_MODULE_7__["IdentityService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _share_service__WEBPACK_IMPORTED_MODULE_9__["ShareService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        sideMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sideMenu', {
            "static": true
          }]
        }],
        mousemoveDocument: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mousemove', ['$event', 'mouseLocs']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/user-detail/async-validators.ts":
  /*!******************************************************!*\
    !*** ./src/app/user/user-detail/async-validators.ts ***!
    \******************************************************/

  /*! exports provided: existingUserNameValidator, existingUserIDValidator */

  /***/
  function srcAppUserUserDetailAsyncValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "existingUserNameValidator", function () {
      return existingUserNameValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "existingUserIDValidator", function () {
      return existingUserIDValidator;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function existingUserNameValidator(identityService, messageService, userID) {
      return function (control) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () {
          return identityService.getUserByUserName(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data['r_user'] && data['r_user'][0]['USER_ID'] !== userID) {
              return {
                message: messageService.generateMessage('USER', 'USER_NAME_EXISTS', 'E', control.value).msgShortText
              };
            } else {
              return null;
            }
          }));
        }));
      };
    }

    function existingUserIDValidator(identityService, messageService) {
      return function (control) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () {
          return identityService.getUserByUserID(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data['r_user'] && data['r_user'][0]['USER_ID'] === control.value) {
              return {
                message: messageService.generateMessage('USER', 'USER_ID_EXISTS', 'E', control.value).msgShortText
              };
            } else {
              return null;
            }
          }));
        }));
      };
    }
    /***/

  },

  /***/
  "./src/app/user/user-detail/user-address/user-address.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/user/user-detail/user-address/user-address.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UserAddressComponent */

  /***/
  function srcAppUserUserDetailUserAddressUserAddressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAddressComponent", function () {
      return UserAddressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jor-angular */
    "./node_modules/jor-angular/__ivy_ngcc__/fesm2015/jor-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserAddressComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAddressComponent_div_2_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

          var i_r122 = ctx.index;

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r123.deleteAddress(i_r122);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

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
      }

      if (rf & 2) {
        var userAddressForm_r121 = ctx.$implicit;

        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userAddressForm_r121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r120.getAttrCtrlFromID("TYPE"))("formGroup", userAddressForm_r121)("readonly", ctx_r120.readonly);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r120.getAttrCtrlFromID("ADDRESS_VALUE"))("formGroup", userAddressForm_r121)("readonly", ctx_r120.readonly);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r120.getAttrCtrlFromID("POSTCODE"))("formGroup", userAddressForm_r121)("readonly", ctx_r120.readonly);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r120.getAttrCtrlFromID("CITY"))("formGroup", userAddressForm_r121)("readonly", ctx_r120.readonly);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r120.getAttrCtrlFromID("COUNTRY"))("formGroup", userAddressForm_r121)("readonly", ctx_r120.readonly);
      }
    }

    var UserAddressComponent =
    /*#__PURE__*/
    function () {
      function UserAddressComponent(fb, attributeControlService) {
        _classCallCheck(this, UserAddressComponent);

        this.fb = fb;
        this.attributeControlService = attributeControlService;
      }

      _createClass(UserAddressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userAddressFormArray = this.userForm.get('addresses');
          this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(function (relationMeta) {
            return relationMeta.RELATION_ID === 'r_address';
          }).ATTRIBUTES);
        }
      }, {
        key: "getAttrCtrlFromID",
        value: function getAttrCtrlFromID(fieldName) {
          return this.attrCtrls.find(function (attrCtrl) {
            return attrCtrl.name === fieldName;
          });
        }
      }, {
        key: "addAddress",
        value: function addAddress() {
          var addressFormGroup = this.fb.group({
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
      }, {
        key: "deleteAddress",
        value: function deleteAddress(index) {
          if (this.userAddressFormArray.length > 1 && this.userAddressFormArray.at(index).value['PRIMARY']) {
            var newPrimaryIndex = index === 0 ? 1 : 0;
            this.userAddressFormArray.at(newPrimaryIndex).get('PRIMARY').setValue(1);
            this.userAddressFormArray.at(newPrimaryIndex).get('PRIMARY').markAsDirty();
          }

          this.userAddressFormArray.removeAt(index);
          this.userAddressFormArray.markAsDirty();
        }
      }]);

      return UserAddressComponent;
    }();

    UserAddressComponent.ɵfac = function UserAddressComponent_Factory(t) {
      return new (t || UserAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]));
    };

    UserAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserAddressComponent,
      selectors: [["app-user-address"]],
      inputs: {
        readonly: "readonly",
        userForm: "userForm",
        relationMetas: "relationMetas"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "card", "mt-4"], [1, "card-body"], ["class", "card mb-4", 4, "ngFor", "ngForOf"], ["type", "button", "id", "add", 1, "btn", "btn-primary", "float-right", 3, "disabled", "click"], [1, "card", "mb-4"], ["type", "button", "id", "remove", "aria-label", "Close", 1, "dk-close-button", "close", "d-flex", "justify-content-end", "mr-2", 3, "click"], ["aria-hidden", "true"], [1, "card-body", "row", 3, "formGroup"], [1, "col-3", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"], [1, "col-6", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"], [1, "col-1", "row", "form-group", "mr-2"], ["for", "primaryAddress", 1, "col-form-label", "dk-form-label"], ["type", "radio", "id", "primaryAddress", "name", "PRIMARY", "formControlName", "PRIMARY", 1, "form-control", 3, "value"], [1, "col-md-3", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"]],
      template: function UserAddressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAddressComponent_div_2_Template, 14, 17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAddressComponent_Template_button_click_3_listener($event) {
            return ctx.addAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userAddressFormArray.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1hZGRyZXNzL3VzZXItYWRkcmVzcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-address',
          templateUrl: './user-address.component.html',
          styleUrls: ['./user-address.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]
        }];
      }, {
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        userForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        relationMetas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/user-detail/user-basic/user-basic.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/user/user-detail/user-basic/user-basic.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UserBasicComponent */

  /***/
  function srcAppUserUserDetailUserBasicUserBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserBasicComponent", function () {
      return UserBasicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jor-angular */
    "./node_modules/jor-angular/__ivy_ngcc__/fesm2015/jor-angular.js");

    var UserBasicComponent =
    /*#__PURE__*/
    function () {
      function UserBasicComponent(attributeControlService) {
        _classCallCheck(this, UserBasicComponent);

        this.attributeControlService = attributeControlService;
      }

      _createClass(UserBasicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userBasicNamesForm = this.userForm.get('userBasic.names');
          this.userBasicEmployeeForm = this.userForm.get('userBasic.employee');
          this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(function (relationMeta) {
            return relationMeta.RELATION_ID === 'r_employee';
          }).ATTRIBUTES);
          this.attrCtrls = this.attrCtrls.concat(this.attributeControlService.toAttributeControl(this.relationMetas.find(function (relationMeta) {
            return relationMeta.RELATION_ID === 'r_user';
          }).ATTRIBUTES));
        }
      }, {
        key: "getAttrCtrlFromID",
        value: function getAttrCtrlFromID(fieldName) {
          return this.attrCtrls.find(function (attrCtrl) {
            return attrCtrl.name === fieldName;
          });
        }
      }]);

      return UserBasicComponent;
    }();

    UserBasicComponent.ɵfac = function UserBasicComponent_Factory(t) {
      return new (t || UserBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]));
    };

    UserBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserBasicComponent,
      selectors: [["app-user-basic"]],
      inputs: {
        readonly: "readonly",
        userForm: "userForm",
        relationMetas: "relationMetas"
      },
      decls: 20,
      vars: 27,
      consts: [[1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], [1, "mt-2", "row"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"], [1, "col-md-4"]],
      template: function UserBasicComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]],
      styles: [".dk-form-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLWJhc2ljL3VzZXItYmFzaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1iYXNpYy91c2VyLWJhc2ljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-basic',
          templateUrl: './user-basic.component.html',
          styleUrls: ['./user-basic.component.css']
        }]
      }], function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]
        }];
      }, {
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        userForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        relationMetas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/user-detail/user-detail.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/user/user-detail/user-detail.component.ts ***!
    \***********************************************************/

  /*! exports provided: UserDetailComponent */

  /***/
  function srcAppUserUserDetailUserDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () {
      return UserDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ui_message_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ui-message-angular */
    "./node_modules/ui-message-angular/__ivy_ngcc__/fesm2015/ui-message-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../identity.service */
    "./src/app/identity.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jor-angular */
    "./node_modules/jor-angular/__ivy_ngcc__/fesm2015/jor-angular.js");
    /* harmony import */


    var _async_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./async-validators */
    "./src/app/user/user-detail/async-validators.ts");
    /* harmony import */


    var _dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../dialog.service */
    "./src/app/dialog.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user-basic/user-basic.component */
    "./src/app/user/user-detail/user-basic/user-basic.component.ts");
    /* harmony import */


    var _user_email_user_email_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user-email/user-email.component */
    "./src/app/user/user-detail/user-email/user-email.component.ts");
    /* harmony import */


    var _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-address/user-address.component */
    "./src/app/user/user-detail/user-address/user-address.component.ts");
    /* harmony import */


    var _user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./user-personalization/user-personalization.component */
    "./src/app/user/user-detail/user-personalization/user-personalization.component.ts");
    /* harmony import */


    var _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user-role/user-role.component */
    "./src/app/user/user-detail/user-role/user-role.component.ts");

    function UserDetailComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDetailComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDetailComponent_div_13_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Locked");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDetailComponent_div_13_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unlocked");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDetailComponent_div_13_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Initial");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDetailComponent_div_13_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDetailComponent_div_13_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Renew");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserDetailComponent_div_13_app_user_basic_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-basic", 34);
      }

      if (rf & 2) {
        var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userForm", ctx_r90.userForm)("relationMetas", ctx_r90.relationMetas)("readonly", ctx_r90.readonly);
      }
    }

    function UserDetailComponent_div_13_app_user_email_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-email", 34);
      }

      if (rf & 2) {
        var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userForm", ctx_r91.userForm)("relationMetas", ctx_r91.relationMetas)("readonly", ctx_r91.readonly);
      }
    }

    function UserDetailComponent_div_13_app_user_address_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-address", 34);
      }

      if (rf & 2) {
        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userForm", ctx_r92.userForm)("relationMetas", ctx_r92.relationMetas)("readonly", ctx_r92.readonly);
      }
    }

    function UserDetailComponent_div_13_app_user_personalization_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-personalization", 34);
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userForm", ctx_r93.userForm)("relationMetas", ctx_r93.relationMetas)("readonly", ctx_r93.readonly);
      }
    }

    function UserDetailComponent_div_13_app_user_role_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-role", 35);
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userForm", ctx_r94.userForm)("readonly", ctx_r94.readonly);
      }
    }

    function UserDetailComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lock Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserDetailComponent_div_13_span_7_Template, 2, 0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserDetailComponent_div_13_span_8_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserDetailComponent_div_13_div_13_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserDetailComponent_div_13_div_14_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserDetailComponent_div_13_div_15_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r95.switchTabStrip(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.switchTabStrip(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r98.switchTabStrip(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r99.switchTabStrip(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Personalization");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r100.switchTabStrip(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Role");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UserDetailComponent_div_13_app_user_basic_33_Template, 1, 3, "app-user-basic", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UserDetailComponent_div_13_app_user_email_34_Template, 1, 3, "app-user-email", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserDetailComponent_div_13_app_user_address_35_Template, 1, 3, "app-user-address", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UserDetailComponent_div_13_app_user_personalization_36_Template, 1, 3, "app-user-personalization", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserDetailComponent_div_13_app_user_role_37_Template, 1, 2, "app-user-role", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r84.getAttrCtrlFromID("USER_ID"))("formGroup", ctx_r84.userForm)("readonly", !ctx_r84.isNewMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r84.userForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r84.userForm.get("LOCK").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r84.userForm.get("LOCK").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r84.userForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r84.userForm.get("PWD_STATUS").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r84.tabStrip === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r84.tabStrip === 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r84.tabStrip === 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r84.tabStrip === 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r84.tabStrip === 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r84.tabStrip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 5);
      }
    }

    var UserDetailComponent =
    /*#__PURE__*/
    function () {
      function UserDetailComponent(fb, route, router, dialogService, identityService, attributeControlService, entityService, uiMapperService, messageService) {
        _classCallCheck(this, UserDetailComponent);

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

      _createClass(UserDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            _this10.action = params.get('action');

            if (_this10.action === 'new') {
              _this10.isNewMode = true;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([_this10.entityService.getRelationMetaOfEntity('person'), _this10._createNewUser()]);
            } else {
              _this10.isNewMode = false;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([_this10.entityService.getRelationMetaOfEntity('person'), _this10.identityService.getUserDetail(params.get('userID'))]);
            }
          })).subscribe(function (data) {
            _this10.relationMetas = data[0];
            _this10.attrCtrls = _this10.attributeControlService.toAttributeControl(_this10.relationMetas.find(function (relationMeta) {
              return relationMeta.RELATION_ID === 'r_user';
            }).ATTRIBUTES);

            if ('ENTITY_ID' in data[1]) {
              _this10.instanceGUID = data[1]['INSTANCE_GUID'];

              _this10._generateUserForm(data[1]);

              if (_this10.isNewMode || _this10.action === 'change') {
                _this10._switch2EditMode();
              } else {
                _this10._switch2DisplayMode();
              }
            } else {
              var errorMessages = data[1];
              errorMessages.forEach(function (msg) {
                return _this10.messageService.add(msg);
              });
            }
          });
        }
      }, {
        key: "getAttrCtrlFromID",
        value: function getAttrCtrlFromID(fieldName) {
          return this.attrCtrls.find(function (attrCtrl) {
            return attrCtrl.name === fieldName;
          });
        }
      }, {
        key: "switchTabStrip",
        value: function switchTabStrip(tabStripID) {
          this.tabStrip = tabStripID;
        }
      }, {
        key: "switchEditDisplay",
        value: function switchEditDisplay() {
          var _this11 = this;

          if (this.readonly) {
            this._switch2EditMode();
          } else {
            if (this.userForm.dirty) {
              this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                if (confirm) {
                  _this11.userForm.reset(_this11.originalUserValue);

                  _this11._switch2DisplayMode();
                }
              });
            } else {
              this._switch2DisplayMode();
            }
          }

          this.messageService.clearMessages();
        }
      }, {
        key: "_switch2DisplayMode",
        value: function _switch2DisplayMode() {
          this.readonly = true;

          this._setCheckBoxState();

          var userIDCtrl = this.userForm.get('USER_ID');
          userIDCtrl.clearAsyncValidators();
          var userNameCtrl = this.userForm.get('userBasic.names.USER_NAME');
          userNameCtrl.clearAsyncValidators();
          var emailArray = this.userForm.get('emails');
          var lastIndex = emailArray.length - 1;

          while (lastIndex >= 0) {
            var emailFormGroup = emailArray.at(lastIndex);

            if (emailFormGroup.invalid || !emailFormGroup.value.EMAIL) {
              emailArray.removeAt(lastIndex);
            }

            lastIndex--;
          }

          var addressArray = this.userForm.get('addresses');
          lastIndex = addressArray.length - 1;

          while (lastIndex >= 0) {
            var addressFormGroup = addressArray.at(lastIndex);

            if (addressFormGroup.invalid || !addressFormGroup.value.ADDRESS_VALUE) {
              addressArray.removeAt(lastIndex);
            }

            lastIndex--;
          }

          var roleArray = this.userForm.get('userRole');
          lastIndex = roleArray.length - 1;

          while (lastIndex >= 0) {
            var roleFormGroup = roleArray.at(lastIndex);

            if (roleFormGroup.invalid || !roleFormGroup.value.NAME) {
              roleArray.removeAt(lastIndex);
            }

            lastIndex--;
          }

          this.userForm.markAsPristine(); // Replace the URL from change to display

          window.history.replaceState({}, '', "/users/".concat(userIDCtrl.value, ";action=display"));
        }
      }, {
        key: "_switch2EditMode",
        value: function _switch2EditMode() {
          this.readonly = false;

          this._setCheckBoxState();

          var userIDCtrl = this.userForm.get('USER_ID');

          if (this.isNewMode) {
            userIDCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_8__["existingUserIDValidator"])(this.identityService, this.messageService));
          }

          var userNameCtrl = this.userForm.get('userBasic.names.USER_NAME');
          userNameCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_8__["existingUserNameValidator"])(this.identityService, this.messageService, this.userForm.get('USER_ID').value));
          var roleArray = this.userForm.get('userRole');
          roleArray.push(this.fb.group({
            NAME: [''],
            DESCRIPTION: [''],
            system_role_INSTANCE_GUID: [''],
            RELATIONSHIP_INSTANCE_GUID: ['']
          })); // Replace the URL from to display

          if (this.action === 'display') {
            this.action = 'change';
          }

          window.history.replaceState({}, '', "/users/".concat(userIDCtrl.value, ";action=") + this.action);
        }
      }, {
        key: "_createNewUser",
        value: function _createNewUser() {
          var userDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_7__["Entity"]();
          userDetail['ENTITY_ID'] = 'person';
          userDetail['r_user'] = [{
            USER_ID: '',
            LOCK: 0,
            PWD_STATUS: '',
            USER_NAME: '',
            DISPLAY_NAME: '',
            GIVEN_NAME: '',
            MIDDLE_NAME: '',
            FAMILY_NAME: ''
          }];
          userDetail['r_employee'] = [{
            TITLE: '',
            DEPARTMENT_ID: '',
            COMPANY_ID: '',
            GENDER: ''
          }];
          userDetail['r_email'] = [];
          userDetail['r_personalization'] = [{
            USER_ID: '',
            LANGUAGE: '',
            TIMEZONE: '',
            DECIMAL_FORMAT: '',
            DATE_FORMAT: ''
          }];
          userDetail['relationships'] = [];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(userDetail);
        }
      }, {
        key: "_generateUserForm",
        value: function _generateUserForm(data) {
          var _this12 = this;

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
          var emailArray = this.userForm.get('emails');
          data['r_email'].forEach(function (email) {
            emailArray.push(_this12.fb.group({
              EMAIL: [email['EMAIL'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              TYPE: [email['TYPE'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              PRIMARY: [email['PRIMARY']]
            }));
          });
          var addressArray = this.userForm.get('addresses');

          if (data['r_address']) {
            data['r_address'].forEach(function (address) {
              addressArray.push(_this12.fb.group({
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

          var roleArray = this.userForm.get('userRole');
          var userRoleRelationship = data['relationships'][0];

          if (userRoleRelationship) {
            userRoleRelationship.values.forEach(function (value) {
              var roleInstance = value.PARTNER_INSTANCES[0];
              roleArray.push(_this12.fb.group({
                NAME: [roleInstance['r_role'][0]['NAME']],
                DESCRIPTION: [roleInstance['r_role'][0]['DESCRIPTION']],
                system_role_INSTANCE_GUID: [roleInstance['INSTANCE_GUID']],
                RELATIONSHIP_INSTANCE_GUID: [value['RELATIONSHIP_INSTANCE_GUID']]
              }));
            });
          }

          this.originalUserValue = this.userForm.getRawValue();
        }
      }, {
        key: "_resetUserValue",
        value: function _resetUserValue(data) {
          var _this13 = this;

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
          data['r_email'].forEach(function (email) {
            _this13.originalUserValue['emails'].push({
              EMAIL: email['EMAIL'],
              TYPE: email['TYPE'],
              PRIMARY: email['PRIMARY']
            });
          });

          if (data['r_address']) {
            data['r_address'].forEach(function (address) {
              _this13.originalUserValue['addresses'].push({
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

          var userRoleRelationship = data['relationships'][0];

          if (userRoleRelationship) {
            userRoleRelationship.values.forEach(function (value) {
              var roleInstance = value.PARTNER_INSTANCES[0];

              _this13.originalUserValue['userRole'].push({
                NAME: [roleInstance['r_role'][0]['NAME']],
                DESCRIPTION: [roleInstance['r_role'][0]['DESCRIPTION']],
                system_role_INSTANCE_GUID: [roleInstance['INSTANCE_GUID']],
                RELATIONSHIP_INSTANCE_GUID: [value['RELATIONSHIP_INSTANCE_GUID']]
              });
            });
          }

          this.userForm.reset(this.originalUserValue);
        }
      }, {
        key: "_setCheckBoxState",
        value: function _setCheckBoxState() {
          var userEmailFormArray = this.userForm.get('emails');
          var userAddressFormArray = this.userForm.get('addresses');
          var userEmployeeForm = this.userForm.get('userBasic').get('employee');
          var userPersonalizationForm = this.userForm.get('userPersonalization');

          if (this.readonly) {
            userEmailFormArray.controls.forEach(function (userEmailForm) {
              userEmailForm.get('PRIMARY').disable();
              userEmailForm.get('TYPE').disable();
            });
            userAddressFormArray.controls.forEach(function (userAddressForm) {
              userAddressForm.get('PRIMARY').disable();
              userAddressForm.get('TYPE').disable();
            });
            userEmployeeForm.get('GENDER').disable();
            userPersonalizationForm.get('LANGUAGE').disable();
            userPersonalizationForm.get('TIMEZONE').disable();
            userPersonalizationForm.get('DECIMAL_FORMAT').disable();
            userPersonalizationForm.get('DATE_FORMAT').disable();
          } else {
            userEmailFormArray.controls.forEach(function (userEmailForm) {
              userEmailForm.get('PRIMARY').enable();
              userEmailForm.get('TYPE').enable();
            });
            userAddressFormArray.controls.forEach(function (userAddressForm) {
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
      }, {
        key: "save",
        value: function save() {
          var _this14 = this;

          this.messageService.clearMessages();

          if (this._composeChangesToUser()) {
            this.identityService.saveUser(this.changedUser).subscribe(function (data) {
              _this14.changedUser = {};

              if ('INSTANCE_GUID' in data) {
                var userID = data['r_user'][0]['USER_ID'];
                _this14.instanceGUID = data['INSTANCE_GUID'];
                _this14.isNewMode = false;

                _this14.identityService.getUserDetail(userID).subscribe(function (userData) {
                  if ('ENTITY_ID' in userData) {
                    _this14._switch2DisplayMode();

                    _this14._resetUserValue(userData);
                  } else {
                    var errorMessages = userData;
                    errorMessages.forEach(function (msg) {
                      return _this14.messageService.add(msg);
                    });
                  }
                });

                _this14.messageService.reportMessage('USER', 'USER_SAVED', 'S', userID);
              } else {
                var errorMessages = data;
                errorMessages.forEach(function (msg) {
                  return _this14.messageService.add(msg);
                });
              }
            });
          }
        }
      }, {
        key: "_composeChangesToUser",
        value: function _composeChangesToUser() {
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
            this.changedUser['person'] = {
              action: 'add',
              TYPE: 'employee',
              SYSTEM_ACCESS: 'PORTAL'
            };
          }

          var userBasicFormGroup = this.userForm.get('userBasic');
          var userID = this.userForm.get('USER_ID').value;

          if (userBasicFormGroup.dirty) {
            var userBasicNamesFormGroup = userBasicFormGroup.get('names');
            this.changedUser['r_user'] = this.uiMapperService.composeChangedRelation(userBasicNamesFormGroup, {
              USER_ID: userID
            }, this.isNewMode);
            var userBasicEmployeeFormGroup = userBasicFormGroup.get('employee');
            this.changedUser['r_employee'] = this.uiMapperService.composeChangedRelation(userBasicEmployeeFormGroup, {
              USER_ID: userID
            }, this.isNewMode);
          }

          var userEmailFormArray = this.userForm.get('emails');
          this.changedUser['r_email'] = this.uiMapperService.composeChangedRelationArray(userEmailFormArray, this.originalUserValue['emails'], {
            EMAIL: null
          });
          var userAddressFormArray = this.userForm.get('addresses');
          this.changedUser['r_address'] = this.uiMapperService.composeChangedRelationArray(userAddressFormArray, this.originalUserValue['addresses'], {
            ADDRESS_ID: null
          });
          var userPersonalizationFormGroup = this.userForm.get('userPersonalization');
          this.changedUser['r_personalization'] = this.uiMapperService.composeChangedRelation(userPersonalizationFormGroup, {
            USER_ID: userID
          }, !userPersonalizationFormGroup.get('USER_ID').value);
          var userRoleFormArray = this.userForm.get('userRole');
          var relationship = this.uiMapperService.composeChangedRelationship('rs_user_role', [{
            ENTITY_ID: 'permission',
            ROLE_ID: 'system_role'
          }], userRoleFormArray, this.originalUserValue['userRole'], ['NAME', 'DESCRIPTION']);

          if (relationship) {
            this.changedUser['relationships'] = [relationship];
          }

          return true;
        }
      }, {
        key: "canDeactivate",
        value: function canDeactivate() {
          if (this.isNewMode || this.userForm && this.userForm.dirty) {
            return this.dialogService.confirm('Discard changes?');
          } else {
            return true;
          }
        }
      }, {
        key: "pwdStatus",
        get: function get() {
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
      }]);

      return UserDetailComponent;
    }();

    UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) {
      return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_7__["AttributeControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_7__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_7__["UiMapperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_3__["MessageService"]));
    };

    UserDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserDetailComponent,
      selectors: [["app-user-detail"]],
      decls: 14,
      vars: 5,
      consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-lg", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-lg", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"], [1, "col-md-6", "col-lg-4", "row", "form-group", "mr-2", 3, "formGroup"], ["for", "lockStatus", 1, "col-form-label", "dk-form-label"], ["id", "lockStatus", 1, "form-control", "dk-icon"], ["class", "fas fa-lock", 4, "ngIf"], ["class", "fas fa-lock-open", 4, "ngIf"], ["for", "passwordStatus", 1, "col-form-label", "dk-form-label"], ["id", "passwordStatus", 1, "form-control", "dk-icon", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "userForm", "relationMetas", "readonly", 4, "ngSwitchCase"], [3, "userForm", "readonly", 4, "ngSwitchCase"], [1, "fas", "fa-lock"], [1, "fas", "fa-lock-open"], [1, "badge", "badge-primary"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"], [3, "userForm", "relationMetas", "readonly"], [3, "userForm", "readonly"]],
      template: function UserDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_5_listener($event) {
            return ctx.switchEditDisplay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserDetailComponent_span_6_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserDetailComponent_span_7_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_8_listener($event) {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dk-message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserDetailComponent_div_13_Template, 38, 26, "div", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isNewMode ? "New User" : ctx.readonly ? "Display User" : "Change User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ui_message_angular__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], jor_angular__WEBPACK_IMPORTED_MODULE_7__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_11__["UserBasicComponent"], _user_email_user_email_component__WEBPACK_IMPORTED_MODULE_12__["UserEmailComponent"], _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_13__["UserAddressComponent"], _user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_14__["UserPersonalizationComponent"], _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_15__["UserRoleComponent"]],
      styles: [".dk-btn-size[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.dk-form-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.dk-fixed-top[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 500;\n}\n.dk-icon[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstYnRuLXNpemUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5kay1mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uZGstZml4ZWQtdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1MDA7XG59XG4uZGstaWNvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-detail',
          templateUrl: './user-detail.component.html',
          styleUrls: ['./user-detail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_7__["AttributeControlService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_7__["EntityService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_7__["UiMapperService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user-detail/user-email/user-email.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/user/user-detail/user-email/user-email.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UserEmailComponent */

  /***/
  function srcAppUserUserDetailUserEmailUserEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEmailComponent", function () {
      return UserEmailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ui-message-angular */
    "./node_modules/ui-message-angular/__ivy_ngcc__/fesm2015/ui-message-angular.js");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jor-angular */
    "./node_modules/jor-angular/__ivy_ngcc__/fesm2015/jor-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserEmailComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEmailComponent_div_2_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var i_r117 = ctx.index;

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r118.deleteEmail(i_r117);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

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
      }

      if (rf & 2) {
        var userEmailForm_r116 = ctx.$implicit;

        var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userEmailForm_r116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r115.getAttrCtrlFromID("TYPE"))("formGroup", userEmailForm_r116)("readonly", ctx_r115.readonly);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r115.getAttrCtrlFromID("EMAIL"))("formGroup", userEmailForm_r116)("readonly", ctx_r115.readonly);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
      }
    }

    var UserEmailComponent =
    /*#__PURE__*/
    function () {
      function UserEmailComponent(fb, messageService, attributeControlService) {
        _classCallCheck(this, UserEmailComponent);

        this.fb = fb;
        this.messageService = messageService;
        this.attributeControlService = attributeControlService;
      }

      _createClass(UserEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userEmailFormArray = this.userForm.get('emails');
          this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(function (relationMeta) {
            return relationMeta.RELATION_ID === 'r_email';
          }).ATTRIBUTES);

          if (!this.readonly && this.userEmailFormArray.length === 0) {
            this.addEmail();
          }
        }
      }, {
        key: "getAttrCtrlFromID",
        value: function getAttrCtrlFromID(fieldName) {
          return this.attrCtrls.find(function (attrCtrl) {
            return attrCtrl.name === fieldName;
          });
        }
      }, {
        key: "addEmail",
        value: function addEmail() {
          var emailFormGroup = this.fb.group({
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
      }, {
        key: "deleteEmail",
        value: function deleteEmail(index) {
          if (this.userEmailFormArray.length === 1) {
            this.messageService.reportMessage('USER', 'AT_LEAST_ONE_EMAIL', 'E');
          } else {
            if (this.userEmailFormArray.at(index).value['PRIMARY']) {
              var newPrimaryIndex = index === 0 ? 1 : 0;
              this.userEmailFormArray.at(newPrimaryIndex).get('PRIMARY').setValue(1);
              this.userEmailFormArray.at(newPrimaryIndex).get('PRIMARY').markAsDirty();
            }

            this.userEmailFormArray.removeAt(index);
            this.userEmailFormArray.markAsDirty();
          }
        }
      }]);

      return UserEmailComponent;
    }();

    UserEmailComponent.ɵfac = function UserEmailComponent_Factory(t) {
      return new (t || UserEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeControlService"]));
    };

    UserEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserEmailComponent,
      selectors: [["app-user-email"]],
      inputs: {
        readonly: "readonly",
        userForm: "userForm",
        relationMetas: "relationMetas"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "card", "mt-4"], [1, "card-body"], ["class", "card mb-4", 4, "ngFor", "ngForOf"], ["type", "button", "id", "add", 1, "btn", "btn-primary", "float-right", 3, "disabled", "click"], [1, "card", "mb-4"], ["type", "button", "id", "remove", "aria-label", "Close", 1, "dk-close-button", "close", "d-flex", "justify-content-end", "mr-2", 3, "click"], ["aria-hidden", "true"], [1, "card-body", "row", 3, "formGroup"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"], [1, "col-1", "row", "form-group", "mr-2"], ["for", "primaryEmail", 1, "col-form-label", "dk-form-label"], ["type", "radio", "id", "primaryEmail", "name", "PRIMARY", "formControlName", "PRIMARY", 1, "form-control", 3, "value"]],
      template: function UserEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserEmailComponent_div_2_Template, 11, 8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEmailComponent_Template_button_click_3_listener($event) {
            return ctx.addEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userEmailFormArray.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1lbWFpbC91c2VyLWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-email',
          templateUrl: './user-email.component.html',
          styleUrls: ['./user-email.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeControlService"]
        }];
      }, {
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        userForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        relationMetas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/user-detail/user-personalization/user-personalization.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/user/user-detail/user-personalization/user-personalization.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: UserPersonalizationComponent */

  /***/
  function srcAppUserUserDetailUserPersonalizationUserPersonalizationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPersonalizationComponent", function () {
      return UserPersonalizationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jor-angular */
    "./node_modules/jor-angular/__ivy_ngcc__/fesm2015/jor-angular.js");

    var UserPersonalizationComponent =
    /*#__PURE__*/
    function () {
      function UserPersonalizationComponent(attributeControlService) {
        _classCallCheck(this, UserPersonalizationComponent);

        this.attributeControlService = attributeControlService;
      }

      _createClass(UserPersonalizationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userPersonalizationForm = this.userForm.get('userPersonalization');
          this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(function (relationMeta) {
            return relationMeta.RELATION_ID === 'r_personalization';
          }).ATTRIBUTES);
        }
      }, {
        key: "getAttrCtrlFromID",
        value: function getAttrCtrlFromID(fieldName) {
          return this.attrCtrls.find(function (attrCtrl) {
            return attrCtrl.name === fieldName;
          });
        }
      }]);

      return UserPersonalizationComponent;
    }();

    UserPersonalizationComponent.ɵfac = function UserPersonalizationComponent_Factory(t) {
      return new (t || UserPersonalizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]));
    };

    UserPersonalizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserPersonalizationComponent,
      selectors: [["app-user-personalization"]],
      inputs: {
        readonly: "readonly",
        userForm: "userForm",
        relationMetas: "relationMetas"
      },
      decls: 5,
      vars: 12,
      consts: [[1, "mt-4", "ml-2", "row"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "readonly"]],
      template: function UserPersonalizationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dk-app-attribute-form2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dk-app-attribute-form2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dk-app-attribute-form2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("LANGUAGE"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("TIMEZONE"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DECIMAL_FORMAT"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DATE_FORMAT"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]],
      styles: [".dk-form-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLXBlcnNvbmFsaXphdGlvbi91c2VyLXBlcnNvbmFsaXphdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLXBlcnNvbmFsaXphdGlvbi91c2VyLXBlcnNvbmFsaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWZvcm0tbGFiZWwge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPersonalizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-personalization',
          templateUrl: './user-personalization.component.html',
          styleUrls: ['./user-personalization.component.css']
        }]
      }], function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]
        }];
      }, {
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        userForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        relationMetas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/user-detail/user-role/user-role.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/user/user-detail/user-role/user-role.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserRoleComponent */

  /***/
  function srcAppUserUserDetailUserRoleUserRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoleComponent", function () {
      return UserRoleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../identity.service */
    "./src/app/identity.service.ts");
    /* harmony import */


    var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jor-angular */
    "./node_modules/jor-angular/__ivy_ngcc__/fesm2015/jor-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserRoleComponent_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserRoleComponent_tr_10_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var i_r110 = ctx.index;

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r111.onChangeRoleID(i_r110);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRoleComponent_tr_10_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var i_r110 = ctx.index;
          var userRoleForm_r109 = ctx.$implicit;

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r113.onSearchHelp(i_r110, userRoleForm_r109);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRoleComponent_tr_10_Template_button_click_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var i_r110 = ctx.index;

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r114.deleteRole(i_r110);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var userRoleForm_r109 = ctx.$implicit;

        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userRoleForm_r109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r108.readonly || ctx_r108.oldRole(userRoleForm_r109) && userRoleForm_r109.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userRoleForm_r109.get("NAME").errors == null ? null : userRoleForm_r109.get("NAME").errors.message, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userRoleForm_r109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r108.readonly);
      }
    }

    var UserRoleComponent =
    /*#__PURE__*/
    function () {
      function UserRoleComponent(fb, identityService) {
        _classCallCheck(this, UserRoleComponent);

        this.fb = fb;
        this.identityService = identityService;
      }

      _createClass(UserRoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.userRoleFormArray = this.userForm.get('userRole'); // Recheck each role since every time the template is initialized, Angular clears the error status.

          if (!this.readonly) {
            this.userRoleFormArray.controls.forEach(function (ctrl, index) {
              _this15.onChangeRoleID(index);
            });
          }
        }
      }, {
        key: "deleteRole",
        value: function deleteRole(index) {
          if (index !== this.userRoleFormArray.length - 1) {
            this.userRoleFormArray.removeAt(index);
            this.userRoleFormArray.markAsDirty();
          }
        }
      }, {
        key: "onChangeRoleID",
        value: function onChangeRoleID(index) {
          var currentRole = this.userRoleFormArray.at(index);

          if (this.oldRole(currentRole)) {
            currentRole.get('NAME').setErrors({
              message: 'Duplicate Role'
            });
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
            this.identityService.getRoleDesc(currentRole.value.NAME).subscribe(function (data) {
              if (data['msgCat']) {
                currentRole.get('NAME').setErrors({
                  message: data['msgShortText']
                });
              } else {
                currentRole.get('DESCRIPTION').setValue(data['DESCRIPTION']);
                currentRole.get('system_role_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);
              }
            });
          }
        }
      }, {
        key: "oldRole",
        value: function oldRole(userRoleForm) {
          var existIndex = this.userRoleFormArray.controls.findIndex(function (role) {
            return role.value.NAME === userRoleForm.value.NAME && role.pristine && role.value.NAME !== '';
          });
          return existIndex !== -1;
        }
      }, {
        key: "onSearchHelp",
        value: function onSearchHelp(rowID, exportObject) {
          var afterExportFn = function (context, ruleIdx) {
            return function () {
              return context.onChangeRoleID(ruleIdx);
            };
          }(this, rowID).bind(this);

          this.searchHelpComponent.openSearchHelpModalByEntity('permission', 'r_role', exportObject, this.readonly, null, null, afterExportFn);
        }
      }]);

      return UserRoleComponent;
    }();

    UserRoleComponent.ɵfac = function UserRoleComponent_Factory(t) {
      return new (t || UserRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"]));
    };

    UserRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserRoleComponent,
      selectors: [["app-user-role"]],
      viewQuery: function UserRoleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
        }
      },
      inputs: {
        readonly: "readonly",
        userForm: "userForm"
      },
      decls: 12,
      vars: 2,
      consts: [[1, "table", "table-bordered", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light", "dk-form-label"], ["scope", "col"], ["formArrayName", "userRole", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group", "dk-name"], ["type", "text", "formControlName", "NAME", 1, "form-control", 3, "readonly", "change"], [1, "invalid-tooltip"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], [1, "dk-description", 3, "formGroup"], ["type", "text", "formControlName", "DESCRIPTION", "readonly", "", 1, "form-control"], [1, "dk-actions"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", 3, "disabled", "click"], [1, "far", "fa-trash-alt"]],
      template: function UserRoleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserRoleComponent_tr_10_Template, 14, 5, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dk-app-search-help");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userRoleFormArray.controls);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 40rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 3rem;\n}\n.dk-form-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLXJvbGUvdXNlci1yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1yb2xlL3VzZXItcm9sZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1uYW1le1xuICB3aWR0aDogMjByZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiA0MHJlbTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogM3JlbTtcbn1cbi5kay1mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-role',
          templateUrl: './user-role.component.html',
          styleUrls: ['./user-role.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"]
        }];
      }, {
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        userForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/user-list/user-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user/user-list/user-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppUserUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ui_message_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ui-message-angular */
    "./node_modules/ui-message-angular/__ivy_ngcc__/fesm2015/ui-message-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../identity.service */
    "./src/app/identity.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserListComponent_tr_35_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 41);
      }
    }

    function UserListComponent_tr_35_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 42);
      }
    }

    function UserListComponent_tr_35_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Initial");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserListComponent_tr_35_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserListComponent_tr_35_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Renew");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        action: "display"
      };
    };

    var _c1 = function _c1(a1, a2) {
      return ["/users", a1, a2];
    };

    function UserListComponent_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserListComponent_tr_35_span_9_Template, 1, 0, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserListComponent_tr_35_span_10_Template, 1, 0, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserListComponent_tr_35_div_12_Template, 3, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserListComponent_tr_35_div_13_Template, 3, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserListComponent_tr_35_div_14_Template, 3, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var user_r72 = ctx.$implicit;

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.displayUser(user_r72.USER_ID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var user_r72 = ctx.$implicit;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.changeUser(user_r72.USER_ID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var user_r72 = ctx.$implicit;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.deleteUser(user_r72.USER_ID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r72 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, user_r72.USER_ID, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r72.USER_ID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r72.USER_NAME);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r72.DISPLAY_NAME);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r72.LOCK);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r72.LOCK);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", user_r72.PWD_STATE);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "display": a0
      };
    };

    var UserListComponent =
    /*#__PURE__*/
    function () {
      function UserListComponent(identityService, messageService, router) {
        _classCallCheck(this, UserListComponent);

        this.identityService = identityService;
        this.messageService = messageService;
        this.router = router;
        this.showDeletionConfirmation = false;
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search() {
          var _this16 = this;

          this.messageService.clearMessages();
          this.users = [];
          this.userID = this.userID ? this.userID.trim() : '';
          this.userName = this.userName ? this.userName.trim() : '';
          this.identityService.searchUsers(this.userID, this.userName).subscribe(function (data) {
            if (!data[0]) {
              _this16.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["messageType"].Warning);
            } else if (data[0]['msgCat']) {
              var messages = data;
              messages.forEach(function (msg) {
                return _this16.messageService.add(msg);
              });
            } else {
              _this16.users = data;
            }
          });
        }
      }, {
        key: "enterSearch",
        value: function enterSearch($event) {
          if ($event.keyCode === 13) {
            this.search();
          }
        }
      }, {
        key: "newUser",
        value: function newUser() {
          this.router.navigate(['users', '/', {
            action: 'new'
          }]);
        }
      }, {
        key: "displayUser",
        value: function displayUser(userID) {
          this.router.navigate(['users', userID, {
            action: 'display'
          }]);
        }
      }, {
        key: "changeUser",
        value: function changeUser(userID) {
          this.router.navigate(['users', userID, {
            action: 'change'
          }]);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(userID) {
          this.toBeDeletedUser = userID;
          this.showDeletionConfirmation = true;
        }
      }, {
        key: "cancelDeletion",
        value: function cancelDeletion() {
          this.showDeletionConfirmation = false;
        }
      }, {
        key: "confirmDeletion",
        value: function confirmDeletion() {
          var _this17 = this;

          var toBeDeletedUserGUID = this.users.find(function (ele) {
            return ele.USER_ID === _this17.toBeDeletedUser;
          }).INSTANCE_GUID;
          this.identityService.deleteUser(toBeDeletedUserGUID).subscribe(function (errorMsg) {
            _this17.showDeletionConfirmation = false;

            if (errorMsg) {
              var messages = errorMsg;
              messages.forEach(function (msg) {
                return _this17.messageService.add(msg);
              });
            } else {
              _this17.search();
            }
          });
        }
      }, {
        key: "displayDeletionConfirmation",
        get: function get() {
          return this.showDeletionConfirmation ? 'block' : 'none';
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ɵfac = function UserListComponent_Factory(t) {
      return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_3__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserListComponent,
      selectors: [["app-user-list"]],
      decls: 53,
      vars: 9,
      consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "user_id", 1, "col-sm-3", "col-form-label"], ["id", "user_id", "name", "user_id", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["for", "user_name", 1, "col-sm-3", "col-form-label"], ["id", "user_name", "name", "user_name", "type", "text", 1, "col-sm-6", "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-primary", 3, "click"], [3, "routerLink"], [1, "dk-lock"], ["class", "fas fa-lock", "title", "Locked", 4, "ngIf"], ["class", "fas fa-lock-open", "title", "Unlocked", 4, "ngIf"], [1, "dk-password-state", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", 3, "click"], [1, "far", "fa-trash-alt"], ["title", "Locked", 1, "fas", "fa-lock"], ["title", "Unlocked", 1, "fas", "fa-lock-open"], [1, "badge", "badge-primary"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"]],
      template: function UserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.userID = $event;
          })("keyup", function UserListComponent_Template_input_keyup_5_listener($event) {
            return ctx.enterSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.userName = $event;
          })("keyup", function UserListComponent_Template_input_keyup_9_listener($event) {
            return ctx.enterSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_11_listener($event) {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dk-message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_16_listener($event) {
            return ctx.newUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "User ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Display Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Locked?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserListComponent_tr_35_Template, 22, 13, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Confirm Deletion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_42_listener($event) {
            return ctx.cancelDeletion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_49_listener($event) {
            return ctx.cancelDeletion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_51_listener($event) {
            return ctx.confirmDeletion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure to delete the user '", ctx.toBeDeletedUser, "'?");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"]],
      styles: [".dk-lock[_ngcontent-%COMP%] {\n  width: 5rem;\n  max-width: 5rem;\n  min-width: 5rem;\n}\n.dk-password-state[_ngcontent-%COMP%] {\n  width: 15rem;\n  max-width: 15rem;\n  min-width: 15rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 9rem;\n  min-width: 9rem;\n  max-width: 9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay1sb2NrIHtcbiAgd2lkdGg6IDVyZW07XG4gIG1heC13aWR0aDogNXJlbTtcbiAgbWluLXdpZHRoOiA1cmVtO1xufVxuLmRrLXBhc3N3b3JkLXN0YXRlIHtcbiAgd2lkdGg6IDE1cmVtO1xuICBtYXgtd2lkdGg6IDE1cmVtO1xuICBtaW4td2lkdGg6IDE1cmVtO1xufVxuLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiA5cmVtO1xuICBtaW4td2lkdGg6IDlyZW07XG4gIG1heC13aWR0aDogOXJlbTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-list',
          templateUrl: './user-list.component.html',
          styleUrls: ['./user-list.component.css']
        }]
      }], function () {
        return [{
          type: _identity_service__WEBPACK_IMPORTED_MODULE_3__["IdentityService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/work-protection.guard.ts":
  /*!******************************************!*\
    !*** ./src/app/work-protection.guard.ts ***!
    \******************************************/

  /*! exports provided: WorkProtectionGuard */

  /***/
  function srcAppWorkProtectionGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkProtectionGuard", function () {
      return WorkProtectionGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WorkProtectionGuard =
    /*#__PURE__*/
    function () {
      function WorkProtectionGuard() {
        _classCallCheck(this, WorkProtectionGuard);
      }

      _createClass(WorkProtectionGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component, currentRoute, currentState, nextState) {
          return component.canDeactivate ? component.canDeactivate() : true;
        }
      }]);

      return WorkProtectionGuard;
    }();

    WorkProtectionGuard.ɵfac = function WorkProtectionGuard_Factory(t) {
      return new (t || WorkProtectionGuard)();
    };

    WorkProtectionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WorkProtectionGuard,
      factory: WorkProtectionGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkProtectionGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      originalHost: 'http://localhost:3000'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/VinceZK/workspace/javascript/Portal/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map