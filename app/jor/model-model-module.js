(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["model-model-module"],{

/***/ "./src/app/model/attribute-meta/attribute-meta.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/model/attribute-meta/attribute-meta.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-actions{\n  width: 3rem;\n  min-width: 3rem;\n  max-width: 3rem;\n}\n.dk-description{\n  width: 15rem;\n  min-width: 15rem;\n  max-width: 15rem;\n}\n.dk-number{\n  width: 6rem;\n  min-width: 6rem;\n  max-width: 6rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvYXR0cmlidXRlLW1ldGEvYXR0cmlidXRlLW1ldGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kZWwvYXR0cmlidXRlLW1ldGEvYXR0cmlidXRlLW1ldGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGstYWN0aW9uc3tcbiAgd2lkdGg6IDNyZW07XG4gIG1pbi13aWR0aDogM3JlbTtcbiAgbWF4LXdpZHRoOiAzcmVtO1xufVxuLmRrLWRlc2NyaXB0aW9ue1xuICB3aWR0aDogMTVyZW07XG4gIG1pbi13aWR0aDogMTVyZW07XG4gIG1heC13aWR0aDogMTVyZW07XG59XG4uZGstbnVtYmVye1xuICB3aWR0aDogNnJlbTtcbiAgbWluLXdpZHRoOiA2cmVtO1xuICBtYXgtd2lkdGg6IDZyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/model/attribute-meta/attribute-meta.component.html":
/*!********************************************************************!*\
  !*** ./src/app/model/attribute-meta/attribute-meta.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-2\">\n  <div class=\"card-header\"><span class=\"fab fa-elementor\"></span> Attribute</div>\n  <div class=\"card-body\">\n    <table class=\"table table-bordered table-sm dk-table\" [formGroup]=\"parentForm\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Attribute Name</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Data Element</th>\n          <th scope=\"col\">Data Type</th>\n          <th scope=\"col\">Length</th>\n          <th scope=\"col\">Decimal</th>\n          <th scope=\"col\" title=\"Primary Key\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">PK</th>\n          <th scope=\"col\" title=\"Auto Incremental\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">AI</th>\n        </tr>\n      </thead>\n\n      <tbody formArrayName=\"ATTRIBUTES\">\n        <tr *ngFor=\"let attrFormGroup of formArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                    (click)=\"deleteAttribute(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"text\" formControlName=\"ATTR_NAME\" [readonly]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                   class=\"form-control form-control-sm\" (change)=\"onChangeAttributeName(i)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"text\" formControlName=\"ATTR_DESC\" class=\"form-control form-control-sm dk-description\"\n                   [readonly]=\"readonly || isFieldGray(attrFormGroup.value)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"text\" formControlName=\"DATA_ELEMENT\" [readonly]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                   class=\"form-control form-control-sm\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <select formControlName=\"DATA_TYPE\" (change)=\"onChangeDataType(attrFormGroup)\" class=\"form-control form-control-sm\">\n              <option *ngFor=\"let opt of dataTypes\" [value]=\"opt.key\">{{opt.value}}</option>\n            </select>\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"number\" formControlName=\"DATA_LENGTH\" class=\"dk-number\"\n                   class=\"form-control form-control-sm\"\n                   [readonly]=\"(+attrFormGroup.value.DATA_TYPE !== 1 && +attrFormGroup.value.DATA_TYPE !== 4) || readonly || isFieldGray(attrFormGroup.value)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"number\" formControlName=\"DECIMAL\" class=\"dk-number\"\n                   class=\"form-control form-control-sm\" [readonly]=\"+attrFormGroup.value.DATA_TYPE !== 4 || readonly || isFieldGray(attrFormGroup.value)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">\n            <input type=\"checkbox\" formControlName=\"PRIMARY_KEY\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">\n            <input type=\"checkbox\" formControlName=\"AUTO_INCREMENT\">\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/model/attribute-meta/attribute-meta.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/model/attribute-meta/attribute-meta.component.ts ***!
  \******************************************************************/
/*! exports provided: AttributeMetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeMetaComponent", function() { return AttributeMetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttributeMetaComponent = /** @class */ (function () {
    function AttributeMetaComponent(fb) {
        this.fb = fb;
        this.dataTypes = [
            { key: 1, value: 'Char' },
            { key: 2, value: 'Integer' },
            { key: 3, value: 'Boolean' },
            { key: 4, value: 'Decimal' },
            { key: 5, value: 'String' },
            { key: 6, value: 'Binary' },
            { key: 7, value: 'Date' },
            { key: 8, value: 'Timestamp' }
        ];
        this.deletedAttributes = [];
    }
    AttributeMetaComponent.prototype.ngOnInit = function () { };
    AttributeMetaComponent.prototype.ngOnChanges = function () {
        this.generateFormArray();
        this.formArray = this.parentForm.get('ATTRIBUTES');
    };
    AttributeMetaComponent.prototype.deleteAttribute = function (index) {
        if (index !== this.formArray.length - 1) {
            this.deletedAttributes.push(this.formArray.at(index).get('ATTR_GUID').value);
            this.formArray.removeAt(index);
            this.formArray.markAsDirty();
        }
    };
    AttributeMetaComponent.prototype.onChangeDataType = function (attrFormGroup) {
        switch (attrFormGroup.get('DATA_TYPE').value) {
            case '1': // char
                attrFormGroup.get('DATA_LENGTH').setValue(10);
                attrFormGroup.get('DECIMAL').setValue(null);
                break;
            case '4': // decimal
                attrFormGroup.get('DATA_LENGTH').setValue(23);
                attrFormGroup.get('DECIMAL').setValue(2);
                break;
            default:
                attrFormGroup.get('DATA_LENGTH').setValue(null);
                attrFormGroup.get('DECIMAL').setValue(null);
        }
        attrFormGroup.get('DATA_LENGTH').markAsDirty();
    };
    AttributeMetaComponent.prototype.onChangeAttributeName = function (index) {
        if (index === this.formArray.length - 1 && !this.formArray.controls[index].value.ATTR_GUID) {
            // Only work for the last New line
            this.formArray.push(this.fb.group({
                ATTR_GUID: [''],
                RELATION_ID: [''],
                ATTR_NAME: [''],
                ATTR_DESC: [''],
                DATA_ELEMENT: [''],
                DATA_TYPE: [1],
                DATA_LENGTH: [10],
                DECIMAL: [null],
                PRIMARY_KEY: [false],
                AUTO_INCREMENT: [false]
            }));
        }
    };
    AttributeMetaComponent.prototype.processChangedAttributes = function () {
        var changedAttributes = [];
        var changedAttribute;
        var order = 0;
        if (this.formArray.dirty) {
            this.formArray.controls.forEach(function (attribute, index) {
                var currentOrder = attribute.get('ORDER') ? attribute.get('ORDER').value : index;
                order = order <= currentOrder ? currentOrder + 1 : order + 1;
                if (attribute.get('ATTR_NAME').value.trim() === '') {
                    return;
                }
                if (attribute.dirty) {
                    changedAttribute = { ORDER: order };
                    if (attribute.get('ATTR_GUID').value) { // Update Case
                        changedAttribute['action'] = 'update';
                        changedAttribute['ATTR_GUID'] = attribute.get('ATTR_GUID').value;
                        var attrFormGroup_1 = attribute;
                        Object.keys(attrFormGroup_1.controls).forEach(function (key) {
                            var formControl = attrFormGroup_1.controls[key];
                            if (formControl.dirty) {
                                changedAttribute[key] = formControl.value;
                            }
                        });
                    }
                    else { // New Add Case
                        changedAttribute['action'] = 'add';
                        var attrFormGroup_2 = attribute;
                        Object.keys(attrFormGroup_2.controls).forEach(function (key) {
                            var formControl = attrFormGroup_2.controls[key];
                            changedAttribute[key] = formControl.value;
                        });
                    }
                }
                else {
                    changedAttribute = null;
                }
                if (changedAttribute) {
                    changedAttributes.push(changedAttribute);
                }
            });
            // Deletion Case
            this.deletedAttributes.forEach(function (attributeGUID) {
                changedAttribute = { action: 'delete', ATTR_GUID: attributeGUID };
                changedAttributes.push(changedAttribute);
            });
            return changedAttributes;
        }
    };
    AttributeMetaComponent.prototype.generateFormArray = function () {
        var _this = this;
        var formArray = [];
        if (this.attributes) {
            this.attributes.forEach(function (attribute) {
                formArray.push(_this.fb.group({
                    ATTR_GUID: [attribute.ATTR_GUID],
                    RELATION_ID: [attribute.RELATION_ID],
                    ATTR_NAME: [attribute.ATTR_NAME],
                    ATTR_DESC: [attribute.ATTR_DESC],
                    DATA_ELEMENT: [attribute.DATA_ELEMENT],
                    DATA_TYPE: [{ value: attribute.DATA_TYPE, disabled: _this.readonly || _this.isFieldGray(attribute) }],
                    DATA_LENGTH: [attribute.DATA_LENGTH],
                    DECIMAL: [attribute.DECIMAL],
                    ORDER: [attribute.ORDER],
                    PRIMARY_KEY: [{ value: attribute.PRIMARY_KEY, disabled: _this.readonly || _this.isFieldGray(attribute) }],
                    AUTO_INCREMENT: [{ value: attribute.AUTO_INCREMENT, disabled: _this.readonly || _this.isFieldGray(attribute) }]
                }));
            });
        }
        if (this.isNewMode) {
            formArray.push(this.fb.group({
                ATTR_GUID: [''],
                RELATION_ID: [''],
                ATTR_NAME: [''],
                ATTR_DESC: [''],
                DATA_ELEMENT: [''],
                DATA_TYPE: [1],
                DATA_LENGTH: [10],
                DECIMAL: [null],
                PRIMARY_KEY: [false],
                AUTO_INCREMENT: [false]
            }));
        }
        this.parentForm.addControl('ATTRIBUTES', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](formArray));
    };
    AttributeMetaComponent.prototype.switchEditDisplay = function (readonly) {
        var _this = this;
        if (!readonly) { // Edit Mode
            this.formArray.controls.forEach(function (attrFormGroup) {
                if (!_this.isFieldGray(attrFormGroup.value)) {
                    attrFormGroup.get('DATA_TYPE').enable();
                    attrFormGroup.get('PRIMARY_KEY').enable();
                    attrFormGroup.get('AUTO_INCREMENT').enable();
                }
            });
            this.formArray.push(this.fb.group({
                ATTR_GUID: [''],
                RELATION_ID: [this.relationID],
                ATTR_NAME: [''],
                ATTR_DESC: [''],
                DATA_ELEMENT: [''],
                DATA_TYPE: [1],
                DATA_LENGTH: [10],
                DECIMAL: [null],
                PRIMARY_KEY: [false],
                AUTO_INCREMENT: [false]
            }));
        }
        else { // Display Mode
            var lastIndex = this.formArray.length - 1;
            while (lastIndex >= 0 && this.formArray.controls[lastIndex].get('ATTR_NAME').value.trim() === '') {
                this.formArray.removeAt(lastIndex);
                lastIndex--;
            }
            this.formArray.controls.forEach(function (attrFormGroup) {
                attrFormGroup.get('DATA_TYPE').disable();
                attrFormGroup.get('PRIMARY_KEY').disable();
                attrFormGroup.get('AUTO_INCREMENT').disable();
            });
        }
    };
    AttributeMetaComponent.prototype.isFieldGray = function (attribute) {
        return this.relationID.substr(0, 3) === 'rs_' &&
            attribute && attribute.ATTR_NAME &&
            (attribute.ATTR_NAME === 'VALID_FROM' ||
                attribute.ATTR_NAME === 'VALID_TO' ||
                attribute.ATTR_NAME.substr(-14, 14) === '_INSTANCE_GUID' ||
                attribute.ATTR_NAME.substr(-10, 10) === '_ENTITY_ID');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], AttributeMetaComponent.prototype, "parentForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AttributeMetaComponent.prototype, "attributes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AttributeMetaComponent.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AttributeMetaComponent.prototype, "relationID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AttributeMetaComponent.prototype, "isNewMode", void 0);
    AttributeMetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attribute-meta',
            template: __webpack_require__(/*! ./attribute-meta.component.html */ "./src/app/model/attribute-meta/attribute-meta.component.html"),
            styles: [__webpack_require__(/*! ./attribute-meta.component.css */ "./src/app/model/attribute-meta/attribute-meta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AttributeMetaComponent);
    return AttributeMetaComponent;
}());



/***/ }),

/***/ "./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL2RhdGEtZG9tYWluL2RhdGEtZG9tYWluLWRldGFpbC9kYXRhLWRvbWFpbi1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  data-domain-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DataDomainDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDomainDetailComponent", function() { return DataDomainDetailComponent; });
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

var DataDomainDetailComponent = /** @class */ (function () {
    function DataDomainDetailComponent() {
    }
    DataDomainDetailComponent.prototype.ngOnInit = function () {
    };
    DataDomainDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-domain-detail',
            template: __webpack_require__(/*! ./data-domain-detail.component.html */ "./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.html"),
            styles: [__webpack_require__(/*! ./data-domain-detail.component.css */ "./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataDomainDetailComponent);
    return DataDomainDetailComponent;
}());



/***/ }),

/***/ "./src/app/model/data-domain/data-domain.component.css":
/*!*************************************************************!*\
  !*** ./src/app/model/data-domain/data-domain.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL2RhdGEtZG9tYWluL2RhdGEtZG9tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/model/data-domain/data-domain.component.html":
/*!**************************************************************!*\
  !*** ./src/app/model/data-domain/data-domain.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Under Construction!!!\n</p>\n"

/***/ }),

/***/ "./src/app/model/data-domain/data-domain.component.ts":
/*!************************************************************!*\
  !*** ./src/app/model/data-domain/data-domain.component.ts ***!
  \************************************************************/
/*! exports provided: DataDomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDomainComponent", function() { return DataDomainComponent; });
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

var DataDomainComponent = /** @class */ (function () {
    function DataDomainComponent() {
    }
    DataDomainComponent.prototype.ngOnInit = function () {
    };
    DataDomainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-domain',
            template: __webpack_require__(/*! ./data-domain.component.html */ "./src/app/model/data-domain/data-domain.component.html"),
            styles: [__webpack_require__(/*! ./data-domain.component.css */ "./src/app/model/data-domain/data-domain.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataDomainComponent);
    return DataDomainComponent;
}());



/***/ }),

/***/ "./src/app/model/data-element/data-element-detail/data-element-detail.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/model/data-element/data-element-detail/data-element-detail.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL2RhdGEtZWxlbWVudC9kYXRhLWVsZW1lbnQtZGV0YWlsL2RhdGEtZWxlbWVudC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/model/data-element/data-element-detail/data-element-detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/model/data-element/data-element-detail/data-element-detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  data-element-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/model/data-element/data-element-detail/data-element-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/model/data-element/data-element-detail/data-element-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DataElementDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataElementDetailComponent", function() { return DataElementDetailComponent; });
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

var DataElementDetailComponent = /** @class */ (function () {
    function DataElementDetailComponent() {
    }
    DataElementDetailComponent.prototype.ngOnInit = function () {
    };
    DataElementDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-element-detail',
            template: __webpack_require__(/*! ./data-element-detail.component.html */ "./src/app/model/data-element/data-element-detail/data-element-detail.component.html"),
            styles: [__webpack_require__(/*! ./data-element-detail.component.css */ "./src/app/model/data-element/data-element-detail/data-element-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataElementDetailComponent);
    return DataElementDetailComponent;
}());



/***/ }),

/***/ "./src/app/model/data-element/data-element.component.css":
/*!***************************************************************!*\
  !*** ./src/app/model/data-element/data-element.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL2RhdGEtZWxlbWVudC9kYXRhLWVsZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/model/data-element/data-element.component.html":
/*!****************************************************************!*\
  !*** ./src/app/model/data-element/data-element.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Under Construction!!!\n</p>\n"

/***/ }),

/***/ "./src/app/model/data-element/data-element.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/model/data-element/data-element.component.ts ***!
  \**************************************************************/
/*! exports provided: DataElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataElementComponent", function() { return DataElementComponent; });
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

var DataElementComponent = /** @class */ (function () {
    function DataElementComponent() {
    }
    DataElementComponent.prototype.ngOnInit = function () {
    };
    DataElementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-element',
            template: __webpack_require__(/*! ./data-element.component.html */ "./src/app/model/data-element/data-element.component.html"),
            styles: [__webpack_require__(/*! ./data-element.component.css */ "./src/app/model/data-element/data-element.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataElementComponent);
    return DataElementComponent;
}());



/***/ }),

/***/ "./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-actions{\n  width: 3rem;\n  min-width: 3rem;\n  max-width: 3rem;\n}\n.dk-description{\n  width: 15rem;\n  min-width: 15rem;\n  max-width: 15rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvZW50aXR5LXR5cGUvZW50aXR5LXR5cGUtZGV0YWlsL2VudGl0eS10eXBlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kZWwvZW50aXR5LXR5cGUvZW50aXR5LXR5cGUtZGV0YWlsL2VudGl0eS10eXBlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogM3JlbTtcbiAgbWluLXdpZHRoOiAzcmVtO1xuICBtYXgtd2lkdGg6IDNyZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiAxNXJlbTtcbiAgbWluLXdpZHRoOiAxNXJlbTtcbiAgbWF4LXdpZHRoOiAxNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"entityMeta\" [formGroup]=\"entityTypeForm\">\n  <div class=\"form-group\" [class.dk-invalid]=\"entityTypeForm.get('ENTITY_ID').invalid && (entityTypeForm.touched || entityTypeForm.dirty)\">\n    <label for=\"entity-type\" class=\"col-form-label form-control-sm\">Entity Type:\n      <span class=\"dk-invalid-feedback\">\n        {{entityTypeForm.get('ENTITY_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"entity-type\" [readonly]=\"readonly || !isNewMode\"\n           name=\"entity-type\" formControlName=\"ENTITY_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"entity-desc\" class=\"col-form-label form-control-sm\">Entity Description:</label>\n    <textarea class=\"form-control\" id=\"entity-desc\" name=\"entity-desc\" rows=\"2\"\n              formControlName=\"ENTITY_DESC\" [readonly]=\"readonly\" (change)=\"onChangeEntityDesc()\"></textarea>\n  </div>\n\n  <app-attribute-meta [readonly]=\"readonly\" [parentForm]=\"entityTypeForm\" [attributes]=\"attributes\"\n                      [relationID]=\"entityMeta.ENTITY_ID\" [isNewMode]=\"isNewMode\">\n  </app-attribute-meta>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-user-check\"></span> Role</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm dk-table\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">Action</th>\n            <th scope=\"col\">Role</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Conditional Attribute</th>\n            <th scope=\"col\">Conditional Value</th>\n          </tr>\n        </thead>\n\n        <tbody formArrayName=\"ROLES\">\n        <tr *ngFor=\"let roleFormGroup of roleFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRole(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"roleFormGroup\"\n              [class.dk-invalid]=\"roleFormGroup.get('ROLE_ID').invalid && (roleFormGroup.touched || roleFormGroup.dirty)\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"ROLE_ID\"\n                     [readonly]=\"readonly || oldRole(roleFormGroup) && roleFormGroup.valid\" (change)=\"onChangeRoleID(i)\">\n              <div class=\"invalid-tooltip\">\n                {{roleFormGroup.get('ROLE_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRole\"\n                        (click)=\"onSearchHelp('ROLE_ID', roleFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <input type=\"text\" formControlName=\"ROLE_DESC\" readonly class=\"form-control form-control-sm dk-description\">\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <select formControlName=\"CONDITIONAL_ATTR\"  class=\"form-control form-control-sm\">\n              <option *ngFor=\"let opt of attrFormArray.controls\" [value]=\"opt.value.ATTR_NAME\">{{opt.value.ATTR_NAME}}</option>\n            </select>\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <input type=\"text\" formControlName=\"CONDITIONAL_VALUE\" [readonly]=\"readonly\" class=\"form-control form-control-sm\">\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n"

/***/ }),

/***/ "./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EntityTypeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityTypeDetailComponent", function() { return EntityTypeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../msgStore */ "./src/app/msgStore.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../attribute-meta/attribute-meta.component */ "./src/app/model/attribute-meta/attribute-meta.component.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model.service */ "./src/app/model/model.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _model_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model-validators */ "./src/app/model/model-validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var EntityTypeDetailComponent = /** @class */ (function () {
    function EntityTypeDetailComponent(route, router, fb, uniqueEntityTypeValidator, messageService, modelService, dialogService, entityService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.uniqueEntityTypeValidator = uniqueEntityTypeValidator;
        this.messageService = messageService;
        this.modelService = modelService;
        this.dialogService = dialogService;
        this.entityService = entityService;
        this.readonly = true;
        this.isNewMode = false;
        this.changedEntityType = {};
        this.bypassProtection = false;
        this.isSearchListShown = true;
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_6__["msgStore"], 'EN');
    }
    Object.defineProperty(EntityTypeDetailComponent.prototype, "roleFormArray", {
        get: function () {
            return this.entityTypeForm.get('ROLES');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityTypeDetailComponent.prototype, "attrFormArray", {
        get: function () {
            return this.entityTypeForm.get('ATTRIBUTES');
        },
        enumerable: true,
        configurable: true
    });
    EntityTypeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            var entityID = params.get('entityID');
            if (entityID === 'new') {
                var entityType = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityMeta"]();
                entityType.ENTITY_ID = '';
                entityType.ENTITY_DESC = '';
                entityType.ROLES = [];
                _this.isNewMode = true;
                _this.readonly = false;
                _this.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(entityType), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([]));
            }
            else {
                _this.readonly = true;
                _this.isNewMode = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(_this.entityService.getEntityMeta(entityID), _this.entityService.getRelationMeta(entityID));
            }
        })).subscribe(function (data) {
            if ('ENTITY_ID' in data[0]) {
                _this.messageService.clearMessages();
                _this.entityMeta = data[0];
                _this.attributes = 'RELATION_ID' in data[1] ? data[1]['ATTRIBUTES'] : [];
                _this._generateEntityTypeForm();
            }
            else {
                _this.messageService.clearMessages();
                _this.entityMeta = null;
                _this.entityTypeForm = null;
                if (data[0] instanceof Array) {
                    data[0].forEach(function (err) { return _this.messageService.add(err); });
                }
                else {
                    _this.messageService.report(data[0]);
                }
            }
        });
        this.modelService.isSearchListShown$.subscribe(function (data) { return _this.isSearchListShown = data; });
    };
    EntityTypeDetailComponent.prototype.showSearchList = function () {
        this.isSearchListShown = true;
        this.modelService.showSearchList();
    };
    EntityTypeDetailComponent.prototype.onSearchHelp = function (fieldName, control, rowID) {
        var searchHelpMeta = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelp"]();
        searchHelpMeta.OBJECT_NAME = 'Role';
        searchHelpMeta.METHOD = function (entityService) {
            return function (searchTerm) { return entityService.listRole(searchTerm); };
        }(this.entityService);
        searchHelpMeta.BEHAVIOUR = 'A';
        searchHelpMeta.MULTI = false;
        searchHelpMeta.FUZZY_SEARCH = true;
        searchHelpMeta.FIELDS = [
            { FIELD_NAME: 'ROLE_ID', FIELD_DESC: 'Role', IMPORT: true, EXPORT: true, LIST_POSITION: 1, FILTER_POSITION: 0 },
            { FIELD_NAME: 'ROLE_DESC', FIELD_DESC: 'Description', IMPORT: true, EXPORT: true, LIST_POSITION: 2, FILTER_POSITION: 0 }
        ];
        searchHelpMeta.READ_ONLY = this.readonly || this.oldRole(control) && control.valid;
        var afterExportFn = function (context, ruleIdx) {
            return function () { return context.onChangeRoleID(ruleIdx, true); };
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModal(searchHelpMeta, control, afterExportFn);
    };
    EntityTypeDetailComponent.prototype._generateEntityTypeForm = function () {
        var _this = this;
        this.entityTypeForm = this.fb.group({});
        this.entityTypeForm.addControl('ENTITY_ID', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.entityMeta.ENTITY_ID, { updateOn: 'blur' }));
        if (this.isNewMode) {
            this.entityTypeForm.get('ENTITY_ID').setValidators(this._validateEntityId);
            this.entityTypeForm.get('ENTITY_ID').setAsyncValidators(this.uniqueEntityTypeValidator.validate.bind(this.uniqueEntityTypeValidator));
        }
        this.entityTypeForm.addControl('ENTITY_DESC', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.entityMeta.ENTITY_DESC));
        // Compose roles
        var formArray = [];
        this.entityMeta.ROLES.forEach(function (role) {
            formArray.push(_this.fb.group({
                ROLE_ID: [role.ROLE_ID],
                ROLE_DESC: [role.ROLE_DESC],
                CONDITIONAL_ATTR: [{ value: role.CONDITIONAL_ATTR, disabled: _this.readonly }],
                CONDITIONAL_VALUE: [role.CONDITIONAL_VALUE]
            }));
        });
        if (this.isNewMode) {
            formArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CONDITIONAL_ATTR: [''],
                CONDITIONAL_VALUE: ['']
            }));
        }
        this.entityTypeForm.addControl('ROLES', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](formArray));
    };
    EntityTypeDetailComponent.prototype._validateEntityId = function (c) {
        if (c.value.trim() === '') {
            return { message: 'Entity ID is mandatory' };
        }
        if (c.value.toString().toLowerCase() === 'new') {
            return { message: '"NEW/new" is reserved, thus is not allowed to use!' };
        }
        if (c.value.toString().toLowerCase().substr(0, 2) === 'r_' ||
            c.value.toString().toLowerCase().substr(0, 3) === 'rs_') {
            return { message: 'Entity ID cannot be started with "r_" or "rs_"!' };
        }
        return null;
    };
    EntityTypeDetailComponent.prototype.switchEditDisplay = function () {
        var _this = this;
        if (this.isNewMode) {
            this.dialogService.confirm('Discard the new Entity Type?').subscribe(function (confirm) {
                if (confirm) {
                    _this._switch2DisplayMode();
                    _this.entityMeta = null;
                    _this.modelService.sendDialogAnswer('OK');
                }
                else {
                    _this.modelService.sendDialogAnswer('CANCEL');
                }
            });
            return;
        }
        if (!this.readonly) { // In Change Mode -> Display Mode
            if (this.entityTypeForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                    if (confirm) { // Discard changes and switch to Display Mode
                        _this._generateEntityTypeForm();
                        _this.entityTypeForm.reset(_this.entityTypeForm.value);
                        _this._switch2DisplayMode();
                    }
                });
            }
            else { // Switch to display mode
                this._switch2DisplayMode();
            }
        }
        else { // In Display Mode -> Change Mode
            this.readonly = false;
            this.attrComponent.switchEditDisplay(this.readonly);
            this.roleFormArray.controls.forEach(function (roleFormGroup) { return roleFormGroup.get('CONDITIONAL_ATTR').enable(); });
            this.roleFormArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CONDITIONAL_ATTR: [''],
                CONDITIONAL_VALUE: ['']
            }));
        }
        this.messageService.clearMessages();
    };
    EntityTypeDetailComponent.prototype._switch2DisplayMode = function () {
        this.readonly = true;
        this.attrComponent.switchEditDisplay(this.readonly);
        this.roleFormArray.controls.forEach(function (roleFormGroup) {
            roleFormGroup.get('CONDITIONAL_ATTR').disable();
        });
        var lastIndex = this.roleFormArray.length - 1;
        while (lastIndex >= 0 && this.roleFormArray.controls[lastIndex].get('ROLE_ID').value.trim() === '') {
            this.roleFormArray.removeAt(lastIndex);
            lastIndex--;
        }
    };
    EntityTypeDetailComponent.prototype.onChangeEntityID = function () {
        this.modelService.updateEntityID(this.entityTypeForm.get('ENTITY_ID').value);
    };
    EntityTypeDetailComponent.prototype.onChangeEntityDesc = function () {
        this.modelService.updateEntityDesc(this.entityTypeForm.get('ENTITY_DESC').value);
    };
    EntityTypeDetailComponent.prototype.deleteRole = function (index) {
        if (index !== this.roleFormArray.length - 1) {
            this.roleFormArray.removeAt(index);
            this.roleFormArray.markAsDirty();
        }
    };
    EntityTypeDetailComponent.prototype.onChangeRoleID = function (index, isExportedFromSH) {
        var currentRoleFormGroup = this.roleFormArray.controls[index];
        if (this.roleFormArray.controls.findIndex(function (roleCtrl, i) {
            return i !== index && roleCtrl.get('ROLE_ID').value === currentRoleFormGroup.get('ROLE_ID').value;
        }) !== -1) {
            currentRoleFormGroup.get('ROLE_ID').setErrors({ message: 'Duplicate roles' });
            return;
        }
        if (index === this.roleFormArray.length - 1 && currentRoleFormGroup.value.ROLE_ID.trim() !== '') {
            // Only work for the last New line
            this.roleFormArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CONDITIONAL_ATTR: [''],
                CONDITIONAL_VALUE: ['']
            }));
        }
        if (!isExportedFromSH) {
            this.entityService.getRoleDesc(currentRoleFormGroup.value.ROLE_ID).subscribe(function (data) {
                if (data['msgCat']) {
                    currentRoleFormGroup.get('ROLE_ID').setErrors({ message: data['msgShortText'] });
                }
                else {
                    currentRoleFormGroup.get('ROLE_DESC').setValue(data);
                }
            });
        }
    };
    EntityTypeDetailComponent.prototype.oldRole = function (formGroup) {
        return this.entityMeta.ROLES ?
            this.entityMeta.ROLES.findIndex(function (role) { return role.ROLE_ID === formGroup.get('ROLE_ID').value; }) !== -1 :
            false;
    };
    EntityTypeDetailComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (this.isNewMode || (!this.bypassProtection && this.entityTypeForm && this.entityTypeForm.dirty)) {
            var dialogAnswer = this.dialogService.confirm('Discard changes?');
            dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                    _this.modelService.sendDialogAnswer('OK');
                }
                else {
                    _this.modelService.sendDialogAnswer('CANCEL');
                }
            });
            return dialogAnswer;
        }
        else {
            return true;
        }
    };
    EntityTypeDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.entityTypeForm.dirty) {
            return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
        }
        if (!this.entityTypeForm.valid) {
            return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
        }
        if (this.isNewMode) {
            this.changedEntityType['action'] = 'add';
            this.changedEntityType['ENTITY_ID'] = this.entityTypeForm.controls['ENTITY_ID'].value;
        }
        else {
            this.changedEntityType['action'] = 'update';
            this.changedEntityType['ENTITY_ID'] = this.entityMeta.ENTITY_ID;
        }
        if (this.entityTypeForm.controls['ENTITY_DESC'].dirty) {
            this.changedEntityType['ENTITY_DESC'] = this.entityTypeForm.controls['ENTITY_DESC'].value;
        }
        this.changedEntityType['ATTRIBUTES'] = this.attrComponent.processChangedAttributes();
        this._processChangedRoles();
        this.entityService.saveEntityType(this.changedEntityType)
            .subscribe(function (data) { return _this._postActivityAfterSavingEntityType(data); });
    };
    EntityTypeDetailComponent.prototype._processChangedRoles = function () {
        var _this = this;
        var changedRoles = [];
        if (this.roleFormArray.dirty) {
            this.changedEntityType['ROLES'] = changedRoles;
            var action_1;
            // Add/Update Case
            this.roleFormArray.controls.forEach(function (role) {
                if (role.get('ROLE_ID').value.trim() === '') {
                    return;
                }
                var index = _this.entityMeta.ROLES.findIndex(function (existRole) { return role.value.ROLE_ID === existRole.ROLE_ID; });
                action_1 = index === -1 ? 'add' : 'update';
                if (role.dirty) {
                    var changedRole = { action: action_1, ROLE_ID: role.value.ROLE_ID };
                    if (role.get('CONDITIONAL_ATTR').dirty) {
                        changedRole['CONDITIONAL_ATTR'] = role.value.CONDITIONAL_ATTR;
                    }
                    if (role.get('CONDITIONAL_VALUE').dirty) {
                        changedRole['CONDITIONAL_VALUE'] = role.value.CONDITIONAL_VALUE;
                    }
                    changedRoles.push(changedRole);
                }
            });
            // Deletion Case
            this.entityMeta.ROLES.forEach(function (role) {
                var index = _this.roleFormArray.controls.findIndex(function (roleControl) { return roleControl.get('ROLE_ID').value === role.ROLE_ID; });
                if (index === -1) {
                    var deletedRole = { action: 'delete', ROLE_ID: role.ROLE_ID };
                    changedRoles.push(deletedRole);
                }
            });
        }
    };
    EntityTypeDetailComponent.prototype._postActivityAfterSavingEntityType = function (data) {
        var _this = this;
        if (data[0] && data[0]['ENTITY_ID']) {
            if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/entity-type/' + data[0]['ENTITY_ID']]);
            }
            else {
                this.readonly = true;
                this.entityMeta = data[0];
                this.attributes = data[1].ATTRIBUTES;
                this.changedEntityType = {};
                this._generateEntityTypeForm();
                this.messageService.reportMessage('MODEL', 'ENTITY_TYPE_SAVED', 'S', this.entityMeta.ENTITY_ID);
            }
        }
        else {
            if (data instanceof Array) {
                data.forEach(function (err) { return _this.messageService.add(err); });
            }
            else {
                this.messageService.report(data);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_8__["AttributeMetaComponent"]),
        __metadata("design:type", _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_8__["AttributeMetaComponent"])
    ], EntityTypeDetailComponent.prototype, "attrComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"]),
        __metadata("design:type", jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"])
    ], EntityTypeDetailComponent.prototype, "searchHelpComponent", void 0);
    EntityTypeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entity-type-detail',
            template: __webpack_require__(/*! ./entity-type-detail.component.html */ "./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.html"),
            styles: [__webpack_require__(/*! ./entity-type-detail.component.css */ "./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _model_validators__WEBPACK_IMPORTED_MODULE_11__["UniqueEntityTypeValidator"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _model_service__WEBPACK_IMPORTED_MODULE_9__["ModelService"],
            _dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"],
            jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]])
    ], EntityTypeDetailComponent);
    return EntityTypeDetailComponent;
}());



/***/ }),

/***/ "./src/app/model/entity-type/entity-type.component.css":
/*!*************************************************************!*\
  !*** ./src/app/model/entity-type/entity-type.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL2VudGl0eS10eXBlL2VudGl0eS10eXBlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/model/entity-type/entity-type.component.html":
/*!**************************************************************!*\
  !*** ./src/app/model/entity-type/entity-type.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchEntityType(searchBox.value)\" >\n      </div>\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedEntityType\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newEntityType()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let entityType of entityTypeList\" routerLink=\"/model/entity-type/{{entityType.ENTITY_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(entityType)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{entityType.ENTITY_ID}}</h5>\n          <small>version: {{entityType.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{entityType.ENTITY_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{entityType.LAST_CHANGE_BY}} @{{entityType.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/model/entity-type/entity-type.component.ts":
/*!************************************************************!*\
  !*** ./src/app/model/entity-type/entity-type.component.ts ***!
  \************************************************************/
/*! exports provided: EntityTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityTypeComponent", function() { return EntityTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model.service */ "./src/app/model/model.service.ts");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../msgStore */ "./src/app/msgStore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EntityTypeComponent = /** @class */ (function () {
    function EntityTypeComponent(entityService, modelService, messageService, route, router) {
        this.entityService = entityService;
        this.modelService = modelService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.isSearchListShown = true;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_7__["msgStore"], 'EN');
    }
    EntityTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.entityService.listEntityType(term); })).subscribe(function (data) {
            _this.entityTypeList = data;
            var entityID;
            if (_this.route.snapshot.firstChild) {
                entityID = _this.route.snapshot.firstChild.paramMap.get('entityID');
            }
            if (entityID) {
                if (entityID === 'new') {
                    _this._newEntityType();
                }
                else {
                    _this.onSelect(_this.entityTypeList.find(function (entityType) { return entityType.ENTITY_ID === entityID; }));
                }
            }
        });
        this.searchEntityType(''); // The initial list
        this.modelService.theSelectedEntityType$.subscribe(function (data) {
            if (_this.theSelectedEntityType) {
                _this.theSelectedEntityType.ENTITY_ID = data.ENTITY_ID;
                _this.theSelectedEntityType.ENTITY_DESC = data.ENTITY_DESC;
            }
        });
        this.modelService.isSearchListShown$.subscribe(function (data) { return _this.isSearchListShown = data; });
        this.modelService.dialogAnswer$.subscribe(function (answer) {
            if (answer === 'OK' && !_this.entityTypeList[0].CREATE_TIME) {
                _this.entityTypeList.splice(0, 1); // Remove the first one.
            }
            else if (answer === 'CANCEL') {
                var entityID_1 = _this.route.snapshot.firstChild.paramMap.get('entityID');
                if (entityID_1) {
                    if (entityID_1 === 'new') {
                        _this.onSelect(_this.entityTypeList[0]);
                    }
                    else {
                        _this.onSelect(_this.entityTypeList.find(function (entityType) { return entityType.ENTITY_ID === entityID_1; }));
                    }
                }
            }
        });
    };
    EntityTypeComponent.prototype.onSelect = function (entityType) {
        if (entityType) {
            this.theSelectedEntityType = entityType;
            this.modelService.setSelectedEntityType(entityType);
        }
    };
    EntityTypeComponent.prototype.searchEntityType = function (term) {
        this.searchTerms.next(term);
    };
    EntityTypeComponent.prototype.hideSearchList = function () {
        this.isSearchListShown = false;
        this.modelService.hideSearchList();
    };
    EntityTypeComponent.prototype.newEntityType = function () {
        if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('entityID') === 'new') {
            this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
        }
        else {
            this._newEntityType();
            this.router.navigate(['/model/entity-type/new']);
        }
    };
    EntityTypeComponent.prototype._newEntityType = function () {
        this.theSelectedEntityType = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityType"]();
        this.theSelectedEntityType.ENTITY_ID = 'new';
        this.theSelectedEntityType.ENTITY_DESC = 'description';
        this.theSelectedEntityType.VERSION_NO = 1;
        this.theSelectedEntityType.LAST_CHANGE_BY = 'DH001';
        this.theSelectedEntityType.LAST_CHANGE_TIME = new Date().toDateString();
        this.modelService.setSelectedEntityType(this.theSelectedEntityType);
        this.entityTypeList.splice(0, 0, this.theSelectedEntityType);
    };
    EntityTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entity-type',
            template: __webpack_require__(/*! ./entity-type.component.html */ "./src/app/model/entity-type/entity-type.component.html"),
            styles: [__webpack_require__(/*! ./entity-type.component.css */ "./src/app/model/entity-type/entity-type.component.css")]
        }),
        __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"],
            _model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EntityTypeComponent);
    return EntityTypeComponent;
}());



/***/ }),

/***/ "./src/app/model/model-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/model/model-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ModelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelRoutingModule", function() { return ModelRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.component */ "./src/app/model/model.component.ts");
/* harmony import */ var _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity-type/entity-type.component */ "./src/app/model/entity-type/entity-type.component.ts");
/* harmony import */ var _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity-type/entity-type-detail/entity-type-detail.component */ "./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.ts");
/* harmony import */ var _relation_relation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relation/relation.component */ "./src/app/model/relation/relation.component.ts");
/* harmony import */ var _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relation/relation-detail/relation-detail.component */ "./src/app/model/relation/relation-detail/relation-detail.component.ts");
/* harmony import */ var _work_protection_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../work-protection.guard */ "./src/app/work-protection.guard.ts");
/* harmony import */ var _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./relationship/relationship.component */ "./src/app/model/relationship/relationship.component.ts");
/* harmony import */ var _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./relationship/relationship-detail/relationship-detail.component */ "./src/app/model/relationship/relationship-detail/relationship-detail.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./role/role.component */ "./src/app/model/role/role.component.ts");
/* harmony import */ var _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./role/role-detail/role-detail.component */ "./src/app/model/role/role-detail/role-detail.component.ts");
/* harmony import */ var _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-element/data-element.component */ "./src/app/model/data-element/data-element.component.ts");
/* harmony import */ var _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data-domain/data-domain.component */ "./src/app/model/data-domain/data-domain.component.ts");
/* harmony import */ var _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data-domain/data-domain-detail/data-domain-detail.component */ "./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.ts");
/* harmony import */ var _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data-element/data-element-detail/data-element-detail.component */ "./src/app/model/data-element/data-element-detail/data-element-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '',
        component: _model_component__WEBPACK_IMPORTED_MODULE_2__["ModelComponent"],
        children: [
            { path: 'entity-type', component: _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_3__["EntityTypeComponent"],
                children: [{ path: ':entityID', canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]], component: _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_4__["EntityTypeDetailComponent"] }] },
            { path: 'role', component: _role_role_component__WEBPACK_IMPORTED_MODULE_10__["RoleComponent"],
                children: [{ path: ':roleID', canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]], component: _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_11__["RoleDetailComponent"] }] },
            { path: 'relation', component: _relation_relation_component__WEBPACK_IMPORTED_MODULE_5__["RelationComponent"],
                children: [{ path: ':relationID', canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]], component: _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_6__["RelationDetailComponent"] }] },
            { path: 'relationship', component: _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_8__["RelationshipComponent"],
                children: [{ path: ':relationshipID', canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]], component: _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_9__["RelationshipDetailComponent"] }] },
            { path: 'data-element', component: _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_12__["DataElementComponent"],
                children: [{ path: ':relationshipID', canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]], component: _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_15__["DataElementDetailComponent"] }] },
            { path: 'data-domain', component: _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_13__["DataDomainComponent"],
                children: [{ path: ':relationshipID', canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]], component: _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_14__["DataDomainDetailComponent"] }] },
            { path: '**', redirectTo: '/model/entity-type', pathMatch: 'full' },
        ]
    }
];
var ModelRoutingModule = /** @class */ (function () {
    function ModelRoutingModule() {
    }
    ModelRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ModelRoutingModule);
    return ModelRoutingModule;
}());



/***/ }),

/***/ "./src/app/model/model-validators.ts":
/*!*******************************************!*\
  !*** ./src/app/model/model-validators.ts ***!
  \*******************************************/
/*! exports provided: UniqueRoleValidator, UniqueRelationValidator, UniqueRelationshipValidator, UniqueEntityTypeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueRoleValidator", function() { return UniqueRoleValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueRelationValidator", function() { return UniqueRelationValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueRelationshipValidator", function() { return UniqueRelationshipValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueEntityTypeValidator", function() { return UniqueEntityTypeValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model.service */ "./src/app/model/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// noinspection JSAnnotator
var UniqueRoleValidator = /** @class */ (function () {
    function UniqueRoleValidator(entityService, modelService) {
        this.entityService = entityService;
        this.modelService = modelService;
    }
    UniqueRoleValidator.prototype.validate = function (ctrl) {
        var _this = this;
        return this.entityService.getRoleDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data['msgName'] && data['msgName'] === 'ROLE_NOT_EXIST') {
                _this.modelService.updateRoleID(ctrl.value);
                return null;
            }
            else {
                return { message: '"' + ctrl.value + '" already exists' };
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return null; }));
    };
    UniqueRoleValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"],
            _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])
    ], UniqueRoleValidator);
    return UniqueRoleValidator;
}());

// noinspection JSAnnotator
var UniqueRelationValidator = /** @class */ (function () {
    function UniqueRelationValidator(entityService, modelService) {
        this.entityService = entityService;
        this.modelService = modelService;
    }
    UniqueRelationValidator.prototype.validate = function (ctrl) {
        var _this = this;
        if (ctrl.value === 'r_') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        return this.entityService.getRelationDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data['msgName'] && data['msgName'] === 'RELATION_NOT_EXIST') {
                _this.modelService.updateRelationID(ctrl.value);
                return null;
            }
            else {
                return { message: '"' + ctrl.value + '" already exists' };
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return null; }));
    };
    UniqueRelationValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"],
            _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])
    ], UniqueRelationValidator);
    return UniqueRelationValidator;
}());

// noinspection JSAnnotator
var UniqueRelationshipValidator = /** @class */ (function () {
    function UniqueRelationshipValidator(entityService, modelService) {
        this.entityService = entityService;
        this.modelService = modelService;
    }
    UniqueRelationshipValidator.prototype.validate = function (ctrl) {
        var _this = this;
        if (ctrl.value === 'rs_') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        return this.entityService.getRelationshipDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data['msgName'] && data['msgName'] === 'RELATIONSHIP_NOT_EXIST') {
                _this.modelService.updateRelationshipID(ctrl.value);
                return null;
            }
            else {
                return { message: '"' + ctrl.value + '" already exists' };
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return null; }));
    };
    UniqueRelationshipValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"],
            _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])
    ], UniqueRelationshipValidator);
    return UniqueRelationshipValidator;
}());

// noinspection JSAnnotator
var UniqueEntityTypeValidator = /** @class */ (function () {
    function UniqueEntityTypeValidator(entityService, modelService) {
        this.entityService = entityService;
        this.modelService = modelService;
    }
    UniqueEntityTypeValidator.prototype.validate = function (ctrl) {
        var _this = this;
        return this.entityService.getEntityTypeDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data['msgName'] && data['msgName'] === 'ENTITY_TYPE_NOT_EXIST') {
                _this.modelService.updateEntityID(ctrl.value);
                return null;
            }
            else {
                return { message: '"' + ctrl.value + '" already exists' };
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return null; }));
    };
    UniqueEntityTypeValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"],
            _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])
    ], UniqueEntityTypeValidator);
    return UniqueEntityTypeValidator;
}());



/***/ }),

/***/ "./src/app/model/model.component.css":
/*!*******************************************!*\
  !*** ./src/app/model/model.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dk-model-content {\n  margin-top: .5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvbW9kZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL21vZGVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstbW9kZWwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/model/model.component.html":
/*!********************************************!*\
  !*** ./src/app/model/model.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs mt-1\">\n  <li class=\"nav-item active\">\n    <a class=\"nav-link\" routerLink=\"/model/entity-type\" routerLinkActive=\"active\">Entity</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/role\" routerLinkActive=\"active\">Role</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/relation\" routerLinkActive=\"active\">Relation</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/relationship\" routerLinkActive=\"active\">Relationship</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/data-element\">Data Element</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/data-domain\">Data Domain</a>\n  </li>\n</ul>\n\n<div class=\"dk-model-content\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/model/model.component.ts":
/*!******************************************!*\
  !*** ./src/app/model/model.component.ts ***!
  \******************************************/
/*! exports provided: ModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelComponent", function() { return ModelComponent; });
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

var ModelComponent = /** @class */ (function () {
    function ModelComponent() {
    }
    ModelComponent.prototype.ngOnInit = function () {
    };
    ModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-model',
            template: __webpack_require__(/*! ./model.component.html */ "./src/app/model/model.component.html"),
            styles: [__webpack_require__(/*! ./model.component.css */ "./src/app/model/model.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModelComponent);
    return ModelComponent;
}());



/***/ }),

/***/ "./src/app/model/model.module.ts":
/*!***************************************!*\
  !*** ./src/app/model/model.module.ts ***!
  \***************************************/
/*! exports provided: ModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function() { return ModelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.component */ "./src/app/model/model.component.ts");
/* harmony import */ var _model_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model-routing.module */ "./src/app/model/model-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entity-type/entity-type.component */ "./src/app/model/entity-type/entity-type.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entity-type/entity-type-detail/entity-type-detail.component */ "./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attribute-meta/attribute-meta.component */ "./src/app/model/attribute-meta/attribute-meta.component.ts");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _relation_relation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./relation/relation.component */ "./src/app/model/relation/relation.component.ts");
/* harmony import */ var _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./relation/relation-detail/relation-detail.component */ "./src/app/model/relation/relation-detail/relation-detail.component.ts");
/* harmony import */ var _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./relationship/relationship.component */ "./src/app/model/relationship/relationship.component.ts");
/* harmony import */ var _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./relationship/relationship-detail/relationship-detail.component */ "./src/app/model/relationship/relationship-detail/relationship-detail.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./role/role.component */ "./src/app/model/role/role.component.ts");
/* harmony import */ var _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./role/role-detail/role-detail.component */ "./src/app/model/role/role-detail/role-detail.component.ts");
/* harmony import */ var _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data-element/data-element.component */ "./src/app/model/data-element/data-element.component.ts");
/* harmony import */ var _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data-domain/data-domain.component */ "./src/app/model/data-domain/data-domain.component.ts");
/* harmony import */ var _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data-domain/data-domain-detail/data-domain-detail.component */ "./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.ts");
/* harmony import */ var _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data-element/data-element-detail/data-element-detail.component */ "./src/app/model/data-element/data-element-detail/data-element-detail.component.ts");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _model_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModelRoutingModule"],
                ui_message_angular__WEBPACK_IMPORTED_MODULE_10__["MessageModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                jor_angular__WEBPACK_IMPORTED_MODULE_21__["JorAngularModule"]
            ],
            declarations: [
                _model_component__WEBPACK_IMPORTED_MODULE_2__["ModelComponent"],
                _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_5__["EntityTypeComponent"],
                _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_7__["EntityTypeDetailComponent"],
                _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_9__["AttributeMetaComponent"],
                _relation_relation_component__WEBPACK_IMPORTED_MODULE_11__["RelationComponent"],
                _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_12__["RelationDetailComponent"],
                _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_13__["RelationshipComponent"],
                _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_14__["RelationshipDetailComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_15__["RoleComponent"],
                _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_16__["RoleDetailComponent"],
                _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_17__["DataElementComponent"],
                _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_20__["DataElementDetailComponent"],
                _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_18__["DataDomainComponent"],
                _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_19__["DataDomainDetailComponent"]
            ]
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "./src/app/model/model.service.ts":
/*!****************************************!*\
  !*** ./src/app/model/model.service.ts ***!
  \****************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelService = /** @class */ (function () {
    function ModelService() {
        this.dialogAnswer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dialogAnswer$ = this.dialogAnswer.asObservable();
        this.isSearchListShown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isSearchListShown$ = this.isSearchListShown.asObservable();
        this.selectedEntityTypeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.theSelectedEntityType$ = this.selectedEntityTypeSource.asObservable();
        this.selectedRelationSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.theSelectedRelation$ = this.selectedRelationSource.asObservable();
        this.selectedRelationshipSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.theSelectedRelationship$ = this.selectedRelationshipSource.asObservable();
        this.selectedRoleSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.theSelectedRole$ = this.selectedRoleSource.asObservable();
    }
    ModelService.prototype.showSearchList = function () {
        this.isSearchListShown.next(true);
    };
    ModelService.prototype.hideSearchList = function () {
        this.isSearchListShown.next(false);
    };
    ModelService.prototype.updateEntityID = function (entityID) {
        this.theSelectedEntityType.ENTITY_ID = entityID;
        this.selectedEntityTypeSource.next(this.theSelectedEntityType);
    };
    ModelService.prototype.updateEntityDesc = function (entityDesc) {
        this.theSelectedEntityType.ENTITY_DESC = entityDesc;
        this.selectedEntityTypeSource.next(this.theSelectedEntityType);
    };
    ModelService.prototype.setSelectedEntityType = function (entityType) {
        this.theSelectedEntityType = entityType;
    };
    ModelService.prototype.updateRelationID = function (relationID) {
        this.theSelectedRelation.RELATION_ID = relationID;
        this.selectedRelationSource.next(this.theSelectedRelation);
    };
    ModelService.prototype.updateRelationDesc = function (relationDesc) {
        this.theSelectedRelation.RELATION_DESC = relationDesc;
        this.selectedRelationSource.next(this.theSelectedRelation);
    };
    ModelService.prototype.setSelectedRelation = function (relation) {
        this.theSelectedRelation = relation;
    };
    ModelService.prototype.updateRelationshipID = function (relationshipID) {
        this.theSelectedRelationship.RELATIONSHIP_ID = relationshipID;
        this.selectedRelationshipSource.next(this.theSelectedRelationship);
    };
    ModelService.prototype.updateRelationshipDesc = function (relationshipDesc) {
        this.theSelectedRelationship.RELATIONSHIP_DESC = relationshipDesc;
        this.selectedRelationshipSource.next(this.theSelectedRelationship);
    };
    ModelService.prototype.setSelectedRelationship = function (relationship) {
        this.theSelectedRelationship = relationship;
    };
    ModelService.prototype.updateRoleID = function (roleID) {
        this.theSelectedRole.ROLE_ID = roleID;
        this.selectedRoleSource.next(this.theSelectedRole);
    };
    ModelService.prototype.updateRoleDesc = function (roleDesc) {
        this.theSelectedRole.ROLE_DESC = roleDesc;
        this.selectedRoleSource.next(this.theSelectedRole);
    };
    ModelService.prototype.setSelectedRole = function (role) {
        this.theSelectedRole = role;
    };
    ModelService.prototype.sendDialogAnswer = function (answer) {
        this.dialogAnswer.next(answer);
    };
    ModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/model/relation/relation-detail/relation-detail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/model/relation/relation-detail/relation-detail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dk-actions{\n  width: 5rem;\n  min-width: 5rem;\n  max-width: 5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvcmVsYXRpb24vcmVsYXRpb24tZGV0YWlsL3JlbGF0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kZWwvcmVsYXRpb24vcmVsYXRpb24tZGV0YWlsL3JlbGF0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiA1cmVtO1xuICBtaW4td2lkdGg6IDVyZW07XG4gIG1heC13aWR0aDogNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/model/relation/relation-detail/relation-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/model/relation/relation-detail/relation-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"relationMeta\" [formGroup]=\"relationForm\">\n  <div class=\"form-group\" [class.dk-invalid]=\"relationForm.get('RELATION_ID').invalid && (relationForm.touched || relationForm.dirty)\">\n    <label for=\"relation\" class=\"col-form-label form-control-sm\">Relation:\n      <span class=\"dk-invalid-feedback\">\n        {{relationForm.get('RELATION_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"relation\" [readonly]=\"readonly || !isNewMode\"\n          name=\"relation\" formControlName=\"RELATION_ID\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"relation-desc\" class=\"col-form-label form-control-sm\">Relation Description:</label>\n    <textarea class=\"form-control\" id=\"relation-desc\" name=\"relation-desc\" rows=\"2\"\n              (change)=\"onChangeRelationDesc()\" formControlName=\"RELATION_DESC\" [readonly]=\"readonly\"></textarea>\n  </div>\n\n  <app-attribute-meta [readonly]=\"readonly\" [parentForm]=\"relationForm\" [attributes]=\"relationMeta.ATTRIBUTES\"\n                      [relationID]=\"relationMeta.RELATION_ID\" [isNewMode]=\"isNewMode\">\n  </app-attribute-meta>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-atlas\"></span> Association</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm dk-table\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Right Relation</th>\n          <th scope=\"col\">Cardinality</th>\n          <th scope=\"col\" title=\"Foreign Key Check\">FC</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"ASSOCIATIONS\">\n        <tr *ngFor=\"let associationFormGroup of associationFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteAssociation(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n            <button class=\"btn btn-sm\" type=\"button\" (click)=\"openFieldMapModal(i)\" title=\"Fields Mapping\">\n              <span class=\"fas fa-map-signs\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"associationFormGroup\"\n              [class.dk-invalid]=\"associationFormGroup.get('RIGHT_RELATION_ID').invalid && (associationFormGroup.touched || associationFormGroup.dirty)\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"RIGHT_RELATION_ID\"\n                     [readonly]=\"readonly || oldRightRelation(associationFormGroup) && associationFormGroup.valid\" (change)=\"onChangeRightRelationID(i)\">\n              <div class=\"invalid-tooltip\">\n                {{associationFormGroup.get('RIGHT_RELATION_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRelation\"\n                        (click)=\"onSearchHelp('RIGHT_RELATION_ID', associationFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"associationFormGroup\">\n            <select class=\"form-control form-control-sm\" formControlName=\"CARDINALITY\">\n              <option>[0..1]</option>\n              <option>[1..1]</option>\n              <option>[0..n]</option>\n              <option>[1..n]</option>\n            </select>\n          </td>\n          <td [formGroup]=\"associationFormGroup\">\n            <input type=\"checkbox\" formControlName=\"FOREIGN_KEY_CHECK\">\n          </td>\n        </tr>\n\n        <div *ngIf=\"currentAssociationForm\" class=\"modal fade dk-modal-open\" [ngClass]=\"{'show': isFieldMapShown}\"\n             [ngStyle]=\"{'display': displayFieldMapModal}\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"detail\">Fields Mapping</h5>\n                <button type=\"button\" class=\"close\" (click)=\"closeFieldMapModal()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <table class=\"table table-bordered table-sm dk-table\" [formGroup]=\"currentAssociationForm\">\n                  <thead class=\"thead-light\">\n                  <tr>\n                    <th scope=\"col\">Action</th>\n                    <th scope=\"col\">Left Table Field</th>\n                    <th scope=\"col\">Right Table Field</th>\n                  </tr>\n                  </thead>\n\n                  <tbody formArrayName=\"FIELDS_MAPPING\">\n                    <tr *ngFor=\"let fieldMapFormGroup of fieldMapFormArray.controls; let i = index\">\n                      <td class=\"dk-actions\">\n                        <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteFieldMap(i)\" title=\"Delete\">\n                          <span class=\"far fa-trash-alt\"></span>\n                        </button>\n                      </td>\n                      <td [formGroup]=\"fieldMapFormGroup\"\n                          [class.dk-invalid]=\"fieldMapFormGroup.get('LEFT_FIELD').invalid && (fieldMapFormGroup.touched || fieldMapFormGroup.dirty)\">\n                        <div class=\"input-group\">\n                          <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"LEFT_FIELD\"\n                                 [readonly]=\"readonly || oldFieldMap(fieldMapFormGroup) && fieldMapFormGroup.valid\" (change)=\"onChangeLeftField(i)\">\n                          <div class=\"invalid-tooltip\">\n                            {{fieldMapFormGroup.get('LEFT_FIELD').errors?.message}}\n                          </div>\n                        </div>\n                      </td>\n                      <td [formGroup]=\"fieldMapFormGroup\"\n                          [class.dk-invalid]=\"fieldMapFormGroup.get('RIGHT_FIELD').invalid && (fieldMapFormGroup.touched || fieldMapFormGroup.dirty)\">\n                        <div class=\"input-group\">\n                          <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"RIGHT_FIELD\"\n                                 [readonly]=\"readonly || oldFieldMap(fieldMapFormGroup) && fieldMapFormGroup.valid\" (change)=\"onChangeRightField(i)\">\n                          <div class=\"invalid-tooltip\">\n                            {{fieldMapFormGroup.get('RIGHT_FIELD').errors?.message}}\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"closeFieldMapModal()\">OK</button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n\n"

/***/ }),

/***/ "./src/app/model/relation/relation-detail/relation-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/model/relation/relation-detail/relation-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RelationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationDetailComponent", function() { return RelationDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../msgStore */ "./src/app/msgStore.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../attribute-meta/attribute-meta.component */ "./src/app/model/attribute-meta/attribute-meta.component.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model.service */ "./src/app/model/model.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _model_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model-validators */ "./src/app/model/model-validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var RelationDetailComponent = /** @class */ (function () {
    function RelationDetailComponent(route, router, fb, uniqueRelationValidator, messageService, modelService, dialogService, entityService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.uniqueRelationValidator = uniqueRelationValidator;
        this.messageService = messageService;
        this.modelService = modelService;
        this.dialogService = dialogService;
        this.entityService = entityService;
        this.readonly = true;
        this.isNewMode = false;
        this.isFieldMapShown = false;
        this.changedRelation = {};
        this.bypassProtection = false;
        this.isSearchListShown = true;
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_5__["msgStore"], 'EN');
    }
    Object.defineProperty(RelationDetailComponent.prototype, "associationFormArray", {
        get: function () {
            return this.relationForm.get('ASSOCIATIONS');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelationDetailComponent.prototype, "fieldMapFormArray", {
        get: function () {
            if (this.currentAssociationForm) {
                return this.currentAssociationForm.get('FIELDS_MAPPING');
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelationDetailComponent.prototype, "displayFieldMapModal", {
        get: function () {
            return this.isFieldMapShown ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    RelationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) {
            var relationID = params.get('relationID');
            if (relationID === 'new') {
                var relation = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["RelationMeta"]();
                relation.RELATION_ID = 'r_';
                relation.RELATION_DESC = '';
                relation.ATTRIBUTES = [];
                _this.isNewMode = true;
                _this.readonly = false;
                _this.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(relation);
            }
            else {
                _this.readonly = true;
                _this.isNewMode = false;
                return _this.entityService.getRelationMeta(params.get('relationID'));
            }
        })).subscribe(function (data) {
            if ('RELATION_ID' in data) { // If the return data is a message
                _this.messageService.clearMessages();
                _this.relationMeta = data;
                _this._generateRelationForm();
            }
            else {
                _this.messageService.clearMessages();
                _this.relationMeta = null;
                _this.relationForm = null;
                if (data instanceof Array) {
                    data.forEach(function (err) { return _this.messageService.add(err); });
                }
                else {
                    _this.messageService.report(data);
                }
            }
        });
        this.modelService.isSearchListShown$.subscribe(function (data) { return _this.isSearchListShown = data; });
    };
    RelationDetailComponent.prototype.showSearchList = function () {
        this.isSearchListShown = true;
        this.modelService.showSearchList();
    };
    RelationDetailComponent.prototype.onSearchHelp = function (fieldName, control, rowID) {
        var searchHelpMeta = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["SearchHelp"]();
        searchHelpMeta.OBJECT_NAME = 'Relation';
        searchHelpMeta.METHOD = function (entityService) {
            return function (searchTerm) { return entityService.listRelation(searchTerm); };
        }(this.entityService);
        searchHelpMeta.BEHAVIOUR = 'A';
        searchHelpMeta.MULTI = false;
        searchHelpMeta.FUZZY_SEARCH = true;
        searchHelpMeta.FIELDS = [
            { FIELD_NAME: 'RELATION_ID', FIELD_DESC: 'Relation', IMPORT: true, EXPORT: true, IE_FIELD_NAME: fieldName, LIST_POSITION: 1, FILTER_POSITION: 0 },
            { FIELD_NAME: 'RELATION_DESC', FIELD_DESC: 'Description', IMPORT: true, EXPORT: true, LIST_POSITION: 2, FILTER_POSITION: 0 }
        ];
        searchHelpMeta.READ_ONLY = this.readonly || this.oldRightRelation(control) && control.valid;
        var afterExportFn = function (context, ruleIdx) {
            return function () { return context.onChangeRightRelationID(ruleIdx, true); };
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModal(searchHelpMeta, control, afterExportFn);
    };
    RelationDetailComponent.prototype._generateRelationForm = function () {
        var _this = this;
        this.relationForm = this.fb.group({});
        this.relationForm.addControl('RELATION_ID', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.relationMeta.RELATION_ID, { updateOn: 'blur' }));
        if (this.isNewMode) {
            this.relationForm.get('RELATION_ID').setValidators(this._validateRelationId);
            this.relationForm.get('RELATION_ID').setAsyncValidators(this.uniqueRelationValidator.validate.bind(this.uniqueRelationValidator));
        }
        this.relationForm.addControl('RELATION_DESC', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.relationMeta.RELATION_DESC));
        // Compose Associations
        var formArray = [];
        if (this.relationMeta.ASSOCIATIONS) {
            this.relationMeta.ASSOCIATIONS.forEach(function (association) {
                var fieldsMapArray = [];
                association.FIELDS_MAPPING.forEach(function (fieldsMap) {
                    fieldsMapArray.push(_this.fb.group({
                        LEFT_FIELD: [fieldsMap.LEFT_FIELD],
                        RIGHT_FIELD: [fieldsMap.RIGHT_FIELD]
                    }));
                });
                formArray.push(_this.fb.group({
                    RIGHT_RELATION_ID: [association.RIGHT_RELATION_ID],
                    CARDINALITY: [{ value: association.CARDINALITY, disabled: _this.readonly }],
                    FOREIGN_KEY_CHECK: [{ value: association.FOREIGN_KEY_CHECK, disabled: _this.readonly }],
                    FIELDS_MAPPING: _this.fb.array(fieldsMapArray)
                }));
            });
        }
        if (this.isNewMode) {
            formArray.push(this.fb.group({
                RIGHT_RELATION_ID: [''],
                CARDINALITY: ['[0..1]'],
                FOREIGN_KEY_CHECK: [0],
                FIELDS_MAPPING: this.fb.array([
                    this.fb.group({
                        LEFT_FIELD: [''],
                        RIGHT_FIELD: ['']
                    })
                ])
            }));
        }
        this.relationForm.addControl('ASSOCIATIONS', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](formArray));
    };
    RelationDetailComponent.prototype._validateRelationId = function (c) {
        if (c.value.trim() === '') {
            return { message: 'Relation ID is mandatory' };
        }
        if (c.value.toString().toLowerCase() === 'new') {
            return { message: '"NEW/new" is reserved, thus is not allowed to use!' };
        }
        if (c.value.toString().toLowerCase().substr(0, 2) !== 'r_') {
            return { message: 'Relation name must be started with "r_"!' };
        }
        if (c.value.toString().length < 3) {
            return { message: 'Relation name must have length larger than 2!' };
        }
        return null;
    };
    RelationDetailComponent.prototype.switchEditDisplay = function () {
        var _this = this;
        if (this.isNewMode) {
            this.dialogService.confirm('Discard the new Entity Type?').subscribe(function (confirm) {
                if (confirm) {
                    _this._switch2DisplayMode();
                    _this.relationMeta = null;
                    _this.modelService.sendDialogAnswer('OK');
                }
                else {
                    _this.modelService.sendDialogAnswer('CANCEL');
                }
            });
            return;
        }
        if (!this.readonly) { // In Change Mode -> Display Mode
            if (this.relationForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                    if (confirm) { // Discard changes and switch to Display Mode
                        _this._generateRelationForm();
                        _this.relationForm.reset(_this.relationForm.value);
                        _this._switch2DisplayMode();
                    }
                });
            }
            else { // Switch to display mode
                this._switch2DisplayMode();
            }
        }
        else { // In Display Mode -> Change Mode
            this.readonly = false;
            this.associationFormArray.controls.forEach(function (associationFormGroup) {
                associationFormGroup.get('CARDINALITY').enable();
                associationFormGroup.get('FOREIGN_KEY_CHECK').enable();
            });
            this.associationFormArray.push(this.fb.group({
                RIGHT_RELATION_ID: [''],
                CARDINALITY: ['[0..1]'],
                FOREIGN_KEY_CHECK: [0],
                FIELDS_MAPPING: this.fb.array([])
            }));
            this.attrComponent.switchEditDisplay(this.readonly);
        }
        this.messageService.clearMessages();
    };
    RelationDetailComponent.prototype._switch2DisplayMode = function () {
        this.readonly = true;
        var lastIndex = this.associationFormArray.length - 1;
        while (lastIndex >= 0 && this.associationFormArray.controls[lastIndex].get('RIGHT_RELATION_ID').value.trim() === '') {
            this.associationFormArray.removeAt(lastIndex);
            lastIndex--;
        }
        this.associationFormArray.controls.forEach(function (associationFormGroup) {
            associationFormGroup.get('CARDINALITY').disable();
            associationFormGroup.get('FOREIGN_KEY_CHECK').disable();
        });
        this.attrComponent.switchEditDisplay(this.readonly);
    };
    RelationDetailComponent.prototype.onChangeRelationID = function () {
        this.modelService.updateRelationID(this.relationForm.get('RELATION_ID').value);
    };
    RelationDetailComponent.prototype.onChangeRelationDesc = function () {
        this.modelService.updateRelationDesc(this.relationForm.get('RELATION_DESC').value);
    };
    RelationDetailComponent.prototype.deleteAssociation = function (index) {
        if (index !== this.associationFormArray.length - 1) {
            this.associationFormArray.removeAt(index);
            this.associationFormArray.markAsDirty();
        }
    };
    RelationDetailComponent.prototype.openFieldMapModal = function (index) {
        var _this = this;
        this.currentAssociationForm = this.associationFormArray.controls[index];
        if (this.currentAssociationForm.get('RIGHT_RELATION_ID').value.trim() === '') {
            return;
        }
        this.entityService.getRelationMeta(this.currentAssociationForm.get('RIGHT_RELATION_ID').value)
            .subscribe(function (data) {
            _this.currentRightRelationMeta = data;
        });
        if (this.readonly === false) {
            this.fieldMapFormArray.push(this.fb.group({ LEFT_FIELD: [''], RIGHT_FIELD: [''] }));
        }
        this.currentAssociation = this.relationMeta.ASSOCIATIONS ? this.relationMeta.ASSOCIATIONS[index] : null;
        this.isFieldMapShown = true;
    };
    RelationDetailComponent.prototype.closeFieldMapModal = function () {
        // this.currentAssociationForm.setValue(this.currentAssociationForm.value); // Or the value won't be updated.
        var lastIndex = this.fieldMapFormArray.length - 1;
        while (lastIndex >= 0 && this.fieldMapFormArray.controls[lastIndex].get('RIGHT_FIELD').value.trim() === '') {
            this.fieldMapFormArray.removeAt(lastIndex);
            lastIndex--;
        }
        this.isFieldMapShown = false;
    };
    RelationDetailComponent.prototype.deleteFieldMap = function (index) {
        if (index !== this.fieldMapFormArray.length - 1) {
            this.fieldMapFormArray.removeAt(index);
            this.fieldMapFormArray.markAsDirty();
        }
    };
    RelationDetailComponent.prototype.onChangeRightRelationID = function (index, isExportedFromSH) {
        var currentAssocFormGroup = this.associationFormArray.controls[index];
        if (currentAssocFormGroup.get('RIGHT_RELATION_ID').value === this.relationMeta.RELATION_ID) {
            currentAssocFormGroup.get('RIGHT_RELATION_ID').setErrors({ message: 'Self association is not allowed' });
            return;
        }
        if (this.associationFormArray.controls.findIndex(function (assocCtrl, i) {
            return i !== index && assocCtrl.get('RIGHT_RELATION_ID').value === currentAssocFormGroup.get('RIGHT_RELATION_ID').value;
        }) !== -1) {
            currentAssocFormGroup.get('RIGHT_RELATION_ID').setErrors({ message: 'Duplicate associated relation' });
            return;
        }
        if (index === this.associationFormArray.length - 1 && currentAssocFormGroup.value.RIGHT_RELATION_ID.trim() !== '') {
            // Only work for the last New line
            this.associationFormArray.push(this.fb.group({
                RIGHT_RELATION_ID: [''],
                CARDINALITY: ['[0..1]'],
                FOREIGN_KEY_CHECK: [0],
                FIELDS_MAPPING: this.fb.array([])
            }));
        }
        if (!isExportedFromSH) {
            this.entityService.getRelationDesc(currentAssocFormGroup.value.RIGHT_RELATION_ID)
                .subscribe(function (data) {
                if (data['msgCat']) {
                    currentAssocFormGroup.get('RIGHT_RELATION_ID').setErrors({ message: data['msgShortText'] });
                }
            });
        }
    };
    RelationDetailComponent.prototype.onChangeLeftField = function (index) {
        var currentFieldMapFormGroup = this.fieldMapFormArray.controls[index];
        if (this.relationMeta.ATTRIBUTES.findIndex(function (attribute) {
            return attribute.ATTR_NAME === currentFieldMapFormGroup.get('LEFT_FIELD').value;
        }) === -1) {
            currentFieldMapFormGroup.get('LEFT_FIELD').setErrors({ message: 'Field Not Exist' });
            return;
        }
        if (this.fieldMapFormArray.controls.findIndex(function (fieldMapCtrl, i) {
            return i !== index && fieldMapCtrl.get('LEFT_FIELD') && fieldMapCtrl.get('RIGHT_FIELD') &&
                fieldMapCtrl.get('LEFT_FIELD').value === currentFieldMapFormGroup.get('LEFT_FIELD').value &&
                fieldMapCtrl.get('RIGHT_FIELD').value === currentFieldMapFormGroup.get('RIGHT_FIELD').value;
        }) !== -1) {
            currentFieldMapFormGroup.get('LEFT_FIELD').setErrors({ message: 'Duplicate Fields Mapping' });
            return;
        }
        if (index === this.fieldMapFormArray.length - 1 && currentFieldMapFormGroup.value.LEFT_FIELD.trim() !== '') {
            this.fieldMapFormArray.push(this.fb.group({ LEFT_FIELD: [''], RIGHT_FIELD: [''] }));
        }
    };
    RelationDetailComponent.prototype.onChangeRightField = function (index) {
        var currentFieldMapFormGroup = this.fieldMapFormArray.controls[index];
        if (this.currentRightRelationMeta &&
            this.currentRightRelationMeta.ATTRIBUTES.findIndex(function (attribute) {
                return attribute.ATTR_NAME === currentFieldMapFormGroup.get('RIGHT_FIELD').value;
            }) === -1) {
            currentFieldMapFormGroup.get('RIGHT_FIELD').setErrors({ message: 'Field Not Exist' });
            return;
        }
        if (this.fieldMapFormArray.controls.findIndex(function (fieldMapCtrl, i) {
            return i !== index && fieldMapCtrl.get('LEFT_FIELD') && fieldMapCtrl.get('RIGHT_FIELD') &&
                fieldMapCtrl.get('LEFT_FIELD').value === currentFieldMapFormGroup.get('LEFT_FIELD').value &&
                fieldMapCtrl.get('RIGHT_FIELD').value === currentFieldMapFormGroup.get('RIGHT_FIELD').value;
        }) !== -1) {
            currentFieldMapFormGroup.get('RIGHT_FIELD').setErrors({ message: 'Duplicate Fields Mapping' });
            return;
        }
        if (index === this.fieldMapFormArray.length - 1 && currentFieldMapFormGroup.value.RIGHT_FIELD.trim() !== '') {
            this.fieldMapFormArray.push(this.fb.group({ LEFT_FIELD: [''], RIGHT_FIELD: [''] }));
        }
    };
    RelationDetailComponent.prototype.oldRightRelation = function (formGroup) {
        return this.relationMeta.ASSOCIATIONS ?
            this.relationMeta.ASSOCIATIONS.findIndex(function (association) { return association.RIGHT_RELATION_ID === formGroup.get('RIGHT_RELATION_ID').value; }) !== -1 :
            false;
    };
    RelationDetailComponent.prototype.oldFieldMap = function (formGroup) {
        return this.currentAssociation ?
            this.currentAssociation.FIELDS_MAPPING.findIndex(function (fieldMap) { return fieldMap.LEFT_FIELD === formGroup.get('LEFT_FIELD').value &&
                fieldMap.RIGHT_FIELD === formGroup.get('RIGHT_FIELD').value; }) !== -1 :
            false;
    };
    RelationDetailComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (this.isNewMode || (!this.bypassProtection && this.relationForm && this.relationForm.dirty)) {
            var dialogAnswer = this.dialogService.confirm('Discard changes?');
            dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                    _this.modelService.sendDialogAnswer('OK');
                }
                else {
                    _this.modelService.sendDialogAnswer('CANCEL');
                }
            });
            return dialogAnswer;
        }
        else {
            return true;
        }
    };
    RelationDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.relationForm.dirty) {
            return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
        }
        if (!this.relationForm.valid) {
            return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
        }
        if (this.isNewMode) {
            this.changedRelation['action'] = 'add';
            this.changedRelation['RELATION_ID'] = this.relationForm.controls['RELATION_ID'].value;
        }
        else {
            this.changedRelation['action'] = 'update';
            this.changedRelation['RELATION_ID'] = this.relationMeta.RELATION_ID;
        }
        if (this.relationForm.controls['RELATION_DESC'].dirty) {
            this.changedRelation['RELATION_DESC'] = this.relationForm.controls['RELATION_DESC'].value;
        }
        this.changedRelation['ATTRIBUTES'] = this.attrComponent.processChangedAttributes();
        this._processChangedAssociation();
        this.entityService.saveRelation(this.changedRelation)
            .subscribe(function (data) { return _this._postActivityAfterSavingRelation(data); });
    };
    RelationDetailComponent.prototype._processChangedAssociation = function () {
        var _this = this;
        var changedAssociations = [];
        if (!this.associationFormArray.dirty) {
            return;
        }
        this.changedRelation['ASSOCIATIONS'] = changedAssociations;
        this.associationFormArray.controls.forEach(function (associationControl) {
            if (associationControl.get('RIGHT_RELATION_ID').value.trim() === '') {
                return;
            }
            var changedAssociation = {};
            var associationMeta = _this.relationMeta.ASSOCIATIONS.find(function (association) { return associationControl.get('RIGHT_RELATION_ID').value === association.RIGHT_RELATION_ID; });
            if (!associationMeta) { // New Add Case
                changedAssociation['action'] = 'add';
                changedAssociation['RIGHT_RELATION_ID'] = associationControl.get('RIGHT_RELATION_ID').value;
                changedAssociation['CARDINALITY'] = associationControl.get('CARDINALITY').value;
                changedAssociation['FOREIGN_KEY_CHECK'] = associationControl.get('FOREIGN_KEY_CHECK').value;
                changedAssociation['FIELDS_MAPPING'] = [];
                var fieldMapArray = associationControl.get('FIELDS_MAPPING');
                fieldMapArray.controls.forEach(function (fieldMap) {
                    changedAssociation['FIELDS_MAPPING'].push({ action: 'add', RIGHT_FIELD: fieldMap.get('RIGHT_FIELD').value, LEFT_FIELD: fieldMap.get('LEFT_FIELD').value });
                });
                changedAssociations.push(changedAssociation);
            }
            else {
                if (associationControl.dirty) { // Change Case
                    changedAssociation['action'] = 'update';
                    changedAssociation['RIGHT_RELATION_ID'] = associationControl.get('RIGHT_RELATION_ID').value;
                    if (associationControl.get('CARDINALITY').dirty) {
                        changedAssociation['CARDINALITY'] = associationControl.get('CARDINALITY').value;
                    }
                    if (associationControl.get('FOREIGN_KEY_CHECK').dirty) {
                        changedAssociation['FOREIGN_KEY_CHECK'] = associationControl.get('FOREIGN_KEY_CHECK').value;
                    }
                    if (associationControl.get('FIELDS_MAPPING').dirty) {
                        changedAssociation['FIELDS_MAPPING'] = [];
                        var fieldMapArray_1 = associationControl.get('FIELDS_MAPPING');
                        fieldMapArray_1.controls.forEach(function (fieldMap) {
                            if (fieldMap.dirty) {
                                changedAssociation['FIELDS_MAPPING'].push({ action: 'add', RIGHT_FIELD: fieldMap.get('RIGHT_FIELD').value, LEFT_FIELD: fieldMap.get('LEFT_FIELD').value });
                            }
                        });
                        associationMeta.FIELDS_MAPPING.forEach(function (oldFieldMap) {
                            var index = fieldMapArray_1.controls.findIndex(function (fieldMap) {
                                return fieldMap.get('LEFT_FIELD').value === oldFieldMap.LEFT_FIELD &&
                                    fieldMap.get('RIGHT_FIELD').value === oldFieldMap.RIGHT_FIELD;
                            });
                            if (index === -1) {
                                changedAssociation['FIELDS_MAPPING'].push({ action: 'delete', RIGHT_FIELD: oldFieldMap.LEFT_FIELD, LEFT_FIELD: oldFieldMap.RIGHT_FIELD });
                            }
                        });
                    }
                    changedAssociations.push(changedAssociation);
                }
            }
        });
        // Deletion Case
        this.relationMeta.ASSOCIATIONS.forEach(function (associationMeta) {
            var index = _this.associationFormArray.controls.findIndex(function (associationControl) { return associationControl.get('RIGHT_RELATION_ID').value === associationMeta.RIGHT_RELATION_ID; });
            if (index === -1) { // The association must be deleted
                changedAssociations.push({ action: 'delete', RIGHT_RELATION_ID: associationMeta.RIGHT_RELATION_ID });
            }
        });
    };
    RelationDetailComponent.prototype._postActivityAfterSavingRelation = function (data) {
        var _this = this;
        if (data['RELATION_ID']) {
            if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/relation/' + data['RELATION_ID']]);
            }
            else {
                this.readonly = true;
                this.relationMeta = data;
                this.changedRelation = {};
                this._generateRelationForm();
                this.messageService.reportMessage('MODEL', 'RELATION_SAVED', 'S', this.relationMeta.RELATION_ID);
            }
        }
        else {
            if (data instanceof Array) {
                data.forEach(function (err) { return _this.messageService.add(err); });
            }
            else {
                this.messageService.report(data);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_8__["AttributeMetaComponent"]),
        __metadata("design:type", _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_8__["AttributeMetaComponent"])
    ], RelationDetailComponent.prototype, "attrComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(jor_angular__WEBPACK_IMPORTED_MODULE_1__["SearchHelpComponent"]),
        __metadata("design:type", jor_angular__WEBPACK_IMPORTED_MODULE_1__["SearchHelpComponent"])
    ], RelationDetailComponent.prototype, "searchHelpComponent", void 0);
    RelationDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relation-detail',
            template: __webpack_require__(/*! ./relation-detail.component.html */ "./src/app/model/relation/relation-detail/relation-detail.component.html"),
            styles: [__webpack_require__(/*! ./relation-detail.component.css */ "./src/app/model/relation/relation-detail/relation-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _model_validators__WEBPACK_IMPORTED_MODULE_11__["UniqueRelationValidator"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _model_service__WEBPACK_IMPORTED_MODULE_9__["ModelService"],
            _dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"],
            jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]])
    ], RelationDetailComponent);
    return RelationDetailComponent;
}());



/***/ }),

/***/ "./src/app/model/relation/relation.component.css":
/*!*******************************************************!*\
  !*** ./src/app/model/relation/relation.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3JlbGF0aW9uL3JlbGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/model/relation/relation.component.html":
/*!********************************************************!*\
  !*** ./src/app/model/relation/relation.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchRelation(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedRelation\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newRelation()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let relation of relationList\" routerLink=\"/model/relation/{{relation.RELATION_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(relation)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{relation.RELATION_ID}}</h5>\n          <small>version: {{relation.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{relation.RELATION_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{relation.LAST_CHANGE_BY}} @{{relation.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/model/relation/relation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/model/relation/relation.component.ts ***!
  \******************************************************/
/*! exports provided: RelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationComponent", function() { return RelationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model.service */ "./src/app/model/model.service.ts");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../msgStore */ "./src/app/msgStore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RelationComponent = /** @class */ (function () {
    function RelationComponent(entityService, modelService, messageService, route, router) {
        this.entityService = entityService;
        this.modelService = modelService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.isSearchListShown = true;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_7__["msgStore"], 'EN');
    }
    RelationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.entityService.listRelation(term); })).subscribe(function (data) {
            _this.relationList = data;
            var relationID;
            if (_this.route.snapshot.firstChild) {
                relationID = _this.route.snapshot.firstChild.paramMap.get('relationID');
            }
            if (relationID) {
                if (relationID === 'new') {
                    _this._newRelation();
                }
                else {
                    _this.onSelect(_this.relationList.find(function (relation) { return relation.RELATION_ID === relationID; }));
                }
            }
        });
        this.searchRelation(''); // The initial list
        this.modelService.theSelectedRelation$.subscribe(function (data) {
            if (_this.theSelectedRelation) {
                _this.theSelectedRelation.RELATION_ID = data.RELATION_ID;
                _this.theSelectedRelation.RELATION_DESC = data.RELATION_DESC;
            }
        });
        this.modelService.dialogAnswer$.subscribe(function (answer) {
            if (answer === 'OK' && !_this.relationList[0].CREATE_TIME) {
                _this.relationList.splice(0, 1); // Remove the first one.
            }
            else if (answer === 'CANCEL') {
                var relationID_1 = _this.route.snapshot.firstChild.paramMap.get('relationID');
                if (relationID_1) {
                    if (relationID_1 === 'new') {
                        _this.onSelect(_this.relationList[0]);
                    }
                    else {
                        _this.onSelect(_this.relationList.find(function (relation) { return relation.RELATION_ID === relationID_1; }));
                    }
                }
            }
        });
        this.modelService.isSearchListShown$.subscribe(function (data) { return _this.isSearchListShown = data; });
    };
    RelationComponent.prototype.searchRelation = function (term) {
        this.searchTerms.next(term);
    };
    RelationComponent.prototype.hideSearchList = function () {
        this.isSearchListShown = false;
        this.modelService.hideSearchList();
    };
    RelationComponent.prototype.onSelect = function (relation) {
        if (relation) {
            this.theSelectedRelation = relation;
            this.modelService.setSelectedRelation(relation);
        }
    };
    RelationComponent.prototype.newRelation = function () {
        if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('relationID') === 'new') {
            this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
        }
        else {
            this._newRelation();
            this.router.navigate(['/model/relation/new']);
        }
    };
    RelationComponent.prototype._newRelation = function () {
        this.theSelectedRelation = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["Relation"]();
        this.theSelectedRelation.RELATION_ID = 'r_new';
        this.theSelectedRelation.RELATION_DESC = 'description';
        this.theSelectedRelation.VERSION_NO = 1;
        this.theSelectedRelation.LAST_CHANGE_BY = 'DH001';
        this.theSelectedRelation.LAST_CHANGE_TIME = new Date().toDateString();
        this.modelService.setSelectedRelation(this.theSelectedRelation);
        this.relationList.splice(0, 0, this.theSelectedRelation);
    };
    RelationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relation',
            template: __webpack_require__(/*! ./relation.component.html */ "./src/app/model/relation/relation.component.html"),
            styles: [__webpack_require__(/*! ./relation.component.css */ "./src/app/model/relation/relation.component.css")]
        }),
        __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"],
            _model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RelationComponent);
    return RelationComponent;
}());



/***/ }),

/***/ "./src/app/model/relationship/relationship-detail/relationship-detail.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/model/relationship/relationship-detail/relationship-detail.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3JlbGF0aW9uc2hpcC9yZWxhdGlvbnNoaXAtZGV0YWlsL3JlbGF0aW9uc2hpcC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/model/relationship/relationship-detail/relationship-detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/model/relationship/relationship-detail/relationship-detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"relationshipMeta\" [formGroup]=\"relationshipForm\">\n  <div class=\"form-group\"\n       [class.dk-invalid]=\"relationshipForm.get('RELATIONSHIP_ID').invalid && (relationshipForm.touched || relationshipForm.dirty)\">\n    <label for=\"relationship\" class=\"col-form-label form-control-sm\">Relationship:\n      <span class=\"dk-invalid-feedback\">\n        {{relationshipForm.get('RELATIONSHIP_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"relationship\" [readonly]=\"readonly || !isNewMode\"\n           name=\"relationship\" formControlName=\"RELATIONSHIP_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"relationship-desc\" class=\"col-form-label form-control-sm\">Relationship Description:</label>\n    <textarea class=\"form-control\" id=\"relationship-desc\" name=\"relationship-desc\" rows=\"2\"\n              formControlName=\"RELATIONSHIP_DESC\" [readonly]=\"readonly\" (change)=\"onChangeRelationshipDesc()\"></textarea>\n  </div>\n  <div class=\"row ml-2\">\n    <div class=\"col-3 form-group row\" >\n      <label for=\"timeDependent\" class=\"col-form-label form-control-sm\">Time Dependent: </label>\n      <input type=\"checkbox\" class=\"form-control ml-2\" id=\"timeDependent\" name=\"timeDependent\"\n             formControlName=\"TIME_DEPENDENT\" (change)=\"onChangeTimeDependency()\">\n    </div>\n    <div class=\"col-4 form-group row ml-3\"\n         [class.dk-invalid]=\"relationshipForm.get('VALID_PERIOD').invalid && (relationshipForm.touched || relationshipForm.dirty)\">\n      <label for=\"valid_period\" class=\"col-form-label form-control-sm\">Valid Period(seconds):\n        <span class=\"dk-invalid-feedback\" *ngIf=\"!relationshipForm.get('VALID_PERIOD').valid\">\n        {{relationshipForm.get('VALID_PERIOD').errors?.message}}\n      </span>\n      </label>\n      <input type=\"number\" class=\"form-control form-control-sm\" id=\"valid_period\" [readonly]=\"readonly\"\n             name=\"valid_period\" formControlName=\"VALID_PERIOD\">\n    </div>\n  </div>\n\n  <app-attribute-meta [readonly]=\"readonly\" [parentForm]=\"relationshipForm\" [attributes]=\"attributes\"\n                      [relationID]=\"relationshipMeta.RELATIONSHIP_ID\" [isNewMode]=\"isNewMode\">\n  </app-attribute-meta>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-user-check\"></span> Involved Roles</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm dk-table\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Role</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Cardinality</th>\n          <th scope=\"col\">Direction</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"INVOLVES\">\n        <tr *ngFor=\"let involveFormGroup of involveFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteInvolve(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"involveFormGroup\"\n              [class.dk-invalid]=\"involveFormGroup.get('ROLE_ID').invalid && (involveFormGroup.touched || involveFormGroup.dirty)\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"ROLE_ID\"\n                     [readonly]=\"readonly || oldInvolve(involveFormGroup) && involveFormGroup.valid\" (change)=\"onChangeRoleID(i)\">\n              <div class=\"invalid-tooltip\">\n                {{involveFormGroup.get('ROLE_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRole\"\n                        (click)=\"onSearchHelp('ROLE_ID', involveFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <input type=\"text\" formControlName=\"ROLE_DESC\" readonly class=\"form-control form-control-sm dk-description\">\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <select class=\"form-control form-control-sm\" formControlName=\"CARDINALITY\">\n              <option>[1..1]</option>\n              <option>[1..n]</option>\n            </select>\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"DIRECTION\" [readonly]=\"readonly\">\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n"

/***/ }),

/***/ "./src/app/model/relationship/relationship-detail/relationship-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/model/relationship/relationship-detail/relationship-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RelationshipDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipDetailComponent", function() { return RelationshipDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../attribute-meta/attribute-meta.component */ "./src/app/model/attribute-meta/attribute-meta.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model.service */ "./src/app/model/model.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../msgStore */ "./src/app/msgStore.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model-validators */ "./src/app/model/model-validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var RelationshipDetailComponent = /** @class */ (function () {
    function RelationshipDetailComponent(route, router, fb, uniqueRelationshipValidator, messageService, modelService, dialogService, entityService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.uniqueRelationshipValidator = uniqueRelationshipValidator;
        this.messageService = messageService;
        this.modelService = modelService;
        this.dialogService = dialogService;
        this.entityService = entityService;
        this.readonly = true;
        this.isNewMode = false;
        this.changedRelationship = {};
        this.bypassProtection = false;
        this.isSearchListShown = true;
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_8__["msgStore"], 'EN');
    }
    Object.defineProperty(RelationshipDetailComponent.prototype, "involveFormArray", {
        get: function () {
            return this.relationshipForm.get('INVOLVES');
        },
        enumerable: true,
        configurable: true
    });
    RelationshipDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
            var relationshipID = params.get('relationshipID');
            if (relationshipID === 'new') {
                var relationship = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["RelationshipMeta"]();
                relationship.RELATIONSHIP_ID = 'rs_';
                relationship.RELATIONSHIP_DESC = '';
                relationship.VALID_PERIOD = 0;
                relationship.INVOLVES = [];
                _this.isNewMode = true;
                _this.readonly = false;
                _this.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["forkJoin"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(relationship), Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])([]));
            }
            else {
                _this.readonly = true;
                _this.isNewMode = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["forkJoin"])(_this.entityService.getRelationship(relationshipID), _this.entityService.getRelationMeta(relationshipID));
            }
        })).subscribe(function (data) {
            if ('msgName' in data[0]) {
                _this.messageService.clearMessages();
                _this.relationshipMeta = null;
                _this.relationshipForm = null;
                _this.messageService.report(data[0]);
            }
            else {
                _this.messageService.clearMessages();
                _this.relationshipMeta = data[0];
                _this.attributes = 'msgName' in data[1] ? [] : data[1]['ATTRIBUTES'];
                _this._generateRelationshipForm();
                if (_this.readonly) {
                    _this.relationshipForm.get('TIME_DEPENDENT').disable();
                }
            }
        });
        this.modelService.isSearchListShown$.subscribe(function (data) { return _this.isSearchListShown = data; });
    };
    RelationshipDetailComponent.prototype.showSearchList = function () {
        this.isSearchListShown = true;
        this.modelService.showSearchList();
    };
    RelationshipDetailComponent.prototype.onSearchHelp = function (fieldName, control, rowID) {
        var searchHelpMeta = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["SearchHelp"]();
        searchHelpMeta.OBJECT_NAME = 'Role';
        searchHelpMeta.METHOD = function (entityService) {
            return function (searchTerm) { return entityService.listRole(searchTerm); };
        }(this.entityService);
        searchHelpMeta.BEHAVIOUR = 'A';
        searchHelpMeta.MULTI = false;
        searchHelpMeta.FUZZY_SEARCH = true;
        searchHelpMeta.FIELDS = [
            { FIELD_NAME: 'ROLE_ID', FIELD_DESC: 'Role', IMPORT: true, EXPORT: true, LIST_POSITION: 1, FILTER_POSITION: 0 },
            { FIELD_NAME: 'ROLE_DESC', FIELD_DESC: 'Description', IMPORT: true, EXPORT: true, LIST_POSITION: 2, FILTER_POSITION: 0 }
        ];
        searchHelpMeta.READ_ONLY = this.readonly || this.oldInvolve(control) && control.valid;
        var afterExportFn = function (context, ruleIdx) {
            return function () { return context.onChangeRoleID(ruleIdx, true); };
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModal(searchHelpMeta, control, afterExportFn);
    };
    RelationshipDetailComponent.prototype._generateRelationshipForm = function () {
        var _this = this;
        if (this.relationshipForm) {
            this.relationshipForm.markAsPristine({ onlySelf: false });
            this.relationshipForm.get('RELATIONSHIP_ID').setValue(this.relationshipMeta.RELATIONSHIP_ID);
            this.relationshipForm.get('RELATIONSHIP_DESC').setValue(this.relationshipMeta.RELATIONSHIP_DESC);
            this.relationshipForm.get('TIME_DEPENDENT').setValue(this.relationshipMeta.VALID_PERIOD > 0);
            this.relationshipForm.get('VALID_PERIOD').setValue(this.relationshipMeta.VALID_PERIOD);
            this.relationshipForm.removeControl('ATTRIBUTES');
        }
        else {
            this.relationshipForm = this.fb.group({
                RELATIONSHIP_ID: [this.relationshipMeta.RELATIONSHIP_ID, { updateOn: 'blur' }],
                RELATIONSHIP_DESC: [this.relationshipMeta.RELATIONSHIP_DESC],
                TIME_DEPENDENT: [this.relationshipMeta.VALID_PERIOD > 0],
                VALID_PERIOD: [this.relationshipMeta.VALID_PERIOD, this._validateValidPeriod]
            });
        }
        // Compose Involves
        var formArray = [];
        this.relationshipMeta.INVOLVES.forEach(function (involve) {
            formArray.push(_this.fb.group({
                ROLE_ID: [involve.ROLE_ID],
                ROLE_DESC: [involve.ROLE_DESC],
                CARDINALITY: [{ value: involve.CARDINALITY, disabled: _this.readonly }],
                DIRECTION: [involve.DIRECTION]
            }));
        });
        if (this.isNewMode) {
            this.relationshipForm.get('RELATIONSHIP_ID').setValidators(this._validateRelationshipID);
            this.relationshipForm.get('RELATIONSHIP_ID').setAsyncValidators(this.uniqueRelationshipValidator.validate.bind(this.uniqueRelationshipValidator));
            this.relationshipForm.get('TIME_DEPENDENT').enable();
            formArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CARDINALITY: ['[1..1]'],
                DIRECTION: ['']
            }));
        }
        else {
            this.relationshipForm.get('RELATIONSHIP_ID').clearValidators();
            this.relationshipForm.get('RELATIONSHIP_ID').clearAsyncValidators();
        }
        this.relationshipForm.setControl('INVOLVES', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](formArray));
    };
    RelationshipDetailComponent.prototype._validateRelationshipID = function (c) {
        if (c.value.trim() === '') {
            return { message: 'Relationship ID is mandatory' };
        }
        if (c.value.toString().toLowerCase() === 'new') {
            return { message: '"NEW/new" is reserved, thus is not allowed to use!' };
        }
        if (c.value.toString().toLowerCase().substr(0, 3) !== 'rs_') {
            return { message: 'Relationship ID must be started with "rs_"!' };
        }
        if (c.value.toString().length < 4) {
            return { message: 'Relationship ID must have length larger than 3!' };
        }
        if (c.value.toString().length > 32) {
            return { message: 'Relationship ID must have length less than 32!' };
        }
        return null;
    };
    RelationshipDetailComponent.prototype._validateValidPeriod = function (c) {
        if (c.parent && c.parent.value.TIME_DEPENDENT && c.value <= 0) {
            return { message: 'must be larger than 0' };
        }
        return null;
    };
    RelationshipDetailComponent.prototype.switchEditDisplay = function () {
        var _this = this;
        if (this.isNewMode) {
            this.dialogService.confirm('Discard the new Relationship?').subscribe(function (confirm) {
                if (confirm) {
                    _this._switch2DisplayMode();
                    _this.relationshipMeta = null;
                    _this.modelService.sendDialogAnswer('OK');
                }
                else {
                    _this.modelService.sendDialogAnswer('CANCEL');
                }
            });
            return;
        }
        if (!this.readonly) { // In Change Mode -> Display Mode
            if (this.relationshipForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                    if (confirm) { // Discard changes and switch to Display Mode
                        _this._generateRelationshipForm();
                        _this.relationshipForm.reset(_this.relationshipForm.value);
                        _this._switch2DisplayMode();
                    }
                });
            }
            else { // Switch to display mode
                this._switch2DisplayMode();
            }
        }
        else { // In Display Mode -> Change Mode
            this.readonly = false;
            this.relationshipForm.get('TIME_DEPENDENT').enable();
            this.attrComponent.switchEditDisplay(this.readonly);
            this.involveFormArray.controls.forEach(function (involveFormGroup) {
                involveFormGroup.get('CARDINALITY').enable();
            });
            this.involveFormArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CARDINALITY: ['[1..1]'],
                DIRECTION: ['']
            }));
        }
        this.messageService.clearMessages();
    };
    RelationshipDetailComponent.prototype._switch2DisplayMode = function () {
        this.readonly = true;
        this.relationshipForm.get('TIME_DEPENDENT').disable();
        this.attrComponent.switchEditDisplay(this.readonly);
        var lastIndex = this.involveFormArray.length - 1;
        while (lastIndex >= 0 && this.involveFormArray.controls[lastIndex].get('ROLE_ID').value.trim() === '') {
            this.involveFormArray.removeAt(lastIndex);
            lastIndex--;
        }
        this.involveFormArray.controls.forEach(function (involveFormGroup) {
            involveFormGroup.get('CARDINALITY').disable();
        });
    };
    RelationshipDetailComponent.prototype.onChangeRelationshipID = function () {
        this.modelService.updateRelationshipID(this.relationshipForm.get('RELATIONSHIP_ID').value);
    };
    RelationshipDetailComponent.prototype.onChangeTimeDependency = function () {
        var timeDependent = this.relationshipForm.get('TIME_DEPENDENT').value;
        var validPeriodCtrl = this.relationshipForm.get('VALID_PERIOD');
        var relationID = this.relationshipForm.get('RELATIONSHIP_ID').value;
        var attrFormArray = this.relationshipForm.get('ATTRIBUTES');
        if (timeDependent) {
            validPeriodCtrl.setValue(28080000); // 3600 * 24 * 365
            validPeriodCtrl.markAsDirty();
            validPeriodCtrl.enable();
            var validFromFormGroup = this.fb.group({
                ATTR_GUID: [''],
                RELATION_ID: [relationID],
                ATTR_NAME: ['VALID_FROM'],
                ATTR_DESC: ['Valid from'],
                DATA_ELEMENT: [''],
                DATA_TYPE: [{ value: 8, disabled: true }],
                DATA_LENGTH: [null],
                DECIMAL: [null],
                PRIMARY_KEY: [false],
                AUTO_INCREMENT: [false]
            });
            validFromFormGroup.markAsDirty();
            attrFormArray.insert(attrFormArray.length - 1, validFromFormGroup);
            var validToFormGroup = this.fb.group({
                ATTR_GUID: [''],
                RELATION_ID: [relationID],
                ATTR_NAME: ['VALID_TO'],
                ATTR_DESC: ['Valid to'],
                DATA_ELEMENT: [''],
                DATA_TYPE: [{ value: 8, disabled: true }],
                DATA_LENGTH: [null],
                DECIMAL: [null],
                PRIMARY_KEY: [false],
                AUTO_INCREMENT: [false]
            });
            validToFormGroup.markAsDirty();
            attrFormArray.insert(attrFormArray.length - 1, validToFormGroup);
        }
        else {
            validPeriodCtrl.setValue(0);
            validPeriodCtrl.disable();
            validPeriodCtrl.markAsDirty();
            var attributeValidFromIndex = attrFormArray.controls.findIndex(function (attrCtrl) { return attrCtrl.get('ATTR_NAME').value === 'VALID_FROM'; });
            if (attributeValidFromIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeValidFromIndex);
            }
            var attributeValidToIndex = attrFormArray.controls.findIndex(function (attrCtrl) { return attrCtrl.get('ATTR_NAME').value === 'VALID_TO'; });
            if (attributeValidToIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeValidToIndex);
            }
        }
    };
    RelationshipDetailComponent.prototype.onChangeRelationshipDesc = function () {
        this.modelService.updateRelationshipDesc(this.relationshipForm.get('RELATIONSHIP_DESC').value);
    };
    RelationshipDetailComponent.prototype.deleteInvolve = function (index) {
        if (index !== this.involveFormArray.length - 1) {
            var currentRoleID_1 = this.involveFormArray.at(index).get('ROLE_ID').value;
            this.involveFormArray.removeAt(index);
            this.involveFormArray.markAsDirty();
            var attrFormArray = this.relationshipForm.get('ATTRIBUTES');
            var attributeInstanceGUIDIndex = attrFormArray.controls.findIndex(function (attrCtrl) { return attrCtrl.get('ATTR_NAME').value === currentRoleID_1 + '_INSTANCE_GUID'; });
            if (attributeInstanceGUIDIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeInstanceGUIDIndex);
            }
            var attributeEntityIDIndex = attrFormArray.controls.findIndex(function (attrCtrl) { return attrCtrl.get('ATTR_NAME').value === currentRoleID_1 + '_ENTITY_ID'; });
            if (attributeEntityIDIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeEntityIDIndex);
            }
        }
    };
    RelationshipDetailComponent.prototype.onChangeRoleID = function (index) {
        var _this = this;
        var currentInvolveFormGroup = this.involveFormArray.controls[index];
        if (this.involveFormArray.controls.findIndex(function (involveCtrl, i) {
            return i !== index && involveCtrl.get('ROLE_ID').value === currentInvolveFormGroup.get('ROLE_ID').value;
        }) !== -1) {
            currentInvolveFormGroup.get('ROLE_ID').setErrors({ message: 'Duplicate roles' });
            return;
        }
        if (index === this.involveFormArray.length - 1 && currentInvolveFormGroup.value.ROLE_ID.trim() !== '') {
            // Only work for the last New line
            this.involveFormArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CARDINALITY: ['[1..1]'],
                DIRECTION: ['']
            }));
        }
        this.entityService.getRoleDesc(currentInvolveFormGroup.value.ROLE_ID).subscribe(function (data) {
            if (data['msgCat']) {
                currentInvolveFormGroup.get('ROLE_ID').setErrors({ message: data['msgShortText'] });
            }
            else {
                currentInvolveFormGroup.get('ROLE_DESC').setValue(data);
                var attrFormArray = _this.relationshipForm.get('ATTRIBUTES');
                var relationID = _this.relationshipForm.get('RELATIONSHIP_ID').value;
                var instanceGUIDFormGroup = _this.fb.group({
                    ATTR_GUID: [''],
                    RELATION_ID: [relationID],
                    ATTR_NAME: [currentInvolveFormGroup.value.ROLE_ID + '_INSTANCE_GUID'],
                    ATTR_DESC: ['Entity Instance GUID of role ' + currentInvolveFormGroup.value.ROLE_ID],
                    DATA_ELEMENT: [''],
                    DATA_TYPE: [{ value: 1, disabled: true }],
                    DATA_LENGTH: [32],
                    DECIMAL: [null],
                    PRIMARY_KEY: [false],
                    AUTO_INCREMENT: [false]
                });
                instanceGUIDFormGroup.markAsDirty();
                attrFormArray.insert(attrFormArray.length - 1, instanceGUIDFormGroup);
                var entityIDFormGroup = _this.fb.group({
                    ATTR_GUID: [''],
                    RELATION_ID: [relationID],
                    ATTR_NAME: [currentInvolveFormGroup.value.ROLE_ID + '_ENTITY_ID'],
                    ATTR_DESC: ['Entity ID of role ' + currentInvolveFormGroup.value.ROLE_ID],
                    DATA_ELEMENT: [''],
                    DATA_TYPE: [{ value: 1, disabled: true }],
                    DATA_LENGTH: [32],
                    DECIMAL: [null],
                    PRIMARY_KEY: [false],
                    AUTO_INCREMENT: [false]
                });
                entityIDFormGroup.markAsDirty();
                attrFormArray.insert(attrFormArray.length - 1, entityIDFormGroup);
                attrFormArray.markAsDirty();
            }
        });
    };
    RelationshipDetailComponent.prototype.oldInvolve = function (formGroup) {
        return this.relationshipMeta.INVOLVES.findIndex(function (role) { return role.ROLE_ID === formGroup.get('ROLE_ID').value; }) !== -1;
    };
    RelationshipDetailComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (this.isNewMode || (!this.bypassProtection && this.relationshipForm && this.relationshipForm.dirty)) {
            var dialogAnswer = this.dialogService.confirm('Discard changes?');
            dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                    _this.modelService.sendDialogAnswer('OK');
                }
                else {
                    _this.modelService.sendDialogAnswer('CANCEL');
                }
            });
            return dialogAnswer;
        }
        else {
            return true;
        }
    };
    RelationshipDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.relationshipForm.dirty) {
            return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
        }
        if (!this.relationshipForm.valid) {
            return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
        }
        if (this.isNewMode) {
            this.changedRelationship['action'] = 'add';
            this.changedRelationship['RELATIONSHIP_ID'] = this.relationshipForm.controls['RELATIONSHIP_ID'].value;
        }
        else {
            this.changedRelationship['action'] = 'update';
            this.changedRelationship['RELATIONSHIP_ID'] = this.relationshipMeta.RELATIONSHIP_ID;
        }
        if (this.relationshipForm.controls['RELATIONSHIP_DESC'].dirty) {
            this.changedRelationship['RELATIONSHIP_DESC'] = this.relationshipForm.controls['RELATIONSHIP_DESC'].value;
        }
        if (this.isNewMode || this.relationshipForm.controls['VALID_PERIOD'].dirty) {
            this.changedRelationship['VALID_PERIOD'] = this.relationshipForm.controls['VALID_PERIOD'].value;
        }
        this.changedRelationship['ATTRIBUTES'] = this.attrComponent.processChangedAttributes();
        if (this._processChangedInvolves()) {
            // console.log(this.changedRelationship);
            this.entityService.saveRelationship(this.changedRelationship)
                .subscribe(function (data) { return _this._postActivityAfterSavingRelationship(data); });
        }
    };
    RelationshipDetailComponent.prototype._processChangedInvolves = function () {
        var _this = this;
        if (this.involveFormArray.length <= 2) { // An empty line is included
            this.messageService.reportMessage('MODEL', 'RELATIONSHIP_LACK_INVOLVED_ROLES', 'E');
            return false;
        }
        var changedInvolves = [];
        if (this.involveFormArray.dirty) {
            this.changedRelationship['INVOLVES'] = changedInvolves;
            this.involveFormArray.controls.forEach(function (involveControl) {
                if (involveControl.get('ROLE_ID').value.trim() === '') {
                    return;
                }
                var action;
                var index = _this.relationshipMeta.INVOLVES.findIndex(function (involve) { return involveControl.get('ROLE_ID').value === involve.ROLE_ID; });
                if (index === -1) { // New Add Case
                    action = 'add';
                }
                else { // New Update Case
                    if (involveControl.dirty) {
                        action = 'update';
                    }
                }
                if (action) {
                    changedInvolves.push({ action: action, ROLE_ID: involveControl.get('ROLE_ID').value,
                        CARDINALITY: involveControl.get('CARDINALITY').value, DIRECTION: involveControl.get('DIRECTION').value });
                }
            });
            // Deletion Case
            this.relationshipMeta.INVOLVES.forEach(function (involve) {
                var index = _this.involveFormArray.controls.findIndex(function (roleControl) { return roleControl.get('ROLE_ID').value === involve.ROLE_ID; });
                if (index === -1) { // The attribute must be deleted
                    var deletedRole = { action: 'delete', ROLE_ID: involve.ROLE_ID };
                    changedInvolves.push(deletedRole);
                }
            });
        }
        return true;
    };
    RelationshipDetailComponent.prototype._postActivityAfterSavingRelationship = function (data) {
        var _this = this;
        if (data[0] && data[0]['RELATIONSHIP_ID']) {
            if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/relationship/' + data[0]['RELATIONSHIP_ID']]);
            }
            else {
                this.readonly = true;
                this.relationshipForm.get('TIME_DEPENDENT').disable();
                this.relationshipMeta = data[0];
                this.attributes = data[1].ATTRIBUTES;
                this.changedRelationship = {};
                this._generateRelationshipForm();
                this.messageService.reportMessage('MODEL', 'RELATIONSHIP_SAVED', 'S', this.relationshipMeta.RELATIONSHIP_ID);
            }
        }
        else {
            if (data instanceof Array) {
                data.forEach(function (err) { return _this.messageService.add(err); });
            }
            else {
                this.messageService.report(data);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_3__["AttributeMetaComponent"]),
        __metadata("design:type", _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_3__["AttributeMetaComponent"])
    ], RelationshipDetailComponent.prototype, "attrComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(jor_angular__WEBPACK_IMPORTED_MODULE_1__["SearchHelpComponent"]),
        __metadata("design:type", jor_angular__WEBPACK_IMPORTED_MODULE_1__["SearchHelpComponent"])
    ], RelationshipDetailComponent.prototype, "searchHelpComponent", void 0);
    RelationshipDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relationship-detail',
            template: __webpack_require__(/*! ./relationship-detail.component.html */ "./src/app/model/relationship/relationship-detail/relationship-detail.component.html"),
            styles: [__webpack_require__(/*! ./relationship-detail.component.css */ "./src/app/model/relationship/relationship-detail/relationship-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _model_validators__WEBPACK_IMPORTED_MODULE_11__["UniqueRelationshipValidator"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _model_service__WEBPACK_IMPORTED_MODULE_6__["ModelService"],
            _dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"],
            jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]])
    ], RelationshipDetailComponent);
    return RelationshipDetailComponent;
}());



/***/ }),

/***/ "./src/app/model/relationship/relationship.component.css":
/*!***************************************************************!*\
  !*** ./src/app/model/relationship/relationship.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3JlbGF0aW9uc2hpcC9yZWxhdGlvbnNoaXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/model/relationship/relationship.component.html":
/*!****************************************************************!*\
  !*** ./src/app/model/relationship/relationship.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchRelationship(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedRelationship\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newRelationship()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let relationship of relationshipList\" routerLink=\"/model/relationship/{{relationship.RELATIONSHIP_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(relationship)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{relationship.RELATIONSHIP_ID}}</h5>\n          <small>version: {{relationship.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{relationship.RELATIONSHIP_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{relationship.LAST_CHANGE_BY}} @{{relationship.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/model/relationship/relationship.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/model/relationship/relationship.component.ts ***!
  \**************************************************************/
/*! exports provided: RelationshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipComponent", function() { return RelationshipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model.service */ "./src/app/model/model.service.ts");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../msgStore */ "./src/app/msgStore.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RelationshipComponent = /** @class */ (function () {
    function RelationshipComponent(entityService, modelService, messageService, route, router) {
        this.entityService = entityService;
        this.modelService = modelService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.isSearchListShown = true;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_6__["msgStore"], 'EN');
    }
    RelationshipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (term) { return _this.entityService.listRelationship(term); })).subscribe(function (data) {
            _this.relationshipList = data;
            var relationshipID;
            if (_this.route.snapshot.firstChild) {
                relationshipID = _this.route.snapshot.firstChild.paramMap.get('relationshipID');
            }
            if (relationshipID) {
                if (relationshipID === 'new') {
                    _this._newRelationship();
                }
                else {
                    _this.onSelect(_this.relationshipList.find(function (relationship) { return relationship.RELATIONSHIP_ID === relationshipID; }));
                }
            }
        });
        this.searchRelationship(''); // The initial list
        this.modelService.theSelectedRelationship$.subscribe(function (data) {
            if (_this.theSelectedRelationship) {
                _this.theSelectedRelationship.RELATIONSHIP_ID = data['RELATIONSHIP_ID'];
                _this.theSelectedRelationship.RELATIONSHIP_DESC = data['RELATIONSHIP_DESC'];
            }
        });
        this.modelService.dialogAnswer$.subscribe(function (answer) {
            if (answer === 'OK' && !_this.relationshipList[0].CREATE_TIME) {
                _this.relationshipList.splice(0, 1); // Remove the first one.
            }
            else if (answer === 'CANCEL') {
                var relationshipID_1 = _this.route.snapshot.firstChild.paramMap.get('relationshipID');
                if (relationshipID_1) {
                    if (relationshipID_1 === 'new') {
                        _this.onSelect(_this.relationshipList[0]);
                    }
                    else {
                        _this.onSelect(_this.relationshipList.find(function (relationship) { return relationship.RELATIONSHIP_ID === relationshipID_1; }));
                    }
                }
            }
        });
        this.modelService.isSearchListShown$.subscribe(function (data) { return _this.isSearchListShown = data; });
    };
    RelationshipComponent.prototype.hideSearchList = function () {
        this.isSearchListShown = false;
        this.modelService.hideSearchList();
    };
    RelationshipComponent.prototype.onSelect = function (relationship) {
        if (relationship) {
            this.theSelectedRelationship = relationship;
            this.modelService.setSelectedRelationship(relationship);
        }
    };
    RelationshipComponent.prototype.searchRelationship = function (term) {
        this.searchTerms.next(term);
    };
    RelationshipComponent.prototype.newRelationship = function () {
        if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('relationshipID') === 'new') {
            this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
        }
        else {
            this._newRelationship();
            this.router.navigate(['/model/relationship/new']);
        }
    };
    RelationshipComponent.prototype._newRelationship = function () {
        this.theSelectedRelationship = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["RelationshipH"]();
        this.theSelectedRelationship.RELATIONSHIP_ID = 'new';
        this.theSelectedRelationship.RELATIONSHIP_DESC = 'description';
        this.theSelectedRelationship.VERSION_NO = 1;
        this.theSelectedRelationship.LAST_CHANGE_BY = 'DH001';
        this.theSelectedRelationship.LAST_CHANGE_TIME = new Date().toDateString();
        this.modelService.setSelectedRelationship(this.theSelectedRelationship);
        this.relationshipList.splice(0, 0, this.theSelectedRelationship);
    };
    RelationshipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relationship',
            template: __webpack_require__(/*! ./relationship.component.html */ "./src/app/model/relationship/relationship.component.html"),
            styles: [__webpack_require__(/*! ./relationship.component.css */ "./src/app/model/relationship/relationship.component.css")]
        }),
        __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"],
            _model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RelationshipComponent);
    return RelationshipComponent;
}());



/***/ }),

/***/ "./src/app/model/role/role-detail/role-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/model/role/role-detail/role-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3JvbGUvcm9sZS1kZXRhaWwvcm9sZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/model/role/role-detail/role-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/model/role/role-detail/role-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"roleMeta\" [formGroup]=\"roleForm\">\n  <div class=\"form-group\" [class.dk-invalid]=\"roleForm.get('ROLE_ID').invalid && (roleForm.touched || roleForm.dirty)\" >\n    <label for=\"role\" class=\"col-form-label form-control-sm\">Role:\n      <span class=\"dk-invalid-feedback\">\n        {{roleForm.get('ROLE_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"role\" [readonly]=\"readonly || !isNewMode\"\n           name=\"role\" formControlName=\"ROLE_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"role-desc\" class=\"col-form-label form-control-sm\">Role Description:</label>\n    <textarea class=\"form-control\" id=\"role-desc\" name=\"role-desc\" rows=\"2\"\n              formControlName=\"ROLE_DESC\" [readonly]=\"readonly\" (change)=\"onChangeRoleDesc()\"></textarea>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-user-check\"></span> Relations</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm dk-table\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Relation</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Cardinality</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"RELATIONS\">\n        <tr *ngFor=\"let relationFormGroup of relationFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRelation(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"relationFormGroup\"\n              [class.dk-invalid]=\"relationFormGroup.get('RELATION_ID').invalid && (relationFormGroup.touched || relationFormGroup.dirty)\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"RELATION_ID\"\n                     [readonly]=\"readonly || oldRelation(relationFormGroup) && relationFormGroup.valid\" (change)=\"onChangeRelationID(i)\">\n              <div class=\"invalid-tooltip\">\n                {{relationFormGroup.get('RELATION_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRelation\"\n                        (click)=\"onSearchHelp('RELATION_ID', relationFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"relationFormGroup\">\n            <input type=\"text\" formControlName=\"RELATION_DESC\" readonly class=\"form-control form-control-sm dk-description\">\n          </td>\n          <td [formGroup]=\"relationFormGroup\">\n            <select class=\"form-control form-control-sm\" formControlName=\"CARDINALITY\">\n              <option>[0..1]</option>\n              <option>[1..1]</option>\n              <option>[0..n]</option>\n              <option>[1..n]</option>\n            </select>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n"

/***/ }),

/***/ "./src/app/model/role/role-detail/role-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/model/role/role-detail/role-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetailComponent", function() { return RoleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model.service */ "./src/app/model/model.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../msgStore */ "./src/app/msgStore.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model-validators */ "./src/app/model/model-validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var RoleDetailComponent = /** @class */ (function () {
    function RoleDetailComponent(route, router, fb, uniqueRoleValidator, messageService, modelService, dialogService, entityService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.uniqueRoleValidator = uniqueRoleValidator;
        this.messageService = messageService;
        this.modelService = modelService;
        this.dialogService = dialogService;
        this.entityService = entityService;
        this.readonly = true;
        this.isNewMode = false;
        this.changedRole = {};
        this.bypassProtection = false;
        this.isSearchListShown = true;
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_7__["msgStore"], 'EN');
    }
    Object.defineProperty(RoleDetailComponent.prototype, "relationFormArray", {
        get: function () {
            return this.roleForm.get('RELATIONS');
        },
        enumerable: true,
        configurable: true
    });
    RoleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (params) {
            var roleID = params.get('roleID');
            if (roleID === 'new') {
                var role = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["RoleMeta"]();
                role.ROLE_ID = '';
                role.ROLE_DESC = '';
                role.RELATIONS = [];
                _this.isNewMode = true;
                _this.readonly = false;
                _this.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(role);
            }
            else {
                _this.readonly = true;
                _this.isNewMode = false;
                return _this.entityService.getRole(roleID);
            }
        })).subscribe(function (data) {
            if ('msgName' in data) {
                _this.messageService.clearMessages();
                _this.roleMeta = null;
                _this.roleForm = null;
                _this.messageService.report(data);
            }
            else {
                _this.messageService.clearMessages();
                _this.roleMeta = data;
                _this._generateRoleForm();
            }
        });
        this.modelService.isSearchListShown$.subscribe(function (data) { return _this.isSearchListShown = data; });
    };
    RoleDetailComponent.prototype.showSearchList = function () {
        this.isSearchListShown = true;
        this.modelService.showSearchList();
    };
    RoleDetailComponent.prototype.onSearchHelp = function (fieldName, control, rowID) {
        var searchHelpMeta = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["SearchHelp"]();
        searchHelpMeta.OBJECT_NAME = 'Relation';
        searchHelpMeta.METHOD = function (entityService) {
            return function (searchTerm) { return entityService.listRelation(searchTerm); };
        }(this.entityService);
        searchHelpMeta.BEHAVIOUR = 'A';
        searchHelpMeta.MULTI = false;
        searchHelpMeta.FUZZY_SEARCH = true;
        searchHelpMeta.FIELDS = [
            { FIELD_NAME: 'RELATION_ID', FIELD_DESC: 'Relation', IMPORT: true, EXPORT: true, LIST_POSITION: 1, FILTER_POSITION: 0 },
            { FIELD_NAME: 'RELATION_DESC', FIELD_DESC: 'Description', IMPORT: true, EXPORT: true, LIST_POSITION: 2, FILTER_POSITION: 0 }
        ];
        searchHelpMeta.READ_ONLY = this.readonly || this.oldRelation(control) && control.valid;
        var afterExportFn = function (context, ruleIdx) {
            return function () { return context.onChangeRelationID(ruleIdx, true); };
        }(this, rowID).bind(this);
        this.searchHelpComponent.openSearchHelpModal(searchHelpMeta, control, afterExportFn);
    };
    RoleDetailComponent.prototype._generateRoleForm = function () {
        var _this = this;
        this.roleForm = this.fb.group({});
        this.roleForm.addControl('ROLE_ID', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.roleMeta.ROLE_ID, { updateOn: 'blur' }));
        if (this.isNewMode) {
            this.roleForm.get('ROLE_ID').setValidators(this._validateRoleID);
            this.roleForm.get('ROLE_ID').setAsyncValidators(this.uniqueRoleValidator.validate.bind(this.uniqueRoleValidator));
        }
        this.roleForm.addControl('ROLE_DESC', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.roleMeta.ROLE_DESC));
        // Compose Involves
        var formArray = [];
        this.roleMeta.RELATIONS.forEach(function (relation) {
            formArray.push(_this.fb.group({
                RELATION_ID: [relation.RELATION_ID],
                RELATION_DESC: [relation.RELATION_DESC],
                CARDINALITY: [{ value: relation.CARDINALITY, disabled: _this.readonly }]
            }));
        });
        if (this.isNewMode) {
            formArray.push(this.fb.group({
                RELATION_ID: [''],
                RELATION_DESC: [''],
                CARDINALITY: ['[0..1]']
            }));
        }
        this.roleForm.addControl('RELATIONS', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](formArray));
    };
    RoleDetailComponent.prototype._validateRoleID = function (c) {
        if (c.value.trim() === '') {
            return { message: 'Role ID is mandatory' };
        }
        if (c.value.toString().toLowerCase() === 'new') {
            return { message: '"NEW/new" is reserved, thus is not allowed to use!' };
        }
        return null;
    };
    RoleDetailComponent.prototype.switchEditDisplay = function () {
        var _this = this;
        if (this.isNewMode) {
            this.dialogService.confirm('Discard the new Role?').subscribe(function (confirm) {
                if (confirm) {
                    _this._switch2DisplayMode();
                    _this.roleMeta = null;
                    _this.modelService.sendDialogAnswer('OK');
                }
                else {
                    _this.modelService.sendDialogAnswer('CANCEL');
                }
            });
            return;
        }
        if (!this.readonly) { // In Change Mode -> Display Mode
            if (this.roleForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                    if (confirm) { // Discard changes and switch to Display Mode
                        _this._generateRoleForm();
                        _this.roleForm.reset(_this.roleForm.value);
                        _this._switch2DisplayMode();
                    }
                });
            }
            else { // Switch to display mode
                this._switch2DisplayMode();
            }
        }
        else { // In Display Mode -> Change Mode
            this.readonly = false;
            this.relationFormArray.controls.forEach(function (relationFormGroup) {
                relationFormGroup.get('CARDINALITY').enable();
            });
            this.relationFormArray.push(this.fb.group({
                RELATION_ID: [''],
                RELATION_DESC: [''],
                CARDINALITY: ['[0..1]']
            }));
        }
        this.messageService.clearMessages();
    };
    RoleDetailComponent.prototype._switch2DisplayMode = function () {
        this.readonly = true;
        var lastIndex = this.relationFormArray.length - 1;
        while (lastIndex >= 0 && this.relationFormArray.controls[lastIndex].get('ROLE_ID').value.trim() === '') {
            this.relationFormArray.removeAt(lastIndex);
            lastIndex--;
        }
        this.relationFormArray.controls.forEach(function (relationFormGroup) {
            relationFormGroup.get('CARDINALITY').disable();
        });
    };
    RoleDetailComponent.prototype.onChangeRoleID = function () {
        this.modelService.updateRoleID(this.roleForm.get('ROLE_ID').value);
    };
    RoleDetailComponent.prototype.onChangeRoleDesc = function () {
        this.modelService.updateRoleDesc(this.roleForm.get('ROLE_DESC').value);
    };
    RoleDetailComponent.prototype.deleteRelation = function (index) {
        if (index !== this.relationFormArray.length - 1) {
            this.relationFormArray.removeAt(index);
            this.relationFormArray.markAsDirty();
        }
    };
    RoleDetailComponent.prototype.onChangeRelationID = function (index, isExportedFromSH) {
        var currentRelationFormGroup = this.relationFormArray.controls[index];
        if (this.relationFormArray.controls.findIndex(function (relationCtrl, i) {
            return i !== index && relationCtrl.get('RELATION_ID').value === currentRelationFormGroup.get('RELATION_ID').value;
        }) !== -1) {
            currentRelationFormGroup.get('RELATION_ID').setErrors({ message: 'Duplicate Relations' });
            return;
        }
        if (index === this.relationFormArray.length - 1 && currentRelationFormGroup.value.RELATION_ID.trim() !== '') {
            // Only work for the last New line
            this.relationFormArray.push(this.fb.group({
                RELATION_ID: [''],
                RELATION_DESC: [''],
                CARDINALITY: ['[0..1]']
            }));
        }
        if (!isExportedFromSH) {
            this.entityService.getRelationDesc(currentRelationFormGroup.value.RELATION_ID).subscribe(function (data) {
                if (data['msgCat']) {
                    currentRelationFormGroup.get('RELATION_ID').setErrors({ message: data['msgShortText'] });
                }
                else {
                    currentRelationFormGroup.get('RELATION_DESC').setValue(data);
                }
            });
        }
    };
    RoleDetailComponent.prototype.oldRelation = function (formGroup) {
        return this.roleMeta.RELATIONS ?
            this.roleMeta.RELATIONS.findIndex(function (relation) { return relation.RELATION_ID === formGroup.get('RELATION_ID').value; }) !== -1 :
            false;
    };
    RoleDetailComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (this.isNewMode || (!this.bypassProtection && this.roleForm && this.roleForm.dirty)) {
            var dialogAnswer = this.dialogService.confirm('Discard changes?');
            dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                    _this.modelService.sendDialogAnswer('OK');
                }
                else {
                    _this.modelService.sendDialogAnswer('CANCEL');
                }
            });
            return dialogAnswer;
        }
        else {
            return true;
        }
    };
    RoleDetailComponent.prototype.save = function () {
        var _this = this;
        if (!this.roleForm.dirty) {
            return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
        }
        if (!this.roleForm.valid) {
            return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
        }
        if (this.isNewMode) {
            this.changedRole['action'] = 'add';
            this.changedRole['ROLE_ID'] = this.roleForm.controls['ROLE_ID'].value;
        }
        else {
            this.changedRole['action'] = 'update';
            this.changedRole['ROLE_ID'] = this.roleMeta.ROLE_ID;
        }
        if (this.roleForm.controls['ROLE_DESC'].dirty) {
            this.changedRole['ROLE_DESC'] = this.roleForm.controls['ROLE_DESC'].value;
        }
        this._processChangedRelation();
        this.entityService.saveRole(this.changedRole)
            .subscribe(function (data) { return _this._postActivityAfterSavingRole(data); });
    };
    RoleDetailComponent.prototype._processChangedRelation = function () {
        var _this = this;
        var changedRelations = [];
        if (!this.relationFormArray.dirty) {
            return;
        }
        this.changedRole['RELATIONS'] = changedRelations;
        this.relationFormArray.controls.forEach(function (relationControl) {
            if (relationControl.get('RELATION_ID').value.trim() === '') {
                return;
            }
            var action;
            var index = _this.roleMeta.RELATIONS.findIndex(function (relation) { return relationControl.get('RELATION_ID').value === relation.RELATION_ID; });
            if (index === -1) { // New Add Case
                action = 'add';
            }
            else {
                if (relationControl.dirty) { // Change Case
                    action = 'update';
                }
            }
            if (action) {
                changedRelations.push({
                    action: action, RELATION_ID: relationControl.get('RELATION_ID').value, CARDINALITY: relationControl.get('CARDINALITY').value
                });
            }
        });
        // Deletion Case
        this.roleMeta.RELATIONS.forEach(function (relation) {
            var index = _this.relationFormArray.controls.findIndex(function (relationControl) { return relationControl.get('RELATION_ID').value === relation.RELATION_ID; });
            if (index === -1) { // The attribute must be deleted
                var deletedRelation = { action: 'delete', RELATION_ID: relation.RELATION_ID };
                changedRelations.push(deletedRelation);
            }
        });
    };
    RoleDetailComponent.prototype._postActivityAfterSavingRole = function (data) {
        var _this = this;
        if (data && data['ROLE_ID']) {
            if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/role/' + data['ROLE_ID']]);
            }
            else {
                this.readonly = true;
                this.roleMeta = data;
                this._generateRoleForm();
                this.changedRole = {};
                this.messageService.reportMessage('MODEL', 'ROLE_SAVED', 'S', this.roleMeta.ROLE_ID);
            }
        }
        else {
            if (data instanceof Array) {
                data.forEach(function (err) { return _this.messageService.add(err); });
            }
            else {
                this.messageService.report(data);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(jor_angular__WEBPACK_IMPORTED_MODULE_1__["SearchHelpComponent"]),
        __metadata("design:type", jor_angular__WEBPACK_IMPORTED_MODULE_1__["SearchHelpComponent"])
    ], RoleDetailComponent.prototype, "searchHelpComponent", void 0);
    RoleDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-detail',
            template: __webpack_require__(/*! ./role-detail.component.html */ "./src/app/model/role/role-detail/role-detail.component.html"),
            styles: [__webpack_require__(/*! ./role-detail.component.css */ "./src/app/model/role/role-detail/role-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _model_validators__WEBPACK_IMPORTED_MODULE_10__["UniqueRoleValidator"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"],
            _dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"],
            jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]])
    ], RoleDetailComponent);
    return RoleDetailComponent;
}());



/***/ }),

/***/ "./src/app/model/role/role.component.css":
/*!***********************************************!*\
  !*** ./src/app/model/role/role.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/model/role/role.component.html":
/*!************************************************!*\
  !*** ./src/app/model/role/role.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchRole(searchBox.value)\" >\n      </div>\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedRole\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newRole()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let role of roleList\" routerLink=\"/model/role/{{role.ROLE_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(role)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{role.ROLE_ID}}</h5>\n          <small>version: {{role.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{role.ROLE_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{role.LAST_CHANGE_BY}} @{{role.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/model/role/role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/model/role/role.component.ts ***!
  \**********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model.service */ "./src/app/model/model.service.ts");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../msgStore */ "./src/app/msgStore.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RoleComponent = /** @class */ (function () {
    function RoleComponent(entityService, modelService, messageService, route, router) {
        this.entityService = entityService;
        this.modelService = modelService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.isSearchListShown = true;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_6__["msgStore"], 'EN');
    }
    RoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (term) { return _this.entityService.listRole(term); })).subscribe(function (data) {
            _this.roleList = data;
            var roleID;
            if (_this.route.snapshot.firstChild) {
                roleID = _this.route.snapshot.firstChild.paramMap.get('roleID');
            }
            if (roleID) {
                if (roleID === 'new') {
                    _this._newRole();
                }
                else {
                    _this.onSelect(_this.roleList.find(function (role) { return role.ROLE_ID === roleID; }));
                }
            }
        });
        this.searchRole(''); // The initial list
        this.modelService.theSelectedRole$.subscribe(function (data) {
            if (_this.theSelectedRole) {
                _this.theSelectedRole.ROLE_ID = data['ROLE_ID'];
                _this.theSelectedRole.ROLE_DESC = data['ROLE_DESC'];
            }
        });
        this.modelService.dialogAnswer$.subscribe(function (answer) {
            if (answer === 'OK' && !_this.roleList[0].CREATE_TIME) {
                _this.roleList.splice(0, 1); // Remove the first one.
            }
            else if (answer === 'CANCEL') {
                var roleID_1 = _this.route.snapshot.firstChild.paramMap.get('roleID');
                if (roleID_1) {
                    if (roleID_1 === 'new') {
                        _this.onSelect(_this.roleList[0]);
                    }
                    else {
                        _this.onSelect(_this.roleList.find(function (role) { return role.ROLE_ID === roleID_1; }));
                    }
                }
            }
        });
        this.modelService.isSearchListShown$.subscribe(function (data) { return _this.isSearchListShown = data; });
    };
    RoleComponent.prototype.onSelect = function (role) {
        if (role) {
            this.theSelectedRole = role;
            this.modelService.setSelectedRole(role);
        }
    };
    RoleComponent.prototype.searchRole = function (term) {
        this.searchTerms.next(term);
    };
    RoleComponent.prototype.hideSearchList = function () {
        this.isSearchListShown = false;
        this.modelService.hideSearchList();
    };
    RoleComponent.prototype.newRole = function () {
        if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('roleID') === 'new') {
            this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
        }
        else {
            this._newRole();
            this.router.navigate(['/model/role/new']);
        }
    };
    RoleComponent.prototype._newRole = function () {
        this.theSelectedRole = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["RoleH"]();
        this.theSelectedRole.ROLE_ID = 'new';
        this.theSelectedRole.ROLE_DESC = 'description';
        this.theSelectedRole.VERSION_NO = 1;
        this.theSelectedRole.LAST_CHANGE_BY = 'DH001';
        this.theSelectedRole.LAST_CHANGE_TIME = new Date().toDateString();
        this.modelService.setSelectedRole(this.theSelectedRole);
        this.roleList.splice(0, 0, this.theSelectedRole);
    };
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/model/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/model/role/role.component.css")]
        }),
        __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"],
            _model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ })

}]);
//# sourceMappingURL=model-model-module.js.map