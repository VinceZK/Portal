(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkui_logon"] = self["webpackChunkui_logon"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    8437:
    /*!*************************************************!*\
      !*** ./dist/logon/fesm2015/ui-logon-angular.js ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LandingPageComponent": function LandingPageComponent() {
          return (
            /* binding */
            _LandingPageComponent
          );
        },

        /* harmony export */
        "LogonComponent": function LogonComponent() {
          return (
            /* binding */
            _LogonComponent
          );
        },

        /* harmony export */
        "LogonModule": function LogonModule() {
          return (
            /* binding */
            _LogonModule
          );
        },

        /* harmony export */
        "LogonService": function LogonService() {
          return (
            /* binding */
            _LogonService
          );
        },

        /* harmony export */
        "PluralField": function PluralField() {
          return (
            /* binding */
            _PluralField
          );
        },

        /* harmony export */
        "Projection": function Projection() {
          return (
            /* binding */
            _Projection
          );
        },

        /* harmony export */
        "QueryObject": function QueryObject() {
          return (
            /* binding */
            _QueryObject
          );
        },

        /* harmony export */
        "Selection": function Selection() {
          return (
            /* binding */
            _Selection
          );
        },

        /* harmony export */
        "Session": function Session() {
          return (
            /* binding */
            _Session
          );
        },

        /* harmony export */
        "Sort": function Sort() {
          return (
            /* binding */
            _Sort
          );
        },

        /* harmony export */
        "User": function User() {
          return (
            /* binding */
            _User
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      6109);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);

      var _c0 = ["inputUserID"];
      var _c1 = ["inputPassword"];

      function LogonComponent_i_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
        }
      }

      var msgStore = [{
        msgCat: 'EXCEPTION',
        msgName: 'GENERIC',
        msgText: {
          EN: {
            shortText: 'Exception Occurs',
            longText: '%s1'
          }
        }
      }];
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      var _LogonService = /*#__PURE__*/function () {
        function _LogonService(http, messageService) {
          _classCallCheck(this, _LogonService);

          this.http = http;
          this.messageService = messageService;
          this.host = '';
          this.messageService.setMessageStore(msgStore, 'EN');
        }

        _createClass(_LogonService, [{
          key: "setHost",
          value: function setHost(host) {
            this.host = host;
          }
        }, {
          key: "logon",
          value: function logon(userid, password) {
            return this.http.post(this.host ? this.host + '/api/logon' : 'api/logon', {
              username: userid,
              password: password
            }, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('Logon')));
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.http["delete"](this.host ? this.host + '/api/logout' : 'api/logout', httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('Logout')));
          }
        }, {
          key: "session",
          value: function session() {
            return this.http.get(this.host ? this.host + '/api/session' : 'api/session', httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('Get session')));
          }
          /**
           * this method is called during logon component initialization. It tries to get the session,
           * but without raising any errors.
           */

        }, {
          key: "try_get_session",
          value: function try_get_session() {
            return this.http.get(this.host ? this.host + '/api/session' : 'api/session', httpOptions);
          }
        }, {
          key: "query",
          value: function query(queryObject) {
            return this.http.post(this.host ? this.host + '/api/query' : 'api/query', queryObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('query')));
          }
        }, {
          key: "read",
          value: function read(instanceGUID) {
            return this.http.get(this.host ? this.host + "/api/entity/instance/".concat(instanceGUID) : "api/entity/instance/".concat(instanceGUID)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('read')));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead

              _this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.messageType.Exception, JSON.stringify(error)); // Let the app keep running by returning an empty result.


              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(result);
            };
          }
        }]);

        return _LogonService;
      }();

      _LogonService.ɵfac = function LogonService_Factory(t) {
        return new (t || _LogonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.MessageService));
      };

      _LogonService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LogonService,
        factory: _LogonService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_LogonService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
          }, {
            type: ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.MessageService
          }];
        }, null);
      })();

      var _User = function _User() {
        _classCallCheck(this, _User);
      };

      var _PluralField = function _PluralField() {
        _classCallCheck(this, _PluralField);
      };

      var _QueryObject = function _QueryObject() {
        _classCallCheck(this, _QueryObject);
      };

      var _Projection = function _Projection() {
        _classCallCheck(this, _Projection);
      };

      var _Selection = function _Selection() {
        _classCallCheck(this, _Selection);
      };

      var _Sort = function _Sort() {
        _classCallCheck(this, _Sort);
      };

      var _Session = function _Session() {
        _classCallCheck(this, _Session);
      };

      var _LogonComponent = /*#__PURE__*/function () {
        function _LogonComponent(document, router, route, autofill, logonService, messageService) {
          _classCallCheck(this, _LogonComponent);

          this.document = document;
          this.router = router;
          this.route = route;
          this.autofill = autofill;
          this.logonService = logonService;
          this.messageService = messageService;
          this.user = new _User();
          this.isWaiting = false;
          this.title = 'Logon Portal';
          this.userLabel = 'User ID';
          this.pwdLabel = 'Password';
          this.btnLabel = 'Logon';
          this.redirectUrl = '';
          this.redirectPath = '';
          this.host = '';
        }

        _createClass(_LogonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.autofill.stopMonitoring(this.inputUserID.nativeElement);
            this.autofill.stopMonitoring(this.inputPassword.nativeElement);
          }
        }, {
          key: "logon",
          value: function logon() {
            var _this2 = this;

            this.isWaiting = true;
            this.logonService.logon(this.user.userid, this.user.password).subscribe(function (data) {
              _this2.isWaiting = false;

              if (!data) {
                return;
              }

              if (data.err) {
                if (Array.isArray(data.err)) {
                  data.err.forEach(function (err) {
                    return _this2.messageService.add(err);
                  });
                } else {
                  _this2.messageService.report(data.err);
                }
              } else {
                _this2.user.displayName = data.user['DISPLAY_NAME'];
                _this2.user.userid = data.user['USER_ID'];
                _this2.user.username = data.user['USER_NAME'];
                _this2.user.locked = data.user['LOCK'];
                _this2.user.pwdState = data.user['PWD_STATE'];
                _this2.user.name = data.user['GIVEN_NAME'];

                if (_this2.redirectPath) {
                  _this2.router.navigateByUrl(_this2.redirectPath);
                } else if (_this2.redirectUrl) {
                  _this2.document.location.href = _this2.redirectUrl;
                }
              }
            });
          }
        }]);

        return _LogonComponent;
      }();

      _LogonComponent.ɵfac = function LogonComponent_Factory(t) {
        return new (t || _LogonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__.AutofillMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_LogonService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.MessageService));
      };

      _LogonComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _LogonComponent,
        selectors: [["dk-logon"]],
        viewQuery: function LogonComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputUserID = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputPassword = _t.first);
          }
        },
        inputs: {
          title: "title",
          userLabel: "userLabel",
          pwdLabel: "pwdLabel",
          btnLabel: "btnLabel",
          redirectUrl: "redirectUrl",
          redirectPath: "redirectPath",
          host: "host"
        },
        decls: 20,
        vars: 8,
        consts: [[1, "dk-form-logon", 3, "ngSubmit"], [3, "disabled"], [1, "text-center", "dk-mb-4"], [1, "dk-form-title", "dk-mb-3", "font-weight-normal"], [1, "dk-message-area"], [1, "dk-form-label-group"], ["type", "text", "id", "inputUserID", "name", "inputUserID", "placeholder", "User ID", "required", "", "autofocus", "", 1, "form-control", "dk-form-control", 3, "ngModel", "ngModelChange"], ["inputUserID", ""], ["for", "inputUserID"], ["type", "password", "id", "inputPassword", "name", "inputPassword", "placeholder", "Password", "required", "", 1, "form-control", "dk-form-control", 3, "ngModel", "ngModelChange"], ["inputPassword", ""], ["for", "inputPassword"], ["type", "submit", 1, "btn", "dk-btn-lg", "btn-primary", "btn-block"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [1, "fas", "fa-spinner", "fa-spin"]],
        template: function LogonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LogonComponent_Template_form_ngSubmit_0_listener() {
              return ctx.logon();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LogonComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.user.userid = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LogonComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LogonComponent_i_18_Template, 1, 0, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isWaiting);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.userid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pwdLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isWaiting);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.btnLabel, " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.MessageComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
        styles: [".dk-form-logon[_ngcontent-%COMP%]{width:100%;max-width:420px;padding:15px;margin:0 auto;line-height:1.5;--input-padding-x:0.75rem;--input-padding-y:0.75rem}.dk-form-logon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:.5rem;font-size:1rem}.dk-message-area[_ngcontent-%COMP%]{margin-bottom:.5rem}.dk-mb-3[_ngcontent-%COMP%]{margin-bottom:1rem}.dk-mb-4[_ngcontent-%COMP%]{margin-bottom:1.5rem}.dk-form-title[_ngcontent-%COMP%]{font-size:1.75rem;line-height:1.2;color:inherit;font-family:inherit}.dk-form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.dk-form-control[_ngcontent-%COMP%]{font-size:1rem;border-radius:.25rem;height:calc(2.9rem + 2px)}.dk-form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .dk-form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{padding:var(--input-padding-y) var(--input-padding-x)}.dk-form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:transparent}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start;-webkit-transition:background-color 50000s ease-in-out 0s;transition:background-color 50000s ease-in-out 0s}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-moz-placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));padding-bottom:calc(var(--input-padding-y) / 3)}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-ms-input-placeholder){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));padding-bottom:calc(var(--input-padding-y) / 3)}.dk-form-label-group[_ngcontent-%COMP%]   input.cdk-text-field-autofilled[_ngcontent-%COMP%], .dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));padding-bottom:calc(var(--input-padding-y) / 3)}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-moz-placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:calc(var(--input-padding-y) / 3);padding-bottom:calc(var(--input-padding-y) / 3);font-size:.75rem;color:#777}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-ms-input-placeholder) ~ label[_ngcontent-%COMP%]{padding-top:calc(var(--input-padding-y) / 3);padding-bottom:calc(var(--input-padding-y) / 3);font-size:.75rem;color:#777}.dk-form-label-group[_ngcontent-%COMP%]   input.cdk-text-field-autofilled[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], .dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:calc(var(--input-padding-y) / 3);padding-bottom:calc(var(--input-padding-y) / 3);font-size:.75rem;color:#777}.dk-btn-lg[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_LogonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'dk-logon',
            templateUrl: './logon.component.html',
            styleUrls: ['./logon.component.css']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
          }, {
            type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__.AutofillMonitor
          }, {
            type: _LogonService
          }, {
            type: ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.MessageService
          }];
        }, {
          inputUserID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['inputUserID', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
              "static": true
            }]
          }],
          inputPassword: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['inputPassword', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
              "static": true
            }]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          userLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pwdLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          btnLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          redirectUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          redirectPath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          host: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _LandingPageComponent = /*#__PURE__*/function () {
        function _LandingPageComponent(router, logonService) {
          _classCallCheck(this, _LandingPageComponent);

          this.router = router;
          this.logonService = logonService;
        }

        _createClass(_LandingPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            var _this3 = this;

            this.logonService.logout().subscribe(function (data) {
              _this3.router.navigateByUrl('');
            });
          }
        }, {
          key: "session",
          value: function session() {
            var _this4 = this;

            this.logonService.session().subscribe(function (data) {
              _this4.result = data;
            });
          }
        }, {
          key: "query",
          value: function query() {
            var _this5 = this;

            var queryObject = {
              ENTITY_ID: 'person',
              RELATION_ID: 'r_user'
            };
            this.logonService.query(queryObject).subscribe(function (data) {
              return _this5.result = data;
            });
          }
        }, {
          key: "read",
          value: function read() {
            var _this6 = this;

            this.logonService.read('2FBE7490E10F11E8A90957FA46F2CECA').subscribe(function (data) {
              return _this6.result = data;
            });
          }
        }]);

        return _LandingPageComponent;
      }();

      _LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
        return new (t || _LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_LogonService));
      };

      _LandingPageComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _LandingPageComponent,
        selectors: [["dk-landing-page"]],
        decls: 15,
        vars: 3,
        consts: [["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "dk-btn-lg", "btn-primary", 3, "click"], [1, "container"]],
        template: function LandingPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logon Successfully\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_3_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_5_listener() {
              return ctx.session();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Get Session");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_7_listener() {
              return ctx.query();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Query");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_9_listener() {
              return ctx.read();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Read");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 1, ctx.result));
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_LandingPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'dk-landing-page',
            templateUrl: './landing-page.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
          }, {
            type: _LogonService
          }];
        }, null);
      })();

      var _LogonModule = function _LogonModule() {
        _classCallCheck(this, _LogonModule);
      };

      _LogonModule.ɵfac = function LogonModule_Factory(t) {
        return new (t || _LogonModule)();
      };

      _LogonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _LogonModule
      });
      _LogonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.MessageModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_LogonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.MessageModule],
            declarations: [_LogonComponent, _LandingPageComponent],
            exports: [_LogonComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of logon
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    228:
    /*!****************************************************!*\
      !*** ./src/app/admin-info/admin-info.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminInfoComponent": function AdminInfoComponent() {
          return (
            /* binding */
            _AdminInfoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _AdminInfoComponent = /*#__PURE__*/function () {
        function _AdminInfoComponent(attributeControlService) {
          _classCallCheck(this, _AdminInfoComponent);

          this.attributeControlService = attributeControlService;
        }

        _createClass(_AdminInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.adminForm = this.mainForm.get('admin');
            this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(function (relationMeta) {
              return relationMeta.RELATION_ID === _this7.adminRelation;
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

        return _AdminInfoComponent;
      }();

      _AdminInfoComponent.ɵfac = function AdminInfoComponent_Factory(t) {
        return new (t || _AdminInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeControlService));
      };

      _AdminInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AdminInfoComponent,
        selectors: [["app-admin-info"]],
        inputs: {
          mainForm: "mainForm",
          relationMetas: "relationMetas",
          adminRelation: "adminRelation"
        },
        decls: 5,
        vars: 16,
        consts: [[1, "mt-4", "ml-2", "row"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "isSmallSize", "readonly"]],
        template: function AdminInfoComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("CREATED_BY"))("formGroup", ctx.adminForm)("isSmallSize", true)("readonly", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("CREATE_TIME"))("formGroup", ctx.adminForm)("isSmallSize", true)("readonly", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("CHANGED_BY"))("formGroup", ctx.adminForm)("isSmallSize", true)("readonly", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("CHANGE_TIME"))("formGroup", ctx.adminForm)("isSmallSize", true)("readonly", true);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../environments/environment */
      2340);
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./msgStore */
      7534);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./identity.service */
      8934);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var ui_logon_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-logon-angular */
      8437);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _AppComponent = function _AppComponent(entityService, identityService, messageService, logonService) {
        var _this8 = this;

        _classCallCheck(this, _AppComponent);

        this.entityService = entityService;
        this.identityService = identityService;
        this.messageService = messageService;
        this.logonService = logonService;
        this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.originalHost);
        this.logonService.setHost(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.originalHost);
        this.logonService.try_get_session().subscribe(function (data) {
          _this8.identityService.setSession(data);

          _this8.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_1__.msgStore, _this8.identityService.Session.LANGUAGE);
        });
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_4__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ui_logon_angular__WEBPACK_IMPORTED_MODULE_6__.LogonService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "dk-logon-view"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
        styles: [".dk-logon-view[_ngcontent-%COMP%] {\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstbG9nb24tdmlldyB7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var ui_logon_angular__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ui-logon-angular */
      8437);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../environments/environment */
      2340);
      /* harmony import */


      var _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./permission/permission-list/permission-list.component */
      3959);
      /* harmony import */


      var _permission_permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./permission/permission-detail/permission-detail.component */
      7119);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _work_protection_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./work-protection.guard */
      4023);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _app_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app/app-list/app-list.component */
      1067);
      /* harmony import */


      var _app_app_detail_app_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app/app-detail/app-detail.component */
      4542);
      /* harmony import */


      var _app_app_detail_app_target_app_target_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app/app-detail/app-target/app-target.component */
      6326);
      /* harmony import */


      var _app_app_detail_app_categories_app_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app/app-detail/app-categories/app-categories.component */
      6);
      /* harmony import */


      var _auth_object_auth_object_list_auth_object_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./auth_object/auth-object-list/auth-object-list.component */
      5252);
      /* harmony import */


      var _auth_object_auth_object_detail_auth_object_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./auth_object/auth-object-detail/auth-object-detail.component */
      7817);
      /* harmony import */


      var _auth_object_auth_object_detail_auth_object_field_auth_object_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./auth_object/auth-object-detail/auth-object-field/auth-object-field.component */
      8976);
      /* harmony import */


      var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./admin-info/admin-info.component */
      228);
      /* harmony import */


      var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./authorization/authorization.component */
      5509);
      /* harmony import */


      var _authorization_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./authorization/auth-value/auth-value.component */
      7886);
      /* harmony import */


      var _authorization_auth_value_auth_value_singles_auth_value_singles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./authorization/auth-value/auth-value-singles/auth-value-singles.component */
      3784);
      /* harmony import */


      var _authorization_auth_value_auth_value_selopts_auth_value_selopts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./authorization/auth-value/auth-value-selopts/auth-value-selopts.component */
      2611);
      /* harmony import */


      var _app_category_app_category_list_app_category_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./app_category/app-category-list/app-category-list.component */
      7611);
      /* harmony import */


      var _app_category_app_category_detail_app_category_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./app_category/app-category-detail/app-category-detail.component */
      8448);
      /* harmony import */


      var _app_category_app_category_detail_app_category_detail_app_app_category_detail_app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./app_category/app-category-detail/app-category-detail-app/app-category-detail-app.component */
      3169);
      /* harmony import */


      var _app_category_app_category_detail_app_category_detail_role_app_category_detail_role_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./app_category/app-category-detail/app-category-detail-role/app-category-detail-role.component */
      7488);
      /* harmony import */


      var _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./profile/profile-list/profile-list.component */
      7914);
      /* harmony import */


      var _profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./profile/profile-detail/profile-detail.component */
      5051);
      /* harmony import */


      var _permission_permission_detail_permission_detail_category_permission_detail_category_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./permission/permission-detail/permission-detail-category/permission-detail-category.component */
      8120);
      /* harmony import */


      var _permission_permission_detail_permission_detail_profile_permission_detail_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./permission/permission-detail/permission-detail-profile/permission-detail-profile.component */
      1510);
      /* harmony import */


      var _permission_permission_detail_permission_detail_user_permission_detail_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./permission/permission-detail/permission-detail-user/permission-detail-user.component */
      9094);
      /* harmony import */


      var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./user/user-list/user-list.component */
      846);
      /* harmony import */


      var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./user/user-detail/user-detail.component */
      8081);
      /* harmony import */


      var _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./user/user-detail/user-basic/user-basic.component */
      9509);
      /* harmony import */


      var _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./user/user-detail/user-personalization/user-personalization.component */
      7634);
      /* harmony import */


      var _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./user/user-detail/user-role/user-role.component */
      7795);
      /* harmony import */


      var _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./user/user-detail/user-email/user-email.component */
      7992);
      /* harmony import */


      var _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./user/user-detail/user-address/user-address.component */
      4594);
      /* harmony import */


      var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./custom.reuse.strategy */
      6850);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var appRoutes = [{
        path: 'logon',
        component: ui_logon_angular__WEBPACK_IMPORTED_MODULE_34__.LogonComponent,
        data: {
          title: 'Logon Portal (DH001/Dark1234)',
          userLabel: 'User ID',
          pwdLabel: 'Password',
          btnLabel: 'Sign In',
          redirectPath: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.redirectPath,
          redirectUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.redirectUrl,
          host: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.originalHost
        }
      }, {
        path: 'landing',
        component: ui_logon_angular__WEBPACK_IMPORTED_MODULE_34__.LandingPageComponent
      }, {
        path: 'users',
        component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_26__.UserListComponent
      }, {
        path: 'users/:userID',
        component: _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_27__.UserDetailComponent,
        canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_4__.WorkProtectionGuard]
      }, {
        path: 'apps',
        component: _app_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_5__.AppListComponent
      }, {
        path: 'apps/:appID',
        component: _app_app_detail_app_detail_component__WEBPACK_IMPORTED_MODULE_6__.AppDetailComponent,
        canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_4__.WorkProtectionGuard]
      }, {
        path: 'app-categories',
        component: _app_category_app_category_list_app_category_list_component__WEBPACK_IMPORTED_MODULE_17__.AppCategoryListComponent
      }, {
        path: 'app-categories/:appCategory',
        component: _app_category_app_category_detail_app_category_detail_component__WEBPACK_IMPORTED_MODULE_18__.AppCategoryDetailComponent,
        canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_4__.WorkProtectionGuard]
      }, {
        path: 'auth-objects',
        component: _auth_object_auth_object_list_auth_object_list_component__WEBPACK_IMPORTED_MODULE_9__.AuthObjectListComponent
      }, {
        path: 'auth-objects/:authObjName',
        component: _auth_object_auth_object_detail_auth_object_detail_component__WEBPACK_IMPORTED_MODULE_10__.AuthObjectDetailComponent,
        canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_4__.WorkProtectionGuard]
      }, {
        path: 'permissions',
        component: _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_2__.PermissionListComponent
      }, {
        path: 'permissions/:permissionName',
        component: _permission_permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_3__.PermissionDetailComponent,
        canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_4__.WorkProtectionGuard]
      }, {
        path: 'profiles',
        component: _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_21__.ProfileListComponent
      }, {
        path: 'profiles/:profileName',
        component: _profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_22__.ProfileDetailComponent,
        canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_4__.WorkProtectionGuard]
      }, {
        path: '**',
        redirectTo: 'logon',
        pathMatch: 'full'
      }];

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouteReuseStrategy,
          useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_33__.CustomReuseStrategy
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__.BrowserModule, ui_logon_angular__WEBPACK_IMPORTED_MODULE_34__.LogonModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule.forRoot(appRoutes, {
          relativeLinkResolution: 'legacy'
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule, ui_message_angular__WEBPACK_IMPORTED_MODULE_39__.MessageModule, jor_angular__WEBPACK_IMPORTED_MODULE_40__.JorAngularModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_26__.UserListComponent, _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_27__.UserDetailComponent, _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_28__.UserBasicComponent, _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_29__.UserPersonalizationComponent, _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_30__.UserRoleComponent, _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_31__.UserEmailComponent, _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_32__.UserAddressComponent, _app_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_5__.AppListComponent, _app_app_detail_app_detail_component__WEBPACK_IMPORTED_MODULE_6__.AppDetailComponent, _app_app_detail_app_target_app_target_component__WEBPACK_IMPORTED_MODULE_7__.AppTargetComponent, _app_app_detail_app_categories_app_categories_component__WEBPACK_IMPORTED_MODULE_8__.AppCategoriesComponent, _auth_object_auth_object_list_auth_object_list_component__WEBPACK_IMPORTED_MODULE_9__.AuthObjectListComponent, _auth_object_auth_object_detail_auth_object_detail_component__WEBPACK_IMPORTED_MODULE_10__.AuthObjectDetailComponent, _auth_object_auth_object_detail_auth_object_field_auth_object_field_component__WEBPACK_IMPORTED_MODULE_11__.AuthObjectFieldComponent, _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_12__.AdminInfoComponent, _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_13__.AuthorizationComponent, _authorization_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_14__.AuthValueComponent, _authorization_auth_value_auth_value_singles_auth_value_singles_component__WEBPACK_IMPORTED_MODULE_15__.AuthValueSinglesComponent, _authorization_auth_value_auth_value_selopts_auth_value_selopts_component__WEBPACK_IMPORTED_MODULE_16__.AuthValueSeloptsComponent, _app_category_app_category_list_app_category_list_component__WEBPACK_IMPORTED_MODULE_17__.AppCategoryListComponent, _app_category_app_category_detail_app_category_detail_component__WEBPACK_IMPORTED_MODULE_18__.AppCategoryDetailComponent, _app_category_app_category_detail_app_category_detail_app_app_category_detail_app_component__WEBPACK_IMPORTED_MODULE_19__.AppCategoryDetailAppComponent, _app_category_app_category_detail_app_category_detail_role_app_category_detail_role_component__WEBPACK_IMPORTED_MODULE_20__.AppCategoryDetailRoleComponent, _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_21__.ProfileListComponent, _profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_22__.ProfileDetailComponent, _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_2__.PermissionListComponent, _permission_permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_3__.PermissionDetailComponent, _permission_permission_detail_permission_detail_category_permission_detail_category_component__WEBPACK_IMPORTED_MODULE_23__.PermissionDetailCategoryComponent, _permission_permission_detail_permission_detail_profile_permission_detail_profile_component__WEBPACK_IMPORTED_MODULE_24__.PermissionDetailProfileComponent, _permission_permission_detail_permission_detail_user_permission_detail_user_component__WEBPACK_IMPORTED_MODULE_25__.PermissionDetailUserComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__.BrowserModule, ui_logon_angular__WEBPACK_IMPORTED_MODULE_34__.LogonModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule, ui_message_angular__WEBPACK_IMPORTED_MODULE_39__.MessageModule, jor_angular__WEBPACK_IMPORTED_MODULE_40__.JorAngularModule]
        });
      })();
      /***/

    },

    /***/
    6:
    /*!***************************************************************************!*\
      !*** ./src/app/app/app-detail/app-categories/app-categories.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppCategoriesComponent": function AppCategoriesComponent() {
          return (
            /* binding */
            _AppCategoriesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function AppCategoriesComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoriesComponent_tr_12_Template_button_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;
            var appCategoryForm_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onSearchHelp(i_r2, appCategoryForm_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var appCategoryForm_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", appCategoryForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", appCategoryForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", appCategoryForm_r1.get("ICON").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", appCategoryForm_r1);
        }
      }

      var _AppCategoriesComponent = /*#__PURE__*/function () {
        function _AppCategoriesComponent() {
          _classCallCheck(this, _AppCategoriesComponent);
        }

        _createClass(_AppCategoriesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.appCategoryFormArray = this.mainForm.get('appCategories');
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(rowID, exportObject) {
            var afterExportFn = function (context, rowIDx) {
              return function () {
                return context.onChangeKey(rowIDx);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModalByEntity('category', 'r_app_category', exportObject, true, null, null, afterExportFn);
          }
        }]);

        return _AppCategoriesComponent;
      }();

      _AppCategoriesComponent.ɵfac = function AppCategoriesComponent_Factory(t) {
        return new (t || _AppCategoriesComponent)();
      };

      _AppCategoriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppCategoriesComponent,
        selectors: [["app-app-categories"]],
        viewQuery: function AppCategoriesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_1__.SearchHelpComponent, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
          }
        },
        inputs: {
          readonly: "readonly",
          mainForm: "mainForm"
        },
        decls: 14,
        vars: 2,
        consts: [[1, "table", "table-bordered", "table-sm", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light"], [1, "dk-name"], [1, "dk-description"], [1, "dk-icon"], [1, "dk-number"], ["formArrayName", "appCategories", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group", "dk-name"], ["type", "text", "formControlName", "ID", "readonly", "", 1, "form-control", "form-control-sm"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], [1, "dk-description", 3, "formGroup"], ["type", "text", "formControlName", "NAME", "readonly", "", 1, "form-control", "form-control-sm"], [3, "ngClass"], [1, "dk-number", 3, "formGroup"], ["type", "number", "formControlName", "ORDER", "readonly", "", 1, "form-control", "form-control-sm"]],
        template: function AppCategoriesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ICON");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppCategoriesComponent_tr_12_Template, 13, 4, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dk-app-search-help");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appCategoryFormArray.controls);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, jor_angular__WEBPACK_IMPORTED_MODULE_1__.SearchHelpComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor],
        styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 40rem;\n}\n.dk-icon[_ngcontent-%COMP%]{\n  width: 5rem;\n}\n.dk-number[_ngcontent-%COMP%]{\n  width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1uYW1le1xuICB3aWR0aDogMjByZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiA0MHJlbTtcbn1cbi5kay1pY29ue1xuICB3aWR0aDogNXJlbTtcbn1cbi5kay1udW1iZXJ7XG4gIHdpZHRoOiA1cmVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    4542:
    /*!********************************************************!*\
      !*** ./src/app/app/app-detail/app-detail.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppDetailComponent": function AppDetailComponent() {
          return (
            /* binding */
            _AppDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      5758);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var _async_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../async-validators */
      438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../dialog.service */
      1969);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _app_target_app_target_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-target/app-target.component */
      6326);
      /* harmony import */


      var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../authorization/authorization.component */
      5509);
      /* harmony import */


      var _app_categories_app_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-categories/app-categories.component */
      6);
      /* harmony import */


      var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../admin-info/admin-info.component */
      228);

      function AppDetailComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AppDetailComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Display");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AppDetailComponent_div_16_app_app_target_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-app-target", 25);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mainForm", ctx_r3.mainForm)("relationMetas", ctx_r3.relationMetas)("readonly", ctx_r3.readonly);
        }
      }

      function AppDetailComponent_div_16_app_authorization_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-authorization", 26);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mainForm", ctx_r4.mainForm)("ctrlName", "appAuthObjects")("readonly", ctx_r4.readonly);
        }
      }

      function AppDetailComponent_div_16_app_app_categories_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-app-categories", 27);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mainForm", ctx_r5.mainForm)("readonly", ctx_r5.readonly);
        }
      }

      function AppDetailComponent_div_16_app_admin_info_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-admin-info", 28);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mainForm", ctx_r6.mainForm)("relationMetas", ctx_r6.relationMetas)("adminRelation", "app");
        }
      }

      function AppDetailComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppDetailComponent_div_16_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r7.switchTabStrip(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Target");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppDetailComponent_div_16_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r9.switchTabStrip(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppDetailComponent_div_16_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r10.switchTabStrip(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppDetailComponent_div_16_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r11.switchTabStrip(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, AppDetailComponent_div_16_app_app_target_18_Template, 1, 3, "app-app-target", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, AppDetailComponent_div_16_app_authorization_19_Template, 1, 3, "app-authorization", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, AppDetailComponent_div_16_app_app_categories_20_Template, 1, 2, "app-app-categories", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, AppDetailComponent_div_16_app_admin_info_21_Template, 1, 3, "app-admin-info", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("APP_ID"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("NAME"))("formGroup", ctx_r2.mainForm)("readonly", ctx_r2.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 4);
        }
      }

      var _AppDetailComponent = /*#__PURE__*/function () {
        function _AppDetailComponent(fb, route, router, dialogService, identityService, attributeControlService, entityService, uiMapperService, messageService) {
          _classCallCheck(this, _AppDetailComponent);

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
          this.originalValue = {};
          this.changedValue = {};
          this.tabStrip = 1;
        }

        _createClass(_AppDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(function (params) {
              _this9.action = params.get('action');

              if (_this9.action === 'new') {
                _this9.isNewMode = true;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([_this9.entityService.getRelationMetaOfEntity('app'), _this9._createNewEntity()]);
              } else {
                _this9.isNewMode = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([_this9.entityService.getRelationMetaOfEntity('app'), _this9.identityService.getAppDetail(params.get('appID'))]);
              }
            })).subscribe(function (data) {
              _this9.relationMetas = data[0];
              _this9.attrCtrls = _this9.attributeControlService.toAttributeControl(_this9.relationMetas.find(function (relationMeta) {
                return relationMeta.RELATION_ID === 'app';
              }).ATTRIBUTES);

              if ('ENTITY_ID' in data[1]) {
                _this9.instanceGUID = data[1]['INSTANCE_GUID'];

                _this9._generateMainForm(data[1]);

                if (_this9.isNewMode || _this9.action === 'change') {
                  _this9._switch2EditMode();
                } else {
                  _this9._switch2DisplayMode();
                }
              } else {
                var errorMessages = data[1];
                errorMessages.forEach(function (msg) {
                  return _this9.messageService.add(msg);
                });
              }
            });
          }
        }, {
          key: "return2List",
          value: function return2List() {
            this.router.navigate(['apps']);
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
            var _this10 = this;

            if (this.readonly) {
              this._switch2EditMode();
            } else {
              if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    _this10.mainForm.reset(_this10.originalValue);

                    _this10._switch2DisplayMode();
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

            var appIDCtrl = this.mainForm.get('APP_ID');
            appIDCtrl.clearAsyncValidators();
            var appCategoryArray = this.mainForm.get('appCategories');
            var lastIndex = appCategoryArray.length - 1;

            while (lastIndex >= 0) {
              var appCategoryGroup = appCategoryArray.at(lastIndex);

              if (appCategoryGroup.invalid || !appCategoryGroup.value.ID) {
                appCategoryArray.removeAt(lastIndex);
              }

              lastIndex--;
            }

            this.mainForm.markAsPristine(); // Replace the URL from change to display

            window.history.replaceState({}, '', "/apps/".concat(appIDCtrl.value, ";action=display"));
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;

            this._setCheckBoxState();

            var appIDCtrl = this.mainForm.get('APP_ID');

            if (this.isNewMode) {
              appIDCtrl.setAsyncValidators((0, _async_validators__WEBPACK_IMPORTED_MODULE_0__.existingAppValidator)(this.identityService, this.messageService));
            } // Replace the URL from to display


            if (this.action === 'display') {
              this.action = 'change';
            }

            window.history.replaceState({}, '', "/apps/".concat(appIDCtrl.value, ";action=") + this.action);
          }
        }, {
          key: "_createNewEntity",
          value: function _createNewEntity() {
            var appDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_10__.Entity();
            appDetail.ENTITY_ID = 'app';
            appDetail['app'] = [{
              APP_ID: '',
              NAME: '',
              ROUTE_LINK: '',
              IS_EXTERNAL: '',
              CREATED_BY: '',
              CREATE_TIME: '',
              CHANGED_BY: '',
              CHANGE_TIME: ''
            }];
            appDetail['relationships'] = [];
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(appDetail);
          }
        }, {
          key: "_generateMainForm",
          value: function _generateMainForm(data) {
            var _this11 = this;

            this.mainForm = this.fb.group({
              APP_ID: [data['app'][0]['APP_ID'], [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
              NAME: [data['app'][0]['NAME']],
              target: this.fb.group({
                ROUTE_LINK: [data['app'][0]['ROUTE_LINK']],
                IS_EXTERNAL: [data['app'][0]['IS_EXTERNAL']]
              }),
              admin: this.fb.group({
                CREATED_BY: [data['app'][0]['CREATED_BY']],
                CREATE_TIME: [data['app'][0]['CREATE_TIME']],
                CHANGED_BY: [data['app'][0]['CHANGED_BY']],
                CHANGE_TIME: [data['app'][0]['CHANGE_TIME']]
              })
            });

            var parsedRelationship = this._parseRelationships(data['relationships']);

            this.mainForm.addControl('appCategories', this.fb.array(parsedRelationship.appCategories.map(function (appCategory) {
              return _this11.fb.group(appCategory);
            })));
            this.mainForm.addControl('appAuthObjects', this.fb.array(parsedRelationship.appAuthObjects.map(function (appAuthObject) {
              return _this11.fb.group(appAuthObject);
            })));
            this.originalValue = this.mainForm.getRawValue();
          }
        }, {
          key: "_parseRelationships",
          value: function _parseRelationships(relationships) {
            var _this12 = this;

            var parsedRelationship = {
              appCategories: [],
              appAuthObjects: []
            };

            if (!relationships) {
              return parsedRelationship;
            }

            relationships.forEach(function (relationship) {
              switch (relationship.RELATIONSHIP_ID) {
                case 'rs_app_category':
                  __parseAppCategory(relationship);

                  break;

                case 'rs_app_auth':
                  parsedRelationship.appAuthObjects = _this12.identityService.parseProfileAuthObject(relationship);
                  break;

                default: // Do nothing.

              }
            });
            return parsedRelationship;

            function __parseAppCategory(relationship) {
              relationship.values.forEach(function (value) {
                parsedRelationship.appCategories.push({
                  RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                  ORDER: value['ORDER'],
                  app_category_INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                  ID: value['PARTNER_INSTANCES'][0]['r_app_category'][0]['ID'],
                  NAME: value['PARTNER_INSTANCES'][0]['r_app_category'][0]['NAME'],
                  ICON: value['PARTNER_INSTANCES'][0]['r_app_category'][0]['ICON']
                });
              });
            }

            function __parseAppAuthObject(relationship) {
              relationship.values.forEach(function (value) {
                var authorization = value['AUTH_VALUE'] ? JSON.parse(value['AUTH_VALUE']) : null;
                var status = authorization ? Object.values(authorization.AuthFieldValue).findIndex(function (authValue) {
                  return !authValue;
                }) !== -1 ? 'yellow' : 'green' : 'red';
                parsedRelationship.appAuthObjects.push({
                  CHECKED: '',
                  COLLAPSED: false,
                  NODE_ID: value['RELATIONSHIP_INSTANCE_GUID'],
                  STATUS: status,
                  RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                  auth_object_INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                  AUTH_VALUE: value['AUTH_VALUE'],
                  OBJ_NAME: value['PARTNER_INSTANCES'][0]['authObject'][0]['OBJ_NAME'],
                  DESC: value['PARTNER_INSTANCES'][0]['authObject'][0]['DESC'],
                  ROW_TYPE: 'OBJECT',
                  FIELD_NAME: '',
                  DATA_ELEMENT: ''
                });
                var authObjectFields = value['PARTNER_INSTANCES'][0]['relationships'][0];
                authObjectFields.values.forEach(function (value2) {
                  var authFieldName = value2['PARTNER_INSTANCES'][0]['authField'][0]['FIELD_NAME'];
                  parsedRelationship.appAuthObjects.push({
                    CHECKED: '',
                    COLLAPSED: false,
                    NODE_ID: value['RELATIONSHIP_INSTANCE_GUID'],
                    STATUS: authorization.AuthFieldValue[authFieldName] ? authorization.AuthFieldValue[authFieldName].length > 0 ? 'green' : 'red' : 'red',
                    RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                    auth_object_INSTANCE_GUID: '',
                    AUTH_VALUE: authorization && authorization.AuthFieldValue[authFieldName] && JSON.stringify(authorization.AuthFieldValue[authFieldName], null, ' '),
                    OBJ_NAME: value['PARTNER_INSTANCES'][0]['authObject'][0]['OBJ_NAME'],
                    DESC: '',
                    ROW_TYPE: 'FIELD',
                    FIELD_NAME: authFieldName,
                    DATA_ELEMENT: value2['PARTNER_INSTANCES'][0]['authField'][0]['DATA_ELEMENT']
                  });
                });
              });
            }
          }
        }, {
          key: "_resetValue",
          value: function _resetValue(data) {
            this.originalValue = {
              APP_ID: data['app'][0]['APP_ID'],
              NAME: data['app'][0]['NAME'],
              target: {
                ROUTE_LINK: data['app'][0]['ROUTE_LINK'],
                IS_EXTERNAL: data['app'][0]['IS_EXTERNAL']
              },
              admin: {
                CREATED_BY: data['app'][0]['CREATED_BY'],
                CREATE_TIME: data['app'][0]['CREATE_TIME'],
                CHANGED_BY: data['app'][0]['CHANGED_BY'],
                CHANGE_TIME: data['app'][0]['CHANGE_TIME']
              }
            };

            var parsedRelationship = this._parseRelationships(data['relationships']);

            this.originalValue['appCategories'] = parsedRelationship.appCategories;
            this.originalValue['appAuthObjects'] = parsedRelationship.appAuthObjects;
            this.mainForm.reset(this.originalValue);
          }
        }, {
          key: "_setCheckBoxState",
          value: function _setCheckBoxState() {
            if (this.readonly) {
              this.mainForm.get('target.IS_EXTERNAL').disable();
            } else {
              this.mainForm.get('target.IS_EXTERNAL').enable();
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this13 = this;

            this.messageService.clearMessages();

            if (this._composeChanges()) {
              this.identityService.save(this.changedValue).subscribe(function (data) {
                _this13.changedValue = {};

                if ('INSTANCE_GUID' in data) {
                  var appID = data['app'][0]['APP_ID'];
                  _this13.instanceGUID = data['INSTANCE_GUID'];
                  _this13.isNewMode = false;

                  _this13.identityService.getAppDetail(appID).subscribe(function (instance) {
                    if ('ENTITY_ID' in instance) {
                      _this13._switch2DisplayMode();

                      _this13._resetValue(instance);
                    } else {
                      var errorMessages = instance;
                      errorMessages.forEach(function (msg) {
                        return _this13.messageService.add(msg);
                      });
                    }
                  });

                  _this13.messageService.reportMessage('APP', 'SAVED', 'S', appID);
                } else {
                  var errorMessages = data;
                  errorMessages.forEach(function (msg) {
                    return _this13.messageService.add(msg);
                  });
                }
              });
            }
          }
        }, {
          key: "_composeChanges",
          value: function _composeChanges() {
            if (this.mainForm.invalid) {
              this.messageService.reportMessage('PERMISSION', 'INVALID', 'E');
              return false;
            }

            if (this.mainForm.dirty === false) {
              this.messageService.reportMessage('GENERAL', 'NO_CHANGE', 'W');
              return false;
            }

            this.changedValue['ENTITY_ID'] = 'app';
            this.changedValue['INSTANCE_GUID'] = this.instanceGUID;

            if (this.isNewMode) {
              this.changedValue['app'] = {
                action: 'add',
                APP_ID: this.mainForm.get('APP_ID').value,
                CREATED_BY: this.identityService.Session.USER_ID,
                CREATE_TIME: this.identityService.CurrentTime,
                CHANGED_BY: this.identityService.Session.USER_ID,
                CHANGE_TIME: this.identityService.CurrentTime
              };
            } else {
              this.changedValue['app'] = {
                action: 'update',
                CHANGED_BY: this.identityService.Session.USER_ID,
                CHANGE_TIME: this.identityService.CurrentTime
              };
            }

            if (this.mainForm.get('NAME').dirty) {
              this.changedValue['app']['NAME'] = this.mainForm.get('NAME').value;
            }

            if (this.mainForm.get('target.ROUTE_LINK').dirty) {
              this.changedValue['app']['ROUTE_LINK'] = this.mainForm.get('target.ROUTE_LINK').value;
            }

            if (this.mainForm.get('target.IS_EXTERNAL').dirty) {
              this.changedValue['app']['IS_EXTERNAL'] = this.mainForm.get('target.IS_EXTERNAL').value;
            }

            var appAuthObjFormArray = this.mainForm.get('appAuthObjects');
            var relationship = this.identityService.composeAuthChanges(appAuthObjFormArray, this.originalValue['appAuthObjects'], 'rs_app_auth');

            if (relationship) {
              this.changedValue['relationships'] = [relationship];
            }

            return true;
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            if (this.isNewMode || this.mainForm && this.mainForm.dirty) {
              return this.dialogService.confirm('Discard changes?');
            } else {
              return true;
            }
          }
        }]);

        return _AppDetailComponent;
      }();

      _AppDetailComponent.ɵfac = function AppDetailComponent_Factory(t) {
        return new (t || _AppDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_10__.AttributeControlService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_10__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_10__.UiMapperService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_14__.MessageService));
      };

      _AppDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _AppDetailComponent,
        selectors: [["app-app-detail"]],
        decls: 17,
        vars: 5,
        consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Return to List", "id", "toList", 1, "btn", "btn-sm", "btn-outline-info", "mr-2", 3, "click"], [1, "fas", "fa-list-ul"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "relationMetas", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "ctrlName", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "adminRelation", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "readonly"], [3, "mainForm", "ctrlName", "readonly"], [3, "mainForm", "readonly"], [3, "mainForm", "relationMetas", "adminRelation"]],
        template: function AppDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppDetailComponent_Template_button_click_5_listener() {
              return ctx.return2List();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " To List");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppDetailComponent_Template_button_click_8_listener() {
              return ctx.switchEditDisplay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AppDetailComponent_span_9_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AppDetailComponent_span_10_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppDetailComponent_Template_button_click_11_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, AppDetailComponent_div_16_Template, 22, 21, "div", 11);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.isNewMode ? "New App" : ctx.readonly ? "Display App" : "Change App");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mainForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ui_message_angular__WEBPACK_IMPORTED_MODULE_14__.MessageComponent, jor_angular__WEBPACK_IMPORTED_MODULE_10__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchCase, _app_target_app_target_component__WEBPACK_IMPORTED_MODULE_3__.AppTargetComponent, _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_4__.AuthorizationComponent, _app_categories_app_categories_component__WEBPACK_IMPORTED_MODULE_5__.AppCategoriesComponent, _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_6__.AdminInfoComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    6326:
    /*!*******************************************************************!*\
      !*** ./src/app/app/app-detail/app-target/app-target.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppTargetComponent": function AppTargetComponent() {
          return (
            /* binding */
            _AppTargetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _AppTargetComponent = /*#__PURE__*/function () {
        function _AppTargetComponent(attributeControlService) {
          _classCallCheck(this, _AppTargetComponent);

          this.attributeControlService = attributeControlService;
        }

        _createClass(_AppTargetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.appTargetForm = this.mainForm.get('target');
            this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(function (relationMeta) {
              return relationMeta.RELATION_ID === 'app';
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

        return _AppTargetComponent;
      }();

      _AppTargetComponent.ɵfac = function AppTargetComponent_Factory(t) {
        return new (t || _AppTargetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeControlService));
      };

      _AppTargetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppTargetComponent,
        selectors: [["app-app-target"]],
        inputs: {
          readonly: "readonly",
          mainForm: "mainForm",
          relationMetas: "relationMetas"
        },
        decls: 3,
        vars: 8,
        consts: [[1, "mt-4", "ml-2", "row"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "isSmallSize", "readonly"]],
        template: function AppTargetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dk-app-attribute-form2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("ROUTE_LINK"))("formGroup", ctx.appTargetForm)("isSmallSize", true)("readonly", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("IS_EXTERNAL"))("formGroup", ctx.appTargetForm)("isSmallSize", true)("readonly", ctx.readonly);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtdGFyZ2V0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    1067:
    /*!****************************************************!*\
      !*** ./src/app/app/app-list/app-list.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppListComponent": function AppListComponent() {
          return (
            /* binding */
            _AppListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0() {
        return {
          action: "display"
        };
      };

      var _c1 = function _c1(a1, a2) {
        return ["/apps", a1, a2];
      };

      function AppListComponent_tr_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppListComponent_tr_37_Template_input_ngModelChange_9_listener($event) {
            var app_r1 = ctx.$implicit;
            return app_r1.IS_EXTERNAL = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppListComponent_tr_37_Template_button_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var app_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.display(app_r1.APP_ID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppListComponent_tr_37_Template_button_click_17_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var app_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.change(app_r1.APP_ID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppListComponent_tr_37_Template_button_click_19_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var app_r1 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6["delete"](app_r1.APP_ID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var app_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c1, app_r1.APP_ID, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r1.APP_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r1.NAME);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r1.ROUTE_LINK);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", app_r1.IS_EXTERNAL);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r1.CHANGED_BY);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r1.CHANGE_TIME);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "display": a0
        };
      };

      var _AppListComponent = /*#__PURE__*/function () {
        function _AppListComponent(identityService, messageService, router) {
          _classCallCheck(this, _AppListComponent);

          this.identityService = identityService;
          this.messageService = messageService;
          this.router = router;
          this.showDeletionConfirmation = false;
        }

        _createClass(_AppListComponent, [{
          key: "displayDeletionConfirmation",
          get: function get() {
            return this.showDeletionConfirmation ? 'block' : 'none';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "search",
          value: function search() {
            var _this14 = this;

            this.messageService.clearMessages();
            this.apps = [];
            this.appID = this.appID ? this.appID.trim() : '';
            this.appName = this.appName ? this.appName.trim() : '';
            this.identityService.searchApps(this.appID, this.appName).subscribe(function (data) {
              if (!data[0]) {
                _this14.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.messageType.Warning);
              } else if (data[0]['msgCat']) {
                var messages = data;
                messages.forEach(function (msg) {
                  return _this14.messageService.add(msg);
                });
              } else {
                _this14.apps = data;
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
          key: "new",
          value: function _new() {
            this.router.navigate(['apps', '/', {
              action: 'new'
            }]);
          }
        }, {
          key: "display",
          value: function display(appID) {
            this.router.navigate(['apps', appID, {
              action: 'display'
            }]);
          }
        }, {
          key: "change",
          value: function change(appID) {
            this.router.navigate(['apps', appID, {
              action: 'change'
            }]);
          }
        }, {
          key: "delete",
          value: function _delete(appID) {
            this.toBeDeletedInstance = appID;
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
            var _this15 = this;

            var toBeDeletedInstanceGUID = this.apps.find(function (ele) {
              return ele.APP_ID === _this15.toBeDeletedInstance;
            }).INSTANCE_GUID;
            this.identityService["delete"](toBeDeletedInstanceGUID).subscribe(function (errorMsg) {
              _this15.showDeletionConfirmation = false;

              if (errorMsg) {
                var messages = errorMsg;
                messages.forEach(function (msg) {
                  return _this15.messageService.add(msg);
                });
              } else {
                _this15.search();
              }
            });
          }
        }]);

        return _AppListComponent;
      }();

      _AppListComponent.ɵfac = function AppListComponent_Factory(t) {
        return new (t || _AppListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _AppListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppListComponent,
        selectors: [["app-app-list"]],
        decls: 55,
        vars: 9,
        consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "app_id", 1, "col-sm-3", "col-form-label"], ["id", "app_id", "name", "app_id", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "app_name", 1, "col-sm-3", "col-form-label"], ["id", "app_name", "name", "app_name", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], ["type", "checkbox", "disabled", "", 3, "ngModel", "ngModelChange"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]],
        template: function AppListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "App ID:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppListComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.appID = $event;
            })("keyup", function AppListComponent_Template_input_keyup_5_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "App Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppListComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.appName = $event;
            })("keyup", function AppListComponent_Template_input_keyup_9_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppListComponent_Template_button_click_11_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppListComponent_Template_button_click_16_listener() {
              return ctx["new"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " New");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "External?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Changed By");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Changed At");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AppListComponent_tr_37_Template, 21, 11, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h5", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Confirm Deletion");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppListComponent_Template_button_click_44_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppListComponent_Template_button_click_51_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppListComponent_Template_button_click_53_listener() {
              return ctx.confirmDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.appID);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.appName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.apps);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Are you sure to delete the App '", ctx.toBeDeletedInstance, "'?");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    3169:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/app_category/app-category-detail/app-category-detail-app/app-category-detail-app.component.ts ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppCategoryDetailAppComponent": function AppCategoryDetailAppComponent() {
          return (
            /* binding */
            _AppCategoryDetailAppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../identity.service */
      8934);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function AppCategoryDetailAppComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppCategoryDetailAppComponent_tr_12_Template_input_change_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.onChangeKey(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryDetailAppComponent_tr_12_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;
            var appForm_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.onSearchHelp(i_r2, appForm_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryDetailAppComponent_tr_12_Template_button_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6["delete"](i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var appForm_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", appForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx_r0.readonly || ctx_r0.isExisting(appForm_r1) && appForm_r1.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", appForm_r1.get("APP_ID").errors == null ? null : appForm_r1.get("APP_ID").errors.message, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", appForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", appForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx_r0.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.readonly);
        }
      }

      var _AppCategoryDetailAppComponent = /*#__PURE__*/function () {
        function _AppCategoryDetailAppComponent(fb, identityService) {
          _classCallCheck(this, _AppCategoryDetailAppComponent);

          this.fb = fb;
          this.identityService = identityService;
        }

        _createClass(_AppCategoryDetailAppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.appFormArray = this.mainForm.get('apps'); // Recheck each role since every time the template is initialized, Angular clears the error status.

            if (!this.readonly) {
              this.appFormArray.controls.forEach(function (ctrl, index) {
                _this16.onChangeKey(index);
              });
            }
          }
        }, {
          key: "delete",
          value: function _delete(index) {
            if (index !== this.appFormArray.length - 1) {
              this.appFormArray.removeAt(index);
              this.appFormArray.markAsDirty();
            }
          }
        }, {
          key: "onChangeKey",
          value: function onChangeKey(index) {
            var currentFormGroup = this.appFormArray.at(index);

            if (this.isExisting(currentFormGroup)) {
              currentFormGroup.get('APP_ID').setErrors({
                message: 'Duplicate Apps'
              });
              return;
            }

            if (index === this.appFormArray.length - 1 && currentFormGroup.value.APP_ID.trim() !== '') {
              // Only work if the last line is not new and empty
              this.appFormArray.push(this.fb.group({
                APP_ID: [''],
                NAME: [''],
                ORDER: [0],
                portal_app_INSTANCE_GUID: [''],
                RELATIONSHIP_INSTANCE_GUID: ['']
              }));
            }

            if (currentFormGroup.value.APP_ID) {
              this.identityService.getAppByID(currentFormGroup.value.APP_ID).subscribe(function (data) {
                if (data[0] && data[0]['msgCat']) {
                  currentFormGroup.get('APP_ID').setErrors({
                    message: data[0]['msgShortText']
                  });
                } else {
                  currentFormGroup.get('NAME').setValue(data['app'][0]['NAME']);
                  currentFormGroup.get('portal_app_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);
                }
              });
            }
          }
        }, {
          key: "isExisting",
          value: function isExisting(key) {
            var existIndex = this.appFormArray.controls.findIndex(function (ctrl) {
              return ctrl.value.APP_ID === key.value.APP_ID && ctrl.get('APP_ID').pristine && ctrl.value.APP_ID !== '';
            });
            return existIndex !== -1;
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(rowID, exportObject) {
            var afterExportFn = function (context, rowIDx) {
              return function () {
                return context.onChangeKey(rowIDx);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModalByEntity('app', 'app', exportObject, this.readonly || this.isExisting(exportObject) && exportObject.valid, 'APP_ID', 'APP_ID', afterExportFn);
          }
        }]);

        return _AppCategoryDetailAppComponent;
      }();

      _AppCategoryDetailAppComponent.ɵfac = function AppCategoryDetailAppComponent_Factory(t) {
        return new (t || _AppCategoryDetailAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService));
      };

      _AppCategoryDetailAppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppCategoryDetailAppComponent,
        selectors: [["app-app-category-detail-app"]],
        viewQuery: function AppCategoryDetailAppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__.SearchHelpComponent, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
          }
        },
        inputs: {
          readonly: "readonly",
          mainForm: "mainForm"
        },
        decls: 14,
        vars: 2,
        consts: [[1, "table", "table-bordered", "table-sm", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light"], [1, "dk-name"], [1, "dk-description"], [1, "dk-number"], [1, "dk-actions"], ["formArrayName", "apps", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "APP_ID", 1, "form-control", "form-control-sm", 3, "readonly", "change"], [1, "invalid-tooltip"], [1, "input-group-append"], ["type", "button", "id", "searchApp", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "formControlName", "NAME", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "number", "formControlName", "ORDER", 1, "form-control", "form-control-sm", 3, "readonly"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"]],
        template: function AppCategoryDetailAppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "App ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "App Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppCategoryDetailAppComponent_tr_12_Template, 16, 7, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "dk-app-search-help");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.mainForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.appFormArray.controls);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, jor_angular__WEBPACK_IMPORTED_MODULE_3__.SearchHelpComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor],
        styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-number[_ngcontent-%COMP%]{\n  width: 5rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1jYXRlZ29yeS1kZXRhaWwtYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAtY2F0ZWdvcnktZGV0YWlsLWFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1uYW1le1xuICB3aWR0aDogMjByZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiAyMHJlbTtcbn1cbi5kay1udW1iZXJ7XG4gIHdpZHRoOiA1cmVtO1xufVxuLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiAzcmVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    7488:
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/app_category/app-category-detail/app-category-detail-role/app-category-detail-role.component.ts ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppCategoryDetailRoleComponent": function AppCategoryDetailRoleComponent() {
          return (
            /* binding */
            _AppCategoryDetailRoleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../identity.service */
      8934);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function AppCategoryDetailRoleComponent_tr_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryDetailRoleComponent_tr_10_Template_button_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;
            var roleForm_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.onSearchHelp(i_r2, roleForm_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var roleForm_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", roleForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", roleForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", roleForm_r1);
        }
      }

      var _AppCategoryDetailRoleComponent = /*#__PURE__*/function () {
        function _AppCategoryDetailRoleComponent(fb, identityService) {
          _classCallCheck(this, _AppCategoryDetailRoleComponent);

          this.fb = fb;
          this.identityService = identityService;
        }

        _createClass(_AppCategoryDetailRoleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.roleFormArray = this.mainForm.get('roles');
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(rowID, exportObject) {
            this.searchHelpComponent.openSearchHelpModalBySearchHelp('ROLE', 'NAME', 'NAME', exportObject, true, null);
          }
        }]);

        return _AppCategoryDetailRoleComponent;
      }();

      _AppCategoryDetailRoleComponent.ɵfac = function AppCategoryDetailRoleComponent_Factory(t) {
        return new (t || _AppCategoryDetailRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService));
      };

      _AppCategoryDetailRoleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppCategoryDetailRoleComponent,
        selectors: [["app-app-category-detail-role"]],
        viewQuery: function AppCategoryDetailRoleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__.SearchHelpComponent, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
          }
        },
        inputs: {
          mainForm: "mainForm"
        },
        decls: 12,
        vars: 2,
        consts: [[1, "table", "table-bordered", "table-sm", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light"], [1, "dk-name"], [1, "dk-description"], [1, "dk-number"], ["formArrayName", "apps", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "NAME", "readonly", "", 1, "form-control", "form-control-sm"], [1, "input-group-append"], ["type", "button", "id", "searchRole", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], [1, "dk-description", 3, "formGroup"], ["type", "text", "formControlName", "DESCRIPTION", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "number", "formControlName", "ORDER", "readonly", "", 1, "form-control", "form-control-sm"]],
        template: function AppCategoryDetailRoleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppCategoryDetailRoleComponent_tr_10_Template, 11, 3, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dk-app-search-help");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.mainForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roleFormArray.controls);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, jor_angular__WEBPACK_IMPORTED_MODULE_3__.SearchHelpComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor],
        styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 30rem;\n}\n.dk-number[_ngcontent-%COMP%]{\n  width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1jYXRlZ29yeS1kZXRhaWwtcm9sZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImFwcC1jYXRlZ29yeS1kZXRhaWwtcm9sZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1uYW1le1xuICB3aWR0aDogMjByZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiAzMHJlbTtcbn1cbi5kay1udW1iZXJ7XG4gIHdpZHRoOiA1cmVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    8448:
    /*!***********************************************************************************!*\
      !*** ./src/app/app_category/app-category-detail/app-category-detail.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppCategoryDetailComponent": function AppCategoryDetailComponent() {
          return (
            /* binding */
            _AppCategoryDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      5758);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var _async_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../async-validators */
      438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../dialog.service */
      1969);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _app_category_detail_app_app_category_detail_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-category-detail-app/app-category-detail-app.component */
      3169);
      /* harmony import */


      var _app_category_detail_role_app_category_detail_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-category-detail-role/app-category-detail-role.component */
      7488);
      /* harmony import */


      var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../admin-info/admin-info.component */
      228);

      function AppCategoryDetailComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AppCategoryDetailComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Display");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function AppCategoryDetailComponent_div_16_app_app_category_detail_app_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-app-category-detail-app", 24);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mainForm", ctx_r3.mainForm)("readonly", ctx_r3.readonly);
        }
      }

      function AppCategoryDetailComponent_div_16_app_app_category_detail_role_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-app-category-detail-role", 25);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mainForm", ctx_r4.mainForm);
        }
      }

      function AppCategoryDetailComponent_div_16_app_admin_info_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-admin-info", 26);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mainForm", ctx_r5.mainForm)("relationMetas", ctx_r5.relationMetas)("adminRelation", "category");
        }
      }

      function AppCategoryDetailComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppCategoryDetailComponent_div_16_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r6.switchTabStrip(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Apps");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppCategoryDetailComponent_div_16_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r8.switchTabStrip(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppCategoryDetailComponent_div_16_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r9.switchTabStrip(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, AppCategoryDetailComponent_div_16_app_app_category_detail_app_16_Template, 1, 2, "app-app-category-detail-app", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AppCategoryDetailComponent_div_16_app_app_category_detail_role_17_Template, 1, 1, "app-app-category-detail-role", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AppCategoryDetailComponent_div_16_app_admin_info_18_Template, 1, 3, "app-admin-info", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("ID"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("NAME"))("formGroup", ctx_r2.mainForm)("readonly", ctx_r2.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("ICON"))("formGroup", ctx_r2.mainForm)("readonly", ctx_r2.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 3);
        }
      }

      var _AppCategoryDetailComponent = /*#__PURE__*/function () {
        function _AppCategoryDetailComponent(fb, route, router, dialogService, identityService, attributeControlService, entityService, uiMapperService, messageService) {
          _classCallCheck(this, _AppCategoryDetailComponent);

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
          this.originalValue = {};
          this.changedValue = {};
          this.tabStrip = 1;
        }

        _createClass(_AppCategoryDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (params) {
              _this17.action = params.get('action');

              if (_this17.action === 'new') {
                _this17.isNewMode = true;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([_this17.entityService.getRelationMetaOfEntity('category'), _this17._createNewEntity()]);
              } else {
                _this17.isNewMode = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([_this17.entityService.getRelationMetaOfEntity('category'), _this17.identityService.getAppCategoryDetail(params.get('appCategory'))]);
              }
            })).subscribe(function (data) {
              _this17.relationMetas = data[0];
              _this17.attrCtrls = _this17.attributeControlService.toAttributeControl(_this17.relationMetas.find(function (relationMeta) {
                return relationMeta.RELATION_ID === 'r_app_category';
              }).ATTRIBUTES);

              if ('ENTITY_ID' in data[1]) {
                _this17.instanceGUID = data[1]['INSTANCE_GUID'];

                _this17._generateMainForm(data[1]);

                if (_this17.isNewMode || _this17.action === 'change') {
                  _this17._switch2EditMode();
                } else {
                  _this17._switch2DisplayMode();
                }
              } else {
                var errorMessages = data[1];
                errorMessages.forEach(function (msg) {
                  return _this17.messageService.add(msg);
                });
              }
            });
          }
        }, {
          key: "return2List",
          value: function return2List() {
            this.router.navigate(['app-categories']);
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
            var _this18 = this;

            if (this.readonly) {
              this._switch2EditMode();
            } else {
              if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    _this18.mainForm.reset(_this18.originalValue);

                    _this18._switch2DisplayMode();
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
            var appCategoryIDCtrl = this.mainForm.get('ID');
            appCategoryIDCtrl.clearAsyncValidators();
            var appArray = this.mainForm.get('apps');
            var lastIndex = appArray.length - 1;

            while (lastIndex >= 0) {
              var appGroup = appArray.at(lastIndex);

              if (appGroup.invalid || !appGroup.value.APP_ID) {
                appArray.removeAt(lastIndex);
              }

              lastIndex--;
            }

            this.mainForm.markAsPristine(); // Replace the URL from change to display

            window.history.replaceState({}, '', "/app-categories/".concat(appCategoryIDCtrl.value, ";action=display"));
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;
            var appCategoryIDCtrl = this.mainForm.get('ID');

            if (this.isNewMode) {
              appCategoryIDCtrl.setAsyncValidators((0, _async_validators__WEBPACK_IMPORTED_MODULE_0__.existingAppCategoryValidator)(this.identityService, this.messageService));
            }

            var appArray = this.mainForm.get('apps');
            appArray.push(this.fb.group({
              APP_ID: [''],
              NAME: [''],
              ORDER: [0],
              portal_app_INSTANCE_GUID: [''],
              RELATIONSHIP_INSTANCE_GUID: ['']
            })); // Replace the URL from to display

            if (this.action === 'display') {
              this.action = 'change';
            }

            window.history.replaceState({}, '', "/app-categories/".concat(appCategoryIDCtrl.value, ";action=") + this.action);
          }
        }, {
          key: "_createNewEntity",
          value: function _createNewEntity() {
            var appCategoryDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_9__.Entity();
            appCategoryDetail.ENTITY_ID = 'category';
            appCategoryDetail['category'] = [{
              NAME: '',
              TYPE: 'APP',
              CREATED_BY: '',
              CREATE_TIME: '',
              CHANGED_BY: '',
              CHANGE_TIME: ''
            }];
            appCategoryDetail['r_app_category'] = [{
              ID: '',
              NAME: '',
              ICON: ''
            }];
            appCategoryDetail['relationships'] = [];
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(appCategoryDetail);
          }
        }, {
          key: "_generateMainForm",
          value: function _generateMainForm(data) {
            var _this19 = this;

            this.mainForm = this.fb.group({
              ID: [data['r_app_category'][0]['ID'], [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
              NAME: [data['r_app_category'][0]['NAME']],
              ICON: [data['r_app_category'][0]['ICON']],
              admin: this.fb.group({
                CREATED_BY: [data['category'][0]['CREATED_BY']],
                CREATE_TIME: [data['category'][0]['CREATE_TIME']],
                CHANGED_BY: [data['category'][0]['CHANGED_BY']],
                CHANGE_TIME: [data['category'][0]['CHANGE_TIME']]
              })
            });

            var parsedRelationship = this._parseRelationships(data['relationships']);

            this.mainForm.addControl('apps', this.fb.array(parsedRelationship.apps.map(function (app) {
              return _this19.fb.group(app);
            })));
            this.mainForm.addControl('roles', this.fb.array(parsedRelationship.roles.map(function (role) {
              return _this19.fb.group(role);
            })));
            this.originalValue = this.mainForm.getRawValue();
          }
        }, {
          key: "_parseRelationships",
          value: function _parseRelationships(relationships) {
            var parsedRelationship = {
              apps: [],
              roles: []
            };

            if (!relationships) {
              return parsedRelationship;
            }

            relationships.forEach(function (relationship) {
              switch (relationship.RELATIONSHIP_ID) {
                case 'rs_app_category':
                  __parseApp(relationship);

                  break;

                case 'rs_role_category_profile':
                  __parseSystemRole(relationship);

                  break;

                default: // Do nothing.

              }
            });
            return parsedRelationship;

            function __parseApp(relationship) {
              relationship.values.forEach(function (value) {
                parsedRelationship.apps.push({
                  RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                  portal_app_INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                  APP_ID: value['PARTNER_INSTANCES'][0]['app'][0]['APP_ID'],
                  NAME: value['PARTNER_INSTANCES'][0]['app'][0]['NAME'],
                  ORDER: value['ORDER']
                });
              });
            }

            function __parseSystemRole(relationship) {
              relationship.values.forEach(function (value) {
                var permission = value['PARTNER_INSTANCES'].find(function (partner) {
                  return partner.ENTITY_ID === 'permission';
                });
                parsedRelationship.roles.push({
                  RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                  system_role_INSTANCE_GUID: permission.INSTANCE_GUID,
                  NAME: permission.r_role[0].NAME,
                  DESCRIPTION: permission.r_role[0].DESCRIPTION,
                  ORDER: value['ORDER']
                });
              });
            }
          }
        }, {
          key: "_resetValue",
          value: function _resetValue(data) {
            this.originalValue = {
              ID: data['r_app_category'][0]['ID'],
              NAME: data['r_app_category'][0]['NAME'],
              ICON: data['r_app_category'][0]['ICON'],
              admin: {
                CREATED_BY: data['category'][0]['CREATED_BY'],
                CREATE_TIME: data['category'][0]['CREATE_TIME'],
                CHANGED_BY: data['category'][0]['CHANGED_BY'],
                CHANGE_TIME: data['category'][0]['CHANGE_TIME']
              }
            };

            var parsedRelationship = this._parseRelationships(data['relationships']);

            this.originalValue['apps'] = parsedRelationship.apps;
            this.originalValue['roles'] = parsedRelationship.roles;
            this.mainForm.reset(this.originalValue);
          }
        }, {
          key: "save",
          value: function save() {
            var _this20 = this;

            this.messageService.clearMessages();

            if (this._composeChanges()) {
              this.identityService.save(this.changedValue).subscribe(function (data) {
                _this20.changedValue = {};

                if ('INSTANCE_GUID' in data) {
                  var appCategoryID = data['r_app_category'][0]['ID'];
                  _this20.instanceGUID = data['INSTANCE_GUID'];
                  _this20.isNewMode = false;

                  _this20.identityService.getAppCategoryDetail(appCategoryID).subscribe(function (instance) {
                    if ('ENTITY_ID' in instance) {
                      _this20._switch2DisplayMode();

                      _this20._resetValue(instance);
                    } else {
                      var errorMessages = instance;
                      errorMessages.forEach(function (msg) {
                        return _this20.messageService.add(msg);
                      });
                    }
                  });

                  _this20.messageService.reportMessage('APP_CATEGORY', 'SAVED', 'S', appCategoryID);
                } else {
                  var errorMessages = data;
                  errorMessages.forEach(function (msg) {
                    return _this20.messageService.add(msg);
                  });
                }
              });
            }
          }
        }, {
          key: "_composeChanges",
          value: function _composeChanges() {
            if (this.mainForm.invalid) {
              this.messageService.reportMessage('APP_CATEGORY', 'INVALID', 'E');
              return false;
            }

            if (this.mainForm.dirty === false) {
              this.messageService.reportMessage('GENERAL', 'NO_CHANGE', 'W');
              return false;
            }

            this.changedValue['ENTITY_ID'] = 'category';
            this.changedValue['INSTANCE_GUID'] = this.instanceGUID;

            if (this.isNewMode) {
              this.changedValue['category'] = {
                action: 'add',
                TYPE: 'APP',
                CREATED_BY: this.identityService.Session.USER_ID,
                CREATE_TIME: this.identityService.CurrentTime,
                CHANGED_BY: this.identityService.Session.USER_ID,
                CHANGE_TIME: this.identityService.CurrentTime
              };
              this.changedValue['r_app_category'] = {
                action: 'add',
                ID: this.mainForm.get('ID').value
              };
            } else {
              this.changedValue['category'] = {
                action: 'update',
                CHANGED_BY: this.identityService.Session.USER_ID,
                CHANGE_TIME: this.identityService.CurrentTime
              };
              this.changedValue['r_app_category'] = {
                action: 'update',
                ID: this.mainForm.get('ID').value
              };
            }

            if (this.mainForm.get('NAME').dirty) {
              this.changedValue['category']['NAME'] = this.mainForm.get('NAME').value;
              this.changedValue['r_app_category']['NAME'] = this.mainForm.get('NAME').value;
            }

            if (this.mainForm.get('ICON').dirty) {
              this.changedValue['r_app_category']['ICON'] = this.mainForm.get('ICON').value;
            }

            var appFormArray = this.mainForm.get('apps');
            var relationship = this.uiMapperService.composeChangedRelationship('rs_app_category', [{
              ENTITY_ID: 'app',
              ROLE_ID: 'portal_app'
            }], appFormArray, this.originalValue['apps'], ['APP_ID', 'NAME']);

            if (relationship) {
              this.changedValue['relationships'] = [relationship];
            }

            return true;
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            if (this.isNewMode || this.mainForm && this.mainForm.dirty) {
              return this.dialogService.confirm('Discard changes?');
            } else {
              return true;
            }
          }
        }]);

        return _AppCategoryDetailComponent;
      }();

      _AppCategoryDetailComponent.ɵfac = function AppCategoryDetailComponent_Factory(t) {
        return new (t || _AppCategoryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_9__.AttributeControlService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_9__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_9__.UiMapperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_13__.MessageService));
      };

      _AppCategoryDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _AppCategoryDetailComponent,
        selectors: [["app-app-category-detail"]],
        decls: 17,
        vars: 5,
        consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Return to List", "id", "toList", 1, "btn", "btn-sm", "btn-outline-info", "mr-2", 3, "click"], [1, "fas", "fa-list-ul"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "mx-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "mx-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "readonly", 4, "ngSwitchCase"], [3, "mainForm", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "adminRelation", 4, "ngSwitchCase"], [3, "mainForm", "readonly"], [3, "mainForm"], [3, "mainForm", "relationMetas", "adminRelation"]],
        template: function AppCategoryDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppCategoryDetailComponent_Template_button_click_5_listener() {
              return ctx.return2List();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " To List");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppCategoryDetailComponent_Template_button_click_8_listener() {
              return ctx.switchEditDisplay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AppCategoryDetailComponent_span_9_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AppCategoryDetailComponent_span_10_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppCategoryDetailComponent_Template_button_click_11_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, AppCategoryDetailComponent_div_16_Template, 19, 22, "div", 11);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.isNewMode ? "New App Category" : ctx.readonly ? "Display App Category" : "Change App Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mainForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ui_message_angular__WEBPACK_IMPORTED_MODULE_13__.MessageComponent, jor_angular__WEBPACK_IMPORTED_MODULE_9__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, _app_category_detail_app_app_category_detail_app_component__WEBPACK_IMPORTED_MODULE_3__.AppCategoryDetailAppComponent, _app_category_detail_role_app_category_detail_role_component__WEBPACK_IMPORTED_MODULE_4__.AppCategoryDetailRoleComponent, _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_5__.AdminInfoComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtY2F0ZWdvcnktZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    7611:
    /*!*******************************************************************************!*\
      !*** ./src/app/app_category/app-category-list/app-category-list.component.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppCategoryListComponent": function AppCategoryListComponent() {
          return (
            /* binding */
            _AppCategoryListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0() {
        return {
          action: "display"
        };
      };

      var _c1 = function _c1(a1, a2) {
        return ["/app-categories", a1, a2];
      };

      function AppCategoryListComponent_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryListComponent_tr_35_Template_button_click_13_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var appCategory_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.display(appCategory_r1.ID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryListComponent_tr_35_Template_button_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var appCategory_r1 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.change(appCategory_r1.ID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryListComponent_tr_35_Template_button_click_17_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var appCategory_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5["delete"](appCategory_r1.ID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var appCategory_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c1, appCategory_r1.ID, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](appCategory_r1.ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](appCategory_r1.NAME);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", appCategory_r1.ICON);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](appCategory_r1.CHANGED_BY);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](appCategory_r1.CHANGE_TIME);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "display": a0
        };
      };

      var _AppCategoryListComponent = /*#__PURE__*/function () {
        function _AppCategoryListComponent(identityService, messageService, router) {
          _classCallCheck(this, _AppCategoryListComponent);

          this.identityService = identityService;
          this.messageService = messageService;
          this.router = router;
          this.showDeletionConfirmation = false;
        }

        _createClass(_AppCategoryListComponent, [{
          key: "displayDeletionConfirmation",
          get: function get() {
            return this.showDeletionConfirmation ? 'block' : 'none';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "search",
          value: function search() {
            var _this21 = this;

            this.messageService.clearMessages();
            this.appCategories = [];
            this.appCategoryID = this.appCategoryID ? this.appCategoryID.trim() : '';
            this.appCategoryName = this.appCategoryName ? this.appCategoryName.trim() : '';
            this.identityService.searchAppCategories(this.appCategoryID, this.appCategoryName).subscribe(function (data) {
              if (!data[0]) {
                _this21.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.messageType.Warning);
              } else if (data[0]['msgCat']) {
                var messages = data;
                messages.forEach(function (msg) {
                  return _this21.messageService.add(msg);
                });
              } else {
                _this21.appCategories = data;
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
          key: "new",
          value: function _new() {
            this.router.navigate(['app-categories', '/', {
              action: 'new'
            }]);
          }
        }, {
          key: "display",
          value: function display(appCategoryID) {
            this.router.navigate(['app-categories', appCategoryID, {
              action: 'display'
            }]);
          }
        }, {
          key: "change",
          value: function change(appCategoryID) {
            this.router.navigate(['app-categories', appCategoryID, {
              action: 'change'
            }]);
          }
        }, {
          key: "delete",
          value: function _delete(appCategoryID) {
            this.toBeDeletedInstance = appCategoryID;
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
            var _this22 = this;

            var toBeDeletedInstanceGUID = this.appCategories.find(function (ele) {
              return ele.ID === _this22.toBeDeletedInstance;
            }).INSTANCE_GUID;
            this.identityService["delete"](toBeDeletedInstanceGUID).subscribe(function (errorMsg) {
              _this22.showDeletionConfirmation = false;

              if (errorMsg) {
                var messages = errorMsg;
                messages.forEach(function (msg) {
                  return _this22.messageService.add(msg);
                });
              } else {
                _this22.search();
              }
            });
          }
        }]);

        return _AppCategoryListComponent;
      }();

      _AppCategoryListComponent.ɵfac = function AppCategoryListComponent_Factory(t) {
        return new (t || _AppCategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _AppCategoryListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppCategoryListComponent,
        selectors: [["app-app-category-list"]],
        decls: 53,
        vars: 9,
        consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "app_category_id", 1, "col-sm-3", "col-form-label"], ["id", "app_category_id", "name", "app_category_id", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "app_category_name", 1, "col-sm-3", "col-form-label"], ["id", "app_category_name", "name", "app_category_name", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], [3, "ngClass"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]],
        template: function AppCategoryListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Category ID:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppCategoryListComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.appCategoryID = $event;
            })("keyup", function AppCategoryListComponent_Template_input_keyup_5_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Category Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppCategoryListComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.appCategoryName = $event;
            })("keyup", function AppCategoryListComponent_Template_input_keyup_9_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryListComponent_Template_button_click_11_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryListComponent_Template_button_click_16_listener() {
              return ctx["new"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " New");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Changed By");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Changed At");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AppCategoryListComponent_tr_35_Template, 19, 10, "tr", 16);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryListComponent_Template_button_click_42_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\xD7");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryListComponent_Template_button_click_49_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppCategoryListComponent_Template_button_click_51_listener() {
              return ctx.confirmDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.appCategoryID);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.appCategoryName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.appCategories);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Are you sure to delete the app category '", ctx.toBeDeletedInstance, "'?");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    438:
    /*!*************************************!*\
      !*** ./src/app/async-validators.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "existingUserNameValidator": function existingUserNameValidator() {
          return (
            /* binding */
            _existingUserNameValidator
          );
        },

        /* harmony export */
        "existingUserIDValidator": function existingUserIDValidator() {
          return (
            /* binding */
            _existingUserIDValidator
          );
        },

        /* harmony export */
        "existingPermissionValidator": function existingPermissionValidator() {
          return (
            /* binding */
            _existingPermissionValidator
          );
        },

        /* harmony export */
        "existingAppValidator": function existingAppValidator() {
          return (
            /* binding */
            _existingAppValidator
          );
        },

        /* harmony export */
        "existingAuthObjectValidator": function existingAuthObjectValidator() {
          return (
            /* binding */
            _existingAuthObjectValidator
          );
        },

        /* harmony export */
        "existingAppCategoryValidator": function existingAppCategoryValidator() {
          return (
            /* binding */
            _existingAppCategoryValidator
          );
        },

        /* harmony export */
        "existingProfileValidator": function existingProfileValidator() {
          return (
            /* binding */
            _existingProfileValidator
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      6797);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8002);

      function _existingUserNameValidator(identityService, messageService, userID) {
        return function (control) {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(500).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function () {
            return identityService.getUserByUserName(control.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
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

      function _existingUserIDValidator(identityService, messageService) {
        return function (control) {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(500).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function () {
            return identityService.getUserByUserID(control.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
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

      function _existingPermissionValidator(identityService, messageService) {
        return function (control) {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(500).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function () {
            return identityService.getPermissionByName(control.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
              if (data['r_role'] && data['r_role'][0]['NAME'] === control.value) {
                return {
                  message: messageService.generateMessage('PERMISSION', 'PERMISSION_EXISTS', 'E', control.value).msgShortText
                };
              } else {
                return null;
              }
            }));
          }));
        };
      }

      function _existingAppValidator(identityService, messageService) {
        return function (control) {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(500).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function () {
            return identityService.getAppByID(control.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
              if (data['app'] && data['app'][0]['APP_ID'] === control.value) {
                return {
                  message: messageService.generateMessage('APP', 'APP_EXISTS', 'E', control.value).msgShortText
                };
              } else {
                return null;
              }
            }));
          }));
        };
      }

      function _existingAuthObjectValidator(identityService, messageService) {
        return function (control) {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(500).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function () {
            return identityService.getAuthObjectByName(control.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
              if (data['authObject'] && data['authObject'][0]['OBJ_NAME'] === control.value) {
                return {
                  message: messageService.generateMessage('AUTH_OBJECT', 'AUTH_OBJECT_EXISTS', 'E', control.value).msgShortText
                };
              } else {
                return null;
              }
            }));
          }));
        };
      }

      function _existingAppCategoryValidator(identityService, messageService) {
        return function (control) {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(500).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function () {
            return identityService.getAppCategoryByID(control.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
              if (data['r_app_category'] && data['r_app_category'][0]['ID'] === control.value) {
                return {
                  message: messageService.generateMessage('APP_CATEGORY', 'APP_CATEGORY_EXISTS', 'E', control.value).msgShortText
                };
              } else {
                return null;
              }
            }));
          }));
        };
      }

      function _existingProfileValidator(identityService, messageService) {
        return function (control) {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(500).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function () {
            return identityService.getAuthProfileByName(control.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
              if (data['authProfile'] && data['authProfile'][0]['PROFILE_NAME'] === control.value) {
                return {
                  message: messageService.generateMessage('AUTH_PROFILE', 'AUTH_PROFILE_EXISTS', 'E', control.value).msgShortText
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
    7817:
    /*!********************************************************************************!*\
      !*** ./src/app/auth_object/auth-object-detail/auth-object-detail.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthObjectDetailComponent": function AuthObjectDetailComponent() {
          return (
            /* binding */
            _AuthObjectDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      5758);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var _async_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../async-validators */
      438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../dialog.service */
      1969);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _auth_object_field_auth_object_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth-object-field/auth-object-field.component */
      8976);
      /* harmony import */


      var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../admin-info/admin-info.component */
      228);

      function AuthObjectDetailComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AuthObjectDetailComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Display");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AuthObjectDetailComponent_div_16_app_auth_object_field_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-auth-object-field", 23);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mainForm", ctx_r3.mainForm)("readonly", ctx_r3.readonly);
        }
      }

      function AuthObjectDetailComponent_div_16_app_admin_info_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-admin-info", 24);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mainForm", ctx_r4.mainForm)("relationMetas", ctx_r4.relationMetas)("adminRelation", "authObject");
        }
      }

      function AuthObjectDetailComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthObjectDetailComponent_div_16_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r5.switchTabStrip(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Authorization Fields");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthObjectDetailComponent_div_16_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r7.switchTabStrip(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AuthObjectDetailComponent_div_16_app_auth_object_field_12_Template, 1, 2, "app-auth-object-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AuthObjectDetailComponent_div_16_app_admin_info_13_Template, 1, 3, "app-admin-info", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("OBJ_NAME"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("DESC"))("formGroup", ctx_r2.mainForm)("readonly", ctx_r2.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", 2);
        }
      }

      var _AuthObjectDetailComponent = /*#__PURE__*/function () {
        function _AuthObjectDetailComponent(fb, route, router, dialogService, identityService, attributeControlService, entityService, uiMapperService, messageService) {
          _classCallCheck(this, _AuthObjectDetailComponent);

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
          this.originalValue = {};
          this.changedValue = {};
          this.tabStrip = 1;
        }

        _createClass(_AuthObjectDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(function (params) {
              _this23.action = params.get('action');

              if (_this23.action === 'new') {
                _this23.isNewMode = true;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([_this23.entityService.getRelationMetaOfEntity('authObject'), _this23._createNewEntity()]);
              } else {
                _this23.isNewMode = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([_this23.entityService.getRelationMetaOfEntity('authObject'), _this23.identityService.getAuthObjectDetail(params.get('authObjName'))]);
              }
            })).subscribe(function (data) {
              _this23.relationMetas = data[0];
              _this23.attrCtrls = _this23.attributeControlService.toAttributeControl(_this23.relationMetas.find(function (relationMeta) {
                return relationMeta.RELATION_ID === 'authObject';
              }).ATTRIBUTES);

              if ('ENTITY_ID' in data[1]) {
                _this23.instanceGUID = data[1]['INSTANCE_GUID'];

                _this23._generateMainForm(data[1]);

                if (_this23.isNewMode || _this23.action === 'change') {
                  _this23._switch2EditMode();
                } else {
                  _this23._switch2DisplayMode();
                }
              } else {
                var errorMessages = data[1];
                errorMessages.forEach(function (msg) {
                  return _this23.messageService.add(msg);
                });
              }
            });
          }
        }, {
          key: "return2List",
          value: function return2List() {
            this.router.navigate(['auth-objects']);
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
            var _this24 = this;

            if (this.readonly) {
              this._switch2EditMode();
            } else {
              if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    _this24.mainForm.reset(_this24.originalValue);

                    _this24._switch2DisplayMode();
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
            var appIDCtrl = this.mainForm.get('OBJ_NAME');
            appIDCtrl.clearAsyncValidators();
            var authFieldArray = this.mainForm.get('authFields');
            var lastIndex = authFieldArray.length - 1;

            while (lastIndex >= 0) {
              var authFieldGroup = authFieldArray.at(lastIndex);

              if (authFieldGroup.invalid || !authFieldGroup.value.FIELD_NAME) {
                authFieldArray.removeAt(lastIndex);
              }

              lastIndex--;
            }

            this.mainForm.markAsPristine(); // Replace the URL from change to display

            window.history.replaceState({}, '', "/auth-objects/".concat(appIDCtrl.value, ";action=display"));
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;
            var authObjCtrl = this.mainForm.get('OBJ_NAME');

            if (this.isNewMode) {
              authObjCtrl.setAsyncValidators((0, _async_validators__WEBPACK_IMPORTED_MODULE_0__.existingAuthObjectValidator)(this.identityService, this.messageService));
            }

            var appCategoryArray = this.mainForm.get('authFields');
            appCategoryArray.push(this.fb.group({
              FIELD_NAME: [''],
              DATA_ELEMENT: [''],
              auth_field_INSTANCE_GUID: [''],
              RELATIONSHIP_INSTANCE_GUID: ['']
            })); // Replace the URL from to display

            if (this.action === 'display') {
              this.action = 'change';
            }

            window.history.replaceState({}, '', "/auth-objects/".concat(authObjCtrl.value, ";action=") + this.action);
          }
        }, {
          key: "_createNewEntity",
          value: function _createNewEntity() {
            var authObjectDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.Entity();
            authObjectDetail.ENTITY_ID = 'authObject';
            authObjectDetail['authObject'] = [{
              OBJ_NAME: '',
              DESC: '',
              CREATED_BY: '',
              CREATE_TIME: '',
              CHANGED_BY: '',
              CHANGE_TIME: ''
            }];
            authObjectDetail['relationships'] = [];
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(authObjectDetail);
          }
        }, {
          key: "_generateMainForm",
          value: function _generateMainForm(data) {
            var _this25 = this;

            this.mainForm = this.fb.group({
              OBJ_NAME: [data['authObject'][0]['OBJ_NAME'], [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
              DESC: [data['authObject'][0]['DESC']],
              admin: this.fb.group({
                CREATED_BY: [data['authObject'][0]['CREATED_BY']],
                CREATE_TIME: [data['authObject'][0]['CREATE_TIME']],
                CHANGED_BY: [data['authObject'][0]['CHANGED_BY']],
                CHANGE_TIME: [data['authObject'][0]['CHANGE_TIME']]
              })
            });

            var parsedRelationship = this._parseRelationships(data['relationships']);

            this.mainForm.addControl('authFields', this.fb.array(parsedRelationship.authFields.map(function (authField) {
              return _this25.fb.group(authField);
            })));
            this.originalValue = this.mainForm.getRawValue();
          }
        }, {
          key: "_parseRelationships",
          value: function _parseRelationships(relationships) {
            var parsedRelationship = {
              authFields: []
            };

            if (!relationships) {
              return parsedRelationship;
            }

            relationships.forEach(function (relationship) {
              switch (relationship.RELATIONSHIP_ID) {
                case 'rs_auth_object_field':
                  __parseAuthField(relationship);

                  break;

                default: // Do nothing.

              }
            });
            return parsedRelationship;

            function __parseAuthField(relationship) {
              relationship.values.forEach(function (value) {
                parsedRelationship.authFields.push({
                  RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                  auth_field_INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                  FIELD_NAME: value['PARTNER_INSTANCES'][0]['authField'][0]['FIELD_NAME'],
                  DATA_ELEMENT: value['PARTNER_INSTANCES'][0]['authField'][0]['DATA_ELEMENT']
                });
              });
            }
          }
        }, {
          key: "_resetValue",
          value: function _resetValue(data) {
            this.originalValue = {
              OBJ_NAME: data['authObject'][0]['OBJ_NAME'],
              DESC: data['authObject'][0]['DESC'],
              admin: {
                CREATED_BY: data['authObject'][0]['CREATED_BY'],
                CREATE_TIME: data['authObject'][0]['CREATE_TIME'],
                CHANGED_BY: data['authObject'][0]['CHANGED_BY'],
                CHANGE_TIME: data['authObject'][0]['CHANGE_TIME']
              }
            };

            var parsedRelationship = this._parseRelationships(data['relationships']);

            this.originalValue['authFields'] = parsedRelationship.authFields;
            this.mainForm.reset(this.originalValue);
          }
        }, {
          key: "save",
          value: function save() {
            var _this26 = this;

            this.messageService.clearMessages();

            if (this._composeChanges()) {
              this.identityService.save(this.changedValue).subscribe(function (data) {
                _this26.changedValue = {};

                if ('INSTANCE_GUID' in data) {
                  var authObjName = data['authObject'][0]['OBJ_NAME'];
                  _this26.instanceGUID = data['INSTANCE_GUID'];
                  _this26.isNewMode = false;

                  _this26.identityService.getAuthObjectDetail(authObjName).subscribe(function (instance) {
                    if ('ENTITY_ID' in instance) {
                      _this26._switch2DisplayMode();

                      _this26._resetValue(instance);
                    } else {
                      var errorMessages = instance;
                      errorMessages.forEach(function (msg) {
                        return _this26.messageService.add(msg);
                      });
                    }
                  });

                  _this26.messageService.reportMessage('AUTH_OBJECT', 'SAVED', 'S', authObjName);
                } else {
                  var errorMessages = data;
                  errorMessages.forEach(function (msg) {
                    return _this26.messageService.add(msg);
                  });
                }
              });
            }
          }
        }, {
          key: "_composeChanges",
          value: function _composeChanges() {
            if (this.mainForm.invalid) {
              this.messageService.reportMessage('AUTH_OBJECT', 'INVALID', 'E');
              return false;
            }

            if (this.mainForm.dirty === false) {
              this.messageService.reportMessage('GENERAL', 'NO_CHANGE', 'W');
              return false;
            }

            this.changedValue['ENTITY_ID'] = 'authObject';
            this.changedValue['INSTANCE_GUID'] = this.instanceGUID;

            if (this.isNewMode) {
              this.changedValue['authObject'] = {
                action: 'add',
                OBJ_NAME: this.mainForm.get('OBJ_NAME').value,
                CREATED_BY: this.identityService.Session.USER_ID,
                CREATE_TIME: this.identityService.CurrentTime,
                CHANGED_BY: this.identityService.Session.USER_ID,
                CHANGE_TIME: this.identityService.CurrentTime
              };
            } else {
              this.changedValue['authObject'] = {
                action: 'update',
                CHANGED_BY: this.identityService.Session.USER_ID,
                CHANGE_TIME: this.identityService.CurrentTime
              };
            }

            if (this.mainForm.get('DESC').dirty) {
              this.changedValue['authObject']['DESC'] = this.mainForm.get('DESC').value;
            }

            var authFieldFormArray = this.mainForm.get('authFields');
            var relationship = this.uiMapperService.composeChangedRelationship('rs_auth_object_field', [{
              ENTITY_ID: 'authField',
              ROLE_ID: 'auth_field'
            }], authFieldFormArray, this.originalValue['authFields'], ['FIELD_NAME', 'DATA_ELEMENT']);

            if (relationship) {
              this.changedValue['relationships'] = [relationship];
            }

            return true;
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            if (this.isNewMode || this.mainForm && this.mainForm.dirty) {
              return this.dialogService.confirm('Discard changes?');
            } else {
              return true;
            }
          }
        }]);

        return _AuthObjectDetailComponent;
      }();

      _AuthObjectDetailComponent.ɵfac = function AuthObjectDetailComponent_Factory(t) {
        return new (t || _AuthObjectDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_8__.AttributeControlService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_8__.UiMapperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_12__.MessageService));
      };

      _AuthObjectDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AuthObjectDetailComponent,
        selectors: [["app-auth-object-detail"]],
        decls: 17,
        vars: 5,
        consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Return to List", "id", "toList", 1, "btn", "btn-sm", "btn-outline-info", "mr-2", 3, "click"], [1, "fas", "fa-list-ul"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "adminRelation", 4, "ngSwitchCase"], [3, "mainForm", "readonly"], [3, "mainForm", "relationMetas", "adminRelation"]],
        template: function AuthObjectDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthObjectDetailComponent_Template_button_click_5_listener() {
              return ctx.return2List();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " To List");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthObjectDetailComponent_Template_button_click_8_listener() {
              return ctx.switchEditDisplay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AuthObjectDetailComponent_span_9_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AuthObjectDetailComponent_span_10_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthObjectDetailComponent_Template_button_click_11_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AuthObjectDetailComponent_div_16_Template, 14, 15, "div", 11);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.isNewMode ? "New Authorization Object" : ctx.readonly ? "Display Authorization Object" : "Change Authorization Object");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mainForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ui_message_angular__WEBPACK_IMPORTED_MODULE_12__.MessageComponent, jor_angular__WEBPACK_IMPORTED_MODULE_8__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _auth_object_field_auth_object_field_component__WEBPACK_IMPORTED_MODULE_3__.AuthObjectFieldComponent, _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_4__.AdminInfoComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLW9iamVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    8976:
    /*!*************************************************************************************************!*\
      !*** ./src/app/auth_object/auth-object-detail/auth-object-field/auth-object-field.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthObjectFieldComponent": function AuthObjectFieldComponent() {
          return (
            /* binding */
            _AuthObjectFieldComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../identity.service */
      8934);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function AuthObjectFieldComponent_tr_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AuthObjectFieldComponent_tr_10_Template_input_change_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.onChangeKey(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthObjectFieldComponent_tr_10_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;
            var authFieldForm_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.onSearchHelp(i_r2, authFieldForm_r1);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthObjectFieldComponent_tr_10_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6["delete"](i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var authFieldForm_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", authFieldForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx_r0.readonly || ctx_r0.isExisting(authFieldForm_r1) && authFieldForm_r1.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", authFieldForm_r1.get("FIELD_NAME").errors == null ? null : authFieldForm_r1.get("FIELD_NAME").errors.message, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", authFieldForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.readonly);
        }
      }

      var _AuthObjectFieldComponent = /*#__PURE__*/function () {
        function _AuthObjectFieldComponent(fb, identityService) {
          _classCallCheck(this, _AuthObjectFieldComponent);

          this.fb = fb;
          this.identityService = identityService;
        }

        _createClass(_AuthObjectFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.authFieldFormArray = this.mainForm.get('authFields'); // Recheck each role since every time the template is initialized, Angular clears the error status.

            if (!this.readonly) {
              this.authFieldFormArray.controls.forEach(function (ctrl, index) {
                _this27.onChangeKey(index);
              });
            }
          }
        }, {
          key: "delete",
          value: function _delete(index) {
            if (index !== this.authFieldFormArray.length - 1) {
              this.authFieldFormArray.removeAt(index);
              this.authFieldFormArray.markAsDirty();
            }
          }
        }, {
          key: "onChangeKey",
          value: function onChangeKey(index) {
            var currentFormGroup = this.authFieldFormArray.at(index);

            if (this.isExisting(currentFormGroup)) {
              currentFormGroup.get('FIELD_NAME').setErrors({
                message: 'Duplicate Authorization Field'
              });
              return;
            }

            if (index === this.authFieldFormArray.length - 1 && currentFormGroup.value.FIELD_NAME.trim() !== '') {
              // Only work if the last line is not new and empty
              this.authFieldFormArray.push(this.fb.group({
                FIELD_NAME: [''],
                DATA_ELEMENT: [''],
                auth_field_INSTANCE_GUID: [''],
                RELATIONSHIP_INSTANCE_GUID: ['']
              }));
            }

            if (currentFormGroup.value.FIELD_NAME) {
              this.identityService.getAuthFieldInfo(currentFormGroup.value.FIELD_NAME).subscribe(function (data) {
                if (data['msgCat']) {
                  currentFormGroup.get('FIELD_NAME').setErrors({
                    message: data['msgShortText']
                  });
                } else {
                  currentFormGroup.get('DATA_ELEMENT').setValue(data['DATA_ELEMENT']);
                  currentFormGroup.get('auth_field_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);
                }
              });
            }
          }
        }, {
          key: "isExisting",
          value: function isExisting(key) {
            var existIndex = this.authFieldFormArray.controls.findIndex(function (ctrl) {
              return ctrl.value.FIELD_NAME === key.value.FIELD_NAME && ctrl.pristine && ctrl.value.FIELD_NAME !== '';
            });
            return existIndex !== -1;
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(rowID, exportObject) {
            var afterExportFn = function (context, rowIDx) {
              return function () {
                return context.onChangeKey(rowIDx);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModalByEntity('authField', 'authField', exportObject, this.readonly || this.isExisting(exportObject) && exportObject.valid, null, null, afterExportFn);
          }
        }]);

        return _AuthObjectFieldComponent;
      }();

      _AuthObjectFieldComponent.ɵfac = function AuthObjectFieldComponent_Factory(t) {
        return new (t || _AuthObjectFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService));
      };

      _AuthObjectFieldComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AuthObjectFieldComponent,
        selectors: [["app-auth-object-field"]],
        viewQuery: function AuthObjectFieldComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__.SearchHelpComponent, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
          }
        },
        inputs: {
          readonly: "readonly",
          mainForm: "mainForm"
        },
        decls: 12,
        vars: 2,
        consts: [[1, "table", "table-bordered", "table-sm", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light"], ["scope", "col"], ["formArrayName", "authFields", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group", "dk-name"], ["type", "text", "formControlName", "FIELD_NAME", 1, "form-control", "form-control-sm", 3, "readonly", "change"], [1, "invalid-tooltip"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], [1, "dk-description", 3, "formGroup"], ["type", "text", "formControlName", "DATA_ELEMENT", "readonly", "", 1, "form-control", "form-control-sm"], [1, "dk-actions"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"]],
        template: function AuthObjectFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Authorization Field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Data Element");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AuthObjectFieldComponent_tr_10_Template, 14, 5, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dk-app-search-help");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.mainForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.authFieldFormArray.controls);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, jor_angular__WEBPACK_IMPORTED_MODULE_3__.SearchHelpComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
        styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtb2JqZWN0LWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiYXV0aC1vYmplY3QtZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGstbmFtZXtcbiAgd2lkdGg6IDIwcmVtO1xufVxuLmRrLWRlc2NyaXB0aW9ue1xuICB3aWR0aDogMjByZW07XG59XG4uZGstYWN0aW9uc3tcbiAgd2lkdGg6IDEuNXJlbTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    5252:
    /*!****************************************************************************!*\
      !*** ./src/app/auth_object/auth-object-list/auth-object-list.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthObjectListComponent": function AuthObjectListComponent() {
          return (
            /* binding */
            _AuthObjectListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0() {
        return {
          action: "display"
        };
      };

      var _c1 = function _c1(a1, a2) {
        return ["/auth-objects", a1, a2];
      };

      function AuthObjectListComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthObjectListComponent_tr_33_Template_button_click_11_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var authObj_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.display(authObj_r1.OBJ_NAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthObjectListComponent_tr_33_Template_button_click_13_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var authObj_r1 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.change(authObj_r1.OBJ_NAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthObjectListComponent_tr_33_Template_button_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var authObj_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5["delete"](authObj_r1.OBJ_NAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var authObj_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c1, authObj_r1.OBJ_NAME, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](authObj_r1.OBJ_NAME);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](authObj_r1.DESC);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](authObj_r1.CHANGED_BY);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](authObj_r1.CHANGE_TIME);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "display": a0
        };
      };

      var _AuthObjectListComponent = /*#__PURE__*/function () {
        function _AuthObjectListComponent(identityService, messageService, router) {
          _classCallCheck(this, _AuthObjectListComponent);

          this.identityService = identityService;
          this.messageService = messageService;
          this.router = router;
          this.showDeletionConfirmation = false;
        }

        _createClass(_AuthObjectListComponent, [{
          key: "displayDeletionConfirmation",
          get: function get() {
            return this.showDeletionConfirmation ? 'block' : 'none';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "search",
          value: function search() {
            var _this28 = this;

            this.messageService.clearMessages();
            this.authObjects = [];
            this.authObjName = this.authObjName ? this.authObjName.trim() : '';
            this.authObjDesc = this.authObjDesc ? this.authObjDesc.trim() : '';
            this.identityService.searchAuthObjects(this.authObjName, this.authObjDesc).subscribe(function (data) {
              if (!data[0]) {
                _this28.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.messageType.Warning);
              } else if (data[0]['msgCat']) {
                var messages = data;
                messages.forEach(function (msg) {
                  return _this28.messageService.add(msg);
                });
              } else {
                _this28.authObjects = data;
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
          key: "new",
          value: function _new() {
            this.router.navigate(['auth-objects', '/', {
              action: 'new'
            }]);
          }
        }, {
          key: "display",
          value: function display(authObjName) {
            this.router.navigate(['auth-objects', authObjName, {
              action: 'display'
            }]);
          }
        }, {
          key: "change",
          value: function change(authObjName) {
            this.router.navigate(['auth-objects', authObjName, {
              action: 'change'
            }]);
          }
        }, {
          key: "delete",
          value: function _delete(authObjName) {
            this.toBeDeletedInstance = authObjName;
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
            var _this29 = this;

            var toBeDeletedInstanceGUID = this.authObjects.find(function (ele) {
              return ele.OBJ_NAME === _this29.toBeDeletedInstance;
            }).INSTANCE_GUID;
            this.identityService["delete"](toBeDeletedInstanceGUID).subscribe(function (errorMsg) {
              _this29.showDeletionConfirmation = false;

              if (errorMsg) {
                var messages = errorMsg;
                messages.forEach(function (msg) {
                  return _this29.messageService.add(msg);
                });
              } else {
                _this29.search();
              }
            });
          }
        }]);

        return _AuthObjectListComponent;
      }();

      _AuthObjectListComponent.ɵfac = function AuthObjectListComponent_Factory(t) {
        return new (t || _AuthObjectListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _AuthObjectListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AuthObjectListComponent,
        selectors: [["app-auth-object-list"]],
        decls: 51,
        vars: 9,
        consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "auth_obj_name", 1, "col-sm-3", "col-form-label"], ["id", "auth_obj_name", "name", "auth_obj_name", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "auth_obj_desc", 1, "col-sm-3", "col-form-label"], ["id", "auth_obj_desc", "name", "auth_obj_desc", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]],
        template: function AuthObjectListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Object Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthObjectListComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.authObjName = $event;
            })("keyup", function AuthObjectListComponent_Template_input_keyup_5_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AuthObjectListComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.authObjDesc = $event;
            })("keyup", function AuthObjectListComponent_Template_input_keyup_9_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthObjectListComponent_Template_button_click_11_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthObjectListComponent_Template_button_click_16_listener() {
              return ctx["new"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " New");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Desc");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Changed By");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Changed At");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AuthObjectListComponent_tr_33_Template, 17, 9, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h5", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Confirm Deletion");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthObjectListComponent_Template_button_click_40_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthObjectListComponent_Template_button_click_47_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthObjectListComponent_Template_button_click_49_listener() {
              return ctx.confirmDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.authObjName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.authObjDesc);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.authObjects);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Are you sure to delete the authorization object '", ctx.toBeDeletedInstance, "'?");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLW9iamVjdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    2611:
    /*!*********************************************************************************************!*\
      !*** ./src/app/authorization/auth-value/auth-value-selopts/auth-value-selopts.component.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthValueSeloptsComponent": function AuthValueSeloptsComponent() {
          return (
            /* binding */
            _AuthValueSeloptsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../identity */
      8508);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jor-angular */
      867);

      function AuthValueSeloptsComponent_tr_14_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var operator_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", operator_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](operator_r5);
        }
      }

      function AuthValueSeloptsComponent_tr_14_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r6);
        }
      }

      function AuthValueSeloptsComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AuthValueSeloptsComponent_tr_14_Template_select_change_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var i_r2 = restoredCtx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.onChangeOperator(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AuthValueSeloptsComponent_tr_14_option_3_Template, 2, 2, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AuthValueSeloptsComponent_tr_14_option_6_Template, 2, 2, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dk-app-attribute", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dk-app-attribute", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthValueSeloptsComponent_tr_14_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var i_r2 = restoredCtx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.insertValue(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthValueSeloptsComponent_tr_14_Template_button_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var i_r2 = restoredCtx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.deleteValue(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var selectOptionForm_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", selectOptionForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.operatorEnum);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", selectOptionForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.optionEnum);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("attributeControl", ctx_r0.attrCtrl)("formGroup", selectOptionForm_r1)("isSmallSize", true)("readonly", ctx_r0.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("attributeControl", ctx_r0.highAttrCtrl)("formGroup", selectOptionForm_r1)("isSmallSize", true)("readonly", ctx_r0.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.readonly);
        }
      }

      var _AuthValueSeloptsComponent = /*#__PURE__*/function () {
        function _AuthValueSeloptsComponent(fb) {
          _classCallCheck(this, _AuthValueSeloptsComponent);

          this.fb = fb;
        }

        _createClass(_AuthValueSeloptsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.operatorEnum = Object.values(_identity__WEBPACK_IMPORTED_MODULE_0__.Operator);
            this.optionEnum = Object.values(_identity__WEBPACK_IMPORTED_MODULE_0__.Option);
          }
        }, {
          key: "onChangeOperator",
          value: function onChangeOperator(idx) {
            var selectOptionCtrl = this.selectOptionArray.at(idx);

            if (selectOptionCtrl.get('Operator').value === _identity__WEBPACK_IMPORTED_MODULE_0__.Operator.Between) {
              selectOptionCtrl.get('High').enable();
            } else {
              selectOptionCtrl.get('High').setValue('');
              selectOptionCtrl.get('High').disable();
            }
          }
        }, {
          key: "insertValue",
          value: function insertValue(idx) {
            this.selectOptionArray.insert(idx, this.fb.group({
              Operator: _identity__WEBPACK_IMPORTED_MODULE_0__.Operator.Between,
              Option: _identity__WEBPACK_IMPORTED_MODULE_0__.Option.Include,
              Low: '',
              High: ''
            }));
          }
        }, {
          key: "deleteValue",
          value: function deleteValue(idx) {
            if (this.selectOptionArray.length === 1) {
              this.selectOptionArray.at(idx).get('Low').setValue('');
              this.selectOptionArray.at(idx).get('High').setValue('');
            } else {
              this.selectOptionArray.removeAt(idx);
            }

            this.selectOptionArray.markAsDirty();
          }
        }]);

        return _AuthValueSeloptsComponent;
      }();

      _AuthValueSeloptsComponent.ɵfac = function AuthValueSeloptsComponent_Factory(t) {
        return new (t || _AuthValueSeloptsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
      };

      _AuthValueSeloptsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AuthValueSeloptsComponent,
        selectors: [["app-auth-value-selopts"]],
        inputs: {
          selectOptionArray: "selectOptionArray",
          attrCtrl: "attrCtrl",
          highAttrCtrl: "highAttrCtrl",
          readonly: "readonly"
        },
        decls: 15,
        vars: 3,
        consts: [[1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "formGroup"], ["name", "operator", "required", "", "formControlName", "Operator", 1, "form-control", "form-control-sm", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "operator", "required", "", "formControlName", "Option", 1, "form-control", "form-control-sm"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly"], [1, "dk-actions"], ["type", "button", "id", "add", "title", "Insert", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"], [3, "value"]],
        template: function AuthValueSeloptsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AuthValueSeloptsComponent_tr_14_Template, 16, 14, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.attrCtrl.label, " (Low)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.attrCtrl.label, " (High)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectOptionArray.controls);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, jor_angular__WEBPACK_IMPORTED_MODULE_4__.AttributeComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]],
        styles: [".dk-actions[_ngcontent-%COMP%]{\n  width: 5rem;\n  min-width: 5rem;\n  max-width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtdmFsdWUtc2Vsb3B0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6ImF1dGgtdmFsdWUtc2Vsb3B0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiA1cmVtO1xuICBtaW4td2lkdGg6IDVyZW07XG4gIG1heC13aWR0aDogNXJlbTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    3784:
    /*!*********************************************************************************************!*\
      !*** ./src/app/authorization/auth-value/auth-value-singles/auth-value-singles.component.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthValueSinglesComponent": function AuthValueSinglesComponent() {
          return (
            /* binding */
            _AuthValueSinglesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      867);

      function AuthValueSinglesComponent_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthValueSinglesComponent_tr_8_Template_button_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.insertValue(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthValueSinglesComponent_tr_8_Template_button_click_6_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.deleteValue(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var singleValueForm_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.attrCtrl)("formGroup", singleValueForm_r1)("isSmallSize", true)("readonly", ctx_r0.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly);
        }
      }

      var _AuthValueSinglesComponent = /*#__PURE__*/function () {
        function _AuthValueSinglesComponent(fb) {
          _classCallCheck(this, _AuthValueSinglesComponent);

          this.fb = fb;
        }

        _createClass(_AuthValueSinglesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "insertValue",
          value: function insertValue(idx) {
            this.singleValueArray.insert(idx, this.fb.group({
              Low: ['']
            }));
          }
        }, {
          key: "deleteValue",
          value: function deleteValue(idx) {
            if (this.singleValueArray.length === 1) {
              this.singleValueArray.at(idx).get('Low').setValue('');
            } else {
              this.singleValueArray.removeAt(idx);
            }

            this.singleValueArray.markAsDirty();
          }
        }]);

        return _AuthValueSinglesComponent;
      }();

      _AuthValueSinglesComponent.ɵfac = function AuthValueSinglesComponent_Factory(t) {
        return new (t || _AuthValueSinglesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
      };

      _AuthValueSinglesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AuthValueSinglesComponent,
        selectors: [["app-auth-value-singles"]],
        inputs: {
          singleValueArray: "singleValueArray",
          attrCtrl: "attrCtrl",
          readonly: "readonly"
        },
        decls: 9,
        vars: 2,
        consts: [[1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly"], [1, "dk-actions"], ["type", "button", "id", "add", "title", "Insert", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"]],
        template: function AuthValueSinglesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthValueSinglesComponent_tr_8_Template, 8, 6, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.attrCtrl.label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.singleValueArray.controls);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, jor_angular__WEBPACK_IMPORTED_MODULE_3__.AttributeComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective],
        styles: [".dk-actions[_ngcontent-%COMP%]{\n  width: 5rem;\n  min-width: 5rem;\n  max-width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtdmFsdWUtc2luZ2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6ImF1dGgtdmFsdWUtc2luZ2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiA1cmVtO1xuICBtaW4td2lkdGg6IDVyZW07XG4gIG1heC13aWR0aDogNXJlbTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    7886:
    /*!******************************************************************!*\
      !*** ./src/app/authorization/auth-value/auth-value.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthValueComponent": function AuthValueComponent() {
          return (
            /* binding */
            _AuthValueComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../identity */
      8508);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _auth_value_singles_auth_value_singles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth-value-singles/auth-value-singles.component */
      3784);
      /* harmony import */


      var _auth_value_selopts_auth_value_selopts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-value-selopts/auth-value-selopts.component */
      2611);

      var _c0 = function _c0(a0, a1) {
        return {
          "green-light": a0,
          "red-light": a1
        };
      };

      function AuthValueComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c0, ctx_r0.authFieldValueForm.get("STATUS").value === "green", ctx_r0.authFieldValueForm.get("STATUS").value === "red"));
        }
      }

      function AuthValueComponent_div_13_app_auth_value_singles_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-auth-value-singles", 13);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("singleValueArray", ctx_r2.singleValueArray)("attrCtrl", ctx_r2.attrCtrl)("readonly", ctx_r2.readonly);
        }
      }

      function AuthValueComponent_div_13_app_auth_value_selopts_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-auth-value-selopts", 14);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectOptionArray", ctx_r3.selectOptionArray)("attrCtrl", ctx_r3.attrCtrl)("highAttrCtrl", ctx_r3.highAttrCtrl)("readonly", ctx_r3.readonly);
        }
      }

      function AuthValueComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthValueComponent_div_13_app_auth_value_singles_1_Template, 1, 3, "app-auth-value-singles", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AuthValueComponent_div_13_app_auth_value_selopts_2_Template, 1, 4, "app-auth-value-selopts", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r1.tabStrip);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 2);
        }
      }

      var _AuthValueComponent = /*#__PURE__*/function () {
        function _AuthValueComponent(fb, entityService, attributeControlService) {
          _classCallCheck(this, _AuthValueComponent);

          this.fb = fb;
          this.entityService = entityService;
          this.attributeControlService = attributeControlService;
          this.tabStrip = 1;
        }

        _createClass(_AuthValueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var _this30 = this;

            if (!this.authFieldValueForm) {
              return;
            }

            if (this.singleValueArray) {
              this.singleValueArray.clear();
            }

            if (this.selectOptionArray) {
              this.selectOptionArray.clear();
            }

            this.fullPermission = false;
            this.attrCtrl = null;
            this.tabStrip = 1;
            var authValues = this.authFieldValueForm.get('AUTH_VALUE').value;
            this.entityService.getElementMeta(this.authFieldValueForm.get('DATA_ELEMENT').value).subscribe(function (attrCtrl) {
              var attribute = attrCtrl;
              attribute.ATTR_GUID = attrCtrl.ELEMENT_ID;
              attribute.ATTR_NAME = attrCtrl.ELEMENT_ID;
              attribute.DATA_ELEMENT = attrCtrl.ELEMENT_ID;
              _this30.attrCtrl = _this30.attributeControlService.toSingleAttributeControl(attribute);
              _this30.attrCtrl.name = 'Low';
              _this30.highAttrCtrl = _this30.attributeControlService.toSingleAttributeControl(attribute);
              _this30.highAttrCtrl.name = 'High';
            });
            this.fieldName = this.authFieldValueForm.get('FIELD_NAME').value;

            if (!authValues || !JSON.parse(authValues)) {
              this.singleValueArray = this.fb.array([this.fb.group({
                Low: ''
              })]);
              this.selectOptionArray = this.fb.array([this.fb.group({
                Operator: [{
                  value: _identity__WEBPACK_IMPORTED_MODULE_0__.Operator.Between,
                  disabled: this.readonly
                }],
                Option: [{
                  value: _identity__WEBPACK_IMPORTED_MODULE_0__.Option.Include,
                  disabled: this.readonly
                }],
                Low: '',
                High: ''
              })]);
            } else {
              var authValueArray = JSON.parse(authValues);

              if (authValueArray === '*') {
                this._setFullPermission(true);
              } else {
                var singleValues = [];
                var selectOptions = [];
                authValueArray.forEach(function (authValue) {
                  if (typeof authValue === 'string') {
                    singleValues.push(_this30.fb.group({
                      Low: authValue
                    }));
                  } else {
                    selectOptions.push(_this30.fb.group({
                      Operator: [{
                        value: authValue['Operator'],
                        disabled: _this30.readonly
                      }],
                      Option: [{
                        value: authValue['Option'],
                        disabled: _this30.readonly
                      }],
                      Low: authValue['Low'],
                      High: authValue['High']
                    }));
                  }
                });

                if (singleValues.length > 0) {
                  this.singleValueArray = this.fb.array(singleValues);
                  this.tabStrip = 1;
                } else {
                  this.singleValueArray = this.fb.array([this.fb.group({
                    Low: ''
                  })]);
                  this.tabStrip = 2;
                }

                if (selectOptions.length > 0) {
                  this.selectOptionArray = this.fb.array(selectOptions);
                } else {
                  this.selectOptionArray = this.fb.array([this.fb.group({
                    Operator: [{
                      value: _identity__WEBPACK_IMPORTED_MODULE_0__.Operator.Between,
                      disabled: this.readonly
                    }],
                    Option: [{
                      value: _identity__WEBPACK_IMPORTED_MODULE_0__.Option.Include,
                      disabled: this.readonly
                    }],
                    Low: '',
                    High: ''
                  })]);
                  this.tabStrip = 1;
                }
              }
            }
          }
        }, {
          key: "switchTabStrip",
          value: function switchTabStrip(tabStripID) {
            this.tabStrip = tabStripID;
          }
        }, {
          key: "generateAuthValue",
          value: function generateAuthValue() {
            if (!this.singleValueArray.dirty && !this.selectOptionArray.dirty) {
              return true;
            }

            if (this.fullPermission) {
              return true;
            }

            var authValues = [];
            var hasErrors = false;
            this.singleValueArray.controls.forEach(function (singleValueCtrl) {
              var singleValue = singleValueCtrl.get('Low').value;

              if (singleValue && authValues.findIndex(function (value) {
                return value === singleValue;
              }) === -1) {
                authValues.push(singleValue);
              }
            });
            this.selectOptionArray.controls.forEach(function (selectOptionCtrl) {
              var selectOption = selectOptionCtrl.value;

              if (selectOption.Low) {
                if (selectOption.Operator === _identity__WEBPACK_IMPORTED_MODULE_0__.Operator.Between && selectOption.Low >= selectOption.High) {
                  selectOptionCtrl.get('Low').setErrors({
                    message: 'Low value is larger or equal to high value'
                  });
                  hasErrors = true;
                } else {
                  authValues.push(selectOption);
                }
              }
            });

            if (hasErrors) {
              return false;
            }

            if (authValues.length === 0) {
              this.authFieldValueForm.get('AUTH_VALUE').setValue('');
              this.authFieldValueForm.get('STATUS').setValue('red');
            } else {
              this.authFieldValueForm.get('AUTH_VALUE').setValue(JSON.stringify(authValues, null, ' '));
              this.authFieldValueForm.get('STATUS').setValue('green');
            }

            this.authFieldValueForm.get('AUTH_VALUE').markAsDirty();
            return true;
          }
        }, {
          key: "checkFullPermission",
          value: function checkFullPermission() {
            this._setFullPermission(!this.fullPermission);

            this.authFieldValueForm.get('AUTH_VALUE').markAsDirty();
          }
        }, {
          key: "_setFullPermission",
          value: function _setFullPermission(isFull) {
            this.fullPermission = isFull;
            this.authFieldValueForm.get('STATUS').setValue(isFull ? 'green' : 'red');
            this.authFieldValueForm.get('AUTH_VALUE').setValue(isFull ? '"*"' : '');

            if (isFull) {
              this.singleValueArray = this.fb.array([]);
              this.selectOptionArray = this.fb.array([]);
            } else {
              this.singleValueArray = this.fb.array([this.fb.group({
                Low: ''
              })]);
              this.selectOptionArray = this.fb.array([this.fb.group({
                Operator: _identity__WEBPACK_IMPORTED_MODULE_0__.Operator.Between,
                Option: _identity__WEBPACK_IMPORTED_MODULE_0__.Option.Include,
                Low: '',
                High: ''
              })]);
            }
          }
        }]);

        return _AuthValueComponent;
      }();

      _AuthValueComponent.ɵfac = function AuthValueComponent_Factory(t) {
        return new (t || _AuthValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_5__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_5__.AttributeControlService));
      };

      _AuthValueComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AuthValueComponent,
        selectors: [["app-auth-value"]],
        inputs: {
          authFieldValueForm: "authFieldValueForm",
          readonly: "readonly"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        decls: 14,
        vars: 8,
        consts: [["role", "toolbar", 1, "btn-toolbar"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "fullPermission", 1, "custom-control-input", 3, "ngModel", "disabled", "ngModelChange", "click"], ["for", "fullPermission", 1, "custom-control-label"], ["class", "ml-4 mt-1 traffic-light", 3, "ngClass", 4, "ngIf"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], ["class", "mt-2", 3, "ngSwitch", 4, "ngIf"], [1, "ml-4", "mt-1", "traffic-light", 3, "ngClass"], [1, "mt-2", 3, "ngSwitch"], [3, "singleValueArray", "attrCtrl", "readonly", 4, "ngSwitchCase"], [3, "selectOptionArray", "attrCtrl", "highAttrCtrl", "readonly", 4, "ngSwitchCase"], [3, "singleValueArray", "attrCtrl", "readonly"], [3, "selectOptionArray", "attrCtrl", "highAttrCtrl", "readonly"]],
        template: function AuthValueComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AuthValueComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.fullPermission = $event;
            })("click", function AuthValueComponent_Template_input_click_2_listener() {
              return ctx.checkFullPermission();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Enable Full Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AuthValueComponent_span_5_Template, 1, 4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthValueComponent_Template_a_click_8_listener() {
              return ctx.switchTabStrip(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Single Values");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthValueComponent_Template_a_click_11_listener() {
              return ctx.switchTabStrip(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Select Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AuthValueComponent_div_13_Template, 3, 3, "div", 8);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.fullPermission)("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authFieldValueForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.tabStrip === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.tabStrip === 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attrCtrl);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _auth_value_singles_auth_value_singles_component__WEBPACK_IMPORTED_MODULE_1__.AuthValueSinglesComponent, _auth_value_selopts_auth_value_selopts_component__WEBPACK_IMPORTED_MODULE_2__.AuthValueSeloptsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXZhbHVlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    5509:
    /*!**********************************************************!*\
      !*** ./src/app/authorization/authorization.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizationComponent": function AuthorizationComponent() {
          return (
            /* binding */
            _AuthorizationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth-value/auth-value.component */
      7886);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../identity.service */
      8934);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0(a0, a1) {
        return {
          "treegrid-expander-expanded": a0,
          "treegrid-expander-collapsed": a1
        };
      };

      function AuthorizationComponent_table_8_tr_12_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_table_8_tr_12_td_3_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r9.expendCollapse(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var authObjForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, !authObjForm_r3.get("COLLAPSED").value, authObjForm_r3.get("COLLAPSED").value));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", authObjForm_r3.get("OBJ_NAME").value, " ");
        }
      }

      function AuthorizationComponent_table_8_tr_12_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var authObjForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", authObjForm_r3.get("FIELD_NAME").value, " ");
        }
      }

      function AuthorizationComponent_table_8_tr_12_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var authObjForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](authObjForm_r3.get("DESC").value);
        }
      }

      function AuthorizationComponent_table_8_tr_12_td_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_table_8_tr_12_td_9_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r15.openAuthValueModal(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var authObjForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", authObjForm_r3.get("AUTH_VALUE").value ? authObjForm_r3.get("AUTH_VALUE").value : "Click to maintain", "");
        }
      }

      var _c1 = function _c1(a0, a1, a2) {
        return {
          "green-light": a0,
          "yellow-light": a1,
          "red-light": a2
        };
      };

      function AuthorizationComponent_table_8_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_table_8_tr_12_Template_input_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);

            var i_r4 = restoredCtx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r19.checkAuthObject(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AuthorizationComponent_table_8_tr_12_td_3_Template, 3, 5, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AuthorizationComponent_table_8_tr_12_td_4_Template, 4, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_table_8_tr_12_Template_button_click_6_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);

            var i_r4 = restoredCtx.index;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r21.setFullPermission(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AuthorizationComponent_table_8_tr_12_td_8_Template, 2, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AuthorizationComponent_table_8_tr_12_td_9_Template, 3, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var authObjForm_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("collapsed", authObjForm_r3.get("ROW_TYPE").value === "FIELD" && authObjForm_r3.get("COLLAPSED").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", authObjForm_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", authObjForm_r3.get("ROW_TYPE").value === "OBJECT");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", authObjForm_r3.get("ROW_TYPE").value === "FIELD");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](9, _c1, authObjForm_r3.get("STATUS").value === "green", authObjForm_r3.get("STATUS").value === "yellow", authObjForm_r3.get("STATUS").value === "red"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", authObjForm_r3.get("ROW_TYPE").value === "OBJECT");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", authObjForm_r3.get("ROW_TYPE").value === "FIELD");
        }
      }

      function AuthorizationComponent_table_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "thead", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_table_8_Template_input_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r22.checkAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Authorization Object / Field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Description / Authorization Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AuthorizationComponent_table_8_tr_12_Template, 10, 13, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.mainForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.authObjFormArray.controls);
        }
      }

      function AuthorizationComponent_dk_app_attribute_form2_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "dk-app-attribute-form2", 41);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("attributeControl", ctx_r1.authObjAttr)("formGroup", ctx_r1.newAuthFieldValueForm)("isSmallSize", true)("readonly", false);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "show": a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "display": a0
        };
      };

      var _AuthorizationComponent = /*#__PURE__*/function () {
        function _AuthorizationComponent(fb, identityService, entityService, messageService, attributeControlService) {
          _classCallCheck(this, _AuthorizationComponent);

          this.fb = fb;
          this.identityService = identityService;
          this.entityService = entityService;
          this.messageService = messageService;
          this.attributeControlService = attributeControlService;
          this.isAuthValueModalShown = false;
          this.isAuthObjectModalShown = false;
          this.selectAll = false;
          this.nodeID = 0;
        }

        _createClass(_AuthorizationComponent, [{
          key: "displayAuthValueModal",
          get: function get() {
            return this.isAuthValueModalShown ? 'block' : 'none';
          }
        }, {
          key: "displayAuthObjectModal",
          get: function get() {
            return this.isAuthObjectModalShown ? 'block' : 'none';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (!this.mainForm) {
              return;
            }

            this.authObjFormArray = this.mainForm.get(this.ctrlName);
            this.authObjFormArray.controls.forEach(function (ctrl) {
              if (ctrl.get('ROW_TYPE').value === 'FIELD') {
                ctrl.get('CHECKED').disable();
              }
            });
          }
        }, {
          key: "checkAll",
          value: function checkAll() {
            var _this31 = this;

            this.authObjFormArray.controls.forEach(function (authObjCtrl) {
              return authObjCtrl.get('CHECKED').setValue(!_this31.selectAll);
            });
            this.selectAll = !this.selectAll;
          }
        }, {
          key: "checkAuthObject",
          value: function checkAuthObject(idx) {
            var currentAuthObjCtrl = this.authObjFormArray.at(idx);
            this.authObjFormArray.controls.forEach(function (authObjCtrl, index) {
              if (index <= idx) {
                return;
              }

              if (authObjCtrl.get('NODE_ID').value === currentAuthObjCtrl.get('NODE_ID').value) {
                authObjCtrl.get('CHECKED').setValue(!currentAuthObjCtrl.get('CHECKED').value);
              }
            });
          }
        }, {
          key: "add",
          value: function add() {
            var _this32 = this;

            this.newAuthFieldValueForm = this.fb.group({
              CHECKED: '',
              COLLAPSED: false,
              NODE_ID: ++this.nodeID,
              STATUS: 'red',
              RELATIONSHIP_INSTANCE_GUID: '',
              auth_object_INSTANCE_GUID: '',
              AUTH_VALUE: '',
              OBJ_NAME: '',
              DESC: '',
              ROW_TYPE: 'OBJECT',
              FIELD_NAME: '',
              DATA_ELEMENT: ''
            });

            if (!this.authObjAttr) {
              this.entityService.getElementMeta('AUTH_OBJ_NAME').subscribe(function (elementMeta) {
                var attribute = elementMeta;
                attribute.ATTR_GUID = elementMeta.ELEMENT_ID;
                attribute.ATTR_NAME = elementMeta.ELEMENT_ID;
                attribute.DATA_ELEMENT = elementMeta.ELEMENT_ID;
                _this32.authObjAttr = _this32.attributeControlService.toSingleAttributeControl(attribute);
                _this32.authObjAttr.name = 'OBJ_NAME';
              });
            }

            this.isAuthObjectModalShown = true;
          }
        }, {
          key: "closeAuthObjectModal",
          value: function closeAuthObjectModal() {
            this.isAuthObjectModalShown = false;
          }
        }, {
          key: "addAuthObject",
          value: function addAuthObject() {
            var _this33 = this;

            var authObjName = this.newAuthFieldValueForm.get('OBJ_NAME').value;
            this.identityService.getAuthObjectDetail(authObjName).subscribe(function (data) {
              if ('ENTITY_ID' in data) {
                _this33.newAuthFieldValueForm.get('auth_object_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);

                _this33.newAuthFieldValueForm.get('DESC').setValue(data['authObject'][0]['DESC']);

                _this33.authObjFormArray.push(_this33.newAuthFieldValueForm);

                data['relationships'][0].values.forEach(function (value) {
                  _this33.authObjFormArray.push(_this33.fb.group({
                    CHECKED: [{
                      value: '',
                      disabled: true
                    }],
                    COLLAPSED: false,
                    NODE_ID: _this33.nodeID,
                    STATUS: 'red',
                    RELATIONSHIP_INSTANCE_GUID: '',
                    auth_object_INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                    AUTH_VALUE: '',
                    OBJ_NAME: authObjName,
                    DESC: _this33.newAuthFieldValueForm.get('DESC').value,
                    ROW_TYPE: 'FIELD',
                    FIELD_NAME: value['PARTNER_INSTANCES'][0]['authField'][0]['FIELD_NAME'],
                    DATA_ELEMENT: value['PARTNER_INSTANCES'][0]['authField'][0]['DATA_ELEMENT']
                  }));
                });
              } else {
                var errorMessages = data;
                errorMessages.forEach(function (msg) {
                  return _this33.messageService.add(msg);
                });
              }

              _this33.isAuthObjectModalShown = false;
            });
          }
        }, {
          key: "delete",
          value: function _delete() {
            var index = this.authObjFormArray.controls.findIndex(function (authObjCtrl) {
              return authObjCtrl.get('CHECKED').value;
            });

            while (index !== -1) {
              this.authObjFormArray.removeAt(index);
              this.authObjFormArray.markAsDirty();
              index = this.authObjFormArray.controls.findIndex(function (authObjCtrl) {
                return authObjCtrl.get('CHECKED').value;
              });
            }
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(rowID, exportObject) {
            var afterExportFn = function (context, rowIDx) {
              return function () {
                return context.onChangeCategory(rowIDx);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModalByEntity('authObject', 'authObject', exportObject, this.readonly, null, null, afterExportFn);
          }
        }, {
          key: "expendCollapse",
          value: function expendCollapse(idx) {
            var currentCtrl = this.authObjFormArray.at(idx);
            var parentNode = currentCtrl.get('NODE_ID').value;
            this.authObjFormArray.controls.forEach(function (appAuthObjCtrl) {
              if (appAuthObjCtrl.get('NODE_ID').value === parentNode) {
                appAuthObjCtrl.get('COLLAPSED').setValue(!appAuthObjCtrl.get('COLLAPSED').value);
              }
            });
          }
        }, {
          key: "openAuthValueModal",
          value: function openAuthValueModal(idx) {
            this.isAuthValueModalShown = true;
            this.currentAuthFieldValueForm = this.authObjFormArray.at(idx);
          }
        }, {
          key: "addAuthValue",
          value: function addAuthValue() {
            if (this.authValueComponent.generateAuthValue()) {
              this._coordinateStatus(this.currentAuthFieldValueForm);

              this.isAuthValueModalShown = false;
            }
          }
        }, {
          key: "setFullPermission",
          value: function setFullPermission(idx) {
            var currentAuthObjForm = this.authObjFormArray.at(idx);

            if (currentAuthObjForm.get('STATUS').value === 'green') {
              return;
            }

            if (currentAuthObjForm.get('ROW_TYPE').value === 'OBJECT') {
              currentAuthObjForm.get('STATUS').setValue('green');
              this.authObjFormArray.controls.forEach(function (appAuthObjForm) {
                if (appAuthObjForm.get('NODE_ID').value === currentAuthObjForm.get('NODE_ID').value && appAuthObjForm.get('ROW_TYPE').value === 'FIELD') {
                  appAuthObjForm.get('AUTH_VALUE').setValue('"*"');
                  appAuthObjForm.get('AUTH_VALUE').markAsDirty();
                  appAuthObjForm.get('STATUS').setValue('green');
                }
              });
            } else {
              // Field
              currentAuthObjForm.get('AUTH_VALUE').setValue('"*"');
              currentAuthObjForm.get('AUTH_VALUE').markAsDirty();
              currentAuthObjForm.get('STATUS').setValue('green');

              this._coordinateStatus(currentAuthObjForm);
            }
          }
        }, {
          key: "_coordinateStatus",
          value: function _coordinateStatus(appAuthObjForm) {
            var parentAuthObjectCtrl = this.authObjFormArray.controls.find(function (ctrl) {
              return ctrl.get('ROW_TYPE').value === 'OBJECT' && ctrl.get('NODE_ID').value === appAuthObjForm.get('NODE_ID').value;
            });

            if (this.authObjFormArray.controls.findIndex(function (ctrl) {
              return ctrl.get('ROW_TYPE').value === 'FIELD' && ctrl.get('NODE_ID').value === appAuthObjForm.get('NODE_ID').value && ctrl.get('STATUS').value === 'red';
            }) === -1) {
              parentAuthObjectCtrl.get('STATUS').setValue('green');
            } else {
              if (this.authObjFormArray.controls.findIndex(function (ctrl) {
                return ctrl.get('ROW_TYPE').value === 'FIELD' && ctrl.get('NODE_ID').value === appAuthObjForm.get('NODE_ID').value && ctrl.get('STATUS').value === 'green';
              }) === -1) {
                parentAuthObjectCtrl.get('STATUS').setValue('red');
              } else {
                parentAuthObjectCtrl.get('STATUS').setValue('yellow');
              }
            }
          }
        }]);

        return _AuthorizationComponent;
      }();

      _AuthorizationComponent.ɵfac = function AuthorizationComponent_Factory(t) {
        return new (t || _AuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_1__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_4__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_4__.AttributeControlService));
      };

      _AuthorizationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AuthorizationComponent,
        selectors: [["app-authorization"]],
        viewQuery: function AuthorizationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_4__.SearchHelpComponent, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_0__.AuthValueComponent, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.authValueComponent = _t.first);
          }
        },
        inputs: {
          readonly: "readonly",
          mainForm: "mainForm",
          ctrlName: "ctrlName"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 37,
        vars: 18,
        consts: [[1, "dk-auth-main", "mx-3"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end"], ["type", "button", "id", "remove-object", 1, "btn", "btn-light", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-minus"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus"], ["class", "table table-bordered table-sm dk-table", 3, "formGroup", 4, "ngIf"], ["id", "maintainAuthValueDialog", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "maintainAuthValueDialogTitle", 1, "modal-title"], [1, "modal-body"], [3, "authFieldValueForm", "readonly"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["id", "addAuthObject", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog"], ["id", "addAuthObjectTitle", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "table", "table-bordered", "table-sm", "dk-table", 3, "formGroup"], [1, "thead-light"], [1, "dk-checkbox"], ["name", "btSelectAll", "type", "checkbox", 3, "click"], [1, "dk-auth-object"], [1, "dk-auth-status"], [1, "dk-auth-value"], ["class", "treegrid-expanded", 3, "collapsed", 4, "ngFor", "ngForOf"], [1, "treegrid-expanded"], [1, "dk-checkbox", 3, "formGroup"], ["type", "checkbox", "formControlName", "CHECKED", 1, "form-control", "form-control-sm", 3, "click"], [4, "ngIf"], ["type", "button", "id", "add", "title", "Full Permission", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "traffic-light", 3, "ngClass"], [1, "treegrid-expander", 3, "ngClass", "click"], [1, "treegrid-indent"], [1, "treegrid-expander"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly"]],
        template: function AuthorizationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_2_listener() {
              return ctx["delete"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Remove");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_5_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AuthorizationComponent_table_8_Template, 13, 2, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h5", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Maintain Authorization Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-auth-value", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_19_listener() {
              return ctx.addAuthValue();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Add Authorization Object");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_27_listener() {
              return ctx.closeAuthObjectModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AuthorizationComponent_dk_app_attribute_form2_31_Template, 1, 4, "dk-app-attribute-form2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_33_listener() {
              return ctx.closeAuthObjectModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_35_listener() {
              return ctx.addAuthObject();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mainForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, ctx.isAuthValueModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c3, ctx.displayAuthValueModal));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("authFieldValueForm", ctx.currentAuthFieldValueForm)("readonly", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c2, ctx.isAuthObjectModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c3, ctx.displayAuthObjectModal));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newAuthFieldValueForm && ctx.authObjAttr);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ui_message_angular__WEBPACK_IMPORTED_MODULE_5__.MessageComponent, _auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_0__.AuthValueComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, jor_angular__WEBPACK_IMPORTED_MODULE_4__.AttributeForm2Component],
        styles: [".dk-auth-main[_ngcontent-%COMP%] {\n  display: block;\n}\n.dk-checkbox[_ngcontent-%COMP%] {\n  width: 1rem;\n}\n.dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.dk-auth-object[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.dk-auth-status[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n.dk-auth-value[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.collapsed[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJhdXRob3JpemF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstYXV0aC1tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZGstY2hlY2tib3gge1xuICB3aWR0aDogMXJlbTtcbn1cbi5kay10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGstdGFibGUgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRrLWF1dGgtb2JqZWN0IHtcbiAgd2lkdGg6IDIwcmVtO1xufVxuLmRrLWF1dGgtc3RhdHVzIHtcbiAgd2lkdGg6IDNyZW07XG59XG4uZGstYXV0aC12YWx1ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbGxhcHNlZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    6850:
    /*!******************************************!*\
      !*** ./src/app/custom.reuse.strategy.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomReuseStrategy": function CustomReuseStrategy() {
          return (
            /* binding */
            _CustomReuseStrategy
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _CustomReuseStrategy = /*#__PURE__*/function () {
        function _CustomReuseStrategy() {
          _classCallCheck(this, _CustomReuseStrategy);

          this.routesToCache = ['users', 'apps', 'app-categories', 'auth-objects', 'permissions', 'profiles'];
          this.storedRouteHandles = new Map();
        }
        /**
         * When navigation from a reusable component, and if shouldReuseRoute return false,
         * this method is invoked to decide whether the current route should be stored.
         * @param route
         */


        _createClass(_CustomReuseStrategy, [{
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

        return _CustomReuseStrategy;
      }();

      _CustomReuseStrategy.ɵfac = function CustomReuseStrategy_Factory(t) {
        return new (t || _CustomReuseStrategy)();
      };

      _CustomReuseStrategy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _CustomReuseStrategy,
        factory: _CustomReuseStrategy.ɵfac
      });
      /***/
    },

    /***/
    1969:
    /*!***********************************!*\
      !*** ./src/app/dialog.service.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DialogService": function DialogService() {
          return (
            /* binding */
            _DialogService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _DialogService = /*#__PURE__*/function () {
        function _DialogService() {
          _classCallCheck(this, _DialogService);
        }

        _createClass(_DialogService, [{
          key: "confirm",
          value:
          /**
           * Ask user to confirm an action. `message` explains the action and choices.
           * Returns observable resolving to `true`=confirm or `false`=cancel
           */
          function confirm(message) {
            var confirmation = window.confirm(message || 'Is it OK?');
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(confirmation);
          }
        }]);

        return _DialogService;
      }();

      _DialogService.ɵfac = function DialogService_Factory(t) {
        return new (t || _DialogService)();
      };

      _DialogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _DialogService,
        factory: _DialogService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8934:
    /*!*************************************!*\
      !*** ./src/app/identity.service.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IdentityService": function IdentityService() {
          return (
            /* binding */
            _IdentityService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../environments/environment */
      2340);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./identity */
      8508);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ui-logon-angular */
      8437);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      var _IdentityService = /*#__PURE__*/function () {
        function _IdentityService(http, messageService, uiMapperService, router) {
          _classCallCheck(this, _IdentityService);

          this.http = http;
          this.messageService = messageService;
          this.uiMapperService = uiMapperService;
          this.router = router;
          this.originalHost = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.originalHost;
          this.pseudoNodeID = 0;
        }

        _createClass(_IdentityService, [{
          key: "setSession",
          value: function setSession(data) {
            this.session = data;
          }
        }, {
          key: "Session",
          get: function get() {
            if (this.session) {
              return this.session;
            }

            var defaultSession = new ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__.Session();
            defaultSession.USER_ID = 'DH001';
            defaultSession.LANGUAGE = 'EN';
            return defaultSession;
          }
        }, {
          key: "CurrentTime",
          get: function get() {
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
          }
        }, {
          key: "searchPermissions",
          value: function searchPermissions(permissionID, permissionDesc) {
            var queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_5__.QueryObject();
            queryObject.ENTITY_ID = 'permission';
            queryObject.RELATION_ID = 'r_role';
            queryObject.PROJECTION = ['NAME', 'DESCRIPTION', {
              FIELD_NAME: 'CREATED_BY',
              RELATION_ID: 'permission'
            }, {
              FIELD_NAME: 'CREATE_TIME',
              RELATION_ID: 'permission'
            }, {
              FIELD_NAME: 'CHANGED_BY',
              RELATION_ID: 'permission'
            }, {
              FIELD_NAME: 'CHANGE_TIME',
              RELATION_ID: 'permission'
            }];
            queryObject.FILTER = [];

            if (permissionID) {
              if (permissionID.includes('*') || permissionID.includes('%')) {
                queryObject.FILTER.push({
                  FIELD_NAME: 'NAME',
                  OPERATOR: 'CN',
                  LOW: permissionID
                });
              } else {
                queryObject.FILTER.push({
                  FIELD_NAME: 'NAME',
                  OPERATOR: 'EQ',
                  LOW: permissionID
                });
              }
            }

            if (permissionDesc) {
              if (permissionDesc.includes('*')) {
                permissionDesc = permissionDesc.replace(/\*/gi, '%');
                queryObject.FILTER.push({
                  FIELD_NAME: 'DESCRIPTION',
                  OPERATOR: 'CN',
                  LOW: permissionDesc
                });
              } else {
                queryObject.FILTER.push({
                  FIELD_NAME: 'DESCRIPTION',
                  OPERATOR: 'EQ',
                  LOW: permissionDesc
                });
              }
            }

            queryObject.SORT = [{
              FIELD_NAME: 'CHANGE_TIME',
              RELATION_ID: 'permission',
              ORDER: 'DESC'
            }];
            return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('searchObjects')));
          }
        }, {
          key: "getPermissionDetail",
          value: function getPermissionDetail(permissionName) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'r_role',
                NAME: permissionName
              },
              piece: {
                RELATIONS: ['permission', 'r_role'],
                RELATIONSHIPS: [{
                  RELATIONSHIP_ID: 'rs_user_role',
                  PARTNER_ENTITY_PIECES: {
                    RELATIONS: ['r_user']
                  }
                }, {
                  RELATIONSHIP_ID: 'rs_role_category_profile',
                  PARTNER_ENTITY_PIECES: [{
                    ENTITY_ID: 'category',
                    piece: {
                      RELATIONS: ['r_app_category'],
                      RELATIONSHIPS: [{
                        RELATIONSHIP_ID: 'rs_app_category',
                        PARTNER_ENTITY_PIECES: {
                          RELATIONS: ['app']
                        }
                      }]
                    }
                  }, {
                    ENTITY_ID: 'authProfile',
                    piece: {
                      RELATIONS: ['authProfile'],
                      RELATIONSHIPS: [{
                        RELATIONSHIP_ID: 'rs_auth_profile_object',
                        PARTNER_ENTITY_PIECES: {
                          RELATIONS: ['authObject'],
                          RELATIONSHIPS: [{
                            RELATIONSHIP_ID: 'rs_auth_object_field',
                            PARTNER_ENTITY_PIECES: {
                              RELATIONS: ['authField']
                            }
                          }]
                        }
                      }]
                    }
                  }]
                }]
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getPermissionDetail')));
          }
        }, {
          key: "getPermissionByName",
          value: function getPermissionByName(permissionName) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'r_role',
                NAME: permissionName
              },
              piece: {
                RELATIONS: ['r_role']
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getPermissionByName')));
          }
        }, {
          key: "searchApps",
          value: function searchApps(appID, appName) {
            var queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_5__.QueryObject();
            queryObject.ENTITY_ID = 'app';
            queryObject.RELATION_ID = 'app';
            queryObject.PROJECTION = ['APP_ID', 'NAME', 'ROUTE_LINK', 'IS_EXTERNAL', 'CREATED_BY', 'CREATE_TIME', 'CHANGED_BY', 'CHANGE_TIME'];
            queryObject.FILTER = [];

            if (appID) {
              if (appID.includes('*') || appID.includes('%')) {
                queryObject.FILTER.push({
                  FIELD_NAME: 'APP_ID',
                  OPERATOR: 'CN',
                  LOW: appID
                });
              } else {
                queryObject.FILTER.push({
                  FIELD_NAME: 'APP_ID',
                  OPERATOR: 'EQ',
                  LOW: appID
                });
              }
            }

            if (appName) {
              if (appName.includes('*')) {
                appName = appName.replace(/\*/gi, '%');
                queryObject.FILTER.push({
                  FIELD_NAME: 'NAME',
                  OPERATOR: 'CN',
                  LOW: appName
                });
              } else {
                queryObject.FILTER.push({
                  FIELD_NAME: 'NAME',
                  OPERATOR: 'EQ',
                  LOW: appName
                });
              }
            }

            queryObject.SORT = [{
              FIELD_NAME: 'CHANGE_TIME',
              ORDER: 'DESC'
            }];
            return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('searchObjects')));
          }
        }, {
          key: "getAppDetail",
          value: function getAppDetail(appID) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'app',
                APP_ID: appID
              },
              piece: {
                RELATIONS: ['app'],
                RELATIONSHIPS: [{
                  RELATIONSHIP_ID: 'rs_app_category',
                  PARTNER_ENTITY_PIECES: {
                    RELATIONS: ['r_app_category']
                  }
                }, {
                  RELATIONSHIP_ID: 'rs_app_auth',
                  PARTNER_ENTITY_PIECES: {
                    RELATIONS: ['authObject'],
                    RELATIONSHIPS: [{
                      RELATIONSHIP_ID: 'rs_auth_object_field',
                      PARTNER_ENTITY_PIECES: {
                        RELATIONS: ['authField']
                      }
                    }]
                  }
                }]
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getAppDetail')));
          }
        }, {
          key: "getAppByID",
          value: function getAppByID(appID) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'app',
                APP_ID: appID
              },
              piece: {
                RELATIONS: ['app']
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getAppByID')));
          }
        }, {
          key: "getCategoryName",
          value: function getCategoryName(categoryID) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'r_app_category',
                ID: categoryID
              },
              piece: {
                RELATIONS: ['r_app_category']
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (instance) {
              return 'INSTANCE_GUID' in instance ? {
                INSTANCE_GUID: instance['INSTANCE_GUID'],
                NAME: instance['r_app_category'] ? instance['r_app_category'][0]['NAME'] : '',
                ICON: instance['r_app_category'] ? instance['r_app_category'][0]['ICON'] : ''
              } : instance[0];
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getCategoryName')));
          }
        }, {
          key: "searchAuthObjects",
          value: function searchAuthObjects(authObjName, authObjDesc) {
            var queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_5__.QueryObject();
            queryObject.ENTITY_ID = 'authObject';
            queryObject.RELATION_ID = 'authObject';
            queryObject.PROJECTION = ['OBJ_NAME', 'DESC', 'CREATED_BY', 'CREATE_TIME', 'CHANGED_BY', 'CHANGE_TIME'];
            queryObject.FILTER = [];

            if (authObjName) {
              if (authObjName.includes('*') || authObjName.includes('%')) {
                queryObject.FILTER.push({
                  FIELD_NAME: 'OBJ_NAME',
                  OPERATOR: 'CN',
                  LOW: authObjName
                });
              } else {
                queryObject.FILTER.push({
                  FIELD_NAME: 'OBJ_NAME',
                  OPERATOR: 'EQ',
                  LOW: authObjName
                });
              }
            }

            if (authObjDesc) {
              if (authObjDesc.includes('*')) {
                authObjDesc = authObjDesc.replace(/\*/gi, '%');
                queryObject.FILTER.push({
                  FIELD_NAME: 'DESC',
                  OPERATOR: 'CN',
                  LOW: authObjDesc
                });
              } else {
                queryObject.FILTER.push({
                  FIELD_NAME: 'DESC',
                  OPERATOR: 'EQ',
                  LOW: authObjDesc
                });
              }
            }

            queryObject.SORT = [{
              FIELD_NAME: 'CHANGE_TIME',
              ORDER: 'DESC'
            }];
            return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('searchAuthObjects')));
          }
        }, {
          key: "getAuthObjectDetail",
          value: function getAuthObjectDetail(authObjName) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'authObject',
                OBJ_NAME: authObjName
              },
              piece: {
                RELATIONS: ['authObject'],
                RELATIONSHIPS: [{
                  RELATIONSHIP_ID: 'rs_auth_object_field',
                  PARTNER_ENTITY_PIECES: {
                    RELATIONS: ['authField']
                  }
                }]
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getAuthObjectDetail')));
          }
        }, {
          key: "getAuthObjectByName",
          value: function getAuthObjectByName(authObjName) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'authObject',
                OBJ_NAME: authObjName
              },
              piece: {
                RELATIONS: ['authObject']
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getAuthObjectByName')));
          }
        }, {
          key: "getAuthFieldInfo",
          value: function getAuthFieldInfo(authFieldName) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'authField',
                FIELD_NAME: authFieldName
              },
              piece: {
                RELATIONS: ['authField']
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (instance) {
              return 'INSTANCE_GUID' in instance ? {
                INSTANCE_GUID: instance['INSTANCE_GUID'],
                NAME: instance['authField'] ? instance['authField'][0]['FIELD_NAME'] : '',
                DATA_ELEMENT: instance['authField'] ? instance['authField'][0]['DATA_ELEMENT'] : ''
              } : instance[0];
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getAuthObjectByName')));
          }
        }, {
          key: "searchAppCategories",
          value: function searchAppCategories(appCategoryID, appCategoryName) {
            var queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_5__.QueryObject();
            queryObject.ENTITY_ID = 'category';
            queryObject.RELATION_ID = 'r_app_category';
            queryObject.PROJECTION = ['ID', 'NAME', 'ICON', {
              FIELD_NAME: 'CREATED_BY',
              RELATION_ID: 'category'
            }, {
              FIELD_NAME: 'CREATE_TIME',
              RELATION_ID: 'category'
            }, {
              FIELD_NAME: 'CHANGED_BY',
              RELATION_ID: 'category'
            }, {
              FIELD_NAME: 'CHANGE_TIME',
              RELATION_ID: 'category'
            }];
            queryObject.FILTER = [];

            if (appCategoryID) {
              if (appCategoryID.includes('*') || appCategoryID.includes('%')) {
                queryObject.FILTER.push({
                  FIELD_NAME: 'ID',
                  OPERATOR: 'CN',
                  LOW: appCategoryID
                });
              } else {
                queryObject.FILTER.push({
                  FIELD_NAME: 'ID',
                  OPERATOR: 'EQ',
                  LOW: appCategoryID
                });
              }
            }

            if (appCategoryName) {
              if (appCategoryName.includes('*')) {
                appCategoryName = appCategoryName.replace(/\*/gi, '%');
                queryObject.FILTER.push({
                  FIELD_NAME: 'NAME',
                  OPERATOR: 'CN',
                  LOW: appCategoryName
                });
              } else {
                queryObject.FILTER.push({
                  FIELD_NAME: 'NAME',
                  OPERATOR: 'EQ',
                  LOW: appCategoryName
                });
              }
            }

            queryObject.FILTER.push({
              RELATION_ID: 'category',
              FIELD_NAME: 'TYPE',
              OPERATOR: 'EQ',
              LOW: 'APP'
            });
            queryObject.SORT = [{
              FIELD_NAME: 'CHANGE_TIME',
              RELATION_ID: 'category',
              ORDER: 'DESC'
            }];
            return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('searchAppCategories')));
          }
        }, {
          key: "getAppCategoryDetail",
          value: function getAppCategoryDetail(appCategoryID) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'r_app_category',
                ID: appCategoryID
              },
              piece: {
                RELATIONS: ['category', 'r_app_category'],
                RELATIONSHIPS: [{
                  RELATIONSHIP_ID: 'rs_app_category',
                  PARTNER_ENTITY_PIECES: {
                    RELATIONS: ['app']
                  }
                }, {
                  RELATIONSHIP_ID: 'rs_role_category_profile',
                  PARTNER_ENTITY_PIECES: [{
                    ENTITY_ID: 'permission',
                    piece: {
                      RELATIONS: ['r_role']
                    }
                  }]
                }]
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getAppCategoryDetail')));
          }
        }, {
          key: "getAppCategoryByID",
          value: function getAppCategoryByID(appCategoryID) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'r_app_category',
                ID: appCategoryID
              },
              piece: {
                RELATIONS: ['r_app_category']
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getAppCategoryByID')));
          }
        }, {
          key: "searchAuthProfiles",
          value: function searchAuthProfiles(profileName, profileDesc) {
            var queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_5__.QueryObject();
            queryObject.ENTITY_ID = 'authProfile';
            queryObject.RELATION_ID = 'authProfile';
            queryObject.PROJECTION = ['PROFILE_NAME', 'DESC', 'CREATED_BY', 'CREATE_TIME', 'CHANGED_BY', 'CHANGE_TIME'];
            queryObject.FILTER = [];

            if (profileName) {
              if (profileName.includes('*') || profileName.includes('%')) {
                queryObject.FILTER.push({
                  FIELD_NAME: 'PROFILE_NAME',
                  OPERATOR: 'CN',
                  LOW: profileName
                });
              } else {
                queryObject.FILTER.push({
                  FIELD_NAME: 'PROFILE_NAME',
                  OPERATOR: 'EQ',
                  LOW: profileName
                });
              }
            }

            if (profileDesc) {
              if (profileDesc.includes('*')) {
                profileDesc = profileDesc.replace(/\*/gi, '%');
                queryObject.FILTER.push({
                  FIELD_NAME: 'DESC',
                  OPERATOR: 'CN',
                  LOW: profileDesc
                });
              } else {
                queryObject.FILTER.push({
                  FIELD_NAME: 'DESC',
                  OPERATOR: 'EQ',
                  LOW: profileDesc
                });
              }
            }

            queryObject.SORT = [{
              FIELD_NAME: 'CHANGE_TIME',
              ORDER: 'DESC'
            }];
            return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('searchAuthProfiles')));
          }
        }, {
          key: "getAuthProfileDetail",
          value: function getAuthProfileDetail(profileName) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'authProfile',
                PROFILE_NAME: profileName
              },
              piece: {
                RELATIONS: ['authProfile'],
                RELATIONSHIPS: [{
                  RELATIONSHIP_ID: 'rs_auth_profile_object',
                  PARTNER_ENTITY_PIECES: {
                    RELATIONS: ['authObject'],
                    RELATIONSHIPS: [{
                      RELATIONSHIP_ID: 'rs_auth_object_field',
                      PARTNER_ENTITY_PIECES: {
                        RELATIONS: ['authField']
                      }
                    }]
                  }
                }]
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getAuthProfileDetail')));
          }
        }, {
          key: "getAuthProfileByName",
          value: function getAuthProfileByName(profileName) {
            var pieceObject = {
              ID: {
                RELATION_ID: 'authProfile',
                PROFILE_NAME: profileName
              },
              piece: {
                RELATIONS: ['authProfile']
              }
            };
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getAuthProfileByName')));
          }
        }, {
          key: "searchUsers",
          value: function searchUsers(userID, userName) {
            var queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_5__.QueryObject();
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
            return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('searchObjects')));
          }
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
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getUserDetail')));
          }
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
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getUserByUserID')));
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
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getUserByUserName')));
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
            return this.http.post(this.originalHost + "/api/entity/instance/piece", pieceObject, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (instance) {
              return 'INSTANCE_GUID' in instance ? {
                INSTANCE_GUID: instance['INSTANCE_GUID'],
                DESCRIPTION: instance['r_role'] ? instance['r_role'][0]['DESCRIPTION'] : ''
              } : instance[0];
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('getRoleDesc')));
          }
        }, {
          key: "orchestrate",
          value: function orchestrate(operations) {
            return this.http.post(this.originalHost + "/api/entity/orchestrate", operations, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('orchestrate')));
          }
        }, {
          key: "save",
          value: function save(entity) {
            if (entity['INSTANCE_GUID']) {
              return this.http.put(this.originalHost + "/api/entity", entity, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('saveUser')));
            } else {
              return this.http.post(this.originalHost + "/api/entity", entity, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('save')));
            }
          }
        }, {
          key: "delete",
          value: function _delete(entityGUID) {
            return this.http["delete"](this.originalHost + "/api/entity/instance/" + entityGUID, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('delete')));
          }
        }, {
          key: "parseProfileAuthObject",
          value: function parseProfileAuthObject(relationship) {
            var _this34 = this;

            var authorizations = [];

            if (!relationship) {
              return authorizations;
            }

            relationship.values.forEach(function (value) {
              var authorization = value['AUTH_VALUE'] ? JSON.parse(value['AUTH_VALUE']) : null;
              var status = authorization ? Object.values(authorization.AuthFieldValue).findIndex(function (authValue) {
                return !authValue;
              }) !== -1 ? 'yellow' : 'green' : 'red';
              authorizations.push({
                CHECKED: '',
                COLLAPSED: false,
                NODE_ID: value['RELATIONSHIP_INSTANCE_GUID'] || ++_this34.pseudoNodeID,
                STATUS: status,
                RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                auth_object_INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                AUTH_VALUE: value['AUTH_VALUE'],
                OBJ_NAME: value['PARTNER_INSTANCES'][0]['authObject'][0]['OBJ_NAME'],
                DESC: value['PARTNER_INSTANCES'][0]['authObject'][0]['DESC'],
                ROW_TYPE: 'OBJECT',
                FIELD_NAME: '',
                DATA_ELEMENT: ''
              });
              var authObjectFields = value['PARTNER_INSTANCES'][0]['relationships'][0];
              authObjectFields.values.forEach(function (value2) {
                var authFieldName = value2['PARTNER_INSTANCES'][0]['authField'][0]['FIELD_NAME'];
                authorizations.push({
                  CHECKED: '',
                  COLLAPSED: false,
                  NODE_ID: value['RELATIONSHIP_INSTANCE_GUID'] || _this34.pseudoNodeID,
                  STATUS: authorization.AuthFieldValue[authFieldName] ? authorization.AuthFieldValue[authFieldName].length > 0 ? 'green' : 'red' : 'red',
                  RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                  auth_object_INSTANCE_GUID: '',
                  AUTH_VALUE: authorization && authorization.AuthFieldValue[authFieldName] && JSON.stringify(authorization.AuthFieldValue[authFieldName], null, ' '),
                  OBJ_NAME: value['PARTNER_INSTANCES'][0]['authObject'][0]['OBJ_NAME'],
                  DESC: '',
                  ROW_TYPE: 'FIELD',
                  FIELD_NAME: authFieldName,
                  DATA_ELEMENT: value2['PARTNER_INSTANCES'][0]['authField'][0]['DATA_ELEMENT']
                });
              });
            });
            return authorizations;
          }
        }, {
          key: "composeAuthChanges",
          value: function composeAuthChanges(formArray, originalValue, relationshipID) {
            var authorization;
            var currentAuthObjectCtrl;
            var isAuthorizationChanged = false;
            formArray.controls.forEach(function (control) {
              var rowType = control.get('ROW_TYPE').value;

              if (rowType === 'OBJECT') {
                if (currentAuthObjectCtrl && isAuthorizationChanged) {
                  currentAuthObjectCtrl.get('AUTH_VALUE').setValue(JSON.stringify(authorization, null, ' '));
                  currentAuthObjectCtrl.get('AUTH_VALUE').markAsDirty();
                }

                currentAuthObjectCtrl = control;
                authorization = new _identity__WEBPACK_IMPORTED_MODULE_1__.Authorization();
                authorization.AuthObject = control.get('OBJ_NAME').value;
                authorization.AuthFieldValue = {};
                isAuthorizationChanged = false;
              } else {
                // Field
                if (control.dirty) {
                  isAuthorizationChanged = true;
                  control.markAsPristine();
                }

                authorization.AuthFieldValue[control.get('FIELD_NAME').value] = control.get('AUTH_VALUE').value ? JSON.parse(control.get('AUTH_VALUE').value) : null;
              }
            });

            if (currentAuthObjectCtrl && isAuthorizationChanged) {
              currentAuthObjectCtrl.get('AUTH_VALUE').setValue(JSON.stringify(authorization, null, ' '));
              currentAuthObjectCtrl.get('AUTH_VALUE').markAsDirty();
            }

            var originalAuthObjValue = [];

            if (originalValue) {
              originalValue.forEach(function (authObj) {
                if (authObj.ROW_TYPE === 'OBJECT') {
                  originalAuthObjValue.push(authObj);
                }
              });
            }

            return this.uiMapperService.composeChangedRelationship(relationshipID, [{
              ENTITY_ID: 'authObject',
              ROLE_ID: 'auth_object'
            }], formArray, originalAuthObjValue, ['CHECKED', 'COLLAPSED', 'NODE_ID', 'OBJ_NAME', 'DESC', 'ROW_TYPE', 'FIELD_NAME', 'DATA_ELEMENT']);
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this35 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              if (error.status === 401) {
                _this35.messageService.addMessage('EXCEPTION', 'NOT_AUTHENTICATED_OR_SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_8__.messageType.Exception);
              } else {
                _this35.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_8__.messageType.Exception, operation, error.message);
              }

              _this35.router.navigate(['errors']);

              console.error(operation, error); // log to console instead
              // Let the app keep running by returning an empty result.

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(result);
            };
          }
        }]);

        return _IdentityService;
      }();

      _IdentityService.ɵfac = function IdentityService_Factory(t) {
        return new (t || _IdentityService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_8__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](jor_angular__WEBPACK_IMPORTED_MODULE_5__.UiMapperService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
      };

      _IdentityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
        token: _IdentityService,
        factory: _IdentityService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8508:
    /*!*****************************!*\
      !*** ./src/app/identity.ts ***!
      \*****************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PermissionList": function PermissionList() {
          return (
            /* binding */
            _PermissionList
          );
        },

        /* harmony export */
        "UserList": function UserList() {
          return (
            /* binding */
            _UserList
          );
        },

        /* harmony export */
        "AppList": function AppList() {
          return (
            /* binding */
            _AppList
          );
        },

        /* harmony export */
        "AuthObjList": function AuthObjList() {
          return (
            /* binding */
            _AuthObjList
          );
        },

        /* harmony export */
        "AuthProfileList": function AuthProfileList() {
          return (
            /* binding */
            _AuthProfileList
          );
        },

        /* harmony export */
        "AppCategoryList": function AppCategoryList() {
          return (
            /* binding */
            _AppCategoryList
          );
        },

        /* harmony export */
        "Authorization": function Authorization() {
          return (
            /* binding */
            _Authorization
          );
        },

        /* harmony export */
        "AuthFieldValue": function AuthFieldValue() {
          return (
            /* binding */
            _AuthFieldValue
          );
        },

        /* harmony export */
        "SelectOption": function SelectOption() {
          return (
            /* binding */
            _SelectOption
          );
        },

        /* harmony export */
        "Operator": function Operator() {
          return (
            /* binding */
            _Operator
          );
        },

        /* harmony export */
        "Option": function Option() {
          return (
            /* binding */
            _Option
          );
        }
        /* harmony export */

      });

      var _PermissionList = function _PermissionList() {
        _classCallCheck(this, _PermissionList);
      };

      var _UserList = function _UserList() {
        _classCallCheck(this, _UserList);
      };

      var _AppList = function _AppList() {
        _classCallCheck(this, _AppList);
      };

      var _AuthObjList = function _AuthObjList() {
        _classCallCheck(this, _AuthObjList);
      };

      var _AuthProfileList = function _AuthProfileList() {
        _classCallCheck(this, _AuthProfileList);
      };

      var _AppCategoryList = function _AppCategoryList() {
        _classCallCheck(this, _AppCategoryList);
      };

      var _Authorization = function _Authorization() {
        _classCallCheck(this, _Authorization);
      };

      var _AuthFieldValue = function _AuthFieldValue() {
        _classCallCheck(this, _AuthFieldValue);
      };

      var _SelectOption = function _SelectOption() {
        _classCallCheck(this, _SelectOption);
      };

      var _Operator;

      (function (Operator) {
        Operator["Between"] = "Between";
        Operator["GreaterThan"] = "GreaterThan";
        Operator["LessThan"] = "LessThan";
        Operator["GreaterEqual"] = "GreaterEqual";
        Operator["LessEqual"] = "LessEqual";
        Operator["Equal"] = "Equal";
        Operator["NotEqual"] = "NotEqual";
        Operator["StartsWith"] = "StartsWith";
        Operator["EndsWith"] = "EndsWith";
        Operator["Contains"] = "Contains";
        Operator["Matches"] = "Matches";
      })(_Operator || (_Operator = {}));

      var _Option;

      (function (Option) {
        Option["Include"] = "Include";
        Option["Exclude"] = "Exclude";
      })(_Option || (_Option = {}));
      /***/

    },

    /***/
    7534:
    /*!*****************************!*\
      !*** ./src/app/msgStore.ts ***!
      \*****************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "msgStore": function msgStore() {
          return (
            /* binding */
            _msgStore
          );
        }
        /* harmony export */

      });

      var _msgStore = [{
        msgCat: 'EXCEPTION',
        msgName: 'GENERIC',
        msgText: {
          EN: {
            shortText: 'Exception Occurs in Operation: \'%s\'',
            longText: '%s1'
          }
        }
      }, {
        msgCat: 'EXCEPTION',
        msgName: 'NOT_AUTHENTICATED_OR_SESSION_EXPIRED',
        msgText: {
          EN: {
            shortText: 'You are not authenticated or your session is expired!',
            longText: 'You are not authenticated or your session is expired, please <a href=\'/logon\'>re-logon</a>.'
          }
        }
      }, {
        msgCat: 'GENERAL',
        msgName: 'EMPTY_LIST',
        msgText: {
          EN: {
            shortText: 'No result is found',
            longText: 'The system cannot find any items meet the search criteria.'
          }
        }
      }, {
        msgCat: 'GENERAL',
        msgName: 'UNSAVED_CHANGES',
        msgText: {
          EN: {
            shortText: 'There are unsaved changes. Do you want to save the changes?',
            longText: ''
          }
        }
      }, {
        msgCat: 'GENERAL',
        msgName: 'NO_CHANGE',
        msgText: {
          EN: {
            shortText: 'No change is made, saving is not necessary.',
            longText: 'The data is not changed, thus there is no need to save changes'
          }
        }
      }, {
        msgCat: 'USER',
        msgName: 'INVALID',
        msgText: {
          EN: {
            shortText: 'Data is invalid, please check.',
            longText: 'The data still contains some errors, please make sure all mandatory fields are filled!'
          }
        }
      }, {
        msgCat: 'USER',
        msgName: 'USER_NAME_EXISTS',
        msgText: {
          EN: {
            shortText: 'User name: \'%s\' already exists!',
            longText: ''
          }
        }
      }, {
        msgCat: 'USER',
        msgName: 'USER_ID_EXISTS',
        msgText: {
          EN: {
            shortText: 'User ID: \'%s\' already exists!',
            longText: ''
          }
        }
      }, {
        msgCat: 'USER',
        msgName: 'AT_LEAST_ONE_EMAIL',
        msgText: {
          EN: {
            shortText: 'At least one email needs to be maintained!',
            longText: ''
          }
        }
      }, {
        msgCat: 'USER',
        msgName: 'USER_SAVED',
        msgText: {
          EN: {
            shortText: 'User \'%s\' is saved!',
            longText: ''
          }
        }
      }, {
        msgCat: 'PERMISSION',
        msgName: 'PERMISSION_EXISTS',
        msgText: {
          EN: {
            shortText: 'The permission %s exists.',
            longText: ''
          }
        }
      }, {
        msgCat: 'PERMISSION',
        msgName: 'INVALID',
        msgText: {
          EN: {
            shortText: 'The permission contains invalid inputs, please check.',
            longText: ''
          }
        }
      }, {
        msgCat: 'PERMISSION',
        msgName: 'SAVED',
        msgText: {
          EN: {
            shortText: 'The permission is saved.',
            longText: ''
          }
        }
      }, {
        msgCat: 'APP',
        msgName: 'APP_EXISTS',
        msgText: {
          EN: {
            shortText: 'The App %s exists.',
            longText: ''
          }
        }
      }, {
        msgCat: 'APP',
        msgName: 'INVALID',
        msgText: {
          EN: {
            shortText: 'The App contains invalid inputs, please check.',
            longText: ''
          }
        }
      }, {
        msgCat: 'APP',
        msgName: 'SAVED',
        msgText: {
          EN: {
            shortText: 'The App is saved.',
            longText: ''
          }
        }
      }, {
        msgCat: 'AUTH_OBJECT',
        msgName: 'AUTH_OBJECT_EXISTS',
        msgText: {
          EN: {
            shortText: 'The authorization object %s exists.',
            longText: ''
          }
        }
      }, {
        msgCat: 'AUTH_OBJECT',
        msgName: 'INVALID',
        msgText: {
          EN: {
            shortText: 'The authorization object contains invalid inputs, please check.',
            longText: ''
          }
        }
      }, {
        msgCat: 'AUTH_OBJECT',
        msgName: 'SAVED',
        msgText: {
          EN: {
            shortText: 'The authorization object is saved.',
            longText: ''
          }
        }
      }, {
        msgCat: 'APP_CATEGORY',
        msgName: 'APP_CATEGORY_EXISTS',
        msgText: {
          EN: {
            shortText: 'The application category %s exists.',
            longText: ''
          }
        }
      }, {
        msgCat: 'APP_CATEGORY',
        msgName: 'INVALID',
        msgText: {
          EN: {
            shortText: 'The application category contains invalid inputs, please check.',
            longText: ''
          }
        }
      }, {
        msgCat: 'APP_CATEGORY',
        msgName: 'SAVED',
        msgText: {
          EN: {
            shortText: 'The application category is saved.',
            longText: ''
          }
        }
      }, {
        msgCat: 'AUTH_PROFILE',
        msgName: 'AUTH_PROFILE_EXISTS',
        msgText: {
          EN: {
            shortText: 'The authorization profile %s exists.',
            longText: ''
          }
        }
      }, {
        msgCat: 'AUTH_PROFILE',
        msgName: 'INVALID',
        msgText: {
          EN: {
            shortText: 'The authorization profile contains invalid inputs, please check.',
            longText: ''
          }
        }
      }, {
        msgCat: 'AUTH_PROFILE',
        msgName: 'SAVED',
        msgText: {
          EN: {
            shortText: 'The authorization profile is saved.',
            longText: ''
          }
        }
      }];
      /***/
    },

    /***/
    8120:
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/permission/permission-detail/permission-detail-category/permission-detail-category.component.ts ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PermissionDetailCategoryComponent": function PermissionDetailCategoryComponent() {
          return (
            /* binding */
            _PermissionDetailCategoryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _authorization_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../authorization/auth-value/auth-value.component */
      7886);
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! uuid */
      6404);
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../identity.service */
      8934);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0(a0, a1) {
        return {
          "treegrid-expander-expanded": a0,
          "treegrid-expander-collapsed": a1
        };
      };

      function PermissionDetailCategoryComponent_tr_20_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_tr_20_td_3_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.expendCollapse(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoryForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c0, !categoryForm_r2.get("COLLAPSED").value, categoryForm_r2.get("COLLAPSED").value));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", categoryForm_r2.get("category.ICON").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", categoryForm_r2.get("category.ID").value, " ");
        }
      }

      function PermissionDetailCategoryComponent_tr_20_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoryForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", categoryForm_r2.get("app.APP_ID").value, " ");
        }
      }

      function PermissionDetailCategoryComponent_tr_20_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoryForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](categoryForm_r2.get("category.NAME").value);
        }
      }

      function PermissionDetailCategoryComponent_tr_20_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoryForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](categoryForm_r2.get("app.NAME").value);
        }
      }

      function PermissionDetailCategoryComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_tr_20_Template_input_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);

            var i_r3 = restoredCtx.index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r15.checkCategory(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PermissionDetailCategoryComponent_tr_20_td_3_Template, 4, 6, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PermissionDetailCategoryComponent_tr_20_td_4_Template, 4, 1, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PermissionDetailCategoryComponent_tr_20_td_7_Template, 2, 1, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PermissionDetailCategoryComponent_tr_20_td_8_Template, 2, 1, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoryForm_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("collapsed", categoryForm_r2.get("ROW_TYPE").value === "app" && categoryForm_r2.get("COLLAPSED").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", categoryForm_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", categoryForm_r2.get("ROW_TYPE").value === "category");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", categoryForm_r2.get("ROW_TYPE").value === "app");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", categoryForm_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readOnly", categoryForm_r2.get("ROW_TYPE").value === "app" || ctx_r0.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", categoryForm_r2.get("ROW_TYPE").value === "category");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", categoryForm_r2.get("ROW_TYPE").value === "app");
        }
      }

      function PermissionDetailCategoryComponent_dk_app_attribute_form2_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dk-app-attribute-form2", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function PermissionDetailCategoryComponent_dk_app_attribute_form2_31_Template_dk_app_attribute_form2_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r17.enterConfirm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("attributeControl", ctx_r1.categoryAttr)("formGroup", ctx_r1.newCategoryForm.get("category"))("isSmallSize", true)("readonly", false);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "show": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "display": a0
        };
      };

      var _PermissionDetailCategoryComponent = /*#__PURE__*/function () {
        function _PermissionDetailCategoryComponent(fb, identityService, entityService, messageService, attributeControlService) {
          _classCallCheck(this, _PermissionDetailCategoryComponent);

          this.fb = fb;
          this.identityService = identityService;
          this.entityService = entityService;
          this.messageService = messageService;
          this.attributeControlService = attributeControlService;
          this.isCategoryModalShown = false;
          this.selectAll = false;
        }

        _createClass(_PermissionDetailCategoryComponent, [{
          key: "displayCategoryModal",
          get: function get() {
            return this.isCategoryModalShown ? 'block' : 'none';
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.categoryFormArray = this.mainForm.get('categories');
            this.categoryFormArray.controls.forEach(function (ctrl) {
              if (ctrl.get('ROW_TYPE').value === 'app') {
                ctrl.get('CHECKED').disable();
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkAll",
          value: function checkAll() {
            var _this36 = this;

            this.categoryFormArray.controls.forEach(function (appCategoryCtrl) {
              return appCategoryCtrl.get('CHECKED').setValue(!_this36.selectAll);
            });
            this.selectAll = !this.selectAll;
          }
        }, {
          key: "checkCategory",
          value: function checkCategory(idx) {
            var currentCategoryCtrl = this.categoryFormArray.at(idx);
            this.categoryFormArray.controls.forEach(function (categoryCtrl, index) {
              if (index <= idx) {
                return;
              }

              if (categoryCtrl.get('category.ID').value === currentCategoryCtrl.get('category.ID').value) {
                categoryCtrl.get('CHECKED').setValue(!currentCategoryCtrl.get('CHECKED').value);
              }
            });
          }
        }, {
          key: "add",
          value: function add() {
            var _this37 = this;

            this.newCategoryForm = this.fb.group({
              CHECKED: '',
              COLLAPSED: false,
              ROW_TYPE: 'category',
              RELATIONSHIP_INSTANCE_GUID: '',
              app_category_INSTANCE_GUID: '',
              auth_profile_INSTANCE_GUID: '',
              ORDER: '',
              category: this.fb.group({
                ID: '',
                NAME: '',
                ICON: ''
              })
            });

            if (!this.categoryAttr) {
              this.entityService.getElementMeta('CATEGORY_ID').subscribe(function (elementMeta) {
                var attribute = elementMeta;
                attribute.ATTR_GUID = elementMeta.ELEMENT_ID;
                attribute.ATTR_NAME = elementMeta.ELEMENT_ID;
                attribute.DATA_ELEMENT = elementMeta.ELEMENT_ID;
                _this37.categoryAttr = _this37.attributeControlService.toSingleAttributeControl(attribute);
                _this37.categoryAttr.name = 'ID';
              });
            }

            this.isCategoryModalShown = true;
          }
        }, {
          key: "closeCategoryModal",
          value: function closeCategoryModal() {
            this.isCategoryModalShown = false;
          }
        }, {
          key: "confirm",
          value: function confirm() {
            var _this38 = this;

            var categoryID = this.newCategoryForm.get('category.ID').value;
            this.identityService.getAppCategoryDetail(categoryID).subscribe(function (data) {
              if ('ENTITY_ID' in data) {
                _this38.newCategoryForm.get('app_category_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);

                _this38.newCategoryForm.get('category.ID').setValue(data['r_app_category'][0]['ID']);

                _this38.newCategoryForm.get('category.NAME').setValue(data['r_app_category'][0]['NAME']);

                _this38.newCategoryForm.get('category.ICON').setValue(data['r_app_category'][0]['ICON']);

                _this38.newCategoryForm.markAsDirty();

                _this38.categoryFormArray.push(_this38.newCategoryForm);

                var appRelationship = data['relationships'].find(function (relationship) {
                  return relationship.RELATIONSHIP_ID === 'rs_app_category';
                });
                var appGUIDs = [];
                appRelationship.values.forEach(function (value) {
                  _this38.categoryFormArray.push(_this38.fb.group({
                    CHECKED: [{
                      value: '',
                      disabled: true
                    }],
                    COLLAPSED: false,
                    ROW_TYPE: 'app',
                    RELATIONSHIP_INSTANCE_GUID: '',
                    app_category_INSTANCE_GUID: '',
                    auth_profile_INSTANCE_GUID: '',
                    ORDER: value['ORDER'],
                    category: _this38.fb.group({
                      ID: data['r_app_category'][0]['ID'],
                      NAME: value['PARTNER_INSTANCES'][0]['app'][0]['NAME'],
                      ICON: data['r_app_category'][0]['ICON']
                    }),
                    app: _this38.fb.group({
                      APP_ID: value['PARTNER_INSTANCES'][0]['app'][0]['APP_ID'],
                      NAME: value['PARTNER_INSTANCES'][0]['app'][0]['NAME']
                    })
                  }));

                  appGUIDs.push(value['PARTNER_INSTANCES'][0]['INSTANCE_GUID']);
                });

                _this38._generateProfile(appGUIDs);
              } else {
                var errorMessages = data;
                errorMessages.forEach(function (msg) {
                  return _this38.messageService.add(msg);
                });

                _this38.newCategoryForm.setErrors({
                  message: 'Category contains errors'
                });
              }

              _this38.isCategoryModalShown = false;
            });
          }
        }, {
          key: "_generateProfile",
          value: function _generateProfile(appGUIDs) {
            var _this39 = this;

            var profileCtrl = this.fb.group({
              PROFILE_NAME: (0, uuid__WEBPACK_IMPORTED_MODULE_1__.v4)().toUpperCase().replace(/-/g, ''),
              DESC: this.mainForm.get('NAME').value + " / " + this.newCategoryForm.get('category.ID').value,
              CHANGE_TIME: 'just now'
            });
            this.newCategoryForm.addControl('profile', profileCtrl);
            var operations = appGUIDs.map(function (appGUID) {
              return {
                action: 'getInstancePieceByGUID',
                instance: {
                  INSTANCE_GUID: appGUID,
                  RELATIONSHIPS: [{
                    RELATIONSHIP_ID: 'rs_app_auth',
                    PARTNER_ENTITY_PIECES: {
                      RELATIONS: ['authObject'],
                      RELATIONSHIPS: [{
                        RELATIONSHIP_ID: 'rs_auth_object_field',
                        PARTNER_ENTITY_PIECES: {
                          RELATIONS: ['authField']
                        }
                      }]
                    }
                  }]
                }
              };
            });
            this.identityService.orchestrate(operations).subscribe(function (data) {
              var authorizations = [];
              data.forEach(function (operation) {
                if (operation.errs) {
                  var errorMessages = data;
                  errorMessages.forEach(function (msg) {
                    return _this39.messageService.add(msg);
                  });
                  profileCtrl.setErrors({
                    message: 'Profile contains errors'
                  });
                } else {
                  var rsAuthorization = operation.result.instance.relationships[0];

                  if (rsAuthorization) {
                    rsAuthorization.values.forEach(function (value) {
                      return value.RELATIONSHIP_INSTANCE_GUID = '';
                    });
                    authorizations = authorizations.concat(_this39.identityService.parseProfileAuthObject(rsAuthorization));
                  }
                }
              });

              if (!profileCtrl.hasError('message')) {
                var authFormArray = _this39.fb.array(authorizations.map(function (authorization) {
                  return _this39.fb.group(authorization);
                }));

                authFormArray.controls.forEach(function (ctrl) {
                  return ctrl.markAsDirty();
                });
                profileCtrl.addControl('authorizations', authFormArray);
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete() {
            var index = this.categoryFormArray.controls.findIndex(function (appCategoryCtrl) {
              return appCategoryCtrl.get('CHECKED').value;
            });

            while (index !== -1) {
              this.categoryFormArray.removeAt(index);
              this.categoryFormArray.markAsDirty();
              index = this.categoryFormArray.controls.findIndex(function (appCategoryCtrl) {
                return appCategoryCtrl.get('CHECKED').value;
              });
            }
          }
        }, {
          key: "enterConfirm",
          value: function enterConfirm($event) {
            if ($event.keyCode === 13) {
              this.confirm();
            }
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(rowID, exportObject) {
            var afterExportFn = function (context, rowIDx) {
              return function () {
                return context.onChangeCategory(rowIDx);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModalByEntity('category', 'r_app_category', exportObject, this.readonly, null, null, afterExportFn);
          }
        }, {
          key: "expendCollapse",
          value: function expendCollapse(idx) {
            var currentCtrl = this.categoryFormArray.at(idx);
            var parentNode = currentCtrl.get('category.ID').value;
            this.categoryFormArray.controls.forEach(function (categoryCtrl) {
              if (categoryCtrl.get('category.ID').value === parentNode) {
                categoryCtrl.get('COLLAPSED').setValue(!categoryCtrl.get('COLLAPSED').value);
              }
            });
          }
        }]);

        return _PermissionDetailCategoryComponent;
      }();

      _PermissionDetailCategoryComponent.ɵfac = function PermissionDetailCategoryComponent_Factory(t) {
        return new (t || _PermissionDetailCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_5__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_5__.AttributeControlService));
      };

      _PermissionDetailCategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _PermissionDetailCategoryComponent,
        selectors: [["app-permission-detail-category"]],
        viewQuery: function PermissionDetailCategoryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_5__.SearchHelpComponent, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_authorization_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_0__.AuthValueComponent, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.authValueComponent = _t.first);
          }
        },
        inputs: {
          readonly: "readonly",
          mainForm: "mainForm"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        decls: 37,
        vars: 11,
        consts: [[1, "dk-auth-main", "mx-3"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end"], ["type", "button", "id", "remove-object", 1, "btn", "btn-light", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-minus"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm", "dk-table", 3, "formGroup"], [1, "thead-light"], [1, "dk-checkbox"], ["name", "btSelectAll", "type", "checkbox", 3, "click"], [1, "dk-auth-object"], [1, "dk-auth-order"], [1, "dk-auth-value"], ["class", "treegrid-expanded", 3, "collapsed", 4, "ngFor", "ngForOf"], ["id", "addAppCategory", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "addAuthObjectTitle", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly", "keyup", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "treegrid-expanded"], [1, "dk-checkbox", 3, "formGroup"], ["type", "checkbox", "formControlName", "CHECKED", 1, "form-control", "form-control-sm", 3, "click"], [4, "ngIf"], [3, "formGroup"], ["type", "number", "formControlName", "ORDER", 1, "form-control", "form-control-sm", 3, "readOnly"], [1, "treegrid-expander", 3, "ngClass", "click"], [3, "ngClass"], [1, "treegrid-indent"], [1, "treegrid-expander"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly", "keyup"]],
        template: function PermissionDetailCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_button_click_2_listener() {
              return ctx["delete"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Remove");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_button_click_5_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "thead", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_input_click_12_listener() {
              return ctx.checkAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Category / App Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, PermissionDetailCategoryComponent_tr_20_Template, 9, 9, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Add App Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_button_click_27_listener() {
              return ctx.closeCategoryModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, PermissionDetailCategoryComponent_dk_app_attribute_form2_31_Template, 1, 4, "dk-app-attribute-form2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_button_click_33_listener() {
              return ctx.closeCategoryModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_button_click_35_listener() {
              return ctx.confirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.mainForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categoryFormArray.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, ctx.isCategoryModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c2, ctx.displayCategoryModal));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.newCategoryForm && ctx.categoryAttr);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, jor_angular__WEBPACK_IMPORTED_MODULE_5__.AttributeForm2Component],
        styles: [".dk-auth-main[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.dk-checkbox[_ngcontent-%COMP%] {\n  width: 1rem;\n}\n.dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.dk-auth-object[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.dk-auth-order[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n.dk-auth-value[_ngcontent-%COMP%] {\n  width: 30rem;\n}\n.collapsed[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm1pc3Npb24tZGV0YWlsLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJwZXJtaXNzaW9uLWRldGFpbC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWF1dGgtbWFpbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5kay1jaGVja2JveCB7XG4gIHdpZHRoOiAxcmVtO1xufVxuLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay10YWJsZSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGstYXV0aC1vYmplY3Qge1xuICB3aWR0aDogMjByZW07XG59XG4uZGstYXV0aC1vcmRlciB7XG4gIHdpZHRoOiA1cmVtO1xufVxuLmRrLWF1dGgtdmFsdWUge1xuICB3aWR0aDogMzByZW07XG59XG4uY29sbGFwc2VkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    1510:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/permission/permission-detail/permission-detail-profile/permission-detail-profile.component.ts ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PermissionDetailProfileComponent": function PermissionDetailProfileComponent() {
          return (
            /* binding */
            _PermissionDetailProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../authorization/authorization.component */
      5509);

      function PermissionDetailProfileComponent_div_5_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionDetailProfileComponent_div_5_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var profileCtrl_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.onSelect(profileCtrl_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var profileCtrl_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", profileCtrl_r1.get("profile.PROFILE_NAME").value === ctx_r2.currentProfileFormGroup.get("profile.PROFILE_NAME").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](profileCtrl_r1.get("profile.DESC").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](profileCtrl_r1.get("profile.PROFILE_NAME").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("changed at: ", profileCtrl_r1.get("profile.CHANGE_TIME").value, "");
        }
      }

      function PermissionDetailProfileComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PermissionDetailProfileComponent_div_5_a_1_Template, 8, 5, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var profileCtrl_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", profileCtrl_r1.get("ROW_TYPE").value === "category");
        }
      }

      var _PermissionDetailProfileComponent = /*#__PURE__*/function () {
        function _PermissionDetailProfileComponent() {
          _classCallCheck(this, _PermissionDetailProfileComponent);
        }

        _createClass(_PermissionDetailProfileComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.profileFormArray = this.mainForm.get('categories');
            this.onSelect(this.profileFormArray.at(0));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSelect",
          value: function onSelect(ctrl) {
            this.currentProfileFormGroup = ctrl;
          }
        }]);

        return _PermissionDetailProfileComponent;
      }();

      _PermissionDetailProfileComponent.ɵfac = function PermissionDetailProfileComponent_Factory(t) {
        return new (t || _PermissionDetailProfileComponent)();
      };

      _PermissionDetailProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _PermissionDetailProfileComponent,
        selectors: [["app-permission-detail-profile"]],
        inputs: {
          readonly: "readonly",
          mainForm: "mainForm"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 8,
        vars: 4,
        consts: [[1, "row", "ml-1"], [1, "col-3"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "mt-3"], ["type", "button", "id", "remove-object", 1, "btn", "btn-light", "btn-sm"], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "col-9"], [3, "mainForm", "ctrlName", "readonly"], ["class", "list-group-item list-group-item-action flex-column align-items-start", 3, "active", "click", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", 3, "click"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1", "dk-text"]],
        template: function PermissionDetailProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PermissionDetailProfileComponent_div_5_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-authorization", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.profileFormArray.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mainForm", ctx.currentProfileFormGroup == null ? null : ctx.currentProfileFormGroup.get("profile"))("ctrlName", "authorizations")("readonly", ctx.readonly);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_0__.AuthorizationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        styles: [".dk-text[_ngcontent-%COMP%] {\n  overflow: auto;\n  word-wrap: break-word;\n}\n.noshown[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm1pc3Npb24tZGV0YWlsLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJwZXJtaXNzaW9uLWRldGFpbC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstdGV4dCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ubm9zaG93biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    9094:
    /*!*********************************************************************************************************!*\
      !*** ./src/app/permission/permission-detail/permission-detail-user/permission-detail-user.component.ts ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PermissionDetailUserComponent": function PermissionDetailUserComponent() {
          return (
            /* binding */
            _PermissionDetailUserComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function PermissionDetailUserComponent_tr_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailUserComponent_tr_10_Template_button_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;
            var userForm_r1 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onSearchHelp(i_r2, userForm_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userForm_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userForm_r1);
        }
      }

      var _PermissionDetailUserComponent = /*#__PURE__*/function () {
        function _PermissionDetailUserComponent() {
          _classCallCheck(this, _PermissionDetailUserComponent);
        }

        _createClass(_PermissionDetailUserComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.userFormArray = this.mainForm.get('users');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(rowID, exportObject) {
            var afterExportFn = function (context, rowIDx) {
              return function () {
                return context.onChangeKey(rowIDx);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModalBySearchHelp('USER', 'USER_ID', 'USER_ID', exportObject, this.readonly, afterExportFn);
          }
        }]);

        return _PermissionDetailUserComponent;
      }();

      _PermissionDetailUserComponent.ɵfac = function PermissionDetailUserComponent_Factory(t) {
        return new (t || _PermissionDetailUserComponent)();
      };

      _PermissionDetailUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PermissionDetailUserComponent,
        selectors: [["app-permission-detail-user"]],
        viewQuery: function PermissionDetailUserComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_1__.SearchHelpComponent, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
          }
        },
        inputs: {
          readonly: "readonly",
          mainForm: "mainForm"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 12,
        vars: 2,
        consts: [[1, "table", "table-bordered", "table-sm", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light"], [1, "dk-name"], [1, "dk-icon"], ["formArrayName", "users", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "USER_ID", "readonly", "", 1, "form-control", "form-control-sm"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "formControlName", "USER_NAME", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "SYNCED", "readonly", "", 1, "form-control", "form-control-sm"]],
        template: function PermissionDetailUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Synced");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PermissionDetailUserComponent_tr_10_Template, 11, 3, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dk-app-search-help");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userFormArray.controls);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, jor_angular__WEBPACK_IMPORTED_MODULE_1__.SearchHelpComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
        styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-icon[_ngcontent-%COMP%]{\n  width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm1pc3Npb24tZGV0YWlsLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoicGVybWlzc2lvbi1kZXRhaWwtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1uYW1le1xuICB3aWR0aDogMjByZW07XG59XG4uZGstaWNvbntcbiAgd2lkdGg6IDVyZW07XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    7119:
    /*!*****************************************************************************!*\
      !*** ./src/app/permission/permission-detail/permission-detail.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PermissionDetailComponent": function PermissionDetailComponent() {
          return (
            /* binding */
            _PermissionDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      5758);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var _async_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../async-validators */
      438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../dialog.service */
      1969);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _permission_detail_category_permission_detail_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./permission-detail-category/permission-detail-category.component */
      8120);
      /* harmony import */


      var _permission_detail_profile_permission_detail_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./permission-detail-profile/permission-detail-profile.component */
      1510);
      /* harmony import */


      var _permission_detail_user_permission_detail_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./permission-detail-user/permission-detail-user.component */
      9094);
      /* harmony import */


      var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../admin-info/admin-info.component */
      228);

      function PermissionDetailComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function PermissionDetailComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Display");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function PermissionDetailComponent_div_16_app_permission_detail_category_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-permission-detail-category", 23);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mainForm", ctx_r3.mainForm)("readonly", ctx_r3.readonly);
        }
      }

      function PermissionDetailComponent_div_16_app_permission_detail_profile_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-permission-detail-profile", 23);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mainForm", ctx_r4.mainForm)("readonly", ctx_r4.readonly);
        }
      }

      function PermissionDetailComponent_div_16_app_permission_detail_user_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-permission-detail-user", 23);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mainForm", ctx_r5.mainForm)("readonly", ctx_r5.readonly);
        }
      }

      function PermissionDetailComponent_div_16_app_admin_info_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-admin-info", 24);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mainForm", ctx_r6.mainForm)("relationMetas", ctx_r6.relationMetas)("adminRelation", "permission");
        }
      }

      function PermissionDetailComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PermissionDetailComponent_div_16_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r7.switchTabStrip(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "APP Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PermissionDetailComponent_div_16_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r9.switchTabStrip(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PermissionDetailComponent_div_16_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r10.switchTabStrip(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PermissionDetailComponent_div_16_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r11.switchTabStrip(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, PermissionDetailComponent_div_16_app_permission_detail_category_18_Template, 1, 2, "app-permission-detail-category", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, PermissionDetailComponent_div_16_app_permission_detail_profile_19_Template, 1, 2, "app-permission-detail-profile", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, PermissionDetailComponent_div_16_app_permission_detail_user_20_Template, 1, 2, "app-permission-detail-user", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, PermissionDetailComponent_div_16_app_admin_info_21_Template, 1, 3, "app-admin-info", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("NAME"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("DESCRIPTION"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 4);
        }
      }

      var _PermissionDetailComponent = /*#__PURE__*/function () {
        function _PermissionDetailComponent(fb, route, router, dialogService, identityService, attributeControlService, entityService, uiMapperService, messageService) {
          _classCallCheck(this, _PermissionDetailComponent);

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
          this.originalValue = {};
          this.operations = [];
          this.tabStrip = 1;
        }

        _createClass(_PermissionDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(function (params) {
              _this40.action = params.get('action');

              if (_this40.action === 'new') {
                _this40.isNewMode = true;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([_this40.entityService.getRelationMetaOfEntity('permission'), _this40._createNewEntity()]);
              } else {
                _this40.isNewMode = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([_this40.entityService.getRelationMetaOfEntity('permission'), _this40.identityService.getPermissionDetail(params.get('permissionName'))]);
              }
            })).subscribe(function (data) {
              _this40.relationMetas = data[0];
              _this40.attrCtrls = _this40.attributeControlService.toAttributeControl(_this40.relationMetas.find(function (relationMeta) {
                return relationMeta.RELATION_ID === 'r_role';
              }).ATTRIBUTES);

              if ('ENTITY_ID' in data[1]) {
                _this40.instanceGUID = data[1]['INSTANCE_GUID'];

                _this40._generateMainForm(data[1]);

                if (_this40.isNewMode || _this40.action === 'change') {
                  _this40._switch2EditMode();
                } else {
                  _this40._switch2DisplayMode();
                }
              } else {
                var errorMessages = data[1];
                errorMessages.forEach(function (msg) {
                  return _this40.messageService.add(msg);
                });
              }
            });
          }
        }, {
          key: "return2List",
          value: function return2List() {
            this.router.navigate(['permissions']);
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
            var _this41 = this;

            if (this.readonly) {
              this._switch2EditMode();
            } else {
              if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    _this41.mainForm.reset(_this41.originalValue);

                    _this41._switch2DisplayMode();
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
            var permissionNameCtrl = this.mainForm.get('NAME');
            permissionNameCtrl.clearAsyncValidators();
            this.mainForm.markAsPristine(); // Replace the URL from change to display

            window.history.replaceState({}, '', "/permissions/".concat(permissionNameCtrl.value, ";action=display"));
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;
            var permissionNameCtrl = this.mainForm.get('NAME');

            if (this.isNewMode) {
              permissionNameCtrl.setAsyncValidators((0, _async_validators__WEBPACK_IMPORTED_MODULE_0__.existingPermissionValidator)(this.identityService, this.messageService));
            } // Replace the URL from to display


            if (this.action === 'display') {
              this.action = 'change';
            }

            window.history.replaceState({}, '', "/permissions/".concat(permissionNameCtrl.value, ";action=") + this.action);
          }
        }, {
          key: "_createNewEntity",
          value: function _createNewEntity() {
            var permissionDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_10__.Entity();
            permissionDetail.ENTITY_ID = 'permission';
            permissionDetail['permission'] = [{
              DESCR: '',
              CREATED_BY: '',
              CREATE_TIME: '',
              CHANGED_BY: '',
              CHANGE_TIME: ''
            }];
            permissionDetail['r_role'] = [{
              NAME: '',
              DESCRIPTION: ''
            }];
            permissionDetail['relationships'] = [];
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(permissionDetail);
          }
        }, {
          key: "_generateMainForm",
          value: function _generateMainForm(data) {
            var _this42 = this;

            this.mainForm = this.fb.group({
              NAME: [data['r_role'][0]['NAME'], [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
              DESCRIPTION: [data['r_role'][0]['DESCRIPTION']],
              admin: this.fb.group({
                CREATED_BY: [data['permission'][0]['CREATED_BY']],
                CREATE_TIME: [data['permission'][0]['CREATE_TIME']],
                CHANGED_BY: [data['permission'][0]['CHANGED_BY']],
                CHANGE_TIME: [data['permission'][0]['CHANGE_TIME']]
              })
            });

            var parsedRelationship = this._parseRelationships(data['relationships']);

            this.mainForm.addControl('categories', this.fb.array(parsedRelationship.categories.map(function (category) {
              var categoryCtrl = _this42.fb.group({
                CHECKED: category.CHECKED,
                COLLAPSED: category.COLLAPSED,
                ROW_TYPE: category.ROW_TYPE,
                RELATIONSHIP_INSTANCE_GUID: category.RELATIONSHIP_INSTANCE_GUID,
                app_category_INSTANCE_GUID: category.app_category_INSTANCE_GUID,
                auth_profile_INSTANCE_GUID: category.auth_profile_INSTANCE_GUID,
                ORDER: category.ORDER
              });

              categoryCtrl.addControl('category', _this42.fb.group({
                ID: category.category.ID,
                NAME: category.category.NAME,
                ICON: category.category.ICON
              }));

              if (category.profile) {
                categoryCtrl.addControl('profile', _this42.fb.group({
                  PROFILE_NAME: category.profile.PROFILE_NAME,
                  DESC: category.profile.DESC,
                  CHANGE_TIME: category.profile.CHANGE_TIME,
                  authorizations: category.profile.authorizations ? _this42.fb.array(category.profile.authorizations.map(function (authorization) {
                    return _this42.fb.group(authorization);
                  })) : ''
                }));
              }

              if (category.app) {
                categoryCtrl.addControl('app', _this42.fb.group({
                  APP_ID: category.app.APP_ID,
                  NAME: category.app.NAME
                }));
              }

              return categoryCtrl;
            })));
            this.mainForm.addControl('users', this.fb.array(parsedRelationship.users.map(function (user) {
              return _this42.fb.group(user);
            })));
            this.originalValue = this.mainForm.getRawValue();
          }
        }, {
          key: "_parseRelationships",
          value: function _parseRelationships(relationships) {
            var _this43 = this;

            var parsedRelationship = {
              users: [],
              categories: []
            };

            if (!relationships) {
              return parsedRelationship;
            }

            relationships.forEach(function (relationship) {
              switch (relationship.RELATIONSHIP_ID) {
                case 'rs_role_category_profile':
                  __parseRoleCategoryProfile(relationship, _this43);

                  break;

                case 'rs_user_role':
                  __parseRoleUsers(relationship);

                  break;

                default: // Do nothing.

              }
            });
            return parsedRelationship;

            function __parseRoleCategoryProfile(relationship, context) {
              var categories = relationship.values.sort(function (a, b) {
                return a.ORDER - b.ORDER;
              });
              categories.forEach(function (value) {
                var appCategoryInstance = value.PARTNER_INSTANCES.find(function (partnerInstance) {
                  return partnerInstance.ROLE_ID === 'app_category';
                });
                var authProfileInstance = value.PARTNER_INSTANCES.find(function (partnerInstance) {
                  return partnerInstance.ROLE_ID === 'auth_profile';
                });
                parsedRelationship.categories.push({
                  CHECKED: '',
                  COLLAPSED: false,
                  ROW_TYPE: 'category',
                  RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                  app_category_INSTANCE_GUID: appCategoryInstance.INSTANCE_GUID,
                  auth_profile_INSTANCE_GUID: authProfileInstance.INSTANCE_GUID,
                  ORDER: value['ORDER'],
                  category: {
                    ID: appCategoryInstance['r_app_category'][0]['ID'],
                    NAME: appCategoryInstance['r_app_category'][0]['NAME'],
                    ICON: appCategoryInstance['r_app_category'][0]['ICON']
                  },
                  profile: {
                    PROFILE_NAME: authProfileInstance['authProfile'][0]['PROFILE_NAME'],
                    DESC: authProfileInstance['authProfile'][0]['DESC'],
                    CHANGE_TIME: authProfileInstance['authProfile'][0]['CHANGE_TIME'],
                    authorizations: context.identityService.parseProfileAuthObject(authProfileInstance.relationships[0])
                  }
                });
                var rsAppCategory = appCategoryInstance['relationships'][0];
                rsAppCategory.values.forEach(function (value2) {
                  parsedRelationship.categories.push({
                    CHECKED: '',
                    COLLAPSED: false,
                    ROW_TYPE: 'app',
                    RELATIONSHIP_INSTANCE_GUID: value2['RELATIONSHIP_INSTANCE_GUID'],
                    app_category_INSTANCE_GUID: '',
                    auth_profile_INSTANCE_GUID: '',
                    ORDER: value2['ORDER'],
                    category: {
                      ID: appCategoryInstance['r_app_category'][0]['ID'],
                      NAME: appCategoryInstance['r_app_category'][0]['NAME'],
                      ICON: appCategoryInstance['r_app_category'][0]['ICON']
                    },
                    app: {
                      APP_ID: value2['PARTNER_INSTANCES'][0]['app'][0]['APP_ID'],
                      NAME: value2['PARTNER_INSTANCES'][0]['app'][0]['NAME']
                    }
                  });
                });
              });
            }

            function __parseRoleUsers(relationship) {
              relationship.values.forEach(function (value) {
                parsedRelationship.users.push({
                  RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                  SYNCED: value['SYNCED'],
                  INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                  USER_ID: value['PARTNER_INSTANCES'][0]['r_user'][0]['USER_ID'],
                  USER_NAME: value['PARTNER_INSTANCES'][0]['r_user'][0]['USER_NAME']
                });
              });
            }
          }
        }, {
          key: "_resetValue",
          value: function _resetValue(data) {
            this.originalValue = {
              NAME: data['r_role'][0]['NAME'],
              DESCRIPTION: data['r_role'][0]['DESCRIPTION'],
              admin: {
                CREATED_BY: data['permission'][0]['CREATED_BY'],
                CREATE_TIME: data['permission'][0]['CREATE_TIME'],
                CHANGED_BY: data['permission'][0]['CHANGED_BY'],
                CHANGE_TIME: data['permission'][0]['CHANGE_TIME']
              }
            };

            var parsedRelationship = this._parseRelationships(data['relationships']);

            this.originalValue['categories'] = parsedRelationship.categories;
            this.originalValue['users'] = parsedRelationship.users;
            this.mainForm.reset(this.originalValue);
          }
        }, {
          key: "save",
          value: function save() {
            var _this44 = this;

            this.messageService.clearMessages();

            if (this._composeChanges()) {
              console.log(this.operations);
              this.identityService.orchestrate(this.operations).subscribe(function (results) {
                _this44.operations = [];
                results.forEach(function (result) {
                  if (result.msgType) {
                    _this44.messageService.add(result);
                  } else if (result.instance && result.instance.ENTITY_ID === 'permission') {
                    _this44.instanceGUID = result.instance.INSTANCE_GUID;
                    _this44.isNewMode = false;

                    var permissionName = _this44.mainForm.get('NAME').value;

                    _this44.identityService.getPermissionDetail(permissionName).subscribe(function (instance) {
                      if ('ENTITY_ID' in instance) {
                        _this44._switch2DisplayMode(); // this._resetValue(<Entity>instance);


                        _this44._generateMainForm(instance);
                      } else {
                        var errorMessages = instance;
                        errorMessages.forEach(function (msg) {
                          return _this44.messageService.add(msg);
                        });
                      }
                    });

                    _this44.messageService.reportMessage('PERMISSION', 'SAVED', 'S', permissionName);
                  }
                });
              });
            }
          }
        }, {
          key: "_composeChanges",
          value: function _composeChanges() {
            var _this45 = this;

            if (this.mainForm.invalid) {
              this.messageService.reportMessage('PERMISSION', 'INVALID', 'E');
              return false;
            }

            if (this.mainForm.dirty === false) {
              this.messageService.reportMessage('GENERAL', 'NO_CHANGE', 'W');
              return false;
            }

            var changedValue = {};
            changedValue['ENTITY_ID'] = 'permission';
            changedValue['INSTANCE_GUID'] = this.instanceGUID;

            if (this.isNewMode) {
              changedValue['permission'] = {
                action: 'add',
                DESCR: this.mainForm.get('DESCRIPTION'),
                CREATED_BY: this.identityService.Session.USER_ID,
                CREATE_TIME: this.identityService.CurrentTime,
                CHANGED_BY: this.identityService.Session.USER_ID,
                CHANGE_TIME: this.identityService.CurrentTime
              };
              changedValue['r_role'] = {
                action: 'add',
                NAME: this.mainForm.get('NAME'),
                DESCRIPTION: this.mainForm.get('DESCRIPTION')
              };
            }

            changedValue['permission'] = {
              action: 'update',
              CHANGED_BY: this.identityService.Session.USER_ID,
              CHANGE_TIME: this.identityService.CurrentTime
            };

            if (this.mainForm.get('DESCRIPTION').dirty) {
              changedValue['permission']['DESCR'] = this.mainForm.get('DESCRIPTION');
              changedValue['r_role'] = {
                action: 'update',
                DESCRIPTION: this.mainForm.get('DESCRIPTION')
              };
            }

            var categoryFormArray = this.mainForm.get('categories');
            categoryFormArray.controls.forEach(function (ctrl) {
              if (ctrl.get('ROW_TYPE').value === 'category') {
                if (ctrl.get('RELATIONSHIP_INSTANCE_GUID').value) {
                  // Change an existing profile
                  if (ctrl.get('profile.authorizations').pristine) {
                    return;
                  }

                  var originalProfile = _this45.originalValue['categories'].find(function (category) {
                    return category.RELATIONSHIP_INSTANCE_GUID === ctrl.get('RELATIONSHIP_INSTANCE_GUID').value;
                  });

                  _this45.operations.push({
                    action: 'changeInstance',
                    noCommit: true,
                    instance: {
                      ENTITY_ID: 'authProfile',
                      INSTANCE_GUID: ctrl.get('auth_profile_INSTANCE_GUID').value,
                      authProfile: {
                        action: 'update',
                        CHANGED_BY: _this45.identityService.Session.USER_ID,
                        CHANGE_TIME: _this45.identityService.CurrentTime
                      },
                      relationships: [_this45.identityService.composeAuthChanges(ctrl.get('profile.authorizations'), originalProfile.authorizations, 'rs_auth_profile_object')]
                    }
                  });
                } else {
                  // Add a new profile
                  _this45.operations.push({
                    action: 'createInstance',
                    noCommit: true,
                    instance: {
                      ENTITY_ID: 'authProfile',
                      INSTANCE_GUID: ctrl.get('auth_profile_INSTANCE_GUID').value,
                      authProfile: {
                        action: 'add',
                        PROFILE_NAME: ctrl.get('profile.PROFILE_NAME').value,
                        DESC: ctrl.get('profile.DESC').value,
                        CREATED_BY: _this45.identityService.Session.USER_ID,
                        CREATE_TIME: _this45.identityService.CurrentTime,
                        CHANGED_BY: _this45.identityService.Session.USER_ID,
                        CHANGE_TIME: _this45.identityService.CurrentTime
                      },
                      relationships: [_this45.identityService.composeAuthChanges(ctrl.get('profile.authorizations'), [], 'rs_auth_profile_object')]
                    }
                  });
                }
              } else {
                // ROW_TYPE = app
                ctrl.markAsPristine({
                  onlySelf: true
                });
              }
            });
            changedValue['relationships'] = [];
            var rsCategory = this.uiMapperService.composeChangedRelationship('rs_role_category_profile', [{
              ENTITY_ID: 'category',
              ROLE_ID: 'app_category'
            }, {
              ENTITY_ID: 'authProfile',
              ROLE_ID: 'auth_profile'
            }], categoryFormArray, this.originalValue['categories'].filter(function (category) {
              return category.ROW_TYPE === 'category';
            }), ['CHECKED', 'COLLAPSED', 'ROW_TYPE', 'category', 'profile', 'app']);
            var newCategoryIndex = [];

            if (rsCategory) {
              rsCategory['values'].forEach(function (value, index) {
                if (value.PARTNER_INSTANCES) {
                  value.PARTNER_INSTANCES[1].NO_EXISTING_CHECK = true;
                  newCategoryIndex.push(index);
                }
              });
              changedValue['relationships'].push(rsCategory);
            }

            var newProfilesIndex = [];
            this.operations.forEach(function (operation, index) {
              if (operation.action === 'createInstance') {
                newProfilesIndex.push(index);
              }
            });
            this.operations.push({
              action: this.isNewMode ? 'createInstance' : 'changeInstance',
              noCommit: true,
              replacements: newProfilesIndex.map(function (idx, index) {
                return {
                  movePath: [idx, 'result', 'instance', 'INSTANCE_GUID'],
                  toPath: ['relationships', 0, 'values', newCategoryIndex[index], 'PARTNER_INSTANCES', 1, 'INSTANCE_GUID']
                };
              }),
              instance: changedValue
            }); // Find the deleted categories, and also trigger the deletion of the corresponding profiles

            this.originalValue['categories'].forEach(function (category) {
              if (category.ROW_TYPE === 'app') {
                return;
              }

              var idx = categoryFormArray.controls.findIndex(function (ctrl) {
                return ctrl.get('RELATIONSHIP_INSTANCE_GUID').value === category.RELATIONSHIP_INSTANCE_GUID;
              });

              if (idx === -1) {
                _this45.operations.push({
                  action: 'softDeleteInstanceByGUID',
                  instance: {
                    INSTANCE_GUID: category.auth_profile_INSTANCE_GUID
                  }
                });

                _this45.operations.push({
                  action: 'hardDeleteByGUID',
                  instance: {
                    INSTANCE_GUID: category.auth_profile_INSTANCE_GUID
                  }
                });
              }
            });
            return true;
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            if (this.isNewMode || this.mainForm && this.mainForm.dirty) {
              return this.dialogService.confirm('Discard changes?');
            } else {
              return true;
            }
          }
        }]);

        return _PermissionDetailComponent;
      }();

      _PermissionDetailComponent.ɵfac = function PermissionDetailComponent_Factory(t) {
        return new (t || _PermissionDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_10__.AttributeControlService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_10__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_10__.UiMapperService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_14__.MessageService));
      };

      _PermissionDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _PermissionDetailComponent,
        selectors: [["app-permission-detail"]],
        decls: 17,
        vars: 5,
        consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Return to List", "id", "toList", 1, "btn", "btn-sm", "btn-outline-info", "mr-2", 3, "click"], [1, "fas", "fa-list-ul"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "adminRelation", 4, "ngSwitchCase"], [3, "mainForm", "readonly"], [3, "mainForm", "relationMetas", "adminRelation"]],
        template: function PermissionDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PermissionDetailComponent_Template_button_click_5_listener() {
              return ctx.return2List();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " To List");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PermissionDetailComponent_Template_button_click_8_listener() {
              return ctx.switchEditDisplay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, PermissionDetailComponent_span_9_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, PermissionDetailComponent_span_10_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PermissionDetailComponent_Template_button_click_11_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, PermissionDetailComponent_div_16_Template, 22, 21, "div", 11);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.isNewMode ? "New Permission" : ctx.readonly ? "Display Permission" : "Change Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mainForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ui_message_angular__WEBPACK_IMPORTED_MODULE_14__.MessageComponent, jor_angular__WEBPACK_IMPORTED_MODULE_10__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchCase, _permission_detail_category_permission_detail_category_component__WEBPACK_IMPORTED_MODULE_3__.PermissionDetailCategoryComponent, _permission_detail_profile_permission_detail_profile_component__WEBPACK_IMPORTED_MODULE_4__.PermissionDetailProfileComponent, _permission_detail_user_permission_detail_user_component__WEBPACK_IMPORTED_MODULE_5__.PermissionDetailUserComponent, _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_6__.AdminInfoComponent],
        styles: [".dk-btn-size[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.dk-form-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.dk-fixed-top[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 500;\n}\n.dk-icon[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm1pc3Npb24tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJwZXJtaXNzaW9uLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWJ0bi1zaXplIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uZGstZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmRrLWZpeGVkLXRvcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNTAwO1xufVxuLmRrLWljb24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    3959:
    /*!*************************************************************************!*\
      !*** ./src/app/permission/permission-list/permission-list.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PermissionListComponent": function PermissionListComponent() {
          return (
            /* binding */
            _PermissionListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0() {
        return {
          action: "display"
        };
      };

      var _c1 = function _c1(a1, a2) {
        return ["/permissions", a1, a2];
      };

      function PermissionListComponent_tr_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionListComponent_tr_37_Template_button_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var permission_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.display(permission_r1.NAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionListComponent_tr_37_Template_button_click_17_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var permission_r1 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.change(permission_r1.NAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionListComponent_tr_37_Template_button_click_19_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var permission_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5["delete"](permission_r1.NAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var permission_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c1, permission_r1.NAME, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](permission_r1.NAME);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](permission_r1.DESCRIPTION);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](permission_r1.CREATED_BY);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](permission_r1.CREATE_TIME);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](permission_r1.CHANGED_BY);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](permission_r1.CHANGE_TIME);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "display": a0
        };
      };

      var _PermissionListComponent = /*#__PURE__*/function () {
        function _PermissionListComponent(identityService, messageService, router) {
          _classCallCheck(this, _PermissionListComponent);

          this.identityService = identityService;
          this.messageService = messageService;
          this.router = router;
          this.showDeletionConfirmation = false;
        }

        _createClass(_PermissionListComponent, [{
          key: "displayDeletionConfirmation",
          get: function get() {
            return this.showDeletionConfirmation ? 'block' : 'none';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "search",
          value: function search() {
            var _this46 = this;

            this.messageService.clearMessages();
            this.permissions = [];
            this.permissionName = this.permissionName ? this.permissionName.trim() : '';
            this.permissionDesc = this.permissionDesc ? this.permissionDesc.trim() : '';
            this.identityService.searchPermissions(this.permissionName, this.permissionDesc).subscribe(function (data) {
              if (!data[0]) {
                _this46.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.messageType.Warning);
              } else if (data[0]['msgCat']) {
                var messages = data;
                messages.forEach(function (msg) {
                  return _this46.messageService.add(msg);
                });
              } else {
                _this46.permissions = data;
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
          key: "new",
          value: function _new() {
            this.router.navigate(['permissions', '/', {
              action: 'new'
            }]);
          }
        }, {
          key: "display",
          value: function display(permissionName) {
            this.router.navigate(['permissions', permissionName, {
              action: 'display'
            }]);
          }
        }, {
          key: "change",
          value: function change(permissionName) {
            this.router.navigate(['permissions', permissionName, {
              action: 'change'
            }]);
          }
        }, {
          key: "delete",
          value: function _delete(permissionName) {
            this.toBeDeletedInstance = permissionName;
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
            var _this47 = this;

            var toBeDeletedPermissionGUID = this.permissions.find(function (ele) {
              return ele.NAME === _this47.toBeDeletedInstance;
            }).INSTANCE_GUID;
            this.identityService["delete"](toBeDeletedPermissionGUID).subscribe(function (errorMsg) {
              _this47.showDeletionConfirmation = false;

              if (errorMsg) {
                var messages = errorMsg;
                messages.forEach(function (msg) {
                  return _this47.messageService.add(msg);
                });
              } else {
                _this47.search();
              }
            });
          }
        }]);

        return _PermissionListComponent;
      }();

      _PermissionListComponent.ɵfac = function PermissionListComponent_Factory(t) {
        return new (t || _PermissionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _PermissionListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _PermissionListComponent,
        selectors: [["app-permission-list"]],
        decls: 55,
        vars: 9,
        consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "permission_name", 1, "col-sm-3", "col-form-label"], ["id", "permission_name", "name", "user_id", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "permission_desc", 1, "col-sm-3", "col-form-label"], ["id", "permission_desc", "name", "user_name", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]],
        template: function PermissionListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Permission:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PermissionListComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.permissionName = $event;
            })("keyup", function PermissionListComponent_Template_input_keyup_5_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PermissionListComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.permissionDesc = $event;
            })("keyup", function PermissionListComponent_Template_input_keyup_9_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionListComponent_Template_button_click_11_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionListComponent_Template_button_click_16_listener() {
              return ctx["new"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " New");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Created By");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Created At");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Changed By");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Changed At");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, PermissionListComponent_tr_37_Template, 21, 11, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h5", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Confirm Deletion");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionListComponent_Template_button_click_44_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionListComponent_Template_button_click_51_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PermissionListComponent_Template_button_click_53_listener() {
              return ctx.confirmDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.permissionName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.permissionDesc);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permissions);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Are you sure to delete the permission '", ctx.toBeDeletedInstance, "'?");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJtaXNzaW9uLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    5051:
    /*!********************************************************************!*\
      !*** ./src/app/profile/profile-detail/profile-detail.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileDetailComponent": function ProfileDetailComponent() {
          return (
            /* binding */
            _ProfileDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      5758);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var _async_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../async-validators */
      438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../dialog.service */
      1969);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../authorization/authorization.component */
      5509);
      /* harmony import */


      var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../admin-info/admin-info.component */
      228);

      function ProfileDetailComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileDetailComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Display");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileDetailComponent_div_16_app_authorization_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-authorization", 23);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mainForm", ctx_r3.mainForm)("ctrlName", "authObjects")("readonly", ctx_r3.readonly);
        }
      }

      function ProfileDetailComponent_div_16_app_admin_info_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-admin-info", 24);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mainForm", ctx_r4.mainForm)("relationMetas", ctx_r4.relationMetas)("adminRelation", "authProfile");
        }
      }

      function ProfileDetailComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileDetailComponent_div_16_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r5.switchTabStrip(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileDetailComponent_div_16_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r7.switchTabStrip(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ProfileDetailComponent_div_16_app_authorization_12_Template, 1, 3, "app-authorization", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ProfileDetailComponent_div_16_app_admin_info_13_Template, 1, 3, "app-admin-info", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("PROFILE_NAME"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("DESC"))("formGroup", ctx_r2.mainForm)("readonly", ctx_r2.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", 3);
        }
      }

      var _ProfileDetailComponent = /*#__PURE__*/function () {
        function _ProfileDetailComponent(fb, route, router, dialogService, identityService, attributeControlService, entityService, uiMapperService, messageService) {
          _classCallCheck(this, _ProfileDetailComponent);

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
          this.originalValue = {};
          this.changedValue = {};
          this.tabStrip = 1;
        }

        _createClass(_ProfileDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this48 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(function (params) {
              _this48.action = params.get('action');

              if (_this48.action === 'new') {
                _this48.isNewMode = true;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([_this48.entityService.getRelationMetaOfEntity('authProfile'), _this48._createNewEntity()]);
              } else {
                _this48.isNewMode = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([_this48.entityService.getRelationMetaOfEntity('authProfile'), _this48.identityService.getAuthProfileDetail(params.get('profileName'))]);
              }
            })).subscribe(function (data) {
              _this48.relationMetas = data[0];
              _this48.attrCtrls = _this48.attributeControlService.toAttributeControl(_this48.relationMetas.find(function (relationMeta) {
                return relationMeta.RELATION_ID === 'authProfile';
              }).ATTRIBUTES);

              if ('ENTITY_ID' in data[1]) {
                _this48.instanceGUID = data[1]['INSTANCE_GUID'];

                _this48._generateMainForm(data[1]);

                if (_this48.isNewMode || _this48.action === 'change') {
                  _this48._switch2EditMode();
                } else {
                  _this48._switch2DisplayMode();
                }
              } else {
                var errorMessages = data[1];
                errorMessages.forEach(function (msg) {
                  return _this48.messageService.add(msg);
                });
              }
            });
          }
        }, {
          key: "return2List",
          value: function return2List() {
            this.router.navigate(['profiles']);
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
            var _this49 = this;

            if (this.readonly) {
              this._switch2EditMode();
            } else {
              if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    _this49.mainForm.reset(_this49.originalValue);

                    _this49._switch2DisplayMode();
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
            var profileNameCtrl = this.mainForm.get('PROFILE_NAME');
            profileNameCtrl.clearAsyncValidators();
            this.mainForm.markAsPristine(); // Replace the URL from change to display

            window.history.replaceState({}, '', "/profiles/".concat(profileNameCtrl.value, ";action=display"));
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;
            var profileNameCtrl = this.mainForm.get('PROFILE_NAME');

            if (this.isNewMode) {
              profileNameCtrl.setAsyncValidators((0, _async_validators__WEBPACK_IMPORTED_MODULE_0__.existingProfileValidator)(this.identityService, this.messageService));
            } // Replace the URL from to display


            if (this.action === 'display') {
              this.action = 'change';
            }

            window.history.replaceState({}, '', "/profiles/".concat(profileNameCtrl.value, ";action=") + this.action);
          }
        }, {
          key: "_createNewEntity",
          value: function _createNewEntity() {
            var profileDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.Entity();
            profileDetail.ENTITY_ID = 'authProfile';
            profileDetail['authProfile'] = [{
              PROFILE_NAME: '',
              DESC: '',
              CREATED_BY: '',
              CREATE_TIME: '',
              CHANGED_BY: '',
              CHANGE_TIME: ''
            }];
            profileDetail['relationships'] = [];
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(profileDetail);
          }
        }, {
          key: "_generateMainForm",
          value: function _generateMainForm(data) {
            var _this50 = this;

            this.mainForm = this.fb.group({
              PROFILE_NAME: [data['authProfile'][0]['PROFILE_NAME'], [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
              DESC: [data['authProfile'][0]['DESC']],
              admin: this.fb.group({
                CREATED_BY: [data['authProfile'][0]['CREATED_BY']],
                CREATE_TIME: [data['authProfile'][0]['CREATE_TIME']],
                CHANGED_BY: [data['authProfile'][0]['CHANGED_BY']],
                CHANGE_TIME: [data['authProfile'][0]['CHANGE_TIME']]
              })
            });

            var parsedRelationship = this._parseRelationships(data['relationships']);

            this.mainForm.addControl('authObjects', this.fb.array(parsedRelationship.authObjects.map(function (authObject) {
              return _this50.fb.group(authObject);
            })));
            this.originalValue = this.mainForm.getRawValue();
          }
        }, {
          key: "_parseRelationships",
          value: function _parseRelationships(relationships) {
            var parsedRelationship = {
              authObjects: []
            };

            if (!relationships) {
              return parsedRelationship;
            }

            relationships.forEach(function (relationship) {
              switch (relationship.RELATIONSHIP_ID) {
                case 'rs_auth_profile_object':
                  __parseAuthObjects(relationship);

                  break;

                default: // Do nothing.

              }
            });
            return parsedRelationship;

            function __parseAuthObjects(relationship) {
              relationship.values.forEach(function (value) {
                var authorization = value['AUTH_VALUE'] ? JSON.parse(value['AUTH_VALUE']) : null;
                var status = authorization ? Object.values(authorization.AuthFieldValue).findIndex(function (authValue) {
                  return !authValue;
                }) !== -1 ? 'yellow' : 'green' : 'red';
                parsedRelationship.authObjects.push({
                  CHECKED: '',
                  COLLAPSED: false,
                  NODE_ID: value['RELATIONSHIP_INSTANCE_GUID'],
                  STATUS: status,
                  RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                  auth_object_INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                  AUTH_VALUE: value['AUTH_VALUE'],
                  OBJ_NAME: value['PARTNER_INSTANCES'][0]['authObject'][0]['OBJ_NAME'],
                  DESC: value['PARTNER_INSTANCES'][0]['authObject'][0]['DESC'],
                  ROW_TYPE: 'OBJECT',
                  FIELD_NAME: '',
                  DATA_ELEMENT: ''
                });
                var authObjectFields = value['PARTNER_INSTANCES'][0]['relationships'][0];
                authObjectFields.values.forEach(function (value2) {
                  var authFieldName = value2['PARTNER_INSTANCES'][0]['authField'][0]['FIELD_NAME'];
                  parsedRelationship.authObjects.push({
                    CHECKED: '',
                    COLLAPSED: false,
                    NODE_ID: value['RELATIONSHIP_INSTANCE_GUID'],
                    STATUS: authorization && authorization.AuthFieldValue && authorization.AuthFieldValue[authFieldName] ? authorization.AuthFieldValue[authFieldName].length > 0 ? 'green' : 'red' : 'red',
                    RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                    auth_object_INSTANCE_GUID: '',
                    AUTH_VALUE: authorization && authorization.AuthFieldValue[authFieldName] && JSON.stringify(authorization.AuthFieldValue[authFieldName], null, ' '),
                    OBJ_NAME: value['PARTNER_INSTANCES'][0]['authObject'][0]['OBJ_NAME'],
                    DESC: '',
                    ROW_TYPE: 'FIELD',
                    FIELD_NAME: authFieldName,
                    DATA_ELEMENT: value2['PARTNER_INSTANCES'][0]['authField'][0]['DATA_ELEMENT']
                  });
                });
              });
            }
          }
        }, {
          key: "_resetValue",
          value: function _resetValue(data) {
            this.originalValue = {
              PROFILE_NAME: data['authProfile'][0]['PROFILE_NAME'],
              DESC: data['authProfile'][0]['DESC'],
              admin: {
                CREATED_BY: data['authProfile'][0]['CREATED_BY'],
                CREATE_TIME: data['authProfile'][0]['CREATE_TIME'],
                CHANGED_BY: data['authProfile'][0]['CHANGED_BY'],
                CHANGE_TIME: data['authProfile'][0]['CHANGE_TIME']
              }
            };

            var parsedRelationship = this._parseRelationships(data['relationships']);

            this.originalValue['authObjects'] = parsedRelationship.authObjects;
            this.originalValue['roles'] = parsedRelationship.roles;
            this.mainForm.reset(this.originalValue);
          }
        }, {
          key: "save",
          value: function save() {
            var _this51 = this;

            this.messageService.clearMessages();

            if (this._composeChanges()) {
              this.identityService.save(this.changedValue).subscribe(function (data) {
                _this51.changedValue = {};

                if ('INSTANCE_GUID' in data) {
                  var profileName = data['authProfile'][0]['PROFILE_NAME'];
                  _this51.instanceGUID = data['INSTANCE_GUID'];
                  _this51.isNewMode = false;

                  _this51.identityService.getAuthProfileDetail(profileName).subscribe(function (instance) {
                    if ('ENTITY_ID' in instance) {
                      _this51._switch2DisplayMode();

                      _this51._resetValue(instance);
                    } else {
                      var errorMessages = instance;
                      errorMessages.forEach(function (msg) {
                        return _this51.messageService.add(msg);
                      });
                    }
                  });

                  _this51.messageService.reportMessage('AUTH_PROFILE', 'SAVED', 'S', profileName);
                } else {
                  var errorMessages = data;
                  errorMessages.forEach(function (msg) {
                    return _this51.messageService.add(msg);
                  });
                }
              });
            }
          }
        }, {
          key: "_composeChanges",
          value: function _composeChanges() {
            if (this.mainForm.invalid) {
              this.messageService.reportMessage('AUTH_PROFILE', 'INVALID', 'E');
              return false;
            }

            if (this.mainForm.dirty === false) {
              this.messageService.reportMessage('GENERAL', 'NO_CHANGE', 'W');
              return false;
            }

            this.changedValue['ENTITY_ID'] = 'authProfile';
            this.changedValue['INSTANCE_GUID'] = this.instanceGUID;

            if (this.isNewMode) {
              this.changedValue['authProfile'] = {
                action: 'add',
                PROFILE_NAME: this.mainForm.get('PROFILE_NAME').value,
                CREATED_BY: this.identityService.Session.USER_ID,
                CREATE_TIME: this.identityService.CurrentTime,
                CHANGED_BY: this.identityService.Session.USER_ID,
                CHANGE_TIME: this.identityService.CurrentTime
              };
            } else {
              this.changedValue['authProfile'] = {
                action: 'update',
                CHANGED_BY: this.identityService.Session.USER_ID,
                CHANGE_TIME: this.identityService.CurrentTime
              };
            }

            if (this.mainForm.get('DESC').dirty) {
              this.changedValue['authProfile']['DESC'] = this.mainForm.get('DESC').value;
            }

            var authObjectFormArray = this.mainForm.get('authObjects');
            var relationship = this.identityService.composeAuthChanges(authObjectFormArray, this.originalValue['appAuthObjects'], 'rs_auth_profile_object');

            if (relationship) {
              this.changedValue['relationships'] = [relationship];
            }

            return true;
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            if (this.isNewMode || this.mainForm && this.mainForm.dirty) {
              return this.dialogService.confirm('Discard changes?');
            } else {
              return true;
            }
          }
        }]);

        return _ProfileDetailComponent;
      }();

      _ProfileDetailComponent.ɵfac = function ProfileDetailComponent_Factory(t) {
        return new (t || _ProfileDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_8__.AttributeControlService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_8__.UiMapperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_12__.MessageService));
      };

      _ProfileDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _ProfileDetailComponent,
        selectors: [["app-profile-detail"]],
        decls: 17,
        vars: 5,
        consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Return to List", "id", "toList", 1, "btn", "btn-sm", "btn-outline-info", "mr-2", 3, "click"], [1, "fas", "fa-list-ul"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "ctrlName", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "adminRelation", 4, "ngSwitchCase"], [3, "mainForm", "ctrlName", "readonly"], [3, "mainForm", "relationMetas", "adminRelation"]],
        template: function ProfileDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileDetailComponent_Template_button_click_5_listener() {
              return ctx.return2List();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " To List");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileDetailComponent_Template_button_click_8_listener() {
              return ctx.switchEditDisplay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ProfileDetailComponent_span_9_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProfileDetailComponent_span_10_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileDetailComponent_Template_button_click_11_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ProfileDetailComponent_div_16_Template, 14, 15, "div", 11);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.isNewMode ? "New Profile" : ctx.readonly ? "Display Profile" : "Change Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mainForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ui_message_angular__WEBPACK_IMPORTED_MODULE_12__.MessageComponent, jor_angular__WEBPACK_IMPORTED_MODULE_8__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_3__.AuthorizationComponent, _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_4__.AdminInfoComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    7914:
    /*!****************************************************************!*\
      !*** ./src/app/profile/profile-list/profile-list.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileListComponent": function ProfileListComponent() {
          return (
            /* binding */
            _ProfileListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0() {
        return {
          action: "display"
        };
      };

      var _c1 = function _c1(a1, a2) {
        return ["/profiles", a1, a2];
      };

      function ProfileListComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileListComponent_tr_33_Template_button_click_11_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var authProfile_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.display(authProfile_r1.PROFILE_NAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileListComponent_tr_33_Template_button_click_13_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var authProfile_r1 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.change(authProfile_r1.PROFILE_NAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileListComponent_tr_33_Template_button_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var authProfile_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5["delete"](authProfile_r1.PROFILE_NAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var authProfile_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c1, authProfile_r1.PROFILE_NAME, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](authProfile_r1.PROFILE_NAME);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](authProfile_r1.DESC);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](authProfile_r1.CHANGED_BY);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](authProfile_r1.CHANGE_TIME);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "display": a0
        };
      };

      var _ProfileListComponent = /*#__PURE__*/function () {
        function _ProfileListComponent(identityService, messageService, router) {
          _classCallCheck(this, _ProfileListComponent);

          this.identityService = identityService;
          this.messageService = messageService;
          this.router = router;
          this.showDeletionConfirmation = false;
        }

        _createClass(_ProfileListComponent, [{
          key: "displayDeletionConfirmation",
          get: function get() {
            return this.showDeletionConfirmation ? 'block' : 'none';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "search",
          value: function search() {
            var _this52 = this;

            this.messageService.clearMessages();
            this.authProfiles = [];
            this.profileName = this.profileName ? this.profileName.trim() : '';
            this.profileDesc = this.profileDesc ? this.profileDesc.trim() : '';
            this.identityService.searchAuthProfiles(this.profileName, this.profileDesc).subscribe(function (data) {
              if (!data[0]) {
                _this52.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.messageType.Warning);
              } else if (data[0]['msgCat']) {
                var messages = data;
                messages.forEach(function (msg) {
                  return _this52.messageService.add(msg);
                });
              } else {
                _this52.authProfiles = data;
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
          key: "new",
          value: function _new() {
            this.router.navigate(['profiles', '/', {
              action: 'new'
            }]);
          }
        }, {
          key: "display",
          value: function display(profileName) {
            this.router.navigate(['profiles', profileName, {
              action: 'display'
            }]);
          }
        }, {
          key: "change",
          value: function change(profileName) {
            this.router.navigate(['profiles', profileName, {
              action: 'change'
            }]);
          }
        }, {
          key: "delete",
          value: function _delete(profileName) {
            this.toBeDeletedInstance = profileName;
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
            var _this53 = this;

            var toBeDeletedInstanceGUID = this.authProfiles.find(function (ele) {
              return ele.PROFILE_NAME === _this53.toBeDeletedInstance;
            }).INSTANCE_GUID;
            this.identityService["delete"](toBeDeletedInstanceGUID).subscribe(function (errorMsg) {
              _this53.showDeletionConfirmation = false;

              if (errorMsg) {
                var messages = errorMsg;
                messages.forEach(function (msg) {
                  return _this53.messageService.add(msg);
                });
              } else {
                _this53.search();
              }
            });
          }
        }]);

        return _ProfileListComponent;
      }();

      _ProfileListComponent.ɵfac = function ProfileListComponent_Factory(t) {
        return new (t || _ProfileListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _ProfileListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ProfileListComponent,
        selectors: [["app-profile-list"]],
        decls: 51,
        vars: 9,
        consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "profile_name", 1, "col-sm-3", "col-form-label"], ["id", "profile_name", "name", "profile_name", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "profile_desc", 1, "col-sm-3", "col-form-label"], ["id", "profile_desc", "name", "profile_desc", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]],
        template: function ProfileListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Profile Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileListComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.profileName = $event;
            })("keyup", function ProfileListComponent_Template_input_keyup_5_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileListComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.profileDesc = $event;
            })("keyup", function ProfileListComponent_Template_input_keyup_9_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileListComponent_Template_button_click_11_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileListComponent_Template_button_click_16_listener() {
              return ctx["new"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " New");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Changed By");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Changed At");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProfileListComponent_tr_33_Template, 17, 9, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h5", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Confirm Deletion");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileListComponent_Template_button_click_40_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileListComponent_Template_button_click_47_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileListComponent_Template_button_click_49_listener() {
              return ctx.confirmDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.profileName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.profileDesc);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.authProfiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Are you sure to delete the profile '", ctx.toBeDeletedInstance, "'?");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    4594:
    /*!*************************************************************************!*\
      !*** ./src/app/user/user-detail/user-address/user-address.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserAddressComponent": function UserAddressComponent() {
          return (
            /* binding */
            _UserAddressComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function UserAddressComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAddressComponent_div_2_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.deleteAddress(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dk-app-attribute-form2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dk-app-attribute-form2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dk-app-attribute-form2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dk-app-attribute-form2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dk-app-attribute-form2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userAddressForm_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userAddressForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("TYPE"))("formGroup", userAddressForm_r1)("readonly", ctx_r0.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("ADDRESS_VALUE"))("formGroup", userAddressForm_r1)("readonly", ctx_r0.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("POSTCODE"))("formGroup", userAddressForm_r1)("readonly", ctx_r0.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("CITY"))("formGroup", userAddressForm_r1)("readonly", ctx_r0.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("COUNTRY"))("formGroup", userAddressForm_r1)("readonly", ctx_r0.readonly)("isSmallSize", true);
        }
      }

      var _UserAddressComponent = /*#__PURE__*/function () {
        function _UserAddressComponent(fb, attributeControlService) {
          _classCallCheck(this, _UserAddressComponent);

          this.fb = fb;
          this.attributeControlService = attributeControlService;
        }

        _createClass(_UserAddressComponent, [{
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

        return _UserAddressComponent;
      }();

      _UserAddressComponent.ɵfac = function UserAddressComponent_Factory(t) {
        return new (t || _UserAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__.AttributeControlService));
      };

      _UserAddressComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _UserAddressComponent,
        selectors: [["app-user-address"]],
        inputs: {
          readonly: "readonly",
          userForm: "userForm",
          relationMetas: "relationMetas"
        },
        decls: 5,
        vars: 2,
        consts: [[1, "card", "mt-4"], [1, "card-body"], ["class", "card mb-4", 4, "ngFor", "ngForOf"], ["type", "button", "id", "add", 1, "btn", "btn-sm", "btn-primary", "float-right", 3, "disabled", "click"], [1, "card", "mb-4"], ["type", "button", "id", "remove", "aria-label", "Close", 1, "close", "d-flex", "justify-content-end", "mr-2", 3, "click"], ["aria-hidden", "true"], [1, "card-body", "row", 3, "formGroup"], [1, "col-3", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "col-6", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "col-1", "row", "form-group", "mr-2", "form-check"], ["type", "radio", "id", "primaryAddress", "name", "PRIMARY", "formControlName", "PRIMARY", 1, "form-check-input", 3, "value"], ["for", "primaryAddress", 1, "form-check-label"], [1, "col-md-3", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"]],
        template: function UserAddressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAddressComponent_div_2_Template, 14, 22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAddressComponent_Template_button_click_3_listener() {
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
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, jor_angular__WEBPACK_IMPORTED_MODULE_2__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFkZHJlc3MuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    9509:
    /*!*********************************************************************!*\
      !*** ./src/app/user/user-detail/user-basic/user-basic.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserBasicComponent": function UserBasicComponent() {
          return (
            /* binding */
            _UserBasicComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _UserBasicComponent = /*#__PURE__*/function () {
        function _UserBasicComponent(attributeControlService) {
          _classCallCheck(this, _UserBasicComponent);

          this.attributeControlService = attributeControlService;
        }

        _createClass(_UserBasicComponent, [{
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

        return _UserBasicComponent;
      }();

      _UserBasicComponent.ɵfac = function UserBasicComponent_Factory(t) {
        return new (t || _UserBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeControlService));
      };

      _UserBasicComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _UserBasicComponent,
        selectors: [["app-user-basic"]],
        inputs: {
          readonly: "readonly",
          userForm: "userForm",
          relationMetas: "relationMetas"
        },
        decls: 20,
        vars: 36,
        consts: [[1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], [1, "mt-2", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "col-md-4"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("USER_NAME"))("formGroup", ctx.userBasicNamesForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DISPLAY_NAME"))("formGroup", ctx.userBasicNamesForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("GIVEN_NAME"))("formGroup", ctx.userBasicNamesForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("MIDDLE_NAME"))("formGroup", ctx.userBasicNamesForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("FAMILY_NAME"))("formGroup", ctx.userBasicNamesForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("COMPANY_ID"))("formGroup", ctx.userBasicEmployeeForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DEPARTMENT_ID"))("formGroup", ctx.userBasicEmployeeForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("TITLE"))("formGroup", ctx.userBasicEmployeeForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("GENDER"))("formGroup", ctx.userBasicEmployeeForm)("readonly", ctx.readonly)("isSmallSize", true);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWJhc2ljLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    8081:
    /*!***********************************************************!*\
      !*** ./src/app/user/user-detail/user-detail.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserDetailComponent": function UserDetailComponent() {
          return (
            /* binding */
            _UserDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      5758);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _async_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../async-validators */
      438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../dialog.service */
      1969);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-basic/user-basic.component */
      9509);
      /* harmony import */


      var _user_email_user_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-email/user-email.component */
      7992);
      /* harmony import */


      var _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-address/user-address.component */
      4594);
      /* harmony import */


      var _user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-personalization/user-personalization.component */
      7634);
      /* harmony import */


      var _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-role/user-role.component */
      7795);

      function UserDetailComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Display");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_16_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Locked");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_16_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Unlocked");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_16_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Initial");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_16_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_16_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Renew");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_16_app_user_basic_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-user-basic", 36);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userForm", ctx_r8.userForm)("relationMetas", ctx_r8.relationMetas)("readonly", ctx_r8.readonly);
        }
      }

      function UserDetailComponent_div_16_app_user_email_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-user-email", 36);
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userForm", ctx_r9.userForm)("relationMetas", ctx_r9.relationMetas)("readonly", ctx_r9.readonly);
        }
      }

      function UserDetailComponent_div_16_app_user_address_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-user-address", 36);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userForm", ctx_r10.userForm)("relationMetas", ctx_r10.relationMetas)("readonly", ctx_r10.readonly);
        }
      }

      function UserDetailComponent_div_16_app_user_personalization_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-user-personalization", 36);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userForm", ctx_r11.userForm)("relationMetas", ctx_r11.relationMetas)("readonly", ctx_r11.readonly);
        }
      }

      function UserDetailComponent_div_16_app_user_role_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-user-role", 37);
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userForm", ctx_r12.userForm)("readonly", ctx_r12.readonly);
        }
      }

      function UserDetailComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "dk-app-attribute-form2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Lock Status:");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, UserDetailComponent_div_16_span_7_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UserDetailComponent_div_16_span_8_Template, 2, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Password Status:");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UserDetailComponent_div_16_div_13_Template, 3, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, UserDetailComponent_div_16_div_14_Template, 3, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, UserDetailComponent_div_16_div_15_Template, 3, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_div_16_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r13.switchTabStrip(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_div_16_Template_a_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r15.switchTabStrip(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_div_16_Template_a_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r16.switchTabStrip(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_div_16_Template_a_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r17.switchTabStrip(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Personalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_div_16_Template_a_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r18.switchTabStrip(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, UserDetailComponent_div_16_app_user_basic_33_Template, 1, 3, "app-user-basic", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, UserDetailComponent_div_16_app_user_email_34_Template, 1, 3, "app-user-email", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, UserDetailComponent_div_16_app_user_address_35_Template, 1, 3, "app-user-address", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, UserDetailComponent_div_16_app_user_personalization_36_Template, 1, 3, "app-user-personalization", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, UserDetailComponent_div_16_app_user_role_37_Template, 1, 2, "app-user-role", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("USER_ID"))("formGroup", ctx_r2.userForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);

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
        }
      }

      var _UserDetailComponent = /*#__PURE__*/function () {
        function _UserDetailComponent(fb, route, router, dialogService, identityService, attributeControlService, entityService, uiMapperService, messageService) {
          _classCallCheck(this, _UserDetailComponent);

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

        _createClass(_UserDetailComponent, [{
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
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this54 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(function (params) {
              _this54.action = params.get('action');

              if (_this54.action === 'new') {
                _this54.isNewMode = true;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([_this54.entityService.getRelationMetaOfEntity('person'), _this54._createNewUser()]);
              } else {
                _this54.isNewMode = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([_this54.entityService.getRelationMetaOfEntity('person'), _this54.identityService.getUserDetail(params.get('userID'))]);
              }
            })).subscribe(function (data) {
              _this54.relationMetas = data[0];
              _this54.attrCtrls = _this54.attributeControlService.toAttributeControl(_this54.relationMetas.find(function (relationMeta) {
                return relationMeta.RELATION_ID === 'r_user';
              }).ATTRIBUTES);

              if ('ENTITY_ID' in data[1]) {
                _this54.instanceGUID = data[1]['INSTANCE_GUID'];

                _this54._generateUserForm(data[1]);

                if (_this54.isNewMode || _this54.action === 'change') {
                  _this54._switch2EditMode();
                } else {
                  _this54._switch2DisplayMode();
                }
              } else {
                var errorMessages = data[1];
                errorMessages.forEach(function (msg) {
                  return _this54.messageService.add(msg);
                });
              }
            });
          }
        }, {
          key: "return2List",
          value: function return2List() {
            this.router.navigate(['users']);
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
            var _this55 = this;

            if (this.readonly) {
              this._switch2EditMode();
            } else {
              if (this.userForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    _this55.userForm.reset(_this55.originalUserValue);

                    _this55._switch2DisplayMode();
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
              userIDCtrl.setAsyncValidators((0, _async_validators__WEBPACK_IMPORTED_MODULE_0__.existingUserIDValidator)(this.identityService, this.messageService));
            }

            var userNameCtrl = this.userForm.get('userBasic.names.USER_NAME');
            userNameCtrl.setAsyncValidators((0, _async_validators__WEBPACK_IMPORTED_MODULE_0__.existingUserNameValidator)(this.identityService, this.messageService, this.userForm.get('USER_ID').value));
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
            var userDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_11__.Entity();
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
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(userDetail);
          }
        }, {
          key: "_generateUserForm",
          value: function _generateUserForm(data) {
            var _this56 = this;

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
            var emailArray = this.userForm.get('emails');
            data['r_email'].forEach(function (email) {
              emailArray.push(_this56.fb.group({
                EMAIL: [email['EMAIL'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
                TYPE: [email['TYPE'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
                PRIMARY: [email['PRIMARY']]
              }));
            });
            var addressArray = this.userForm.get('addresses');

            if (data['r_address']) {
              data['r_address'].forEach(function (address) {
                addressArray.push(_this56.fb.group({
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

            var roleArray = this.userForm.get('userRole');
            var userRoleRelationship = data['relationships'][0];

            if (userRoleRelationship) {
              userRoleRelationship.values.forEach(function (value) {
                var roleInstance = value.PARTNER_INSTANCES[0];
                roleArray.push(_this56.fb.group({
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
            var _this57 = this;

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
              _this57.originalUserValue['emails'].push({
                EMAIL: email['EMAIL'],
                TYPE: email['TYPE'],
                PRIMARY: email['PRIMARY']
              });
            });

            if (data['r_address']) {
              data['r_address'].forEach(function (address) {
                _this57.originalUserValue['addresses'].push({
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

                _this57.originalUserValue['userRole'].push({
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
            var _this58 = this;

            this.messageService.clearMessages();

            if (this._composeChangesToUser()) {
              this.identityService.save(this.changedUser).subscribe(function (data) {
                _this58.changedUser = {};

                if ('INSTANCE_GUID' in data) {
                  var userID = data['r_user'][0]['USER_ID'];
                  _this58.instanceGUID = data['INSTANCE_GUID'];
                  _this58.isNewMode = false;

                  _this58.identityService.getUserDetail(userID).subscribe(function (userData) {
                    if ('ENTITY_ID' in userData) {
                      _this58._switch2DisplayMode();

                      _this58._resetUserValue(userData);
                    } else {
                      var errorMessages = userData;
                      errorMessages.forEach(function (msg) {
                        return _this58.messageService.add(msg);
                      });
                    }
                  });

                  _this58.messageService.reportMessage('USER', 'USER_SAVED', 'S', userID);
                } else {
                  var errorMessages = data;
                  errorMessages.forEach(function (msg) {
                    return _this58.messageService.add(msg);
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
        }]);

        return _UserDetailComponent;
      }();

      _UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) {
        return new (t || _UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_11__.AttributeControlService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_11__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_11__.UiMapperService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_15__.MessageService));
      };

      _UserDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _UserDetailComponent,
        selectors: [["app-user-detail"]],
        decls: 17,
        vars: 5,
        consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Return to List", "id", "toList", 1, "btn", "btn-sm", "btn-outline-info", "mr-2", 3, "click"], [1, "fas", "fa-list-ul"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "col-md-6", "col-lg-4", "row", "form-group", "mr-2", 3, "formGroup"], ["for", "lockStatus", 1, "col-form-label", "col-form-label-sm"], ["id", "lockStatus", 1, "form-control", "dk-icon"], ["class", "fas fa-lock", 4, "ngIf"], ["class", "fas fa-lock-open", 4, "ngIf"], ["for", "passwordStatus", 1, "col-form-label", "col-form-label-sm"], ["id", "passwordStatus", 1, "form-control", "dk-icon", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "userForm", "relationMetas", "readonly", 4, "ngSwitchCase"], [3, "userForm", "readonly", 4, "ngSwitchCase"], [1, "fas", "fa-lock"], [1, "fas", "fa-lock-open"], [1, "badge", "badge-primary"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"], [3, "userForm", "relationMetas", "readonly"], [3, "userForm", "readonly"]],
        template: function UserDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_5_listener() {
              return ctx.return2List();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " To List");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_8_listener() {
              return ctx.switchEditDisplay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, UserDetailComponent_span_9_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, UserDetailComponent_span_10_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_11_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, UserDetailComponent_div_16_Template, 38, 27, "div", 11);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.isNewMode ? "New User" : ctx.readonly ? "Display User" : "Change User");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ui_message_angular__WEBPACK_IMPORTED_MODULE_15__.MessageComponent, jor_angular__WEBPACK_IMPORTED_MODULE_11__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitchCase, _user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_3__.UserBasicComponent, _user_email_user_email_component__WEBPACK_IMPORTED_MODULE_4__.UserEmailComponent, _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_5__.UserAddressComponent, _user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_6__.UserPersonalizationComponent, _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_7__.UserRoleComponent],
        styles: [".dk-icon[_ngcontent-%COMP%] {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoidXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay1pY29uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    7992:
    /*!*********************************************************************!*\
      !*** ./src/app/user/user-detail/user-email/user-email.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserEmailComponent": function UserEmailComponent() {
          return (
            /* binding */
            _UserEmailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function UserEmailComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEmailComponent_div_2_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.deleteEmail(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dk-app-attribute-form2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dk-app-attribute-form2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userEmailForm_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userEmailForm_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("TYPE"))("formGroup", userEmailForm_r1)("readonly", ctx_r0.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("EMAIL"))("formGroup", userEmailForm_r1)("readonly", ctx_r0.readonly)("isSmallSize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        }
      }

      var _UserEmailComponent = /*#__PURE__*/function () {
        function _UserEmailComponent(fb, messageService, attributeControlService) {
          _classCallCheck(this, _UserEmailComponent);

          this.fb = fb;
          this.messageService = messageService;
          this.attributeControlService = attributeControlService;
        }

        _createClass(_UserEmailComponent, [{
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

        return _UserEmailComponent;
      }();

      _UserEmailComponent.ɵfac = function UserEmailComponent_Factory(t) {
        return new (t || _UserEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_3__.AttributeControlService));
      };

      _UserEmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _UserEmailComponent,
        selectors: [["app-user-email"]],
        inputs: {
          readonly: "readonly",
          userForm: "userForm",
          relationMetas: "relationMetas"
        },
        decls: 5,
        vars: 2,
        consts: [[1, "card", "mt-4"], [1, "card-body"], ["class", "card mb-4", 4, "ngFor", "ngForOf"], ["type", "button", "id", "add", 1, "btn", "btn-sm", "btn-primary", "float-right", 3, "disabled", "click"], [1, "card", "mb-4"], ["type", "button", "id", "remove", "aria-label", "Close", 1, "close", "d-flex", "justify-content-end", "mr-2", 3, "click"], ["aria-hidden", "true"], [1, "card-body", "row", 3, "formGroup"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "col-1", "row", "form-group", "mr-2", "form-check"], ["type", "radio", "id", "primaryEmail", "name", "PRIMARY", "formControlName", "PRIMARY", 1, "form-check-input", 3, "value"], ["for", "primaryEmail", 1, "form-check-label"]],
        template: function UserEmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserEmailComponent_div_2_Template, 11, 10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEmailComponent_Template_button_click_3_listener() {
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
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, jor_angular__WEBPACK_IMPORTED_MODULE_3__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    7634:
    /*!*****************************************************************************************!*\
      !*** ./src/app/user/user-detail/user-personalization/user-personalization.component.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserPersonalizationComponent": function UserPersonalizationComponent() {
          return (
            /* binding */
            _UserPersonalizationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _UserPersonalizationComponent = /*#__PURE__*/function () {
        function _UserPersonalizationComponent(attributeControlService) {
          _classCallCheck(this, _UserPersonalizationComponent);

          this.attributeControlService = attributeControlService;
        }

        _createClass(_UserPersonalizationComponent, [{
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

        return _UserPersonalizationComponent;
      }();

      _UserPersonalizationComponent.ɵfac = function UserPersonalizationComponent_Factory(t) {
        return new (t || _UserPersonalizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeControlService));
      };

      _UserPersonalizationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _UserPersonalizationComponent,
        selectors: [["app-user-personalization"]],
        inputs: {
          readonly: "readonly",
          userForm: "userForm",
          relationMetas: "relationMetas"
        },
        decls: 5,
        vars: 16,
        consts: [[1, "mt-4", "ml-2", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("LANGUAGE"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("TIMEZONE"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DECIMAL_FORMAT"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly)("isSmallSize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DATE_FORMAT"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly)("isSmallSize", true);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, jor_angular__WEBPACK_IMPORTED_MODULE_1__.AttributeForm2Component, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBlcnNvbmFsaXphdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    7795:
    /*!*******************************************************************!*\
      !*** ./src/app/user/user-detail/user-role/user-role.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserRoleComponent": function UserRoleComponent() {
          return (
            /* binding */
            _UserRoleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      867);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../identity.service */
      8934);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function UserRoleComponent_tr_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserRoleComponent_tr_10_Template_input_change_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.onChangeRoleID(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserRoleComponent_tr_10_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;
            var userRoleForm_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.onSearchHelp(i_r2, userRoleForm_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserRoleComponent_tr_10_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.deleteRole(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userRoleForm_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

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
        }
      }

      var _UserRoleComponent = /*#__PURE__*/function () {
        function _UserRoleComponent(fb, identityService) {
          _classCallCheck(this, _UserRoleComponent);

          this.fb = fb;
          this.identityService = identityService;
        }

        _createClass(_UserRoleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this59 = this;

            this.userRoleFormArray = this.userForm.get('userRole'); // Recheck each role since every time the template is initialized, Angular clears the error status.

            if (!this.readonly) {
              this.userRoleFormArray.controls.forEach(function (ctrl, index) {
                _this59.onChangeRoleID(index);
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
            var afterExportFn = function (context, roleIdx) {
              return function () {
                return context.onChangeRoleID(roleIdx);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModalBySearchHelp('ROLE', 'NAME', 'NAME', exportObject, this.readonly || this.oldRole(exportObject) && exportObject.valid, afterExportFn);
          }
        }]);

        return _UserRoleComponent;
      }();

      _UserRoleComponent.ɵfac = function UserRoleComponent_Factory(t) {
        return new (t || _UserRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService));
      };

      _UserRoleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _UserRoleComponent,
        selectors: [["app-user-role"]],
        viewQuery: function UserRoleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__.SearchHelpComponent, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
          }
        },
        inputs: {
          readonly: "readonly",
          userForm: "userForm"
        },
        decls: 12,
        vars: 2,
        consts: [[1, "table", "table-sm", "table-bordered", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light", "dk-form-label"], [1, "dk-name"], [1, "dk-description"], [1, "dk-actions"], ["formArrayName", "userRole", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "NAME", "name", "roleName", 1, "form-control", "form-control-sm", 3, "readonly", "change"], [1, "invalid-tooltip"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "formControlName", "DESCRIPTION", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"]],
        template: function UserRoleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserRoleComponent_tr_10_Template, 14, 5, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dk-app-search-help");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userRoleFormArray.controls);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, jor_angular__WEBPACK_IMPORTED_MODULE_3__.SearchHelpComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
        styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 30rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcm9sZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InVzZXItcm9sZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1uYW1le1xuICB3aWR0aDogMjByZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiAzMHJlbTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogM3JlbTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    846:
    /*!*******************************************************!*\
      !*** ./src/app/user/user-list/user-list.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserListComponent": function UserListComponent() {
          return (
            /* binding */
            _UserListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ui-message-angular */
      3540);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../identity.service */
      8934);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function UserListComponent_tr_35_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 41);
        }
      }

      function UserListComponent_tr_35_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 42);
        }
      }

      function UserListComponent_tr_35_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Initial");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function UserListComponent_tr_35_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function UserListComponent_tr_35_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Renew");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserListComponent_tr_35_span_9_Template, 1, 0, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserListComponent_tr_35_span_10_Template, 1, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserListComponent_tr_35_div_12_Template, 3, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserListComponent_tr_35_div_13_Template, 3, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserListComponent_tr_35_div_14_Template, 3, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_16_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var user_r1 = restoredCtx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.displayUser(user_r1.USER_ID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_18_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var user_r1 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.changeUser(user_r1.USER_ID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_20_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var user_r1 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.deleteUser(user_r1.USER_ID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

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
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "display": a0
        };
      };

      var _UserListComponent = /*#__PURE__*/function () {
        function _UserListComponent(identityService, messageService, router) {
          _classCallCheck(this, _UserListComponent);

          this.identityService = identityService;
          this.messageService = messageService;
          this.router = router;
          this.showDeletionConfirmation = false;
        }

        _createClass(_UserListComponent, [{
          key: "displayDeletionConfirmation",
          get: function get() {
            return this.showDeletionConfirmation ? 'block' : 'none';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "search",
          value: function search() {
            var _this60 = this;

            this.messageService.clearMessages();
            this.users = [];
            this.userID = this.userID ? this.userID.trim() : '';
            this.userName = this.userName ? this.userName.trim() : '';
            this.identityService.searchUsers(this.userID, this.userName).subscribe(function (data) {
              if (!data[0]) {
                _this60.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.messageType.Warning);
              } else if (data[0]['msgCat']) {
                var messages = data;
                messages.forEach(function (msg) {
                  return _this60.messageService.add(msg);
                });
              } else {
                _this60.users = data;
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
            var _this61 = this;

            var toBeDeletedUserGUID = this.users.find(function (ele) {
              return ele.USER_ID === _this61.toBeDeletedUser;
            }).INSTANCE_GUID;
            this.identityService["delete"](toBeDeletedUserGUID).subscribe(function (errorMsg) {
              _this61.showDeletionConfirmation = false;

              if (errorMsg) {
                var messages = errorMsg;
                messages.forEach(function (msg) {
                  return _this61.messageService.add(msg);
                });
              } else {
                _this61.search();
              }
            });
          }
        }]);

        return _UserListComponent;
      }();

      _UserListComponent.ɵfac = function UserListComponent_Factory(t) {
        return new (t || _UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _UserListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _UserListComponent,
        selectors: [["app-user-list"]],
        decls: 53,
        vars: 9,
        consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "user_id", 1, "col-sm-3", "col-form-label", "col-form-label-sm"], ["id", "user_id", "name", "user_id", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "user_name", 1, "col-sm-3", "col-form-label", "col-form-label-sm"], ["id", "user_name", "name", "user_name", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-sm", "btn-primary", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], [1, "dk-lock"], [1, "dk-password-state"], [1, "dk-actions"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], ["class", "fas fa-lock", "title", "Locked", 4, "ngIf"], ["class", "fas fa-lock-open", "title", "Unlocked", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"], ["title", "Locked", 1, "fas", "fa-lock"], ["title", "Unlocked", 1, "fas", "fa-lock-open"], [1, "badge", "badge-primary"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"]],
        template: function UserListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "User ID:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.userID = $event;
            })("keyup", function UserListComponent_Template_input_keyup_5_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "User Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.userName = $event;
            })("keyup", function UserListComponent_Template_input_keyup_9_listener($event) {
              return ctx.enterSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_11_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dk-message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_16_listener() {
              return ctx.newUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " New");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Display Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Locked?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Password State");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, UserListComponent_tr_35_Template, 22, 13, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h5", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Confirm Deletion");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_42_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_49_listener() {
              return ctx.cancelDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_51_listener() {
              return ctx.confirmDeletion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ui_message_angular__WEBPACK_IMPORTED_MODULE_2__.MessageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase],
        styles: [".dk-lock[_ngcontent-%COMP%] {\n  width: 5rem;\n  max-width: 5rem;\n  min-width: 5rem;\n}\n.dk-password-state[_ngcontent-%COMP%] {\n  width: 15rem;\n  max-width: 15rem;\n  min-width: 15rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 9rem;\n  min-width: 9rem;\n  max-width: 9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWxvY2sge1xuICB3aWR0aDogNXJlbTtcbiAgbWF4LXdpZHRoOiA1cmVtO1xuICBtaW4td2lkdGg6IDVyZW07XG59XG4uZGstcGFzc3dvcmQtc3RhdGUge1xuICB3aWR0aDogMTVyZW07XG4gIG1heC13aWR0aDogMTVyZW07XG4gIG1pbi13aWR0aDogMTVyZW07XG59XG4uZGstYWN0aW9uc3tcbiAgd2lkdGg6IDlyZW07XG4gIG1pbi13aWR0aDogOXJlbTtcbiAgbWF4LXdpZHRoOiA5cmVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    4023:
    /*!******************************************!*\
      !*** ./src/app/work-protection.guard.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WorkProtectionGuard": function WorkProtectionGuard() {
          return (
            /* binding */
            _WorkProtectionGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _WorkProtectionGuard = /*#__PURE__*/function () {
        function _WorkProtectionGuard() {
          _classCallCheck(this, _WorkProtectionGuard);
        }

        _createClass(_WorkProtectionGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component, currentRoute, currentState, nextState) {
            return component.canDeactivate ? component.canDeactivate() : true;
          }
        }]);

        return _WorkProtectionGuard;
      }();

      _WorkProtectionGuard.ɵfac = function WorkProtectionGuard_Factory(t) {
        return new (t || _WorkProtectionGuard)();
      };

      _WorkProtectionGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _WorkProtectionGuard,
        factory: _WorkProtectionGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        redirectPath: '',
        redirectUrl: '/landing',
        originalHost: 'http://localhost:3000'
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map