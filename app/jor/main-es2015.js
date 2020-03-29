(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/jor-angular/fesm2015/jor-angular.js":
/*!**************************************************!*\
  !*** ./dist/jor-angular/fesm2015/jor-angular.js ***!
  \**************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm2015/ui-message-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








/**
 * @fileoverview added by tsickle
 * Generated from: lib/entity.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Entity {
}
if (false) {}
class Relationship {
}
if (false) {}
class RelationshipInstance {
}
if (false) {}
class PartnerInstance {
}
if (false) {}
class PartnerRole {
}
if (false) {}
class EntityMeta {
}
if (false) {}
class Attribute {
}
if (false) {}
class Role {
}
if (false) {}
class RoleRelation {
}
if (false) {}
class RelationshipMeta {
}
if (false) {}
class Involve {
}
if (false) {}
class RelationMeta {
}
if (false) {}
class Association {
}
if (false) {}
class FieldsMappingPair {
}
if (false) {}
class EntityRelation {
}
if (false) {}
class Selection {
}
if (false) {}
class Projection {
}
if (false) {}
class QueryObject {
}
if (false) {}
class Sort {
}
if (false) {}
class EntityType {
}
if (false) {}
class Relation {
}
if (false) {}
class RelationshipH {
}
if (false) {}
class RoleH {
}
if (false) {}
class RoleMeta {
}
if (false) {}
class DataElementH {
}
if (false) {}
class DataElementMeta {
}
if (false) {}
class DataDomainH {
}
if (false) {}
class DataDomainMeta {
}
if (false) {}
class DataDomainValue {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ui-mapper.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiMapperService {
    constructor() {
    }
    /**
     * Map a FormGroup to a JOR relation(with cardinality [0..1] and [1..1]) for adding or updating.
     * @param {?} formGroup
     * @param {?} keys
     * @param {?=} isNew
     * @return {?}
     */
    composeChangedRelation(formGroup, keys, isNew = true) {
        if (!formGroup.dirty || !keys || Object.keys(keys).length === 0) {
            return {};
        }
        /** @type {?} */
        const changedRelation = { action: isNew ? 'add' : 'update' };
        Object.keys(keys).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => changedRelation[key] = keys[key] || formGroup.value[key]));
        Object.keys(formGroup.controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const control = formGroup.get(key);
            if (control.dirty) {
                changedRelation[key] = control.value;
            }
        }));
        return changedRelation;
    }
    /**
     * Map a FormArray to JOR relation(with cardinality [0..n] or [1..n]) for adding, updating, or deletion.
     * @param {?} formArray
     * @param {?} originalArray
     * @param {?} keys
     * @return {?}
     */
    composeChangedRelationArray(formArray, originalArray, keys) {
        if (!formArray.dirty || !keys || Object.keys(keys).length === 0) {
            return [];
        }
        if (!originalArray) {
            originalArray = [];
        }
        /** @type {?} */
        const changedRelationArray = [];
        formArray.controls.forEach((/**
         * @param {?} formGroup
         * @return {?}
         */
        formGroup => {
            if (formGroup.dirty) {
                /** @type {?} */
                const changedRelation = {};
                changedRelationArray.push(changedRelation);
                /** @type {?} */
                const index = originalArray.findIndex((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => {
                    /** @type {?} */
                    let found = true;
                    Object.keys(keys).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    key => {
                        if (keys[key]) {
                            return;
                        }
                        found = found && (element[key] === formGroup.value[key]);
                    }));
                    return found;
                }));
                changedRelation['action'] = index === -1 ? 'add' : 'update';
                Object.keys(keys).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => changedRelation[key] = keys[key] || formGroup.value[key]));
                Object.keys(formGroup['controls']).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    /** @type {?} */
                    const control = formGroup.get(key);
                    if (control.dirty) {
                        changedRelation[key] = control.value;
                    }
                }));
            }
        }));
        originalArray.forEach((/**
         * @param {?} originalRelation
         * @return {?}
         */
        originalRelation => {
            /** @type {?} */
            const index = formArray.controls.findIndex((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                /** @type {?} */
                let found = true;
                Object.keys(keys).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    if (keys[key]) {
                        return;
                    }
                    found = found && (element.value[key] === originalRelation[key]);
                }));
                return found;
            }));
            if (index === -1) {
                /** @type {?} */
                const deletedRelation = { action: 'delete' };
                Object.keys(keys).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => deletedRelation[key] = keys[key] || originalRelation[key]));
                changedRelationArray.push(deletedRelation);
            }
        }));
        return changedRelationArray;
    }
    /**
     * Map a FormArray to JOR relationships for adding, updating, or deletion.
     * @param {?} relationshipID
     * @param {?} partnerRoles
     * @param {?} formArray
     * @param {?} originalArray
     * @param {?} nonRelationshipAttributes
     * @return {?}
     */
    composeChangedRelationship(relationshipID, partnerRoles, formArray, originalArray, nonRelationshipAttributes) {
        if (!formArray.dirty) {
            return null;
        }
        /** @type {?} */
        const relationship = {
            RELATIONSHIP_ID: relationshipID,
            values: []
        };
        formArray.controls.forEach((/**
         * @param {?} formGroup
         * @return {?}
         */
        formGroup => {
            if (formGroup.dirty) {
                /** @type {?} */
                const changedRelationshipValue = {};
                relationship.values.push(changedRelationshipValue);
                if (formGroup.value['RELATIONSHIP_INSTANCE_GUID']) {
                    changedRelationshipValue['action'] = 'update';
                    changedRelationshipValue['RELATIONSHIP_INSTANCE_GUID'] = formGroup.value['RELATIONSHIP_INSTANCE_GUID'];
                }
                else {
                    changedRelationshipValue['action'] = 'add';
                    changedRelationshipValue['PARTNER_INSTANCES'] = [];
                    partnerRoles.forEach((/**
                     * @param {?} partnerRole
                     * @return {?}
                     */
                    partnerRole => changedRelationshipValue['PARTNER_INSTANCES'].push({
                        ENTITY_ID: partnerRole.ENTITY_ID,
                        ROLE_ID: partnerRole.ROLE_ID,
                        INSTANCE_GUID: formGroup.value[partnerRole.ROLE_ID + '_INSTANCE_GUID']
                    })));
                }
                Object.keys(formGroup['controls']).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    if (nonRelationshipAttributes.includes(key) || key.substr(-13) === 'INSTANCE_GUID') {
                        return;
                    }
                    /** @type {?} */
                    const control = formGroup.get(key);
                    if (control.dirty) {
                        changedRelationshipValue[key] = control.value;
                    }
                }));
            }
        }));
        originalArray.forEach((/**
         * @param {?} original
         * @return {?}
         */
        original => {
            if (formArray.controls.findIndex((/**
             * @param {?} formGroup
             * @return {?}
             */
            formGroup => formGroup.value['RELATIONSHIP_INSTANCE_GUID'] === original['RELATIONSHIP_INSTANCE_GUID'])) === -1) {
                relationship.values.push({ action: 'delete', RELATIONSHIP_INSTANCE_GUID: original['RELATIONSHIP_INSTANCE_GUID'] });
            }
        }));
        return relationship.values.length === 0 ? null : relationship;
    }
}
UiMapperService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UiMapperService.ctorParameters = () => [];
/** @nocollapse */ UiMapperService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function UiMapperService_Factory() { return new UiMapperService(); }, token: UiMapperService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/entity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class EntityService {
    /**
     * @param {?} http
     * @param {?} messageService
     */
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.originalHost = '';
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
    setOriginalHost(host) {
        this.originalHost = host;
    }
    /**
     * @param {?} msgStore
     * @param {?} language
     * @return {?}
     */
    setMessageStore(msgStore, language) {
        this.messageService.setMessageStore(msgStore, language);
    }
    /**
     * List all entity IDs in the system
     * @return {?}
     */
    listEntityID() {
        return this.http.get(this.originalHost + `/api/entity/EntityIDs`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityID')));
    }
    /**
     * List entity IDs by a given role ID
     * @param {?} roleID
     * @return {?}
     */
    listEntityIDbyRole(roleID) {
        return this.http.get(this.originalHost + `/api/entity/EntityIDs/${roleID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityIDbyRole')));
    }
    /**
     * Return the entity meta for a given entity ID
     * @param {?} entityID
     * @return {?}
     */
    getEntityMeta(entityID) {
        return this.http.get(this.originalHost + `/api/entity/meta/${entityID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityMeta')));
    }
    /**
     * Return a list of entity objects according to the description of a given query object
     * @param {?} queryObject
     * @return {?}
     */
    searchEntities(queryObject) {
        return this.http.post(this.originalHost + `/api/query`, queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchEntities')));
    }
    /**
     * Return an entity instance for a given entity instance GUID
     * @param {?} instanceGUID
     * @return {?}
     */
    getEntityInstance(instanceGUID) {
        return this.http.get(this.originalHost + `/api/entity/instance/${instanceGUID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityInstance')));
    }
    /**
     * Return a relation's meta data for a given relation ID
     * @param {?} relationID
     * @return {?}
     */
    getRelationMeta(relationID) {
        return this.http.get(this.originalHost + `/api/relation/meta/${relationID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationMeta')));
    }
    /**
     * Return all relations' meta data for a given entity ID
     * @param {?} entityID
     * @return {?}
     */
    getRelationMetaOfEntity(entityID) {
        return this.http.get(this.originalHost + `/api/relation/meta/entity/${entityID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationMetaOfEntity')));
    }
    /**
     * Create a new entity instance
     * @param {?} instance
     * @return {?}
     */
    createEntityInstance(instance) {
        return this.http.post(this.originalHost + `/api/entity`, instance, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('createEntityInstance')));
    }
    /**
     * Change an existing entity instance
     * @param {?} instance
     * @return {?}
     */
    changeEntityInstance(instance) {
        return this.http.put(this.originalHost + `/api/entity`, instance, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('changeEntityInstance')));
    }
    /**
     * Delete an entity instance from a given instance GUID
     * @param {?} instanceGUID
     * @return {?}
     */
    deleteEntityInstance(instanceGUID) {
        return this.http.delete(this.originalHost + `/api/entity/instance/${instanceGUID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteEntityInstance')));
    }
    /**
     * Return entity types(IDs) for a given search term
     * @param {?} term
     * @return {?}
     */
    listEntityType(term) {
        return this.http.get(this.originalHost + `/api/model/entity-types?term=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityType')));
    }
    /**
     * Return the description of a given entity type(ID)
     * @param {?} entityID
     * @return {?}
     */
    getEntityTypeDesc(entityID) {
        return this.http.get(this.originalHost + `/api/model/entity-types/${entityID}/desc`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityTypeDesc')));
    }
    /**
     * Save an entity type after changing or creation
     * @param {?} entityType
     * @return {?}
     */
    saveEntityType(entityType) {
        return this.http.post(this.originalHost + `/api/model/entity-types`, entityType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveEntityType')));
    }
    /**
     * Return a list of relations in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    listRelation(term) {
        return this.http.get(this.originalHost + `/api/model/relations?term=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRelation')));
    }
    /**
     * Return the description of a given relation ID
     * @param {?} relationID
     * @return {?}
     */
    getRelationDesc(relationID) {
        return this.http.get(this.originalHost + `/api/model/relations/${relationID}/desc`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationDesc')));
    }
    /**
     * Save a relation after changing or creation
     * @param {?} relation
     * @return {?}
     */
    saveRelation(relation) {
        return this.http.post(this.originalHost + `/api/model/relations`, relation, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRelation')));
    }
    /**
     * Return a list of relationships in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    listRelationship(term) {
        return this.http.get(this.originalHost + `/api/model/relationships?term=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRelationship')));
    }
    /**
     * Return a relationship definition from a given relationship ID
     * @param {?} relationshipID
     * @return {?}
     */
    getRelationship(relationshipID) {
        return this.http.get(this.originalHost + `/api/model/relationships/${relationshipID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationship')));
    }
    /**
     * Return the description of a given relationship ID
     * @param {?} relationshipID
     * @return {?}
     */
    getRelationshipDesc(relationshipID) {
        return this.http.get(this.originalHost + `/api/model/relationships/${relationshipID}/desc`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationshipDesc')));
    }
    /**
     * Save a relationship after changing or creation
     * @param {?} relationship
     * @return {?}
     */
    saveRelationship(relationship) {
        return this.http.post(this.originalHost + `/api/model/relationships`, relationship, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRelationship')));
    }
    /**
     * Return a list of roles in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    listRole(term) {
        return this.http.get(this.originalHost + `/api/model/roles?term=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRole')));
    }
    /**
     * Return a role definition from a given role ID
     * @param {?} roleID
     * @return {?}
     */
    getRole(roleID) {
        return this.http.get(this.originalHost + `/api/model/roles/${roleID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRole')));
    }
    /**
     * Return the description of a given role ID
     * @param {?} roleID
     * @return {?}
     */
    getRoleDesc(roleID) {
        return this.http.get(this.originalHost + `/api/model/roles/${roleID}/desc`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDesc')));
    }
    /**
     * Save a role after changing or creation
     * @param {?} role
     * @return {?}
     */
    saveRole(role) {
        return this.http.post(this.originalHost + `/api/model/roles`, role, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRole')));
    }
    /**
     * Return a list of data elements in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    listDataElement(term) {
        return this.http.get(this.originalHost + `/api/model/data-elements?term=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listDataElement')));
    }
    /**
     * Return a data element definition from a given element ID
     * @param {?} elementID
     * @return {?}
     */
    getDataElement(elementID) {
        return this.http.get(this.originalHost + `/api/model/data-elements/${elementID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataElement')));
    }
    /**
     * Return the description of a given data element ID
     * @param {?} elementID
     * @return {?}
     */
    getDataElementDesc(elementID) {
        return this.http.get(this.originalHost + `/api/model/data-elements/${elementID}/desc`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataElementDesc')));
    }
    /**
     * Save a data element after changing or creation
     * @param {?} element
     * @return {?}
     */
    saveDataElement(element) {
        return this.http.post(this.originalHost + `/api/model/data-elements`, element, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveDataElement')));
    }
    /**
     * Return a list of data domains in the system according to the search term
     * @param {?} term
     * @return {?}
     */
    listDataDomain(term) {
        return this.http.get(this.originalHost + `/api/model/data-domains?term=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listDataDomain')));
    }
    /**
     * Return a data domain definition from a given domain ID
     * @param {?} domainID
     * @return {?}
     */
    getDataDomain(domainID) {
        return this.http.get(this.originalHost + `/api/model/data-domains/${domainID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataDomain')));
    }
    /**
     * Return the description of a given data domain ID
     * @param {?} domainID
     * @return {?}
     */
    getDataDomainDesc(domainID) {
        return this.http.get(this.originalHost + `/api/model/data-domains/${domainID}/desc`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataDomainDesc')));
    }
    /**
     * Save a data domain after changing or creation
     * @param {?} domain
     * @return {?}
     */
    saveDataDomain(domain) {
        return this.http.post(this.originalHost + `/api/model/data-domains`, domain, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveDataDomain')));
    }
    /**
     * Get data element meta
     * @param {?} elementID
     * @return {?}
     */
    getElementMeta(elementID) {
        return this.http.get(this.originalHost + `/api/model/element-meta/${elementID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getElementMeta')));
    }
    /**
     * Return a fake relationship ID before saving
     * @return {?}
     */
    generateFakeRelationshipUUID() {
        /** @type {?} */
        const nextPosition = this.fakeUUIDs.length + 1;
        /** @type {?} */
        const fakeUUID = 'NewRelationship_' + nextPosition;
        this.fakeUUIDs.push(fakeUUID);
        return fakeUUID;
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
            if (error.status === 401) {
                this.messageService.addMessage('EXCEPTION', 'SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["messageType"].Exception);
            }
            else {
                this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["messageType"].Exception, operation, error.message);
            }
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])((/** @type {?} */ (result)));
        });
    }
}
EntityService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EntityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
/** @nocollapse */ EntityService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function EntityService_Factory() { return new EntityService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); }, token: EntityService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/search-help/search-help.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchHelp {
}
if (false) {}
class SearchHelpField {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/search-help/search-help.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchHelpComponent {
    /**
     * @param {?} fb
     * @param {?} entityService
     */
    constructor(fb, entityService) {
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
    /**
     * @return {?}
     */
    get displaySearchHelpModal() { return this.isSearchHelpModalShown ? 'block' : 'none'; }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filterFieldsFormGroup = this.fb.group({});
    }
    /**
     * @param {?} searchHelpMeta
     * @param {?} exportControl
     * @param {?=} afterExportFn
     * @return {?}
     */
    openSearchHelpModal(searchHelpMeta, exportControl, afterExportFn) {
        this.searchHelpMeta = searchHelpMeta;
        this.exportControl = exportControl;
        this.afterExportFn = afterExportFn;
        this.filterFieldsFormGroup = this.fb.group({});
        this.filterFields = this.searchHelpMeta.FIELDS.filter((/**
         * @param {?} fieldMeta
         * @return {?}
         */
        fieldMeta => fieldMeta.FILTER_POSITION));
        this.filterFields.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.FILTER_POSITION - b.FILTER_POSITION));
        this.filterFields.forEach((/**
         * @param {?} fieldMeta
         * @return {?}
         */
        fieldMeta => {
            if (fieldMeta.IMPORT) {
                /** @type {?} */
                const ieFieldName = fieldMeta.IE_FIELD_NAME || fieldMeta.FIELD_NAME;
                if (exportControl.get(ieFieldName)) {
                    fieldMeta.DEFAULT_VALUE = exportControl.get(ieFieldName).value;
                }
            }
            this.filterFieldsFormGroup.addControl(fieldMeta.FIELD_NAME, this.fb.control(fieldMeta.DEFAULT_VALUE));
        }));
        this.listFields = this.searchHelpMeta.FIELDS.filter((/**
         * @param {?} fieldMeta
         * @return {?}
         */
        fieldMeta => fieldMeta.LIST_POSITION));
        this.listFields.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.LIST_POSITION - b.LIST_POSITION));
        if (this.searchHelpMeta.BEHAVIOUR === 'A') {
            this.search();
            this.isFilterShown = false;
        }
        else {
            this.isFilterShown = true;
        }
        this.isSearchHelpModalShown = true;
    }
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
    openSearchHelpModalByEntity(entityID, relationID, exportControl, readonly, exportField, domainID, afterExportFn) {
        /** @type {?} */
        const searchHelpMeta = new SearchHelp();
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
            (searchTerm) => entityService.searchEntities(searchTerm));
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
        data => {
            /** @type {?} */
            const relationMeta = (/** @type {?} */ (data));
            relationMeta.ATTRIBUTES.forEach((/**
             * @param {?} attribute
             * @return {?}
             */
            attribute => searchHelpMeta.FIELDS.push({
                FIELD_NAME: attribute.ATTR_NAME,
                FIELD_DESC: attribute.LIST_HEADER_TEXT,
                IE_FIELD_NAME: attribute.DOMAIN_ID === domainID ? exportField : null,
                IMPORT: attribute.PRIMARY_KEY || attribute.DOMAIN_ID === domainID,
                EXPORT: attribute.PRIMARY_KEY || attribute.DOMAIN_ID === domainID,
                LIST_POSITION: attribute.ORDER,
                FILTER_POSITION: attribute.ORDER
            })));
            searchHelpMeta.FIELDS.push({
                FIELD_NAME: 'INSTANCE_GUID',
                FIELD_DESC: 'Instance GUID',
                IMPORT: false,
                EXPORT: true,
                LIST_POSITION: 999,
                FILTER_POSITION: 0
            });
            this.openSearchHelpModal(searchHelpMeta, exportControl, afterExportFn);
        }));
    }
    /**
     * @return {?}
     */
    search() {
        /** @type {?} */
        let searchTerm;
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
            fieldMeta => {
                /** @type {?} */
                const fieldValue = this.filterFieldsFormGroup.get(fieldMeta.FIELD_NAME).value;
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
            const searchHelpMethod = (/** @type {?} */ (this.searchHelpMeta.METHOD));
            searchHelpMethod(searchTerm).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => this._generateSearchList(data)));
        }
        else if (Array.isArray(this.searchHelpMeta.METHOD)) {
            this._generateSearchList(this.searchHelpMeta.METHOD);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    _generateSearchList(data) {
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const listItem = { SELECTED: '' };
            this.listFields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => listItem[field.FIELD_NAME] = item[field.FIELD_NAME]));
            this.listData.push(listItem);
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    enterSearch($event) {
        if ($event.keyCode === 13) {
            this.search();
        }
    }
    /**
     * @return {?}
     */
    showFilter() {
        this.isFilterShown = true;
    }
    /**
     * @return {?}
     */
    hideFilter() {
        this.isFilterShown = false;
    }
    /**
     * @return {?}
     */
    selectAll() {
        this.isSelectAllChecked = !this.isSelectAllChecked;
        this.listData.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => data.SELECTED = !data.SELECTED));
    }
    /**
     * @return {?}
     */
    confirmSelection() {
        // TODO: Currently, only single selection is supported. Multiple selection in later time
        if (this.searchHelpMeta.READ_ONLY) {
            return;
        }
        this.listFields.forEach((/**
         * @param {?} listField
         * @return {?}
         */
        listField => {
            if (this.exportControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]) {
                /** @type {?} */
                const exportControl = (/** @type {?} */ (this.exportControl));
                /** @type {?} */
                const ieFieldName = listField.IE_FIELD_NAME || listField.FIELD_NAME;
                /** @type {?} */
                const exportFieldControl = exportControl.get(ieFieldName);
                if (listField.EXPORT && exportFieldControl) {
                    exportFieldControl.setValue(this.listData[this.selectedIndex][listField.FIELD_NAME]);
                    exportFieldControl.markAsDirty();
                }
            }
            else {
                if (listField.EXPORT) {
                    this.exportControl[listField.FIELD_NAME] = this.listData[this.selectedIndex][listField.FIELD_NAME];
                }
            }
        }));
        if (this.afterExportFn) {
            this.afterExportFn();
        }
        this.listData = [];
        this.isSearchHelpModalShown = false;
    }
    /**
     * @return {?}
     */
    closeSearchHelpModal() {
        this.isSearchHelpModalShown = false;
    }
}
SearchHelpComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'dk-app-search-help',
                template: "<div class=\"modal fade\" id=\"searchHelp\" tabindex=\"-1\" role=\"dialog\"\n     [ngClass]=\"{'show': isSearchHelpModalShown}\" [ngStyle]=\"{'display': displaySearchHelpModal}\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n    <div class=\"modal-content dk-search-help-content\">\n      <div class=\"modal-header dk-search-help-header\">\n        <h6 class=\"modal-title\" id=\"addRelationship\">{{searchHelpMeta?.OBJECT_NAME}} ({{listData.length}})</h6>\n        <button type=\"button\" class=\"close\" (click)=\"closeSearchHelpModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <div *ngIf=\"isFilterShown\" class=\"card mb-2\">\n          <div *ngIf=\"searchHelpMeta && searchHelpMeta.FUZZY_SEARCH\" class=\"mt-2 mx-2 row\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"fuzzySearchTerm\" (keyup)=\"enterSearch($event)\">\n          </div>\n          <div class=\"mt-2 mx-2 row\" [formGroup]=\"filterFieldsFormGroup\">\n            <div *ngFor=\"let filterField of filterFields\" class=\"col-6 form-group row\">\n              <label for=\"{{filterField.FIELD_NAME}}\" class=\"col-6 col-form-label col-form-label-sm text-right\">\n                {{filterField.FIELD_DESC}}:</label>\n              <input id=\"{{filterField.FIELD_NAME}}\" name=\"{{filterField.FIELD_NAME}}\" formControlName=\"{{filterField.FIELD_NAME}}\"\n                     type=\"text\" class=\"col-6 form-control form-control-sm\" [readonly]=\"filterField.FILTER_DISP_ONLY\" (keyup)=\"enterSearch($event)\">\n            </div>\n          </div>\n\n          <div class=\"mb-2\">\n            <button type=\"button\" id=\"search\" class=\"btn btn-sm btn-primary float-right mr-2\" (click)=\"search()\">\n              Search\n            </button>\n          </div>\n        </div>\n\n        <button *ngIf=\"!isFilterShown\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"showFilter()\">Show Filter</button>\n        <button *ngIf=\"isFilterShown\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"hideFilter()\">Hide Filter</button>\n\n        <table class=\"table table-bordered table-sm table-hover dk-search-table\">\n          <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">\n              <input *ngIf=\"searchHelpMeta?.MULTI\" type=\"checkbox\" [(ngModel)]=\"isSelectAllChecked\" (click)=\"selectAll()\">\n            </th>\n            <th *ngFor=\"let listField of listFields\">{{listField.FIELD_DESC}}</th>\n          </tr>\n          </thead>\n\n          <tbody>\n          <tr *ngFor=\"let item of listData; let i = index\">\n            <td>\n              <input *ngIf=\"!searchHelpMeta.MULTI\" type=\"radio\" name=\"selectedIndex\" [value]=\"i\" [(ngModel)]=\"selectedIndex\" (dblclick)=\"confirmSelection()\">\n              <input *ngIf=\"searchHelpMeta.MULTI\" type=\"checkbox\" [(ngModel)]=\"item.SELECTED\">\n            </td>\n            <td *ngFor=\"let listField of listFields\">{{item[listField.FIELD_NAME]}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"modal-footer dk-search-help-footer\">\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"closeSearchHelpModal()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"confirmSelection()\" [disabled]=\"searchHelpMeta?.READ_ONLY\">Confirm</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".dk-search-help-header{padding:.3rem .5rem;background-color:#e9ecef}.dk-search-help-footer{padding:.5rem}.dk-search-table{display:block;overflow:scroll;max-height:40rem;white-space:nowrap;border:none}.dk-search-help-content{border:1px solid rgba(0,0,0,.4);box-shadow:8px 5px 5px rgba(0,0,0,.2)}"]
            }] }
];
/** @nocollapse */
SearchHelpComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: EntityService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/attribute/attribute-base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributeBase {
    constructor() {
        this.dropdownList = [];
    }
}
if (false) {}
class DropdownList {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/attribute/attribute-validators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// noinspection JSAnnotator
class DomainValueValidator {
    /**
     * @param {?} entityService
     */
    constructor(entityService) {
        this.entityService = entityService;
    }
    /**
     * @param {?} ctrl
     * @return {?}
     */
    validate(ctrl) {
        /** @type {?} */
        const queryObject = new QueryObject();
        // queryObject.ENTITY_ID = entityID;
        // queryObject.RELATION_ID = relationID;
        // queryObject.FILTER = [{FIELD_NAME: searchField, OPERATOR: 'EQ', LOW: ctrl.value}];
        return this.entityService.searchEntities(queryObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} data
         * @return {?}
         */
        data => {
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
        () => null)));
    }
}
DomainValueValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DomainValueValidator.ctorParameters = () => [
    { type: EntityService }
];
/** @nocollapse */ DomainValueValidator.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DomainValueValidator_Factory() { return new DomainValueValidator(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(EntityService)); }, token: DomainValueValidator, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/attribute/attribute-control.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributeControlService {
    /**
     * @param {?} entityService
     * @param {?} domainValueValidator
     */
    constructor(entityService, domainValueValidator) {
        this.entityService = entityService;
        this.domainValueValidator = domainValueValidator;
    }
    /**
     * @param {?} attributes
     * @return {?}
     */
    toAttributeControl(attributes) {
        /** @type {?} */
        const attributeControls = [];
        if (!attributes) {
            return attributeControls;
        }
        attributes.forEach((/**
         * @param {?} attribute
         * @return {?}
         */
        attribute => attributeControls.push(this.toSingleAttributeControl(attribute))));
        return attributeControls;
    }
    /**
     * @param {?} attribute
     * @return {?}
     */
    toSingleAttributeControl(attribute) {
        /** @type {?} */
        const attributeControl = new AttributeBase();
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
                        this._generateDropdownList(attribute.DOMAIN_ID, attributeControl);
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
                    this._generateDropdownList(attribute.DOMAIN_ID, attributeControl);
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
                this._setDecimalPattern(attributeControl, attribute);
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
        return attributeControl;
    }
    /**
     * @param {?} domainID
     * @param {?} attributeControl
     * @return {?}
     */
    _generateDropdownList(domainID, attributeControl) {
        this.entityService.getDataDomain(domainID)
            .subscribe((/**
         * @param {?} dataDomain
         * @return {?}
         */
        dataDomain => dataDomain['DOMAIN_VALUES'].forEach((/**
         * @param {?} domainValue
         * @return {?}
         */
        domainValue => {
            attributeControl.dropdownList.push({
                key: domainValue['LOW_VALUE'],
                value: domainValue['LOW_VALUE_TEXT'] || domainValue['LOW_VALUE']
            });
        }))));
    }
    /**
     * @param {?} attributeControl
     * @param {?} attribute
     * @return {?}
     */
    _setDecimalPattern(attributeControl, attribute) {
        /** @type {?} */
        const zeroPadding = '0000000000000000000000000000000000000';
        attributeControl.step = '0.' + zeroPadding.substr(0, attribute.DECIMAL - 1) + '1';
        attributeControl.placeholder = '0.' + zeroPadding.substr(0, attribute.DECIMAL - 1) + '0';
        /** @type {?} */
        const integerPlace = attribute.DATA_LENGTH - attribute.DECIMAL;
        attributeControl.pattern = attribute.UNSIGNED ? '^(' : '^(\\-?';
        attributeControl.pattern += integerPlace ? '\\d{1,' + integerPlace.toString() + '})' : '0)';
        attributeControl.pattern += '(\\.\\d{1,' + attribute.DECIMAL + '})?$';
        attributeControl.maxLength = attribute.DATA_LENGTH;
    }
    /**
     * @param {?} attribute
     * @param {?} instance
     * @return {?}
     */
    convertToFormControl(attribute, instance) {
        /** @type {?} */
        const formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](instance[attribute.ATTR_NAME] || '');
        if (attribute.PRIMARY_KEY && !attribute.AUTO_INCREMENT) {
            formControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        }
        // if (attribute.DOMAIN_TYPE === 2 && !attribute.PRIMARY_KEY) {
        //   formControl.setAsyncValidators(this.domainValueValidator.validate.bind(this.domainValueValidator));
        // }
        return formControl;
    }
    /**
     * @param {?} attributes
     * @param {?} instance
     * @param {?=} isDirty
     * @return {?}
     */
    convertToFormGroup(attributes, instance, isDirty) {
        /** @type {?} */
        const group = {};
        attributes.forEach((/**
         * @param {?} attribute
         * @return {?}
         */
        attribute => {
            group[attribute.ATTR_NAME] = this.convertToFormControl(attribute, instance);
            if (instance[attribute.ATTR_NAME] && isDirty) {
                group[attribute.ATTR_NAME].markAsDirty();
            }
        }));
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"](group);
    }
}
AttributeControlService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AttributeControlService.ctorParameters = () => [
    { type: EntityService },
    { type: DomainValueValidator }
];
/** @nocollapse */ AttributeControlService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AttributeControlService_Factory() { return new AttributeControlService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(EntityService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DomainValueValidator)); }, token: AttributeControlService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/attribute/attribute.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributeComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const fieldCtrl = this.formGroup.get(this.attributeControl.name);
        switch (this.attributeControl.controlType) {
            case 'timestamp':
                if (!this.readonly && !fieldCtrl.value) {
                    /** @type {?} */
                    const currentTimestamp = new Date();
                    fieldCtrl.setValue(currentTimestamp.getFullYear() + '-' + ('0' + (currentTimestamp.getMonth() + 1)).slice(-2) + '-'
                        + ('0' + currentTimestamp.getDate()).slice(-2) + ' ' + ('0' + currentTimestamp.getHours()).slice(-2) +
                        ':' + ('0' + currentTimestamp.getMinutes()).slice(-2) + ':' + ('0' + currentTimestamp.getSeconds()).slice(-2));
                    fieldCtrl.markAsDirty();
                }
                break;
            case 'date':
                if (!this.readonly && !fieldCtrl.value) {
                    /** @type {?} */
                    const currentDate = new Date();
                    fieldCtrl.setValue(currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-'
                        + ('0' + currentDate.getDate()).slice(-2));
                    fieldCtrl.markAsDirty();
                }
                break;
            default:
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.attributeControl.controlType === 'dropdown' ||
            this.attributeControl.controlType === 'checkbox') {
            this.readonly ? this.formGroup.get(this.attributeControl.name).disable() :
                this.formGroup.get(this.attributeControl.name).enable();
        }
    }
    /**
     * @return {?}
     */
    get invalid() { return this.formGroup.controls[this.attributeControl.name].invalid; }
    /**
     * @return {?}
     */
    get errorMessage() {
        /** @type {?} */
        const fieldCtrl = this.formGroup.get(this.attributeControl.name);
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
    }
    /**
     * @return {?}
     */
    get isReadonly() { return this.readonly || this.attributeControl.autoIncrement; }
    /**
     * @param {?} attributeName
     * @return {?}
     */
    onKeyup(attributeName) {
        /** @type {?} */
        const fieldCtrl = this.formGroup.get(attributeName);
        fieldCtrl.setValue(fieldCtrl.value.toUpperCase());
    }
    /**
     * @param {?} attributeControl
     * @return {?}
     */
    onSearchHelp(attributeControl) {
        this.searchHelpComponent.openSearchHelpModalByEntity(attributeControl.domainEntityId, attributeControl.domainRelationId, this.formGroup, this.readonly, attributeControl.name, attributeControl.domainId);
    }
}
AttributeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'dk-app-attribute',
                template: "<div [formGroup]=\"formGroup\">\n  <div [ngSwitch]=\"attributeControl.controlType\">\n    <div class=\"input-group\">\n      <input *ngSwitchCase=\"'text'\" type=\"text\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [maxlength]=\"attributeControl.maxLength\"\n             [pattern]=\"attributeControl.pattern\"\n             [readonly]=\"isReadonly\" >\n      <input *ngSwitchCase=\"'text_capital'\" type=\"text\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [maxlength]=\"attributeControl.maxLength\"\n             (keyup)=\"onKeyup(attributeControl.name)\"\n             [readonly]=\"isReadonly\" >\n      <input *ngSwitchCase=\"'integer'\" type=\"number\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [pattern]=\"attributeControl.pattern\"\n             [readonly]=\"isReadonly\" >\n      <div *ngIf=\"attributeControl.searchHelpId || attributeControl.domainRelationId\" class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" (click)=\"onSearchHelp(attributeControl)\">\n          <span class=\"fas fa-search\"></span>\n        </button>\n      </div>\n    </div>\n    <input *ngSwitchCase=\"'decimal'\" type=\"number\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [step]=\"attributeControl.step\"\n           [placeholder]=\"attributeControl.placeholder\"\n           [pattern]=\"attributeControl.pattern\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'checkbox'\" type=\"checkbox\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\">\n    <input *ngSwitchCase=\"'textarea'\" type=\"textarea\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'file'\" type=\"file\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'date'\" type=\"date\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'timestamp'\" type=\"text\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <select *ngSwitchCase=\"'dropdown'\" class=\"form-control\"\n            [class.form-control-sm] = \"isSmallSize\"\n            [formControlName]=\"attributeControl.name\"\n            [id]=\"attributeControl.key\">\n      <option *ngFor=\"let opt of attributeControl.dropdownList\" [value]=\"opt.key\">{{opt.value}}</option>\n    </select>\n  </div>\n\n  <div *ngIf=\"!noErrorMsg\" [class.ng-invalid]=\"invalid\" class=\"dk-invalid-feedback\">\n    {{errorMessage}}\n  </div>\n</div>\n\n<dk-app-search-help></dk-app-search-help>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AttributeComponent.ctorParameters = () => [];
AttributeComponent.propDecorators = {
    attributeControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSmallSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    noErrorMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    searchHelpComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [SearchHelpComponent, { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/attribute/attribute-form/attribute-form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributeFormComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AttributeFormComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'dk-app-attribute-form',
                template: "<div class=\"form-group row\" [formGroup]=\"formGroup\">\n  <label class=\"col-4 col-form-label text-right\"\n         [class.form-control-sm]=\"isSmallSize\"\n         [attr.for]=\"attributeControl.key\">\n    {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>:\n  </label>\n\n  <dk-app-attribute class=\"col-8\" [attributeControl]=\"attributeControl\" [formGroup]=\"formGroup\"\n                 [isSmallSize]=\"isSmallSize\" [readonly]=\"readonly\">\n  </dk-app-attribute>\n\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AttributeFormComponent.ctorParameters = () => [];
AttributeFormComponent.propDecorators = {
    attributeControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSmallSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/attribute/attribute-form2/attribute-form2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributeForm2Component {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get invalid() { return this.formGroup.controls[this.attributeControl.name].invalid; }
    /**
     * @return {?}
     */
    get errorMessage() {
        /** @type {?} */
        const fieldCtrl = this.formGroup.get(this.attributeControl.name);
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
    }
}
AttributeForm2Component.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'dk-app-attribute-form2',
                template: "<div class=\"form-group\" [formGroup]=\"formGroup\">\n  <label class=\"col-form-label\"\n         [class.form-control-sm]=\"isSmallSize\"\n         [attr.for]=\"attributeControl.key\">\n    {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>:\n    <span [class.ng-invalid]=\"invalid\" class=\"dk-invalid-feedback\">{{errorMessage}}</span>\n  </label>\n\n  <dk-app-attribute [attributeControl]=\"attributeControl\" [formGroup]=\"formGroup\"\n                    [isSmallSize]=\"isSmallSize\" [readonly]=\"readonly\" [noErrorMsg]=\"true\">\n  </dk-app-attribute>\n\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AttributeForm2Component.ctorParameters = () => [];
AttributeForm2Component.propDecorators = {
    attributeControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSmallSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/attribute/attribute-table/attribute-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AttributeTableComponent {
    constructor() {
        this.isDetailModalShown = false;
        this.isErrorModalShown = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get displayDetailModal() { return this.isDetailModalShown ? 'block' : 'none'; }
    /**
     * @return {?}
     */
    get displayErrorModal() { return this.isErrorModalShown ? 'block' : 'none'; }
    /**
     * @param {?} index
     * @return {?}
     */
    openDetailModal(index) {
        this.currentFormGroup = this.formArray.at(index);
        this.isDetailModalShown = true;
    }
    /**
     * @return {?}
     */
    closeDetailModal() {
        if (!this.readonly && this.currentFormGroup.dirty) {
            this.currentFormGroup.setValue(this.currentFormGroup.value); // Or the value won't be updated.
        }
        this.isDetailModalShown = false;
    }
    /**
     * @param {?} errorTitle
     * @param {?} errorDescription
     * @return {?}
     */
    openErrorModal(errorTitle, errorDescription) {
        this.errorTitle = errorTitle;
        this.errorDescription = errorDescription;
        this.isErrorModalShown = true;
    }
    /**
     * @return {?}
     */
    closeErrorModal() {
        this.isErrorModalShown = false;
    }
    /**
     * @param {?=} index
     * @return {?}
     */
    deleteRelationInstance(index = 0) {
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
    }
}
AttributeTableComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'dk-app-attribute-table',
                template: "<table class=\"table table-bordered relation-table\"\n       [class.table-sm]=\"isSmallSize\"\n       [formGroup]=\"parentFormGroup\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th scope=\"col\">\n      Action\n    </th>\n    <th scope=\"col\" *ngFor=\"let attributeControl of attributeControls\">\n      {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>\n    </th>\n  </tr>\n  </thead>\n\n  <tbody [formArrayName]=\"entityRelation.RELATION_ID\">\n    <tr *ngFor=\"let formGroup of formArray.controls; let i = index\">\n      <td class=\"actions\">\n        <button class=\"btn\" [class.btn-sm]=\"isSmallSize\" type=\"button\" (click)=\"openDetailModal(i)\" title=\"Detail\">\n          <span *ngIf=\"readonly\" class=\"fas fa-search\"></span>\n          <span *ngIf=\"!readonly\" class=\"fas fa-pen\"></span>\n        </button>\n        <button class=\"btn\" [class.btn-sm]=\"isSmallSize\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRelationInstance(i)\" title=\"Delete\">\n          <span class=\"far fa-trash-alt\"></span>\n        </button>\n      </td>\n      <td *ngFor=\"let attributeControl of attributeControls\">\n        <dk-app-attribute [attributeControl]=\"attributeControl\" [isSmallSize] = \"isSmallSize\"\n                          [formGroup]=\"formGroup\" [readonly]=\"readonly\">\n\n        </dk-app-attribute>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div *ngIf=\"currentFormGroup\" class=\"modal fade dk-modal-open\" [ngClass]=\"{'show': isDetailModalShown}\"\n     [ngStyle]=\"{'display': displayDetailModal}\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"detail\">Line Detail</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeDetailModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <dk-app-attribute-form *ngFor=\"let attributeControl of attributeControls\"\n                               [readonly]=\"readonly\" [isSmallSize]=\"isSmallSize\"\n                            [attributeControl]=\"attributeControl\" [formGroup]=\"currentFormGroup\">\n        </dk-app-attribute-form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.btn-sm]=\"isSmallSize\" (click)=\"closeDetailModal()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" [ngClass]=\"{'show': isErrorModalShown}\"\n     [ngStyle]=\"{'display': displayErrorModal}\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"error\">{{errorTitle}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeErrorModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{errorDescription}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.btn-sm]=\"isSmallSize\" (click)=\"closeErrorModal()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n",
                styles: [".relation-table{display:block;overflow-x:auto;white-space:nowrap;border:none}.actions{width:5rem;min-width:5rem;max-width:6rem}.dk-modal-open{overflow:auto}"]
            }] }
];
/** @nocollapse */
AttributeTableComponent.ctorParameters = () => [];
AttributeTableComponent.propDecorators = {
    attributeControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    formArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    parentFormGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    entityRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSmallSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/jor-angular.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JorAngularComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
JorAngularComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'dk-jor-angular',
                template: "<!-- html content -->\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: ["input.ng-invalid,select.ng-invalid{border-color:#dc3545}.ng-invalid+.invalid-tooltip{display:block;max-width:inherit}.ng-invalid+.dk-invalid-feedback,.ng-invalid.dk-invalid-feedback{display:inline}.dk-invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.primaryKey{color:red}.errorMessage{color:red;font-size:.8rem}"]
            }] }
];
/** @nocollapse */
JorAngularComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/jor-angular.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JorAngularModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: jor-angular.ts
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
    { path: 'entity', loadChildren: () => Promise.all(/*! import() | entity-entity-module */[__webpack_require__.e("default~entity-entity-module~model-model-module"), __webpack_require__.e("entity-entity-module")]).then(__webpack_require__.bind(null, /*! ./entity/entity.module */ "./src/app/entity/entity.module.ts")).then(m => m.EntityModule) },
    { path: 'model', loadChildren: () => Promise.all(/*! import() | model-model-module */[__webpack_require__.e("default~entity-entity-module~model-model-module"), __webpack_require__.e("model-model-module")]).then(__webpack_require__.bind(null, /*! ./model/model.module */ "./src/app/model/model.module.ts")).then(m => m.ModelModule) },
    { path: '', redirectTo: '/entity/list', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm2015/jor-angular.js");
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



let AppComponent = class AppComponent {
    constructor(entityService) {
        this.entityService = entityService;
        this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].originalHost);
    }
};
AppComponent.ctorParameters = () => [
    { type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom.reuse.strategy */ "./src/app/custom.reuse.strategy.ts");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jor-angular */ "./dist/jor-angular/fesm2015/jor-angular.js");
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
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            jor_angular__WEBPACK_IMPORTED_MODULE_7__["JorAngularModule"]
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"], useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_6__["CustomReuseStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
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
        this.routesToCache = ['list'];
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
const environment = {
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

module.exports = __webpack_require__(/*! /Users/VinceZK/workspace/javascript/json-on-relations/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map