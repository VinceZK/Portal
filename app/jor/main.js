(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/jor-angular/fesm5/jor-angular.js":
/*!***********************************************!*\
  !*** ./dist/jor-angular/fesm5/jor-angular.js ***!
  \***********************************************/
/*! exports provided: Association, Attribute, AttributeBase, AttributeComponent, AttributeControlService, AttributeForm2Component, AttributeFormComponent, AttributeTableComponent, DataDomainH, DataDomainMeta, DataDomainValue, DataElementH, DataElementMeta, Entity, EntityMeta, EntityRelation, EntityService, EntityType, FieldsMappingPair, Involve, JorAngularModule, PartnerInstance, PartnerRole, Projection, QueryObject, Relation, RelationMeta, Relationship, RelationshipH, RelationshipInstance, RelationshipMeta, Role, RoleH, RoleMeta, RoleRelation, SearchHelp, SearchHelpComponent, SearchHelpField, Selection, Sort, UiMapperService, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Association", function() { return Association; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeBase", function() { return AttributeBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeComponent", function() { return AttributeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeControlService", function() { return AttributeControlService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeForm2Component", function() { return AttributeForm2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeFormComponent", function() { return AttributeFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeTableComponent", function() { return AttributeTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDomainH", function() { return DataDomainH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDomainMeta", function() { return DataDomainMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDomainValue", function() { return DataDomainValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataElementH", function() { return DataElementH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataElementMeta", function() { return DataElementMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityMeta", function() { return EntityMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityRelation", function() { return EntityRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsMappingPair", function() { return FieldsMappingPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Involve", function() { return Involve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JorAngularModule", function() { return JorAngularModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerInstance", function() { return PartnerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerRole", function() { return PartnerRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projection", function() { return Projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryObject", function() { return QueryObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relation", function() { return Relation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationMeta", function() { return RelationMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relationship", function() { return Relationship; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipH", function() { return RelationshipH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipInstance", function() { return RelationshipInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipMeta", function() { return RelationshipMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleH", function() { return RoleH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleMeta", function() { return RoleMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRelation", function() { return RoleRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHelp", function() { return SearchHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHelpComponent", function() { return SearchHelpComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHelpField", function() { return SearchHelpField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiMapperService", function() { return UiMapperService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DomainValueValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return JorAngularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());
if (false) {}
var Relationship = /** @class */ (function () {
    function Relationship() {
    }
    return Relationship;
}());
if (false) {}
var RelationshipInstance = /** @class */ (function () {
    function RelationshipInstance() {
    }
    return RelationshipInstance;
}());
if (false) {}
var PartnerInstance = /** @class */ (function () {
    function PartnerInstance() {
    }
    return PartnerInstance;
}());
if (false) {}
var PartnerRole = /** @class */ (function () {
    function PartnerRole() {
    }
    return PartnerRole;
}());
if (false) {}
var EntityMeta = /** @class */ (function () {
    function EntityMeta() {
    }
    return EntityMeta;
}());
if (false) {}
var Attribute = /** @class */ (function () {
    function Attribute() {
    }
    return Attribute;
}());
if (false) {}
var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());
if (false) {}
var RoleRelation = /** @class */ (function () {
    function RoleRelation() {
    }
    return RoleRelation;
}());
if (false) {}
var RelationshipMeta = /** @class */ (function () {
    function RelationshipMeta() {
    }
    return RelationshipMeta;
}());
if (false) {}
var Involve = /** @class */ (function () {
    function Involve() {
    }
    return Involve;
}());
if (false) {}
var RelationMeta = /** @class */ (function () {
    function RelationMeta() {
    }
    return RelationMeta;
}());
if (false) {}
var Association = /** @class */ (function () {
    function Association() {
    }
    return Association;
}());
if (false) {}
var FieldsMappingPair = /** @class */ (function () {
    function FieldsMappingPair() {
    }
    return FieldsMappingPair;
}());
if (false) {}
var EntityRelation = /** @class */ (function () {
    function EntityRelation() {
    }
    return EntityRelation;
}());
if (false) {}
var Selection = /** @class */ (function () {
    function Selection() {
    }
    return Selection;
}());
if (false) {}
var Projection = /** @class */ (function () {
    function Projection() {
    }
    return Projection;
}());
if (false) {}
var QueryObject = /** @class */ (function () {
    function QueryObject() {
    }
    return QueryObject;
}());
if (false) {}
var Sort = /** @class */ (function () {
    function Sort() {
    }
    return Sort;
}());
if (false) {}
var EntityType = /** @class */ (function () {
    function EntityType() {
    }
    return EntityType;
}());
if (false) {}
var Relation = /** @class */ (function () {
    function Relation() {
    }
    return Relation;
}());
if (false) {}
var RelationshipH = /** @class */ (function () {
    function RelationshipH() {
    }
    return RelationshipH;
}());
if (false) {}
var RoleH = /** @class */ (function () {
    function RoleH() {
    }
    return RoleH;
}());
if (false) {}
var RoleMeta = /** @class */ (function () {
    function RoleMeta() {
    }
    return RoleMeta;
}());
if (false) {}
var DataElementH = /** @class */ (function () {
    function DataElementH() {
    }
    return DataElementH;
}());
if (false) {}
var DataElementMeta = /** @class */ (function () {
    function DataElementMeta() {
    }
    return DataElementMeta;
}());
if (false) {}
var DataDomainH = /** @class */ (function () {
    function DataDomainH() {
    }
    return DataDomainH;
}());
if (false) {}
var DataDomainMeta = /** @class */ (function () {
    function DataDomainMeta() {
    }
    return DataDomainMeta;
}());
if (false) {}
var DataDomainValue = /** @class */ (function () {
    function DataDomainValue() {
    }
    return DataDomainValue;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiMapperService = /** @class */ (function () {
    function UiMapperService() {
    }
    /**
     * Map a FormGroup to a JOR relation(with cardinality [0..1] and [1..1]) for adding or updating.
     * @param formGroup: It must be a flat Angular FormGroup, which means no deep structure.
     * @param keys: Business primary keys to identify one row in the relation(DB table).
     * For example: Given {USER_ID: 'DH001'}, it means the relation has the primary key 'USER_ID'.
     * And it must be filled with a fix value 'DH001'.
     * However, if the value of the key can be derived from the formGroup, then assign null value to it.
     * For example: Given {EMAIL: null}, the value of key EMAIL will be derived from formGroup.value['EMAIL'].
     * @param isNew: Determine whether to update or add the value.
     *
     * The return is an object like:
     * {
     *     action: 'update', USER_ID: 'DH001', MIDDLE_NAME: "xxxxxx"
     * }
     */
    /**
     * Map a FormGroup to a JOR relation(with cardinality [0..1] and [1..1]) for adding or updating.
     * @param {?} formGroup
     * @param {?} keys
     * @param {?=} isNew
     * @return {?}
     */
    UiMapperService.prototype.composeChangedRelation = /**
     * Map a FormGroup to a JOR relation(with cardinality [0..1] and [1..1]) for adding or updating.
     * @param {?} formGroup
     * @param {?} keys
     * @param {?=} isNew
     * @return {?}
     */
    function (formGroup, keys, isNew) {
        if (isNew === void 0) { isNew = true; }
        if (!formGroup.dirty || !keys || Object.keys(keys).length === 0) {
            return {};
        }
        /** @type {?} */
        var changedRelation = { action: isNew ? 'add' : 'update' };
        Object.keys(keys).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return changedRelation[key] = keys[key] || formGroup.value[key]; }));
        Object.keys(formGroup.controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var control = formGroup.get(key);
            if (control.dirty) {
                changedRelation[key] = control.value;
            }
        }));
        return changedRelation;
    };
    /**
     * Map a FormArray to JOR relation(with cardinality [0..n] or [1..n]) for adding, updating, or deletion.
     * @param formArray: It must be a flat Angular FormArray, which means no deep structure.
     * @param originalArray: To determine whether an item is for adding, or for updating, or for deletion.
     * the original array, which shares the same structure with the formArray, is used for comparison.
     * Tips: You can get the originalArray by calling *FormArray.getRawValue()* right after
     * the FormArray is constructed from the backend data, usually, in ngOnInit().
     * @param keys: Business primary keys to identify one row in the formArray and originalArray.
     * For example: Given {EMAIL: null}, it will use the attribute EMAIL to compare if the same item exists or not.
     * First it iterates the formArray to whether check EMAIL exists in the originalArray,
     * if exists, use action 'update', otherwise, use action 'add'.
     * Then it iterates the originalArray to check EMAIL exists in formArray,
     * if not exists, then the action is set to 'delete'.
     *
     * The return is an array like:
     * [
     *   {action: "update", EMAIL: "dh003@hotmail.com", PRIMARY: 1},
     *   {action: "add", EMAIL: "dh003@gmail.com", TYPE: "work"},
     *   {action: "delete", EMAIL: "dh003@darkhouse.com"}
     * ]
     */
    /**
     * Map a FormArray to JOR relation(with cardinality [0..n] or [1..n]) for adding, updating, or deletion.
     * @param {?} formArray
     * @param {?} originalArray
     * @param {?} keys
     * @return {?}
     */
    UiMapperService.prototype.composeChangedRelationArray = /**
     * Map a FormArray to JOR relation(with cardinality [0..n] or [1..n]) for adding, updating, or deletion.
     * @param {?} formArray
     * @param {?} originalArray
     * @param {?} keys
     * @return {?}
     */
    function (formArray, originalArray, keys) {
        if (!formArray.dirty || !keys || Object.keys(keys).length === 0) {
            return [];
        }
        if (!originalArray) {
            originalArray = [];
        }
        /** @type {?} */
        var changedRelationArray = [];
        formArray.controls.forEach((/**
         * @param {?} formGroup
         * @return {?}
         */
        function (formGroup) {
            if (formGroup.dirty) {
                /** @type {?} */
                var changedRelation_1 = {};
                changedRelationArray.push(changedRelation_1);
                /** @type {?} */
                var index = originalArray.findIndex((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    /** @type {?} */
                    var found = true;
                    Object.keys(keys).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) {
                        if (keys[key]) {
                            return;
                        }
                        found = found && (element[key] === formGroup.value[key]);
                    }));
                    return found;
                }));
                changedRelation_1['action'] = index === -1 ? 'add' : 'update';
                Object.keys(keys).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return changedRelation_1[key] = keys[key] || formGroup.value[key]; }));
                Object.keys(formGroup['controls']).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var control = formGroup.get(key);
                    if (control.dirty) {
                        changedRelation_1[key] = control.value;
                    }
                }));
            }
        }));
        originalArray.forEach((/**
         * @param {?} originalRelation
         * @return {?}
         */
        function (originalRelation) {
            /** @type {?} */
            var index = formArray.controls.findIndex((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                /** @type {?} */
                var found = true;
                Object.keys(keys).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (keys[key]) {
                        return;
                    }
                    found = found && (element.value[key] === originalRelation[key]);
                }));
                return found;
            }));
            if (index === -1) {
                /** @type {?} */
                var deletedRelation_1 = { action: 'delete' };
                Object.keys(keys).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return deletedRelation_1[key] = keys[key] || originalRelation[key]; }));
                changedRelationArray.push(deletedRelation_1);
            }
        }));
        return changedRelationArray;
    };
    /**
     * Map a FormArray to JOR relationships for adding, updating, or deletion.
     * @param relationshipID: Relationship ID defined in JOR. For example: 'rs_marriage'
     * @param partnerRoles: Partner roles involved in the relationship.
     * For example: Given [{ENTITY_ID: 'person', ROLE_ID: 'wife'}], it means the partner is a 'person' with role 'wife'.
     * In most cases, a relationship only involves 2 roles, like husband and wife.
     * However, in certain case, there could be more than two. So the partner role is provided as an array.
     * @param formArray: First, it must be a flat Angular FormArray, which means no deep structure.
     * Second, it must contain fields: RELATIONSHIP_INSTANCE_GUID and <partner_role_name>_INSTANCE_GUID.
     * @param originalArray: To determine whether an item is for adding, or for updating, or for deletion.
     * the original array, which shares the same structure with the formArray, is used for comparison.
     * Tips: You can get the originalArray by calling *FormArray.getRawValue()* right after
     * the FormArray is constructed from the backend data, usually, in ngOnInit().
     * @param nonRelationshipAttributes: Attributes that are not belong to the relationship, but exist in the formArray.
     * A relationship has its own attributes, for example, rs_marriage has REG_PLACE and COUNTRY.
     * However, on the UI, you not only want to show the 2 fields, but also the partner's ID, NAME, BIRTHDAY, and so on.
     * And these attributes should be excluded when adding and changing the relationship.
     *
     * The Return will either a null object or a relationship object like:
     * {
     *   RELATIONSHIP_ID: "rs_marriage",
     *   values: [
     *     {action: "add", REG_PLACE: "Shanghai", COUNTRY: "China",
     *      PARTNER_INSTANCES: [
     *       {ENTITY_ID: "person", ROLE_ID: "wife", INSTANCE_GUID: "391E75B02A1811E981F3C33C6FB0A7C1"}
     *     ]},
     *     {action: "update", REG_PLACE: "Beijing", RELATIONSHIP_INSTANCE_GUID: "96DF7F706EE011E9B7B5F7E76DA40E87"},
     *     {action: "delete", RELATIONSHIP_INSTANCE_GUID: "96DF7F706EE011E9B7B5F7E76DA40E87"}
     *   ]
     * }
     */
    /**
     * Map a FormArray to JOR relationships for adding, updating, or deletion.
     * @param {?} relationshipID
     * @param {?} partnerRoles
     * @param {?} formArray
     * @param {?} originalArray
     * @param {?} nonRelationshipAttributes
     * @return {?}
     */
    UiMapperService.prototype.composeChangedRelationship = /**
     * Map a FormArray to JOR relationships for adding, updating, or deletion.
     * @param {?} relationshipID
     * @param {?} partnerRoles
     * @param {?} formArray
     * @param {?} originalArray
     * @param {?} nonRelationshipAttributes
     * @return {?}
     */
    function (relationshipID, partnerRoles, formArray, originalArray, nonRelationshipAttributes) {
        if (!formArray.dirty) {
            return null;
        }
        /** @type {?} */
        var relationship = {
            RELATIONSHIP_ID: relationshipID,
            values: []
        };
        formArray.controls.forEach((/**
         * @param {?} formGroup
         * @return {?}
         */
        function (formGroup) {
            if (formGroup.dirty) {
                /** @type {?} */
                var changedRelationshipValue_1 = {};
                relationship.values.push(changedRelationshipValue_1);
                if (formGroup.value['RELATIONSHIP_INSTANCE_GUID']) {
                    changedRelationshipValue_1['action'] = 'update';
                    changedRelationshipValue_1['RELATIONSHIP_INSTANCE_GUID'] = formGroup.value['RELATIONSHIP_INSTANCE_GUID'];
                }
                else {
                    changedRelationshipValue_1['action'] = 'add';
                    changedRelationshipValue_1['PARTNER_INSTANCES'] = [];
                    partnerRoles.forEach((/**
                     * @param {?} partnerRole
                     * @return {?}
                     */
                    function (partnerRole) {
                        return changedRelationshipValue_1['PARTNER_INSTANCES'].push({
                            ENTITY_ID: partnerRole.ENTITY_ID,
                            ROLE_ID: partnerRole.ROLE_ID,
                            INSTANCE_GUID: formGroup.value[partnerRole.ROLE_ID + '_INSTANCE_GUID']
                        });
                    }));
                }
                Object.keys(formGroup['controls']).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (nonRelationshipAttributes.includes(key) || key.substr(-13) === 'INSTANCE_GUID') {
                        return;
                    }
                    /** @type {?} */
                    var control = formGroup.get(key);
                    if (control.dirty) {
                        changedRelationshipValue_1[key] = control.value;
                    }
                }));
            }
        }));
        originalArray.forEach((/**
         * @param {?} original
         * @return {?}
         */
        function (original) {
            if (formArray.controls.findIndex((/**
             * @param {?} formGroup
             * @return {?}
             */
            function (formGroup) { return formGroup.value['RELATIONSHIP_INSTANCE_GUID'] === original['RELATIONSHIP_INSTANCE_GUID']; })) === -1) {
                relationship.values.push({ action: 'delete', RELATIONSHIP_INSTANCE_GUID: original['RELATIONSHIP_INSTANCE_GUID'] });
            }
        }));
        return relationship.values.length === 0 ? null : relationship;
    };
    UiMapperService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UiMapperService.ctorParameters = function () { return []; };
    /** @nocollapse */ UiMapperService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function UiMapperService_Factory() { return new UiMapperService(); }, token: UiMapperService, providedIn: "root" });
    return UiMapperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EntityService = /** @class */ (function () {
    function EntityService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.fakeUUIDs = [];
        this.messageService.setMessageStore([
            { msgCat: 'EXCEPTION', msgName: 'GENERIC',
                msgText: { EN: { shortText: 'Exception Occurs in Operation: %s', longText: '%s2' } } },
            { msgCat: 'EXCEPTION', msgName: 'SESSION_EXPIRED',
                msgText: { EN: { shortText: 'Your session is expired',
                        longText: 'Your session is expired, please <a href="/logon">re-logon</a>' } } }
        ], 'EN');
    }
    /**
     * @param {?} host
     * @return {?}
     */
    EntityService.prototype.setOriginalHost = /**
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this.originalHost = host;
    };
    /**
     * @param {?} msgStore
     * @param {?} language
     * @return {?}
     */
    EntityService.prototype.setMessageStore = /**
     * @param {?} msgStore
     * @param {?} language
     * @return {?}
     */
    function (msgStore, language) {
        this.messageService.setMessageStore(msgStore, language);
    };
    /**
     * List all entity IDs in the system
     */
    /**
     * List all entity IDs in the system
     * @return {?}
     */
    EntityService.prototype.listEntityID = /**
     * List all entity IDs in the system
     * @return {?}
     */
    function () {
        return this.http.get(this.originalHost + "/api/entity/EntityIDs").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityID')));
    };
    /**
     * List entity IDs by a given role ID
     * @param roleID
     */
    /**
     * List entity IDs by a given role ID
     * @param {?} roleID
     * @return {?}
     */
    EntityService.prototype.listEntityIDbyRole = /**
     * List entity IDs by a given role ID
     * @param {?} roleID
     * @return {?}
     */
    function (roleID) {
        return this.http.get(this.originalHost + ("/api/entity/EntityIDs/" + roleID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityIDbyRole')));
    };
    /**
     * Return the entity meta for a given entity ID
     * @param entityID
     */
    /**
     * Return the entity meta for a given entity ID
     * @param {?} entityID
     * @return {?}
     */
    EntityService.prototype.getEntityMeta = /**
     * Return the entity meta for a given entity ID
     * @param {?} entityID
     * @return {?}
     */
    function (entityID) {
        return this.http.get(this.originalHost + ("/api/entity/meta/" + entityID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityMeta')));
    };
    /**
     * Return a list of entity objects according to the description of a given query object
     * @param queryObject
     */
    /**
     * Return a list of entity objects according to the description of a given query object
     * @param {?} queryObject
     * @return {?}
     */
    EntityService.prototype.searchEntities = /**
     * Return a list of entity objects according to the description of a given query object
     * @param {?} queryObject
     * @return {?}
     */
    function (queryObject) {
        return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchEntities')));
    };
    /**
     * Return an entity instance for a given entity instance GUID
     * @param instanceGUID
     */
    /**
     * Return an entity instance for a given entity instance GUID
     * @param {?} instanceGUID
     * @return {?}
     */
    EntityService.prototype.getEntityInstance = /**
     * Return an entity instance for a given entity instance GUID
     * @param {?} instanceGUID
     * @return {?}
     */
    function (instanceGUID) {
        return this.http.get(this.originalHost + ("/api/entity/instance/" + instanceGUID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityInstance')));
    };
    /**
     * Return a relation's meta data for a given relation ID
     * @param relationID
     */
    /**
     * Return a relation's meta data for a given relation ID
     * @param {?} relationID
     * @return {?}
     */
    EntityService.prototype.getRelationMeta = /**
     * Return a relation's meta data for a given relation ID
     * @param {?} relationID
     * @return {?}
     */
    function (relationID) {
        return this.http.get(this.originalHost + ("/api/relation/meta/" + relationID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationMeta')));
    };
    /**
     * Return all relations' meta data for a given entity ID
     * @param entityID
     */
    /**
     * Return all relations' meta data for a given entity ID
     * @param {?} entityID
     * @return {?}
     */
    EntityService.prototype.getRelationMetaOfEntity = /**
     * Return all relations' meta data for a given entity ID
     * @param {?} entityID
     * @return {?}
     */
    function (entityID) {
        return this.http.get(this.originalHost + ("/api/relation/meta/entity/" + entityID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationMetaOfEntity')));
    };
    /**
     * Create a new entity instance
     * @param instance
     */
    /**
     * Create a new entity instance
     * @param {?} instance
     * @return {?}
     */
    EntityService.prototype.createEntityInstance = /**
     * Create a new entity instance
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        return this.http.post(this.originalHost + "/api/entity", instance, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('createEntityInstance')));
    };
    /**
     * Change an existing entity instance
     * @param instance
     */
    /**
     * Change an existing entity instance
     * @param {?} instance
     * @return {?}
     */
    EntityService.prototype.changeEntityInstance = /**
     * Change an existing entity instance
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        return this.http.put(this.originalHost + "/api/entity", instance, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('changeEntityInstance')));
    };
    /**
     * Delete an entity instance from a given instance GUID
     * @param instanceGUID
     */
    /**
     * Delete an entity instance from a given instance GUID
     * @param {?} instanceGUID
     * @return {?}
     */
    EntityService.prototype.deleteEntityInstance = /**
     * Delete an entity instance from a given instance GUID
     * @param {?} instanceGUID
     * @return {?}
     */
    function (instanceGUID) {
        return this.http.delete(this.originalHost + ("/api/entity/instance/" + instanceGUID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteEntityInstance')));
    };
    /**
     * Return entity types(IDs) for a given search term
     * @param term
     */
    /**
     * Return entity types(IDs) for a given search term
     * @param {?} term
     * @return {?}
     */
    EntityService.prototype.listEntityType = /**
     * Return entity types(IDs) for a given search term
     * @param {?} term
     * @return {?}
     */
    function (term) {
        return this.http.get(this.originalHost + ("/api/model/entity-types?term=" + term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityType')));
    };
    /**
     * Return the description of a given entity type(ID)
     * @param entityID
     */
    /**
     * Return the description of a given entity type(ID)
     * @param {?} entityID
     * @return {?}
     */
    EntityService.prototype.getEntityTypeDesc = /**
     * Return the description of a given entity type(ID)
     * @param {?} entityID
     * @return {?}
     */
    function (entityID) {
        return this.http.get(this.originalHost + ("/api/model/entity-types/" + entityID + "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityTypeDesc')));
    };
    /**
     * Save an entity type after changing or creation
     * @param entityType
     */
    /**
     * Save an entity type after changing or creation
     * @param {?} entityType
     * @return {?}
     */
    EntityService.prototype.saveEntityType = /**
     * Save an entity type after changing or creation
     * @param {?} entityType
     * @return {?}
     */
    function (entityType) {
        return this.http.post(this.originalHost + "/api/model/entity-types", entityType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveEntityType')));
    };
    /**
     * Return a list of relations in the system according to the search term
     * @param term
     */
    /**
     * Return a list of relations in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    EntityService.prototype.listRelation = /**
     * Return a list of relations in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    function (term) {
        return this.http.get(this.originalHost + ("/api/model/relations?term=" + term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRelation')));
    };
    /**
     * Return the description of a given relation ID
     * @param relationID
     */
    /**
     * Return the description of a given relation ID
     * @param {?} relationID
     * @return {?}
     */
    EntityService.prototype.getRelationDesc = /**
     * Return the description of a given relation ID
     * @param {?} relationID
     * @return {?}
     */
    function (relationID) {
        return this.http.get(this.originalHost + ("/api/model/relations/" + relationID + "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationDesc')));
    };
    /**
     * Save a relation after changing or creation
     * @param relation
     */
    /**
     * Save a relation after changing or creation
     * @param {?} relation
     * @return {?}
     */
    EntityService.prototype.saveRelation = /**
     * Save a relation after changing or creation
     * @param {?} relation
     * @return {?}
     */
    function (relation) {
        return this.http.post(this.originalHost + "/api/model/relations", relation, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRelation')));
    };
    /**
     * Return a list of relationships in the system according to the search term
     * @param term
     */
    /**
     * Return a list of relationships in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    EntityService.prototype.listRelationship = /**
     * Return a list of relationships in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    function (term) {
        return this.http.get(this.originalHost + ("/api/model/relationships?term=" + term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRelationship')));
    };
    /**
     * Return a relationship definition from a given relationship ID
     * @param relationshipID
     */
    /**
     * Return a relationship definition from a given relationship ID
     * @param {?} relationshipID
     * @return {?}
     */
    EntityService.prototype.getRelationship = /**
     * Return a relationship definition from a given relationship ID
     * @param {?} relationshipID
     * @return {?}
     */
    function (relationshipID) {
        return this.http.get(this.originalHost + ("/api/model/relationships/" + relationshipID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationship')));
    };
    /**
     * Return the description of a given relationship ID
     * @param relationshipID
     */
    /**
     * Return the description of a given relationship ID
     * @param {?} relationshipID
     * @return {?}
     */
    EntityService.prototype.getRelationshipDesc = /**
     * Return the description of a given relationship ID
     * @param {?} relationshipID
     * @return {?}
     */
    function (relationshipID) {
        return this.http.get(this.originalHost + ("/api/model/relationships/" + relationshipID + "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationshipDesc')));
    };
    /**
     * Save a relationship after changing or creation
     * @param relationship
     */
    /**
     * Save a relationship after changing or creation
     * @param {?} relationship
     * @return {?}
     */
    EntityService.prototype.saveRelationship = /**
     * Save a relationship after changing or creation
     * @param {?} relationship
     * @return {?}
     */
    function (relationship) {
        return this.http.post(this.originalHost + "/api/model/relationships", relationship, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRelationship')));
    };
    /**
     * Return a list of roles in the system according to the search term
     * @param term
     */
    /**
     * Return a list of roles in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    EntityService.prototype.listRole = /**
     * Return a list of roles in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    function (term) {
        return this.http.get(this.originalHost + ("/api/model/roles?term=" + term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRole')));
    };
    /**
     * Return a role definition from a given role ID
     * @param roleID
     */
    /**
     * Return a role definition from a given role ID
     * @param {?} roleID
     * @return {?}
     */
    EntityService.prototype.getRole = /**
     * Return a role definition from a given role ID
     * @param {?} roleID
     * @return {?}
     */
    function (roleID) {
        return this.http.get(this.originalHost + ("/api/model/roles/" + roleID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRole')));
    };
    /**
     * Return the description of a given role ID
     * @param roleID
     */
    /**
     * Return the description of a given role ID
     * @param {?} roleID
     * @return {?}
     */
    EntityService.prototype.getRoleDesc = /**
     * Return the description of a given role ID
     * @param {?} roleID
     * @return {?}
     */
    function (roleID) {
        return this.http.get(this.originalHost + ("/api/model/roles/" + roleID + "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDesc')));
    };
    /**
     * Save a role after changing or creation
     * @param role
     */
    /**
     * Save a role after changing or creation
     * @param {?} role
     * @return {?}
     */
    EntityService.prototype.saveRole = /**
     * Save a role after changing or creation
     * @param {?} role
     * @return {?}
     */
    function (role) {
        return this.http.post(this.originalHost + "/api/model/roles", role, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRole')));
    };
    /**
     * Return a list of data elements in the system according to the search term
     * @param term
     */
    /**
     * Return a list of data elements in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    EntityService.prototype.listDataElement = /**
     * Return a list of data elements in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    function (term) {
        return this.http.get(this.originalHost + ("/api/model/data-elements?term=" + term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listDataElement')));
    };
    /**
     * Return a data element definition from a given element ID
     * @param elementID
     */
    /**
     * Return a data element definition from a given element ID
     * @param {?} elementID
     * @return {?}
     */
    EntityService.prototype.getDataElement = /**
     * Return a data element definition from a given element ID
     * @param {?} elementID
     * @return {?}
     */
    function (elementID) {
        return this.http.get(this.originalHost + ("/api/model/data-elements/" + elementID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataElement')));
    };
    /**
     * Return the description of a given data element ID
     * @param elementID
     */
    /**
     * Return the description of a given data element ID
     * @param {?} elementID
     * @return {?}
     */
    EntityService.prototype.getDataElementDesc = /**
     * Return the description of a given data element ID
     * @param {?} elementID
     * @return {?}
     */
    function (elementID) {
        return this.http.get(this.originalHost + ("/api/model/data-elements/" + elementID + "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataElementDesc')));
    };
    /**
     * Save a data element after changing or creation
     * @param element
     */
    /**
     * Save a data element after changing or creation
     * @param {?} element
     * @return {?}
     */
    EntityService.prototype.saveDataElement = /**
     * Save a data element after changing or creation
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return this.http.post(this.originalHost + "/api/model/data-elements", element, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveDataElement')));
    };
    /**
     * Return a list of data domains in the system according to the search term
     * @param term
     */
    /**
     * Return a list of data domains in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    EntityService.prototype.listDataDomain = /**
     * Return a list of data domains in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    function (term) {
        return this.http.get(this.originalHost + ("/api/model/data-domains?term=" + term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listDataDomain')));
    };
    /**
     * Return a data domain definition from a given domain ID
     * @param domainID
     */
    /**
     * Return a data domain definition from a given domain ID
     * @param {?} domainID
     * @return {?}
     */
    EntityService.prototype.getDataDomain = /**
     * Return a data domain definition from a given domain ID
     * @param {?} domainID
     * @return {?}
     */
    function (domainID) {
        return this.http.get(this.originalHost + ("/api/model/data-domains/" + domainID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataDomain')));
    };
    /**
     * Return the description of a given data domain ID
     * @param domainID
     */
    /**
     * Return the description of a given data domain ID
     * @param {?} domainID
     * @return {?}
     */
    EntityService.prototype.getDataDomainDesc = /**
     * Return the description of a given data domain ID
     * @param {?} domainID
     * @return {?}
     */
    function (domainID) {
        return this.http.get(this.originalHost + ("/api/model/data-domains/" + domainID + "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataDomainDesc')));
    };
    /**
     * Save a data domain after changing or creation
     * @param domain
     */
    /**
     * Save a data domain after changing or creation
     * @param {?} domain
     * @return {?}
     */
    EntityService.prototype.saveDataDomain = /**
     * Save a data domain after changing or creation
     * @param {?} domain
     * @return {?}
     */
    function (domain) {
        return this.http.post(this.originalHost + "/api/model/data-domains", domain, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveDataDomain')));
    };
    /**
     * Return a fake relationship ID before saving
     */
    /**
     * Return a fake relationship ID before saving
     * @return {?}
     */
    EntityService.prototype.generateFakeRelationshipUUID = /**
     * Return a fake relationship ID before saving
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextPosition = this.fakeUUIDs.length + 1;
        /** @type {?} */
        var fakeUUID = 'NewRelationship_' + nextPosition;
        this.fakeUUIDs.push(fakeUUID);
        return fakeUUID;
    };
    /**
     * @private
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    EntityService.prototype.handleError = /**
     * @private
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            if (error.status === 401) {
                _this.messageService.addMessage('EXCEPTION', 'SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["messageType"].Exception);
            }
            else {
                _this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["messageType"].Exception, operation, error.message);
            }
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])((/** @type {?} */ (result)));
        });
    };
    EntityService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EntityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
    ]; };
    /** @nocollapse */ EntityService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function EntityService_Factory() { return new EntityService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); }, token: EntityService, providedIn: "root" });
    return EntityService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchHelp = /** @class */ (function () {
    function SearchHelp() {
    }
    return SearchHelp;
}());
if (false) {}
var SearchHelpField = /** @class */ (function () {
    function SearchHelpField() {
    }
    return SearchHelpField;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchHelpComponent = /** @class */ (function () {
    function SearchHelpComponent(fb, entityService) {
        this.fb = fb;
        this.entityService = entityService;
        this.isSearchHelpModalShown = false;
        this.isFilterShown = false;
        this.isSelectAllChecked = false;
        this.selectedIndex = -1;
        this.filterFields = [];
        this.listFields = [];
        this.listData = [];
    }
    Object.defineProperty(SearchHelpComponent.prototype, "displaySearchHelpModal", {
        get: /**
         * @return {?}
         */
        function () { return this.isSearchHelpModalShown ? 'block' : 'none'; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SearchHelpComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.filterFieldsFormGroup = this.fb.group({});
    };
    /**
     * @param {?} searchHelpMeta
     * @param {?} exportControl
     * @param {?=} afterExportFn
     * @return {?}
     */
    SearchHelpComponent.prototype.openSearchHelpModal = /**
     * @param {?} searchHelpMeta
     * @param {?} exportControl
     * @param {?=} afterExportFn
     * @return {?}
     */
    function (searchHelpMeta, exportControl, afterExportFn) {
        var _this = this;
        this.searchHelpMeta = searchHelpMeta;
        this.exportControl = exportControl;
        this.afterExportFn = afterExportFn;
        this.filterFieldsFormGroup = this.fb.group({});
        this.filterFields = this.searchHelpMeta.FIELDS.filter((/**
         * @param {?} fieldMeta
         * @return {?}
         */
        function (fieldMeta) { return fieldMeta.FILTER_POSITION; }));
        this.filterFields.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.FILTER_POSITION - b.FILTER_POSITION; }));
        this.filterFields.forEach((/**
         * @param {?} fieldMeta
         * @return {?}
         */
        function (fieldMeta) {
            if (fieldMeta.IMPORT) {
                /** @type {?} */
                var ieFieldName = fieldMeta.IE_FIELD_NAME || fieldMeta.FIELD_NAME;
                if (exportControl.get(ieFieldName)) {
                    fieldMeta.DEFAULT_VALUE = exportControl.get(ieFieldName).value;
                }
            }
            _this.filterFieldsFormGroup.addControl(fieldMeta.FIELD_NAME, _this.fb.control(fieldMeta.DEFAULT_VALUE));
        }));
        this.listFields = this.searchHelpMeta.FIELDS.filter((/**
         * @param {?} fieldMeta
         * @return {?}
         */
        function (fieldMeta) { return fieldMeta.LIST_POSITION; }));
        this.listFields.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.LIST_POSITION - b.LIST_POSITION; }));
        if (this.searchHelpMeta.BEHAVIOUR === 'A') {
            this.search();
            this.isFilterShown = false;
        }
        else {
            this.isFilterShown = true;
        }
        this.isSearchHelpModalShown = true;
    };
    /**
     * @param {?} entityID
     * @param {?} relationID
     * @param {?} exportControl
     * @param {?} readonly
     * @param {?=} exportField
     * @param {?=} domainID
     * @param {?=} afterExportFn
     * @return {?}
     */
    SearchHelpComponent.prototype.openSearchHelpModalByEntity = /**
     * @param {?} entityID
     * @param {?} relationID
     * @param {?} exportControl
     * @param {?} readonly
     * @param {?=} exportField
     * @param {?=} domainID
     * @param {?=} afterExportFn
     * @return {?}
     */
    function (entityID, relationID, exportControl, readonly, exportField, domainID, afterExportFn) {
        var _this = this;
        /** @type {?} */
        var searchHelpMeta = new SearchHelp();
        searchHelpMeta.OBJECT_NAME = entityID;
        searchHelpMeta.METHOD = (/**
         * @param {?} entityService
         * @return {?}
         */
        function (entityService) {
            return (/**
             * @param {?} searchTerm
             * @return {?}
             */
            function (searchTerm) { return entityService.searchEntities(searchTerm); });
        })(this.entityService);
        searchHelpMeta.BEHAVIOUR = 'M';
        searchHelpMeta.MULTI = false;
        searchHelpMeta.FUZZY_SEARCH = false;
        searchHelpMeta.FIELDS = [];
        searchHelpMeta.READ_ONLY = readonly;
        searchHelpMeta.ENTITY_ID = entityID;
        searchHelpMeta.RELATION_ID = relationID;
        this.entityService.getRelationMeta(relationID)
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var relationMeta = (/** @type {?} */ (data));
            relationMeta.ATTRIBUTES.forEach((/**
             * @param {?} attribute
             * @return {?}
             */
            function (attribute) {
                return searchHelpMeta.FIELDS.push({
                    FIELD_NAME: attribute.ATTR_NAME,
                    FIELD_DESC: attribute.LIST_HEADER_TEXT,
                    IE_FIELD_NAME: attribute.DOMAIN_ID === domainID ? exportField : null,
                    IMPORT: attribute.PRIMARY_KEY || attribute.DOMAIN_ID === domainID,
                    EXPORT: attribute.PRIMARY_KEY || attribute.DOMAIN_ID === domainID,
                    LIST_POSITION: attribute.ORDER,
                    FILTER_POSITION: attribute.ORDER
                });
            }));
            searchHelpMeta.FIELDS.push({
                FIELD_NAME: 'INSTANCE_GUID',
                FIELD_DESC: 'Instance GUID',
                IMPORT: false,
                EXPORT: true,
                LIST_POSITION: 999,
                FILTER_POSITION: 0
            });
            _this.openSearchHelpModal(searchHelpMeta, exportControl, afterExportFn);
        }));
    };
    /**
     * @return {?}
     */
    SearchHelpComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var searchTerm;
        if (this.searchHelpMeta.FUZZY_SEARCH) {
            searchTerm = this.fuzzySearchTerm || '';
        }
        else {
            searchTerm = new QueryObject();
            searchTerm.ENTITY_ID = this.searchHelpMeta.ENTITY_ID;
            searchTerm.RELATION_ID = this.searchHelpMeta.RELATION_ID;
            searchTerm.FILTER = [];
            this.filterFields.forEach((/**
             * @param {?} fieldMeta
             * @return {?}
             */
            function (fieldMeta) {
                /** @type {?} */
                var fieldValue = _this.filterFieldsFormGroup.get(fieldMeta.FIELD_NAME).value;
                if (fieldValue) {
                    if (fieldValue.includes('*') || fieldValue.includes('%')) {
                        searchTerm.FILTER.push({ FIELD_NAME: fieldMeta.FIELD_NAME, OPERATOR: 'CN', LOW: fieldValue });
                    }
                    else {
                        searchTerm.FILTER.push({ FIELD_NAME: fieldMeta.FIELD_NAME, OPERATOR: 'EQ', LOW: fieldValue });
                    }
                }
            }));
        }
        this.listData = [];
        this.isSelectAllChecked = false;
        if (typeof this.searchHelpMeta.METHOD === 'function') {
            /** @type {?} */
            var searchHelpMethod = (/** @type {?} */ (this.searchHelpMeta.METHOD));
            searchHelpMethod(searchTerm).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this._generateSearchList(data); }));
        }
        else if (Array.isArray(this.searchHelpMeta.METHOD)) {
            this._generateSearchList(this.searchHelpMeta.METHOD);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    SearchHelpComponent.prototype._generateSearchList = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var listItem = { SELECTED: '' };
            _this.listFields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) { return listItem[field.FIELD_NAME] = item[field.FIELD_NAME]; }));
            _this.listData.push(listItem);
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SearchHelpComponent.prototype.enterSearch = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.keyCode === 13) {
            this.search();
        }
    };
    /**
     * @return {?}
     */
    SearchHelpComponent.prototype.showFilter = /**
     * @return {?}
     */
    function () {
        this.isFilterShown = true;
    };
    /**
     * @return {?}
     */
    SearchHelpComponent.prototype.hideFilter = /**
     * @return {?}
     */
    function () {
        this.isFilterShown = false;
    };
    /**
     * @return {?}
     */
    SearchHelpComponent.prototype.selectAll = /**
     * @return {?}
     */
    function () {
        this.isSelectAllChecked = !this.isSelectAllChecked;
        this.listData.forEach((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.SELECTED = !data.SELECTED; }));
    };
    /**
     * @return {?}
     */
    SearchHelpComponent.prototype.confirmSelection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // TODO: Currently, only single selection is supported. Multiple selection in later time
        if (this.searchHelpMeta.READ_ONLY) {
            return;
        }
        this.listFields.forEach((/**
         * @param {?} listField
         * @return {?}
         */
        function (listField) {
            if (_this.exportControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]) {
                /** @type {?} */
                var exportControl = (/** @type {?} */ (_this.exportControl));
                /** @type {?} */
                var ieFieldName = listField.IE_FIELD_NAME || listField.FIELD_NAME;
                /** @type {?} */
                var exportFieldControl = exportControl.get(ieFieldName);
                if (listField.EXPORT && exportFieldControl) {
                    exportFieldControl.setValue(_this.listData[_this.selectedIndex][listField.FIELD_NAME]);
                    exportFieldControl.markAsDirty();
                }
            }
            else {
                if (listField.EXPORT) {
                    _this.exportControl[listField.FIELD_NAME] = _this.listData[_this.selectedIndex][listField.FIELD_NAME];
                }
            }
        }));
        if (this.afterExportFn) {
            this.afterExportFn();
        }
        this.listData = [];
        this.isSearchHelpModalShown = false;
    };
    /**
     * @return {?}
     */
    SearchHelpComponent.prototype.closeSearchHelpModal = /**
     * @return {?}
     */
    function () {
        this.isSearchHelpModalShown = false;
    };
    SearchHelpComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dk-app-search-help',
                    template: "<div class=\"modal fade\" id=\"searchHelp\" tabindex=\"-1\" role=\"dialog\"\n     [ngClass]=\"{'show': isSearchHelpModalShown}\" [ngStyle]=\"{'display': displaySearchHelpModal}\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n    <div class=\"modal-content dk-search-help-content\">\n      <div class=\"modal-header dk-search-help-header\">\n        <h6 class=\"modal-title\" id=\"addRelationship\">{{searchHelpMeta?.OBJECT_NAME}} ({{listData.length}})</h6>\n        <button type=\"button\" class=\"close\" (click)=\"closeSearchHelpModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <div *ngIf=\"isFilterShown\" class=\"card mb-2\">\n          <div *ngIf=\"searchHelpMeta && searchHelpMeta.FUZZY_SEARCH\" class=\"mt-2 mx-2 row\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"fuzzySearchTerm\" (keyup)=\"enterSearch($event)\">\n          </div>\n          <div class=\"mt-2 mx-2 row\" [formGroup]=\"filterFieldsFormGroup\">\n            <div *ngFor=\"let filterField of filterFields\" class=\"col-6 form-group row\">\n              <label for=\"{{filterField.FIELD_NAME}}\" class=\"col-6 col-form-label col-form-label-sm text-right\">\n                {{filterField.FIELD_DESC}}:</label>\n              <input id=\"{{filterField.FIELD_NAME}}\" name=\"{{filterField.FIELD_NAME}}\" formControlName=\"{{filterField.FIELD_NAME}}\"\n                     type=\"text\" class=\"col-6 form-control form-control-sm\" [readonly]=\"filterField.FILTER_DISP_ONLY\" (keyup)=\"enterSearch($event)\">\n            </div>\n          </div>\n\n          <div class=\"mb-2\">\n            <button type=\"button\" id=\"search\" class=\"btn btn-sm btn-primary float-right mr-2\" (click)=\"search()\">\n              Search\n            </button>\n          </div>\n        </div>\n\n        <button *ngIf=\"!isFilterShown\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"showFilter()\">Show Filter</button>\n        <button *ngIf=\"isFilterShown\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"hideFilter()\">Hide Filter</button>\n\n        <table class=\"table table-bordered table-sm table-hover dk-search-table\">\n          <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">\n              <input *ngIf=\"searchHelpMeta?.MULTI\" type=\"checkbox\" [(ngModel)]=\"isSelectAllChecked\" (click)=\"selectAll()\">\n            </th>\n            <th *ngFor=\"let listField of listFields\">{{listField.FIELD_DESC}}</th>\n          </tr>\n          </thead>\n\n          <tbody>\n          <tr *ngFor=\"let item of listData; let i = index\">\n            <td>\n              <input *ngIf=\"!searchHelpMeta.MULTI\" type=\"radio\" name=\"selectedIndex\" [value]=\"i\" [(ngModel)]=\"selectedIndex\" (dblclick)=\"confirmSelection()\">\n              <input *ngIf=\"searchHelpMeta.MULTI\" type=\"checkbox\" [(ngModel)]=\"item.SELECTED\">\n            </td>\n            <td *ngFor=\"let listField of listFields\">{{item[listField.FIELD_NAME]}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"modal-footer dk-search-help-footer\">\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"closeSearchHelpModal()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"confirmSelection()\" [disabled]=\"searchHelpMeta?.READ_ONLY\">Confirm</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".dk-search-help-header{padding:.3rem .5rem;background-color:#e9ecef}.dk-search-help-footer{padding:.5rem}.dk-search-table{display:block;overflow:scroll;max-height:40rem;white-space:nowrap;border:none}.dk-search-help-content{border:1px solid rgba(0,0,0,.4);box-shadow:8px 5px 5px rgba(0,0,0,.2)}"]
                }] }
    ];
    /** @nocollapse */
    SearchHelpComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: EntityService }
    ]; };
    return SearchHelpComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AttributeBase = /** @class */ (function () {
    function AttributeBase() {
        this.dropdownList = [];
    }
    return AttributeBase;
}());
if (false) {}
var DropdownList = /** @class */ (function () {
    function DropdownList() {
    }
    return DropdownList;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// noinspection JSAnnotator
var DomainValueValidator = /** @class */ (function () {
    function DomainValueValidator(entityService) {
        this.entityService = entityService;
    }
    /**
     * @param {?} ctrl
     * @return {?}
     */
    DomainValueValidator.prototype.validate = /**
     * @param {?} ctrl
     * @return {?}
     */
    function (ctrl) {
        /** @type {?} */
        var queryObject = new QueryObject();
        // queryObject.ENTITY_ID = entityID;
        // queryObject.RELATION_ID = relationID;
        // queryObject.FILTER = [{FIELD_NAME: searchField, OPERATOR: 'EQ', LOW: ctrl.value}];
        return this.entityService.searchEntities(queryObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data['msgName']) {
                return { message: data['msgName']['msgShortText'] };
            }
            else {
                if (data.length === 0) {
                    return { message: 'Value is invalid' };
                }
                else {
                    return null;
                }
            }
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @return {?}
         */
        function () { return null; })));
    };
    DomainValueValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DomainValueValidator.ctorParameters = function () { return [
        { type: EntityService }
    ]; };
    /** @nocollapse */ DomainValueValidator.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DomainValueValidator_Factory() { return new DomainValueValidator(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(EntityService)); }, token: DomainValueValidator, providedIn: "root" });
    return DomainValueValidator;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AttributeControlService = /** @class */ (function () {
    function AttributeControlService(entityService, domainValueValidator) {
        this.entityService = entityService;
        this.domainValueValidator = domainValueValidator;
        this.specialInputCtrls = [];
    }
    /**
     * @param {?} attributes
     * @return {?}
     */
    AttributeControlService.prototype.toAttributeControl = /**
     * @param {?} attributes
     * @return {?}
     */
    function (attributes) {
        var _this = this;
        /** @type {?} */
        var attributeControls = [];
        if (!attributes) {
            return attributeControls;
        }
        attributes.forEach((/**
         * @param {?} attribute
         * @return {?}
         */
        function (attribute) {
            /** @type {?} */
            var attributeControl = new AttributeBase();
            attributeControl.key = attribute.ATTR_GUID;
            attributeControl.name = attribute.ATTR_NAME;
            attributeControl.label = attribute.LABEL_TEXT;
            attributeControl.list_label = attribute.LIST_HEADER_TEXT;
            attributeControl.relationId = attribute.RELATION_ID;
            attributeControl.searchHelpId = attribute.SEARCH_HELP_ID;
            attributeControl.searchHelpExportField = attribute.SEARCH_HELP_EXPORT_FIELD;
            attributeControl.domainId = attribute.DOMAIN_ID;
            attributeControl.domainEntityId = attribute.DOMAIN_ENTITY_ID;
            attributeControl.domainRelationId = attribute.DOMAIN_RELATION_ID;
            switch (attribute.DATA_TYPE) {
                case 1: // Char
                    if (attribute.CAPITAL_ONLY) {
                        attributeControl.controlType = 'text_capital';
                        // onkeyup="this.value = this.value.toUpperCase();"
                    }
                    else {
                        if (attribute.DOMAIN_TYPE === 3) {
                            attributeControl.controlType = 'dropdown';
                            _this._generateDropdownList(attribute.DOMAIN_ID, attributeControl);
                        }
                        else {
                            attributeControl.controlType = 'text';
                            attributeControl.pattern = attribute.REG_EXPR;
                        }
                    }
                    attributeControl.maxLength = attribute.DATA_LENGTH;
                    attributeControl.primaryKey = attribute.PRIMARY_KEY;
                    break;
                case 2: // Integer
                    if (attribute.DOMAIN_TYPE === 3) {
                        attributeControl.controlType = 'dropdown';
                        _this._generateDropdownList(attribute.DOMAIN_ID, attributeControl);
                    }
                    else {
                        attributeControl.controlType = 'integer';
                        if (attribute.UNSIGNED) {
                            attributeControl.pattern = '^\\d+([^.,])?$';
                        }
                        attributeControl.autoIncrement = attribute.AUTO_INCREMENT;
                    }
                    attributeControl.primaryKey = attribute.PRIMARY_KEY;
                    break;
                case 3: // Boolean
                    attributeControl.controlType = 'checkbox';
                    break;
                case 4: // Decimal
                    attributeControl.controlType = 'decimal';
                    _this._setDecimalPattern(attributeControl, attribute);
                    break;
                case 5: // String
                    attributeControl.controlType = 'textarea';
                    break;
                case 6: // Binary
                    attributeControl.controlType = 'file';
                    break;
                case 7: // Date
                    attributeControl.controlType = 'date';
                    break;
                case 8: // Timestamp
                    attributeControl.controlType = 'timestamp';
                    break;
                default:
                    attributeControl.controlType = 'text';
            }
            attributeControls.push(attributeControl);
        }));
        return attributeControls;
    };
    /**
     * @param {?} domainID
     * @param {?} attributeControl
     * @return {?}
     */
    AttributeControlService.prototype._generateDropdownList = /**
     * @param {?} domainID
     * @param {?} attributeControl
     * @return {?}
     */
    function (domainID, attributeControl) {
        this.entityService.getDataDomain(domainID)
            .subscribe((/**
         * @param {?} dataDomain
         * @return {?}
         */
        function (dataDomain) {
            return dataDomain['DOMAIN_VALUES'].forEach((/**
             * @param {?} domainValue
             * @return {?}
             */
            function (domainValue) {
                attributeControl.dropdownList.push({
                    key: domainValue['LOW_VALUE'],
                    value: domainValue['LOW_VALUE_TEXT'] || domainValue['LOW_VALUE']
                });
            }));
        }));
    };
    /**
     * @param {?} attributeControl
     * @param {?} attribute
     * @return {?}
     */
    AttributeControlService.prototype._setDecimalPattern = /**
     * @param {?} attributeControl
     * @param {?} attribute
     * @return {?}
     */
    function (attributeControl, attribute) {
        /** @type {?} */
        var zeroPadding = '0000000000000000000000000000000000000';
        attributeControl.step = '0.' + zeroPadding.substr(0, attribute.DECIMAL - 1) + '1';
        attributeControl.placeholder = '0.' + zeroPadding.substr(0, attribute.DECIMAL - 1) + '0';
        /** @type {?} */
        var integerPlace = attribute.DATA_LENGTH - attribute.DECIMAL;
        attributeControl.pattern = attribute.UNSIGNED ? '^(' : '^(\\-?';
        attributeControl.pattern += integerPlace ? '\\d{1,' + integerPlace.toString() + '})' : '0)';
        attributeControl.pattern += '(\\.\\d{1,' + attribute.DECIMAL + '})?$';
        attributeControl.maxLength = attribute.DATA_LENGTH;
    };
    /**
     * @param {?} attribute
     * @param {?} instance
     * @return {?}
     */
    AttributeControlService.prototype.convertToFormControl = /**
     * @param {?} attribute
     * @param {?} instance
     * @return {?}
     */
    function (attribute, instance) {
        /** @type {?} */
        var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](instance[attribute.ATTR_NAME] || '');
        if (attribute.PRIMARY_KEY && !attribute.AUTO_INCREMENT) {
            formControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        }
        // if (attribute.DOMAIN_TYPE === 2 && !attribute.PRIMARY_KEY) {
        //   formControl.setAsyncValidators(this.domainValueValidator.validate.bind(this.domainValueValidator));
        // }
        if (attribute.DATA_TYPE === 3 || attribute.DOMAIN_TYPE === 3) { // Checkbox and dropdown list controls
            this.specialInputCtrls.push(formControl);
        }
        return formControl;
    };
    /**
     * @param {?} attributes
     * @param {?} instance
     * @param {?=} isDirty
     * @return {?}
     */
    AttributeControlService.prototype.convertToFormGroup = /**
     * @param {?} attributes
     * @param {?} instance
     * @param {?=} isDirty
     * @return {?}
     */
    function (attributes, instance, isDirty) {
        var _this = this;
        /** @type {?} */
        var group = {};
        attributes.forEach((/**
         * @param {?} attribute
         * @return {?}
         */
        function (attribute) {
            group[attribute.ATTR_NAME] = _this.convertToFormControl(attribute, instance);
            if (instance[attribute.ATTR_NAME] && isDirty) {
                group[attribute.ATTR_NAME].markAsDirty();
            }
        }));
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"](group);
    };
    /**
     * @return {?}
     */
    AttributeControlService.prototype.switch2EditMode4SpecialCtrls = /**
     * @return {?}
     */
    function () {
        this.specialInputCtrls.forEach((/**
         * @param {?} specialCtrl
         * @return {?}
         */
        function (specialCtrl) { return specialCtrl.enable(); }));
    };
    /**
     * @return {?}
     */
    AttributeControlService.prototype.switch2DisplayMode4SpecialCtrls = /**
     * @return {?}
     */
    function () {
        this.specialInputCtrls.forEach((/**
         * @param {?} specialCtrl
         * @return {?}
         */
        function (specialCtrl) { return specialCtrl.disable(); }));
    };
    AttributeControlService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AttributeControlService.ctorParameters = function () { return [
        { type: EntityService },
        { type: DomainValueValidator }
    ]; };
    /** @nocollapse */ AttributeControlService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AttributeControlService_Factory() { return new AttributeControlService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(EntityService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DomainValueValidator)); }, token: AttributeControlService, providedIn: "root" });
    return AttributeControlService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AttributeComponent = /** @class */ (function () {
    function AttributeComponent() {
    }
    /**
     * @return {?}
     */
    AttributeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fieldCtrl = this.formGroup.get(this.attributeControl.name);
        switch (this.attributeControl.controlType) {
            case 'timestamp':
                if (!this.readonly && !fieldCtrl.value) {
                    /** @type {?} */
                    var currentTimestamp = new Date();
                    fieldCtrl.setValue(currentTimestamp.getFullYear() + '-' + ('0' + (currentTimestamp.getMonth() + 1)).slice(-2) + '-'
                        + ('0' + currentTimestamp.getDate()).slice(-2) + ' ' + ('0' + currentTimestamp.getHours()).slice(-2) +
                        ':' + ('0' + currentTimestamp.getMinutes()).slice(-2) + ':' + ('0' + currentTimestamp.getSeconds()).slice(-2));
                    fieldCtrl.markAsDirty();
                }
                break;
            case 'date':
                if (!this.readonly && !fieldCtrl.value) {
                    /** @type {?} */
                    var currentDate = new Date();
                    fieldCtrl.setValue(currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-'
                        + ('0' + currentDate.getDate()).slice(-2));
                    fieldCtrl.markAsDirty();
                }
                break;
            default:
        }
    };
    Object.defineProperty(AttributeComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.formGroup.controls[this.attributeControl.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttributeComponent.prototype, "errorMessage", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var fieldCtrl = this.formGroup.get(this.attributeControl.name);
            if (fieldCtrl.getError('pattern')) {
                return 'The pattern is not correct';
            }
            else if (fieldCtrl.getError('required')) {
                return 'Required';
            }
            else if (fieldCtrl.getError('message')) {
                return fieldCtrl.getError('message');
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttributeComponent.prototype, "isReadonly", {
        get: /**
         * @return {?}
         */
        function () { return this.readonly || this.attributeControl.autoIncrement; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} attributeName
     * @return {?}
     */
    AttributeComponent.prototype.onKeyup = /**
     * @param {?} attributeName
     * @return {?}
     */
    function (attributeName) {
        /** @type {?} */
        var fieldCtrl = this.formGroup.get(attributeName);
        fieldCtrl.setValue(fieldCtrl.value.toUpperCase());
    };
    /**
     * @param {?} attributeControl
     * @return {?}
     */
    AttributeComponent.prototype.onSearchHelp = /**
     * @param {?} attributeControl
     * @return {?}
     */
    function (attributeControl) {
        this.searchHelpComponent.openSearchHelpModalByEntity(attributeControl.domainEntityId, attributeControl.domainRelationId, this.formGroup, this.readonly, attributeControl.name, attributeControl.domainId);
    };
    AttributeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dk-app-attribute',
                    template: "<div [formGroup]=\"formGroup\">\n  <div [ngSwitch]=\"attributeControl.controlType\">\n    <div class=\"input-group\">\n      <input *ngSwitchCase=\"'text'\" type=\"text\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [maxlength]=\"attributeControl.maxLength\"\n             [pattern]=\"attributeControl.pattern\"\n             [readonly]=\"isReadonly\" >\n      <input *ngSwitchCase=\"'text_capital'\" type=\"text\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [maxlength]=\"attributeControl.maxLength\"\n             (keyup)=\"onKeyup(attributeControl.name)\"\n             [readonly]=\"isReadonly\" >\n      <input *ngSwitchCase=\"'integer'\" type=\"number\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [pattern]=\"attributeControl.pattern\"\n             [readonly]=\"isReadonly\" >\n      <div *ngIf=\"attributeControl.searchHelpId || attributeControl.domainRelationId\" class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" (click)=\"onSearchHelp(attributeControl)\">\n          <span class=\"fas fa-search\"></span>\n        </button>\n      </div>\n    </div>\n    <input *ngSwitchCase=\"'decimal'\" type=\"number\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [step]=\"attributeControl.step\"\n           [placeholder]=\"attributeControl.placeholder\"\n           [pattern]=\"attributeControl.pattern\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'checkbox'\" type=\"checkbox\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\">\n    <input *ngSwitchCase=\"'textarea'\" type=\"textarea\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'file'\" type=\"file\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'date'\" type=\"date\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'timestamp'\" type=\"text\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <select *ngSwitchCase=\"'dropdown'\" class=\"form-control\"\n            [class.form-control-sm] = \"isSmallSize\"\n            [formControlName]=\"attributeControl.name\"\n            [id]=\"attributeControl.key\">\n      <option *ngFor=\"let opt of attributeControl.dropdownList\" [value]=\"opt.key\">{{opt.value}}</option>\n    </select>\n  </div>\n\n  <div class=\"errorMessage\" *ngIf=\"!noErrorMsg && !isValid\">{{errorMessage}}</div>\n</div>\n\n<dk-app-search-help></dk-app-search-help>\n",
                    styles: [".errorMessage{color:red;font-size:.8rem}"]
                }] }
    ];
    /** @nocollapse */
    AttributeComponent.ctorParameters = function () { return []; };
    AttributeComponent.propDecorators = {
        attributeControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isSmallSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        noErrorMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchHelpComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [SearchHelpComponent, { static: false },] }]
    };
    return AttributeComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AttributeFormComponent = /** @class */ (function () {
    function AttributeFormComponent() {
    }
    /**
     * @return {?}
     */
    AttributeFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AttributeFormComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dk-app-attribute-form',
                    template: "<div class=\"form-group row\" [formGroup]=\"formGroup\">\n  <label class=\"col-4 col-form-label text-right\"\n         [class.form-control-sm]=\"isSmallSize\"\n         [attr.for]=\"attributeControl.key\">\n    {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>:\n  </label>\n\n  <dk-app-attribute class=\"col-8\" [attributeControl]=\"attributeControl\" [formGroup]=\"formGroup\"\n                 [isSmallSize]=\"isSmallSize\" [readonly]=\"readonly\">\n  </dk-app-attribute>\n\n</div>\n",
                    styles: [".primaryKey{color:red}"]
                }] }
    ];
    /** @nocollapse */
    AttributeFormComponent.ctorParameters = function () { return []; };
    AttributeFormComponent.propDecorators = {
        attributeControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isSmallSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AttributeFormComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AttributeForm2Component = /** @class */ (function () {
    function AttributeForm2Component() {
    }
    /**
     * @return {?}
     */
    AttributeForm2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(AttributeForm2Component.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () { return this.formGroup.controls[this.attributeControl.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttributeForm2Component.prototype, "errorMessage", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var fieldCtrl = this.formGroup.get(this.attributeControl.name);
            if (fieldCtrl.getError('pattern')) {
                return 'The pattern is not correct';
            }
            else if (fieldCtrl.getError('required')) {
                return 'Required';
            }
            else if (fieldCtrl.getError('message')) {
                return fieldCtrl.getError('message');
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    AttributeForm2Component.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dk-app-attribute-form2',
                    template: "<div class=\"form-group\" [formGroup]=\"formGroup\">\n  <label class=\"col-form-label\"\n         [class.form-control-sm]=\"isSmallSize\"\n         [attr.for]=\"attributeControl.key\">\n    {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>:\n    <span class=\"errorMessage\" *ngIf=\"!isValid\">{{errorMessage}}</span>\n  </label>\n\n  <dk-app-attribute [attributeControl]=\"attributeControl\" [formGroup]=\"formGroup\"\n                    [isSmallSize]=\"isSmallSize\" [readonly]=\"readonly\" [noErrorMsg]=\"true\">\n  </dk-app-attribute>\n\n</div>\n",
                    styles: [".primaryKey{color:red}.errorMessage{color:red;font-size:.8rem}"]
                }] }
    ];
    /** @nocollapse */
    AttributeForm2Component.ctorParameters = function () { return []; };
    AttributeForm2Component.propDecorators = {
        attributeControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isSmallSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AttributeForm2Component;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AttributeTableComponent = /** @class */ (function () {
    function AttributeTableComponent() {
        this.isDetailModalShown = false;
        this.isErrorModalShown = false;
    }
    /**
     * @return {?}
     */
    AttributeTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(AttributeTableComponent.prototype, "displayDetailModal", {
        get: /**
         * @return {?}
         */
        function () { return this.isDetailModalShown ? 'block' : 'none'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttributeTableComponent.prototype, "displayErrorModal", {
        get: /**
         * @return {?}
         */
        function () { return this.isErrorModalShown ? 'block' : 'none'; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    AttributeTableComponent.prototype.openDetailModal = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.currentFormGroup = this.formArray.at(index);
        this.isDetailModalShown = true;
    };
    /**
     * @return {?}
     */
    AttributeTableComponent.prototype.closeDetailModal = /**
     * @return {?}
     */
    function () {
        if (!this.readonly && this.currentFormGroup.dirty) {
            this.currentFormGroup.setValue(this.currentFormGroup.value); // Or the value won't be updated.
        }
        this.isDetailModalShown = false;
    };
    /**
     * @param {?} errorTitle
     * @param {?} errorDescription
     * @return {?}
     */
    AttributeTableComponent.prototype.openErrorModal = /**
     * @param {?} errorTitle
     * @param {?} errorDescription
     * @return {?}
     */
    function (errorTitle, errorDescription) {
        this.errorTitle = errorTitle;
        this.errorDescription = errorDescription;
        this.isErrorModalShown = true;
    };
    /**
     * @return {?}
     */
    AttributeTableComponent.prototype.closeErrorModal = /**
     * @return {?}
     */
    function () {
        this.isErrorModalShown = false;
    };
    /**
     * @param {?=} index
     * @return {?}
     */
    AttributeTableComponent.prototype.deleteRelationInstance = /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = 0; }
        switch (this.entityRelation.CARDINALITY) {
            case '[0..n]':
                this.formArray.removeAt(index);
                this.formArray.markAsDirty();
                if (this.formArray.length === 0) {
                    this.entityRelation.EMPTY = true;
                }
                break;
            case '[1..n]':
                if (this.formArray.length === 1) {
                    this.openErrorModal('Deletion Fail', 'The relation requires at lease one entry!');
                }
                else {
                    this.formArray.removeAt(index);
                    this.formArray.markAsDirty();
                }
        }
    };
    AttributeTableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dk-app-attribute-table',
                    template: "<table class=\"table table-bordered relation-table\"\n       [class.table-sm]=\"isSmallSize\"\n       [formGroup]=\"parentFormGroup\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th scope=\"col\">\n      Action\n    </th>\n    <th scope=\"col\" *ngFor=\"let attributeControl of attributeControls\">\n      {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>\n    </th>\n  </tr>\n  </thead>\n\n  <tbody [formArrayName]=\"entityRelation.RELATION_ID\">\n    <tr *ngFor=\"let formGroup of formArray.controls; let i = index\">\n      <td class=\"actions\">\n        <button class=\"btn\" [class.btn-sm]=\"isSmallSize\" type=\"button\" (click)=\"openDetailModal(i)\" title=\"Detail\">\n          <span *ngIf=\"readonly\" class=\"fas fa-search\"></span>\n          <span *ngIf=\"!readonly\" class=\"fas fa-pen\"></span>\n        </button>\n        <button class=\"btn\" [class.btn-sm]=\"isSmallSize\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRelationInstance(i)\" title=\"Delete\">\n          <span class=\"far fa-trash-alt\"></span>\n        </button>\n      </td>\n      <td *ngFor=\"let attributeControl of attributeControls\">\n        <dk-app-attribute [attributeControl]=\"attributeControl\" [isSmallSize] = \"isSmallSize\"\n                          [formGroup]=\"formGroup\" [readonly]=\"readonly\">\n\n        </dk-app-attribute>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div *ngIf=\"currentFormGroup\" class=\"modal fade dk-modal-open\" [ngClass]=\"{'show': isDetailModalShown}\"\n     [ngStyle]=\"{'display': displayDetailModal}\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"detail\">Line Detail</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeDetailModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <dk-app-attribute-form *ngFor=\"let attributeControl of attributeControls\"\n                               [readonly]=\"readonly\" [isSmallSize]=\"isSmallSize\"\n                            [attributeControl]=\"attributeControl\" [formGroup]=\"currentFormGroup\">\n        </dk-app-attribute-form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.btn-sm]=\"isSmallSize\" (click)=\"closeDetailModal()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" [ngClass]=\"{'show': isErrorModalShown}\"\n     [ngStyle]=\"{'display': displayErrorModal}\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"error\">{{errorTitle}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeErrorModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{errorDescription}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.btn-sm]=\"isSmallSize\" (click)=\"closeErrorModal()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n",
                    styles: [".primaryKey{color:red}.relation-table{display:block;overflow-x:auto;white-space:nowrap;border:none}.actions{width:5rem;min-width:5rem;max-width:6rem}.dk-modal-open{overflow:auto}"]
                }] }
    ];
    /** @nocollapse */
    AttributeTableComponent.ctorParameters = function () { return []; };
    AttributeTableComponent.propDecorators = {
        attributeControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        parentFormGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        entityRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isSmallSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AttributeTableComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JorAngularComponent = /** @class */ (function () {
    function JorAngularComponent() {
    }
    /**
     * @return {?}
     */
    JorAngularComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    JorAngularComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dk-jor-angular',
                    template: "\n    <p>\n      jor-angular works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    JorAngularComponent.ctorParameters = function () { return []; };
    return JorAngularComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JorAngularModule = /** @class */ (function () {
    function JorAngularModule() {
    }
    JorAngularModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        JorAngularComponent,
                        SearchHelpComponent,
                        AttributeComponent,
                        AttributeFormComponent,
                        AttributeTableComponent,
                        AttributeForm2Component
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                    ],
                    exports: [
                        JorAngularComponent,
                        SearchHelpComponent,
                        AttributeComponent,
                        AttributeFormComponent,
                        AttributeForm2Component,
                        AttributeTableComponent
                    ]
                },] }
    ];
    return JorAngularModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=jor-angular.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entity/entity.module": [
		"./src/app/entity/entity.module.ts",
		"common",
		"entity-entity-module"
	],
	"./model/model.module": [
		"./src/app/model/model.module.ts",
		"common",
		"model-model-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var routes = [
    { path: 'entity', loadChildren: './entity/entity.module#EntityModule' },
    { path: 'model', loadChildren: './model/model.module#ModelModule' },
    { path: '', redirectTo: '/entity/list', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
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



var AppComponent = /** @class */ (function () {
    function AppComponent(entityService) {
        this.entityService = entityService;
        this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].originalHost);
    }
    AppComponent.ctorParameters = function () { return [
        { type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom.reuse.strategy */ "./src/app/custom.reuse.strategy.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm5/jor-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                jor_angular__WEBPACK_IMPORTED_MODULE_8__["JorAngularModule"]
            ],
            providers: [
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"], useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_6__["CustomReuseStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
var CustomReuseStrategy = /** @class */ (function () {
    function CustomReuseStrategy() {
        this.routesToCache = ['list'];
        this.storedRouteHandles = new Map();
    }
    /**
     * When navigation from a reusable component, and if shouldReuseRoute return false,
     * this method is invoked to decide whether the current route should be stored.
     * @param route
     */
    CustomReuseStrategy.prototype.shouldDetach = function (route) {
        // console.log('detaching', route);
        return this.routesToCache.indexOf(route.routeConfig.path) > -1;
    };
    /**
     * If the current route need to be stored, that is shouldDetach return true,
     * then on this method, you can implement a way to store routes. Usually in a Map.
     * @param route
     * @param handle
     */
    CustomReuseStrategy.prototype.store = function (route, handle) {
        // console.log('store', route);
        this.storedRouteHandles.set(route.routeConfig.path, handle);
    };
    /**
     * When navigation to a reusable component, and if shouldReuseRoute return false,
     * this method is invoked to decide whether the target component can be get from a reuse buffer.
     * @param route
     */
    CustomReuseStrategy.prototype.shouldAttach = function (route) {
        // console.log('shouldAttach', route);
        return this.storedRouteHandles.has(route.routeConfig.path);
    };
    /**
     * If shouldAttach return true, then this method is invoke to retrieve the component from the buffer.
     * @param route
     */
    CustomReuseStrategy.prototype.retrieve = function (route) {
        return this.storedRouteHandles.get(route.routeConfig.path);
    };
    /**
     * By default, Angular doesn't re-initializing the same component if the navigation is not to
     * a different one. For example, you switch different entity ID in the same entity type detail page.
     * In this way, shouldReuseRoute should return true to avoid executing other methods in this Class.
     * However, if you navigate from search&list component to entity detail component, then the method should return false.
     * So that other methods can be executed to decide whether the search&list component should be stored for future reuse.
     * @param future
     * @param curr
     */
    CustomReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        // console.log('shouldReuseRoute, future:', future, 'current:', curr);
        return future.routeConfig === curr.routeConfig;
    };
    return CustomReuseStrategy;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




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

module.exports = __webpack_require__(/*! /Users/VinceZK/workspace/javascript/json-on-relations/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map