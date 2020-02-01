(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/dialog.service.ts":
/*!***********************************!*\
  !*** ./src/app/dialog.service.ts ***!
  \***********************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns observable resolving to `true`=confirm or `false`=cancel
     */
    DialogService.prototype.confirm = function (message) {
        var confirmation = window.confirm(message || 'Is it OK?');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(confirmation);
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DialogService);
    return DialogService;
}());



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
var msgStore = [
    { msgCat: 'EXCEPTION',
        msgName: 'GENERIC',
        msgText: {
            EN: { shortText: 'Exception Occurs in Operation: %s',
                longText: '%s2' }
        }
    },
    { msgCat: 'EXCEPTION',
        msgName: 'SESSION_EXPIRED',
        msgText: {
            EN: { shortText: 'Your session is expired',
                longText: 'Your session is expired, please <a href="/logon">re-logon</a>' }
        }
    },
    { msgCat: 'ENTITY',
        msgName: 'NO_CHANGE',
        msgText: {
            EN: { shortText: 'No Change is made, nothing is saved!', longText: '' }
        }
    },
    { msgCat: 'ENTITY',
        msgName: 'HAS_ERRORS',
        msgText: {
            EN: { shortText: 'The form has errors, please check!', longText: '' }
        }
    },
    { msgCat: 'ENTITY',
        msgName: 'ENTITY_SAVED',
        msgText: {
            EN: { shortText: 'Entity instance is saved!', longText: '' }
        }
    },
    { msgCat: 'ENTITY',
        msgName: 'ENTITY_DELETED',
        msgText: {
            EN: { shortText: 'Entity instance is deleted!', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'PARTNER_ENTITY_ID_MISSING',
        msgText: {
            EN: { shortText: 'Partner Entity ID is Missing', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'PARTNER_INSTANCE_GUID_MISSING',
        msgText: {
            EN: { shortText: 'Partner Instance GUID is Missing', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'VALID_TO_EMPTY',
        msgText: {
            EN: { shortText: 'Valid To is Mandatory', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'VALID_FROM_AFTER_VALID_TO',
        msgText: {
            EN: { shortText: 'Valid From time must be before Valid To', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'MANDATORY_ATTRIBUTE_MISSING',
        msgText: {
            EN: { shortText: 'Mandatory attribute must be given values', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'RELATIONSHIP_MANDATORY',
        msgText: {
            EN: { shortText: 'Relationship is mandatory', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'RELATIONSHIP_ALREADY_EXISTS',
        msgText: {
            EN: { shortText: 'Relationship %s already exists!', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'NO_CHANGE',
        msgText: {
            EN: { shortText: 'No Change is made, nothing is saved!', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'INVALID_DATA',
        msgText: {
            EN: { shortText: 'Data is invalid, please check!', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'ENTITY_ID_MISSING',
        msgText: {
            EN: { shortText: 'Entity Type ID is missing', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'ENTITY_TYPE_SAVED',
        msgText: {
            EN: { shortText: 'Entity Type "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'ROLE_SAVED',
        msgText: {
            EN: { shortText: 'Role "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'RELATION_ID_MISSING',
        msgText: {
            EN: { shortText: 'Relation ID is missing', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'RELATION_PRIMARY_KEY_MISSING',
        msgText: {
            EN: { shortText: 'Relation must have at least one attribute as the primary key', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'MISS_RELATION_ASSOCIATION_FIELD_MAPPING',
        msgText: {
            EN: { shortText: 'There are no fields-mappings defined for association \'%s\'', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'RELATION_SAVED',
        msgText: {
            EN: { shortText: 'Relation "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'RELATIONSHIP_SAVED',
        msgText: {
            EN: { shortText: 'Relationship "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'RELATIONSHIP_LACK_INVOLVED_ROLES',
        msgText: {
            EN: { shortText: 'A relationship must at least have 2 involved roles', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'DATA_ELEMENT_SAVED',
        msgText: {
            EN: { shortText: 'Data element "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'DATA_DOMAIN_SAVED',
        msgText: {
            EN: { shortText: 'Data domain "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'UNSAVED_NEW',
        msgText: {
            EN: { shortText: 'There is a unsaved new object existing, please save it first, then create another.', longText: '' }
        }
    }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var WorkProtectionGuard = /** @class */ (function () {
    function WorkProtectionGuard() {
    }
    WorkProtectionGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    WorkProtectionGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], WorkProtectionGuard);
    return WorkProtectionGuard;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map