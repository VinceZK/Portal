(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+xHg":
/*!***************************************************************************************************************!*\
  !*** ./src/app/app_category/app-category-detail/app-category-detail-app/app-category-detail-app.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AppCategoryDetailAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCategoryDetailAppComponent", function() { return AppCategoryDetailAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../identity.service */ "H3s1");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AppCategoryDetailAppComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppCategoryDetailAppComponent_tr_12_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onChangeKey(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryDetailAppComponent_tr_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const appForm_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSearchHelp(i_r2, appForm_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryDetailAppComponent_tr_12_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.delete(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const appForm_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", appForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r0.readonly || ctx_r0.isExisting(appForm_r1) && appForm_r1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", appForm_r1.get("APP_ID").errors == null ? null : appForm_r1.get("APP_ID").errors.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", appForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", appForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly);
} }
class AppCategoryDetailAppComponent {
    constructor(fb, identityService) {
        this.fb = fb;
        this.identityService = identityService;
    }
    ngOnInit() {
        this.appFormArray = this.mainForm.get('apps');
        // Recheck each role since every time the template is initialized, Angular clears the error status.
        if (!this.readonly) {
            this.appFormArray.controls.forEach((ctrl, index) => {
                this.onChangeKey(index);
            });
        }
    }
    delete(index) {
        if (index !== this.appFormArray.length - 1) {
            this.appFormArray.removeAt(index);
            this.appFormArray.markAsDirty();
        }
    }
    onChangeKey(index) {
        const currentFormGroup = this.appFormArray.at(index);
        if (this.isExisting(currentFormGroup)) {
            currentFormGroup.get('APP_ID').setErrors({ message: 'Duplicate Apps' });
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
            this.identityService.getAppByID(currentFormGroup.value.APP_ID).subscribe(data => {
                if (data[0] && data[0]['msgCat']) {
                    currentFormGroup.get('APP_ID').setErrors({ message: data[0]['msgShortText'] });
                }
                else {
                    currentFormGroup.get('NAME').setValue(data['app'][0]['NAME']);
                    currentFormGroup.get('portal_app_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);
                }
            });
        }
    }
    isExisting(key) {
        const existIndex = this.appFormArray.controls.findIndex(ctrl => ctrl.value.APP_ID === key.value.APP_ID
            && ctrl.get('APP_ID').pristine && ctrl.value.APP_ID !== '');
        return existIndex !== -1;
    }
    onSearchHelp(rowID, exportObject) {
        const afterExportFn = function (context, rowIDx) {
            return () => context.onChangeKey(rowIDx);
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModalByEntity('app', 'app', exportObject, this.readonly || this.isExisting(exportObject) && exportObject.valid, 'APP_ID', 'APP_ID', afterExportFn);
    }
}
AppCategoryDetailAppComponent.ɵfac = function AppCategoryDetailAppComponent_Factory(t) { return new (t || AppCategoryDetailAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"])); };
AppCategoryDetailAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppCategoryDetailAppComponent, selectors: [["app-app-category-detail-app"]], viewQuery: function AppCategoryDetailAppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
    } }, inputs: { readonly: "readonly", mainForm: "mainForm" }, decls: 14, vars: 2, consts: [[1, "table", "table-bordered", "table-sm", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light"], [1, "dk-name"], [1, "dk-description"], [1, "dk-number"], [1, "dk-actions"], ["formArrayName", "apps", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "APP_ID", 1, "form-control", "form-control-sm", 3, "readonly", "change"], [1, "invalid-tooltip"], [1, "input-group-append"], ["type", "button", "id", "searchApp", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "formControlName", "NAME", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "number", "formControlName", "ORDER", 1, "form-control", "form-control-sm", 3, "readonly"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"]], template: function AppCategoryDetailAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "App ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "App Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppCategoryDetailAppComponent_tr_12_Template, 16, 7, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dk-app-search-help");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appFormArray.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-number[_ngcontent-%COMP%]{\n  width: 5rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwX2NhdGVnb3J5L2FwcC1jYXRlZ29yeS1kZXRhaWwvYXBwLWNhdGVnb3J5LWRldGFpbC1hcHAvYXBwLWNhdGVnb3J5LWRldGFpbC1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwX2NhdGVnb3J5L2FwcC1jYXRlZ29yeS1kZXRhaWwvYXBwLWNhdGVnb3J5LWRldGFpbC1hcHAvYXBwLWNhdGVnb3J5LWRldGFpbC1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGstbmFtZXtcbiAgd2lkdGg6IDIwcmVtO1xufVxuLmRrLWRlc2NyaXB0aW9ue1xuICB3aWR0aDogMjByZW07XG59XG4uZGstbnVtYmVye1xuICB3aWR0aDogNXJlbTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogM3JlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppCategoryDetailAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-category-detail-app',
                templateUrl: './app-category-detail-app.component.html',
                styleUrls: ['./app-category-detail-app.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mainForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchHelpComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "+zia":
/*!*****************************************************************************************!*\
  !*** ./src/app/user/user-detail/user-personalization/user-personalization.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserPersonalizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPersonalizationComponent", function() { return UserPersonalizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");






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
UserPersonalizationComponent.ɵfac = function UserPersonalizationComponent_Factory(t) { return new (t || UserPersonalizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"])); };
UserPersonalizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPersonalizationComponent, selectors: [["app-user-personalization"]], inputs: { readonly: "readonly", userForm: "userForm", relationMetas: "relationMetas" }, decls: 5, vars: 16, consts: [[1, "mt-4", "ml-2", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"]], template: function UserPersonalizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("LANGUAGE"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly)("isSmallSize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("TIMEZONE"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly)("isSmallSize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DECIMAL_FORMAT"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly)("isSmallSize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("DATE_FORMAT"))("formGroup", ctx.userPersonalizationForm)("readonly", ctx.readonly)("isSmallSize", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1wZXJzb25hbGl6YXRpb24vdXNlci1wZXJzb25hbGl6YXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPersonalizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-personalization',
                templateUrl: './user-personalization.component.html',
                styleUrls: ['./user-personalization.component.css']
            }]
    }], function () { return [{ type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], relationMetas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/VinceZK/workspace/javascript/Logon/src/main.ts */"zUnb");


/***/ }),

/***/ "2Svr":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/permission/permission-detail/permission-detail-category/permission-detail-category.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PermissionDetailCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDetailCategoryComponent", function() { return PermissionDetailCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../identity.service */ "H3s1");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _authorization_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../authorization/auth-value/auth-value.component */ "DNJp");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");













const _c0 = function (a0, a1) { return { "treegrid-expander-expanded": a0, "treegrid-expander-collapsed": a1 }; };
function PermissionDetailCategoryComponent_tr_20_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_tr_20_td_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.expendCollapse(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoryForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, !categoryForm_r2.get("COLLAPSED").value, categoryForm_r2.get("COLLAPSED").value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", categoryForm_r2.get("category.ICON").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categoryForm_r2.get("category.ID").value, " ");
} }
function PermissionDetailCategoryComponent_tr_20_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoryForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categoryForm_r2.get("app.APP_ID").value, " ");
} }
function PermissionDetailCategoryComponent_tr_20_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoryForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](categoryForm_r2.get("category.NAME").value);
} }
function PermissionDetailCategoryComponent_tr_20_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoryForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](categoryForm_r2.get("app.NAME").value);
} }
function PermissionDetailCategoryComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_tr_20_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r3 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.checkCategory(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PermissionDetailCategoryComponent_tr_20_td_3_Template, 4, 6, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PermissionDetailCategoryComponent_tr_20_td_4_Template, 4, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PermissionDetailCategoryComponent_tr_20_td_7_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PermissionDetailCategoryComponent_tr_20_td_8_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoryForm_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed", categoryForm_r2.get("ROW_TYPE").value === "app" && categoryForm_r2.get("COLLAPSED").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", categoryForm_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", categoryForm_r2.get("ROW_TYPE").value === "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", categoryForm_r2.get("ROW_TYPE").value === "app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", categoryForm_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", categoryForm_r2.get("ROW_TYPE").value === "app" || ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", categoryForm_r2.get("ROW_TYPE").value === "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", categoryForm_r2.get("ROW_TYPE").value === "app");
} }
function PermissionDetailCategoryComponent_dk_app_attribute_form2_31_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dk-app-attribute-form2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PermissionDetailCategoryComponent_dk_app_attribute_form2_31_Template_dk_app_attribute_form2_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.enterConfirm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r1.categoryAttr)("formGroup", ctx_r1.newCategoryForm.get("category"))("isSmallSize", true)("readonly", false);
} }
const _c1 = function (a0) { return { "show": a0 }; };
const _c2 = function (a0) { return { "display": a0 }; };
class PermissionDetailCategoryComponent {
    constructor(fb, identityService, entityService, messageService, attributeControlService) {
        this.fb = fb;
        this.identityService = identityService;
        this.entityService = entityService;
        this.messageService = messageService;
        this.attributeControlService = attributeControlService;
        this.isCategoryModalShown = false;
        this.selectAll = false;
    }
    get displayCategoryModal() { return this.isCategoryModalShown ? 'block' : 'none'; }
    ngOnInit() {
        this.categoryFormArray = this.mainForm.get('categories');
        this.categoryFormArray.controls.forEach(ctrl => {
            if (ctrl.get('ROW_TYPE').value === 'app') {
                ctrl.get('CHECKED').disable();
            }
        });
    }
    checkAll() {
        this.categoryFormArray.controls.forEach(appCategoryCtrl => appCategoryCtrl.get('CHECKED').setValue(!this.selectAll));
        this.selectAll = !this.selectAll;
    }
    checkCategory(idx) {
        const currentCategoryCtrl = this.categoryFormArray.at(idx);
        this.categoryFormArray.controls.forEach((categoryCtrl, index) => {
            if (index <= idx) {
                return;
            }
            if (categoryCtrl.get('category.ID').value === currentCategoryCtrl.get('category.ID').value) {
                categoryCtrl.get('CHECKED').setValue(!currentCategoryCtrl.get('CHECKED').value);
            }
        });
    }
    add() {
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
            this.entityService.getElementMeta('CATEGORY_ID')
                .subscribe(elementMeta => {
                const attribute = elementMeta;
                attribute.ATTR_GUID = elementMeta.ELEMENT_ID;
                attribute.ATTR_NAME = elementMeta.ELEMENT_ID;
                attribute.DATA_ELEMENT = elementMeta.ELEMENT_ID;
                this.categoryAttr = this.attributeControlService.toSingleAttributeControl(attribute);
                this.categoryAttr.name = 'ID';
            });
        }
        this.isCategoryModalShown = true;
    }
    closeCategoryModal() {
        this.isCategoryModalShown = false;
    }
    confirm() {
        const categoryID = this.newCategoryForm.get('category.ID').value;
        this.identityService.getAppCategoryDetail(categoryID)
            .subscribe(data => {
            if ('ENTITY_ID' in data) {
                this.newCategoryForm.get('app_category_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);
                this.newCategoryForm.get('category.ID').setValue(data['r_app_category'][0]['ID']);
                this.newCategoryForm.get('category.NAME').setValue(data['r_app_category'][0]['NAME']);
                this.newCategoryForm.get('category.ICON').setValue(data['r_app_category'][0]['ICON']);
                this.newCategoryForm.markAsDirty();
                this.categoryFormArray.push(this.newCategoryForm);
                const appRelationship = data['relationships'].find(relationship => relationship.RELATIONSHIP_ID === 'rs_app_category');
                const appGUIDs = [];
                appRelationship.values.forEach(value => {
                    this.categoryFormArray.push(this.fb.group({
                        CHECKED: [{ value: '', disabled: true }],
                        COLLAPSED: false,
                        ROW_TYPE: 'app',
                        RELATIONSHIP_INSTANCE_GUID: '',
                        app_category_INSTANCE_GUID: '',
                        auth_profile_INSTANCE_GUID: '',
                        ORDER: value['ORDER'],
                        category: this.fb.group({
                            ID: data['r_app_category'][0]['ID'],
                            NAME: value['PARTNER_INSTANCES'][0]['app'][0]['NAME'],
                            ICON: data['r_app_category'][0]['ICON']
                        }),
                        app: this.fb.group({
                            APP_ID: value['PARTNER_INSTANCES'][0]['app'][0]['APP_ID'],
                            NAME: value['PARTNER_INSTANCES'][0]['app'][0]['NAME']
                        })
                    }));
                    appGUIDs.push(value['PARTNER_INSTANCES'][0]['INSTANCE_GUID']);
                });
                this._generateProfile(appGUIDs);
            }
            else {
                const errorMessages = data;
                errorMessages.forEach(msg => this.messageService.add(msg));
                this.newCategoryForm.setErrors({ message: 'Category contains errors' });
            }
            this.isCategoryModalShown = false;
        });
    }
    _generateProfile(appGUIDs) {
        const profileCtrl = this.fb.group({
            PROFILE_NAME: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])().toUpperCase().replace(/-/g, ''),
            DESC: this.mainForm.get('NAME').value + ` / ` + this.newCategoryForm.get('category.ID').value,
            CHANGE_TIME: 'just now'
        });
        this.newCategoryForm.addControl('profile', profileCtrl);
        const operations = appGUIDs.map(appGUID => {
            return {
                action: 'getInstancePieceByGUID',
                instance: { INSTANCE_GUID: appGUID,
                    RELATIONSHIPS: [{ RELATIONSHIP_ID: 'rs_app_auth',
                            PARTNER_ENTITY_PIECES: {
                                RELATIONS: ['authObject'],
                                RELATIONSHIPS: [{ RELATIONSHIP_ID: 'rs_auth_object_field',
                                        PARTNER_ENTITY_PIECES: { RELATIONS: ['authField'] } }]
                            } }] }
            };
        });
        this.identityService.orchestrate(operations).subscribe(data => {
            let authorizations = [];
            data.forEach(operation => {
                if (operation.errs) {
                    const errorMessages = data;
                    errorMessages.forEach(msg => this.messageService.add(msg));
                    profileCtrl.setErrors({ message: 'Profile contains errors' });
                }
                else {
                    const rsAuthorization = operation.result.instance.relationships[0];
                    if (rsAuthorization) {
                        rsAuthorization.values.forEach(value => value.RELATIONSHIP_INSTANCE_GUID = '');
                        authorizations = authorizations.concat(this.identityService.parseProfileAuthObject(rsAuthorization));
                    }
                }
            });
            if (!profileCtrl.hasError('message')) {
                const authFormArray = this.fb.array(authorizations.map(authorization => this.fb.group(authorization)));
                authFormArray.controls.forEach(ctrl => ctrl.markAsDirty());
                profileCtrl.addControl('authorizations', authFormArray);
            }
        });
    }
    delete() {
        let index = this.categoryFormArray.controls.findIndex(appCategoryCtrl => appCategoryCtrl.get('CHECKED').value);
        while (index !== -1) {
            this.categoryFormArray.removeAt(index);
            this.categoryFormArray.markAsDirty();
            index = this.categoryFormArray.controls.findIndex(appCategoryCtrl => appCategoryCtrl.get('CHECKED').value);
        }
    }
    enterConfirm($event) {
        if ($event.keyCode === 13) {
            this.confirm();
        }
    }
    onSearchHelp(rowID, exportObject) {
        const afterExportFn = function (context, rowIDx) {
            return () => context.onChangeCategory(rowIDx);
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModalByEntity('category', 'r_app_category', exportObject, this.readonly, null, null, afterExportFn);
    }
    expendCollapse(idx) {
        const currentCtrl = this.categoryFormArray.at(idx);
        const parentNode = currentCtrl.get('category.ID').value;
        this.categoryFormArray.controls.forEach(categoryCtrl => {
            if (categoryCtrl.get('category.ID').value === parentNode) {
                categoryCtrl.get('COLLAPSED').setValue(!categoryCtrl.get('COLLAPSED').value);
            }
        });
    }
}
PermissionDetailCategoryComponent.ɵfac = function PermissionDetailCategoryComponent_Factory(t) { return new (t || PermissionDetailCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeControlService"])); };
PermissionDetailCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermissionDetailCategoryComponent, selectors: [["app-permission-detail-category"]], viewQuery: function PermissionDetailCategoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_authorization_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_5__["AuthValueComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.authValueComponent = _t.first);
    } }, inputs: { readonly: "readonly", mainForm: "mainForm" }, decls: 37, vars: 11, consts: [[1, "dk-auth-main", "mx-3"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end"], ["type", "button", "id", "remove-object", 1, "btn", "btn-light", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-minus"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm", "dk-table", 3, "formGroup"], [1, "thead-light"], [1, "dk-checkbox"], ["name", "btSelectAll", "type", "checkbox", 3, "click"], [1, "dk-auth-object"], [1, "dk-auth-order"], [1, "dk-auth-value"], ["class", "treegrid-expanded", 3, "collapsed", 4, "ngFor", "ngForOf"], ["id", "addAppCategory", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "addAuthObjectTitle", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly", "keyup", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "treegrid-expanded"], [1, "dk-checkbox", 3, "formGroup"], ["type", "checkbox", "formControlName", "CHECKED", 1, "form-control", "form-control-sm", 3, "click"], [4, "ngIf"], [3, "formGroup"], ["type", "number", "formControlName", "ORDER", 1, "form-control", "form-control-sm", 3, "readOnly"], [1, "treegrid-expander", 3, "ngClass", "click"], [3, "ngClass"], [1, "treegrid-indent"], [1, "treegrid-expander"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly", "keyup"]], template: function PermissionDetailCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_button_click_2_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_button_click_5_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_input_click_12_listener() { return ctx.checkAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Category / App Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PermissionDetailCategoryComponent_tr_20_Template, 9, 9, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add App Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_button_click_27_listener() { return ctx.closeCategoryModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PermissionDetailCategoryComponent_dk_app_attribute_form2_31_Template, 1, 4, "dk-app-attribute-form2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_button_click_33_listener() { return ctx.closeCategoryModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailCategoryComponent_Template_button_click_35_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryFormArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.isCategoryModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.displayCategoryModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newCategoryForm && ctx.categoryAttr);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeForm2Component"]], styles: [".dk-auth-main[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.dk-checkbox[_ngcontent-%COMP%] {\n  width: 1rem;\n}\n.dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.dk-auth-object[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.dk-auth-order[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n.dk-auth-value[_ngcontent-%COMP%] {\n  width: 30rem;\n}\n.collapsed[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVybWlzc2lvbi9wZXJtaXNzaW9uLWRldGFpbC9wZXJtaXNzaW9uLWRldGFpbC1jYXRlZ29yeS9wZXJtaXNzaW9uLWRldGFpbC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wZXJtaXNzaW9uL3Blcm1pc3Npb24tZGV0YWlsL3Blcm1pc3Npb24tZGV0YWlsLWNhdGVnb3J5L3Blcm1pc3Npb24tZGV0YWlsLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstYXV0aC1tYWluIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmRrLWNoZWNrYm94IHtcbiAgd2lkdGg6IDFyZW07XG59XG4uZGstdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmRrLXRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5kay1hdXRoLW9iamVjdCB7XG4gIHdpZHRoOiAyMHJlbTtcbn1cbi5kay1hdXRoLW9yZGVyIHtcbiAgd2lkdGg6IDVyZW07XG59XG4uZGstYXV0aC12YWx1ZSB7XG4gIHdpZHRoOiAzMHJlbTtcbn1cbi5jb2xsYXBzZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionDetailCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permission-detail-category',
                templateUrl: './permission-detail-category.component.html',
                styleUrls: ['./permission-detail-category.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeControlService"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mainForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchHelpComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], { static: true }]
        }], authValueComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_authorization_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_5__["AuthValueComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "4J20":
/*!******************************************!*\
  !*** ./src/app/work-protection.guard.ts ***!
  \******************************************/
/*! exports provided: WorkProtectionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkProtectionGuard", function() { return WorkProtectionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WorkProtectionGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
WorkProtectionGuard.ɵfac = function WorkProtectionGuard_Factory(t) { return new (t || WorkProtectionGuard)(); };
WorkProtectionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkProtectionGuard, factory: WorkProtectionGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkProtectionGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "4J8T":
/*!*******************************************************************!*\
  !*** ./src/app/app/app-detail/app-target/app-target.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTargetComponent", function() { return AppTargetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");






class AppTargetComponent {
    constructor(attributeControlService) {
        this.attributeControlService = attributeControlService;
    }
    ngOnInit() {
        this.appTargetForm = this.mainForm.get('target');
        this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'app').ATTRIBUTES);
    }
    getAttrCtrlFromID(fieldName) {
        return this.attrCtrls.find(attrCtrl => attrCtrl.name === fieldName);
    }
}
AppTargetComponent.ɵfac = function AppTargetComponent_Factory(t) { return new (t || AppTargetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"])); };
AppTargetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppTargetComponent, selectors: [["app-app-target"]], inputs: { readonly: "readonly", mainForm: "mainForm", relationMetas: "relationMetas" }, decls: 3, vars: 8, consts: [[1, "mt-4", "ml-2", "row"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "isSmallSize", "readonly"]], template: function AppTargetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("ROUTE_LINK"))("formGroup", ctx.appTargetForm)("isSmallSize", true)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("IS_EXTERNAL"))("formGroup", ctx.appTargetForm)("isSmallSize", true)("readonly", ctx.readonly);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC9hcHAtZGV0YWlsL2FwcC10YXJnZXQvYXBwLXRhcmdldC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppTargetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-target',
                templateUrl: './app-target.component.html',
                styleUrls: ['./app-target.component.css']
            }]
    }], function () { return [{ type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mainForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], relationMetas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6ZaY":
/*!*****************************************************************************!*\
  !*** ./src/app/permission/permission-detail/permission-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PermissionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDetailComponent", function() { return PermissionDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dialog.service */ "Cw5F");
/* harmony import */ var _async_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../async-validators */ "QLkK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _permission_detail_category_permission_detail_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./permission-detail-category/permission-detail-category.component */ "2Svr");
/* harmony import */ var _permission_detail_profile_permission_detail_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./permission-detail-profile/permission-detail-profile.component */ "Y1zO");
/* harmony import */ var _permission_detail_user_permission_detail_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./permission-detail-user/permission-detail-user.component */ "E5ku");
/* harmony import */ var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../admin-info/admin-info.component */ "P6wf");






















function PermissionDetailComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PermissionDetailComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PermissionDetailComponent_div_13_app_permission_detail_category_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-permission-detail-category", 21);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r3.mainForm)("readonly", ctx_r3.readonly);
} }
function PermissionDetailComponent_div_13_app_permission_detail_profile_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-permission-detail-profile", 21);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r4.mainForm)("readonly", ctx_r4.readonly);
} }
function PermissionDetailComponent_div_13_app_permission_detail_user_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-permission-detail-user", 21);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r5.mainForm)("readonly", ctx_r5.readonly);
} }
function PermissionDetailComponent_div_13_app_admin_info_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-info", 22);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r6.mainForm)("relationMetas", ctx_r6.relationMetas)("adminRelation", "permission");
} }
function PermissionDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailComponent_div_13_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.switchTabStrip(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "APP Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailComponent_div_13_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.switchTabStrip(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailComponent_div_13_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.switchTabStrip(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailComponent_div_13_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.switchTabStrip(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PermissionDetailComponent_div_13_app_permission_detail_category_18_Template, 1, 2, "app-permission-detail-category", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PermissionDetailComponent_div_13_app_permission_detail_profile_19_Template, 1, 2, "app-permission-detail-profile", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PermissionDetailComponent_div_13_app_permission_detail_user_20_Template, 1, 2, "app-permission-detail-user", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PermissionDetailComponent_div_13_app_admin_info_21_Template, 1, 3, "app-admin-info", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("NAME"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("DESCRIPTION"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 4);
} }
class PermissionDetailComponent {
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
        this.originalValue = {};
        this.operations = [];
        this.tabStrip = 1;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params) => {
            this.action = params.get('action');
            if (this.action === 'new') {
                this.isNewMode = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([
                    this.entityService.getRelationMetaOfEntity('permission'),
                    this._createNewEntity()
                ]);
            }
            else {
                this.isNewMode = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([
                    this.entityService.getRelationMetaOfEntity('permission'),
                    this.identityService.getPermissionDetail(params.get('permissionName'))
                ]);
            }
        })).subscribe(data => {
            this.relationMetas = data[0];
            this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'r_role').ATTRIBUTES);
            if ('ENTITY_ID' in data[1]) {
                this.instanceGUID = data[1]['INSTANCE_GUID'];
                this._generateMainForm(data[1]);
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
            if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(confirm => {
                    if (confirm) {
                        this.mainForm.reset(this.originalValue);
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
        const permissionNameCtrl = this.mainForm.get('NAME');
        permissionNameCtrl.clearAsyncValidators();
        this.mainForm.markAsPristine();
        // Replace the URL from change to display
        window.history.replaceState({}, '', `/permissions/${permissionNameCtrl.value};action=display`);
    }
    _switch2EditMode() {
        this.readonly = false;
        const permissionNameCtrl = this.mainForm.get('NAME');
        if (this.isNewMode) {
            permissionNameCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_9__["existingPermissionValidator"])(this.identityService, this.messageService));
        }
        // Replace the URL from to display
        if (this.action === 'display') {
            this.action = 'change';
        }
        window.history.replaceState({}, '', `/permissions/${permissionNameCtrl.value};action=` + this.action);
    }
    _createNewEntity() {
        const permissionDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_2__["Entity"]();
        permissionDetail.ENTITY_ID = 'permission';
        permissionDetail['permission'] = [
            { DESCR: '', CREATED_BY: '', CREATE_TIME: '', CHANGED_BY: '', CHANGE_TIME: '' }
        ];
        permissionDetail['r_role'] = [
            { NAME: '', DESCRIPTION: '' }
        ];
        permissionDetail['relationships'] = [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(permissionDetail);
    }
    _generateMainForm(data) {
        this.mainForm = this.fb.group({
            NAME: [data['r_role'][0]['NAME'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            DESCRIPTION: [data['r_role'][0]['DESCRIPTION']],
            admin: this.fb.group({
                CREATED_BY: [data['permission'][0]['CREATED_BY']],
                CREATE_TIME: [data['permission'][0]['CREATE_TIME']],
                CHANGED_BY: [data['permission'][0]['CHANGED_BY']],
                CHANGE_TIME: [data['permission'][0]['CHANGE_TIME']]
            })
        });
        const parsedRelationship = this._parseRelationships(data['relationships']);
        this.mainForm.addControl('categories', this.fb.array(parsedRelationship.categories.map(category => {
            const categoryCtrl = this.fb.group({
                CHECKED: category.CHECKED,
                COLLAPSED: category.COLLAPSED,
                ROW_TYPE: category.ROW_TYPE,
                RELATIONSHIP_INSTANCE_GUID: category.RELATIONSHIP_INSTANCE_GUID,
                app_category_INSTANCE_GUID: category.app_category_INSTANCE_GUID,
                auth_profile_INSTANCE_GUID: category.auth_profile_INSTANCE_GUID,
                ORDER: category.ORDER
            });
            if (category.category) {
                categoryCtrl.addControl('category', this.fb.group({
                    ID: category.category.ID,
                    NAME: category.category.NAME,
                    ICON: category.category.ICON
                }));
            }
            if (category.profile) {
                categoryCtrl.addControl('profile', this.fb.group({
                    PROFILE_NAME: category.profile.PROFILE_NAME,
                    DESC: category.profile.DESC,
                    CHANGE_TIME: category.profile.CHANGE_TIME,
                    authorizations: this.fb.array(category.profile.authorizations.map(authorization => this.fb.group(authorization)))
                }));
            }
            if (category.app) {
                categoryCtrl.addControl('app', this.fb.group({
                    APP_ID: category.app.APP_ID,
                    NAME: category.app.NAME
                }));
            }
            return categoryCtrl;
        })));
        this.mainForm.addControl('users', this.fb.array(parsedRelationship.users.map(user => this.fb.group(user))));
        this.originalValue = this.mainForm.getRawValue();
    }
    _parseRelationships(relationships) {
        const parsedRelationship = {
            users: [],
            categories: []
        };
        if (!relationships) {
            return parsedRelationship;
        }
        relationships.forEach(relationship => {
            switch (relationship.RELATIONSHIP_ID) {
                case 'rs_role_category_profile':
                    __parseRoleCategoryProfile(relationship, this);
                    break;
                case 'rs_user_role':
                    __parseRoleUsers(relationship);
                    break;
                default:
                // Do nothing.
            }
        });
        return parsedRelationship;
        function __parseRoleCategoryProfile(relationship, context) {
            relationship.values.forEach(value => {
                const appCategoryInstance = value.PARTNER_INSTANCES.find(partnerInstance => partnerInstance.ROLE_ID === 'app_category');
                const authProfileInstance = value.PARTNER_INSTANCES.find(partnerInstance => partnerInstance.ROLE_ID === 'auth_profile');
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
                const rsAppCategory = appCategoryInstance['relationships'][0];
                rsAppCategory.values.forEach(value2 => {
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
                            NAME: value2['PARTNER_INSTANCES'][0]['app'][0]['NAME'],
                        }
                    });
                });
            });
        }
        function __parseRoleUsers(relationship) {
            relationship.values.forEach(value => {
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
    _resetValue(data) {
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
        const parsedRelationship = this._parseRelationships(data['relationships']);
        this.originalValue['categories'] = parsedRelationship.categories;
        this.originalValue['users'] = parsedRelationship.users;
        this.mainForm.reset(this.originalValue);
    }
    save() {
        this.messageService.clearMessages();
        if (this._composeChanges()) {
            console.log(this.operations);
            this.identityService.orchestrate(this.operations).subscribe(results => {
                this.operations = [];
                results.forEach(result => {
                    if (result.msgType) {
                        this.messageService.add(result);
                    }
                    else if (result.instance && result.instance.ENTITY_ID === 'permission') {
                        this.instanceGUID = result.instance.INSTANCE_GUID;
                        this.isNewMode = false;
                        const permissionName = this.mainForm.get('NAME').value;
                        this.identityService.getPermissionDetail(permissionName).subscribe(instance => {
                            if ('ENTITY_ID' in instance) {
                                this._switch2DisplayMode();
                                this._resetValue(instance);
                            }
                            else {
                                const errorMessages = instance;
                                errorMessages.forEach(msg => this.messageService.add(msg));
                            }
                        });
                        this.messageService.reportMessage('PERMISSION', 'SAVED', 'S', permissionName);
                    }
                });
            });
        }
    }
    _composeChanges() {
        if (this.mainForm.invalid) {
            this.messageService.reportMessage('PERMISSION', 'INVALID', 'E');
            return false;
        }
        if (this.mainForm.dirty === false) {
            this.messageService.reportMessage('GENERAL', 'NO_CHANGE', 'W');
            return false;
        }
        const changedValue = {};
        changedValue['ENTITY_ID'] = 'permission';
        changedValue['INSTANCE_GUID'] = this.instanceGUID;
        if (this.isNewMode) {
            changedValue['permission'] = {
                action: 'add', DESCR: this.mainForm.get('DESCRIPTION'),
                CREATED_BY: this.identityService.Session.USER_ID, CREATE_TIME: this.identityService.CurrentTime,
                CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime
            };
            changedValue['r_role'] = {
                action: 'add', NAME: this.mainForm.get('NAME'),
                DESCRIPTION: this.mainForm.get('DESCRIPTION')
            };
        }
        changedValue['permission'] = {
            action: 'update', CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime
        };
        if (this.mainForm.get('DESCRIPTION').dirty) {
            changedValue['permission']['DESCR'] = this.mainForm.get('DESCRIPTION');
            changedValue['r_role'] = {
                action: 'update', DESCRIPTION: this.mainForm.get('DESCRIPTION')
            };
        }
        const categoryFormArray = this.mainForm.get('categories');
        categoryFormArray.controls.forEach(ctrl => {
            if (ctrl.get('ROW_TYPE').value === 'category') {
                if (ctrl.get('RELATIONSHIP_INSTANCE_GUID').value) { // Change an existing profile
                    if (ctrl.get('profile.authorizations').pristine) {
                        return;
                    }
                    const originalProfile = this.originalValue['categories'].find(category => category.RELATIONSHIP_INSTANCE_GUID === ctrl.get('RELATIONSHIP_INSTANCE_GUID').value);
                    this.operations.push({
                        action: 'changeInstance', noCommit: true,
                        instance: {
                            ENTITY_ID: 'authProfile',
                            INSTANCE_GUID: ctrl.get('auth_profile_INSTANCE_GUID').value,
                            authProfile: { action: 'update', CHANGED_BY: this.identityService.Session.USER_ID,
                                CHANGE_TIME: this.identityService.CurrentTime },
                            relationships: [
                                this.identityService.composeAuthChanges(ctrl.get('profile.authorizations'), originalProfile.authorizations, 'rs_auth_profile_object')
                            ]
                        }
                    });
                }
                else { // Add a new profile
                    this.operations.push({
                        action: 'createInstance', noCommit: true,
                        instance: {
                            ENTITY_ID: 'authProfile',
                            INSTANCE_GUID: ctrl.get('auth_profile_INSTANCE_GUID').value,
                            authProfile: { action: 'add', PROFILE_NAME: ctrl.get('profile.PROFILE_NAME').value,
                                DESC: ctrl.get('profile.DESC').value,
                                CREATED_BY: this.identityService.Session.USER_ID, CREATE_TIME: this.identityService.CurrentTime,
                                CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime },
                            relationships: [
                                this.identityService.composeAuthChanges(ctrl.get('profile.authorizations'), [], 'rs_auth_profile_object')
                            ]
                        }
                    });
                }
            }
            else { // ROW_TYPE = app
                ctrl.markAsPristine({ onlySelf: true });
            }
        });
        changedValue['relationships'] = [];
        const rsCategory = this.uiMapperService.composeChangedRelationship('rs_role_category_profile', [
            { ENTITY_ID: 'category', ROLE_ID: 'app_category' },
            { ENTITY_ID: 'authProfile', ROLE_ID: 'auth_profile' }
        ], categoryFormArray, this.originalValue['categories'].filter(category => category.ROW_TYPE === 'category'), ['CHECKED', 'COLLAPSED', 'ROW_TYPE', 'category', 'profile', 'app']);
        if (rsCategory) {
            rsCategory['values'].forEach(value => {
                if (value.PARTNER_INSTANCES) {
                    value.PARTNER_INSTANCES[1].NO_EXISTING_CHECK = true;
                }
            });
            changedValue['relationships'].push(rsCategory);
        }
        const newProfilesIndex = [];
        this.operations.forEach((operation, index) => {
            if (operation.action === 'createInstance') {
                newProfilesIndex.push(index);
            }
        });
        this.operations.push({
            action: this.isNewMode ? 'createInstance' : 'changeInstance', noCommit: true,
            replacements: newProfilesIndex.map(idx => {
                return {
                    movePath: [idx, 'result', 'instance', 'INSTANCE_GUID'],
                    toPath: ['relationships', 0, 'values', idx, 'PARTNER_INSTANCES', 1, 'INSTANCE_GUID']
                };
            }),
            instance: changedValue
        });
        // Find the deleted categories, and also trigger the deletion of the corresponding profiles
        this.originalValue['categories'].forEach(category => {
            if (category.ROW_TYPE === 'app') {
                return;
            }
            const idx = categoryFormArray.controls.findIndex(ctrl => ctrl.get('RELATIONSHIP_INSTANCE_GUID').value === category.RELATIONSHIP_INSTANCE_GUID);
            if (idx === -1) {
                this.operations.push({
                    action: 'softDeleteInstanceByGUID',
                    instance: { INSTANCE_GUID: category.auth_profile_INSTANCE_GUID }
                });
                this.operations.push({
                    action: 'hardDeleteByGUID',
                    instance: { INSTANCE_GUID: category.auth_profile_INSTANCE_GUID }
                });
            }
        });
        return true;
    }
    canDeactivate() {
        if (this.isNewMode || (this.mainForm && this.mainForm.dirty)) {
            return this.dialogService.confirm('Discard changes?');
        }
        else {
            return true;
        }
    }
}
PermissionDetailComponent.ɵfac = function PermissionDetailComponent_Factory(t) { return new (t || PermissionDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["UiMapperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
PermissionDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermissionDetailComponent, selectors: [["app-permission-detail"]], decls: 14, vars: 5, consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "adminRelation", 4, "ngSwitchCase"], [3, "mainForm", "readonly"], [3, "mainForm", "relationMetas", "adminRelation"]], template: function PermissionDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailComponent_Template_button_click_5_listener() { return ctx.switchEditDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PermissionDetailComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PermissionDetailComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailComponent_Template_button_click_8_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PermissionDetailComponent_div_13_Template, 22, 21, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isNewMode ? "New Permission" : ctx.readonly ? "Display Permission" : "Change Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _permission_detail_category_permission_detail_category_component__WEBPACK_IMPORTED_MODULE_11__["PermissionDetailCategoryComponent"], _permission_detail_profile_permission_detail_profile_component__WEBPACK_IMPORTED_MODULE_12__["PermissionDetailProfileComponent"], _permission_detail_user_permission_detail_user_component__WEBPACK_IMPORTED_MODULE_13__["PermissionDetailUserComponent"], _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_14__["AdminInfoComponent"]], styles: [".dk-btn-size[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.dk-form-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.dk-fixed-top[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 500;\n}\n.dk-icon[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVybWlzc2lvbi9wZXJtaXNzaW9uLWRldGFpbC9wZXJtaXNzaW9uLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wZXJtaXNzaW9uL3Blcm1pc3Npb24tZGV0YWlsL3Blcm1pc3Npb24tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstYnRuLXNpemUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5kay1mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uZGstZml4ZWQtdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1MDA7XG59XG4uZGstaWNvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permission-detail',
                templateUrl: './permission-detail.component.html',
                styleUrls: ['./permission-detail.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["UiMapperService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "8IYw":
/*!*************************************************************************!*\
  !*** ./src/app/user/user-detail/user-address/user-address.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddressComponent", function() { return UserAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UserAddressComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAddressComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteAddress(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
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
} if (rf & 2) {
    const userAddressForm_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
}
UserAddressComponent.ɵfac = function UserAddressComponent_Factory(t) { return new (t || UserAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"])); };
UserAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAddressComponent, selectors: [["app-user-address"]], inputs: { readonly: "readonly", userForm: "userForm", relationMetas: "relationMetas" }, decls: 5, vars: 2, consts: [[1, "card", "mt-4"], [1, "card-body"], ["class", "card mb-4", 4, "ngFor", "ngForOf"], ["type", "button", "id", "add", 1, "btn", "btn-sm", "btn-primary", "float-right", 3, "disabled", "click"], [1, "card", "mb-4"], ["type", "button", "id", "remove", "aria-label", "Close", 1, "close", "d-flex", "justify-content-end", "mr-2", 3, "click"], ["aria-hidden", "true"], [1, "card-body", "row", 3, "formGroup"], [1, "col-3", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "col-6", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "col-1", "row", "form-group", "mr-2", "form-check"], ["type", "radio", "id", "primaryAddress", "name", "PRIMARY", "formControlName", "PRIMARY", 1, "form-check-input", 3, "value"], ["for", "primaryAddress", 1, "form-check-label"], [1, "col-md-3", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"]], template: function UserAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAddressComponent_div_2_Template, 14, 22, "div", 2);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1hZGRyZXNzL3VzZXItYWRkcmVzcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-address',
                templateUrl: './user-address.component.html',
                styleUrls: ['./user-address.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], relationMetas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "8VMz":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-detail/user-role/user-role.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleComponent", function() { return UserRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../identity.service */ "H3s1");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");









function UserRoleComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserRoleComponent_tr_10_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onChangeRoleID(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRoleComponent_tr_10_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const userRoleForm_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSearchHelp(i_r2, userRoleForm_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRoleComponent_tr_10_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteRole(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userRoleForm_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userRoleForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r0.readonly || ctx_r0.oldRole(userRoleForm_r1) && userRoleForm_r1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userRoleForm_r1.get("NAME").errors == null ? null : userRoleForm_r1.get("NAME").errors.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userRoleForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly);
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
        const afterExportFn = function (context, roleIdx) {
            return () => context.onChangeRoleID(roleIdx);
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModalBySearchHelp('ROLE', 'NAME', 'NAME', exportObject, this.readonly || this.oldRole(exportObject) && exportObject.valid, afterExportFn);
    }
}
UserRoleComponent.ɵfac = function UserRoleComponent_Factory(t) { return new (t || UserRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"])); };
UserRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRoleComponent, selectors: [["app-user-role"]], viewQuery: function UserRoleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
    } }, inputs: { readonly: "readonly", userForm: "userForm" }, decls: 12, vars: 2, consts: [[1, "table", "table-sm", "table-bordered", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light", "dk-form-label"], [1, "dk-name"], [1, "dk-description"], [1, "dk-actions"], ["formArrayName", "userRole", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "NAME", "name", "roleName", 1, "form-control", "form-control-sm", 3, "readonly", "change"], [1, "invalid-tooltip"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "formControlName", "DESCRIPTION", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"]], template: function UserRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserRoleComponent_tr_10_Template, 14, 5, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dk-app-search-help");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userRoleFormArray.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 30rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLXJvbGUvdXNlci1yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZGV0YWlsL3VzZXItcm9sZS91c2VyLXJvbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGstbmFtZXtcbiAgd2lkdGg6IDIwcmVtO1xufVxuLmRrLWRlc2NyaXB0aW9ue1xuICB3aWR0aDogMzByZW07XG59XG4uZGstYWN0aW9uc3tcbiAgd2lkdGg6IDNyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-role',
                templateUrl: './user-role.component.html',
                styleUrls: ['./user-role.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchHelpComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "AzdA":
/*!**********************************************************!*\
  !*** ./src/app/authorization/authorization.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function() { return AuthorizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-value/auth-value.component */ "DNJp");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../identity.service */ "H3s1");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");













const _c0 = function (a0, a1) { return { "treegrid-expander-expanded": a0, "treegrid-expander-collapsed": a1 }; };
function AuthorizationComponent_table_8_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_table_8_tr_12_td_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.expendCollapse(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authObjForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !authObjForm_r3.get("COLLAPSED").value, authObjForm_r3.get("COLLAPSED").value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", authObjForm_r3.get("OBJ_NAME").value, " ");
} }
function AuthorizationComponent_table_8_tr_12_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authObjForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", authObjForm_r3.get("FIELD_NAME").value, " ");
} }
function AuthorizationComponent_table_8_tr_12_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authObjForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](authObjForm_r3.get("DESC").value);
} }
function AuthorizationComponent_table_8_tr_12_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_table_8_tr_12_td_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.openAuthValueModal(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authObjForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", authObjForm_r3.get("AUTH_VALUE").value ? authObjForm_r3.get("AUTH_VALUE").value : "Click to maintain", "");
} }
const _c1 = function (a0, a1, a2) { return { "green-light": a0, "yellow-light": a1, "red-light": a2 }; };
function AuthorizationComponent_table_8_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_table_8_tr_12_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const i_r4 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.checkAuthObject(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthorizationComponent_table_8_tr_12_td_3_Template, 3, 5, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AuthorizationComponent_table_8_tr_12_td_4_Template, 4, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_table_8_tr_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const i_r4 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.setFullPermission(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthorizationComponent_table_8_tr_12_td_8_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AuthorizationComponent_table_8_tr_12_td_9_Template, 3, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authObjForm_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed", authObjForm_r3.get("ROW_TYPE").value === "FIELD" && authObjForm_r3.get("COLLAPSED").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", authObjForm_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", authObjForm_r3.get("ROW_TYPE").value === "OBJECT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", authObjForm_r3.get("ROW_TYPE").value === "FIELD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c1, authObjForm_r3.get("STATUS").value === "green", authObjForm_r3.get("STATUS").value === "yellow", authObjForm_r3.get("STATUS").value === "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", authObjForm_r3.get("ROW_TYPE").value === "OBJECT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", authObjForm_r3.get("ROW_TYPE").value === "FIELD");
} }
function AuthorizationComponent_table_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_table_8_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.checkAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Authorization Object / Field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description / Authorization Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AuthorizationComponent_table_8_tr_12_Template, 10, 13, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.authObjFormArray.controls);
} }
function AuthorizationComponent_dk_app_attribute_form2_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dk-app-attribute-form2", 41);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r1.authObjAttr)("formGroup", ctx_r1.newAuthFieldValueForm)("isSmallSize", true)("readonly", false);
} }
const _c2 = function (a0) { return { "show": a0 }; };
const _c3 = function (a0) { return { "display": a0 }; };
class AuthorizationComponent {
    constructor(fb, identityService, entityService, messageService, attributeControlService) {
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
    get displayAuthValueModal() { return this.isAuthValueModalShown ? 'block' : 'none'; }
    get displayAuthObjectModal() { return this.isAuthObjectModalShown ? 'block' : 'none'; }
    ngOnInit() {
    }
    ngOnChanges() {
        if (!this.mainForm) {
            return;
        }
        this.authObjFormArray = this.mainForm.get(this.ctrlName);
        this.authObjFormArray.controls.forEach(ctrl => {
            if (ctrl.get('ROW_TYPE').value === 'FIELD') {
                ctrl.get('CHECKED').disable();
            }
        });
    }
    checkAll() {
        this.authObjFormArray.controls.forEach(authObjCtrl => authObjCtrl.get('CHECKED').setValue(!this.selectAll));
        this.selectAll = !this.selectAll;
    }
    checkAuthObject(idx) {
        const currentAuthObjCtrl = this.authObjFormArray.at(idx);
        this.authObjFormArray.controls.forEach((authObjCtrl, index) => {
            if (index <= idx) {
                return;
            }
            if (authObjCtrl.get('NODE_ID').value === currentAuthObjCtrl.get('NODE_ID').value) {
                authObjCtrl.get('CHECKED').setValue(!currentAuthObjCtrl.get('CHECKED').value);
            }
        });
    }
    add() {
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
            this.entityService.getElementMeta('AUTH_OBJ_NAME')
                .subscribe(elementMeta => {
                const attribute = elementMeta;
                attribute.ATTR_GUID = elementMeta.ELEMENT_ID;
                attribute.ATTR_NAME = elementMeta.ELEMENT_ID;
                attribute.DATA_ELEMENT = elementMeta.ELEMENT_ID;
                this.authObjAttr = this.attributeControlService.toSingleAttributeControl(attribute);
                this.authObjAttr.name = 'OBJ_NAME';
            });
        }
        this.isAuthObjectModalShown = true;
    }
    closeAuthObjectModal() {
        this.isAuthObjectModalShown = false;
    }
    addAuthObject() {
        const authObjName = this.newAuthFieldValueForm.get('OBJ_NAME').value;
        this.identityService.getAuthObjectDetail(authObjName)
            .subscribe(data => {
            if ('ENTITY_ID' in data) {
                this.newAuthFieldValueForm.get('auth_object_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);
                this.newAuthFieldValueForm.get('DESC').setValue(data['authObject'][0]['DESC']);
                this.authObjFormArray.push(this.newAuthFieldValueForm);
                data['relationships'][0].values.forEach(value => {
                    this.authObjFormArray.push(this.fb.group({
                        CHECKED: [{ value: '', disabled: true }],
                        COLLAPSED: false,
                        NODE_ID: this.nodeID,
                        STATUS: 'red',
                        RELATIONSHIP_INSTANCE_GUID: '',
                        auth_object_INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                        AUTH_VALUE: '',
                        OBJ_NAME: authObjName,
                        DESC: this.newAuthFieldValueForm.get('DESC').value,
                        ROW_TYPE: 'FIELD',
                        FIELD_NAME: value['PARTNER_INSTANCES'][0]['authField'][0]['FIELD_NAME'],
                        DATA_ELEMENT: value['PARTNER_INSTANCES'][0]['authField'][0]['DATA_ELEMENT']
                    }));
                });
            }
            else {
                const errorMessages = data;
                errorMessages.forEach(msg => this.messageService.add(msg));
            }
            this.isAuthObjectModalShown = false;
        });
    }
    delete() {
        let index = this.authObjFormArray.controls.findIndex(authObjCtrl => authObjCtrl.get('CHECKED').value);
        while (index !== -1) {
            this.authObjFormArray.removeAt(index);
            this.authObjFormArray.markAsDirty();
            index = this.authObjFormArray.controls.findIndex(authObjCtrl => authObjCtrl.get('CHECKED').value);
        }
    }
    onSearchHelp(rowID, exportObject) {
        const afterExportFn = function (context, rowIDx) {
            return () => context.onChangeCategory(rowIDx);
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModalByEntity('authObject', 'authObject', exportObject, this.readonly, null, null, afterExportFn);
    }
    expendCollapse(idx) {
        const currentCtrl = this.authObjFormArray.at(idx);
        const parentNode = currentCtrl.get('NODE_ID').value;
        this.authObjFormArray.controls.forEach(appAuthObjCtrl => {
            if (appAuthObjCtrl.get('NODE_ID').value === parentNode) {
                appAuthObjCtrl.get('COLLAPSED').setValue(!appAuthObjCtrl.get('COLLAPSED').value);
            }
        });
    }
    openAuthValueModal(idx) {
        this.isAuthValueModalShown = true;
        this.currentAuthFieldValueForm = this.authObjFormArray.at(idx);
    }
    addAuthValue() {
        if (this.authValueComponent.generateAuthValue()) {
            this._coordinateStatus(this.currentAuthFieldValueForm);
            this.isAuthValueModalShown = false;
        }
    }
    setFullPermission(idx) {
        const currentAuthObjForm = this.authObjFormArray.at(idx);
        if (currentAuthObjForm.get('STATUS').value === 'green') {
            return;
        }
        if (currentAuthObjForm.get('ROW_TYPE').value === 'OBJECT') {
            currentAuthObjForm.get('STATUS').setValue('green');
            this.authObjFormArray.controls.forEach(appAuthObjForm => {
                if (appAuthObjForm.get('NODE_ID').value === currentAuthObjForm.get('NODE_ID').value &&
                    appAuthObjForm.get('ROW_TYPE').value === 'FIELD') {
                    appAuthObjForm.get('AUTH_VALUE').setValue('"*"');
                    appAuthObjForm.get('AUTH_VALUE').markAsDirty();
                    appAuthObjForm.get('STATUS').setValue('green');
                }
            });
        }
        else { // Field
            currentAuthObjForm.get('AUTH_VALUE').setValue('"*"');
            currentAuthObjForm.get('AUTH_VALUE').markAsDirty();
            currentAuthObjForm.get('STATUS').setValue('green');
            this._coordinateStatus(currentAuthObjForm);
        }
    }
    _coordinateStatus(appAuthObjForm) {
        const parentAuthObjectCtrl = this.authObjFormArray.controls.find(ctrl => ctrl.get('ROW_TYPE').value === 'OBJECT' &&
            ctrl.get('NODE_ID').value === appAuthObjForm.get('NODE_ID').value);
        if (this.authObjFormArray.controls.findIndex(ctrl => ctrl.get('ROW_TYPE').value === 'FIELD' &&
            ctrl.get('NODE_ID').value === appAuthObjForm.get('NODE_ID').value &&
            ctrl.get('STATUS').value === 'red') === -1) {
            parentAuthObjectCtrl.get('STATUS').setValue('green');
        }
        else {
            if (this.authObjFormArray.controls.findIndex(ctrl => ctrl.get('ROW_TYPE').value === 'FIELD' &&
                ctrl.get('NODE_ID').value === appAuthObjForm.get('NODE_ID').value &&
                ctrl.get('STATUS').value === 'green') === -1) {
                parentAuthObjectCtrl.get('STATUS').setValue('red');
            }
            else {
                parentAuthObjectCtrl.get('STATUS').setValue('yellow');
            }
        }
    }
}
AuthorizationComponent.ɵfac = function AuthorizationComponent_Factory(t) { return new (t || AuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"])); };
AuthorizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorizationComponent, selectors: [["app-authorization"]], viewQuery: function AuthorizationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["SearchHelpComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_3__["AuthValueComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.authValueComponent = _t.first);
    } }, inputs: { readonly: "readonly", mainForm: "mainForm", ctrlName: "ctrlName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 37, vars: 18, consts: [[1, "dk-auth-main", "mx-3"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end"], ["type", "button", "id", "remove-object", 1, "btn", "btn-light", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-minus"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus"], ["class", "table table-bordered table-sm dk-table", 3, "formGroup", 4, "ngIf"], ["id", "maintainAuthValueDialog", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "maintainAuthValueDialogTitle", 1, "modal-title"], [1, "modal-body"], [3, "authFieldValueForm", "readonly"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["id", "addAuthObject", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog"], ["id", "addAuthObjectTitle", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "table", "table-bordered", "table-sm", "dk-table", 3, "formGroup"], [1, "thead-light"], [1, "dk-checkbox"], ["name", "btSelectAll", "type", "checkbox", 3, "click"], [1, "dk-auth-object"], [1, "dk-auth-status"], [1, "dk-auth-value"], ["class", "treegrid-expanded", 3, "collapsed", 4, "ngFor", "ngForOf"], [1, "treegrid-expanded"], [1, "dk-checkbox", 3, "formGroup"], ["type", "checkbox", "formControlName", "CHECKED", 1, "form-control", "form-control-sm", 3, "click"], [4, "ngIf"], ["type", "button", "id", "add", "title", "Full Permission", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "traffic-light", 3, "ngClass"], [1, "treegrid-expander", 3, "ngClass", "click"], [1, "treegrid-indent"], [1, "treegrid-expander"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly"]], template: function AuthorizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_2_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_5_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthorizationComponent_table_8_Template, 13, 2, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Maintain Authorization Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-auth-value", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_19_listener() { return ctx.addAuthValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add Authorization Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_27_listener() { return ctx.closeAuthObjectModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AuthorizationComponent_dk_app_attribute_form2_31_Template, 1, 4, "dk-app-attribute-form2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_33_listener() { return ctx.closeAuthObjectModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorizationComponent_Template_button_click_35_listener() { return ctx.addAuthObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx.isAuthValueModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, ctx.displayAuthValueModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("authFieldValueForm", ctx.currentAuthFieldValueForm)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.isAuthObjectModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, ctx.displayAuthObjectModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newAuthFieldValueForm && ctx.authObjAttr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], _auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_3__["AuthValueComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"]], styles: [".dk-auth-main[_ngcontent-%COMP%] {\n  display: block;\n}\n.dk-checkbox[_ngcontent-%COMP%] {\n  width: 1rem;\n}\n.dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.dk-auth-object[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.dk-auth-status[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n.dk-auth-value[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.collapsed[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JpemF0aW9uL2F1dGhvcml6YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay1hdXRoLW1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kay1jaGVja2JveCB7XG4gIHdpZHRoOiAxcmVtO1xufVxuLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay10YWJsZSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGstYXV0aC1vYmplY3Qge1xuICB3aWR0aDogMjByZW07XG59XG4uZGstYXV0aC1zdGF0dXMge1xuICB3aWR0aDogM3JlbTtcbn1cbi5kay1hdXRoLXZhbHVlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29sbGFwc2VkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authorization',
                templateUrl: './authorization.component.html',
                styleUrls: ['./authorization.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mainForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ctrlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchHelpComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [jor_angular__WEBPACK_IMPORTED_MODULE_2__["SearchHelpComponent"], { static: true }]
        }], authValueComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_3__["AuthValueComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "Cw5F":
/*!***********************************!*\
  !*** ./src/app/dialog.service.ts ***!
  \***********************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class DialogService {
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns observable resolving to `true`=confirm or `false`=cancel
     */
    confirm(message) {
        const confirmation = window.confirm(message || 'Is it OK?');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(confirmation);
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "DNJp":
/*!******************************************************************!*\
  !*** ./src/app/authorization/auth-value/auth-value.component.ts ***!
  \******************************************************************/
/*! exports provided: AuthValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthValueComponent", function() { return AuthValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../identity */ "IJvj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_value_singles_auth_value_singles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-value-singles/auth-value-singles.component */ "rmH7");
/* harmony import */ var _auth_value_selopts_auth_value_selopts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-value-selopts/auth-value-selopts.component */ "aFfz");










const _c0 = function (a0, a1) { return { "green-light": a0, "red-light": a1 }; };
function AuthValueComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r0.authFieldValueForm.get("STATUS").value === "green", ctx_r0.authFieldValueForm.get("STATUS").value === "red"));
} }
function AuthValueComponent_div_13_app_auth_value_singles_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-auth-value-singles", 13);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("singleValueArray", ctx_r2.singleValueArray)("attrCtrl", ctx_r2.attrCtrl)("readonly", ctx_r2.readonly);
} }
function AuthValueComponent_div_13_app_auth_value_selopts_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-auth-value-selopts", 14);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectOptionArray", ctx_r3.selectOptionArray)("attrCtrl", ctx_r3.attrCtrl)("highAttrCtrl", ctx_r3.highAttrCtrl)("readonly", ctx_r3.readonly);
} }
function AuthValueComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthValueComponent_div_13_app_auth_value_singles_1_Template, 1, 3, "app-auth-value-singles", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthValueComponent_div_13_app_auth_value_selopts_2_Template, 1, 4, "app-auth-value-selopts", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.tabStrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
} }
class AuthValueComponent {
    constructor(fb, entityService, attributeControlService) {
        this.fb = fb;
        this.entityService = entityService;
        this.attributeControlService = attributeControlService;
        this.tabStrip = 1;
    }
    ngOnInit() {
    }
    ngOnChanges() {
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
        const authValues = this.authFieldValueForm.get('AUTH_VALUE').value;
        this.entityService.getElementMeta(this.authFieldValueForm.get('DATA_ELEMENT').value)
            .subscribe(attrCtrl => {
            const attribute = attrCtrl;
            attribute.ATTR_GUID = attrCtrl.ELEMENT_ID;
            attribute.ATTR_NAME = attrCtrl.ELEMENT_ID;
            attribute.DATA_ELEMENT = attrCtrl.ELEMENT_ID;
            this.attrCtrl = this.attributeControlService.toSingleAttributeControl(attribute);
            this.attrCtrl.name = 'Low';
            this.highAttrCtrl = this.attributeControlService.toSingleAttributeControl(attribute);
            this.highAttrCtrl.name = 'High';
        });
        this.fieldName = this.authFieldValueForm.get('FIELD_NAME').value;
        if (!authValues || !JSON.parse(authValues)) {
            this.singleValueArray = this.fb.array([this.fb.group({ Low: '' })]);
            this.selectOptionArray = this.fb.array([this.fb.group({
                    Operator: [{ value: _identity__WEBPACK_IMPORTED_MODULE_1__["Operator"].Between, disabled: this.readonly }],
                    Option: [{ value: _identity__WEBPACK_IMPORTED_MODULE_1__["Option"].Include, disabled: this.readonly }], Low: '', High: ''
                })]);
        }
        else {
            const authValueArray = JSON.parse(authValues);
            if (authValueArray === '*') {
                this._setFullPermission(true);
            }
            else {
                const singleValues = [];
                const selectOptions = [];
                authValueArray.forEach(authValue => {
                    if (typeof authValue === 'string') {
                        singleValues.push(this.fb.group({ Low: authValue }));
                    }
                    else {
                        selectOptions.push(this.fb.group({
                            Operator: [{ value: authValue['Operator'], disabled: this.readonly }],
                            Option: [{ value: authValue['Option'], disabled: this.readonly }],
                            Low: authValue['Low'],
                            High: authValue['High']
                        }));
                    }
                });
                if (singleValues.length > 0) {
                    this.singleValueArray = this.fb.array(singleValues);
                    this.tabStrip = 1;
                }
                else {
                    this.singleValueArray = this.fb.array([this.fb.group({ Low: '' })]);
                    this.tabStrip = 2;
                }
                if (selectOptions.length > 0) {
                    this.selectOptionArray = this.fb.array(selectOptions);
                }
                else {
                    this.selectOptionArray = this.fb.array([this.fb.group({
                            Operator: [{ value: _identity__WEBPACK_IMPORTED_MODULE_1__["Operator"].Between, disabled: this.readonly }],
                            Option: [{ value: _identity__WEBPACK_IMPORTED_MODULE_1__["Option"].Include, disabled: this.readonly }], Low: '', High: ''
                        })]);
                    this.tabStrip = 1;
                }
            }
        }
    }
    switchTabStrip(tabStripID) {
        this.tabStrip = tabStripID;
    }
    generateAuthValue() {
        if (!this.singleValueArray.dirty && !this.selectOptionArray.dirty) {
            return true;
        }
        if (this.fullPermission) {
            return true;
        }
        const authValues = [];
        let hasErrors = false;
        this.singleValueArray.controls.forEach(singleValueCtrl => {
            const singleValue = singleValueCtrl.get('Low').value;
            if (singleValue && authValues.findIndex(value => value === singleValue) === -1) {
                authValues.push(singleValue);
            }
        });
        this.selectOptionArray.controls.forEach(selectOptionCtrl => {
            const selectOption = selectOptionCtrl.value;
            if (selectOption.Low) {
                if (selectOption.Operator === _identity__WEBPACK_IMPORTED_MODULE_1__["Operator"].Between &&
                    selectOption.Low >= selectOption.High) {
                    selectOptionCtrl.get('Low').setErrors({ message: 'Low value is larger or equal to high value' });
                    hasErrors = true;
                }
                else {
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
        }
        else {
            this.authFieldValueForm.get('AUTH_VALUE').setValue(JSON.stringify(authValues, null, ' '));
            this.authFieldValueForm.get('STATUS').setValue('green');
        }
        this.authFieldValueForm.get('AUTH_VALUE').markAsDirty();
        return true;
    }
    checkFullPermission() {
        this._setFullPermission(!this.fullPermission);
        this.authFieldValueForm.get('AUTH_VALUE').markAsDirty();
    }
    _setFullPermission(isFull) {
        this.fullPermission = isFull;
        this.authFieldValueForm.get('STATUS').setValue(isFull ? 'green' : 'red');
        this.authFieldValueForm.get('AUTH_VALUE').setValue(isFull ? '"*"' : '');
        if (isFull) {
            this.singleValueArray = this.fb.array([]);
            this.selectOptionArray = this.fb.array([]);
        }
        else {
            this.singleValueArray = this.fb.array([this.fb.group({ Low: '' })]);
            this.selectOptionArray = this.fb.array([this.fb.group({
                    Operator: _identity__WEBPACK_IMPORTED_MODULE_1__["Operator"].Between, Option: _identity__WEBPACK_IMPORTED_MODULE_1__["Option"].Include,
                    Low: '', High: ''
                })]);
        }
    }
}
AuthValueComponent.ɵfac = function AuthValueComponent_Factory(t) { return new (t || AuthValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeControlService"])); };
AuthValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthValueComponent, selectors: [["app-auth-value"]], inputs: { authFieldValueForm: "authFieldValueForm", readonly: "readonly" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 8, consts: [["role", "toolbar", 1, "btn-toolbar"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "fullPermission", 1, "custom-control-input", 3, "ngModel", "disabled", "ngModelChange", "click"], ["for", "fullPermission", 1, "custom-control-label"], ["class", "ml-4 mt-1 traffic-light", 3, "ngClass", 4, "ngIf"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], ["class", "mt-2", 3, "ngSwitch", 4, "ngIf"], [1, "ml-4", "mt-1", "traffic-light", 3, "ngClass"], [1, "mt-2", 3, "ngSwitch"], [3, "singleValueArray", "attrCtrl", "readonly", 4, "ngSwitchCase"], [3, "selectOptionArray", "attrCtrl", "highAttrCtrl", "readonly", 4, "ngSwitchCase"], [3, "singleValueArray", "attrCtrl", "readonly"], [3, "selectOptionArray", "attrCtrl", "highAttrCtrl", "readonly"]], template: function AuthValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthValueComponent_Template_input_ngModelChange_2_listener($event) { return ctx.fullPermission = $event; })("click", function AuthValueComponent_Template_input_click_2_listener() { return ctx.checkFullPermission(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enable Full Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuthValueComponent_span_5_Template, 1, 4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthValueComponent_Template_a_click_8_listener() { return ctx.switchTabStrip(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Single Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthValueComponent_Template_a_click_11_listener() { return ctx.switchTabStrip(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthValueComponent_div_13_Template, 3, 3, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fullPermission)("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authFieldValueForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tabStrip === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tabStrip === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attrCtrl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _auth_value_singles_auth_value_singles_component__WEBPACK_IMPORTED_MODULE_5__["AuthValueSinglesComponent"], _auth_value_selopts_auth_value_selopts_component__WEBPACK_IMPORTED_MODULE_6__["AuthValueSeloptsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vYXV0aC12YWx1ZS9hdXRoLXZhbHVlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-value',
                templateUrl: './auth-value.component.html',
                styleUrls: ['./auth-value.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeControlService"] }]; }, { authFieldValueForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "E5ku":
/*!*********************************************************************************************************!*\
  !*** ./src/app/permission/permission-detail/permission-detail-user/permission-detail-user.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PermissionDetailUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDetailUserComponent", function() { return PermissionDetailUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PermissionDetailUserComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailUserComponent_tr_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const userForm_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSearchHelp(i_r2, userForm_r1); });
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
} if (rf & 2) {
    const userForm_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userForm_r1);
} }
class PermissionDetailUserComponent {
    constructor() { }
    ngOnInit() {
        this.userFormArray = this.mainForm.get('users');
    }
    onSearchHelp(rowID, exportObject) {
        const afterExportFn = function (context, rowIDx) {
            return () => context.onChangeKey(rowIDx);
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModalBySearchHelp('USER', 'USER_ID', 'USER_ID', exportObject, this.readonly, afterExportFn);
    }
}
PermissionDetailUserComponent.ɵfac = function PermissionDetailUserComponent_Factory(t) { return new (t || PermissionDetailUserComponent)(); };
PermissionDetailUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermissionDetailUserComponent, selectors: [["app-permission-detail-user"]], viewQuery: function PermissionDetailUserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["SearchHelpComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
    } }, inputs: { readonly: "readonly", mainForm: "mainForm" }, decls: 12, vars: 2, consts: [[1, "table", "table-bordered", "table-sm", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light"], [1, "dk-name"], [1, "dk-icon"], ["formArrayName", "users", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "USER_ID", "readonly", "", 1, "form-control", "form-control-sm"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], ["type", "text", "formControlName", "USER_NAME", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "SYNCED", "readonly", "", 1, "form-control", "form-control-sm"]], template: function PermissionDetailUserComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userFormArray.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["SearchHelpComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-icon[_ngcontent-%COMP%]{\n  width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVybWlzc2lvbi9wZXJtaXNzaW9uLWRldGFpbC9wZXJtaXNzaW9uLWRldGFpbC11c2VyL3Blcm1pc3Npb24tZGV0YWlsLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wZXJtaXNzaW9uL3Blcm1pc3Npb24tZGV0YWlsL3Blcm1pc3Npb24tZGV0YWlsLXVzZXIvcGVybWlzc2lvbi1kZXRhaWwtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1uYW1le1xuICB3aWR0aDogMjByZW07XG59XG4uZGstaWNvbntcbiAgd2lkdGg6IDVyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionDetailUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permission-detail-user',
                templateUrl: './permission-detail-user.component.html',
                styleUrls: ['./permission-detail-user.component.css']
            }]
    }], function () { return []; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mainForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchHelpComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [jor_angular__WEBPACK_IMPORTED_MODULE_2__["SearchHelpComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "F0jV":
/*!******************************************!*\
  !*** ./src/app/custom.reuse.strategy.ts ***!
  \******************************************/
/*! exports provided: CustomReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomReuseStrategy", function() { return CustomReuseStrategy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CustomReuseStrategy {
    constructor() {
        this.routesToCache = ['users', 'apps', 'app-categories', 'auth-objects', 'permissions', 'profiles'];
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
CustomReuseStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomReuseStrategy, factory: CustomReuseStrategy.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomReuseStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "H3s1":
/*!*************************************!*\
  !*** ./src/app/identity.service.ts ***!
  \*************************************/
/*! exports provided: IdentityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return IdentityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./identity */ "IJvj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ui-logon-angular */ "jNR/");
















const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class IdentityService {
    constructor(http, messageService, uiMapperService, router) {
        this.http = http;
        this.messageService = messageService;
        this.uiMapperService = uiMapperService;
        this.router = router;
        this.originalHost = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].originalHost;
        this.pseudoNodeID = 0;
    }
    setSession(data) {
        this.session = data;
    }
    get Session() {
        if (this.session) {
            return this.session;
        }
        const defaultSession = new ui_logon_angular__WEBPACK_IMPORTED_MODULE_10__["Session"]();
        defaultSession.USER_ID = 'DH001';
        defaultSession.LANGUAGE = 'EN';
        return defaultSession;
    }
    get CurrentTime() {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
    }
    searchPermissions(permissionID, permissionDesc) {
        const queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_4__["QueryObject"]();
        queryObject.ENTITY_ID = 'permission';
        queryObject.RELATION_ID = 'r_role';
        queryObject.PROJECTION = ['NAME', 'DESCRIPTION',
            { FIELD_NAME: 'CREATED_BY', RELATION_ID: 'permission' },
            { FIELD_NAME: 'CREATE_TIME', RELATION_ID: 'permission' },
            { FIELD_NAME: 'CHANGED_BY', RELATION_ID: 'permission' },
            { FIELD_NAME: 'CHANGE_TIME', RELATION_ID: 'permission' }];
        queryObject.FILTER = [];
        if (permissionID) {
            if (permissionID.includes('*') || permissionID.includes('%')) {
                queryObject.FILTER.push({ FIELD_NAME: 'NAME', OPERATOR: 'CN', LOW: permissionID });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'NAME', OPERATOR: 'EQ', LOW: permissionID });
            }
        }
        if (permissionDesc) {
            if (permissionDesc.includes('*')) {
                permissionDesc = permissionDesc.replace(/\*/gi, '%');
                queryObject.FILTER.push({ FIELD_NAME: 'DESCRIPTION', OPERATOR: 'CN', LOW: permissionDesc });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'DESCRIPTION', OPERATOR: 'EQ', LOW: permissionDesc });
            }
        }
        queryObject.SORT = [{ FIELD_NAME: 'CHANGE_TIME', RELATION_ID: 'permission', ORDER: 'DESC' }];
        return this.http.post(this.originalHost + `/api/query`, queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchObjects')));
    }
    getPermissionDetail(permissionName) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_role', NAME: permissionName },
            piece: { RELATIONS: ['permission', 'r_role'],
                RELATIONSHIPS: [
                    {
                        RELATIONSHIP_ID: 'rs_user_role',
                        PARTNER_ENTITY_PIECES: { RELATIONS: ['r_user'] }
                    },
                    {
                        RELATIONSHIP_ID: 'rs_role_category_profile',
                        PARTNER_ENTITY_PIECES: [
                            { ENTITY_ID: 'category',
                                piece: { RELATIONS: ['r_app_category'],
                                    RELATIONSHIPS: [{ RELATIONSHIP_ID: 'rs_app_category',
                                            PARTNER_ENTITY_PIECES: { RELATIONS: ['app'] } }] } },
                            { ENTITY_ID: 'authProfile',
                                piece: { RELATIONS: ['authProfile'],
                                    RELATIONSHIPS: [{ RELATIONSHIP_ID: 'rs_auth_profile_object',
                                            PARTNER_ENTITY_PIECES: { RELATIONS: ['authObject'],
                                                RELATIONSHIPS: [{ RELATIONSHIP_ID: 'rs_auth_object_field',
                                                        PARTNER_ENTITY_PIECES: { RELATIONS: ['authField'] } }] } }] } }
                        ]
                    }
                ]
            }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPermissionDetail')));
    }
    getPermissionByName(permissionName) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_role', NAME: permissionName },
            piece: { RELATIONS: ['r_role'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPermissionByName')));
    }
    searchApps(appID, appName) {
        const queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_4__["QueryObject"]();
        queryObject.ENTITY_ID = 'app';
        queryObject.RELATION_ID = 'app';
        queryObject.PROJECTION = ['APP_ID', 'NAME', 'ROUTE_LINK', 'IS_EXTERNAL', 'CREATED_BY', 'CREATE_TIME', 'CHANGED_BY', 'CHANGE_TIME'];
        queryObject.FILTER = [];
        if (appID) {
            if (appID.includes('*') || appID.includes('%')) {
                queryObject.FILTER.push({ FIELD_NAME: 'APP_ID', OPERATOR: 'CN', LOW: appID });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'APP_ID', OPERATOR: 'EQ', LOW: appID });
            }
        }
        if (appName) {
            if (appName.includes('*')) {
                appName = appName.replace(/\*/gi, '%');
                queryObject.FILTER.push({ FIELD_NAME: 'NAME', OPERATOR: 'CN', LOW: appName });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'NAME', OPERATOR: 'EQ', LOW: appName });
            }
        }
        queryObject.SORT = [{ FIELD_NAME: 'CHANGE_TIME', ORDER: 'DESC' }];
        return this.http.post(this.originalHost + `/api/query`, queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchObjects')));
    }
    getAppDetail(appID) {
        const pieceObject = {
            ID: { RELATION_ID: 'app', APP_ID: appID },
            piece: {
                RELATIONS: ['app'],
                RELATIONSHIPS: [
                    {
                        RELATIONSHIP_ID: 'rs_app_category',
                        PARTNER_ENTITY_PIECES: { RELATIONS: ['r_app_category'] }
                    },
                    {
                        RELATIONSHIP_ID: 'rs_app_auth',
                        PARTNER_ENTITY_PIECES: {
                            RELATIONS: ['authObject'],
                            RELATIONSHIPS: [
                                {
                                    RELATIONSHIP_ID: 'rs_auth_object_field',
                                    PARTNER_ENTITY_PIECES: { RELATIONS: ['authField'] }
                                }
                            ]
                        }
                    }
                ]
            }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAppDetail')));
    }
    getAppByID(appID) {
        const pieceObject = {
            ID: { RELATION_ID: 'app', APP_ID: appID },
            piece: { RELATIONS: ['app'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAppByID')));
    }
    getCategoryName(categoryID) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_app_category', ID: categoryID },
            piece: { RELATIONS: ['r_app_category'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(instance => {
            return 'INSTANCE_GUID' in instance ?
                {
                    INSTANCE_GUID: instance['INSTANCE_GUID'],
                    NAME: instance['r_app_category'] ? instance['r_app_category'][0]['NAME'] : '',
                    ICON: instance['r_app_category'] ? instance['r_app_category'][0]['ICON'] : ''
                } : instance[0];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCategoryName')));
    }
    searchAuthObjects(authObjName, authObjDesc) {
        const queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_4__["QueryObject"]();
        queryObject.ENTITY_ID = 'authObject';
        queryObject.RELATION_ID = 'authObject';
        queryObject.PROJECTION = ['OBJ_NAME', 'DESC', 'CREATED_BY', 'CREATE_TIME', 'CHANGED_BY', 'CHANGE_TIME'];
        queryObject.FILTER = [];
        if (authObjName) {
            if (authObjName.includes('*') || authObjName.includes('%')) {
                queryObject.FILTER.push({ FIELD_NAME: 'OBJ_NAME', OPERATOR: 'CN', LOW: authObjName });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'OBJ_NAME', OPERATOR: 'EQ', LOW: authObjName });
            }
        }
        if (authObjDesc) {
            if (authObjDesc.includes('*')) {
                authObjDesc = authObjDesc.replace(/\*/gi, '%');
                queryObject.FILTER.push({ FIELD_NAME: 'DESC', OPERATOR: 'CN', LOW: authObjDesc });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'DESC', OPERATOR: 'EQ', LOW: authObjDesc });
            }
        }
        queryObject.SORT = [{ FIELD_NAME: 'CHANGE_TIME', ORDER: 'DESC' }];
        return this.http.post(this.originalHost + `/api/query`, queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchAuthObjects')));
    }
    getAuthObjectDetail(authObjName) {
        const pieceObject = {
            ID: { RELATION_ID: 'authObject', OBJ_NAME: authObjName },
            piece: {
                RELATIONS: ['authObject'],
                RELATIONSHIPS: [
                    {
                        RELATIONSHIP_ID: 'rs_auth_object_field',
                        PARTNER_ENTITY_PIECES: { RELATIONS: ['authField'] }
                    }
                ]
            }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAuthObjectDetail')));
    }
    getAuthObjectByName(authObjName) {
        const pieceObject = {
            ID: { RELATION_ID: 'authObject', OBJ_NAME: authObjName },
            piece: { RELATIONS: ['authObject'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAuthObjectByName')));
    }
    getAuthFieldInfo(authFieldName) {
        const pieceObject = {
            ID: { RELATION_ID: 'authField', FIELD_NAME: authFieldName },
            piece: { RELATIONS: ['authField'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(instance => {
            return 'INSTANCE_GUID' in instance ?
                {
                    INSTANCE_GUID: instance['INSTANCE_GUID'],
                    NAME: instance['authField'] ? instance['authField'][0]['FIELD_NAME'] : '',
                    DATA_ELEMENT: instance['authField'] ? instance['authField'][0]['DATA_ELEMENT'] : ''
                } : instance[0];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAuthObjectByName')));
    }
    searchAppCategories(appCategoryID, appCategoryName) {
        const queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_4__["QueryObject"]();
        queryObject.ENTITY_ID = 'category';
        queryObject.RELATION_ID = 'r_app_category';
        queryObject.PROJECTION = ['ID', 'NAME', 'ICON',
            { FIELD_NAME: 'CREATED_BY', RELATION_ID: 'category' },
            { FIELD_NAME: 'CREATE_TIME', RELATION_ID: 'category' },
            { FIELD_NAME: 'CHANGED_BY', RELATION_ID: 'category' },
            { FIELD_NAME: 'CHANGE_TIME', RELATION_ID: 'category' }];
        queryObject.FILTER = [];
        if (appCategoryID) {
            if (appCategoryID.includes('*') || appCategoryID.includes('%')) {
                queryObject.FILTER.push({ FIELD_NAME: 'ID', OPERATOR: 'CN', LOW: appCategoryID });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'ID', OPERATOR: 'EQ', LOW: appCategoryID });
            }
        }
        if (appCategoryName) {
            if (appCategoryName.includes('*')) {
                appCategoryName = appCategoryName.replace(/\*/gi, '%');
                queryObject.FILTER.push({ FIELD_NAME: 'NAME', OPERATOR: 'CN', LOW: appCategoryName });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'NAME', OPERATOR: 'EQ', LOW: appCategoryName });
            }
        }
        queryObject.FILTER.push({ RELATION_ID: 'category', FIELD_NAME: 'TYPE', OPERATOR: 'EQ', LOW: 'APP' });
        queryObject.SORT = [{ FIELD_NAME: 'CHANGE_TIME', RELATION_ID: 'category', ORDER: 'DESC' }];
        return this.http.post(this.originalHost + `/api/query`, queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchAppCategories')));
    }
    getAppCategoryDetail(appCategoryID) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_app_category', ID: appCategoryID },
            piece: {
                RELATIONS: ['category', 'r_app_category'],
                RELATIONSHIPS: [
                    {
                        RELATIONSHIP_ID: 'rs_app_category',
                        PARTNER_ENTITY_PIECES: { RELATIONS: ['app'] }
                    },
                    {
                        RELATIONSHIP_ID: 'rs_role_category_profile',
                        PARTNER_ENTITY_PIECES: [
                            {
                                ENTITY_ID: 'permission',
                                piece: { RELATIONS: ['r_role'] }
                            }
                        ]
                    }
                ]
            }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAppCategoryDetail')));
    }
    getAppCategoryByID(appCategoryID) {
        const pieceObject = {
            ID: { RELATION_ID: 'r_app_category', ID: appCategoryID },
            piece: { RELATIONS: ['r_app_category'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAppCategoryByID')));
    }
    searchAuthProfiles(profileName, profileDesc) {
        const queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_4__["QueryObject"]();
        queryObject.ENTITY_ID = 'authProfile';
        queryObject.RELATION_ID = 'authProfile';
        queryObject.PROJECTION = ['PROFILE_NAME', 'DESC', 'CREATED_BY', 'CREATE_TIME', 'CHANGED_BY', 'CHANGE_TIME'];
        queryObject.FILTER = [];
        if (profileName) {
            if (profileName.includes('*') || profileName.includes('%')) {
                queryObject.FILTER.push({ FIELD_NAME: 'PROFILE_NAME', OPERATOR: 'CN', LOW: profileName });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'PROFILE_NAME', OPERATOR: 'EQ', LOW: profileName });
            }
        }
        if (profileDesc) {
            if (profileDesc.includes('*')) {
                profileDesc = profileDesc.replace(/\*/gi, '%');
                queryObject.FILTER.push({ FIELD_NAME: 'DESC', OPERATOR: 'CN', LOW: profileDesc });
            }
            else {
                queryObject.FILTER.push({ FIELD_NAME: 'DESC', OPERATOR: 'EQ', LOW: profileDesc });
            }
        }
        queryObject.SORT = [{ FIELD_NAME: 'CHANGE_TIME', ORDER: 'DESC' }];
        return this.http.post(this.originalHost + `/api/query`, queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchAuthProfiles')));
    }
    getAuthProfileDetail(profileName) {
        const pieceObject = {
            ID: { RELATION_ID: 'authProfile', PROFILE_NAME: profileName },
            piece: {
                RELATIONS: ['authProfile'],
                RELATIONSHIPS: [
                    {
                        RELATIONSHIP_ID: 'rs_auth_profile_object',
                        PARTNER_ENTITY_PIECES: {
                            RELATIONS: ['authObject'],
                            RELATIONSHIPS: [
                                {
                                    RELATIONSHIP_ID: 'rs_auth_object_field',
                                    PARTNER_ENTITY_PIECES: { RELATIONS: ['authField'] }
                                }
                            ]
                        }
                    }
                ]
            }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAuthProfileDetail')));
    }
    getAuthProfileByName(profileName) {
        const pieceObject = {
            ID: { RELATION_ID: 'authProfile', PROFILE_NAME: profileName },
            piece: { RELATIONS: ['authProfile'] }
        };
        return this.http.post(this.originalHost + `/api/entity/instance/piece`, pieceObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAuthProfileByName')));
    }
    searchUsers(userID, userName) {
        const queryObject = new jor_angular__WEBPACK_IMPORTED_MODULE_4__["QueryObject"]();
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
    orchestrate(operations) {
        return this.http.post(this.originalHost + `/api/entity/orchestrate`, operations, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('orchestrate')));
    }
    save(entity) {
        if (entity['INSTANCE_GUID']) {
            return this.http.put(this.originalHost + `/api/entity`, entity, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveUser')));
        }
        else {
            return this.http.post(this.originalHost + `/api/entity`, entity, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('save')));
        }
    }
    delete(entityGUID) {
        return this.http.delete(this.originalHost + `/api/entity/instance/` + entityGUID, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    }
    parseProfileAuthObject(relationship) {
        const authorizations = [];
        if (!relationship) {
            return authorizations;
        }
        relationship.values.forEach(value => {
            const authorization = value['AUTH_VALUE'] ?
                JSON.parse(value['AUTH_VALUE']) : null;
            const status = authorization ?
                Object.values(authorization.AuthFieldValue).findIndex(authValue => !authValue) !== -1 ?
                    'yellow' : 'green' : 'red';
            authorizations.push({
                CHECKED: '',
                COLLAPSED: false,
                NODE_ID: value['RELATIONSHIP_INSTANCE_GUID'] || ++this.pseudoNodeID,
                STATUS: status,
                RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                auth_object_INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                AUTH_VALUE: value['AUTH_VALUE'],
                OBJ_NAME: value['PARTNER_INSTANCES'][0]['authObject'][0]['OBJ_NAME'],
                DESC: value['PARTNER_INSTANCES'][0]['authObject'][0]['DESC'],
                ROW_TYPE: 'OBJECT',
                FIELD_NAME: '',
                DATA_ELEMENT: '',
            });
            const authObjectFields = value['PARTNER_INSTANCES'][0]['relationships'][0];
            authObjectFields.values.forEach(value2 => {
                const authFieldName = value2['PARTNER_INSTANCES'][0]['authField'][0]['FIELD_NAME'];
                authorizations.push({
                    CHECKED: '',
                    COLLAPSED: false,
                    NODE_ID: value['RELATIONSHIP_INSTANCE_GUID'] || this.pseudoNodeID,
                    STATUS: authorization.AuthFieldValue[authFieldName] ?
                        authorization.AuthFieldValue[authFieldName].length > 0 ? 'green' : 'red' : 'red',
                    RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                    auth_object_INSTANCE_GUID: '',
                    AUTH_VALUE: authorization && authorization.AuthFieldValue[authFieldName]
                        && JSON.stringify(authorization.AuthFieldValue[authFieldName], null, ' '),
                    OBJ_NAME: value['PARTNER_INSTANCES'][0]['authObject'][0]['OBJ_NAME'],
                    DESC: '',
                    ROW_TYPE: 'FIELD',
                    FIELD_NAME: authFieldName,
                    DATA_ELEMENT: value2['PARTNER_INSTANCES'][0]['authField'][0]['DATA_ELEMENT'],
                });
            });
        });
        return authorizations;
    }
    composeAuthChanges(formArray, originalValue, relationshipID) {
        let authorization;
        let currentAuthObjectCtrl;
        let isAuthorizationChanged = false;
        formArray.controls.forEach(control => {
            const rowType = control.get('ROW_TYPE').value;
            if (rowType === 'OBJECT') {
                if (currentAuthObjectCtrl && isAuthorizationChanged) {
                    currentAuthObjectCtrl.get('AUTH_VALUE').setValue(JSON.stringify(authorization, null, ' '));
                    currentAuthObjectCtrl.get('AUTH_VALUE').markAsDirty();
                }
                currentAuthObjectCtrl = control;
                authorization = new _identity__WEBPACK_IMPORTED_MODULE_8__["Authorization"]();
                authorization.AuthObject = control.get('OBJ_NAME').value;
                authorization.AuthFieldValue = {};
                isAuthorizationChanged = false;
            }
            else { // Field
                if (control.dirty) {
                    isAuthorizationChanged = true;
                    control.markAsPristine();
                }
                authorization.AuthFieldValue[control.get('FIELD_NAME').value] =
                    control.get('AUTH_VALUE').value ? JSON.parse(control.get('AUTH_VALUE').value) : null;
            }
        });
        if (currentAuthObjectCtrl && isAuthorizationChanged) {
            currentAuthObjectCtrl.get('AUTH_VALUE').setValue(JSON.stringify(authorization, null, ' '));
            currentAuthObjectCtrl.get('AUTH_VALUE').markAsDirty();
        }
        const originalAuthObjValue = [];
        if (originalValue) {
            originalValue.forEach(authObj => {
                if (authObj.ROW_TYPE === 'OBJECT') {
                    originalAuthObjValue.push(authObj);
                }
            });
        }
        return this.uiMapperService.composeChangedRelationship(relationshipID, [{ ENTITY_ID: 'authObject', ROLE_ID: 'auth_object' }], formArray, originalAuthObjValue, ['CHECKED', 'COLLAPSED', 'NODE_ID', 'OBJ_NAME', 'DESC', 'ROW_TYPE', 'FIELD_NAME', 'DATA_ELEMENT']);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            if (error.status === 401) {
                this.messageService.addMessage('EXCEPTION', 'NOT_AUTHENTICATED_OR_SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["messageType"].Exception);
            }
            else {
                this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["messageType"].Exception, operation, error.message);
            }
            this.router.navigate(['errors']);
            console.error(operation, error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
}
IdentityService.ɵfac = function IdentityService_Factory(t) { return new (t || IdentityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](jor_angular__WEBPACK_IMPORTED_MODULE_4__["UiMapperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
IdentityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdentityService, factory: IdentityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdentityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_4__["UiMapperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "HPNS":
/*!********************************************************!*\
  !*** ./src/app/app/app-detail/app-detail.component.ts ***!
  \********************************************************/
/*! exports provided: AppDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDetailComponent", function() { return AppDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog.service */ "Cw5F");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _async_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../async-validators */ "QLkK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_target_app_target_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-target/app-target.component */ "4J8T");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../authorization/authorization.component */ "AzdA");
/* harmony import */ var _app_categories_app_categories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-categories/app-categories.component */ "XOep");
/* harmony import */ var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../admin-info/admin-info.component */ "P6wf");






















function AppDetailComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppDetailComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppDetailComponent_div_13_app_app_target_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-app-target", 23);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r3.mainForm)("relationMetas", ctx_r3.relationMetas)("readonly", ctx_r3.readonly);
} }
function AppDetailComponent_div_13_app_authorization_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-authorization", 24);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r4.mainForm)("ctrlName", "appAuthObjects")("readonly", ctx_r4.readonly);
} }
function AppDetailComponent_div_13_app_app_categories_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-app-categories", 25);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r5.mainForm)("readonly", ctx_r5.readonly);
} }
function AppDetailComponent_div_13_app_admin_info_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-info", 26);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r6.mainForm)("relationMetas", ctx_r6.relationMetas)("adminRelation", "app");
} }
function AppDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDetailComponent_div_13_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.switchTabStrip(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDetailComponent_div_13_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.switchTabStrip(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Authorization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDetailComponent_div_13_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.switchTabStrip(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDetailComponent_div_13_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.switchTabStrip(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppDetailComponent_div_13_app_app_target_18_Template, 1, 3, "app-app-target", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppDetailComponent_div_13_app_authorization_19_Template, 1, 3, "app-authorization", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppDetailComponent_div_13_app_app_categories_20_Template, 1, 2, "app-app-categories", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppDetailComponent_div_13_app_admin_info_21_Template, 1, 3, "app-admin-info", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("APP_ID"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("NAME"))("formGroup", ctx_r2.mainForm)("readonly", ctx_r2.readonly)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 4);
} }
class AppDetailComponent {
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
        this.originalValue = {};
        this.changedValue = {};
        this.tabStrip = 1;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((params) => {
            this.action = params.get('action');
            if (this.action === 'new') {
                this.isNewMode = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
                    this.entityService.getRelationMetaOfEntity('app'),
                    this._createNewEntity()
                ]);
            }
            else {
                this.isNewMode = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
                    this.entityService.getRelationMetaOfEntity('app'),
                    this.identityService.getAppDetail(params.get('appID'))
                ]);
            }
        })).subscribe(data => {
            this.relationMetas = data[0];
            this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'app').ATTRIBUTES);
            if ('ENTITY_ID' in data[1]) {
                this.instanceGUID = data[1]['INSTANCE_GUID'];
                this._generateMainForm(data[1]);
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
            if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(confirm => {
                    if (confirm) {
                        this.mainForm.reset(this.originalValue);
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
        const appIDCtrl = this.mainForm.get('APP_ID');
        appIDCtrl.clearAsyncValidators();
        const appCategoryArray = this.mainForm.get('appCategories');
        let lastIndex = appCategoryArray.length - 1;
        while (lastIndex >= 0) {
            const appCategoryGroup = appCategoryArray.at(lastIndex);
            if (appCategoryGroup.invalid || !appCategoryGroup.value.ID) {
                appCategoryArray.removeAt(lastIndex);
            }
            lastIndex--;
        }
        this.mainForm.markAsPristine();
        // Replace the URL from change to display
        window.history.replaceState({}, '', `/apps/${appIDCtrl.value};action=display`);
    }
    _switch2EditMode() {
        this.readonly = false;
        this._setCheckBoxState();
        const appIDCtrl = this.mainForm.get('APP_ID');
        if (this.isNewMode) {
            appIDCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_9__["existingAppValidator"])(this.identityService, this.messageService));
        }
        // Replace the URL from to display
        if (this.action === 'display') {
            this.action = 'change';
        }
        window.history.replaceState({}, '', `/apps/${appIDCtrl.value};action=` + this.action);
    }
    _createNewEntity() {
        const appDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_2__["Entity"]();
        appDetail.ENTITY_ID = 'app';
        appDetail['app'] = [
            { APP_ID: '', NAME: '', ROUTE_LINK: '', IS_EXTERNAL: '', CREATED_BY: '', CREATE_TIME: '', CHANGED_BY: '', CHANGE_TIME: '' }
        ];
        appDetail['relationships'] = [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(appDetail);
    }
    _generateMainForm(data) {
        this.mainForm = this.fb.group({
            APP_ID: [data['app'][0]['APP_ID'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
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
        const parsedRelationship = this._parseRelationships(data['relationships']);
        this.mainForm.addControl('appCategories', this.fb.array(parsedRelationship.appCategories.map(appCategory => this.fb.group(appCategory))));
        this.mainForm.addControl('appAuthObjects', this.fb.array(parsedRelationship.appAuthObjects.map(appAuthObject => this.fb.group(appAuthObject))));
        this.originalValue = this.mainForm.getRawValue();
    }
    _parseRelationships(relationships) {
        const parsedRelationship = {
            appCategories: [],
            appAuthObjects: []
        };
        if (!relationships) {
            return parsedRelationship;
        }
        relationships.forEach(relationship => {
            switch (relationship.RELATIONSHIP_ID) {
                case 'rs_app_category':
                    __parseAppCategory(relationship);
                    break;
                case 'rs_app_auth':
                    parsedRelationship.appAuthObjects = this.identityService.parseProfileAuthObject(relationship);
                    break;
                default:
                // Do nothing.
            }
        });
        return parsedRelationship;
        function __parseAppCategory(relationship) {
            relationship.values.forEach(value => {
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
            relationship.values.forEach(value => {
                const authorization = value['AUTH_VALUE'] ?
                    JSON.parse(value['AUTH_VALUE']) : null;
                const status = authorization ?
                    Object.values(authorization.AuthFieldValue).findIndex(authValue => !authValue) !== -1 ?
                        'yellow' : 'green' : 'red';
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
                    DATA_ELEMENT: '',
                });
                const authObjectFields = value['PARTNER_INSTANCES'][0]['relationships'][0];
                authObjectFields.values.forEach(value2 => {
                    const authFieldName = value2['PARTNER_INSTANCES'][0]['authField'][0]['FIELD_NAME'];
                    parsedRelationship.appAuthObjects.push({
                        CHECKED: '',
                        COLLAPSED: false,
                        NODE_ID: value['RELATIONSHIP_INSTANCE_GUID'],
                        STATUS: authorization.AuthFieldValue[authFieldName] ?
                            authorization.AuthFieldValue[authFieldName].length > 0 ? 'green' : 'red' : 'red',
                        RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                        auth_object_INSTANCE_GUID: '',
                        AUTH_VALUE: authorization && authorization.AuthFieldValue[authFieldName]
                            && JSON.stringify(authorization.AuthFieldValue[authFieldName], null, ' '),
                        OBJ_NAME: value['PARTNER_INSTANCES'][0]['authObject'][0]['OBJ_NAME'],
                        DESC: '',
                        ROW_TYPE: 'FIELD',
                        FIELD_NAME: authFieldName,
                        DATA_ELEMENT: value2['PARTNER_INSTANCES'][0]['authField'][0]['DATA_ELEMENT'],
                    });
                });
            });
        }
    }
    _resetValue(data) {
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
        const parsedRelationship = this._parseRelationships(data['relationships']);
        this.originalValue['appCategories'] = parsedRelationship.appCategories;
        this.originalValue['appAuthObjects'] = parsedRelationship.appAuthObjects;
        this.mainForm.reset(this.originalValue);
    }
    _setCheckBoxState() {
        if (this.readonly) {
            this.mainForm.get('target.IS_EXTERNAL').disable();
        }
        else {
            this.mainForm.get('target.IS_EXTERNAL').enable();
        }
    }
    save() {
        this.messageService.clearMessages();
        if (this._composeChanges()) {
            this.identityService.save(this.changedValue).subscribe(data => {
                this.changedValue = {};
                if ('INSTANCE_GUID' in data) {
                    const appID = data['app'][0]['APP_ID'];
                    this.instanceGUID = data['INSTANCE_GUID'];
                    this.isNewMode = false;
                    this.identityService.getAppDetail(appID).subscribe(instance => {
                        if ('ENTITY_ID' in instance) {
                            this._switch2DisplayMode();
                            this._resetValue(instance);
                        }
                        else {
                            const errorMessages = instance;
                            errorMessages.forEach(msg => this.messageService.add(msg));
                        }
                    });
                    this.messageService.reportMessage('APP', 'SAVED', 'S', appID);
                }
                else {
                    const errorMessages = data;
                    errorMessages.forEach(msg => this.messageService.add(msg));
                }
            });
        }
    }
    _composeChanges() {
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
                action: 'add', APP_ID: this.mainForm.get('APP_ID').value,
                CREATED_BY: this.identityService.Session.USER_ID, CREATE_TIME: this.identityService.CurrentTime,
                CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime
            };
        }
        else {
            this.changedValue['app'] = {
                action: 'update', CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime
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
        const appAuthObjFormArray = this.mainForm.get('appAuthObjects');
        const relationship = this.identityService.composeAuthChanges(appAuthObjFormArray, this.originalValue['appAuthObjects'], 'rs_app_auth');
        if (relationship) {
            this.changedValue['relationships'] = [relationship];
        }
        return true;
    }
    canDeactivate() {
        if (this.isNewMode || (this.mainForm && this.mainForm.dirty)) {
            return this.dialogService.confirm('Discard changes?');
        }
        else {
            return true;
        }
    }
}
AppDetailComponent.ɵfac = function AppDetailComponent_Factory(t) { return new (t || AppDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["UiMapperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
AppDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppDetailComponent, selectors: [["app-app-detail"]], decls: 14, vars: 5, consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "relationMetas", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "ctrlName", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "adminRelation", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "readonly"], [3, "mainForm", "ctrlName", "readonly"], [3, "mainForm", "readonly"], [3, "mainForm", "relationMetas", "adminRelation"]], template: function AppDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDetailComponent_Template_button_click_5_listener() { return ctx.switchEditDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppDetailComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppDetailComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppDetailComponent_Template_button_click_8_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppDetailComponent_div_13_Template, 22, 21, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isNewMode ? "New App" : ctx.readonly ? "Display App" : "Change App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _app_target_app_target_component__WEBPACK_IMPORTED_MODULE_11__["AppTargetComponent"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_12__["AuthorizationComponent"], _app_categories_app_categories_component__WEBPACK_IMPORTED_MODULE_13__["AppCategoriesComponent"], _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_14__["AdminInfoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC9hcHAtZGV0YWlsL2FwcC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-detail',
                templateUrl: './app-detail.component.html',
                styleUrls: ['./app-detail.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["UiMapperService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "IJvj":
/*!*****************************!*\
  !*** ./src/app/identity.ts ***!
  \*****************************/
/*! exports provided: PermissionList, UserList, AppList, AuthObjList, AuthProfileList, AppCategoryList, Authorization, AuthFieldValue, SelectOption, Operator, Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionList", function() { return PermissionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppList", function() { return AppList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthObjList", function() { return AuthObjList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProfileList", function() { return AuthProfileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCategoryList", function() { return AppCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authorization", function() { return Authorization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFieldValue", function() { return AuthFieldValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOption", function() { return SelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operator", function() { return Operator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
class PermissionList {
}
class UserList {
}
class AppList {
}
class AuthObjList {
}
class AuthProfileList {
}
class AppCategoryList {
}
class Authorization {
}
class AuthFieldValue {
}
class SelectOption {
}
var Operator;
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
})(Operator || (Operator = {}));
var Option;
(function (Option) {
    Option["Include"] = "Include";
    Option["Exclude"] = "Exclude";
})(Option || (Option = {}));


/***/ }),

/***/ "LfBi":
/*!********************************************************************!*\
  !*** ./src/app/profile/profile-detail/profile-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailComponent", function() { return ProfileDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog.service */ "Cw5F");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _async_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../async-validators */ "QLkK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../authorization/authorization.component */ "AzdA");
/* harmony import */ var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../admin-info/admin-info.component */ "P6wf");




















function ProfileDetailComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileDetailComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileDetailComponent_div_13_app_authorization_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-authorization", 21);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r3.mainForm)("ctrlName", "authObjects")("readonly", ctx_r3.readonly);
} }
function ProfileDetailComponent_div_13_app_admin_info_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-info", 22);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r4.mainForm)("relationMetas", ctx_r4.relationMetas)("adminRelation", "authProfile");
} }
function ProfileDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileDetailComponent_div_13_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.switchTabStrip(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Authorization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileDetailComponent_div_13_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.switchTabStrip(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileDetailComponent_div_13_app_authorization_12_Template, 1, 3, "app-authorization", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileDetailComponent_div_13_app_admin_info_13_Template, 1, 3, "app-admin-info", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("PROFILE_NAME"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("DESC"))("formGroup", ctx_r2.mainForm)("readonly", ctx_r2.readonly)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
} }
class ProfileDetailComponent {
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
        this.originalValue = {};
        this.changedValue = {};
        this.tabStrip = 1;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((params) => {
            this.action = params.get('action');
            if (this.action === 'new') {
                this.isNewMode = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
                    this.entityService.getRelationMetaOfEntity('authProfile'),
                    this._createNewEntity()
                ]);
            }
            else {
                this.isNewMode = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
                    this.entityService.getRelationMetaOfEntity('authProfile'),
                    this.identityService.getAuthProfileDetail(params.get('profileName'))
                ]);
            }
        })).subscribe(data => {
            this.relationMetas = data[0];
            this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'authProfile').ATTRIBUTES);
            if ('ENTITY_ID' in data[1]) {
                this.instanceGUID = data[1]['INSTANCE_GUID'];
                this._generateMainForm(data[1]);
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
            if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(confirm => {
                    if (confirm) {
                        this.mainForm.reset(this.originalValue);
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
        const profileNameCtrl = this.mainForm.get('PROFILE_NAME');
        profileNameCtrl.clearAsyncValidators();
        this.mainForm.markAsPristine();
        // Replace the URL from change to display
        window.history.replaceState({}, '', `/profiles/${profileNameCtrl.value};action=display`);
    }
    _switch2EditMode() {
        this.readonly = false;
        const profileNameCtrl = this.mainForm.get('PROFILE_NAME');
        if (this.isNewMode) {
            profileNameCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_9__["existingProfileValidator"])(this.identityService, this.messageService));
        }
        // Replace the URL from to display
        if (this.action === 'display') {
            this.action = 'change';
        }
        window.history.replaceState({}, '', `/profiles/${profileNameCtrl.value};action=` + this.action);
    }
    _createNewEntity() {
        const profileDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_2__["Entity"]();
        profileDetail.ENTITY_ID = 'authProfile';
        profileDetail['authProfile'] = [
            { PROFILE_NAME: '', DESC: '', CREATED_BY: '', CREATE_TIME: '', CHANGED_BY: '', CHANGE_TIME: '' }
        ];
        profileDetail['relationships'] = [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(profileDetail);
    }
    _generateMainForm(data) {
        this.mainForm = this.fb.group({
            PROFILE_NAME: [data['authProfile'][0]['PROFILE_NAME'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            DESC: [data['authProfile'][0]['DESC']],
            admin: this.fb.group({
                CREATED_BY: [data['authProfile'][0]['CREATED_BY']],
                CREATE_TIME: [data['authProfile'][0]['CREATE_TIME']],
                CHANGED_BY: [data['authProfile'][0]['CHANGED_BY']],
                CHANGE_TIME: [data['authProfile'][0]['CHANGE_TIME']]
            })
        });
        const parsedRelationship = this._parseRelationships(data['relationships']);
        this.mainForm.addControl('authObjects', this.fb.array(parsedRelationship.authObjects.map(authObject => this.fb.group(authObject))));
        this.originalValue = this.mainForm.getRawValue();
    }
    _parseRelationships(relationships) {
        const parsedRelationship = {
            authObjects: []
        };
        if (!relationships) {
            return parsedRelationship;
        }
        relationships.forEach(relationship => {
            switch (relationship.RELATIONSHIP_ID) {
                case 'rs_auth_profile_object':
                    __parseAuthObjects(relationship);
                    break;
                default:
                // Do nothing.
            }
        });
        return parsedRelationship;
        function __parseAuthObjects(relationship) {
            relationship.values.forEach(value => {
                const authorization = value['AUTH_VALUE'] ? JSON.parse(value['AUTH_VALUE']) : null;
                const status = authorization ?
                    Object.values(authorization.AuthFieldValue).findIndex(authValue => !authValue) !== -1 ?
                        'yellow' : 'green' : 'red';
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
                    DATA_ELEMENT: '',
                });
                const authObjectFields = value['PARTNER_INSTANCES'][0]['relationships'][0];
                authObjectFields.values.forEach(value2 => {
                    const authFieldName = value2['PARTNER_INSTANCES'][0]['authField'][0]['FIELD_NAME'];
                    parsedRelationship.authObjects.push({
                        CHECKED: '',
                        COLLAPSED: false,
                        NODE_ID: value['RELATIONSHIP_INSTANCE_GUID'],
                        STATUS: authorization && authorization.AuthFieldValue && authorization.AuthFieldValue[authFieldName] ?
                            authorization.AuthFieldValue[authFieldName].length > 0 ? 'green' : 'red' : 'red',
                        RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                        auth_object_INSTANCE_GUID: '',
                        AUTH_VALUE: authorization && authorization.AuthFieldValue[authFieldName]
                            && JSON.stringify(authorization.AuthFieldValue[authFieldName], null, ' '),
                        OBJ_NAME: value['PARTNER_INSTANCES'][0]['authObject'][0]['OBJ_NAME'],
                        DESC: '',
                        ROW_TYPE: 'FIELD',
                        FIELD_NAME: authFieldName,
                        DATA_ELEMENT: value2['PARTNER_INSTANCES'][0]['authField'][0]['DATA_ELEMENT'],
                    });
                });
            });
        }
    }
    _resetValue(data) {
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
        const parsedRelationship = this._parseRelationships(data['relationships']);
        this.originalValue['authObjects'] = parsedRelationship.authObjects;
        this.originalValue['roles'] = parsedRelationship.roles;
        this.mainForm.reset(this.originalValue);
    }
    save() {
        this.messageService.clearMessages();
        if (this._composeChanges()) {
            this.identityService.save(this.changedValue).subscribe(data => {
                this.changedValue = {};
                if ('INSTANCE_GUID' in data) {
                    const profileName = data['authProfile'][0]['PROFILE_NAME'];
                    this.instanceGUID = data['INSTANCE_GUID'];
                    this.isNewMode = false;
                    this.identityService.getAuthProfileDetail(profileName).subscribe(instance => {
                        if ('ENTITY_ID' in instance) {
                            this._switch2DisplayMode();
                            this._resetValue(instance);
                        }
                        else {
                            const errorMessages = instance;
                            errorMessages.forEach(msg => this.messageService.add(msg));
                        }
                    });
                    this.messageService.reportMessage('AUTH_PROFILE', 'SAVED', 'S', profileName);
                }
                else {
                    const errorMessages = data;
                    errorMessages.forEach(msg => this.messageService.add(msg));
                }
            });
        }
    }
    _composeChanges() {
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
                action: 'add', PROFILE_NAME: this.mainForm.get('PROFILE_NAME').value,
                CREATED_BY: this.identityService.Session.USER_ID, CREATE_TIME: this.identityService.CurrentTime,
                CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime
            };
        }
        else {
            this.changedValue['authProfile'] = {
                action: 'update', CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime
            };
        }
        if (this.mainForm.get('DESC').dirty) {
            this.changedValue['authProfile']['DESC'] = this.mainForm.get('DESC').value;
        }
        const authObjectFormArray = this.mainForm.get('authObjects');
        const relationship = this.identityService.composeAuthChanges(authObjectFormArray, this.originalValue['appAuthObjects'], 'rs_auth_profile_object');
        if (relationship) {
            this.changedValue['relationships'] = [relationship];
        }
        return true;
    }
    canDeactivate() {
        if (this.isNewMode || (this.mainForm && this.mainForm.dirty)) {
            return this.dialogService.confirm('Discard changes?');
        }
        else {
            return true;
        }
    }
}
ProfileDetailComponent.ɵfac = function ProfileDetailComponent_Factory(t) { return new (t || ProfileDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["UiMapperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
ProfileDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileDetailComponent, selectors: [["app-profile-detail"]], decls: 14, vars: 5, consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "ctrlName", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "adminRelation", 4, "ngSwitchCase"], [3, "mainForm", "ctrlName", "readonly"], [3, "mainForm", "relationMetas", "adminRelation"]], template: function ProfileDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileDetailComponent_Template_button_click_5_listener() { return ctx.switchEditDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileDetailComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileDetailComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileDetailComponent_Template_button_click_8_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileDetailComponent_div_13_Template, 14, 15, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isNewMode ? "New Profile" : ctx.readonly ? "Display Profile" : "Change Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_11__["AuthorizationComponent"], _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_12__["AdminInfoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1kZXRhaWwvcHJvZmlsZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-detail',
                templateUrl: './profile-detail.component.html',
                styleUrls: ['./profile-detail.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["UiMapperService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "NHVA":
/*!*******************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










function UserListComponent_tr_35_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 41);
} }
function UserListComponent_tr_35_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 42);
} }
function UserListComponent_tr_35_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Initial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_tr_35_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_tr_35_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Renew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { action: "display" }; };
const _c1 = function (a1, a2) { return ["/users", a1, a2]; };
function UserListComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserListComponent_tr_35_span_9_Template, 1, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserListComponent_tr_35_span_10_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserListComponent_tr_35_div_12_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserListComponent_tr_35_div_13_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserListComponent_tr_35_div_14_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const user_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.displayUser(user_r1.USER_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const user_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeUser(user_r1.USER_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_35_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const user_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deleteUser(user_r1.USER_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, user_r1.USER_ID, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.USER_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.USER_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.DISPLAY_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.LOCK);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r1.LOCK);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", user_r1.PWD_STATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
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
        this.identityService.delete(toBeDeletedUserGUID).subscribe(errorMsg => {
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
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_3__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 53, vars: 9, consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "user_id", 1, "col-sm-3", "col-form-label", "col-form-label-sm"], ["id", "user_id", "name", "user_id", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "user_name", 1, "col-sm-3", "col-form-label", "col-form-label-sm"], ["id", "user_name", "name", "user_name", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-sm", "btn-primary", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], [1, "dk-lock"], [1, "dk-password-state"], [1, "dk-actions"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], ["class", "fas fa-lock", "title", "Locked", 4, "ngIf"], ["class", "fas fa-lock-open", "title", "Unlocked", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"], ["title", "Locked", 1, "fas", "fa-lock"], ["title", "Unlocked", 1, "fas", "fa-lock-open"], [1, "badge", "badge-primary"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.userID = $event; })("keyup", function UserListComponent_Template_input_keyup_5_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.userName = $event; })("keyup", function UserListComponent_Template_input_keyup_9_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_11_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_16_listener() { return ctx.newUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Display Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Locked?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserListComponent_tr_35_Template, 22, 13, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Confirm Deletion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_42_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_49_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_51_listener() { return ctx.confirmDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"]], styles: [".dk-lock[_ngcontent-%COMP%] {\n  width: 5rem;\n  max-width: 5rem;\n  min-width: 5rem;\n}\n.dk-password-state[_ngcontent-%COMP%] {\n  width: 15rem;\n  max-width: 15rem;\n  min-width: 15rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 9rem;\n  min-width: 9rem;\n  max-width: 9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay1sb2NrIHtcbiAgd2lkdGg6IDVyZW07XG4gIG1heC13aWR0aDogNXJlbTtcbiAgbWluLXdpZHRoOiA1cmVtO1xufVxuLmRrLXBhc3N3b3JkLXN0YXRlIHtcbiAgd2lkdGg6IDE1cmVtO1xuICBtYXgtd2lkdGg6IDE1cmVtO1xuICBtaW4td2lkdGg6IDE1cmVtO1xufVxuLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiA5cmVtO1xuICBtaW4td2lkdGg6IDlyZW07XG4gIG1heC13aWR0aDogOXJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-list',
                templateUrl: './user-list.component.html',
                styleUrls: ['./user-list.component.css']
            }]
    }], function () { return [{ type: _identity_service__WEBPACK_IMPORTED_MODULE_3__["IdentityService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "P6wf":
/*!****************************************************!*\
  !*** ./src/app/admin-info/admin-info.component.ts ***!
  \****************************************************/
/*! exports provided: AdminInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInfoComponent", function() { return AdminInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");






class AdminInfoComponent {
    constructor(attributeControlService) {
        this.attributeControlService = attributeControlService;
    }
    ngOnInit() {
        this.adminForm = this.mainForm.get('admin');
        this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === this.adminRelation).ATTRIBUTES);
    }
    getAttrCtrlFromID(fieldName) {
        return this.attrCtrls.find(attrCtrl => attrCtrl.name === fieldName);
    }
}
AdminInfoComponent.ɵfac = function AdminInfoComponent_Factory(t) { return new (t || AdminInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"])); };
AdminInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminInfoComponent, selectors: [["app-admin-info"]], inputs: { mainForm: "mainForm", relationMetas: "relationMetas", adminRelation: "adminRelation" }, decls: 5, vars: 16, consts: [[1, "mt-4", "ml-2", "row"], [1, "col-md-6", "col-lg-4", "dk-form-label", 3, "attributeControl", "formGroup", "isSmallSize", "readonly"]], template: function AdminInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dk-app-attribute-form2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("CREATED_BY"))("formGroup", ctx.adminForm)("isSmallSize", true)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("CREATE_TIME"))("formGroup", ctx.adminForm)("isSmallSize", true)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("CHANGED_BY"))("formGroup", ctx.adminForm)("isSmallSize", true)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.getAttrCtrlFromID("CHANGE_TIME"))("formGroup", ctx.adminForm)("isSmallSize", true)("readonly", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWluZm8vYWRtaW4taW5mby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-info',
                templateUrl: './admin-info.component.html',
                styleUrls: ['./admin-info.component.css']
            }]
    }], function () { return [{ type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }]; }, { mainForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], relationMetas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], adminRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PX2U":
/*!***********************************************************************************!*\
  !*** ./src/app/app_category/app-category-detail/app-category-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AppCategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCategoryDetailComponent", function() { return AppCategoryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog.service */ "Cw5F");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _async_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../async-validators */ "QLkK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_category_detail_app_app_category_detail_app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-category-detail-app/app-category-detail-app.component */ "+xHg");
/* harmony import */ var _app_category_detail_role_app_category_detail_role_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-category-detail-role/app-category-detail-role.component */ "yVxW");
/* harmony import */ var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../admin-info/admin-info.component */ "P6wf");





















function AppCategoryDetailComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppCategoryDetailComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppCategoryDetailComponent_div_13_app_app_category_detail_app_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-app-category-detail-app", 22);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r3.mainForm)("readonly", ctx_r3.readonly);
} }
function AppCategoryDetailComponent_div_13_app_app_category_detail_role_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-app-category-detail-role", 23);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r4.mainForm);
} }
function AppCategoryDetailComponent_div_13_app_admin_info_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-info", 24);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r5.mainForm)("relationMetas", ctx_r5.relationMetas)("adminRelation", "category");
} }
function AppCategoryDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryDetailComponent_div_13_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.switchTabStrip(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryDetailComponent_div_13_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.switchTabStrip(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryDetailComponent_div_13_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.switchTabStrip(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppCategoryDetailComponent_div_13_app_app_category_detail_app_16_Template, 1, 2, "app-app-category-detail-app", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppCategoryDetailComponent_div_13_app_app_category_detail_role_17_Template, 1, 1, "app-app-category-detail-role", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppCategoryDetailComponent_div_13_app_admin_info_18_Template, 1, 3, "app-admin-info", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("ID"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("NAME"))("formGroup", ctx_r2.mainForm)("readonly", ctx_r2.readonly)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("ICON"))("formGroup", ctx_r2.mainForm)("readonly", ctx_r2.readonly)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
} }
class AppCategoryDetailComponent {
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
        this.originalValue = {};
        this.changedValue = {};
        this.tabStrip = 1;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((params) => {
            this.action = params.get('action');
            if (this.action === 'new') {
                this.isNewMode = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
                    this.entityService.getRelationMetaOfEntity('category'),
                    this._createNewEntity()
                ]);
            }
            else {
                this.isNewMode = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
                    this.entityService.getRelationMetaOfEntity('category'),
                    this.identityService.getAppCategoryDetail(params.get('appCategory'))
                ]);
            }
        })).subscribe(data => {
            this.relationMetas = data[0];
            this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'r_app_category').ATTRIBUTES);
            if ('ENTITY_ID' in data[1]) {
                this.instanceGUID = data[1]['INSTANCE_GUID'];
                this._generateMainForm(data[1]);
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
            if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(confirm => {
                    if (confirm) {
                        this.mainForm.reset(this.originalValue);
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
        const appCategoryIDCtrl = this.mainForm.get('ID');
        appCategoryIDCtrl.clearAsyncValidators();
        const appArray = this.mainForm.get('apps');
        let lastIndex = appArray.length - 1;
        while (lastIndex >= 0) {
            const appGroup = appArray.at(lastIndex);
            if (appGroup.invalid || !appGroup.value.APP_ID) {
                appArray.removeAt(lastIndex);
            }
            lastIndex--;
        }
        this.mainForm.markAsPristine();
        // Replace the URL from change to display
        window.history.replaceState({}, '', `/app-categories/${appCategoryIDCtrl.value};action=display`);
    }
    _switch2EditMode() {
        this.readonly = false;
        const appCategoryIDCtrl = this.mainForm.get('ID');
        if (this.isNewMode) {
            appCategoryIDCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_9__["existingAppCategoryValidator"])(this.identityService, this.messageService));
        }
        const appArray = this.mainForm.get('apps');
        appArray.push(this.fb.group({
            APP_ID: [''],
            NAME: [''],
            ORDER: [0],
            portal_app_INSTANCE_GUID: [''],
            RELATIONSHIP_INSTANCE_GUID: ['']
        }));
        // Replace the URL from to display
        if (this.action === 'display') {
            this.action = 'change';
        }
        window.history.replaceState({}, '', `/app-categories/${appCategoryIDCtrl.value};action=` + this.action);
    }
    _createNewEntity() {
        const appCategoryDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_2__["Entity"]();
        appCategoryDetail.ENTITY_ID = 'category';
        appCategoryDetail['category'] = [
            { NAME: '', TYPE: 'APP', CREATED_BY: '', CREATE_TIME: '', CHANGED_BY: '', CHANGE_TIME: '' }
        ];
        appCategoryDetail['r_app_category'] = [
            { ID: '', NAME: '', ICON: '' }
        ];
        appCategoryDetail['relationships'] = [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(appCategoryDetail);
    }
    _generateMainForm(data) {
        this.mainForm = this.fb.group({
            ID: [data['r_app_category'][0]['ID'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            NAME: [data['r_app_category'][0]['NAME']],
            ICON: [data['r_app_category'][0]['ICON']],
            admin: this.fb.group({
                CREATED_BY: [data['category'][0]['CREATED_BY']],
                CREATE_TIME: [data['category'][0]['CREATE_TIME']],
                CHANGED_BY: [data['category'][0]['CHANGED_BY']],
                CHANGE_TIME: [data['category'][0]['CHANGE_TIME']]
            })
        });
        const parsedRelationship = this._parseRelationships(data['relationships']);
        this.mainForm.addControl('apps', this.fb.array(parsedRelationship.apps.map(app => this.fb.group(app))));
        this.mainForm.addControl('roles', this.fb.array(parsedRelationship.roles.map(role => this.fb.group(role))));
        this.originalValue = this.mainForm.getRawValue();
    }
    _parseRelationships(relationships) {
        const parsedRelationship = {
            apps: [],
            roles: []
        };
        if (!relationships) {
            return parsedRelationship;
        }
        relationships.forEach(relationship => {
            switch (relationship.RELATIONSHIP_ID) {
                case 'rs_app_category':
                    __parseApp(relationship);
                    break;
                case 'rs_role_category_profile':
                    __parseSystemRole(relationship);
                    break;
                default:
                // Do nothing.
            }
        });
        return parsedRelationship;
        function __parseApp(relationship) {
            relationship.values.forEach(value => {
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
            relationship.values.forEach(value => {
                const permission = value['PARTNER_INSTANCES'].find(partner => partner.ENTITY_ID === 'permission');
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
    _resetValue(data) {
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
        const parsedRelationship = this._parseRelationships(data['relationships']);
        this.originalValue['apps'] = parsedRelationship.apps;
        this.originalValue['roles'] = parsedRelationship.roles;
        this.mainForm.reset(this.originalValue);
    }
    save() {
        this.messageService.clearMessages();
        if (this._composeChanges()) {
            this.identityService.save(this.changedValue).subscribe(data => {
                this.changedValue = {};
                if ('INSTANCE_GUID' in data) {
                    const appCategoryID = data['r_app_category'][0]['ID'];
                    this.instanceGUID = data['INSTANCE_GUID'];
                    this.isNewMode = false;
                    this.identityService.getAppCategoryDetail(appCategoryID).subscribe(instance => {
                        if ('ENTITY_ID' in instance) {
                            this._switch2DisplayMode();
                            this._resetValue(instance);
                        }
                        else {
                            const errorMessages = instance;
                            errorMessages.forEach(msg => this.messageService.add(msg));
                        }
                    });
                    this.messageService.reportMessage('APP_CATEGORY', 'SAVED', 'S', appCategoryID);
                }
                else {
                    const errorMessages = data;
                    errorMessages.forEach(msg => this.messageService.add(msg));
                }
            });
        }
    }
    _composeChanges() {
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
                action: 'add', TYPE: 'APP',
                CREATED_BY: this.identityService.Session.USER_ID, CREATE_TIME: this.identityService.CurrentTime,
                CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime
            };
            this.changedValue['r_app_category'] = { action: 'add', ID: this.mainForm.get('ID').value };
        }
        else {
            this.changedValue['category'] = {
                action: 'update', CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime
            };
            this.changedValue['r_app_category'] = { action: 'update', ID: this.mainForm.get('ID').value };
        }
        if (this.mainForm.get('NAME').dirty) {
            this.changedValue['category']['NAME'] = this.mainForm.get('NAME').value;
            this.changedValue['r_app_category']['NAME'] = this.mainForm.get('NAME').value;
        }
        if (this.mainForm.get('ICON').dirty) {
            this.changedValue['r_app_category']['ICON'] = this.mainForm.get('ICON').value;
        }
        const appFormArray = this.mainForm.get('apps');
        const relationship = this.uiMapperService.composeChangedRelationship('rs_app_category', [{ ENTITY_ID: 'app', ROLE_ID: 'portal_app' }], appFormArray, this.originalValue['apps'], ['APP_ID', 'NAME']);
        if (relationship) {
            this.changedValue['relationships'] = [relationship];
        }
        return true;
    }
    canDeactivate() {
        if (this.isNewMode || (this.mainForm && this.mainForm.dirty)) {
            return this.dialogService.confirm('Discard changes?');
        }
        else {
            return true;
        }
    }
}
AppCategoryDetailComponent.ɵfac = function AppCategoryDetailComponent_Factory(t) { return new (t || AppCategoryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["UiMapperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
AppCategoryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppCategoryDetailComponent, selectors: [["app-app-category-detail"]], decls: 14, vars: 5, consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "mx-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "mx-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "readonly", 4, "ngSwitchCase"], [3, "mainForm", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "adminRelation", 4, "ngSwitchCase"], [3, "mainForm", "readonly"], [3, "mainForm"], [3, "mainForm", "relationMetas", "adminRelation"]], template: function AppCategoryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryDetailComponent_Template_button_click_5_listener() { return ctx.switchEditDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppCategoryDetailComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppCategoryDetailComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryDetailComponent_Template_button_click_8_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppCategoryDetailComponent_div_13_Template, 19, 22, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isNewMode ? "New App Category" : ctx.readonly ? "Display App Category" : "Change App Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _app_category_detail_app_app_category_detail_app_component__WEBPACK_IMPORTED_MODULE_11__["AppCategoryDetailAppComponent"], _app_category_detail_role_app_category_detail_role_component__WEBPACK_IMPORTED_MODULE_12__["AppCategoryDetailRoleComponent"], _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_13__["AdminInfoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcF9jYXRlZ29yeS9hcHAtY2F0ZWdvcnktZGV0YWlsL2FwcC1jYXRlZ29yeS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppCategoryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-category-detail',
                templateUrl: './app-category-detail.component.html',
                styleUrls: ['./app-category-detail.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["UiMapperService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "QLkK":
/*!*************************************!*\
  !*** ./src/app/async-validators.ts ***!
  \*************************************/
/*! exports provided: existingUserNameValidator, existingUserIDValidator, existingPermissionValidator, existingAppValidator, existingAuthObjectValidator, existingAppCategoryValidator, existingProfileValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingUserNameValidator", function() { return existingUserNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingUserIDValidator", function() { return existingUserIDValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingPermissionValidator", function() { return existingPermissionValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingAppValidator", function() { return existingAppValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingAuthObjectValidator", function() { return existingAuthObjectValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingAppCategoryValidator", function() { return existingAppCategoryValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingProfileValidator", function() { return existingProfileValidator; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


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
function existingPermissionValidator(identityService, messageService) {
    return (control) => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => identityService.getPermissionByName(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            if (data['r_role'] && data['r_role'][0]['NAME'] === control.value) {
                return { message: messageService.generateMessage('PERMISSION', 'PERMISSION_EXISTS', 'E', control.value).msgShortText };
            }
            else {
                return null;
            }
        }))));
    };
}
function existingAppValidator(identityService, messageService) {
    return (control) => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => identityService.getAppByID(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            if (data['app'] && data['app'][0]['APP_ID'] === control.value) {
                return { message: messageService.generateMessage('APP', 'APP_EXISTS', 'E', control.value).msgShortText };
            }
            else {
                return null;
            }
        }))));
    };
}
function existingAuthObjectValidator(identityService, messageService) {
    return (control) => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => identityService.getAuthObjectByName(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            if (data['authObject'] && data['authObject'][0]['OBJ_NAME'] === control.value) {
                return { message: messageService.generateMessage('AUTH_OBJECT', 'AUTH_OBJECT_EXISTS', 'E', control.value).msgShortText };
            }
            else {
                return null;
            }
        }))));
    };
}
function existingAppCategoryValidator(identityService, messageService) {
    return (control) => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => identityService.getAppCategoryByID(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            if (data['r_app_category'] && data['r_app_category'][0]['ID'] === control.value) {
                return { message: messageService.generateMessage('APP_CATEGORY', 'APP_CATEGORY_EXISTS', 'E', control.value).msgShortText };
            }
            else {
                return null;
            }
        }))));
    };
}
function existingProfileValidator(identityService, messageService) {
    return (control) => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => identityService.getAuthProfileByName(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            if (data['authProfile'] && data['authProfile'][0]['PROFILE_NAME'] === control.value) {
                return { message: messageService.generateMessage('AUTH_PROFILE', 'AUTH_PROFILE_EXISTS', 'E', control.value).msgShortText };
            }
            else {
                return null;
            }
        }))));
    };
}


/***/ }),

/***/ "Rzer":
/*!********************************************************************************!*\
  !*** ./src/app/auth_object/auth-object-detail/auth-object-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthObjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthObjectDetailComponent", function() { return AuthObjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog.service */ "Cw5F");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _async_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../async-validators */ "QLkK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_object_field_auth_object_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-object-field/auth-object-field.component */ "xO/b");
/* harmony import */ var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../admin-info/admin-info.component */ "P6wf");




















function AuthObjectDetailComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthObjectDetailComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthObjectDetailComponent_div_13_app_auth_object_field_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-auth-object-field", 21);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r3.mainForm)("readonly", ctx_r3.readonly);
} }
function AuthObjectDetailComponent_div_13_app_admin_info_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-info", 22);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r4.mainForm)("relationMetas", ctx_r4.relationMetas)("adminRelation", "authObject");
} }
function AuthObjectDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dk-app-attribute-form2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectDetailComponent_div_13_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.switchTabStrip(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Authorization Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectDetailComponent_div_13_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.switchTabStrip(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AuthObjectDetailComponent_div_13_app_auth_object_field_12_Template, 1, 2, "app-auth-object-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthObjectDetailComponent_div_13_app_admin_info_13_Template, 1, 3, "app-admin-info", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("OBJ_NAME"))("formGroup", ctx_r2.mainForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("DESC"))("formGroup", ctx_r2.mainForm)("readonly", ctx_r2.readonly)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
} }
class AuthObjectDetailComponent {
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
        this.originalValue = {};
        this.changedValue = {};
        this.tabStrip = 1;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((params) => {
            this.action = params.get('action');
            if (this.action === 'new') {
                this.isNewMode = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
                    this.entityService.getRelationMetaOfEntity('authObject'),
                    this._createNewEntity()
                ]);
            }
            else {
                this.isNewMode = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
                    this.entityService.getRelationMetaOfEntity('authObject'),
                    this.identityService.getAuthObjectDetail(params.get('authObjName'))
                ]);
            }
        })).subscribe(data => {
            this.relationMetas = data[0];
            this.attrCtrls = this.attributeControlService.toAttributeControl(this.relationMetas.find(relationMeta => relationMeta.RELATION_ID === 'authObject').ATTRIBUTES);
            if ('ENTITY_ID' in data[1]) {
                this.instanceGUID = data[1]['INSTANCE_GUID'];
                this._generateMainForm(data[1]);
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
            if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(confirm => {
                    if (confirm) {
                        this.mainForm.reset(this.originalValue);
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
        const appIDCtrl = this.mainForm.get('OBJ_NAME');
        appIDCtrl.clearAsyncValidators();
        const authFieldArray = this.mainForm.get('authFields');
        let lastIndex = authFieldArray.length - 1;
        while (lastIndex >= 0) {
            const authFieldGroup = authFieldArray.at(lastIndex);
            if (authFieldGroup.invalid || !authFieldGroup.value.FIELD_NAME) {
                authFieldArray.removeAt(lastIndex);
            }
            lastIndex--;
        }
        this.mainForm.markAsPristine();
        // Replace the URL from change to display
        window.history.replaceState({}, '', `/auth-objects/${appIDCtrl.value};action=display`);
    }
    _switch2EditMode() {
        this.readonly = false;
        const authObjCtrl = this.mainForm.get('OBJ_NAME');
        if (this.isNewMode) {
            authObjCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_9__["existingAuthObjectValidator"])(this.identityService, this.messageService));
        }
        const appCategoryArray = this.mainForm.get('authFields');
        appCategoryArray.push(this.fb.group({
            FIELD_NAME: [''],
            DATA_ELEMENT: [''],
            auth_field_INSTANCE_GUID: [''],
            RELATIONSHIP_INSTANCE_GUID: ['']
        }));
        // Replace the URL from to display
        if (this.action === 'display') {
            this.action = 'change';
        }
        window.history.replaceState({}, '', `/auth-objects/${authObjCtrl.value};action=` + this.action);
    }
    _createNewEntity() {
        const authObjectDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_2__["Entity"]();
        authObjectDetail.ENTITY_ID = 'authObject';
        authObjectDetail['authObject'] = [
            { OBJ_NAME: '', DESC: '', CREATED_BY: '', CREATE_TIME: '', CHANGED_BY: '', CHANGE_TIME: '' }
        ];
        authObjectDetail['relationships'] = [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(authObjectDetail);
    }
    _generateMainForm(data) {
        this.mainForm = this.fb.group({
            OBJ_NAME: [data['authObject'][0]['OBJ_NAME'], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            DESC: [data['authObject'][0]['DESC']],
            admin: this.fb.group({
                CREATED_BY: [data['authObject'][0]['CREATED_BY']],
                CREATE_TIME: [data['authObject'][0]['CREATE_TIME']],
                CHANGED_BY: [data['authObject'][0]['CHANGED_BY']],
                CHANGE_TIME: [data['authObject'][0]['CHANGE_TIME']]
            })
        });
        const parsedRelationship = this._parseRelationships(data['relationships']);
        this.mainForm.addControl('authFields', this.fb.array(parsedRelationship.authFields.map(authField => this.fb.group(authField))));
        this.originalValue = this.mainForm.getRawValue();
    }
    _parseRelationships(relationships) {
        const parsedRelationship = {
            authFields: []
        };
        if (!relationships) {
            return parsedRelationship;
        }
        relationships.forEach(relationship => {
            switch (relationship.RELATIONSHIP_ID) {
                case 'rs_auth_object_field':
                    __parseAuthField(relationship);
                    break;
                default:
                // Do nothing.
            }
        });
        return parsedRelationship;
        function __parseAuthField(relationship) {
            relationship.values.forEach(value => {
                parsedRelationship.authFields.push({
                    RELATIONSHIP_INSTANCE_GUID: value['RELATIONSHIP_INSTANCE_GUID'],
                    auth_field_INSTANCE_GUID: value['PARTNER_INSTANCES'][0]['INSTANCE_GUID'],
                    FIELD_NAME: value['PARTNER_INSTANCES'][0]['authField'][0]['FIELD_NAME'],
                    DATA_ELEMENT: value['PARTNER_INSTANCES'][0]['authField'][0]['DATA_ELEMENT']
                });
            });
        }
    }
    _resetValue(data) {
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
        const parsedRelationship = this._parseRelationships(data['relationships']);
        this.originalValue['authFields'] = parsedRelationship.authFields;
        this.mainForm.reset(this.originalValue);
    }
    save() {
        this.messageService.clearMessages();
        if (this._composeChanges()) {
            this.identityService.save(this.changedValue).subscribe(data => {
                this.changedValue = {};
                if ('INSTANCE_GUID' in data) {
                    const authObjName = data['authObject'][0]['OBJ_NAME'];
                    this.instanceGUID = data['INSTANCE_GUID'];
                    this.isNewMode = false;
                    this.identityService.getAuthObjectDetail(authObjName).subscribe(instance => {
                        if ('ENTITY_ID' in instance) {
                            this._switch2DisplayMode();
                            this._resetValue(instance);
                        }
                        else {
                            const errorMessages = instance;
                            errorMessages.forEach(msg => this.messageService.add(msg));
                        }
                    });
                    this.messageService.reportMessage('AUTH_OBJECT', 'SAVED', 'S', authObjName);
                }
                else {
                    const errorMessages = data;
                    errorMessages.forEach(msg => this.messageService.add(msg));
                }
            });
        }
    }
    _composeChanges() {
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
                action: 'add', OBJ_NAME: this.mainForm.get('OBJ_NAME').value,
                CREATED_BY: this.identityService.Session.USER_ID, CREATE_TIME: this.identityService.CurrentTime,
                CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime
            };
        }
        else {
            this.changedValue['authObject'] = {
                action: 'update', CHANGED_BY: this.identityService.Session.USER_ID, CHANGE_TIME: this.identityService.CurrentTime
            };
        }
        if (this.mainForm.get('DESC').dirty) {
            this.changedValue['authObject']['DESC'] = this.mainForm.get('DESC').value;
        }
        const authFieldFormArray = this.mainForm.get('authFields');
        const relationship = this.uiMapperService.composeChangedRelationship('rs_auth_object_field', [{ ENTITY_ID: 'authField', ROLE_ID: 'auth_field' }], authFieldFormArray, this.originalValue['authFields'], ['FIELD_NAME', 'DATA_ELEMENT']);
        if (relationship) {
            this.changedValue['relationships'] = [relationship];
        }
        return true;
    }
    canDeactivate() {
        if (this.isNewMode || (this.mainForm && this.mainForm.dirty)) {
            return this.dialogService.confirm('Discard changes?');
        }
        else {
            return true;
        }
    }
}
AuthObjectDetailComponent.ɵfac = function AuthObjectDetailComponent_Factory(t) { return new (t || AuthObjectDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["UiMapperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
AuthObjectDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthObjectDetailComponent, selectors: [["app-auth-object-detail"]], decls: 14, vars: 5, consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "relationMetas", "adminRelation", 4, "ngSwitchCase"], [3, "mainForm", "readonly"], [3, "mainForm", "relationMetas", "adminRelation"]], template: function AuthObjectDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectDetailComponent_Template_button_click_5_listener() { return ctx.switchEditDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthObjectDetailComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthObjectDetailComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectDetailComponent_Template_button_click_8_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthObjectDetailComponent_div_13_Template, 14, 15, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isNewMode ? "New Authorization Object" : ctx.readonly ? "Display Authorization Object" : "Change Authorization Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _auth_object_field_auth_object_field_component__WEBPACK_IMPORTED_MODULE_11__["AuthObjectFieldComponent"], _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_12__["AdminInfoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhfb2JqZWN0L2F1dGgtb2JqZWN0LWRldGFpbC9hdXRoLW9iamVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthObjectDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-object-detail',
                templateUrl: './auth-object-detail.component.html',
                styleUrls: ['./auth-object-detail.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["UiMapperService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-logon-angular */ "jNR/");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.service */ "H3s1");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./msgStore */ "uLAD");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");













class AppComponent {
    constructor(entityService, identityService, messageService, logonService) {
        this.entityService = entityService;
        this.identityService = identityService;
        this.messageService = messageService;
        this.logonService = logonService;
        this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].originalHost);
        this.logonService.setHost(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].originalHost);
        this.logonService.try_get_session().subscribe(data => {
            this.identityService.setSession(data);
            this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_5__["msgStore"], this.identityService.Session.LANGUAGE);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__["LogonService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "dk-logon-view"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [".dk-logon-view[_ngcontent-%COMP%] {\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWxvZ29uLXZpZXcge1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }, { type: ui_logon_angular__WEBPACK_IMPORTED_MODULE_3__["LogonService"] }]; }, null); })();


/***/ }),

/***/ "V/5Q":
/*!***********************************************************!*\
  !*** ./src/app/user/user-detail/user-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _async_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../async-validators */ "QLkK");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dialog.service */ "Cw5F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-basic/user-basic.component */ "zCeC");
/* harmony import */ var _user_email_user_email_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-email/user-email.component */ "yVU3");
/* harmony import */ var _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-address/user-address.component */ "8IYw");
/* harmony import */ var _user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-personalization/user-personalization.component */ "+zia");
/* harmony import */ var _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-role/user-role.component */ "8VMz");























function UserDetailComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Locked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unlocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Initial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Renew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_13_app_user_basic_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-basic", 34);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userForm", ctx_r8.userForm)("relationMetas", ctx_r8.relationMetas)("readonly", ctx_r8.readonly);
} }
function UserDetailComponent_div_13_app_user_email_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-email", 34);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userForm", ctx_r9.userForm)("relationMetas", ctx_r9.relationMetas)("readonly", ctx_r9.readonly);
} }
function UserDetailComponent_div_13_app_user_address_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-address", 34);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userForm", ctx_r10.userForm)("relationMetas", ctx_r10.relationMetas)("readonly", ctx_r10.readonly);
} }
function UserDetailComponent_div_13_app_user_personalization_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-personalization", 34);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userForm", ctx_r11.userForm)("relationMetas", ctx_r11.relationMetas)("readonly", ctx_r11.readonly);
} }
function UserDetailComponent_div_13_app_user_role_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-role", 35);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userForm", ctx_r12.userForm)("readonly", ctx_r12.readonly);
} }
function UserDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.switchTabStrip(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.switchTabStrip(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.switchTabStrip(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.switchTabStrip(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Personalization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_div_13_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.switchTabStrip(5); });
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
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r2.getAttrCtrlFromID("USER_ID"))("formGroup", ctx_r2.userForm)("readonly", !ctx_r2.isNewMode)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("LOCK").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.userForm.get("LOCK").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.userForm.get("PWD_STATUS").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabStrip === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.tabStrip);
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
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((params) => {
            this.action = params.get('action');
            if (this.action === 'new') {
                this.isNewMode = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([this.entityService.getRelationMetaOfEntity('person'), this._createNewUser()]);
            }
            else {
                this.isNewMode = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([this.entityService.getRelationMetaOfEntity('person'),
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
            userIDCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_8__["existingUserIDValidator"])(this.identityService, this.messageService));
        }
        const userNameCtrl = this.userForm.get('userBasic.names.USER_NAME');
        userNameCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_8__["existingUserNameValidator"])(this.identityService, this.messageService, this.userForm.get('USER_ID').value));
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
        const userDetail = new jor_angular__WEBPACK_IMPORTED_MODULE_7__["Entity"]();
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(userDetail);
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
            this.identityService.save(this.changedUser).subscribe(data => {
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
UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) { return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_7__["AttributeControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_7__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_7__["UiMapperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
UserDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailComponent, selectors: [["app-user-detail"]], decls: 14, vars: 5, consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], [1, "ml-2"], [1, "mt-2", "ml-1", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "col-md-6", "col-lg-4", "row", "form-group", "mr-2", 3, "formGroup"], ["for", "lockStatus", 1, "col-form-label", "col-form-label-sm"], ["id", "lockStatus", 1, "form-control", "dk-icon"], ["class", "fas fa-lock", 4, "ngIf"], ["class", "fas fa-lock-open", 4, "ngIf"], ["for", "passwordStatus", 1, "col-form-label", "col-form-label-sm"], ["id", "passwordStatus", 1, "form-control", "dk-icon", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "mt-2", 3, "ngSwitch"], [3, "userForm", "relationMetas", "readonly", 4, "ngSwitchCase"], [3, "userForm", "readonly", 4, "ngSwitchCase"], [1, "fas", "fa-lock"], [1, "fas", "fa-lock-open"], [1, "badge", "badge-primary"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"], [3, "userForm", "relationMetas", "readonly"], [3, "userForm", "readonly"]], template: function UserDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_5_listener() { return ctx.switchEditDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserDetailComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserDetailComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_8_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserDetailComponent_div_13_Template, 38, 27, "div", 9);
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ui_message_angular__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], jor_angular__WEBPACK_IMPORTED_MODULE_7__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_11__["UserBasicComponent"], _user_email_user_email_component__WEBPACK_IMPORTED_MODULE_12__["UserEmailComponent"], _user_address_user_address_component__WEBPACK_IMPORTED_MODULE_13__["UserAddressComponent"], _user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_14__["UserPersonalizationComponent"], _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_15__["UserRoleComponent"]], styles: [".dk-icon[_ngcontent-%COMP%] {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWljb24ge1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-detail',
                templateUrl: './user-detail.component.html',
                styleUrls: ['./user-detail.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_7__["AttributeControlService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_7__["EntityService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_7__["UiMapperService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "XOep":
/*!***************************************************************************!*\
  !*** ./src/app/app/app-detail/app-categories/app-categories.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCategoriesComponent", function() { return AppCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AppCategoriesComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoriesComponent_tr_12_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const appCategoryForm_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSearchHelp(i_r2, appCategoryForm_r1); });
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
} if (rf & 2) {
    const appCategoryForm_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", appCategoryForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", appCategoryForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", appCategoryForm_r1.get("ICON").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", appCategoryForm_r1);
} }
class AppCategoriesComponent {
    constructor() { }
    ngOnInit() {
        this.appCategoryFormArray = this.mainForm.get('appCategories');
    }
    onSearchHelp(rowID, exportObject) {
        const afterExportFn = function (context, rowIDx) {
            return () => context.onChangeKey(rowIDx);
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModalByEntity('category', 'r_app_category', exportObject, true, null, null, afterExportFn);
    }
}
AppCategoriesComponent.ɵfac = function AppCategoriesComponent_Factory(t) { return new (t || AppCategoriesComponent)(); };
AppCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppCategoriesComponent, selectors: [["app-app-categories"]], viewQuery: function AppCategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["SearchHelpComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
    } }, inputs: { readonly: "readonly", mainForm: "mainForm" }, decls: 14, vars: 2, consts: [[1, "table", "table-bordered", "table-sm", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light"], [1, "dk-name"], [1, "dk-description"], [1, "dk-icon"], [1, "dk-number"], ["formArrayName", "appCategories", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group", "dk-name"], ["type", "text", "formControlName", "ID", "readonly", "", 1, "form-control", "form-control-sm"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], [1, "dk-description", 3, "formGroup"], ["type", "text", "formControlName", "NAME", "readonly", "", 1, "form-control", "form-control-sm"], [3, "ngClass"], [1, "dk-number", 3, "formGroup"], ["type", "number", "formControlName", "ORDER", "readonly", "", 1, "form-control", "form-control-sm"]], template: function AppCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appCategoryFormArray.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["SearchHelpComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 40rem;\n}\n.dk-icon[_ngcontent-%COMP%]{\n  width: 5rem;\n}\n.dk-number[_ngcontent-%COMP%]{\n  width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2FwcC1kZXRhaWwvYXBwLWNhdGVnb3JpZXMvYXBwLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwL2FwcC1kZXRhaWwvYXBwLWNhdGVnb3JpZXMvYXBwLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGstbmFtZXtcbiAgd2lkdGg6IDIwcmVtO1xufVxuLmRrLWRlc2NyaXB0aW9ue1xuICB3aWR0aDogNDByZW07XG59XG4uZGstaWNvbntcbiAgd2lkdGg6IDVyZW07XG59XG4uZGstbnVtYmVye1xuICB3aWR0aDogNXJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-categories',
                templateUrl: './app-categories.component.html',
                styleUrls: ['./app-categories.component.css']
            }]
    }], function () { return []; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mainForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchHelpComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [jor_angular__WEBPACK_IMPORTED_MODULE_2__["SearchHelpComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "Y1zO":
/*!***************************************************************************************************************!*\
  !*** ./src/app/permission/permission-detail/permission-detail-profile/permission-detail-profile.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PermissionDetailProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDetailProfileComponent", function() { return PermissionDetailProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authorization/authorization.component */ "AzdA");





function PermissionDetailProfileComponent_div_5_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionDetailProfileComponent_div_5_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const profileCtrl_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSelect(profileCtrl_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profileCtrl_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", profileCtrl_r1.get("profile.PROFILE_NAME").value === ctx_r2.currentProfileFormGroup.get("profile.PROFILE_NAME").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profileCtrl_r1.get("profile.DESC").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profileCtrl_r1.get("profile.PROFILE_NAME").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("changed at: ", profileCtrl_r1.get("profile.CHANGE_TIME").value, "");
} }
function PermissionDetailProfileComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PermissionDetailProfileComponent_div_5_a_1_Template, 8, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profileCtrl_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", profileCtrl_r1.get("ROW_TYPE").value === "category");
} }
class PermissionDetailProfileComponent {
    constructor() { }
    ngOnInit() {
        this.profileFormArray = this.mainForm.get('categories');
        this.onSelect(this.profileFormArray.at(0));
    }
    onSelect(ctrl) {
        this.currentProfileFormGroup = ctrl;
    }
}
PermissionDetailProfileComponent.ɵfac = function PermissionDetailProfileComponent_Factory(t) { return new (t || PermissionDetailProfileComponent)(); };
PermissionDetailProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermissionDetailProfileComponent, selectors: [["app-permission-detail-profile"]], inputs: { readonly: "readonly", mainForm: "mainForm" }, decls: 8, vars: 4, consts: [[1, "row", "ml-1"], [1, "col-3"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "mt-3"], ["type", "button", "id", "remove-object", 1, "btn", "btn-light", "btn-sm"], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "col-9"], [3, "mainForm", "ctrlName", "readonly"], ["class", "list-group-item list-group-item-action flex-column align-items-start", 3, "active", "click", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", 3, "click"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1", "dk-text"]], template: function PermissionDetailProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PermissionDetailProfileComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-authorization", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileFormArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx.currentProfileFormGroup == null ? null : ctx.currentProfileFormGroup.get("profile"))("ctrlName", "authorizations")("readonly", ctx.readonly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_3__["AuthorizationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".dk-text[_ngcontent-%COMP%] {\n  overflow: auto;\n  word-wrap: break-word;\n}\n.noshown[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVybWlzc2lvbi9wZXJtaXNzaW9uLWRldGFpbC9wZXJtaXNzaW9uLWRldGFpbC1wcm9maWxlL3Blcm1pc3Npb24tZGV0YWlsLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb24vcGVybWlzc2lvbi1kZXRhaWwvcGVybWlzc2lvbi1kZXRhaWwtcHJvZmlsZS9wZXJtaXNzaW9uLWRldGFpbC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstdGV4dCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ubm9zaG93biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionDetailProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permission-detail-profile',
                templateUrl: './permission-detail-profile.component.html',
                styleUrls: ['./permission-detail-profile.component.css']
            }]
    }], function () { return []; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mainForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-logon-angular */ "jNR/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permission/permission-list/permission-list.component */ "adCL");
/* harmony import */ var _permission_permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permission/permission-detail/permission-detail.component */ "6ZaY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _work_protection_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./work-protection.guard */ "4J20");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _app_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app/app-list/app-list.component */ "jSQZ");
/* harmony import */ var _app_app_detail_app_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app/app-detail/app-detail.component */ "HPNS");
/* harmony import */ var _app_app_detail_app_target_app_target_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app/app-detail/app-target/app-target.component */ "4J8T");
/* harmony import */ var _app_app_detail_app_categories_app_categories_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app/app-detail/app-categories/app-categories.component */ "XOep");
/* harmony import */ var _auth_object_auth_object_list_auth_object_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth_object/auth-object-list/auth-object-list.component */ "euic");
/* harmony import */ var _auth_object_auth_object_detail_auth_object_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth_object/auth-object-detail/auth-object-detail.component */ "Rzer");
/* harmony import */ var _auth_object_auth_object_detail_auth_object_field_auth_object_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth_object/auth-object-detail/auth-object-field/auth-object-field.component */ "xO/b");
/* harmony import */ var _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-info/admin-info.component */ "P6wf");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./authorization/authorization.component */ "AzdA");
/* harmony import */ var _authorization_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./authorization/auth-value/auth-value.component */ "DNJp");
/* harmony import */ var _authorization_auth_value_auth_value_singles_auth_value_singles_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authorization/auth-value/auth-value-singles/auth-value-singles.component */ "rmH7");
/* harmony import */ var _authorization_auth_value_auth_value_selopts_auth_value_selopts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./authorization/auth-value/auth-value-selopts/auth-value-selopts.component */ "aFfz");
/* harmony import */ var _app_category_app_category_list_app_category_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app_category/app-category-list/app-category-list.component */ "iaCD");
/* harmony import */ var _app_category_app_category_detail_app_category_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app_category/app-category-detail/app-category-detail.component */ "PX2U");
/* harmony import */ var _app_category_app_category_detail_app_category_detail_app_app_category_detail_app_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app_category/app-category-detail/app-category-detail-app/app-category-detail-app.component */ "+xHg");
/* harmony import */ var _app_category_app_category_detail_app_category_detail_role_app_category_detail_role_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app_category/app-category-detail/app-category-detail-role/app-category-detail-role.component */ "yVxW");
/* harmony import */ var _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile/profile-list/profile-list.component */ "k7LS");
/* harmony import */ var _profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./profile/profile-detail/profile-detail.component */ "LfBi");
/* harmony import */ var _permission_permission_detail_permission_detail_category_permission_detail_category_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./permission/permission-detail/permission-detail-category/permission-detail-category.component */ "2Svr");
/* harmony import */ var _permission_permission_detail_permission_detail_profile_permission_detail_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./permission/permission-detail/permission-detail-profile/permission-detail-profile.component */ "Y1zO");
/* harmony import */ var _permission_permission_detail_permission_detail_user_permission_detail_user_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./permission/permission-detail/permission-detail-user/permission-detail-user.component */ "E5ku");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "NHVA");
/* harmony import */ var _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user/user-detail/user-detail.component */ "V/5Q");
/* harmony import */ var _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./user/user-detail/user-basic/user-basic.component */ "zCeC");
/* harmony import */ var _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./user/user-detail/user-personalization/user-personalization.component */ "+zia");
/* harmony import */ var _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./user/user-detail/user-role/user-role.component */ "8VMz");
/* harmony import */ var _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user/user-detail/user-email/user-email.component */ "yVU3");
/* harmony import */ var _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/user-detail/user-address/user-address.component */ "8IYw");
/* harmony import */ var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./custom.reuse.strategy */ "F0jV");












































const appRoutes = [
    {
        path: 'logon', component: ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LogonComponent"],
        data: {
            title: 'Logon Portal (DH001/Dark1234)', userLabel: 'User ID', pwdLabel: 'Password', btnLabel: 'Sign In',
            redirectPath: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectPath, redirectUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectUrl, host: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].originalHost
        }
    },
    { path: 'landing', component: ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
    { path: 'users', component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_33__["UserListComponent"] },
    { path: 'users/:userID', component: _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_34__["UserDetailComponent"], canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_10__["WorkProtectionGuard"]] },
    { path: 'apps', component: _app_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_12__["AppListComponent"] },
    { path: 'apps/:appID', component: _app_app_detail_app_detail_component__WEBPACK_IMPORTED_MODULE_13__["AppDetailComponent"], canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_10__["WorkProtectionGuard"]] },
    { path: 'app-categories', component: _app_category_app_category_list_app_category_list_component__WEBPACK_IMPORTED_MODULE_24__["AppCategoryListComponent"] },
    { path: 'app-categories/:appCategory', component: _app_category_app_category_detail_app_category_detail_component__WEBPACK_IMPORTED_MODULE_25__["AppCategoryDetailComponent"], canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_10__["WorkProtectionGuard"]] },
    { path: 'auth-objects', component: _auth_object_auth_object_list_auth_object_list_component__WEBPACK_IMPORTED_MODULE_16__["AuthObjectListComponent"] },
    { path: 'auth-objects/:authObjName', component: _auth_object_auth_object_detail_auth_object_detail_component__WEBPACK_IMPORTED_MODULE_17__["AuthObjectDetailComponent"], canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_10__["WorkProtectionGuard"]] },
    { path: 'permissions', component: _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_6__["PermissionListComponent"] },
    { path: 'permissions/:permissionName', component: _permission_permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_7__["PermissionDetailComponent"], canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_10__["WorkProtectionGuard"]] },
    { path: 'profiles', component: _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_28__["ProfileListComponent"] },
    { path: 'profiles/:profileName', component: _profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_29__["ProfileDetailComponent"], canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_10__["WorkProtectionGuard"]] },
    { path: '**', redirectTo: 'logon', pathMatch: 'full' }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_40__["CustomReuseStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LogonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_9__["MessageModule"],
            jor_angular__WEBPACK_IMPORTED_MODULE_11__["JorAngularModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_33__["UserListComponent"],
        _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_34__["UserDetailComponent"],
        _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_35__["UserBasicComponent"],
        _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_36__["UserPersonalizationComponent"],
        _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_37__["UserRoleComponent"],
        _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_38__["UserEmailComponent"],
        _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_39__["UserAddressComponent"],
        _app_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_12__["AppListComponent"],
        _app_app_detail_app_detail_component__WEBPACK_IMPORTED_MODULE_13__["AppDetailComponent"],
        _app_app_detail_app_target_app_target_component__WEBPACK_IMPORTED_MODULE_14__["AppTargetComponent"],
        _app_app_detail_app_categories_app_categories_component__WEBPACK_IMPORTED_MODULE_15__["AppCategoriesComponent"],
        _auth_object_auth_object_list_auth_object_list_component__WEBPACK_IMPORTED_MODULE_16__["AuthObjectListComponent"],
        _auth_object_auth_object_detail_auth_object_detail_component__WEBPACK_IMPORTED_MODULE_17__["AuthObjectDetailComponent"],
        _auth_object_auth_object_detail_auth_object_field_auth_object_field_component__WEBPACK_IMPORTED_MODULE_18__["AuthObjectFieldComponent"],
        _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_19__["AdminInfoComponent"],
        _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_20__["AuthorizationComponent"],
        _authorization_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_21__["AuthValueComponent"],
        _authorization_auth_value_auth_value_singles_auth_value_singles_component__WEBPACK_IMPORTED_MODULE_22__["AuthValueSinglesComponent"],
        _authorization_auth_value_auth_value_selopts_auth_value_selopts_component__WEBPACK_IMPORTED_MODULE_23__["AuthValueSeloptsComponent"],
        _app_category_app_category_list_app_category_list_component__WEBPACK_IMPORTED_MODULE_24__["AppCategoryListComponent"],
        _app_category_app_category_detail_app_category_detail_component__WEBPACK_IMPORTED_MODULE_25__["AppCategoryDetailComponent"],
        _app_category_app_category_detail_app_category_detail_app_app_category_detail_app_component__WEBPACK_IMPORTED_MODULE_26__["AppCategoryDetailAppComponent"],
        _app_category_app_category_detail_app_category_detail_role_app_category_detail_role_component__WEBPACK_IMPORTED_MODULE_27__["AppCategoryDetailRoleComponent"],
        _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_28__["ProfileListComponent"],
        _profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_29__["ProfileDetailComponent"],
        _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_6__["PermissionListComponent"],
        _permission_permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_7__["PermissionDetailComponent"],
        _permission_permission_detail_permission_detail_category_permission_detail_category_component__WEBPACK_IMPORTED_MODULE_30__["PermissionDetailCategoryComponent"],
        _permission_permission_detail_permission_detail_profile_permission_detail_profile_component__WEBPACK_IMPORTED_MODULE_31__["PermissionDetailProfileComponent"],
        _permission_permission_detail_permission_detail_user_permission_detail_user_component__WEBPACK_IMPORTED_MODULE_32__["PermissionDetailUserComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LogonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        ui_message_angular__WEBPACK_IMPORTED_MODULE_9__["MessageModule"],
        jor_angular__WEBPACK_IMPORTED_MODULE_11__["JorAngularModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_33__["UserListComponent"],
                    _user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_34__["UserDetailComponent"],
                    _user_user_detail_user_basic_user_basic_component__WEBPACK_IMPORTED_MODULE_35__["UserBasicComponent"],
                    _user_user_detail_user_personalization_user_personalization_component__WEBPACK_IMPORTED_MODULE_36__["UserPersonalizationComponent"],
                    _user_user_detail_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_37__["UserRoleComponent"],
                    _user_user_detail_user_email_user_email_component__WEBPACK_IMPORTED_MODULE_38__["UserEmailComponent"],
                    _user_user_detail_user_address_user_address_component__WEBPACK_IMPORTED_MODULE_39__["UserAddressComponent"],
                    _app_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_12__["AppListComponent"],
                    _app_app_detail_app_detail_component__WEBPACK_IMPORTED_MODULE_13__["AppDetailComponent"],
                    _app_app_detail_app_target_app_target_component__WEBPACK_IMPORTED_MODULE_14__["AppTargetComponent"],
                    _app_app_detail_app_categories_app_categories_component__WEBPACK_IMPORTED_MODULE_15__["AppCategoriesComponent"],
                    _auth_object_auth_object_list_auth_object_list_component__WEBPACK_IMPORTED_MODULE_16__["AuthObjectListComponent"],
                    _auth_object_auth_object_detail_auth_object_detail_component__WEBPACK_IMPORTED_MODULE_17__["AuthObjectDetailComponent"],
                    _auth_object_auth_object_detail_auth_object_field_auth_object_field_component__WEBPACK_IMPORTED_MODULE_18__["AuthObjectFieldComponent"],
                    _admin_info_admin_info_component__WEBPACK_IMPORTED_MODULE_19__["AdminInfoComponent"],
                    _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_20__["AuthorizationComponent"],
                    _authorization_auth_value_auth_value_component__WEBPACK_IMPORTED_MODULE_21__["AuthValueComponent"],
                    _authorization_auth_value_auth_value_singles_auth_value_singles_component__WEBPACK_IMPORTED_MODULE_22__["AuthValueSinglesComponent"],
                    _authorization_auth_value_auth_value_selopts_auth_value_selopts_component__WEBPACK_IMPORTED_MODULE_23__["AuthValueSeloptsComponent"],
                    _app_category_app_category_list_app_category_list_component__WEBPACK_IMPORTED_MODULE_24__["AppCategoryListComponent"],
                    _app_category_app_category_detail_app_category_detail_component__WEBPACK_IMPORTED_MODULE_25__["AppCategoryDetailComponent"],
                    _app_category_app_category_detail_app_category_detail_app_app_category_detail_app_component__WEBPACK_IMPORTED_MODULE_26__["AppCategoryDetailAppComponent"],
                    _app_category_app_category_detail_app_category_detail_role_app_category_detail_role_component__WEBPACK_IMPORTED_MODULE_27__["AppCategoryDetailRoleComponent"],
                    _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_28__["ProfileListComponent"],
                    _profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_29__["ProfileDetailComponent"],
                    _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_6__["PermissionListComponent"],
                    _permission_permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_7__["PermissionDetailComponent"],
                    _permission_permission_detail_permission_detail_category_permission_detail_category_component__WEBPACK_IMPORTED_MODULE_30__["PermissionDetailCategoryComponent"],
                    _permission_permission_detail_permission_detail_profile_permission_detail_profile_component__WEBPACK_IMPORTED_MODULE_31__["PermissionDetailProfileComponent"],
                    _permission_permission_detail_permission_detail_user_permission_detail_user_component__WEBPACK_IMPORTED_MODULE_32__["PermissionDetailUserComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LogonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    ui_message_angular__WEBPACK_IMPORTED_MODULE_9__["MessageModule"],
                    jor_angular__WEBPACK_IMPORTED_MODULE_11__["JorAngularModule"]
                ],
                providers: [
                    { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_40__["CustomReuseStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aFfz":
/*!*********************************************************************************************!*\
  !*** ./src/app/authorization/auth-value/auth-value-selopts/auth-value-selopts.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AuthValueSeloptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthValueSeloptsComponent", function() { return AuthValueSeloptsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../identity */ "IJvj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AuthValueSeloptsComponent_tr_14_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const operator_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", operator_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](operator_r5);
} }
function AuthValueSeloptsComponent_tr_14_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6);
} }
function AuthValueSeloptsComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AuthValueSeloptsComponent_tr_14_Template_select_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r2 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onChangeOperator(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthValueSeloptsComponent_tr_14_option_3_Template, 2, 2, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthValueSeloptsComponent_tr_14_option_6_Template, 2, 2, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dk-app-attribute", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dk-app-attribute", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthValueSeloptsComponent_tr_14_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r2 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.insertValue(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthValueSeloptsComponent_tr_14_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r2 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deleteValue(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectOptionForm_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", selectOptionForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.operatorEnum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", selectOptionForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.optionEnum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.attrCtrl)("formGroup", selectOptionForm_r1)("isSmallSize", true)("readonly", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.highAttrCtrl)("formGroup", selectOptionForm_r1)("isSmallSize", true)("readonly", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly);
} }
class AuthValueSeloptsComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.operatorEnum = Object.values(_identity__WEBPACK_IMPORTED_MODULE_3__["Operator"]);
        this.optionEnum = Object.values(_identity__WEBPACK_IMPORTED_MODULE_3__["Option"]);
    }
    onChangeOperator(idx) {
        const selectOptionCtrl = this.selectOptionArray.at(idx);
        if (selectOptionCtrl.get('Operator').value === _identity__WEBPACK_IMPORTED_MODULE_3__["Operator"].Between) {
            selectOptionCtrl.get('High').enable();
        }
        else {
            selectOptionCtrl.get('High').setValue('');
            selectOptionCtrl.get('High').disable();
        }
    }
    insertValue(idx) {
        this.selectOptionArray.insert(idx, this.fb.group({
            Operator: _identity__WEBPACK_IMPORTED_MODULE_3__["Operator"].Between,
            Option: _identity__WEBPACK_IMPORTED_MODULE_3__["Option"].Include,
            Low: '',
            High: ''
        }));
    }
    deleteValue(idx) {
        if (this.selectOptionArray.length === 1) {
            this.selectOptionArray.at(idx).get('Low').setValue('');
            this.selectOptionArray.at(idx).get('High').setValue('');
        }
        else {
            this.selectOptionArray.removeAt(idx);
        }
        this.selectOptionArray.markAsDirty();
    }
}
AuthValueSeloptsComponent.ɵfac = function AuthValueSeloptsComponent_Factory(t) { return new (t || AuthValueSeloptsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AuthValueSeloptsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthValueSeloptsComponent, selectors: [["app-auth-value-selopts"]], inputs: { selectOptionArray: "selectOptionArray", attrCtrl: "attrCtrl", highAttrCtrl: "highAttrCtrl", readonly: "readonly" }, decls: 15, vars: 3, consts: [[1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "formGroup"], ["name", "operator", "required", "", "formControlName", "Operator", 1, "form-control", "form-control-sm", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "operator", "required", "", "formControlName", "Option", 1, "form-control", "form-control-sm"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly"], [1, "dk-actions"], ["type", "button", "id", "add", "title", "Insert", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"], [3, "value"]], template: function AuthValueSeloptsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AuthValueSeloptsComponent_tr_14_Template, 16, 14, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.attrCtrl.label, " (Low)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.attrCtrl.label, " (High)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectOptionArray.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".dk-actions[_ngcontent-%COMP%]{\n  width: 5rem;\n  min-width: 5rem;\n  max-width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9hdXRoLXZhbHVlL2F1dGgtdmFsdWUtc2Vsb3B0cy9hdXRoLXZhbHVlLXNlbG9wdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vYXV0aC12YWx1ZS9hdXRoLXZhbHVlLXNlbG9wdHMvYXV0aC12YWx1ZS1zZWxvcHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstYWN0aW9uc3tcbiAgd2lkdGg6IDVyZW07XG4gIG1pbi13aWR0aDogNXJlbTtcbiAgbWF4LXdpZHRoOiA1cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthValueSeloptsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-value-selopts',
                templateUrl: './auth-value-selopts.component.html',
                styleUrls: ['./auth-value-selopts.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { selectOptionArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], attrCtrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], highAttrCtrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "adCL":
/*!*************************************************************************!*\
  !*** ./src/app/permission/permission-list/permission-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: PermissionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionListComponent", function() { return PermissionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function () { return { action: "display" }; };
const _c1 = function (a1, a2) { return ["/permissions", a1, a2]; };
function PermissionListComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionListComponent_tr_37_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const permission_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.display(permission_r1.NAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionListComponent_tr_37_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const permission_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.change(permission_r1.NAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionListComponent_tr_37_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const permission_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.delete(permission_r1.NAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, permission_r1.NAME, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permission_r1.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permission_r1.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permission_r1.CREATED_BY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permission_r1.CREATE_TIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permission_r1.CHANGED_BY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permission_r1.CHANGE_TIME);
} }
const _c2 = function (a0) { return { "display": a0 }; };
class PermissionListComponent {
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
        this.permissions = [];
        this.permissionName = this.permissionName ? this.permissionName.trim() : '';
        this.permissionDesc = this.permissionDesc ? this.permissionDesc.trim() : '';
        this.identityService.searchPermissions(this.permissionName, this.permissionDesc).subscribe(data => {
            if (!data[0]) {
                this.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["messageType"].Warning);
            }
            else if (data[0]['msgCat']) {
                const messages = data;
                messages.forEach(msg => this.messageService.add(msg));
            }
            else {
                this.permissions = data;
            }
        });
    }
    enterSearch($event) {
        if ($event.keyCode === 13) {
            this.search();
        }
    }
    new() {
        this.router.navigate(['permissions', '/', { action: 'new' }]);
    }
    display(permissionName) {
        this.router.navigate(['permissions', permissionName, { action: 'display' }]);
    }
    change(permissionName) {
        this.router.navigate(['permissions', permissionName, { action: 'change' }]);
    }
    delete(permissionName) {
        this.toBeDeletedInstance = permissionName;
        this.showDeletionConfirmation = true;
    }
    cancelDeletion() {
        this.showDeletionConfirmation = false;
    }
    confirmDeletion() {
        const toBeDeletedPermissionGUID = this.permissions.find(ele => ele.NAME === this.toBeDeletedInstance).INSTANCE_GUID;
        this.identityService.delete(toBeDeletedPermissionGUID).subscribe(errorMsg => {
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
PermissionListComponent.ɵfac = function PermissionListComponent_Factory(t) { return new (t || PermissionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PermissionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermissionListComponent, selectors: [["app-permission-list"]], decls: 55, vars: 9, consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "permission_name", 1, "col-sm-3", "col-form-label"], ["id", "permission_name", "name", "user_id", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "permission_desc", 1, "col-sm-3", "col-form-label"], ["id", "permission_desc", "name", "user_name", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]], template: function PermissionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Permission:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PermissionListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.permissionName = $event; })("keyup", function PermissionListComponent_Template_input_keyup_5_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PermissionListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.permissionDesc = $event; })("keyup", function PermissionListComponent_Template_input_keyup_9_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionListComponent_Template_button_click_11_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionListComponent_Template_button_click_16_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Created At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Changed By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Changed At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PermissionListComponent_tr_37_Template, 21, 11, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Confirm Deletion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionListComponent_Template_button_click_44_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionListComponent_Template_button_click_51_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionListComponent_Template_button_click_53_listener() { return ctx.confirmDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.permissionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.permissionDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure to delete the permission '", ctx.toBeDeletedInstance, "'?");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb24vcGVybWlzc2lvbi1saXN0L3Blcm1pc3Npb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permission-list',
                templateUrl: './permission-list.component.html',
                styleUrls: ['./permission-list.component.css']
            }]
    }], function () { return [{ type: _identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "euic":
/*!****************************************************************************!*\
  !*** ./src/app/auth_object/auth-object-list/auth-object-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: AuthObjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthObjectListComponent", function() { return AuthObjectListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function () { return { action: "display" }; };
const _c1 = function (a1, a2) { return ["/auth-objects", a1, a2]; };
function AuthObjectListComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectListComponent_tr_33_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const authObj_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.display(authObj_r1.OBJ_NAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectListComponent_tr_33_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const authObj_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.change(authObj_r1.OBJ_NAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectListComponent_tr_33_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const authObj_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.delete(authObj_r1.OBJ_NAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authObj_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, authObj_r1.OBJ_NAME, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](authObj_r1.OBJ_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](authObj_r1.DESC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](authObj_r1.CHANGED_BY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](authObj_r1.CHANGE_TIME);
} }
const _c2 = function (a0) { return { "display": a0 }; };
class AuthObjectListComponent {
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
        this.authObjects = [];
        this.authObjName = this.authObjName ? this.authObjName.trim() : '';
        this.authObjDesc = this.authObjDesc ? this.authObjDesc.trim() : '';
        this.identityService.searchAuthObjects(this.authObjName, this.authObjDesc).subscribe(data => {
            if (!data[0]) {
                this.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["messageType"].Warning);
            }
            else if (data[0]['msgCat']) {
                const messages = data;
                messages.forEach(msg => this.messageService.add(msg));
            }
            else {
                this.authObjects = data;
            }
        });
    }
    enterSearch($event) {
        if ($event.keyCode === 13) {
            this.search();
        }
    }
    new() {
        this.router.navigate(['auth-objects', '/', { action: 'new' }]);
    }
    display(authObjName) {
        this.router.navigate(['auth-objects', authObjName, { action: 'display' }]);
    }
    change(authObjName) {
        this.router.navigate(['auth-objects', authObjName, { action: 'change' }]);
    }
    delete(authObjName) {
        this.toBeDeletedInstance = authObjName;
        this.showDeletionConfirmation = true;
    }
    cancelDeletion() {
        this.showDeletionConfirmation = false;
    }
    confirmDeletion() {
        const toBeDeletedInstanceGUID = this.authObjects.find(ele => ele.OBJ_NAME === this.toBeDeletedInstance).INSTANCE_GUID;
        this.identityService.delete(toBeDeletedInstanceGUID).subscribe(errorMsg => {
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
AuthObjectListComponent.ɵfac = function AuthObjectListComponent_Factory(t) { return new (t || AuthObjectListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthObjectListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthObjectListComponent, selectors: [["app-auth-object-list"]], decls: 51, vars: 9, consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "auth_obj_name", 1, "col-sm-3", "col-form-label"], ["id", "auth_obj_name", "name", "auth_obj_name", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "auth_obj_desc", 1, "col-sm-3", "col-form-label"], ["id", "auth_obj_desc", "name", "auth_obj_desc", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]], template: function AuthObjectListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Object Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthObjectListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.authObjName = $event; })("keyup", function AuthObjectListComponent_Template_input_keyup_5_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthObjectListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.authObjDesc = $event; })("keyup", function AuthObjectListComponent_Template_input_keyup_9_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectListComponent_Template_button_click_11_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectListComponent_Template_button_click_16_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Changed By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Changed At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AuthObjectListComponent_tr_33_Template, 17, 9, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Confirm Deletion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectListComponent_Template_button_click_40_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectListComponent_Template_button_click_47_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectListComponent_Template_button_click_49_listener() { return ctx.confirmDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.authObjName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.authObjDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authObjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure to delete the authorization object '", ctx.toBeDeletedInstance, "'?");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhfb2JqZWN0L2F1dGgtb2JqZWN0LWxpc3QvYXV0aC1vYmplY3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthObjectListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-object-list',
                templateUrl: './auth-object-list.component.html',
                styleUrls: ['./auth-object-list.component.css']
            }]
    }], function () { return [{ type: _identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "iaCD":
/*!*******************************************************************************!*\
  !*** ./src/app/app_category/app-category-list/app-category-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AppCategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCategoryListComponent", function() { return AppCategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function () { return { action: "display" }; };
const _c1 = function (a1, a2) { return ["/app-categories", a1, a2]; };
function AppCategoryListComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryListComponent_tr_35_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const appCategory_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.display(appCategory_r1.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryListComponent_tr_35_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const appCategory_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.change(appCategory_r1.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryListComponent_tr_35_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const appCategory_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.delete(appCategory_r1.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const appCategory_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, appCategory_r1.ID, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appCategory_r1.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appCategory_r1.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", appCategory_r1.ICON);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appCategory_r1.CHANGED_BY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appCategory_r1.CHANGE_TIME);
} }
const _c2 = function (a0) { return { "display": a0 }; };
class AppCategoryListComponent {
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
        this.appCategories = [];
        this.appCategoryID = this.appCategoryID ? this.appCategoryID.trim() : '';
        this.appCategoryName = this.appCategoryName ? this.appCategoryName.trim() : '';
        this.identityService.searchAppCategories(this.appCategoryID, this.appCategoryName).subscribe(data => {
            if (!data[0]) {
                this.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["messageType"].Warning);
            }
            else if (data[0]['msgCat']) {
                const messages = data;
                messages.forEach(msg => this.messageService.add(msg));
            }
            else {
                this.appCategories = data;
            }
        });
    }
    enterSearch($event) {
        if ($event.keyCode === 13) {
            this.search();
        }
    }
    new() {
        this.router.navigate(['app-categories', '/', { action: 'new' }]);
    }
    display(appCategoryID) {
        this.router.navigate(['app-categories', appCategoryID, { action: 'display' }]);
    }
    change(appCategoryID) {
        this.router.navigate(['app-categories', appCategoryID, { action: 'change' }]);
    }
    delete(appCategoryID) {
        this.toBeDeletedInstance = appCategoryID;
        this.showDeletionConfirmation = true;
    }
    cancelDeletion() {
        this.showDeletionConfirmation = false;
    }
    confirmDeletion() {
        const toBeDeletedInstanceGUID = this.appCategories.find(ele => ele.ID === this.toBeDeletedInstance).INSTANCE_GUID;
        this.identityService.delete(toBeDeletedInstanceGUID).subscribe(errorMsg => {
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
AppCategoryListComponent.ɵfac = function AppCategoryListComponent_Factory(t) { return new (t || AppCategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppCategoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppCategoryListComponent, selectors: [["app-app-category-list"]], decls: 53, vars: 9, consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "app_category_id", 1, "col-sm-3", "col-form-label"], ["id", "app_category_id", "name", "app_category_id", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "app_category_name", 1, "col-sm-3", "col-form-label"], ["id", "app_category_name", "name", "app_category_name", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], [3, "ngClass"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]], template: function AppCategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppCategoryListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.appCategoryID = $event; })("keyup", function AppCategoryListComponent_Template_input_keyup_5_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Category Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppCategoryListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.appCategoryName = $event; })("keyup", function AppCategoryListComponent_Template_input_keyup_9_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryListComponent_Template_button_click_11_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryListComponent_Template_button_click_16_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Changed By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Changed At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppCategoryListComponent_tr_35_Template, 19, 10, "tr", 16);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryListComponent_Template_button_click_42_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00D7");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryListComponent_Template_button_click_49_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryListComponent_Template_button_click_51_listener() { return ctx.confirmDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appCategoryID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appCategoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure to delete the app category '", ctx.toBeDeletedInstance, "'?");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcF9jYXRlZ29yeS9hcHAtY2F0ZWdvcnktbGlzdC9hcHAtY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppCategoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-category-list',
                templateUrl: './app-category-list.component.html',
                styleUrls: ['./app-category-list.component.css']
            }]
    }], function () { return [{ type: _identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "jNR/":
/*!*************************************************!*\
  !*** ./dist/logon/fesm2015/ui-logon-angular.js ***!
  \*************************************************/
/*! exports provided: LandingPageComponent, LogonComponent, LogonModule, LogonService, PluralField, Projection, QueryObject, Selection, Session, Sort, User */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



















const _c0 = ["inputUserID"];
const _c1 = ["inputPassword"];
function LogonComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
} }
const msgStore = [
    { msgCat: 'EXCEPTION',
        msgName: 'GENERIC',
        msgText: {
            EN: { shortText: 'Exception Occurs',
                longText: '%s1' }
        }
    }
];

const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class LogonService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.host = '';
        this.messageService.setMessageStore(msgStore, 'EN');
    }
    setHost(host) {
        this.host = host;
    }
    logon(userid, password) {
        return this.http.post(this.host ? this.host + '/api/logon' : 'api/logon', { username: userid, password: password }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Logon')));
    }
    logout() {
        return this.http.delete(this.host ? this.host + '/api/logout' : 'api/logout', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Logout')));
    }
    session() {
        return this.http.get(this.host ? this.host + '/api/session' : 'api/session', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Get session')));
    }
    /**
     * this method is called during logon component initialization. It tries to get the session,
     * but without raising any errors.
     */
    try_get_session() {
        return this.http.get(this.host ? this.host + '/api/session' : 'api/session', httpOptions);
    }
    query(queryObject) {
        return this.http.post(this.host ? this.host + '/api/query' : 'api/query', queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('query')));
    }
    read(instanceGUID) {
        return this.http.get(this.host ? this.host + `/api/entity/instance/${instanceGUID}` : `api/entity/instance/${instanceGUID}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('read')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["messageType"].Exception, JSON.stringify(error));
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
}
LogonService.ɵfac = function LogonService_Factory(t) { return new (t || LogonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
LogonService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LogonService_Factory() { return new LogonService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); }, token: LogonService, providedIn: "root" });
LogonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();

class User {
}
class PluralField {
}
class QueryObject {
}
class Projection {
}
class Selection {
}
class Sort {
}
class Session {
}

class LogonComponent {
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
    ngOnDestroy() {
        this.autofill.stopMonitoring(this.inputUserID.nativeElement);
        this.autofill.stopMonitoring(this.inputPassword.nativeElement);
    }
    logon() {
        this.isWaiting = true;
        this.logonService.logon(this.user.userid, this.user.password).subscribe(data => {
            this.isWaiting = false;
            if (!data) {
                return;
            }
            if (data.err) {
                if (Array.isArray(data.err)) {
                    data.err.forEach(err => this.messageService.add(err));
                }
                else {
                    this.messageService.report(data.err);
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
        });
    }
}
LogonComponent.ɵfac = function LogonComponent_Factory(t) { return new (t || LogonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LogonService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
LogonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogonComponent, selectors: [["dk-logon"]], viewQuery: function LogonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputUserID = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputPassword = _t.first);
    } }, inputs: { title: "title", userLabel: "userLabel", pwdLabel: "pwdLabel", btnLabel: "btnLabel", redirectUrl: "redirectUrl", redirectPath: "redirectPath", host: "host" }, decls: 20, vars: 8, consts: [[1, "dk-form-logon", 3, "ngSubmit"], [3, "disabled"], [1, "text-center", "dk-mb-4"], [1, "dk-form-title", "dk-mb-3", "font-weight-normal"], [1, "dk-message-area"], [1, "dk-form-label-group"], ["type", "text", "id", "inputUserID", "name", "inputUserID", "placeholder", "User ID", "required", "", "autofocus", "", 1, "form-control", "dk-form-control", 3, "ngModel", "ngModelChange"], ["inputUserID", ""], ["for", "inputUserID"], ["type", "password", "id", "inputPassword", "name", "inputPassword", "placeholder", "Password", "required", "", 1, "form-control", "dk-form-control", 3, "ngModel", "ngModelChange"], ["inputPassword", ""], ["for", "inputPassword"], ["type", "submit", 1, "btn", "dk-btn-lg", "btn-primary", "btn-block"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [1, "fas", "fa-spinner", "fa-spin"]], template: function LogonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LogonComponent_Template_form_ngSubmit_0_listener() { return ctx.logon(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LogonComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user.userid = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LogonComponent_Template_input_ngModelChange_13_listener($event) { return ctx.user.password = $event; });
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
    } if (rf & 2) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".dk-form-logon[_ngcontent-%COMP%]{--input-padding-x:0.75rem;--input-padding-y:0.75rem;line-height:1.5;margin:0 auto;max-width:420px;padding:15px;width:100%}.dk-form-logon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:.5rem}.dk-message-area[_ngcontent-%COMP%]{margin-bottom:.5rem}.dk-mb-3[_ngcontent-%COMP%]{margin-bottom:1rem}.dk-mb-4[_ngcontent-%COMP%]{margin-bottom:1.5rem}.dk-form-title[_ngcontent-%COMP%]{color:inherit;font-family:inherit;font-size:1.75rem;line-height:1.2}.dk-form-label-group[_ngcontent-%COMP%]{margin-bottom:1rem;position:relative}.dk-form-control[_ngcontent-%COMP%]{border-radius:.25rem;font-size:1rem;height:calc(2.9rem + 2px)}.dk-form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .dk-form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{padding:var(--input-padding-y) var(--input-padding-x)}.dk-form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{border:1px solid transparent;border-radius:.25rem;color:#495057;display:block;left:0;line-height:1.5;margin-bottom:0;position:absolute;top:0;transition:all .1s ease-in-out;width:100%}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:transparent}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;-webkit-transition:background-color 50000s ease-in-out 0s;animation-name:cdk-text-field-autofill-start;transition:background-color 50000s ease-in-out 0s}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-moz-placeholder-shown){padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y) + var(--input-padding-y)*0.66667)}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-ms-input-placeholder){padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y) + var(--input-padding-y)*0.66667)}.dk-form-label-group[_ngcontent-%COMP%]   input.cdk-text-field-autofilled[_ngcontent-%COMP%], .dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y) + var(--input-padding-y)*0.66667)}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-moz-placeholder-shown) ~ label[_ngcontent-%COMP%]{color:#777;font-size:.75rem;padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y)/3)}.dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-ms-input-placeholder) ~ label[_ngcontent-%COMP%]{color:#777;font-size:.75rem;padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y)/3)}.dk-form-label-group[_ngcontent-%COMP%]   input.cdk-text-field-autofilled[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], .dk-form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{color:#777;font-size:.75rem;padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y)/3)}.dk-btn-lg[_ngcontent-%COMP%]{border-radius:.3rem;font-size:1.25rem;line-height:1.5;padding:.5rem 1rem}"] });
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dk-logon',
                template: "<form class=\"dk-form-logon\" (ngSubmit)=\"logon()\">\n  <fieldset [disabled]=\"isWaiting\">\n    <div class=\"text-center dk-mb-4\">\n      <!--<img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">-->\n      <h1 class=\"dk-form-title dk-mb-3 font-weight-normal\">{{title}}</h1>\n    </div>\n\n    <div class=\"dk-message-area\">\n      <dk-message></dk-message>\n    </div>\n\n    <div class=\"dk-form-label-group\">\n      <input type=\"text\" id=\"inputUserID\" name=\"inputUserID\" #inputUserID class=\"form-control dk-form-control\"\n             [(ngModel)]=\"user.userid\" placeholder=\"User ID\" required=\"\" autofocus=\"\">\n      <label for=\"inputUserID\">{{userLabel}}</label>\n    </div>\n\n    <div class=\"dk-form-label-group\">\n      <input type=\"password\" id=\"inputPassword\" name=\"inputPassword\" #inputPassword class=\"form-control dk-form-control\"\n             [(ngModel)]=\"user.password\" placeholder=\"Password\" required=\"\">\n      <label for=\"inputPassword\">{{pwdLabel}}</label>\n    </div>\n\n    <button class=\"btn dk-btn-lg btn-primary btn-block\" type=\"submit\">\n      <i *ngIf=\"isWaiting\" class=\"fas fa-spinner fa-spin\"></i> {{btnLabel}}\n    </button>\n  </fieldset>\n</form>\n\n",
                styles: [".dk-form-logon{--input-padding-x:0.75rem;--input-padding-y:0.75rem;line-height:1.5;margin:0 auto;max-width:420px;padding:15px;width:100%}.dk-form-logon label{font-size:1rem;margin-bottom:.5rem}.dk-message-area{margin-bottom:.5rem}.dk-mb-3{margin-bottom:1rem}.dk-mb-4{margin-bottom:1.5rem}.dk-form-title{color:inherit;font-family:inherit;font-size:1.75rem;line-height:1.2}.dk-form-label-group{margin-bottom:1rem;position:relative}.dk-form-control{border-radius:.25rem;font-size:1rem;height:calc(2.9rem + 2px)}.dk-form-label-group>input,.dk-form-label-group>label{padding:var(--input-padding-y) var(--input-padding-x)}.dk-form-label-group>label{border:1px solid transparent;border-radius:.25rem;color:#495057;display:block;left:0;line-height:1.5;margin-bottom:0;position:absolute;top:0;transition:all .1s ease-in-out;width:100%}.dk-form-label-group input:-ms-input-placeholder{color:transparent}.dk-form-label-group input::-moz-placeholder{color:transparent}.dk-form-label-group input::placeholder{color:transparent}.dk-form-label-group input:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;-webkit-transition:background-color 50000s ease-in-out 0s;animation-name:cdk-text-field-autofill-start;transition:background-color 50000s ease-in-out 0s}.dk-form-label-group input:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}.dk-form-label-group input:not(:-moz-placeholder-shown){padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y) + var(--input-padding-y)*0.66667)}.dk-form-label-group input:not(:-ms-input-placeholder){padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y) + var(--input-padding-y)*0.66667)}.dk-form-label-group input.cdk-text-field-autofilled,.dk-form-label-group input:not(:placeholder-shown){padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y) + var(--input-padding-y)*0.66667)}.dk-form-label-group input:not(:-moz-placeholder-shown)~label{color:#777;font-size:.75rem;padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y)/3)}.dk-form-label-group input:not(:-ms-input-placeholder)~label{color:#777;font-size:.75rem;padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y)/3)}.dk-form-label-group input.cdk-text-field-autofilled~label,.dk-form-label-group input:not(:placeholder-shown)~label{color:#777;font-size:.75rem;padding-bottom:calc(var(--input-padding-y)/3);padding-top:calc(var(--input-padding-y)/3)}.dk-btn-lg{border-radius:.3rem;font-size:1.25rem;line-height:1.5;padding:.5rem 1rem}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__["AutofillMonitor"] }, { type: LogonService }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pwdLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], redirectUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], redirectPath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], host: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputUserID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputUserID', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }], inputPassword: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputPassword', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }] }); })();

class LandingPageComponent {
    constructor(router, logonService) {
        this.router = router;
        this.logonService = logonService;
    }
    ngOnInit() {
    }
    logout() {
        this.logonService.logout().subscribe(data => {
            this.router.navigateByUrl('');
        });
    }
    session() {
        this.logonService.session().subscribe(data => {
            this.result = data;
        });
    }
    query() {
        const queryObject = {
            ENTITY_ID: 'person',
            RELATION_ID: 'r_user'
        };
        this.logonService.query(queryObject).subscribe(data => this.result = data);
    }
    read() {
        this.logonService.read('2FBE7490E10F11E8A90957FA46F2CECA').subscribe(data => this.result = data);
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LogonService)); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["dk-landing-page"]], decls: 15, vars: 3, consts: [["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "dk-btn-lg", "btn-primary", 3, "click"], [1, "container"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logon Successfully\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_3_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_5_listener() { return ctx.session(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Get Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_7_listener() { return ctx.query(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Query");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_9_listener() { return ctx.read(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 1, ctx.result));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], encapsulation: 2 });
LandingPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: LogonService }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dk-landing-page',
                template: "<h4>\n  Logon Successfully\n</h4>\n\n<div class=\"btn-group\" role=\"group\">\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"logout()\">Logout</button>\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"session()\">Get Session</button>\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"query()\">Query</button>\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"read()\">Read</button>\n</div>\n<div class=\"container\">\n  <pre>{{result | json}}</pre>\n</div>\n"
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: LogonService }]; }, null); })();

class LogonModule {
}
LogonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LogonModule });
LogonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LogonModule_Factory(t) { return new (t || LogonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogonModule, { declarations: function () { return [LogonComponent, LandingPageComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageModule"]]; }, exports: function () { return [LogonComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageModule"]
                ],
                declarations: [LogonComponent, LandingPageComponent],
                exports: [LogonComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of logon
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ui-logon-angular.js.map

/***/ }),

/***/ "jSQZ":
/*!****************************************************!*\
  !*** ./src/app/app/app-list/app-list.component.ts ***!
  \****************************************************/
/*! exports provided: AppListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppListComponent", function() { return AppListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function () { return { action: "display" }; };
const _c1 = function (a1, a2) { return ["/apps", a1, a2]; };
function AppListComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppListComponent_tr_37_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const app_r1 = ctx.$implicit; return app_r1.IS_EXTERNAL = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppListComponent_tr_37_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const app_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.display(app_r1.APP_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppListComponent_tr_37_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const app_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.change(app_r1.APP_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppListComponent_tr_37_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const app_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.delete(app_r1.APP_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, app_r1.APP_ID, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r1.APP_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r1.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r1.ROUTE_LINK);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", app_r1.IS_EXTERNAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r1.CHANGED_BY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r1.CHANGE_TIME);
} }
const _c2 = function (a0) { return { "display": a0 }; };
class AppListComponent {
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
        this.apps = [];
        this.appID = this.appID ? this.appID.trim() : '';
        this.appName = this.appName ? this.appName.trim() : '';
        this.identityService.searchApps(this.appID, this.appName).subscribe(data => {
            if (!data[0]) {
                this.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["messageType"].Warning);
            }
            else if (data[0]['msgCat']) {
                const messages = data;
                messages.forEach(msg => this.messageService.add(msg));
            }
            else {
                this.apps = data;
            }
        });
    }
    enterSearch($event) {
        if ($event.keyCode === 13) {
            this.search();
        }
    }
    new() {
        this.router.navigate(['apps', '/', { action: 'new' }]);
    }
    display(appID) {
        this.router.navigate(['apps', appID, { action: 'display' }]);
    }
    change(appID) {
        this.router.navigate(['apps', appID, { action: 'change' }]);
    }
    delete(appID) {
        this.toBeDeletedInstance = appID;
        this.showDeletionConfirmation = true;
    }
    cancelDeletion() {
        this.showDeletionConfirmation = false;
    }
    confirmDeletion() {
        const toBeDeletedInstanceGUID = this.apps.find(ele => ele.APP_ID === this.toBeDeletedInstance).INSTANCE_GUID;
        this.identityService.delete(toBeDeletedInstanceGUID).subscribe(errorMsg => {
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
AppListComponent.ɵfac = function AppListComponent_Factory(t) { return new (t || AppListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppListComponent, selectors: [["app-app-list"]], decls: 55, vars: 9, consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "app_id", 1, "col-sm-3", "col-form-label"], ["id", "app_id", "name", "app_id", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "app_name", 1, "col-sm-3", "col-form-label"], ["id", "app_name", "name", "app_name", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], ["type", "checkbox", "disabled", "", 3, "ngModel", "ngModelChange"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]], template: function AppListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "App ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.appID = $event; })("keyup", function AppListComponent_Template_input_keyup_5_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "App Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.appName = $event; })("keyup", function AppListComponent_Template_input_keyup_9_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppListComponent_Template_button_click_11_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppListComponent_Template_button_click_16_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "External?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Changed By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Changed At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppListComponent_tr_37_Template, 21, 11, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Confirm Deletion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppListComponent_Template_button_click_44_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppListComponent_Template_button_click_51_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppListComponent_Template_button_click_53_listener() { return ctx.confirmDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.apps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure to delete the App '", ctx.toBeDeletedInstance, "'?");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC9hcHAtbGlzdC9hcHAtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-list',
                templateUrl: './app-list.component.html',
                styleUrls: ['./app-list.component.css']
            }]
    }], function () { return [{ type: _identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "k7LS":
/*!****************************************************************!*\
  !*** ./src/app/profile/profile-list/profile-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileListComponent", function() { return ProfileListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../identity.service */ "H3s1");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function () { return { action: "display" }; };
const _c1 = function (a1, a2) { return ["/profiles", a1, a2]; };
function ProfileListComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileListComponent_tr_33_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const authProfile_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.display(authProfile_r1.PROFILE_NAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileListComponent_tr_33_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const authProfile_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.change(authProfile_r1.PROFILE_NAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileListComponent_tr_33_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const authProfile_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.delete(authProfile_r1.PROFILE_NAME); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authProfile_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, authProfile_r1.PROFILE_NAME, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](authProfile_r1.PROFILE_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](authProfile_r1.DESC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](authProfile_r1.CHANGED_BY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](authProfile_r1.CHANGE_TIME);
} }
const _c2 = function (a0) { return { "display": a0 }; };
class ProfileListComponent {
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
        this.authProfiles = [];
        this.profileName = this.profileName ? this.profileName.trim() : '';
        this.profileDesc = this.profileDesc ? this.profileDesc.trim() : '';
        this.identityService.searchAuthProfiles(this.profileName, this.profileDesc).subscribe(data => {
            if (!data[0]) {
                this.messageService.reportMessage('GENERAL', 'EMPTY_LIST', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["messageType"].Warning);
            }
            else if (data[0]['msgCat']) {
                const messages = data;
                messages.forEach(msg => this.messageService.add(msg));
            }
            else {
                this.authProfiles = data;
            }
        });
    }
    enterSearch($event) {
        if ($event.keyCode === 13) {
            this.search();
        }
    }
    new() {
        this.router.navigate(['profiles', '/', { action: 'new' }]);
    }
    display(profileName) {
        this.router.navigate(['profiles', profileName, { action: 'display' }]);
    }
    change(profileName) {
        this.router.navigate(['profiles', profileName, { action: 'change' }]);
    }
    delete(profileName) {
        this.toBeDeletedInstance = profileName;
        this.showDeletionConfirmation = true;
    }
    cancelDeletion() {
        this.showDeletionConfirmation = false;
    }
    confirmDeletion() {
        const toBeDeletedInstanceGUID = this.authProfiles.find(ele => ele.PROFILE_NAME === this.toBeDeletedInstance).INSTANCE_GUID;
        this.identityService.delete(toBeDeletedInstanceGUID).subscribe(errorMsg => {
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
ProfileListComponent.ɵfac = function ProfileListComponent_Factory(t) { return new (t || ProfileListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileListComponent, selectors: [["app-profile-list"]], decls: 51, vars: 9, consts: [[1, "card", "mb-3", "pt-3"], [1, "mt-2", "pl-4", "row"], [1, "col-6", "form-group", "row"], ["for", "profile_name", 1, "col-sm-3", "col-form-label"], ["id", "profile_name", "name", "profile_name", "type", "text", "autofocus", "", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "profile_desc", 1, "col-sm-3", "col-form-label"], ["id", "profile_desc", "name", "profile_desc", "type", "text", 1, "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4", "mx-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "cancel", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "confirm", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], ["title", "Delete", "id", "delete", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]], template: function ProfileListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profile Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.profileName = $event; })("keyup", function ProfileListComponent_Template_input_keyup_5_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.profileDesc = $event; })("keyup", function ProfileListComponent_Template_input_keyup_9_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileListComponent_Template_button_click_11_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileListComponent_Template_button_click_16_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Changed By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Changed At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProfileListComponent_tr_33_Template, 17, 9, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Confirm Deletion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileListComponent_Template_button_click_40_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileListComponent_Template_button_click_47_listener() { return ctx.cancelDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileListComponent_Template_button_click_49_listener() { return ctx.confirmDeletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profileDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authProfiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showDeletionConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.displayDeletionConfirmation));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure to delete the profile '", ctx.toBeDeletedInstance, "'?");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1saXN0L3Byb2ZpbGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-list',
                templateUrl: './profile-list.component.html',
                styleUrls: ['./profile-list.component.css']
            }]
    }], function () { return [{ type: _identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "rmH7":
/*!*********************************************************************************************!*\
  !*** ./src/app/authorization/auth-value/auth-value-singles/auth-value-singles.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AuthValueSinglesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthValueSinglesComponent", function() { return AuthValueSinglesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AuthValueSinglesComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dk-app-attribute", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthValueSinglesComponent_tr_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.insertValue(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthValueSinglesComponent_tr_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteValue(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const singleValueForm_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.attrCtrl)("formGroup", singleValueForm_r1)("isSmallSize", true)("readonly", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly);
} }
class AuthValueSinglesComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
    }
    insertValue(idx) {
        this.singleValueArray.insert(idx, this.fb.group({
            Low: ['']
        }));
    }
    deleteValue(idx) {
        if (this.singleValueArray.length === 1) {
            this.singleValueArray.at(idx).get('Low').setValue('');
        }
        else {
            this.singleValueArray.removeAt(idx);
        }
        this.singleValueArray.markAsDirty();
    }
}
AuthValueSinglesComponent.ɵfac = function AuthValueSinglesComponent_Factory(t) { return new (t || AuthValueSinglesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AuthValueSinglesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthValueSinglesComponent, selectors: [["app-auth-value-singles"]], inputs: { singleValueArray: "singleValueArray", attrCtrl: "attrCtrl", readonly: "readonly" }, decls: 9, vars: 2, consts: [[1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly"], [1, "dk-actions"], ["type", "button", "id", "add", "title", "Insert", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"]], template: function AuthValueSinglesComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.attrCtrl.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.singleValueArray.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: [".dk-actions[_ngcontent-%COMP%]{\n  width: 5rem;\n  min-width: 5rem;\n  max-width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9hdXRoLXZhbHVlL2F1dGgtdmFsdWUtc2luZ2xlcy9hdXRoLXZhbHVlLXNpbmdsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vYXV0aC12YWx1ZS9hdXRoLXZhbHVlLXNpbmdsZXMvYXV0aC12YWx1ZS1zaW5nbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstYWN0aW9uc3tcbiAgd2lkdGg6IDVyZW07XG4gIG1pbi13aWR0aDogNXJlbTtcbiAgbWF4LXdpZHRoOiA1cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthValueSinglesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-value-singles',
                templateUrl: './auth-value-singles.component.html',
                styleUrls: ['./auth-value-singles.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { singleValueArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], attrCtrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "uLAD":
/*!*****************************!*\
  !*** ./src/app/msgStore.ts ***!
  \*****************************/
/*! exports provided: msgStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgStore", function() { return msgStore; });
const msgStore = [
    { msgCat: 'EXCEPTION',
        msgName: 'GENERIC',
        msgText: {
            EN: { shortText: 'Exception Occurs in Operation: \'%s\'',
                longText: '%s1' }
        }
    },
    { msgCat: 'EXCEPTION',
        msgName: 'NOT_AUTHENTICATED_OR_SESSION_EXPIRED',
        msgText: {
            EN: { shortText: 'You are not authenticated or your session is expired!',
                longText: 'You are not authenticated or your session is expired, please <a href=\'/logon\'>re-logon</a>.' }
        }
    },
    { msgCat: 'GENERAL',
        msgName: 'EMPTY_LIST',
        msgText: {
            EN: { shortText: 'No result is found',
                longText: 'The system cannot find any items meet the search criteria.' }
        }
    },
    { msgCat: 'GENERAL',
        msgName: 'UNSAVED_CHANGES',
        msgText: {
            EN: {
                shortText: 'There are unsaved changes. Do you want to save the changes?',
                longText: ''
            }
        }
    },
    { msgCat: 'GENERAL',
        msgName: 'NO_CHANGE',
        msgText: {
            EN: {
                shortText: 'No change is made, saving is not necessary.',
                longText: 'The data is not changed, thus there is no need to save changes'
            }
        }
    },
    { msgCat: 'USER',
        msgName: 'INVALID',
        msgText: {
            EN: { shortText: 'Data is invalid, please check.',
                longText: 'The data still contains some errors, please make sure all mandatory fields are filled!' }
        }
    },
    { msgCat: 'USER',
        msgName: 'USER_NAME_EXISTS',
        msgText: {
            EN: { shortText: 'User name: \'%s\' already exists!',
                longText: '' }
        }
    },
    { msgCat: 'USER',
        msgName: 'USER_ID_EXISTS',
        msgText: {
            EN: { shortText: 'User ID: \'%s\' already exists!',
                longText: '' }
        }
    },
    { msgCat: 'USER',
        msgName: 'AT_LEAST_ONE_EMAIL',
        msgText: {
            EN: {
                shortText: 'At least one email needs to be maintained!',
                longText: ''
            }
        }
    },
    { msgCat: 'USER',
        msgName: 'USER_SAVED',
        msgText: {
            EN: {
                shortText: 'User \'%s\' is saved!',
                longText: ''
            }
        }
    },
    { msgCat: 'PERMISSION',
        msgName: 'PERMISSION_EXISTS',
        msgText: {
            EN: {
                shortText: 'The permission %s exists.',
                longText: ''
            }
        }
    },
    { msgCat: 'PERMISSION',
        msgName: 'INVALID',
        msgText: {
            EN: {
                shortText: 'The permission contains invalid inputs, please check.',
                longText: ''
            }
        }
    },
    { msgCat: 'PERMISSION',
        msgName: 'SAVED',
        msgText: {
            EN: {
                shortText: 'The permission is saved.',
                longText: ''
            }
        }
    },
    { msgCat: 'APP',
        msgName: 'APP_EXISTS',
        msgText: {
            EN: {
                shortText: 'The App %s exists.',
                longText: ''
            }
        }
    },
    { msgCat: 'APP',
        msgName: 'INVALID',
        msgText: {
            EN: {
                shortText: 'The App contains invalid inputs, please check.',
                longText: ''
            }
        }
    },
    { msgCat: 'APP',
        msgName: 'SAVED',
        msgText: {
            EN: {
                shortText: 'The App is saved.',
                longText: ''
            }
        }
    },
    { msgCat: 'AUTH_OBJECT',
        msgName: 'AUTH_OBJECT_EXISTS',
        msgText: {
            EN: {
                shortText: 'The authorization object %s exists.',
                longText: ''
            }
        }
    },
    { msgCat: 'AUTH_OBJECT',
        msgName: 'INVALID',
        msgText: {
            EN: {
                shortText: 'The authorization object contains invalid inputs, please check.',
                longText: ''
            }
        }
    },
    { msgCat: 'AUTH_OBJECT',
        msgName: 'SAVED',
        msgText: {
            EN: {
                shortText: 'The authorization object is saved.',
                longText: ''
            }
        }
    },
    { msgCat: 'APP_CATEGORY',
        msgName: 'APP_CATEGORY_EXISTS',
        msgText: {
            EN: {
                shortText: 'The application category %s exists.',
                longText: ''
            }
        }
    },
    { msgCat: 'APP_CATEGORY',
        msgName: 'INVALID',
        msgText: {
            EN: {
                shortText: 'The application category contains invalid inputs, please check.',
                longText: ''
            }
        }
    },
    { msgCat: 'APP_CATEGORY',
        msgName: 'SAVED',
        msgText: {
            EN: {
                shortText: 'The application category is saved.',
                longText: ''
            }
        }
    },
    { msgCat: 'AUTH_PROFILE',
        msgName: 'AUTH_PROFILE_EXISTS',
        msgText: {
            EN: {
                shortText: 'The authorization profile %s exists.',
                longText: ''
            }
        }
    },
    { msgCat: 'AUTH_PROFILE',
        msgName: 'INVALID',
        msgText: {
            EN: {
                shortText: 'The authorization profile contains invalid inputs, please check.',
                longText: ''
            }
        }
    },
    { msgCat: 'AUTH_PROFILE',
        msgName: 'SAVED',
        msgText: {
            EN: {
                shortText: 'The authorization profile is saved.',
                longText: ''
            }
        }
    }
];


/***/ }),

/***/ "xO/b":
/*!*************************************************************************************************!*\
  !*** ./src/app/auth_object/auth-object-detail/auth-object-field/auth-object-field.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AuthObjectFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthObjectFieldComponent", function() { return AuthObjectFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../identity.service */ "H3s1");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AuthObjectFieldComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AuthObjectFieldComponent_tr_10_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onChangeKey(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectFieldComponent_tr_10_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const authFieldForm_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSearchHelp(i_r2, authFieldForm_r1); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthObjectFieldComponent_tr_10_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.delete(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authFieldForm_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", authFieldForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r0.readonly || ctx_r0.isExisting(authFieldForm_r1) && authFieldForm_r1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", authFieldForm_r1.get("FIELD_NAME").errors == null ? null : authFieldForm_r1.get("FIELD_NAME").errors.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", authFieldForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly);
} }
class AuthObjectFieldComponent {
    constructor(fb, identityService) {
        this.fb = fb;
        this.identityService = identityService;
    }
    ngOnInit() {
        this.authFieldFormArray = this.mainForm.get('authFields');
        // Recheck each role since every time the template is initialized, Angular clears the error status.
        if (!this.readonly) {
            this.authFieldFormArray.controls.forEach((ctrl, index) => {
                this.onChangeKey(index);
            });
        }
    }
    delete(index) {
        if (index !== this.authFieldFormArray.length - 1) {
            this.authFieldFormArray.removeAt(index);
            this.authFieldFormArray.markAsDirty();
        }
    }
    onChangeKey(index) {
        const currentFormGroup = this.authFieldFormArray.at(index);
        if (this.isExisting(currentFormGroup)) {
            currentFormGroup.get('FIELD_NAME').setErrors({ message: 'Duplicate Authorization Field' });
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
            this.identityService.getAuthFieldInfo(currentFormGroup.value.FIELD_NAME).subscribe(data => {
                if (data['msgCat']) {
                    currentFormGroup.get('FIELD_NAME').setErrors({ message: data['msgShortText'] });
                }
                else {
                    currentFormGroup.get('DATA_ELEMENT').setValue(data['DATA_ELEMENT']);
                    currentFormGroup.get('auth_field_INSTANCE_GUID').setValue(data['INSTANCE_GUID']);
                }
            });
        }
    }
    isExisting(key) {
        const existIndex = this.authFieldFormArray.controls.findIndex(ctrl => ctrl.value.FIELD_NAME === key.value.FIELD_NAME
            && ctrl.pristine && ctrl.value.FIELD_NAME !== '');
        return existIndex !== -1;
    }
    onSearchHelp(rowID, exportObject) {
        const afterExportFn = function (context, rowIDx) {
            return () => context.onChangeKey(rowIDx);
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModalByEntity('authField', 'authField', exportObject, this.readonly || this.isExisting(exportObject) && exportObject.valid, null, null, afterExportFn);
    }
}
AuthObjectFieldComponent.ɵfac = function AuthObjectFieldComponent_Factory(t) { return new (t || AuthObjectFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"])); };
AuthObjectFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthObjectFieldComponent, selectors: [["app-auth-object-field"]], viewQuery: function AuthObjectFieldComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
    } }, inputs: { readonly: "readonly", mainForm: "mainForm" }, decls: 12, vars: 2, consts: [[1, "table", "table-bordered", "table-sm", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light"], ["scope", "col"], ["formArrayName", "authFields", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group", "dk-name"], ["type", "text", "formControlName", "FIELD_NAME", 1, "form-control", "form-control-sm", 3, "readonly", "change"], [1, "invalid-tooltip"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], [1, "dk-description", 3, "formGroup"], ["type", "text", "formControlName", "DATA_ELEMENT", "readonly", "", 1, "form-control", "form-control-sm"], [1, "dk-actions"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"]], template: function AuthObjectFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Authorization Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Data Element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AuthObjectFieldComponent_tr_10_Template, 14, 5, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dk-app-search-help");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authFieldFormArray.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-actions[_ngcontent-%COMP%]{\n  width: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aF9vYmplY3QvYXV0aC1vYmplY3QtZGV0YWlsL2F1dGgtb2JqZWN0LWZpZWxkL2F1dGgtb2JqZWN0LWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdXRoX29iamVjdC9hdXRoLW9iamVjdC1kZXRhaWwvYXV0aC1vYmplY3QtZmllbGQvYXV0aC1vYmplY3QtZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGstbmFtZXtcbiAgd2lkdGg6IDIwcmVtO1xufVxuLmRrLWRlc2NyaXB0aW9ue1xuICB3aWR0aDogMjByZW07XG59XG4uZGstYWN0aW9uc3tcbiAgd2lkdGg6IDEuNXJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthObjectFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-object-field',
                templateUrl: './auth-object-field.component.html',
                styleUrls: ['./auth-object-field.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mainForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchHelpComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "yVU3":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-detail/user-email/user-email.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEmailComponent", function() { return UserEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ "wNXv");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");









function UserEmailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEmailComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteEmail(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
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
} if (rf & 2) {
    const userEmailForm_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", userEmailForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("TYPE"))("formGroup", userEmailForm_r1)("readonly", ctx_r0.readonly)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx_r0.getAttrCtrlFromID("EMAIL"))("formGroup", userEmailForm_r1)("readonly", ctx_r0.readonly)("isSmallSize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
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
}
UserEmailComponent.ɵfac = function UserEmailComponent_Factory(t) { return new (t || UserEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeControlService"])); };
UserEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserEmailComponent, selectors: [["app-user-email"]], inputs: { readonly: "readonly", userForm: "userForm", relationMetas: "relationMetas" }, decls: 5, vars: 2, consts: [[1, "card", "mt-4"], [1, "card-body"], ["class", "card mb-4", 4, "ngFor", "ngForOf"], ["type", "button", "id", "add", 1, "btn", "btn-sm", "btn-primary", "float-right", 3, "disabled", "click"], [1, "card", "mb-4"], ["type", "button", "id", "remove", "aria-label", "Close", 1, "close", "d-flex", "justify-content-end", "mr-2", 3, "click"], ["aria-hidden", "true"], [1, "card-body", "row", 3, "formGroup"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "col-1", "row", "form-group", "mr-2", "form-check"], ["type", "radio", "id", "primaryEmail", "name", "PRIMARY", "formControlName", "PRIMARY", 1, "form-check-input", 3, "value"], ["for", "primaryEmail", 1, "form-check-label"]], template: function UserEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserEmailComponent_div_2_Template, 11, 10, "div", 2);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1lbWFpbC91c2VyLWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-email',
                templateUrl: './user-email.component.html',
                styleUrls: ['./user-email.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["AttributeControlService"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], relationMetas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "yVxW":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/app_category/app-category-detail/app-category-detail-role/app-category-detail-role.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AppCategoryDetailRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCategoryDetailRoleComponent", function() { return AppCategoryDetailRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../identity.service */ "H3s1");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AppCategoryDetailRoleComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppCategoryDetailRoleComponent_tr_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const roleForm_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSearchHelp(i_r2, roleForm_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roleForm_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", roleForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", roleForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", roleForm_r1);
} }
class AppCategoryDetailRoleComponent {
    constructor(fb, identityService) {
        this.fb = fb;
        this.identityService = identityService;
    }
    ngOnInit() {
        this.roleFormArray = this.mainForm.get('roles');
    }
    onSearchHelp(rowID, exportObject) {
        this.searchHelpComponent.openSearchHelpModalBySearchHelp('ROLE', 'NAME', 'NAME', exportObject, true, null);
    }
}
AppCategoryDetailRoleComponent.ɵfac = function AppCategoryDetailRoleComponent_Factory(t) { return new (t || AppCategoryDetailRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"])); };
AppCategoryDetailRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppCategoryDetailRoleComponent, selectors: [["app-app-category-detail-role"]], viewQuery: function AppCategoryDetailRoleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
    } }, inputs: { mainForm: "mainForm" }, decls: 12, vars: 2, consts: [[1, "table", "table-bordered", "table-sm", "dk-table", "ml-3", "mt-4", 3, "formGroup"], [1, "thead-light"], [1, "dk-name"], [1, "dk-description"], [1, "dk-number"], ["formArrayName", "apps", 1, "mb-4"], [4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "NAME", "readonly", "", 1, "form-control", "form-control-sm"], [1, "input-group-append"], ["type", "button", "id", "searchRole", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], [1, "dk-description", 3, "formGroup"], ["type", "text", "formControlName", "DESCRIPTION", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "number", "formControlName", "ORDER", "readonly", "", 1, "form-control", "form-control-sm"]], template: function AppCategoryDetailRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppCategoryDetailRoleComponent_tr_10_Template, 11, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dk-app-search-help");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roleFormArray.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".dk-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-name[_ngcontent-%COMP%]{\n  width: 20rem;\n}\n.dk-description[_ngcontent-%COMP%]{\n  width: 30rem;\n}\n.dk-number[_ngcontent-%COMP%]{\n  width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwX2NhdGVnb3J5L2FwcC1jYXRlZ29yeS1kZXRhaWwvYXBwLWNhdGVnb3J5LWRldGFpbC1yb2xlL2FwcC1jYXRlZ29yeS1kZXRhaWwtcm9sZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwX2NhdGVnb3J5L2FwcC1jYXRlZ29yeS1kZXRhaWwvYXBwLWNhdGVnb3J5LWRldGFpbC1yb2xlL2FwcC1jYXRlZ29yeS1kZXRhaWwtcm9sZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1uYW1le1xuICB3aWR0aDogMjByZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiAzMHJlbTtcbn1cbi5kay1udW1iZXJ7XG4gIHdpZHRoOiA1cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppCategoryDetailRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-category-detail-role',
                templateUrl: './app-category-detail-role.component.html',
                styleUrls: ['./app-category-detail-role.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"] }]; }, { mainForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchHelpComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "zCeC":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-detail/user-basic/user-basic.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBasicComponent", function() { return UserBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jor-angular */ "lxcQ");






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
UserBasicComponent.ɵfac = function UserBasicComponent_Factory(t) { return new (t || UserBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"])); };
UserBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserBasicComponent, selectors: [["app-user-basic"]], inputs: { readonly: "readonly", userForm: "userForm", relationMetas: "relationMetas" }, decls: 20, vars: 36, consts: [[1, "card", "mt-4"], [1, "card-header"], [1, "card-body"], [1, "mt-2", "row"], [1, "col-md-6", "col-lg-4", 3, "attributeControl", "formGroup", "readonly", "isSmallSize"], [1, "col-md-4"]], template: function UserBasicComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kZXRhaWwvdXNlci1iYXNpYy91c2VyLWJhc2ljLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-basic',
                templateUrl: './user-basic.component.html',
                styleUrls: ['./user-basic.component.css']
            }]
    }], function () { return [{ type: jor_angular__WEBPACK_IMPORTED_MODULE_2__["AttributeControlService"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], relationMetas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map