(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkjson_on_relations"] = self["webpackChunkjson_on_relations"] || []).push([["src_app_model_model_module_ts"], {
    /***/
    54395:
    /*!***********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "debounceTime": function debounceTime() {
          return (
            /* binding */
            _debounceTime
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscriber */
      77393);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);

      function _debounceTime(dueTime) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        return function (source) {
          return source.lift(new DebounceTimeOperator(dueTime, scheduler));
        };
      }

      var DebounceTimeOperator = /*#__PURE__*/function () {
        function DebounceTimeOperator(dueTime, scheduler) {
          _classCallCheck(this, DebounceTimeOperator);

          this.dueTime = dueTime;
          this.scheduler = scheduler;
        }

        _createClass(DebounceTimeOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
          }
        }]);

        return DebounceTimeOperator;
      }();

      var DebounceTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(DebounceTimeSubscriber, _Subscriber__WEBPACK_);

        var _super = _createSuper(DebounceTimeSubscriber);

        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
          var _this;

          _classCallCheck(this, DebounceTimeSubscriber);

          _this = _super.call(this, destination);
          _this.dueTime = dueTime;
          _this.scheduler = scheduler;
          _this.debouncedSubscription = null;
          _this.lastValue = null;
          _this.hasValue = false;
          return _this;
        }

        _createClass(DebounceTimeSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.debouncedNext();
            this.destination.complete();
          }
        }, {
          key: "debouncedNext",
          value: function debouncedNext() {
            this.clearDebounce();

            if (this.hasValue) {
              var lastValue = this.lastValue;
              this.lastValue = null;
              this.hasValue = false;
              this.destination.next(lastValue);
            }
          }
        }, {
          key: "clearDebounce",
          value: function clearDebounce() {
            var debouncedSubscription = this.debouncedSubscription;

            if (debouncedSubscription !== null) {
              this.remove(debouncedSubscription);
              debouncedSubscription.unsubscribe();
              this.debouncedSubscription = null;
            }
          }
        }]);

        return DebounceTimeSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber);

      function dispatchNext(subscriber) {
        subscriber.debouncedNext();
      } //# sourceMappingURL=debounceTime.js.map

      /***/

    },

    /***/
    70107:
    /*!******************************************************************!*\
      !*** ./src/app/model/attribute-meta/attribute-meta.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttributeMetaComponent": function AttributeMetaComponent() {
          return (
            /* binding */
            _AttributeMetaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_attribute_meta_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./attribute-meta.component.html */
      88198);
      /* harmony import */


      var _attribute_meta_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attribute-meta.component.css */
      25944);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model.service */
      46461);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../msgStore */
      87534);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AttributeMetaComponent = /*#__PURE__*/function () {
        function AttributeMetaComponent(fb, router, entityService, messageService, modelService) {
          _classCallCheck(this, AttributeMetaComponent);

          this.fb = fb;
          this.router = router;
          this.entityService = entityService;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dataTypes = [];
          this.deletedAttributes = [];
          this.dataTypes = modelService.dataTypes;
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_3__.msgStore, 'EN');
        }

        _createClass(AttributeMetaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.generateFormArray();
            this.formArray = this.parentForm.get('ATTRIBUTES');
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(control, rowID) {
            if (!this.dataElementSearchHelp) {
              this.dataElementSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_4__.SearchHelp();
              this.dataElementSearchHelp.OBJECT_NAME = 'Data Element';

              this.dataElementSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listDataElement(searchTerm);
                };
              }(this.entityService);

              this.dataElementSearchHelp.BEHAVIOUR = 'A';
              this.dataElementSearchHelp.MULTI = false;
              this.dataElementSearchHelp.FUZZY_SEARCH = true;
              this.dataElementSearchHelp.FIELDS = [{
                FIELD_NAME: 'ELEMENT_ID',
                LIST_HEADER_TEXT: 'Element ID',
                IE_FIELD_NAME: 'DATA_ELEMENT',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'ELEMENT_DESC',
                LIST_HEADER_TEXT: 'Element Description',
                IE_FIELD_NAME: 'ATTR_DESC',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.dataElementSearchHelp.READ_ONLY = this.readonly || control.get('DATA_ELEMENT').disabled;
            }

            var afterExportFn = function (context, attrIdx) {
              return function () {
                return context.onChangeDataElement(attrIdx);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.dataElementSearchHelp, control, afterExportFn);
          }
        }, {
          key: "deleteAttribute",
          value: function deleteAttribute(index) {
            if (index !== this.formArray.length - 1) {
              this.deletedAttributes.push({
                ATTR_GUID: this.formArray.at(index).get('ATTR_GUID').value,
                ATTR_NAME: this.formArray.at(index).get('ATTR_NAME').value
              });
              this.formArray.removeAt(index);
              this.formArray.markAsDirty();
            }
          }
        }, {
          key: "insertAttribute",
          value: function insertAttribute(index) {
            this.formArray.insert(index, this._createAnAttributeFormCtrl());
          }
        }, {
          key: "_createAnAttributeFormCtrl",
          value: function _createAnAttributeFormCtrl() {
            return this.fb.group({
              ATTR_GUID: [''],
              RELATION_ID: [''],
              ATTR_NAME: [''],
              ATTR_DESC: [{
                value: '',
                disabled: true
              }],
              DATA_ELEMENT: [{
                value: '',
                disabled: false
              }],
              DATA_TYPE: [{
                value: '',
                disabled: true
              }],
              DATA_LENGTH: [{
                value: '',
                disabled: true
              }],
              DECIMAL: [null],
              ORDER: [null],
              PRIMARY_KEY: [false],
              AUTO_INCREMENT: [{
                value: false,
                disabled: true
              }]
            });
          }
        }, {
          key: "switchBtwDEAndDT",
          value: function switchBtwDEAndDT(index) {
            var currentAttributeFormCtrl = this.formArray.at(index);
            var dataElementCtrl = currentAttributeFormCtrl.get('DATA_ELEMENT');

            if (dataElementCtrl.enabled) {
              this._disableField(dataElementCtrl);

              this._enableField(currentAttributeFormCtrl.get('ATTR_DESC'));

              this._enableField(currentAttributeFormCtrl.get('DATA_TYPE'));

              this._enableField(currentAttributeFormCtrl.get('DATA_LENGTH'));

              this._enableField(currentAttributeFormCtrl.get('DECIMAL'));

              currentAttributeFormCtrl.get('DATA_TYPE').setValue(1);
              currentAttributeFormCtrl.get('DATA_LENGTH').setValue(10);

              this._disableField(currentAttributeFormCtrl.get('AUTO_INCREMENT'));
            } else {
              dataElementCtrl.enable();

              this._enableField(dataElementCtrl);

              this._disableField(currentAttributeFormCtrl.get('ATTR_DESC'));

              this._disableField(currentAttributeFormCtrl.get('DATA_TYPE'));

              this._disableField(currentAttributeFormCtrl.get('DATA_LENGTH'));

              this._disableField(currentAttributeFormCtrl.get('DECIMAL'));

              this._disableField(currentAttributeFormCtrl.get('AUTO_INCREMENT'));
            }
          }
        }, {
          key: "_enableField",
          value: function _enableField(ctrl) {
            ctrl.setValue(null);
            ctrl.enable();
          }
        }, {
          key: "_disableField",
          value: function _disableField(ctrl) {
            if (ctrl.value !== null && ctrl.value !== '') {
              ctrl.setValue(null);
              ctrl.markAsDirty();
            }

            ctrl.disable();
          }
        }, {
          key: "onChangeDataType",
          value: function onChangeDataType(attrFormGroup) {
            switch (attrFormGroup.get('DATA_TYPE').value) {
              case '1':
                // char
                attrFormGroup.get('DATA_LENGTH').setValue(10);
                attrFormGroup.get('DECIMAL').setValue(null);

                this._disableField(attrFormGroup.get('AUTO_INCREMENT'));

                break;

              case '2':
                // Integer
                attrFormGroup.get('DATA_LENGTH').setValue(null);
                attrFormGroup.get('DECIMAL').setValue(null);

                this._enableField(attrFormGroup.get('AUTO_INCREMENT'));

                break;

              case '4':
                // decimal
                attrFormGroup.get('DATA_LENGTH').setValue(23);
                attrFormGroup.get('DECIMAL').setValue(2);

                this._disableField(attrFormGroup.get('AUTO_INCREMENT'));

                break;

              default:
                attrFormGroup.get('DATA_LENGTH').setValue(null);
                attrFormGroup.get('DECIMAL').setValue(null);

                this._disableField(attrFormGroup.get('AUTO_INCREMENT'));

            }

            attrFormGroup.get('DATA_LENGTH').markAsDirty();
          }
        }, {
          key: "onChangeAttributeName",
          value: function onChangeAttributeName(index) {
            if (index === this.formArray.length - 1 && !this.formArray.controls[index].value.ATTR_GUID) {
              // Only work for the last New line
              this.formArray.push(this._createAnAttributeFormCtrl());
            }
          }
        }, {
          key: "onChangeDataElement",
          value: function onChangeDataElement(index) {
            var _this2 = this;

            var attributeFormGroup = this.formArray.at(index);
            var dataElementCtrl = attributeFormGroup.get('DATA_ELEMENT');
            this.entityService.getDataElement(dataElementCtrl.value).subscribe(function (data) {
              if (data['msgCat']) {
                dataElementCtrl.setErrors({
                  message: data['msgShortText']
                });
              } else {
                attributeFormGroup.get('ATTR_DESC').setValue(data['ELEMENT_DESC']);
                attributeFormGroup.get('DATA_TYPE').setValue(data['DATA_TYPE']);
                attributeFormGroup.get('DATA_LENGTH').setValue(data['DATA_LENGTH']);
                attributeFormGroup.get('DECIMAL').setValue(data['DECIMAL']);

                if (attributeFormGroup.get('DATA_TYPE').value === 2) {
                  _this2._enableField(attributeFormGroup.get('AUTO_INCREMENT'));
                } else {
                  _this2._disableField(attributeFormGroup.get('AUTO_INCREMENT'));
                }
              }
            });
          }
        }, {
          key: "checkAttributes",
          value: function checkAttributes() {
            var Messages = [];

            if (this.formArray.controls.findIndex(function (control) {
              return control.get('PRIMARY_KEY').value;
            }) === -1) {
              Messages.push(this.messageService.generateMessage('MODEL', 'RELATION_PRIMARY_KEY_MISSING', 'E'));
            }

            return Messages;
          }
        }, {
          key: "processChangedAttributes",
          value: function processChangedAttributes() {
            var changedAttributes = [];
            var changedAttribute;
            var order = 0;

            if (this.formArray.dirty) {
              this.formArray.controls.forEach(function (attribute, index) {
                if (attribute.get('ATTR_NAME').value.trim() === '') {
                  return;
                }

                order = index + 1;

                if (order !== attribute.get('ORDER').value) {
                  attribute.get('ORDER').setValue(order);
                  attribute.get('ORDER').markAsDirty();
                }

                if (attribute.dirty) {
                  changedAttribute = {};

                  if (attribute.get('ATTR_GUID').value) {
                    // Update Case
                    changedAttribute['action'] = 'update';
                    changedAttribute['ATTR_GUID'] = attribute.get('ATTR_GUID').value;
                    var attrFormGroup = attribute;
                    Object.keys(attrFormGroup.controls).forEach(function (key) {
                      var formControl = attrFormGroup.controls[key];

                      if (formControl.dirty) {
                        changedAttribute[key] = formControl.value;
                      }
                    });
                  } else {
                    // New Add Case
                    changedAttribute['action'] = 'add';
                    var _attrFormGroup = attribute;
                    Object.keys(_attrFormGroup.controls).forEach(function (key) {
                      var formControl = _attrFormGroup.controls[key];
                      changedAttribute[key] = formControl.value;
                    });
                  }
                } else {
                  changedAttribute = null;
                }

                if (changedAttribute) {
                  changedAttributes.push(changedAttribute);
                }
              }); // Deletion Case

              this.deletedAttributes.forEach(function (attribute) {
                changedAttribute = {
                  action: 'delete',
                  ATTR_GUID: attribute.ATTR_GUID,
                  ATTR_NAME: attribute.ATTR_NAME
                };
                changedAttributes.push(changedAttribute);
              });
              return changedAttributes;
            }
          }
        }, {
          key: "generateFormArray",
          value: function generateFormArray() {
            var _this3 = this;

            var formArray = [];

            if (this.attributes) {
              this.attributes.forEach(function (attribute) {
                var isDataElementAttribute = !!attribute.DATA_ELEMENT;
                formArray.push(_this3.fb.group({
                  ATTR_GUID: [attribute.ATTR_GUID],
                  RELATION_ID: [attribute.RELATION_ID],
                  ATTR_NAME: [attribute.ATTR_NAME],
                  ATTR_DESC: [{
                    value: attribute.ATTR_DESC,
                    disabled: isDataElementAttribute
                  }],
                  DATA_ELEMENT: [{
                    value: attribute.DATA_ELEMENT,
                    disabled: !isDataElementAttribute
                  }],
                  DATA_TYPE: [{
                    value: attribute.DATA_TYPE,
                    disabled: _this3.readonly || _this3.isFieldGray(attribute) || isDataElementAttribute
                  }],
                  DATA_LENGTH: [{
                    value: attribute.DATA_LENGTH,
                    disabled: isDataElementAttribute
                  }],
                  DECIMAL: [{
                    value: attribute.DECIMAL,
                    disabled: isDataElementAttribute
                  }],
                  ORDER: [attribute.ORDER],
                  PRIMARY_KEY: [{
                    value: attribute.PRIMARY_KEY,
                    disabled: _this3.readonly || _this3.isFieldGray(attribute)
                  }],
                  AUTO_INCREMENT: [{
                    value: attribute.AUTO_INCREMENT,
                    disabled: _this3.readonly || _this3.isFieldGray(attribute) || attribute.DATA_TYPE !== 2
                  }]
                }));
              });
            }

            if (this.isNewMode) {
              formArray.push(this._createAnAttributeFormCtrl());
            }

            this.parentForm.addControl('ATTRIBUTES', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray(formArray));
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay(readonly) {
            var _this4 = this;

            if (!readonly) {
              // To Edit Mode
              this.formArray.controls.forEach(function (attrFormGroup) {
                if (!_this4.isFieldGray(attrFormGroup.value)) {
                  if (!attrFormGroup.get('DATA_ELEMENT').value) {
                    attrFormGroup.get('DATA_TYPE').enable();
                  }

                  attrFormGroup.get('PRIMARY_KEY').enable();

                  if (attrFormGroup.get('DATA_TYPE').value === 2) {
                    attrFormGroup.get('AUTO_INCREMENT').enable();
                  } else {
                    attrFormGroup.get('AUTO_INCREMENT').disable();
                  }
                }
              });
              this.formArray.push(this._createAnAttributeFormCtrl());
            } else {
              // To Display Mode
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
          }
        }, {
          key: "isFieldGray",
          value: function isFieldGray(attribute) {
            return this.relationID.substr(0, 3) === 'rs_' && attribute && attribute.ATTR_NAME && (attribute.ATTR_NAME === 'VALID_FROM' || attribute.ATTR_NAME === 'VALID_TO' || attribute.ATTR_NAME.substr(-14, 14) === '_INSTANCE_GUID' || attribute.ATTR_NAME.substr(-10, 10) === '_ENTITY_ID');
          }
        }, {
          key: "onGoToDataElement",
          value: function onGoToDataElement(dataElementName) {
            this.router.navigate(['/model/data-element', dataElementName]);
          }
        }]);

        return AttributeMetaComponent;
      }();

      _AttributeMetaComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_4__.EntityService
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_7__.MessageService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_2__.ModelService
        }];
      };

      _AttributeMetaComponent.propDecorators = {
        parentForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        attributes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        relationID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        isNewMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_4__.SearchHelpComponent, {
            "static": false
          }]
        }]
      };
      _AttributeMetaComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-attribute-meta',
        template: _raw_loader_attribute_meta_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_attribute_meta_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AttributeMetaComponent);
      /***/
    },

    /***/
    91974:
    /*!**************************************************************************************!*\
      !*** ./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataDomainDetailComponent": function DataDomainDetailComponent() {
          return (
            /* binding */
            _DataDomainDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_data_domain_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./data-domain-detail.component.html */
      64928);
      /* harmony import */


      var _data_domain_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data-domain-detail.component.css */
      25145);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../model-validators */
      5021);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../model.service */
      46461);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../dialog.service */
      51969);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jor-angular */
      43340);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _DataDomainDetailComponent = /*#__PURE__*/function () {
        function DataDomainDetailComponent(route, router, fb, uniqueDataDomainValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, DataDomainDetailComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.uniqueDataDomainValidator = uniqueDataDomainValidator;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dialogService = dialogService;
          this.entityService = entityService;
          this.readonly = true;
          this.isNewMode = false;
          this.dataTypes = [];
          this.changedDataDomain = {};
          this.relationsOfEntity = [];
          this.bypassProtection = false;
          this.isSearchListShown = true;
          this.enableGeneralType = false;
          this.enableRegExpr = false;
          this.enableValueRelation = false;
          this.enableArrayOrInterval = false;
          this.dataTypes = this.modelService.dataTypes;
        }

        _createClass(DataDomainDetailComponent, [{
          key: "domainValueFormArray",
          get: function get() {
            return this.dataDomainForm.get('DOMAIN_VALUES');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (params) {
              var domainID = params.get('domainID');

              if (domainID === 'new') {
                var dataDomain = new jor_angular__WEBPACK_IMPORTED_MODULE_6__.DataDomainMeta();
                dataDomain.DOMAIN_ID = '';
                dataDomain.DOMAIN_DESC = '';
                dataDomain.DATA_TYPE = 1; // Char by default

                dataDomain.DATA_LENGTH = 10;
                dataDomain.DOMAIN_TYPE = 0;
                _this5.isNewMode = true;
                _this5.readonly = false;
                _this5.bypassProtection = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(dataDomain);
              } else {
                _this5.readonly = true;
                _this5.isNewMode = false;
                return _this5.entityService.getDataDomain(domainID);
              }
            })).subscribe(function (data) {
              if ('msgName' in data) {
                _this5.messageService.clearMessages();

                _this5.dataDomainMeta = null;
                _this5.dataDomainForm = null;

                _this5.messageService.report(data);
              } else {
                _this5.messageService.clearMessages();

                if (history.state.message) {
                  _this5.messageService.report(history.state.message);
                }

                _this5.dataDomainMeta = data;

                _this5._generateDataDomainForm();

                _this5._getRelationsOfEntity(_this5.dataDomainForm, false);
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this5.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "_generateDataDomainForm",
          value: function _generateDataDomainForm() {
            var _this6 = this;

            if (this.dataDomainForm) {
              this.dataDomainForm.markAsPristine({
                onlySelf: false
              });
              this.dataDomainForm.get('DOMAIN_ID').setValue(this.dataDomainMeta.DOMAIN_ID);
              this.dataDomainForm.get('DOMAIN_DESC').setValue(this.dataDomainMeta.DOMAIN_DESC);
              this.dataDomainForm.get('DATA_TYPE').setValue(this.dataDomainMeta.DATA_TYPE);
              this.dataDomainForm.get('DATA_LENGTH').setValue(this.dataDomainMeta.DATA_LENGTH);
              this.dataDomainForm.get('DECIMAL').setValue(this.dataDomainMeta.DECIMAL);
              this.dataDomainForm.get('DOMAIN_TYPE').setValue(this.dataDomainMeta.DOMAIN_TYPE);
              this.dataDomainForm.get('UNSIGNED').setValue(this.dataDomainMeta.UNSIGNED);
              this.dataDomainForm.get('CAPITAL_ONLY').setValue(this.dataDomainMeta.CAPITAL_ONLY);
              this.dataDomainForm.get('REG_EXPR').setValue(this.dataDomainMeta.REG_EXPR);
              this.dataDomainForm.get('ENTITY_ID').setValue(this.dataDomainMeta.ENTITY_ID);
              this.dataDomainForm.get('RELATION_ID').setValue(this.dataDomainMeta.RELATION_ID);
              this.dataDomainForm.get('DOMAIN_VALUES').clear();

              if (this.readonly) {
                this.dataDomainForm.get('DOMAIN_TYPE').disable();
                this.dataDomainForm.get('DATA_TYPE').disable();
              }
            } else {
              this.dataDomainForm = this.fb.group({
                DOMAIN_ID: [this.dataDomainMeta.DOMAIN_ID, {
                  updateOn: 'blur'
                }],
                DOMAIN_DESC: [this.dataDomainMeta.DOMAIN_DESC],
                DATA_TYPE: [{
                  value: this.dataDomainMeta.DATA_TYPE,
                  disabled: this.readonly
                }],
                DATA_LENGTH: [this.dataDomainMeta.DATA_LENGTH, [this._validateDataLength]],
                DECIMAL: [this.dataDomainMeta.DECIMAL, [this._validateDecimal]],
                DOMAIN_TYPE: [{
                  value: this.dataDomainMeta.DOMAIN_TYPE,
                  disabled: this.readonly
                }],
                UNSIGNED: [{
                  value: this.dataDomainMeta.UNSIGNED,
                  disabled: this.readonly
                }],
                CAPITAL_ONLY: [{
                  value: this.dataDomainMeta.CAPITAL_ONLY,
                  disabled: this.readonly
                }],
                REG_EXPR: [this.dataDomainMeta.REG_EXPR],
                ENTITY_ID: [this.dataDomainMeta.ENTITY_ID],
                RELATION_ID: [{
                  value: this.dataDomainMeta.RELATION_ID,
                  disabled: this.readonly
                }],
                DOMAIN_VALUES: this.fb.array([])
              });
            }

            this._setNewModeState();

            if (this.dataDomainMeta.DOMAIN_TYPE >= 3 && this.dataDomainMeta.DOMAIN_VALUES) {
              // Value Array/Interval
              this.dataDomainMeta.DOMAIN_VALUES.forEach(function (domainValue) {
                _this6.domainValueFormArray.push(_this6.fb.group({
                  LOW_VALUE: [domainValue.LOW_VALUE],
                  LOW_VALUE_TEXT: [domainValue.LOW_VALUE_TEXT],
                  HIGH_VALUE: [domainValue.HIGH_VALUE]
                }));
              });
            }

            this._setDomainType(this.dataDomainForm, false);

            this._updateLengthAndDecimal(this.dataDomainForm, false);
          }
        }, {
          key: "_setNewModeState",
          value: function _setNewModeState() {
            if (this.isNewMode) {
              this.dataDomainForm.get('DOMAIN_ID').setValidators(this._validateDataDomainID);
              this.dataDomainForm.get('DOMAIN_ID').setAsyncValidators(this.uniqueDataDomainValidator.validate.bind(this.uniqueDataDomainValidator));
              this.dataDomainForm.get('DATA_TYPE').enable();
              this.dataDomainForm.get('DOMAIN_TYPE').enable();
              this.dataDomainForm.get('DATA_TYPE').markAsDirty(); // Default value mark as dirty

              this.dataDomainForm.get('DATA_LENGTH').markAsDirty(); // Default value mark as dirty

              this.dataDomainForm.get('DOMAIN_TYPE').markAsDirty(); // Default value mark as dirty
            } else {
              this.dataDomainForm.get('DOMAIN_ID').clearValidators();
              this.dataDomainForm.get('DOMAIN_ID').clearAsyncValidators();
              this.dataDomainForm.get('DOMAIN_ID').updateValueAndValidity();
            }
          }
        }, {
          key: "_validateDataDomainID",
          value: function _validateDataDomainID(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Data Domain ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().length > 32) {
              return {
                message: 'Data Domain ID must have length less than 32!'
              };
            }

            return null;
          }
        }, {
          key: "_validateDataLength",
          value: function _validateDataLength(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a Length'
              };
            }

            return null;
          }
        }, {
          key: "_validateDecimal",
          value: function _validateDecimal(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a decimal place'
              };
            }

            if (c.value < 1 || c.value > 37) {
              return {
                message: 'Decimal place can only between 1 and 37'
              };
            }

            return null;
          }
        }, {
          key: "_validateEntityID",
          value: function _validateEntityID(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give an entity'
              };
            }

            return null;
          }
        }, {
          key: "_validateRelationID",
          value: function _validateRelationID(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a relation'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this7 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Data Domain?').subscribe(function (confirm) {
                if (confirm) {
                  _this7._switch2DisplayMode();

                  _this7.dataDomainMeta = null;

                  _this7.modelService.sendDialogAnswer('OK');
                } else {
                  _this7.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.dataDomainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this7._generateDataDomainForm();

                    _this7.dataDomainForm.reset(_this7.dataDomainForm.value);

                    _this7._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this._switch2EditMode();
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            this.dataDomainForm.get('DOMAIN_TYPE').disable();
            this.dataDomainForm.get('DATA_TYPE').disable();
            this.dataDomainForm.get('UNSIGNED').disable();
            this.dataDomainForm.get('CAPITAL_ONLY').disable();
            this.dataDomainForm.get('RELATION_ID').disable();
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;
            this.dataDomainForm.get('DOMAIN_TYPE').enable();
            this.dataDomainForm.get('DATA_TYPE').enable();

            this._setDomainType(this.dataDomainForm, false);

            this._updateLengthAndDecimal(this.dataDomainForm, false);
          }
        }, {
          key: "onChangeDataDomainID",
          value: function onChangeDataDomainID() {
            this.modelService.updateDataDomainID(this.dataDomainForm.get('DOMAIN_ID').value);
          }
        }, {
          key: "onChangeDataDomainDesc",
          value: function onChangeDataDomainDesc() {
            this.modelService.updateDataDomainDesc(this.dataDomainForm.get('DOMAIN_DESC').value);
          }
        }, {
          key: "onChangeDomainType",
          value: function onChangeDomainType(formGroup) {
            this._setDomainType(formGroup, true);
          }
        }, {
          key: "onEntitySearchHelp",
          value: function onEntitySearchHelp(control) {
            if (!this.entitySearchHelp) {
              this.entitySearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_6__.SearchHelp();
              this.entitySearchHelp.OBJECT_NAME = 'Entity ID';

              this.entitySearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listEntityType(searchTerm);
                };
              }(this.entityService);

              this.entitySearchHelp.BEHAVIOUR = 'A';
              this.entitySearchHelp.MULTI = false;
              this.entitySearchHelp.FUZZY_SEARCH = true;
              this.entitySearchHelp.FIELDS = [{
                FIELD_NAME: 'ENTITY_ID',
                LIST_HEADER_TEXT: 'Entity',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'ENTITY_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.entitySearchHelp.READ_ONLY = this.readonly || this.dataDomainForm.get('DOMAIN_TYPE').value !== 2;
            }

            var afterExportFn = function (context) {
              return function () {
                return context.onChangeEntityID(control);
              };
            }(this).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.entitySearchHelp, control, afterExportFn);
          }
        }, {
          key: "onChangeEntityID",
          value: function onChangeEntityID(formGroup) {
            this._getRelationsOfEntity(formGroup, true);
          }
        }, {
          key: "_getRelationsOfEntity",
          value: function _getRelationsOfEntity(dataDomainForm, setDefault) {
            var _this8 = this;

            var domainEntityID = dataDomainForm.get('ENTITY_ID').value;

            if (!domainEntityID) {
              return;
            }

            this.entityService.getRelationMetaOfEntity(domainEntityID).subscribe(function (entityRelations) {
              if (entityRelations[0]['msgType'] === 'E') {
                dataDomainForm.get('ENTITY_ID').setErrors({
                  message: entityRelations[0]['msgShortText']
                });
              } else {
                _this8.relationsOfEntity = entityRelations.map(function (relationMeta) {
                  return relationMeta.RELATION_ID;
                }).filter(function (relationId) {
                  return relationId.substr(0, 2) !== 'rs';
                });

                if (setDefault) {
                  dataDomainForm.get('RELATION_ID').setValue(_this8.relationsOfEntity[0]);
                  dataDomainForm.get('RELATION_ID').markAsDirty();
                }
              }
            });
          }
        }, {
          key: "_setDomainType",
          value: function _setDomainType(formGroup, markAsDirty) {
            if (markAsDirty) {
              formGroup.get('DOMAIN_TYPE').markAsDirty();
            }

            switch (+formGroup.get('DOMAIN_TYPE').value) {
              case 0:
                // General Type
                if (+formGroup.get('DATA_TYPE').value === 2) {
                  if (!this.readonly) {
                    formGroup.get('UNSIGNED').enable();
                  }

                  this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);
                } else if (+formGroup.get('DATA_TYPE').value === 1) {
                  if (!this.readonly) {
                    formGroup.get('CAPITAL_ONLY').enable();
                  }

                  this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);
                }

                this._invalidField(formGroup.get('REG_EXPR'), markAsDirty);

                this._invalidField(formGroup.get('ENTITY_ID'), markAsDirty);

                this._invalidField(formGroup.get('RELATION_ID'), markAsDirty);

                this._invalidField(formGroup.get('DOMAIN_VALUES'), markAsDirty, true);

                break;

              case 1:
                // Regular Expression
                // formGroup.get('REG_EXPR').setValidators(this._validateRegExpr);
                if (!this.readonly) {
                  formGroup.get('REG_EXPR').enable();
                }

                this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                this._invalidField(formGroup.get('ENTITY_ID'), markAsDirty);

                this._invalidField(formGroup.get('RELATION_ID'), markAsDirty);

                this._invalidField(formGroup.get('DOMAIN_VALUES'), markAsDirty, true);

                break;

              case 2:
                // Value Relation
                if (!this.readonly) {
                  formGroup.get('ENTITY_ID').enable();
                  formGroup.get('RELATION_ID').enable();
                  formGroup.get('ENTITY_ID').setValidators(this._validateEntityID);
                  formGroup.get('RELATION_ID').setValidators(this._validateRelationID);
                }

                this._invalidField(formGroup.get('REG_EXPR'), markAsDirty);

                this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                this._invalidField(formGroup.get('DOMAIN_VALUES'), markAsDirty, true);

                break;

              case 3:
                // Value Array
                if (!this.readonly) {
                  formGroup.get('DOMAIN_VALUES').enable();
                }

                this._invalidField(formGroup.get('ENTITY_ID'), markAsDirty);

                this._invalidField(formGroup.get('RELATION_ID'), markAsDirty);

                this._invalidField(formGroup.get('REG_EXPR'), markAsDirty);

                this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                this._generateEmptyLines(5);

                break;

              case 4:
                // Value Interval
                if (!this.readonly) {
                  formGroup.get('DOMAIN_VALUES').enable();
                }

                this._invalidField(formGroup.get('ENTITY_ID'), markAsDirty);

                this._invalidField(formGroup.get('RELATION_ID'), markAsDirty);

                this._invalidField(formGroup.get('REG_EXPR'), markAsDirty);

                this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                this._generateEmptyLines(5);

                break;

              default:
            }
          }
        }, {
          key: "_generateEmptyLines",
          value: function _generateEmptyLines(num) {
            var existingLines = this.domainValueFormArray.length;

            for (var i = 0; i < num - existingLines; i++) {
              this.domainValueFormArray.push(this.fb.group({
                LOW_VALUE: [''],
                LOW_VALUE_TEXT: [''],
                HIGH_VALUE: ['']
              }));
            }
          }
        }, {
          key: "onChangeDataType",
          value: function onChangeDataType(formGroup) {
            switch (+formGroup.get('DATA_TYPE').value) {
              case 1:
                // char
                formGroup.get('DATA_LENGTH').setValue(10);
                formGroup.get('DECIMAL').setValue(null);
                break;

              case 4:
                // decimal
                formGroup.get('DATA_LENGTH').setValue(23);
                formGroup.get('DECIMAL').setValue(2);
                break;

              default:
                formGroup.get('DATA_LENGTH').setValue(null);
                formGroup.get('DECIMAL').setValue(null);
            }

            formGroup.get('DATA_LENGTH').markAsDirty();
            formGroup.get('DECIMAL').markAsDirty();

            this._updateLengthAndDecimal(formGroup, true);
          }
        }, {
          key: "_updateLengthAndDecimal",
          value: function _updateLengthAndDecimal(formGroup, markAsDirty) {
            switch (+formGroup.get('DATA_TYPE').value) {
              case 1:
                // char
                if (!this.readonly) {
                  formGroup.get('DATA_LENGTH').enable();
                  formGroup.get('DATA_LENGTH').setValidators(this._validateDataLength);
                }

                this._invalidField(formGroup.get('DECIMAL'));

                if (+formGroup.get('DOMAIN_TYPE').value === 0) {
                  if (!this.readonly) {
                    formGroup.get('CAPITAL_ONLY').enable();
                  }

                  this._invalidField(formGroup.get('UNSIGNED'));
                }

                this.enableGeneralType = true;
                this.enableRegExpr = true;
                this.enableValueRelation = true;
                this.enableArrayOrInterval = true;
                break;

              case 2:
                // Integer
                formGroup.get('DATA_LENGTH').disable();

                this._invalidField(formGroup.get('DECIMAL'), markAsDirty);

                if (+formGroup.get('DOMAIN_TYPE').value === 0) {
                  if (!this.readonly) {
                    formGroup.get('UNSIGNED').enable();
                  }

                  this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);
                } else if (+formGroup.get('DOMAIN_TYPE').value === 1 || +formGroup.get('DOMAIN_TYPE').value === 2) {
                  if (!this.readonly) {
                    formGroup.get('DOMAIN_TYPE').setValue(0);
                  }

                  this._setDomainType(formGroup, markAsDirty);
                }

                this.enableGeneralType = true;
                this.enableRegExpr = false;
                this.enableValueRelation = false;
                this.enableArrayOrInterval = true;
                break;

              case 4:
                // decimal
                if (!this.readonly) {
                  formGroup.get('DATA_LENGTH').enable();
                  formGroup.get('DATA_LENGTH').setValidators(this._validateDataLength);
                  formGroup.get('DECIMAL').enable();
                  formGroup.get('DECIMAL').setValidators(this._validateDecimal);
                  formGroup.get('UNSIGNED').enable();
                }

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                formGroup.get('DOMAIN_TYPE').setValue(0);

                this._setDomainType(formGroup, markAsDirty);

                this.enableGeneralType = true;
                this.enableRegExpr = false;
                this.enableValueRelation = false;
                this.enableArrayOrInterval = false;
                break;

              case 5:
                // string
                this._invalidField(formGroup.get('DATA_LENGTH'), markAsDirty);

                this._invalidField(formGroup.get('DECIMAL'), markAsDirty);

                formGroup.get('DOMAIN_TYPE').setValue(1);

                this._setDomainType(formGroup, markAsDirty);

                this.enableGeneralType = false;
                this.enableRegExpr = true;
                this.enableValueRelation = false;
                this.enableArrayOrInterval = false;
                break;

              default:
                this._invalidField(formGroup.get('DATA_LENGTH'), markAsDirty);

                this._invalidField(formGroup.get('DECIMAL'), markAsDirty);

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);

                formGroup.get('DOMAIN_TYPE').setValue(0);

                this._setDomainType(formGroup, markAsDirty);

                this.enableGeneralType = true;
                this.enableRegExpr = false;
                this.enableValueRelation = false;
                this.enableArrayOrInterval = false;
            }
          }
        }, {
          key: "_invalidField",
          value: function _invalidField(fieldCtrl) {
            var markAsDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            fieldCtrl.clearValidators();
            fieldCtrl.clearAsyncValidators();
            fieldCtrl.disable();

            if (markAsDirty) {
              isArray ? fieldCtrl.clear() : fieldCtrl.setValue(null);
              fieldCtrl.markAsDirty();
            }
          }
        }, {
          key: "onChangeDomainValue",
          value: function onChangeDomainValue(index) {
            var currentDomainValueCtrl = this.domainValueFormArray.at(index);

            if (!currentDomainValueCtrl.get('LOW_VALUE').value) {
              return;
            }

            var indexFound = this.domainValueFormArray.controls.findIndex(function (ctrl, valueIndex) {
              return index !== valueIndex && ctrl.value.LOW_VALUE === currentDomainValueCtrl.value.LOW_VALUE;
            });

            if (indexFound > -1) {
              currentDomainValueCtrl.get('LOW_VALUE').setErrors({
                message: 'Value is duplicated!'
              });
            } else {
              currentDomainValueCtrl.get('LOW_VALUE').setErrors(null);
            }

            if (this.dataDomainForm.get('DOMAIN_TYPE').value === 4 && currentDomainValueCtrl.get('LOW_VALUE').value) {
              if (!currentDomainValueCtrl.value.HIGH_VALUE || currentDomainValueCtrl.value.HIGH_VALUE <= currentDomainValueCtrl.value.LOW_VALUE) {
                currentDomainValueCtrl.get('HIGH_VALUE').setErrors({
                  message: 'High value must be greater!'
                });
              } else {
                currentDomainValueCtrl.get('HIGH_VALUE').setErrors(null);
              }
            }
          }
        }, {
          key: "insertDomainValue",
          value: function insertDomainValue(index) {
            this.domainValueFormArray.insert(index, this.fb.group({
              LOW_VALUE: [''],
              LOW_VALUE_TEXT: [''],
              HIGH_VALUE: ['']
            }));
          }
        }, {
          key: "deleteDomainValue",
          value: function deleteDomainValue(index) {
            this.domainValueFormArray.removeAt(index);
            this.domainValueFormArray.markAsDirty();
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this9 = this;

            if (this.isNewMode || !this.bypassProtection && this.dataDomainForm && this.dataDomainForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this9.modelService.sendDialogAnswer('OK');
                } else {
                  _this9.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this10 = this;

            if (!this.dataDomainForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (this.dataDomainForm.invalid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (+this.dataDomainForm.get('DOMAIN_TYPE').value >= 3 && this.domainValueFormArray.length === 0) {
              return this.messageService.reportMessage('MODEL', 'MINIMUM_ONE_DOMAIN_VALUE', 'E');
            }

            if (this.isNewMode) {
              this.changedDataDomain['action'] = 'add';
              this.changedDataDomain['DOMAIN_ID'] = this.dataDomainForm.get('DOMAIN_ID').value;
            } else {
              this.changedDataDomain['action'] = 'update';
              this.changedDataDomain['DOMAIN_ID'] = this.dataDomainMeta.DOMAIN_ID;
            }

            if (this.dataDomainForm.get('DOMAIN_DESC').dirty) {
              this.changedDataDomain['DOMAIN_DESC'] = this.dataDomainForm.get('DOMAIN_DESC').value;
            }

            if (this.dataDomainForm.get('DATA_TYPE').dirty) {
              this.changedDataDomain['DATA_TYPE'] = this.dataDomainForm.get('DATA_TYPE').value;
            }

            if (this.dataDomainForm.get('DATA_LENGTH').dirty) {
              this.changedDataDomain['DATA_LENGTH'] = this.dataDomainForm.get('DATA_LENGTH').value;
            }

            if (this.dataDomainForm.get('DECIMAL').dirty) {
              this.changedDataDomain['DECIMAL'] = this.dataDomainForm.get('DECIMAL').value;
            }

            if (this.dataDomainForm.get('DOMAIN_TYPE').dirty) {
              this.changedDataDomain['DOMAIN_TYPE'] = this.dataDomainForm.get('DOMAIN_TYPE').value;
            }

            if (this.dataDomainForm.get('UNSIGNED').dirty) {
              this.changedDataDomain['UNSIGNED'] = this.dataDomainForm.get('UNSIGNED').value;
            }

            if (this.dataDomainForm.get('CAPITAL_ONLY').dirty) {
              this.changedDataDomain['CAPITAL_ONLY'] = this.dataDomainForm.get('CAPITAL_ONLY').value;
            }

            if (this.dataDomainForm.get('REG_EXPR').dirty) {
              this.changedDataDomain['REG_EXPR'] = this.dataDomainForm.get('REG_EXPR').value;
            }

            if (this.dataDomainForm.get('ENTITY_ID').dirty) {
              this.changedDataDomain['ENTITY_ID'] = this.dataDomainForm.get('ENTITY_ID').value;
            }

            if (this.dataDomainForm.get('RELATION_ID').dirty) {
              this.changedDataDomain['RELATION_ID'] = this.dataDomainForm.get('RELATION_ID').value;
            }

            if (this.dataDomainForm.get('DOMAIN_VALUES').dirty) {
              this.changedDataDomain['DOMAIN_VALUES'] = [];
              this.dataDomainForm.get('DOMAIN_VALUES').value.forEach(function (domainValue) {
                if (domainValue.LOW_VALUE) {
                  _this10.changedDataDomain['DOMAIN_VALUES'].push(domainValue);
                }
              });
            }

            this.entityService.saveDataDomain(this.changedDataDomain).subscribe(function (data) {
              return _this10._postActivityAfterSavingDataDomain(data);
            });
          }
        }, {
          key: "_postActivityAfterSavingDataDomain",
          value: function _postActivityAfterSavingDataDomain(data) {
            var _this11 = this;

            this.changedDataDomain = {};

            if (data['DOMAIN_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/data-domain/' + data['DOMAIN_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'DATA_DOMAIN_SAVED', 'S', data['DOMAIN_ID'])
                  }
                });
              } else {
                this._switch2DisplayMode();

                this.dataDomainMeta = data;

                this._generateDataDomainForm();

                this.messageService.reportMessage('MODEL', 'DATA_DOMAIN_SAVED', 'S', data['DOMAIN_ID']);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this11.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }]);

        return DataDomainDetailComponent;
      }();

      _DataDomainDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_2__.UniqueDataDomainValidator
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_10__.MessageService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_3__.ModelService
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_4__.DialogService
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_6__.EntityService
        }];
      };

      _DataDomainDetailComponent.propDecorators = {
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_6__.SearchHelpComponent, {
            "static": false
          }]
        }]
      };
      _DataDomainDetailComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-data-domain-detail',
        template: _raw_loader_data_domain_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_data_domain_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DataDomainDetailComponent);
      /***/
    },

    /***/
    30936:
    /*!************************************************************!*\
      !*** ./src/app/model/data-domain/data-domain.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataDomainComponent": function DataDomainComponent() {
          return (
            /* binding */
            _DataDomainComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_data_domain_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./data-domain.component.html */
      72750);
      /* harmony import */


      var _data_domain_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data-domain.component.css */
      84968);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model.service */
      46461);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../identity.service */
      8934);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _DataDomainComponent = /*#__PURE__*/function () {
        function DataDomainComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, DataDomainComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.dataDomainList = [];
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(DataDomainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.searchTerms.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (term) {
              return _this12.entityService.listDataDomain(term);
            })).subscribe(function (data) {
              _this12.dataDomainList = data;
              var domainID;

              if (_this12.route.snapshot.firstChild) {
                domainID = _this12.route.snapshot.firstChild.paramMap.get('domainID');
              }

              if (domainID) {
                if (domainID === 'new') {
                  _this12._newDataDomain();
                } else {
                  _this12.onSelect(_this12.dataDomainList.find(function (dataDomain) {
                    return dataDomain.DOMAIN_ID === domainID;
                  }));
                }
              }
            });
            this.searchDataDomain(''); // The initial list

            this.modelService.theSelectedDataDomain$.subscribe(function (data) {
              if (_this12.theSelectedDataDomain) {
                _this12.theSelectedDataDomain.DOMAIN_ID = data['DOMAIN_ID'];
                _this12.theSelectedDataDomain.DOMAIN_DESC = data['DOMAIN_DESC'];
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this12.dataDomainList[0] && !_this12.dataDomainList[0].CREATE_TIME) {
                _this12.dataDomainList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var domainID = _this12.route.snapshot.firstChild.paramMap.get('domainID');

                if (domainID) {
                  if (domainID === 'new') {
                    _this12.onSelect(_this12.dataDomainList[0]);
                  } else {
                    _this12.onSelect(_this12.dataDomainList.find(function (dataDomain) {
                      return dataDomain.DOMAIN_ID === domainID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this12.isSearchListShown = data;
            });
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "onSelect",
          value: function onSelect(dataDomain) {
            if (dataDomain) {
              this.theSelectedDataDomain = dataDomain;
              this.modelService.setSelectedDataDomain(dataDomain);
            }
          }
        }, {
          key: "searchDataDomain",
          value: function searchDataDomain(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "newDataDomian",
          value: function newDataDomian() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('domainID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newDataDomain();

              this.router.navigate(['/model/data-domain/new']);
            }
          }
        }, {
          key: "_newDataDomain",
          value: function _newDataDomain() {
            this.theSelectedDataDomain = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.DataDomainMeta();
            this.theSelectedDataDomain.DOMAIN_ID = 'new';
            this.theSelectedDataDomain.DOMAIN_DESC = 'description';
            this.theSelectedDataDomain.VERSION_NO = 1;
            this.theSelectedDataDomain.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedDataDomain.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedDataDomain(this.theSelectedDataDomain);
            this.dataDomainList.splice(0, 0, this.theSelectedDataDomain);
          }
        }]);

        return DataDomainComponent;
      }();

      _DataDomainComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_2__.ModelService
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_9__.MessageService
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_3__.IdentityService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _DataDomainComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-data-domain',
        template: _raw_loader_data_domain_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_data_domain_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DataDomainComponent);
      /***/
    },

    /***/
    61231:
    /*!*****************************************************************************************!*\
      !*** ./src/app/model/data-element/data-element-detail/data-element-detail.component.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataElementDetailComponent": function DataElementDetailComponent() {
          return (
            /* binding */
            _DataElementDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_data_element_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./data-element-detail.component.html */
      41384);
      /* harmony import */


      var _data_element_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data-element-detail.component.css */
      80653);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../model-validators */
      5021);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../model.service */
      46461);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../dialog.service */
      51969);
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../msgStore */
      87534);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jor-angular */
      43340);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _DataElementDetailComponent = /*#__PURE__*/function () {
        function DataElementDetailComponent(route, router, fb, uniqueDataElementValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, DataElementDetailComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.uniqueDataElementValidator = uniqueDataElementValidator;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dialogService = dialogService;
          this.entityService = entityService;
          this.readonly = true;
          this.isNewMode = false;
          this.dataTypes = [];
          this.changedDataElement = {};
          this.bypassProtection = false;
          this.isSearchListShown = true;
          this.searchHelpExportField = [];
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_5__.msgStore, 'EN');
          this.dataTypes = this.modelService.dataTypes;
        }

        _createClass(DataElementDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(function (params) {
              var elementID = params.get('elementID');

              if (elementID === 'new') {
                var dataElement = new jor_angular__WEBPACK_IMPORTED_MODULE_7__.DataElementMeta();
                dataElement.ELEMENT_ID = '';
                dataElement.ELEMENT_DESC = '';
                dataElement.DATA_TYPE = 1;
                dataElement.DATA_LENGTH = 10;
                _this13.isNewMode = true;
                _this13.readonly = false;
                _this13.bypassProtection = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(dataElement);
              } else {
                _this13.readonly = true;
                _this13.isNewMode = false;
                return _this13.entityService.getDataElement(elementID);
              }
            })).subscribe(function (data) {
              if ('msgName' in data) {
                _this13.messageService.clearMessages();

                _this13.dataElementMeta = null;
                _this13.dataElementForm = null;

                _this13.messageService.report(data);
              } else {
                _this13.messageService.clearMessages();

                if (history.state.message) {
                  _this13.messageService.report(history.state.message);
                }

                _this13.dataElementMeta = data;

                _this13._generateDataElementForm();

                _this13._getSearchHelpMeta(_this13.dataElementForm, false);
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this13.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "onDataDomainSearchHelp",
          value: function onDataDomainSearchHelp(control) {
            if (!this.dataDomainSearchHelp) {
              this.dataDomainSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_7__.SearchHelp();
              this.dataDomainSearchHelp.OBJECT_NAME = 'Data Domain';

              this.dataDomainSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listDataDomain(searchTerm);
                };
              }(this.entityService);

              this.dataDomainSearchHelp.BEHAVIOUR = 'A';
              this.dataDomainSearchHelp.MULTI = false;
              this.dataDomainSearchHelp.FUZZY_SEARCH = true;
              this.dataDomainSearchHelp.FIELDS = [{
                FIELD_NAME: 'DOMAIN_ID',
                LIST_HEADER_TEXT: 'Domain',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'DOMAIN_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.dataDomainSearchHelp.READ_ONLY = this.readonly || !this.dataElementForm.get('USE_DOMAIN').value;
            }

            var afterExportFn = function (context) {
              return function () {
                return context.onChangeDataDomain(control);
              };
            }(this).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.dataDomainSearchHelp, control, afterExportFn);
          }
        }, {
          key: "onSearchHelpSearchHelp",
          value: function onSearchHelpSearchHelp(control) {
            if (!this.searchHelpSearchHelp) {
              this.searchHelpSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_7__.SearchHelp();
              this.searchHelpSearchHelp.OBJECT_NAME = 'Search Help';

              this.searchHelpSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listSearchHelp(searchTerm);
                };
              }(this.entityService);

              this.searchHelpSearchHelp.BEHAVIOUR = 'A';
              this.searchHelpSearchHelp.MULTI = false;
              this.searchHelpSearchHelp.FUZZY_SEARCH = true;
              this.searchHelpSearchHelp.FIELDS = [{
                FIELD_NAME: 'SEARCH_HELP_ID',
                LIST_HEADER_TEXT: 'Search Help',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'SEARCH_HELP_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.searchHelpSearchHelp.READ_ONLY = this.readonly;
            }

            var afterExportFn = function (context) {
              return function () {
                return context.onChangeSearchHelp(control);
              };
            }(this).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.searchHelpSearchHelp, control, afterExportFn);
          }
        }, {
          key: "onChangeSearchHelp",
          value: function onChangeSearchHelp(formGroup) {
            this._getSearchHelpMeta(formGroup, true);
          }
        }, {
          key: "_getSearchHelpMeta",
          value: function _getSearchHelpMeta(formGroup, setDefault) {
            var _this14 = this;

            var searchHelpCtrl = formGroup.get('SEARCH_HELP_ID');

            if (!searchHelpCtrl.value) {
              if (!this.readonly) {
                formGroup.get('SEARCH_HELP_EXPORT_FIELD').setValue('');
                formGroup.get('SEARCH_HELP_EXPORT_FIELD').markAsDirty();
              }

              return;
            }

            this.entityService.getSearchHelp(searchHelpCtrl.value).subscribe(function (data) {
              if (data['msgCat']) {
                searchHelpCtrl.setErrors({
                  message: data['msgShortText']
                });

                if (setDefault) {
                  formGroup.get('SEARCH_HELP_EXPORT_FIELD').setValue('');
                  formGroup.get('SEARCH_HELP_EXPORT_FIELD').markAsDirty();
                }
              } else {
                _this14.searchHelpExportField = [];
                var searchHelpFields = data['FIELDS'];
                searchHelpFields.forEach(function (field) {
                  if (field.EXPORT) {
                    _this14.searchHelpExportField.push(field.IE_FIELD_NAME || field.FIELD_NAME);
                  }
                });

                if (setDefault) {
                  formGroup.get('SEARCH_HELP_EXPORT_FIELD').setValue(_this14.searchHelpExportField[0]);
                  formGroup.get('SEARCH_HELP_EXPORT_FIELD').markAsDirty();
                }
              }
            });
          }
        }, {
          key: "_generateDataElementForm",
          value: function _generateDataElementForm() {
            if (this.dataElementForm) {
              this.dataElementForm.markAsPristine({
                onlySelf: false
              });
              this.dataElementForm.get('ELEMENT_ID').setValue(this.dataElementMeta.ELEMENT_ID);
              this.dataElementForm.get('ELEMENT_DESC').setValue(this.dataElementMeta.ELEMENT_DESC);
              this.dataElementForm.get('LABEL_TEXT').setValue(this.dataElementMeta.LABEL_TEXT);
              this.dataElementForm.get('LIST_HEADER_TEXT').setValue(this.dataElementMeta.LIST_HEADER_TEXT);
              this.dataElementForm.get('DOMAIN_ID').setValue(this.dataElementMeta.DOMAIN_ID);
              this.dataElementForm.get('DATA_TYPE').setValue(this.dataElementMeta.DATA_TYPE);
              this.dataElementForm.get('DATA_LENGTH').setValue(this.dataElementMeta.DATA_LENGTH);
              this.dataElementForm.get('DECIMAL').setValue(this.dataElementMeta.DECIMAL);
              this.dataElementForm.get('SEARCH_HELP_ID').setValue(this.dataElementMeta.SEARCH_HELP_ID);
              this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').setValue(this.dataElementMeta.SEARCH_HELP_EXPORT_FIELD);
              this.dataElementForm.get('PARAMETER_ID').setValue(this.dataElementMeta.PARAMETER_ID);

              if (this.dataElementMeta.DOMAIN_ID) {
                this.dataElementForm.get('USE_DOMAIN').setValue(1);
                this.dataElementForm.get('DATA_TYPE').disable();
              } else {
                this.dataElementForm.get('USE_DOMAIN').setValue(0);
                this.dataElementForm.get('DATA_TYPE').enable();
              }

              if (this.readonly) {
                this.dataElementForm.get('USE_DOMAIN').disable();
                this.dataElementForm.get('DOMAIN_ID').disable();
                this.dataElementForm.get('DATA_TYPE').disable();
                this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').disable();
              } else {
                this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').enable();
              }
            } else {
              this.dataElementForm = this.fb.group({
                ELEMENT_ID: [this.dataElementMeta.ELEMENT_ID, {
                  updateOn: 'blur'
                }],
                ELEMENT_DESC: [this.dataElementMeta.ELEMENT_DESC],
                LABEL_TEXT: [this.dataElementMeta.LABEL_TEXT],
                LIST_HEADER_TEXT: [this.dataElementMeta.LIST_HEADER_TEXT],
                DOMAIN_ID: [this.dataElementMeta.DOMAIN_ID],
                DATA_TYPE: [{
                  value: this.dataElementMeta.DATA_TYPE,
                  disabled: this.readonly
                }],
                DATA_LENGTH: [this.dataElementMeta.DATA_LENGTH, [this._validateDataLength]],
                DECIMAL: [this.dataElementMeta.DECIMAL, [this._validateDecimal]],
                SEARCH_HELP_ID: [this.dataElementMeta.SEARCH_HELP_ID],
                SEARCH_HELP_EXPORT_FIELD: [{
                  value: this.dataElementMeta.SEARCH_HELP_EXPORT_FIELD,
                  disabled: this.readonly
                }],
                PARAMETER_ID: [this.dataElementMeta.PARAMETER_ID],
                USE_DOMAIN: [{
                  value: this.dataElementMeta.DOMAIN_ID ? 1 : 0,
                  disabled: this.readonly
                }]
              });
            }

            this._setNewModeState();

            if (this.dataElementForm.get('USE_DOMAIN').value) {
              this.dataElementForm.get('DOMAIN_ID').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
              this.onChangeDataDomain(this.dataElementForm);
            } else {
              this.dataElementForm.get('DOMAIN_ID').setErrors(null);
              this.dataElementForm.get('DOMAIN_ID').clearValidators();
            }

            this._updateLengthAndDecimal(this.dataElementForm);
          }
        }, {
          key: "_setNewModeState",
          value: function _setNewModeState() {
            if (this.isNewMode) {
              this.dataElementForm.get('ELEMENT_ID').setValidators(this._validateDataElementID);
              this.dataElementForm.get('ELEMENT_ID').setAsyncValidators(this.uniqueDataElementValidator.validate.bind(this.uniqueDataElementValidator));
              this.dataElementForm.get('USE_DOMAIN').enable();
              this.dataElementForm.get('DATA_TYPE').enable();
              this.dataElementForm.get('DATA_TYPE').markAsDirty(); // Default value mark as dirty

              this.dataElementForm.get('DATA_LENGTH').markAsDirty(); // Default value mark as dirty
            } else {
              this.dataElementForm.get('ELEMENT_ID').clearValidators();
              this.dataElementForm.get('ELEMENT_ID').clearAsyncValidators();
              this.dataElementForm.get('ELEMENT_ID').updateValueAndValidity();
            }
          }
        }, {
          key: "_validateDataElementID",
          value: function _validateDataElementID(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Data Element ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().length > 32) {
              return {
                message: 'Data Element ID must have length less than 32!'
              };
            }

            return null;
          }
        }, {
          key: "_validateDataLength",
          value: function _validateDataLength(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a Length'
              };
            }

            return null;
          }
        }, {
          key: "_validateDecimal",
          value: function _validateDecimal(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a decimal place'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this15 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Data Element?').subscribe(function (confirm) {
                if (confirm) {
                  _this15._switch2DisplayMode();

                  _this15.dataElementMeta = null;

                  _this15.modelService.sendDialogAnswer('OK');
                } else {
                  _this15.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.dataElementForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this15._generateDataElementForm();

                    _this15.dataElementForm.reset(_this15.dataElementForm.value);

                    _this15._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this._switch2EditMode();
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            this.dataElementForm.get('USE_DOMAIN').disable();
            this.dataElementForm.get('DATA_TYPE').disable();
            this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').disable();
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;
            this.dataElementForm.get('USE_DOMAIN').enable();
            this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').enable();

            this._setUseDomain(this.dataElementForm);
          }
        }, {
          key: "onChangeDataElementID",
          value: function onChangeDataElementID() {
            this.modelService.updateDataElementID(this.dataElementForm.get('ELEMENT_ID').value);
          }
        }, {
          key: "onChangeDataElementDesc",
          value: function onChangeDataElementDesc() {
            this.modelService.updateDataElementDesc(this.dataElementForm.get('ELEMENT_DESC').value);
          }
        }, {
          key: "onChangeUseDomain",
          value: function onChangeUseDomain(formGroup) {
            this._setUseDomain(formGroup, true);
          }
        }, {
          key: "onChangeDataDomain",
          value: function onChangeDataDomain(formGroup) {
            var dataDomainCtrl = formGroup.get('DOMAIN_ID');
            this.entityService.getDataDomain(dataDomainCtrl.value).subscribe(function (data) {
              if (data['msgCat']) {
                dataDomainCtrl.setErrors({
                  message: data['msgShortText']
                });
              } else {
                formGroup.get('DATA_TYPE').setValue(data['DATA_TYPE']);
                formGroup.get('DATA_LENGTH').setValue(data['DATA_LENGTH']);
                formGroup.get('DECIMAL').setValue(data['DECIMAL']);
              }
            });
          }
        }, {
          key: "_setUseDomain",
          value: function _setUseDomain(formGroup) {
            var markAsDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (formGroup.get('USE_DOMAIN').value) {
              formGroup.get('DOMAIN_ID').enable();
              formGroup.get('DOMAIN_ID').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);

              this._invalidField(formGroup.get('DATA_TYPE'), markAsDirty);

              this._invalidField(formGroup.get('DATA_LENGTH'), markAsDirty);

              this._invalidField(formGroup.get('DECIMAL'), markAsDirty);
            } else {
              this._invalidField(formGroup.get('DOMAIN_ID'), markAsDirty);

              formGroup.get('DATA_TYPE').enable();
              formGroup.get('DATA_TYPE').markAsDirty();
              formGroup.get('DATA_LENGTH').enable();
              formGroup.get('DATA_LENGTH').markAsDirty();
              formGroup.get('DECIMAL').enable();
              formGroup.get('DECIMAL').markAsDirty();

              if (!formGroup.get('DATA_TYPE').value) {
                formGroup.get('DATA_TYPE').setValue(1);

                if (!formGroup.get('DATA_LENGTH').value) {
                  formGroup.get('DATA_LENGTH').setValue(10);
                }
              }

              this._updateLengthAndDecimal(formGroup);
            }
          }
        }, {
          key: "_invalidField",
          value: function _invalidField(fieldCtrl) {
            var markAsDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            fieldCtrl.clearValidators();
            fieldCtrl.clearAsyncValidators();
            fieldCtrl.disable();

            if (markAsDirty) {
              fieldCtrl.setValue(null);
              fieldCtrl.markAsDirty();
            }
          }
        }, {
          key: "onChangeDataType",
          value: function onChangeDataType(formGroup) {
            switch (+formGroup.get('DATA_TYPE').value) {
              case 1:
                // char
                formGroup.get('DATA_LENGTH').setValue(10);
                formGroup.get('DECIMAL').setValue(null);
                break;

              case 4:
                // decimal
                formGroup.get('DATA_LENGTH').setValue(23);
                formGroup.get('DECIMAL').setValue(2);
                break;

              default:
                formGroup.get('DATA_LENGTH').setValue(null);
                formGroup.get('DECIMAL').setValue(null);
            }

            formGroup.get('DATA_LENGTH').markAsDirty();
            formGroup.get('DECIMAL').markAsDirty();

            this._updateLengthAndDecimal(formGroup);
          }
        }, {
          key: "_updateLengthAndDecimal",
          value: function _updateLengthAndDecimal(formGroup) {
            switch (+formGroup.get('DATA_TYPE').value) {
              case 1:
                // char
                formGroup.get('DATA_LENGTH').enable();
                formGroup.get('DATA_LENGTH').setValidators(this._validateDataLength);
                formGroup.get('DECIMAL').disable();
                break;

              case 4:
                // decimal
                formGroup.get('DATA_LENGTH').enable();
                formGroup.get('DATA_LENGTH').setValidators(this._validateDataLength);
                formGroup.get('DECIMAL').enable();
                formGroup.get('DATA_LENGTH').setValidators(this._validateDecimal);
                break;

              default:
                formGroup.get('DATA_LENGTH').disable();
                formGroup.get('DECIMAL').disable();
            }
          }
        }, {
          key: "onGoToDataDomain",
          value: function onGoToDataDomain(domainID) {
            this.router.navigate(['/model/data-domain', domainID]);
          }
        }, {
          key: "onGoToSearchHelp",
          value: function onGoToSearchHelp(searchHelpID) {
            this.router.navigate(['/model/search-help', searchHelpID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this16 = this;

            if (this.isNewMode || !this.bypassProtection && this.dataElementForm && this.dataElementForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this16.modelService.sendDialogAnswer('OK');
                } else {
                  _this16.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this17 = this;

            if (!this.dataElementForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (this.dataElementForm.invalid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedDataElement['action'] = 'add';
              this.changedDataElement['ELEMENT_ID'] = this.dataElementForm.get('ELEMENT_ID').value;
            } else {
              this.changedDataElement['action'] = 'update';
              this.changedDataElement['ELEMENT_ID'] = this.dataElementMeta.ELEMENT_ID;
            }

            if (this.dataElementForm.get('ELEMENT_DESC').dirty) {
              this.changedDataElement['ELEMENT_DESC'] = this.dataElementForm.get('ELEMENT_DESC').value;
            }

            if (this.dataElementForm.get('DOMAIN_ID').dirty) {
              this.changedDataElement['DOMAIN_ID'] = this.dataElementForm.get('DOMAIN_ID').value;
            }

            if (this.dataElementForm.get('DATA_TYPE').dirty) {
              this.changedDataElement['DATA_TYPE'] = this.dataElementForm.get('USE_DOMAIN').value ? null : this.dataElementForm.get('DATA_TYPE').value;
            }

            if (this.dataElementForm.get('DATA_LENGTH').dirty) {
              this.changedDataElement['DATA_LENGTH'] = this.dataElementForm.get('USE_DOMAIN').value ? null : this.dataElementForm.get('DATA_LENGTH').value;
            }

            if (this.dataElementForm.get('DECIMAL').dirty) {
              this.changedDataElement['DECIMAL'] = this.dataElementForm.get('USE_DOMAIN').value ? null : this.dataElementForm.get('DECIMAL').value;
            }

            if (this.dataElementForm.get('LABEL_TEXT').dirty) {
              this.changedDataElement['LABEL_TEXT'] = this.dataElementForm.get('LABEL_TEXT').value;
            }

            if (this.dataElementForm.get('LIST_HEADER_TEXT').dirty) {
              this.changedDataElement['LIST_HEADER_TEXT'] = this.dataElementForm.get('LIST_HEADER_TEXT').value;
            }

            if (this.dataElementForm.get('SEARCH_HELP_ID').dirty) {
              this.changedDataElement['SEARCH_HELP_ID'] = this.dataElementForm.get('SEARCH_HELP_ID').value;
            }

            if (this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').dirty) {
              this.changedDataElement['SEARCH_HELP_EXPORT_FIELD'] = this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').value;
            }

            if (this.dataElementForm.get('PARAMETER_ID').dirty) {
              this.changedDataElement['PARAMETER_ID'] = this.dataElementForm.get('PARAMETER_ID').value;
            }

            this.entityService.saveDataElement(this.changedDataElement).subscribe(function (data) {
              return _this17._postActivityAfterSavingDataElement(data);
            });
          }
        }, {
          key: "_postActivityAfterSavingDataElement",
          value: function _postActivityAfterSavingDataElement(data) {
            var _this18 = this;

            this.changedDataElement = {};

            if (data['ELEMENT_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/data-element/' + data['ELEMENT_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'DATA_ELEMENT_SAVED', 'S', data['ELEMENT_ID'])
                  }
                });
              } else {
                this._switch2DisplayMode();

                this.dataElementMeta = data;

                this._generateDataElementForm();

                this.messageService.reportMessage('MODEL', 'DATA_ELEMENT_SAVED', 'S', data['ELEMENT_ID']);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this18.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }]);

        return DataElementDetailComponent;
      }();

      _DataElementDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_2__.UniqueDataElementValidator
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_11__.MessageService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_3__.ModelService
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_4__.DialogService
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_7__.EntityService
        }];
      };

      _DataElementDetailComponent.propDecorators = {
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_7__.SearchHelpComponent, {
            "static": false
          }]
        }]
      };
      _DataElementDetailComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-data-element-detail',
        template: _raw_loader_data_element_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_data_element_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DataElementDetailComponent);
      /***/
    },

    /***/
    11079:
    /*!**************************************************************!*\
      !*** ./src/app/model/data-element/data-element.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataElementComponent": function DataElementComponent() {
          return (
            /* binding */
            _DataElementComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_data_element_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./data-element.component.html */
      23990);
      /* harmony import */


      var _data_element_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data-element.component.css */
      52400);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model.service */
      46461);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../identity.service */
      8934);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _DataElementComponent = /*#__PURE__*/function () {
        function DataElementComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, DataElementComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.dataElementList = [];
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(DataElementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.searchTerms.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (term) {
              return _this19.entityService.listDataElement(term);
            })).subscribe(function (data) {
              _this19.dataElementList = data;
              var elementID;

              if (_this19.route.snapshot.firstChild) {
                elementID = _this19.route.snapshot.firstChild.paramMap.get('elementID');
              }

              if (elementID) {
                if (elementID === 'new') {
                  _this19._newDataElement();
                } else {
                  _this19.onSelect(_this19.dataElementList.find(function (dataEle) {
                    return dataEle.ELEMENT_ID === elementID;
                  }));
                }
              }
            });
            this.searchDataElement(''); // The initial list

            this.modelService.theSelectedDataElement$.subscribe(function (data) {
              if (_this19.theSelectedDataElement) {
                _this19.theSelectedDataElement.ELEMENT_ID = data['ELEMENT_ID'];
                _this19.theSelectedDataElement.ELEMENT_DESC = data['ELEMENT_DESC'];
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this19.dataElementList[0] && !_this19.dataElementList[0].CREATE_TIME) {
                _this19.dataElementList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var elementID = _this19.route.snapshot.firstChild.paramMap.get('elementID');

                if (elementID) {
                  if (elementID === 'new') {
                    _this19.onSelect(_this19.dataElementList[0]);
                  } else {
                    _this19.onSelect(_this19.dataElementList.find(function (dataElement) {
                      return dataElement.ELEMENT_ID === elementID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this19.isSearchListShown = data;
            });
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "onSelect",
          value: function onSelect(dataElement) {
            if (dataElement) {
              this.theSelectedDataElement = dataElement;
              this.modelService.setSelectedDataElement(dataElement);
            }
          }
        }, {
          key: "searchDataElement",
          value: function searchDataElement(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "newDataElement",
          value: function newDataElement() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('elementID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newDataElement();

              this.router.navigate(['/model/data-element/new']);
            }
          }
        }, {
          key: "_newDataElement",
          value: function _newDataElement() {
            this.theSelectedDataElement = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.DataElementMeta();
            this.theSelectedDataElement.ELEMENT_ID = 'new';
            this.theSelectedDataElement.ELEMENT_DESC = 'description';
            this.theSelectedDataElement.VERSION_NO = 1;
            this.theSelectedDataElement.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedDataElement.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedDataElement(this.theSelectedDataElement);
            this.dataElementList.splice(0, 0, this.theSelectedDataElement);
          }
        }]);

        return DataElementComponent;
      }();

      _DataElementComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_2__.ModelService
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_9__.MessageService
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_3__.IdentityService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _DataElementComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-data-element',
        template: _raw_loader_data_element_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_data_element_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DataElementComponent);
      /***/
    },

    /***/
    15515:
    /*!**************************************************************************************!*\
      !*** ./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EntityTypeDetailComponent": function EntityTypeDetailComponent() {
          return (
            /* binding */
            _EntityTypeDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_entity_type_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./entity-type-detail.component.html */
      20715);
      /* harmony import */


      var _entity_type_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./entity-type-detail.component.css */
      35190);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../msgStore */
      87534);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      35758);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../attribute-meta/attribute-meta.component */
      70107);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../model.service */
      46461);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../dialog.service */
      51969);
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../model-validators */
      5021);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      43340);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _EntityTypeDetailComponent = /*#__PURE__*/function () {
        function EntityTypeDetailComponent(route, router, fb, uniqueEntityTypeValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, EntityTypeDetailComponent);

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
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_2__.msgStore, 'EN');
        }

        _createClass(EntityTypeDetailComponent, [{
          key: "roleFormArray",
          get: function get() {
            return this.entityTypeForm.get('ROLES');
          }
        }, {
          key: "attrFormArray",
          get: function get() {
            return this.entityTypeForm.get('ATTRIBUTES');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (params) {
              var entityID = params.get('entityID');

              if (entityID === 'new') {
                var entityType = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityMeta();
                entityType.ENTITY_ID = '';
                entityType.ENTITY_DESC = '';
                entityType.ROLES = [];
                _this20.isNewMode = true;
                _this20.readonly = false;
                _this20.bypassProtection = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)((0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(entityType), (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]));
              } else {
                _this20.readonly = true;
                _this20.isNewMode = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)(_this20.entityService.getEntityMeta(entityID), _this20.entityService.getRelationMeta(entityID));
              }
            })).subscribe(function (data) {
              if ('ENTITY_ID' in data[0]) {
                _this20.messageService.clearMessages();

                if (history.state.message) {
                  _this20.messageService.report(history.state.message);
                }

                _this20.entityMeta = data[0];
                _this20.attributes = 'RELATION_ID' in data[1] ? data[1]['ATTRIBUTES'] : [];

                _this20._generateEntityTypeForm();
              } else {
                _this20.messageService.clearMessages();

                _this20.entityMeta = null;
                _this20.entityTypeForm = null;

                if (data[0] instanceof Array) {
                  data[0].forEach(function (err) {
                    return _this20.messageService.add(err);
                  });
                } else {
                  _this20.messageService.report(data[0]);
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this20.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(control, rowID) {
            if (!this.roleSearchHelp) {
              this.roleSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.SearchHelp();
              this.roleSearchHelp.OBJECT_NAME = 'Role';

              this.roleSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listRole(searchTerm);
                };
              }(this.entityService);

              this.roleSearchHelp.BEHAVIOUR = 'A';
              this.roleSearchHelp.MULTI = false;
              this.roleSearchHelp.FUZZY_SEARCH = true;
              this.roleSearchHelp.FIELDS = [{
                FIELD_NAME: 'ROLE_ID',
                LIST_HEADER_TEXT: 'Role',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'ROLE_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.roleSearchHelp.READ_ONLY = this.readonly || this.oldRole(control) && control.valid;
            }

            var afterExportFn = function (context, ruleIdx) {
              return function () {
                return context.onChangeRoleID(ruleIdx, true);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.roleSearchHelp, control, afterExportFn);
          }
        }, {
          key: "_generateEntityTypeForm",
          value: function _generateEntityTypeForm() {
            var _this21 = this;

            this.entityTypeForm = this.fb.group({});
            this.entityTypeForm.addControl('ENTITY_ID', new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.entityMeta.ENTITY_ID, {
              updateOn: 'blur'
            }));

            if (this.isNewMode) {
              this.entityTypeForm.get('ENTITY_ID').setValidators(this._validateEntityId);
              this.entityTypeForm.get('ENTITY_ID').setAsyncValidators(this.uniqueEntityTypeValidator.validate.bind(this.uniqueEntityTypeValidator));
            }

            this.entityTypeForm.addControl('ENTITY_DESC', new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.entityMeta.ENTITY_DESC)); // Compose roles

            var formArray = [];
            this.entityMeta.ROLES.forEach(function (role) {
              formArray.push(_this21.fb.group({
                ROLE_ID: [role.ROLE_ID],
                ROLE_DESC: [role.ROLE_DESC],
                CONDITIONAL_ATTR: [{
                  value: role.CONDITIONAL_ATTR,
                  disabled: _this21.readonly
                }],
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

            this.entityTypeForm.addControl('ROLES', new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray(formArray));
          }
        }, {
          key: "_validateEntityId",
          value: function _validateEntityId(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Entity ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().toLowerCase().substr(0, 2) === 'r_' || c.value.toString().toLowerCase().substr(0, 3) === 'rs_') {
              return {
                message: 'Entity ID cannot be started with "r_" or "rs_"!'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this22 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Entity Type?').subscribe(function (confirm) {
                if (confirm) {
                  _this22._switch2DisplayMode();

                  _this22.entityMeta = null;

                  _this22.modelService.sendDialogAnswer('OK');
                } else {
                  _this22.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.entityTypeForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this22._generateEntityTypeForm();

                    _this22.entityTypeForm.reset(_this22.entityTypeForm.value);

                    _this22._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this.readonly = false;
              this.attrComponent.switchEditDisplay(this.readonly);
              this.roleFormArray.controls.forEach(function (roleFormGroup) {
                return roleFormGroup.get('CONDITIONAL_ATTR').enable();
              });
              this.roleFormArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CONDITIONAL_ATTR: [''],
                CONDITIONAL_VALUE: ['']
              }));
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
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
          }
        }, {
          key: "onChangeEntityID",
          value: function onChangeEntityID() {
            this.modelService.updateEntityID(this.entityTypeForm.get('ENTITY_ID').value);
          }
        }, {
          key: "onChangeEntityDesc",
          value: function onChangeEntityDesc() {
            this.modelService.updateEntityDesc(this.entityTypeForm.get('ENTITY_DESC').value);
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(index) {
            if (index !== this.roleFormArray.length - 1) {
              this.roleFormArray.removeAt(index);
              this.roleFormArray.markAsDirty();
            }
          }
        }, {
          key: "onChangeRoleID",
          value: function onChangeRoleID(index, isExportedFromSH) {
            var currentRoleFormGroup = this.roleFormArray.controls[index];

            if (this.roleFormArray.controls.findIndex(function (roleCtrl, i) {
              return i !== index && roleCtrl.get('ROLE_ID').value === currentRoleFormGroup.get('ROLE_ID').value;
            }) !== -1) {
              currentRoleFormGroup.get('ROLE_ID').setErrors({
                message: 'Duplicate roles'
              });
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
                  currentRoleFormGroup.get('ROLE_ID').setErrors({
                    message: data['msgShortText']
                  });
                } else {
                  currentRoleFormGroup.get('ROLE_DESC').setValue(data);
                }
              });
            }
          }
        }, {
          key: "oldRole",
          value: function oldRole(formGroup) {
            return this.entityMeta.ROLES ? this.entityMeta.ROLES.findIndex(function (role) {
              return role.ROLE_ID === formGroup.get('ROLE_ID').value;
            }) !== -1 : false;
          }
        }, {
          key: "onGoToRole",
          value: function onGoToRole(roleID) {
            this.router.navigate(['/model/role', roleID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this23 = this;

            if (this.isNewMode || !this.bypassProtection && this.entityTypeForm && this.entityTypeForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this23.modelService.sendDialogAnswer('OK');
                } else {
                  _this23.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this24 = this;

            if (!this.entityTypeForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (!this.entityTypeForm.valid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedEntityType['action'] = 'add';
              this.changedEntityType['ENTITY_ID'] = this.entityTypeForm.controls['ENTITY_ID'].value;
            } else {
              this.changedEntityType['action'] = 'update';
              this.changedEntityType['ENTITY_ID'] = this.entityMeta.ENTITY_ID;
            }

            if (this.entityTypeForm.controls['ENTITY_DESC'].dirty) {
              this.changedEntityType['ENTITY_DESC'] = this.entityTypeForm.controls['ENTITY_DESC'].value;
            }

            this.changedEntityType['ATTRIBUTES'] = this.attrComponent.processChangedAttributes();

            this._processChangedRoles();

            this.entityService.saveEntityType(this.changedEntityType).subscribe(function (data) {
              return _this24._postActivityAfterSavingEntityType(data);
            });
          }
        }, {
          key: "_processChangedRoles",
          value: function _processChangedRoles() {
            var _this25 = this;

            var changedRoles = [];

            if (this.roleFormArray.dirty) {
              this.changedEntityType['ROLES'] = changedRoles;
              var action; // Add/Update Case

              this.roleFormArray.controls.forEach(function (role) {
                if (role.get('ROLE_ID').value.trim() === '') {
                  return;
                }

                var index = _this25.entityMeta.ROLES.findIndex(function (existRole) {
                  return role.value.ROLE_ID === existRole.ROLE_ID;
                });

                action = index === -1 ? 'add' : 'update';

                if (role.dirty) {
                  var changedRole = {
                    action: action,
                    ROLE_ID: role.value.ROLE_ID
                  };

                  if (role.get('CONDITIONAL_ATTR').dirty) {
                    changedRole['CONDITIONAL_ATTR'] = role.value.CONDITIONAL_ATTR;
                  }

                  if (role.get('CONDITIONAL_VALUE').dirty) {
                    changedRole['CONDITIONAL_VALUE'] = role.value.CONDITIONAL_VALUE;
                  }

                  changedRoles.push(changedRole);
                }
              }); // Deletion Case

              this.entityMeta.ROLES.forEach(function (role) {
                var index = _this25.roleFormArray.controls.findIndex(function (roleControl) {
                  return roleControl.get('ROLE_ID').value === role.ROLE_ID;
                });

                if (index === -1) {
                  var deletedRole = {
                    action: 'delete',
                    ROLE_ID: role.ROLE_ID
                  };
                  changedRoles.push(deletedRole);
                }
              });
            }
          }
        }, {
          key: "_postActivityAfterSavingEntityType",
          value: function _postActivityAfterSavingEntityType(data) {
            var _this26 = this;

            this.changedEntityType = {};

            if (data[0] && data[0]['ENTITY_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/entity-type/' + data[0]['ENTITY_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'ENTITY_TYPE_SAVED', 'S', data[0]['ENTITY_ID'])
                  }
                });
              } else {
                this.readonly = true;
                this.entityMeta = data[0];
                this.attributes = data[1].ATTRIBUTES;

                this._generateEntityTypeForm();

                this.messageService.reportMessage('MODEL', 'ENTITY_TYPE_SAVED', 'S', this.entityMeta.ENTITY_ID);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this26.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }]);

        return EntityTypeDetailComponent;
      }();

      _EntityTypeDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_6__.UniqueEntityTypeValidator
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_13__.MessageService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__.ModelService
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_5__.DialogService
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService
        }];
      };

      _EntityTypeDetailComponent.propDecorators = {
        attrComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
          args: [_attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_3__.AttributeMetaComponent, {
            "static": false
          }]
        }],
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_8__.SearchHelpComponent, {
            "static": false
          }]
        }]
      };
      _EntityTypeDetailComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-entity-type-detail',
        template: _raw_loader_entity_type_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_entity_type_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EntityTypeDetailComponent);
      /***/
    },

    /***/
    14755:
    /*!************************************************************!*\
      !*** ./src/app/model/entity-type/entity-type.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EntityTypeComponent": function EntityTypeComponent() {
          return (
            /* binding */
            _EntityTypeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_entity_type_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./entity-type.component.html */
      18276);
      /* harmony import */


      var _entity_type_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./entity-type.component.css */
      25332);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model.service */
      46461);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../identity.service */
      8934);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _EntityTypeComponent = /*#__PURE__*/function () {
        function EntityTypeComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, EntityTypeComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(EntityTypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.searchTerms.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (term) {
              return _this27.entityService.listEntityType(term);
            })).subscribe(function (data) {
              _this27.entityTypeList = data;
              var entityID;

              if (_this27.route.snapshot.firstChild) {
                entityID = _this27.route.snapshot.firstChild.paramMap.get('entityID');
              }

              if (entityID) {
                if (entityID === 'new') {
                  _this27._newEntityType();
                } else {
                  _this27.onSelect(_this27.entityTypeList.find(function (entityType) {
                    return entityType.ENTITY_ID === entityID;
                  }));
                }
              }
            });
            this.searchEntityType(''); // The initial list

            this.modelService.theSelectedEntityType$.subscribe(function (data) {
              if (_this27.theSelectedEntityType) {
                _this27.theSelectedEntityType.ENTITY_ID = data.ENTITY_ID;
                _this27.theSelectedEntityType.ENTITY_DESC = data.ENTITY_DESC;
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this27.isSearchListShown = data;
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this27.entityTypeList[0] && !_this27.entityTypeList[0].CREATE_TIME) {
                _this27.entityTypeList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var entityID = _this27.route.snapshot.firstChild.paramMap.get('entityID');

                if (entityID) {
                  if (entityID === 'new') {
                    _this27.onSelect(_this27.entityTypeList[0]);
                  } else {
                    _this27.onSelect(_this27.entityTypeList.find(function (entityType) {
                      return entityType.ENTITY_ID === entityID;
                    }));
                  }
                }
              }
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(entityType) {
            if (entityType) {
              this.theSelectedEntityType = entityType;
              this.modelService.setSelectedEntityType(entityType);
            }
          }
        }, {
          key: "searchEntityType",
          value: function searchEntityType(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "newEntityType",
          value: function newEntityType() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('entityID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newEntityType();

              this.router.navigate(['/model/entity-type/new']);
            }
          }
        }, {
          key: "_newEntityType",
          value: function _newEntityType() {
            this.theSelectedEntityType = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityType();
            this.theSelectedEntityType.ENTITY_ID = 'new';
            this.theSelectedEntityType.ENTITY_DESC = 'description';
            this.theSelectedEntityType.VERSION_NO = 1;
            this.theSelectedEntityType.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedEntityType.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedEntityType(this.theSelectedEntityType);
            this.entityTypeList.splice(0, 0, this.theSelectedEntityType);
          }
        }]);

        return EntityTypeComponent;
      }();

      _EntityTypeComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_2__.ModelService
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_9__.MessageService
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_3__.IdentityService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _EntityTypeComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-entity-type',
        template: _raw_loader_entity_type_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_entity_type_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EntityTypeComponent);
      /***/
    },

    /***/
    53670:
    /*!***********************************************!*\
      !*** ./src/app/model/model-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModelRoutingModule": function ModelRoutingModule() {
          return (
            /* binding */
            _ModelRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./model.component */
      81027);
      /* harmony import */


      var _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./entity-type/entity-type.component */
      14755);
      /* harmony import */


      var _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entity-type/entity-type-detail/entity-type-detail.component */
      15515);
      /* harmony import */


      var _relation_relation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./relation/relation.component */
      2934);
      /* harmony import */


      var _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./relation/relation-detail/relation-detail.component */
      7262);
      /* harmony import */


      var _work_protection_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../work-protection.guard */
      24023);
      /* harmony import */


      var _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./relationship/relationship.component */
      89012);
      /* harmony import */


      var _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./relationship/relationship-detail/relationship-detail.component */
      25916);
      /* harmony import */


      var _role_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./role/role.component */
      23728);
      /* harmony import */


      var _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./role/role-detail/role-detail.component */
      38646);
      /* harmony import */


      var _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./data-element/data-element.component */
      11079);
      /* harmony import */


      var _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./data-domain/data-domain.component */
      30936);
      /* harmony import */


      var _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./data-domain/data-domain-detail/data-domain-detail.component */
      91974);
      /* harmony import */


      var _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./data-element/data-element-detail/data-element-detail.component */
      61231);
      /* harmony import */


      var _search_help_search_help_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./search-help/search-help.component */
      65021);
      /* harmony import */


      var _search_help_search_help_detail_search_help_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./search-help/search-help-detail/search-help-detail.component */
      23735);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        component: _model_component__WEBPACK_IMPORTED_MODULE_0__.ModelComponent,
        children: [{
          path: 'entity-type',
          component: _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_1__.EntityTypeComponent,
          children: [{
            path: ':entityID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_5__.WorkProtectionGuard],
            component: _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_2__.EntityTypeDetailComponent
          }]
        }, {
          path: 'role',
          component: _role_role_component__WEBPACK_IMPORTED_MODULE_8__.RoleComponent,
          children: [{
            path: ':roleID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_5__.WorkProtectionGuard],
            component: _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_9__.RoleDetailComponent
          }]
        }, {
          path: 'relation',
          component: _relation_relation_component__WEBPACK_IMPORTED_MODULE_3__.RelationComponent,
          children: [{
            path: ':relationID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_5__.WorkProtectionGuard],
            component: _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_4__.RelationDetailComponent
          }]
        }, {
          path: 'relationship',
          component: _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_6__.RelationshipComponent,
          children: [{
            path: ':relationshipID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_5__.WorkProtectionGuard],
            component: _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_7__.RelationshipDetailComponent
          }]
        }, {
          path: 'data-element',
          component: _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_10__.DataElementComponent,
          children: [{
            path: ':elementID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_5__.WorkProtectionGuard],
            component: _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_13__.DataElementDetailComponent
          }]
        }, {
          path: 'data-domain',
          component: _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_11__.DataDomainComponent,
          children: [{
            path: ':domainID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_5__.WorkProtectionGuard],
            component: _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_12__.DataDomainDetailComponent
          }]
        }, {
          path: 'search-help',
          component: _search_help_search_help_component__WEBPACK_IMPORTED_MODULE_14__.SearchHelpComponent,
          children: [{
            path: ':searchHelpID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_5__.WorkProtectionGuard],
            component: _search_help_search_help_detail_search_help_detail_component__WEBPACK_IMPORTED_MODULE_15__.SearchHelpDetailComponent
          }]
        }, {
          path: '**',
          redirectTo: '/model/entity-type',
          pathMatch: 'full'
        }]
      }];

      var _ModelRoutingModule = function ModelRoutingModule() {
        _classCallCheck(this, ModelRoutingModule);
      };

      _ModelRoutingModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
      })], _ModelRoutingModule);
      /***/
    },

    /***/
    5021:
    /*!*******************************************!*\
      !*** ./src/app/model/model-validators.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniqueSearchHelpValidator": function UniqueSearchHelpValidator() {
          return (
            /* binding */
            _UniqueSearchHelpValidator
          );
        },

        /* harmony export */
        "UniqueDataDomainValidator": function UniqueDataDomainValidator() {
          return (
            /* binding */
            _UniqueDataDomainValidator
          );
        },

        /* harmony export */
        "UniqueDataElementValidator": function UniqueDataElementValidator() {
          return (
            /* binding */
            _UniqueDataElementValidator
          );
        },

        /* harmony export */
        "UniqueRoleValidator": function UniqueRoleValidator() {
          return (
            /* binding */
            _UniqueRoleValidator
          );
        },

        /* harmony export */
        "UniqueRelationValidator": function UniqueRelationValidator() {
          return (
            /* binding */
            _UniqueRelationValidator
          );
        },

        /* harmony export */
        "UniqueRelationshipValidator": function UniqueRelationshipValidator() {
          return (
            /* binding */
            _UniqueRelationshipValidator
          );
        },

        /* harmony export */
        "UniqueEntityTypeValidator": function UniqueEntityTypeValidator() {
          return (
            /* binding */
            _UniqueEntityTypeValidator
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./model.service */
      46461);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // noinspection JSAnnotator


      var _UniqueSearchHelpValidator = /*#__PURE__*/function () {
        function UniqueSearchHelpValidator(entityService, modelService) {
          _classCallCheck(this, UniqueSearchHelpValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueSearchHelpValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this28 = this;

            return this.entityService.getSearchHelpDesc(ctrl.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              if (data['msgName'] && data['msgName'] === 'SEARCH_HELP_NOT_EXIST') {
                _this28.modelService.updateSearchHelpID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function () {
              return null;
            }));
          }
        }]);

        return UniqueSearchHelpValidator;
      }();

      _UniqueSearchHelpValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_0__.ModelService
        }];
      };

      _UniqueSearchHelpValidator = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _UniqueSearchHelpValidator); // noinspection JSAnnotator

      var _UniqueDataDomainValidator = /*#__PURE__*/function () {
        function UniqueDataDomainValidator(entityService, modelService) {
          _classCallCheck(this, UniqueDataDomainValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueDataDomainValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this29 = this;

            return this.entityService.getDataDomainDesc(ctrl.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              if (data['msgName'] && data['msgName'] === 'DATA_DOMAIN_NOT_EXIST') {
                _this29.modelService.updateDataDomainID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function () {
              return null;
            }));
          }
        }]);

        return UniqueDataDomainValidator;
      }();

      _UniqueDataDomainValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_0__.ModelService
        }];
      };

      _UniqueDataDomainValidator = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _UniqueDataDomainValidator); // noinspection JSAnnotator

      var _UniqueDataElementValidator = /*#__PURE__*/function () {
        function UniqueDataElementValidator(entityService, modelService) {
          _classCallCheck(this, UniqueDataElementValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueDataElementValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this30 = this;

            return this.entityService.getDataElementDesc(ctrl.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              if (data['msgName'] && data['msgName'] === 'DATA_ELEMENT_NOT_EXIST') {
                _this30.modelService.updateDataElementID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function () {
              return null;
            }));
          }
        }]);

        return UniqueDataElementValidator;
      }();

      _UniqueDataElementValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_0__.ModelService
        }];
      };

      _UniqueDataElementValidator = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _UniqueDataElementValidator); // noinspection JSAnnotator

      var _UniqueRoleValidator = /*#__PURE__*/function () {
        function UniqueRoleValidator(entityService, modelService) {
          _classCallCheck(this, UniqueRoleValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueRoleValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this31 = this;

            return this.entityService.getRoleDesc(ctrl.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              if (data['msgName'] && data['msgName'] === 'ROLE_NOT_EXIST') {
                _this31.modelService.updateRoleID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function () {
              return null;
            }));
          }
        }]);

        return UniqueRoleValidator;
      }();

      _UniqueRoleValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_0__.ModelService
        }];
      };

      _UniqueRoleValidator = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _UniqueRoleValidator); // noinspection JSAnnotator

      var _UniqueRelationValidator = /*#__PURE__*/function () {
        function UniqueRelationValidator(entityService, modelService) {
          _classCallCheck(this, UniqueRelationValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueRelationValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this32 = this;

            if (ctrl.value === 'r_') {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
            }

            return this.entityService.getRelationDesc(ctrl.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              if (data['msgName'] && data['msgName'] === 'RELATION_NOT_EXIST') {
                _this32.modelService.updateRelationID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function () {
              return null;
            }));
          }
        }]);

        return UniqueRelationValidator;
      }();

      _UniqueRelationValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_0__.ModelService
        }];
      };

      _UniqueRelationValidator = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _UniqueRelationValidator); // noinspection JSAnnotator

      var _UniqueRelationshipValidator = /*#__PURE__*/function () {
        function UniqueRelationshipValidator(entityService, modelService) {
          _classCallCheck(this, UniqueRelationshipValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueRelationshipValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this33 = this;

            if (ctrl.value === 'rs_') {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
            }

            return this.entityService.getRelationshipDesc(ctrl.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              if (data['msgName'] && data['msgName'] === 'RELATIONSHIP_NOT_EXIST') {
                _this33.modelService.updateRelationshipID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function () {
              return null;
            }));
          }
        }]);

        return UniqueRelationshipValidator;
      }();

      _UniqueRelationshipValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_0__.ModelService
        }];
      };

      _UniqueRelationshipValidator = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _UniqueRelationshipValidator); // noinspection JSAnnotator

      var _UniqueEntityTypeValidator = /*#__PURE__*/function () {
        function UniqueEntityTypeValidator(entityService, modelService) {
          _classCallCheck(this, UniqueEntityTypeValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueEntityTypeValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this34 = this;

            return this.entityService.getEntityTypeDesc(ctrl.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              if (data['msgName'] && data['msgName'] === 'ENTITY_TYPE_NOT_EXIST') {
                _this34.modelService.updateEntityID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function () {
              return null;
            }));
          }
        }]);

        return UniqueEntityTypeValidator;
      }();

      _UniqueEntityTypeValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_0__.ModelService
        }];
      };

      _UniqueEntityTypeValidator = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _UniqueEntityTypeValidator);
      /***/
    },

    /***/
    81027:
    /*!******************************************!*\
      !*** ./src/app/model/model.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModelComponent": function ModelComponent() {
          return (
            /* binding */
            _ModelComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_model_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./model.component.html */
      14321);
      /* harmony import */


      var _model_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./model.component.css */
      19871);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ModelComponent = /*#__PURE__*/function () {
        function ModelComponent() {
          _classCallCheck(this, ModelComponent);
        }

        _createClass(ModelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ModelComponent;
      }();

      _ModelComponent.ctorParameters = function () {
        return [];
      };

      _ModelComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-model',
        template: _raw_loader_model_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_model_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ModelComponent);
      /***/
    },

    /***/
    28010:
    /*!***************************************!*\
      !*** ./src/app/model/model.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModelModule": function ModelModule() {
          return (
            /* binding */
            _ModelModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./model.component */
      81027);
      /* harmony import */


      var _model_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./model-routing.module */
      53670);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entity-type/entity-type.component */
      14755);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./entity-type/entity-type-detail/entity-type-detail.component */
      15515);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./attribute-meta/attribute-meta.component */
      70107);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _relation_relation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./relation/relation.component */
      2934);
      /* harmony import */


      var _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./relation/relation-detail/relation-detail.component */
      7262);
      /* harmony import */


      var _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./relationship/relationship.component */
      89012);
      /* harmony import */


      var _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./relationship/relationship-detail/relationship-detail.component */
      25916);
      /* harmony import */


      var _role_role_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./role/role.component */
      23728);
      /* harmony import */


      var _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./role/role-detail/role-detail.component */
      38646);
      /* harmony import */


      var _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./data-element/data-element.component */
      11079);
      /* harmony import */


      var _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./data-domain/data-domain.component */
      30936);
      /* harmony import */


      var _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./data-domain/data-domain-detail/data-domain-detail.component */
      91974);
      /* harmony import */


      var _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./data-element/data-element-detail/data-element-detail.component */
      61231);
      /* harmony import */


      var _search_help_search_help_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./search-help/search-help.component */
      65021);
      /* harmony import */


      var _search_help_search_help_detail_search_help_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./search-help/search-help-detail/search-help-detail.component */
      23735);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! jor-angular */
      43340);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ModelModule = function ModelModule() {
        _classCallCheck(this, ModelModule);
      };

      _ModelModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _model_routing_module__WEBPACK_IMPORTED_MODULE_1__.ModelRoutingModule, ui_message_angular__WEBPACK_IMPORTED_MODULE_21__.MessageModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule, jor_angular__WEBPACK_IMPORTED_MODULE_23__.JorAngularModule],
        declarations: [_model_component__WEBPACK_IMPORTED_MODULE_0__.ModelComponent, _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_2__.EntityTypeComponent, _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_3__.EntityTypeDetailComponent, _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_4__.AttributeMetaComponent, _relation_relation_component__WEBPACK_IMPORTED_MODULE_5__.RelationComponent, _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_6__.RelationDetailComponent, _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_7__.RelationshipComponent, _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_8__.RelationshipDetailComponent, _role_role_component__WEBPACK_IMPORTED_MODULE_9__.RoleComponent, _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_10__.RoleDetailComponent, _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_11__.DataElementComponent, _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_14__.DataElementDetailComponent, _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_12__.DataDomainComponent, _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_13__.DataDomainDetailComponent, _search_help_search_help_component__WEBPACK_IMPORTED_MODULE_15__.SearchHelpComponent, _search_help_search_help_detail_search_help_detail_component__WEBPACK_IMPORTED_MODULE_16__.SearchHelpDetailComponent]
      })], _ModelModule);
      /***/
    },

    /***/
    46461:
    /*!****************************************!*\
      !*** ./src/app/model/model.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModelService": function ModelService() {
          return (
            /* binding */
            _ModelService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ModelService = /*#__PURE__*/function () {
        function ModelService() {
          _classCallCheck(this, ModelService);

          this.dataTypes = [{
            key: 1,
            value: 'Char'
          }, {
            key: 2,
            value: 'Integer'
          }, {
            key: 3,
            value: 'Boolean'
          }, {
            key: 4,
            value: 'Decimal'
          }, {
            key: 5,
            value: 'String'
          }, {
            key: 6,
            value: 'Binary'
          }, {
            key: 7,
            value: 'Date'
          }, {
            key: 8,
            value: 'Timestamp'
          }];
          this.dialogAnswer = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.dialogAnswer$ = this.dialogAnswer.asObservable();
          this.isSearchListShown = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.isSearchListShown$ = this.isSearchListShown.asObservable();
          this.selectedEntityTypeSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.theSelectedEntityType$ = this.selectedEntityTypeSource.asObservable();
          this.selectedRelationSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.theSelectedRelation$ = this.selectedRelationSource.asObservable();
          this.selectedRelationshipSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.theSelectedRelationship$ = this.selectedRelationshipSource.asObservable();
          this.selectedRoleSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.theSelectedRole$ = this.selectedRoleSource.asObservable();
          this.selectedDataElementSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.theSelectedDataElement$ = this.selectedDataElementSource.asObservable();
          this.selectedDataDomainSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.theSelectedDataDomain$ = this.selectedDataDomainSource.asObservable();
          this.selectedSearchHelpSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.theSelectedSearchHelp$ = this.selectedSearchHelpSource.asObservable();
        }

        _createClass(ModelService, [{
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown.next(true);
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown.next(false);
          }
        }, {
          key: "updateEntityID",
          value: function updateEntityID(entityID) {
            this.theSelectedEntityType.ENTITY_ID = entityID;
            this.selectedEntityTypeSource.next(this.theSelectedEntityType);
          }
        }, {
          key: "updateEntityDesc",
          value: function updateEntityDesc(entityDesc) {
            this.theSelectedEntityType.ENTITY_DESC = entityDesc;
            this.selectedEntityTypeSource.next(this.theSelectedEntityType);
          }
        }, {
          key: "setSelectedEntityType",
          value: function setSelectedEntityType(entityType) {
            this.theSelectedEntityType = entityType;
          }
        }, {
          key: "updateRelationID",
          value: function updateRelationID(relationID) {
            this.theSelectedRelation.RELATION_ID = relationID;
            this.selectedRelationSource.next(this.theSelectedRelation);
          }
        }, {
          key: "updateRelationDesc",
          value: function updateRelationDesc(relationDesc) {
            this.theSelectedRelation.RELATION_DESC = relationDesc;
            this.selectedRelationSource.next(this.theSelectedRelation);
          }
        }, {
          key: "setSelectedRelation",
          value: function setSelectedRelation(relation) {
            this.theSelectedRelation = relation;
          }
        }, {
          key: "updateRelationshipID",
          value: function updateRelationshipID(relationshipID) {
            this.theSelectedRelationship.RELATIONSHIP_ID = relationshipID;
            this.selectedRelationshipSource.next(this.theSelectedRelationship);
          }
        }, {
          key: "updateRelationshipDesc",
          value: function updateRelationshipDesc(relationshipDesc) {
            this.theSelectedRelationship.RELATIONSHIP_DESC = relationshipDesc;
            this.selectedRelationshipSource.next(this.theSelectedRelationship);
          }
        }, {
          key: "setSelectedRelationship",
          value: function setSelectedRelationship(relationship) {
            this.theSelectedRelationship = relationship;
          }
        }, {
          key: "updateRoleID",
          value: function updateRoleID(roleID) {
            this.theSelectedRole.ROLE_ID = roleID;
            this.selectedRoleSource.next(this.theSelectedRole);
          }
        }, {
          key: "updateRoleDesc",
          value: function updateRoleDesc(roleDesc) {
            this.theSelectedRole.ROLE_DESC = roleDesc;
            this.selectedRoleSource.next(this.theSelectedRole);
          }
        }, {
          key: "setSelectedRole",
          value: function setSelectedRole(role) {
            this.theSelectedRole = role;
          }
        }, {
          key: "updateDataElementID",
          value: function updateDataElementID(elementID) {
            this.theSelectedDataElement.ELEMENT_ID = elementID;
            this.selectedDataElementSource.next(this.theSelectedDataElement);
          }
        }, {
          key: "updateDataElementDesc",
          value: function updateDataElementDesc(elementDesc) {
            this.theSelectedDataElement.ELEMENT_DESC = elementDesc;
            this.selectedDataElementSource.next(this.theSelectedDataElement);
          }
        }, {
          key: "setSelectedDataElement",
          value: function setSelectedDataElement(element) {
            this.theSelectedDataElement = element;
          }
        }, {
          key: "updateDataDomainID",
          value: function updateDataDomainID(domainID) {
            this.theSelectedDataDomain.DOMAIN_ID = domainID;
            this.selectedDataDomainSource.next(this.theSelectedDataDomain);
          }
        }, {
          key: "updateDataDomainDesc",
          value: function updateDataDomainDesc(domainDesc) {
            this.theSelectedDataDomain.DOMAIN_DESC = domainDesc;
            this.selectedDataDomainSource.next(this.theSelectedDataDomain);
          }
        }, {
          key: "setSelectedDataDomain",
          value: function setSelectedDataDomain(domain) {
            this.theSelectedDataDomain = domain;
          }
        }, {
          key: "updateSearchHelpID",
          value: function updateSearchHelpID(searchHelpID) {
            this.theSelectedSearchHelp.SEARCH_HELP_ID = searchHelpID;
            this.selectedSearchHelpSource.next(this.theSelectedSearchHelp);
          }
        }, {
          key: "updateSearchHelpDesc",
          value: function updateSearchHelpDesc(searchHelpDesc) {
            this.theSelectedSearchHelp.SEARCH_HELP_DESC = searchHelpDesc;
            this.selectedSearchHelpSource.next(this.theSelectedSearchHelp);
          }
        }, {
          key: "setSelectedSearchHelp",
          value: function setSelectedSearchHelp(searchHelp) {
            this.theSelectedSearchHelp = searchHelp;
          }
        }, {
          key: "sendDialogAnswer",
          value: function sendDialogAnswer(answer) {
            this.dialogAnswer.next(answer);
          }
        }]);

        return ModelService;
      }();

      _ModelService = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _ModelService);
      /***/
    },

    /***/
    7262:
    /*!*****************************************************************************!*\
      !*** ./src/app/model/relation/relation-detail/relation-detail.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RelationDetailComponent": function RelationDetailComponent() {
          return (
            /* binding */
            _RelationDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_relation_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./relation-detail.component.html */
      90185);
      /* harmony import */


      var _relation_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./relation-detail.component.css */
      20670);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../msgStore */
      87534);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../attribute-meta/attribute-meta.component */
      70107);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../model.service */
      46461);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../dialog.service */
      51969);
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../model-validators */
      5021);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RelationDetailComponent = /*#__PURE__*/function () {
        function RelationDetailComponent(route, router, fb, uniqueRelationValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, RelationDetailComponent);

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
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_2__.msgStore, 'EN');
        }

        _createClass(RelationDetailComponent, [{
          key: "associationFormArray",
          get: function get() {
            return this.relationForm.get('ASSOCIATIONS');
          }
        }, {
          key: "fieldMapFormArray",
          get: function get() {
            if (this.currentAssociationForm) {
              return this.currentAssociationForm.get('FIELDS_MAPPING');
            } else {
              return null;
            }
          }
        }, {
          key: "displayFieldMapModal",
          get: function get() {
            return this.isFieldMapShown ? 'block' : 'none';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this35 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (params) {
              var relationID = params.get('relationID');

              if (relationID === 'new') {
                var relation = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.RelationMeta();
                relation.RELATION_ID = 'r_';
                relation.RELATION_DESC = '';
                relation.ATTRIBUTES = [];
                _this35.isNewMode = true;
                _this35.readonly = false;
                _this35.bypassProtection = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(relation);
              } else {
                _this35.readonly = true;
                _this35.isNewMode = false;
                return _this35.entityService.getRelationMeta(params.get('relationID'));
              }
            })).subscribe(function (data) {
              if ('RELATION_ID' in data) {
                // If the return data is a message
                _this35.messageService.clearMessages();

                if (history.state.message) {
                  _this35.messageService.report(history.state.message);
                }

                _this35.relationMeta = data;

                _this35._generateRelationForm();
              } else {
                _this35.messageService.clearMessages();

                _this35.relationMeta = null;
                _this35.relationForm = null;

                if (data instanceof Array) {
                  data.forEach(function (err) {
                    return _this35.messageService.add(err);
                  });
                } else {
                  _this35.messageService.report(data);
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this35.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(fieldName, control, rowID) {
            if (!this.relationSearchHelp) {
              this.relationSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.SearchHelp();
              this.relationSearchHelp.OBJECT_NAME = 'Relation';

              this.relationSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listRelation(searchTerm);
                };
              }(this.entityService);

              this.relationSearchHelp.BEHAVIOUR = 'A';
              this.relationSearchHelp.MULTI = false;
              this.relationSearchHelp.FUZZY_SEARCH = true;
              this.relationSearchHelp.FIELDS = [{
                FIELD_NAME: 'RELATION_ID',
                LIST_HEADER_TEXT: 'Relation',
                IMPORT: true,
                EXPORT: true,
                IE_FIELD_NAME: fieldName,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'RELATION_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.relationSearchHelp.READ_ONLY = this.readonly;
            }

            var afterExportFn = function (context, ruleIdx) {
              return function () {
                return context.onChangeRightRelationID(ruleIdx, true);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.relationSearchHelp, control, afterExportFn);
          }
        }, {
          key: "_generateRelationForm",
          value: function _generateRelationForm() {
            var _this36 = this;

            this.relationForm = this.fb.group({});
            this.relationForm.addControl('RELATION_ID', new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.relationMeta.RELATION_ID, {
              updateOn: 'blur'
            }));

            if (this.isNewMode) {
              this.relationForm.get('RELATION_ID').setValidators(this._validateRelationId);
              this.relationForm.get('RELATION_ID').setAsyncValidators(this.uniqueRelationValidator.validate.bind(this.uniqueRelationValidator));
            }

            this.relationForm.addControl('RELATION_DESC', new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.relationMeta.RELATION_DESC)); // Compose Associations

            var formArray = [];

            if (this.relationMeta.ASSOCIATIONS) {
              this.relationMeta.ASSOCIATIONS.forEach(function (association) {
                var fieldsMapArray = [];
                association.FIELDS_MAPPING.forEach(function (fieldsMap) {
                  fieldsMapArray.push(_this36.fb.group({
                    LEFT_FIELD: [fieldsMap.LEFT_FIELD],
                    RIGHT_FIELD: [fieldsMap.RIGHT_FIELD]
                  }));
                });
                formArray.push(_this36.fb.group({
                  ASSOCIATION_NAME: [association.ASSOCIATION_NAME],
                  RIGHT_RELATION_ID: [association.RIGHT_RELATION_ID],
                  CARDINALITY: [{
                    value: association.CARDINALITY,
                    disabled: _this36.readonly
                  }],
                  FOREIGN_KEY_CHECK: [{
                    value: association.FOREIGN_KEY_CHECK,
                    disabled: _this36.readonly || association.CARDINALITY === '[0..1]' || association.CARDINALITY === '[0..N]'
                  }],
                  FIELDS_MAPPING: _this36.fb.array(fieldsMapArray)
                }));
              });
            }

            if (this.isNewMode) {
              this._appendEmptyAssociation(formArray);
            }

            this.relationForm.addControl('ASSOCIATIONS', new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray(formArray));
          }
        }, {
          key: "_appendEmptyAssociation",
          value: function _appendEmptyAssociation(formArray) {
            formArray.push(this.fb.group({
              ASSOCIATION_NAME: [''],
              RIGHT_RELATION_ID: [''],
              CARDINALITY: ['[0..1]'],
              FOREIGN_KEY_CHECK: [{
                value: 0,
                disabled: true
              }],
              FIELDS_MAPPING: this.fb.array([])
            }));
          }
        }, {
          key: "_validateRelationId",
          value: function _validateRelationId(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Relation ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().toLowerCase().substr(0, 2) !== 'r_') {
              return {
                message: 'Relation name must be started with "r_"!'
              };
            }

            if (c.value.toString().length < 3) {
              return {
                message: 'Relation name must have length larger than 2!'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this37 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Entity Type?').subscribe(function (confirm) {
                if (confirm) {
                  _this37._switch2DisplayMode();

                  _this37.relationMeta = null;

                  _this37.modelService.sendDialogAnswer('OK');
                } else {
                  _this37.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.relationForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this37._generateRelationForm();

                    _this37.relationForm.reset(_this37.relationForm.value);

                    _this37._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this.readonly = false;
              this.associationFormArray.controls.forEach(function (associationFormGroup) {
                associationFormGroup.get('CARDINALITY').enable();

                if (associationFormGroup.get('CARDINALITY').value === '[1..1]' || associationFormGroup.get('CARDINALITY').value === '[1..N]') {
                  associationFormGroup.get('FOREIGN_KEY_CHECK').enable();
                }
              });

              this._appendEmptyAssociation(this.associationFormArray);

              this.attrComponent.switchEditDisplay(this.readonly);
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            var lastIndex = this.associationFormArray.length - 1;

            while (lastIndex >= 0 && this.associationFormArray.controls[lastIndex].get('ASSOCIATION_NAME').value.trim() === '') {
              this.associationFormArray.removeAt(lastIndex);
              lastIndex--;
            }

            this.associationFormArray.controls.forEach(function (associationFormGroup) {
              associationFormGroup.get('CARDINALITY').disable();
              associationFormGroup.get('FOREIGN_KEY_CHECK').disable();
            });
            this.attrComponent.switchEditDisplay(this.readonly);
          }
        }, {
          key: "onChangeRelationID",
          value: function onChangeRelationID() {
            this.modelService.updateRelationID(this.relationForm.get('RELATION_ID').value);
          }
        }, {
          key: "onChangeRelationDesc",
          value: function onChangeRelationDesc() {
            this.modelService.updateRelationDesc(this.relationForm.get('RELATION_DESC').value);
          }
        }, {
          key: "deleteAssociation",
          value: function deleteAssociation(index) {
            if (index !== this.associationFormArray.length - 1) {
              this.associationFormArray.removeAt(index);
              this.associationFormArray.markAsDirty();
            }
          }
        }, {
          key: "openFieldMapModal",
          value: function openFieldMapModal(index) {
            var _this38 = this;

            this.currentAssociationForm = this.associationFormArray.controls[index];

            if (this.currentAssociationForm.get('RIGHT_RELATION_ID').value.trim() === '') {
              return;
            }

            this.entityService.getRelationMeta(this.currentAssociationForm.get('RIGHT_RELATION_ID').value).subscribe(function (data) {
              _this38.currentRightRelationMeta = data;
            });

            if (this.readonly === false) {
              this.fieldMapFormArray.push(this.fb.group({
                LEFT_FIELD: [''],
                RIGHT_FIELD: ['']
              }));
            }

            this.currentAssociation = this.relationMeta.ASSOCIATIONS ? this.relationMeta.ASSOCIATIONS[index] : null;
            this.isFieldMapShown = true;
          }
        }, {
          key: "closeFieldMapModal",
          value: function closeFieldMapModal() {
            // this.currentAssociationForm.setValue(this.currentAssociationForm.value); // Or the value won't be updated.
            var lastIndex = this.fieldMapFormArray.length - 1;

            while (lastIndex >= 0 && this.fieldMapFormArray.controls[lastIndex].get('RIGHT_FIELD').value.trim() === '') {
              this.fieldMapFormArray.removeAt(lastIndex);
              lastIndex--;
            }

            this.isFieldMapShown = false;
          }
        }, {
          key: "deleteFieldMap",
          value: function deleteFieldMap(index) {
            if (index !== this.fieldMapFormArray.length - 1) {
              this.fieldMapFormArray.removeAt(index);
              this.fieldMapFormArray.markAsDirty();
            }
          }
        }, {
          key: "onChangeAssociationName",
          value: function onChangeAssociationName(index) {
            var currentAssocFormGroup = this.associationFormArray.at(index);

            if (this.associationFormArray.controls.findIndex(function (assocCtrl, i) {
              return i !== index && assocCtrl.get('ASSOCIATION_NAME').value === currentAssocFormGroup.get('ASSOCIATION_NAME').value;
            }) !== -1) {
              currentAssocFormGroup.get('ASSOCIATION_NAME').setErrors({
                message: 'Duplicate association name!'
              });
              return;
            }

            if (index === this.associationFormArray.length - 1 && currentAssocFormGroup.value.ASSOCIATION_NAME.trim() !== '') {
              this._appendEmptyAssociation(this.associationFormArray);
            }
          }
        }, {
          key: "onChangeRightRelationID",
          value: function onChangeRightRelationID(index, isExportedFromSH) {
            var currentAssocFormGroup = this.associationFormArray.controls[index];

            if (currentAssocFormGroup.get('RIGHT_RELATION_ID').value === this.relationMeta.RELATION_ID) {
              currentAssocFormGroup.get('RIGHT_RELATION_ID').setErrors({
                message: 'Self association is not allowed'
              });
              return;
            }

            if (!isExportedFromSH) {
              this.entityService.getRelationDesc(currentAssocFormGroup.value.RIGHT_RELATION_ID).subscribe(function (data) {
                if (data['msgCat']) {
                  currentAssocFormGroup.get('RIGHT_RELATION_ID').setErrors({
                    message: data['msgShortText']
                  });
                }
              });
            }
          }
        }, {
          key: "onChangeCardinality",
          value: function onChangeCardinality(formGroup) {
            var cardinality = formGroup.get('CARDINALITY');

            if (cardinality.value === '[1..1]' || cardinality.value === '[1..n]') {
              formGroup.get('FOREIGN_KEY_CHECK').enable();
            } else {
              formGroup.get('FOREIGN_KEY_CHECK').setValue(0);
              formGroup.get('FOREIGN_KEY_CHECK').markAsDirty();
              formGroup.get('FOREIGN_KEY_CHECK').disable();
            }
          }
        }, {
          key: "onChangeLeftField",
          value: function onChangeLeftField(index) {
            var currentFieldMapFormGroup = this.fieldMapFormArray.controls[index];

            if (this.relationMeta.ATTRIBUTES.findIndex(function (attribute) {
              return attribute.ATTR_NAME === currentFieldMapFormGroup.get('LEFT_FIELD').value;
            }) === -1) {
              currentFieldMapFormGroup.get('LEFT_FIELD').setErrors({
                message: 'Field Not Exist'
              });
              return;
            }

            if (this.fieldMapFormArray.controls.findIndex(function (fieldMapCtrl, i) {
              return i !== index && fieldMapCtrl.get('LEFT_FIELD') && fieldMapCtrl.get('RIGHT_FIELD') && fieldMapCtrl.get('LEFT_FIELD').value === currentFieldMapFormGroup.get('LEFT_FIELD').value && fieldMapCtrl.get('RIGHT_FIELD').value === currentFieldMapFormGroup.get('RIGHT_FIELD').value;
            }) !== -1) {
              currentFieldMapFormGroup.get('LEFT_FIELD').setErrors({
                message: 'Duplicate Fields Mapping'
              });
              return;
            }

            if (index === this.fieldMapFormArray.length - 1 && currentFieldMapFormGroup.value.LEFT_FIELD.trim() !== '') {
              this.fieldMapFormArray.push(this.fb.group({
                LEFT_FIELD: [''],
                RIGHT_FIELD: ['']
              }));
            }
          }
        }, {
          key: "onChangeRightField",
          value: function onChangeRightField(index) {
            var currentFieldMapFormGroup = this.fieldMapFormArray.controls[index];

            if (this.currentRightRelationMeta && this.currentRightRelationMeta.ATTRIBUTES.findIndex(function (attribute) {
              return attribute.ATTR_NAME === currentFieldMapFormGroup.get('RIGHT_FIELD').value;
            }) === -1) {
              currentFieldMapFormGroup.get('RIGHT_FIELD').setErrors({
                message: 'Field Not Exist'
              });
              return;
            }

            if (this.fieldMapFormArray.controls.findIndex(function (fieldMapCtrl, i) {
              return i !== index && fieldMapCtrl.get('LEFT_FIELD') && fieldMapCtrl.get('RIGHT_FIELD') && fieldMapCtrl.get('LEFT_FIELD').value === currentFieldMapFormGroup.get('LEFT_FIELD').value && fieldMapCtrl.get('RIGHT_FIELD').value === currentFieldMapFormGroup.get('RIGHT_FIELD').value;
            }) !== -1) {
              currentFieldMapFormGroup.get('RIGHT_FIELD').setErrors({
                message: 'Duplicate Fields Mapping'
              });
              return;
            }

            if (index === this.fieldMapFormArray.length - 1 && currentFieldMapFormGroup.value.RIGHT_FIELD.trim() !== '') {
              this.fieldMapFormArray.push(this.fb.group({
                LEFT_FIELD: [''],
                RIGHT_FIELD: ['']
              }));
            }
          }
        }, {
          key: "oldAssociationName",
          value: function oldAssociationName(formGroup) {
            return this.relationMeta.ASSOCIATIONS ? this.relationMeta.ASSOCIATIONS.findIndex(function (association) {
              return association.ASSOCIATION_NAME === formGroup.get('ASSOCIATION_NAME').value;
            }) !== -1 : false;
          }
        }, {
          key: "oldFieldMap",
          value: function oldFieldMap(formGroup) {
            return this.currentAssociation ? this.currentAssociation.FIELDS_MAPPING.findIndex(function (fieldMap) {
              return fieldMap.LEFT_FIELD === formGroup.get('LEFT_FIELD').value && fieldMap.RIGHT_FIELD === formGroup.get('RIGHT_FIELD').value;
            }) !== -1 : false;
          }
        }, {
          key: "onGoToRelation",
          value: function onGoToRelation(relationID) {
            this.router.navigate(['/model/relation', relationID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this39 = this;

            if (this.isNewMode || !this.bypassProtection && this.relationForm && this.relationForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this39.modelService.sendDialogAnswer('OK');
                } else {
                  _this39.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this40 = this;

            if (!this.relationForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (!this.relationForm.valid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedRelation['action'] = 'add';
              this.changedRelation['RELATION_ID'] = this.relationForm.controls['RELATION_ID'].value;
            } else {
              this.changedRelation['action'] = 'update';
              this.changedRelation['RELATION_ID'] = this.relationMeta.RELATION_ID;
            }

            if (this.relationForm.controls['RELATION_DESC'].dirty) {
              this.changedRelation['RELATION_DESC'] = this.relationForm.controls['RELATION_DESC'].value;
            }

            var checkErrs = this.attrComponent.checkAttributes();

            if (checkErrs.length > 0) {
              checkErrs.forEach(function (errMsg) {
                return _this40.messageService.add(errMsg);
              });
              return;
            }

            this.changedRelation['ATTRIBUTES'] = this.attrComponent.processChangedAttributes();

            if (!this._processChangedAssociation()) {
              return;
            }

            this.entityService.saveRelation(this.changedRelation).subscribe(function (data) {
              return _this40._postActivityAfterSavingRelation(data);
            });
          }
        }, {
          key: "_processChangedAssociation",
          value: function _processChangedAssociation() {
            var _this41 = this;

            var changedAssociations = [];
            var errMessages = [];

            if (!this.associationFormArray.dirty) {
              return true;
            }

            this.changedRelation['ASSOCIATIONS'] = changedAssociations;
            this.associationFormArray.controls.forEach(function (associationControl) {
              if (!associationControl.get('ASSOCIATION_NAME').value || !associationControl.get('RIGHT_RELATION_ID').value) {
                return;
              }

              var changedAssociation = {};

              var associationMeta = _this41.relationMeta.ASSOCIATIONS.find(function (association) {
                return associationControl.get('ASSOCIATION_NAME').value === association.ASSOCIATION_NAME;
              });

              if (!associationMeta) {
                // New Add Case
                changedAssociation['action'] = 'add';
                changedAssociation['ASSOCIATION_NAME'] = associationControl.get('ASSOCIATION_NAME').value;
                changedAssociation['RIGHT_RELATION_ID'] = associationControl.get('RIGHT_RELATION_ID').value;
                changedAssociation['CARDINALITY'] = associationControl.get('CARDINALITY').value;
                changedAssociation['FOREIGN_KEY_CHECK'] = associationControl.get('FOREIGN_KEY_CHECK').value;
                changedAssociation['FIELDS_MAPPING'] = [];
                var fieldMapArray = associationControl.get('FIELDS_MAPPING');

                if (fieldMapArray.length === 0) {
                  errMessages.push(_this41.messageService.generateMessage('MODEL', 'MISS_RELATION_ASSOCIATION_FIELD_MAPPING', 'E', changedAssociation['RIGHT_RELATION_ID']));
                  return;
                }

                fieldMapArray.controls.forEach(function (fieldMap) {
                  changedAssociation['FIELDS_MAPPING'].push({
                    action: 'add',
                    RIGHT_FIELD: fieldMap.get('RIGHT_FIELD').value,
                    LEFT_FIELD: fieldMap.get('LEFT_FIELD').value
                  });
                });
                changedAssociations.push(changedAssociation);
              } else {
                if (associationControl.dirty) {
                  // Change Case
                  changedAssociation['action'] = 'update';
                  changedAssociation['ASSOCIATION_NAME'] = associationControl.get('ASSOCIATION_NAME').value;

                  if (associationControl.get('RIGHT_RELATION_ID').dirty) {
                    changedAssociation['RIGHT_RELATION_ID'] = associationControl.get('RIGHT_RELATION_ID').value;
                  }

                  if (associationControl.get('CARDINALITY').dirty) {
                    changedAssociation['CARDINALITY'] = associationControl.get('CARDINALITY').value;
                  }

                  if (associationControl.get('FOREIGN_KEY_CHECK').dirty) {
                    changedAssociation['FOREIGN_KEY_CHECK'] = associationControl.get('FOREIGN_KEY_CHECK').value;
                  }

                  if (associationControl.get('FIELDS_MAPPING').dirty) {
                    changedAssociation['FIELDS_MAPPING'] = [];

                    var _fieldMapArray = associationControl.get('FIELDS_MAPPING');

                    if (_fieldMapArray.length === 0) {
                      errMessages.push(_this41.messageService.generateMessage('MODEL', 'MISS_RELATION_ASSOCIATION_FIELD_MAPPING', 'E', changedAssociation['RIGHT_RELATION_ID']));
                      return;
                    }

                    _fieldMapArray.controls.forEach(function (fieldMap) {
                      if (fieldMap.dirty) {
                        changedAssociation['FIELDS_MAPPING'].push({
                          action: 'add',
                          RIGHT_FIELD: fieldMap.get('RIGHT_FIELD').value,
                          LEFT_FIELD: fieldMap.get('LEFT_FIELD').value
                        });
                      }
                    });

                    associationMeta.FIELDS_MAPPING.forEach(function (oldFieldMap) {
                      var index = _fieldMapArray.controls.findIndex(function (fieldMap) {
                        return fieldMap.get('LEFT_FIELD').value === oldFieldMap.LEFT_FIELD && fieldMap.get('RIGHT_FIELD').value === oldFieldMap.RIGHT_FIELD;
                      });

                      if (index === -1) {
                        changedAssociation['FIELDS_MAPPING'].push({
                          action: 'delete',
                          RIGHT_FIELD: oldFieldMap.LEFT_FIELD,
                          LEFT_FIELD: oldFieldMap.RIGHT_FIELD
                        });
                      }
                    });
                  }

                  changedAssociations.push(changedAssociation);
                }
              }
            });

            if (errMessages.length > 0) {
              errMessages.forEach(function (errMessage) {
                return _this41.messageService.add(errMessage);
              });
              return false;
            } // Deletion Case


            this.relationMeta.ASSOCIATIONS.forEach(function (associationMeta) {
              var index = _this41.associationFormArray.controls.findIndex(function (associationControl) {
                return associationControl.get('ASSOCIATION_NAME').value === associationMeta.ASSOCIATION_NAME;
              });

              if (index === -1) {
                // The association must be deleted
                changedAssociations.push({
                  action: 'delete',
                  ASSOCIATION_NAME: associationMeta.ASSOCIATION_NAME
                });
              }
            });
            return true;
          }
        }, {
          key: "_postActivityAfterSavingRelation",
          value: function _postActivityAfterSavingRelation(data) {
            var _this42 = this;

            this.changedRelation = {};

            if (data['RELATION_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/relation/' + data['RELATION_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'RELATION_SAVED', 'S', data['RELATION_ID'])
                  }
                });
              } else {
                this.readonly = true;
                this.relationMeta = data;

                this._generateRelationForm();

                this.messageService.reportMessage('MODEL', 'RELATION_SAVED', 'S', data['RELATION_ID']);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this42.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }]);

        return RelationDetailComponent;
      }();

      _RelationDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_6__.UniqueRelationValidator
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_12__.MessageService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__.ModelService
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_5__.DialogService
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService
        }];
      };

      _RelationDetailComponent.propDecorators = {
        attrComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: [_attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_3__.AttributeMetaComponent, {
            "static": false
          }]
        }],
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_8__.SearchHelpComponent, {
            "static": false
          }]
        }]
      };
      _RelationDetailComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-relation-detail',
        template: _raw_loader_relation_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_relation_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RelationDetailComponent);
      /***/
    },

    /***/
    2934:
    /*!******************************************************!*\
      !*** ./src/app/model/relation/relation.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RelationComponent": function RelationComponent() {
          return (
            /* binding */
            _RelationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_relation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./relation.component.html */
      3487);
      /* harmony import */


      var _relation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./relation.component.css */
      69854);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model.service */
      46461);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../identity.service */
      8934);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RelationComponent = /*#__PURE__*/function () {
        function RelationComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, RelationComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(RelationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this43 = this;

            this.searchTerms.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (term) {
              return _this43.entityService.listRelation(term);
            })).subscribe(function (data) {
              _this43.relationList = data;
              var relationID;

              if (_this43.route.snapshot.firstChild) {
                relationID = _this43.route.snapshot.firstChild.paramMap.get('relationID');
              }

              if (relationID) {
                if (relationID === 'new') {
                  _this43._newRelation();
                } else {
                  _this43.onSelect(_this43.relationList.find(function (relation) {
                    return relation.RELATION_ID === relationID;
                  }));
                }
              }
            });
            this.searchRelation(''); // The initial list

            this.modelService.theSelectedRelation$.subscribe(function (data) {
              if (_this43.theSelectedRelation) {
                _this43.theSelectedRelation.RELATION_ID = data.RELATION_ID;
                _this43.theSelectedRelation.RELATION_DESC = data.RELATION_DESC;
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this43.relationList[0] && !_this43.relationList[0].CREATE_TIME) {
                _this43.relationList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var relationID = _this43.route.snapshot.firstChild.paramMap.get('relationID');

                if (relationID) {
                  if (relationID === 'new') {
                    _this43.onSelect(_this43.relationList[0]);
                  } else {
                    _this43.onSelect(_this43.relationList.find(function (relation) {
                      return relation.RELATION_ID === relationID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this43.isSearchListShown = data;
            });
          }
        }, {
          key: "searchRelation",
          value: function searchRelation(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "onSelect",
          value: function onSelect(relation) {
            if (relation) {
              this.theSelectedRelation = relation;
              this.modelService.setSelectedRelation(relation);
            }
          }
        }, {
          key: "newRelation",
          value: function newRelation() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('relationID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newRelation();

              this.router.navigate(['/model/relation/new']);
            }
          }
        }, {
          key: "_newRelation",
          value: function _newRelation() {
            this.theSelectedRelation = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.Relation();
            this.theSelectedRelation.RELATION_ID = 'r_new';
            this.theSelectedRelation.RELATION_DESC = 'description';
            this.theSelectedRelation.VERSION_NO = 1;
            this.theSelectedRelation.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedRelation.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedRelation(this.theSelectedRelation);
            this.relationList.splice(0, 0, this.theSelectedRelation);
          }
        }]);

        return RelationComponent;
      }();

      _RelationComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_2__.ModelService
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_9__.MessageService
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_3__.IdentityService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _RelationComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-relation',
        template: _raw_loader_relation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_relation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RelationComponent);
      /***/
    },

    /***/
    25916:
    /*!*****************************************************************************************!*\
      !*** ./src/app/model/relationship/relationship-detail/relationship-detail.component.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RelationshipDetailComponent": function RelationshipDetailComponent() {
          return (
            /* binding */
            _RelationshipDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_relationship_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./relationship-detail.component.html */
      41240);
      /* harmony import */


      var _relationship_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./relationship-detail.component.css */
      70144);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../attribute-meta/attribute-meta.component */
      70107);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../model.service */
      46461);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../dialog.service */
      51969);
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../msgStore */
      87534);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      35758);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../model-validators */
      5021);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RelationshipDetailComponent = /*#__PURE__*/function () {
        function RelationshipDetailComponent(route, router, fb, uniqueRelationshipValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, RelationshipDetailComponent);

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
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_5__.msgStore, 'EN');
        }

        _createClass(RelationshipDetailComponent, [{
          key: "involveFormArray",
          get: function get() {
            return this.relationshipForm.get('INVOLVES');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this44 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (params) {
              var relationshipID = params.get('relationshipID');

              if (relationshipID === 'new') {
                var relationship = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.RelationshipMeta();
                relationship.RELATIONSHIP_ID = 'rs_';
                relationship.RELATIONSHIP_DESC = '';
                relationship.VALID_PERIOD = 0;
                relationship.SINGLETON = false;
                relationship.INVOLVES = [];
                _this44.isNewMode = true;
                _this44.readonly = false;
                _this44.bypassProtection = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)((0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(relationship), (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]));
              } else {
                _this44.readonly = true;
                _this44.isNewMode = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([_this44.entityService.getRelationship(relationshipID), _this44.entityService.getRelationMeta(relationshipID)]);
              }
            })).subscribe(function (data) {
              if ('msgName' in data[0]) {
                _this44.messageService.clearMessages();

                _this44.relationshipMeta = null;
                _this44.relationshipForm = null;

                _this44.messageService.report(data[0]);
              } else {
                _this44.messageService.clearMessages();

                if (history.state.message) {
                  _this44.messageService.report(history.state.message);
                }

                _this44.relationshipMeta = data[0];
                _this44.attributes = 'msgName' in data[1] ? [] : data[1]['ATTRIBUTES'];

                _this44._generateRelationshipForm();

                if (_this44.readonly) {
                  _this44.relationshipForm.get('TIME_DEPENDENT').disable();

                  _this44.relationshipForm.get('SINGLETON').disable();
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this44.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(control, rowID) {
            if (!this.roleSearchHelp) {
              this.roleSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.SearchHelp();
              this.roleSearchHelp.OBJECT_NAME = 'Role';

              this.roleSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listRole(searchTerm);
                };
              }(this.entityService);

              this.roleSearchHelp.BEHAVIOUR = 'A';
              this.roleSearchHelp.MULTI = false;
              this.roleSearchHelp.FUZZY_SEARCH = true;
              this.roleSearchHelp.FIELDS = [{
                FIELD_NAME: 'ROLE_ID',
                LIST_HEADER_TEXT: 'Role',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'ROLE_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.roleSearchHelp.READ_ONLY = this.readonly || this.oldInvolve(control) && control.valid;
            }

            var afterExportFn = function (context, ruleIdx) {
              return function () {
                return context.onChangeRoleID(ruleIdx, true);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.roleSearchHelp, control, afterExportFn);
          }
        }, {
          key: "_generateRelationshipForm",
          value: function _generateRelationshipForm() {
            var _this45 = this;

            if (this.relationshipForm) {
              this.relationshipForm.markAsPristine({
                onlySelf: false
              });
              this.relationshipForm.get('RELATIONSHIP_ID').setValue(this.relationshipMeta.RELATIONSHIP_ID);
              this.relationshipForm.get('RELATIONSHIP_DESC').setValue(this.relationshipMeta.RELATIONSHIP_DESC);
              this.relationshipForm.get('TIME_DEPENDENT').setValue(this.relationshipMeta.VALID_PERIOD > 0);
              this.relationshipForm.get('VALID_PERIOD').setValue(this.relationshipMeta.VALID_PERIOD);
              this.relationshipForm.get('SINGLETON').setValue(this.relationshipMeta.SINGLETON);
              this.relationshipForm.removeControl('ATTRIBUTES');
            } else {
              this.relationshipForm = this.fb.group({
                RELATIONSHIP_ID: [this.relationshipMeta.RELATIONSHIP_ID, {
                  updateOn: 'blur'
                }],
                RELATIONSHIP_DESC: [this.relationshipMeta.RELATIONSHIP_DESC],
                TIME_DEPENDENT: [this.relationshipMeta.VALID_PERIOD > 0],
                VALID_PERIOD: [this.relationshipMeta.VALID_PERIOD, this._validateValidPeriod],
                SINGLETON: [this.relationshipMeta.SINGLETON]
              });
            } // Compose Involves


            var formArray = [];
            this.relationshipMeta.INVOLVES.forEach(function (involve) {
              formArray.push(_this45.fb.group({
                ROLE_ID: [involve.ROLE_ID],
                ROLE_DESC: [involve.ROLE_DESC],
                CARDINALITY: [{
                  value: involve.CARDINALITY,
                  disabled: _this45.readonly
                }],
                DIRECTION: [involve.DIRECTION]
              }));
            });

            if (this.isNewMode) {
              this.relationshipForm.get('RELATIONSHIP_ID').setValidators(this._validateRelationshipID);
              this.relationshipForm.get('RELATIONSHIP_ID').setAsyncValidators(this.uniqueRelationshipValidator.validate.bind(this.uniqueRelationshipValidator));
              this.relationshipForm.get('TIME_DEPENDENT').enable();
              this.relationshipForm.get('VALID_PERIOD').disable(); // TIME_DEPENDENT by default is not checked

              formArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CARDINALITY: ['[1..1]'],
                DIRECTION: ['']
              }));
            } else {
              this.relationshipForm.get('RELATIONSHIP_ID').clearValidators();
              this.relationshipForm.get('RELATIONSHIP_ID').clearAsyncValidators();
              this.relationshipForm.get('RELATIONSHIP_ID').updateValueAndValidity();
            }

            this.relationshipForm.setControl('INVOLVES', new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArray(formArray));
          }
        }, {
          key: "_validateRelationshipID",
          value: function _validateRelationshipID(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Relationship ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().toLowerCase().substr(0, 3) !== 'rs_') {
              return {
                message: 'Relationship ID must be started with "rs_"!'
              };
            }

            if (c.value.toString().length < 4) {
              return {
                message: 'Relationship ID must have length larger than 3!'
              };
            }

            if (c.value.toString().length > 32) {
              return {
                message: 'Relationship ID must have length less than 32!'
              };
            }

            return null;
          }
        }, {
          key: "_validateValidPeriod",
          value: function _validateValidPeriod(c) {
            if (c.parent && c.parent.value.TIME_DEPENDENT && c.value <= 0) {
              return {
                message: 'must be larger than 0'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this46 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Relationship?').subscribe(function (confirm) {
                if (confirm) {
                  _this46._switch2DisplayMode();

                  _this46.relationshipMeta = null;

                  _this46.modelService.sendDialogAnswer('OK');
                } else {
                  _this46.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.relationshipForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this46._generateRelationshipForm();

                    _this46.relationshipForm.reset(_this46.relationshipForm.value);

                    _this46._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this.readonly = false;
              this.relationshipForm.get('TIME_DEPENDENT').enable();

              if (!this.relationshipForm.get('TIME_DEPENDENT').value) {
                this.relationshipForm.get('VALID_PERIOD').disable();
              }

              this.relationshipForm.get('SINGLETON').enable();
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
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            this.relationshipForm.get('TIME_DEPENDENT').disable();
            this.relationshipForm.get('SINGLETON').disable();
            this.attrComponent.switchEditDisplay(this.readonly);
            var lastIndex = this.involveFormArray.length - 1;

            while (lastIndex >= 0 && this.involveFormArray.controls[lastIndex].get('ROLE_ID').value.trim() === '') {
              this.involveFormArray.removeAt(lastIndex);
              lastIndex--;
            }

            this.involveFormArray.controls.forEach(function (involveFormGroup) {
              involveFormGroup.get('CARDINALITY').disable();
            });
          }
        }, {
          key: "onChangeRelationshipID",
          value: function onChangeRelationshipID() {
            this.modelService.updateRelationshipID(this.relationshipForm.get('RELATIONSHIP_ID').value);
          }
        }, {
          key: "onChangeTimeDependency",
          value: function onChangeTimeDependency() {
            var timeDependent = this.relationshipForm.get('TIME_DEPENDENT').value;
            var validPeriodCtrl = this.relationshipForm.get('VALID_PERIOD');
            var relationID = this.relationshipForm.get('RELATIONSHIP_ID').value;
            var attrFormArray = this.relationshipForm.get('ATTRIBUTES');

            if (timeDependent) {
              validPeriodCtrl.setValue(31536000); // 3600 * 24 * 365

              validPeriodCtrl.markAsDirty();
              validPeriodCtrl.enable();
              var validFromFormGroup = this.fb.group({
                ATTR_GUID: [''],
                RELATION_ID: [relationID],
                ATTR_NAME: ['VALID_FROM'],
                ATTR_DESC: ['Valid from'],
                DATA_ELEMENT: [''],
                DATA_TYPE: [{
                  value: 8,
                  disabled: true
                }],
                DATA_LENGTH: [null],
                DECIMAL: [null],
                ORDER: [null],
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
                DATA_TYPE: [{
                  value: 8,
                  disabled: true
                }],
                DATA_LENGTH: [null],
                DECIMAL: [null],
                ORDER: [null],
                PRIMARY_KEY: [false],
                AUTO_INCREMENT: [false]
              });
              validToFormGroup.markAsDirty();
              attrFormArray.insert(attrFormArray.length - 1, validToFormGroup);
            } else {
              validPeriodCtrl.setValue(0);
              validPeriodCtrl.disable();
              validPeriodCtrl.markAsDirty();
              var attributeValidFromIndex = attrFormArray.controls.findIndex(function (attrCtrl) {
                return attrCtrl.get('ATTR_NAME').value === 'VALID_FROM';
              });

              if (attributeValidFromIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeValidFromIndex);
              }

              var attributeValidToIndex = attrFormArray.controls.findIndex(function (attrCtrl) {
                return attrCtrl.get('ATTR_NAME').value === 'VALID_TO';
              });

              if (attributeValidToIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeValidToIndex);
              }
            }
          }
        }, {
          key: "onChangeRelationshipDesc",
          value: function onChangeRelationshipDesc() {
            this.modelService.updateRelationshipDesc(this.relationshipForm.get('RELATIONSHIP_DESC').value);
          }
        }, {
          key: "deleteInvolve",
          value: function deleteInvolve(index) {
            if (index !== this.involveFormArray.length - 1) {
              var currentRoleID = this.involveFormArray.at(index).get('ROLE_ID').value;
              this.involveFormArray.removeAt(index);
              this.involveFormArray.markAsDirty();
              var attrFormArray = this.relationshipForm.get('ATTRIBUTES');
              var attributeInstanceGUIDIndex = attrFormArray.controls.findIndex(function (attrCtrl) {
                return attrCtrl.get('ATTR_NAME').value === currentRoleID + '_INSTANCE_GUID';
              });

              if (attributeInstanceGUIDIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeInstanceGUIDIndex);
              }

              var attributeEntityIDIndex = attrFormArray.controls.findIndex(function (attrCtrl) {
                return attrCtrl.get('ATTR_NAME').value === currentRoleID + '_ENTITY_ID';
              });

              if (attributeEntityIDIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeEntityIDIndex);
              }
            }
          }
        }, {
          key: "onChangeRoleID",
          value: function onChangeRoleID(index) {
            var _this47 = this;

            var currentInvolveFormGroup = this.involveFormArray.controls[index];

            if (this.involveFormArray.controls.findIndex(function (involveCtrl, i) {
              return i !== index && involveCtrl.get('ROLE_ID').value === currentInvolveFormGroup.get('ROLE_ID').value;
            }) !== -1) {
              currentInvolveFormGroup.get('ROLE_ID').setErrors({
                message: 'Duplicate roles'
              });
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
                currentInvolveFormGroup.get('ROLE_ID').setErrors({
                  message: data['msgShortText']
                });
              } else {
                currentInvolveFormGroup.get('ROLE_DESC').setValue(data);

                var attrFormArray = _this47.relationshipForm.get('ATTRIBUTES');

                var relationID = _this47.relationshipForm.get('RELATIONSHIP_ID').value;

                var instanceGUIDFormGroup = _this47.fb.group({
                  ATTR_GUID: [''],
                  RELATION_ID: [relationID],
                  ATTR_NAME: [currentInvolveFormGroup.value.ROLE_ID + '_INSTANCE_GUID'],
                  ATTR_DESC: ['Entity Instance GUID of role ' + currentInvolveFormGroup.value.ROLE_ID],
                  DATA_ELEMENT: [null],
                  DATA_TYPE: [{
                    value: 1,
                    disabled: true
                  }],
                  DATA_LENGTH: [32],
                  DECIMAL: [null],
                  ORDER: [null],
                  PRIMARY_KEY: [false],
                  AUTO_INCREMENT: [false]
                });

                instanceGUIDFormGroup.markAsDirty();
                attrFormArray.insert(attrFormArray.length - 1, instanceGUIDFormGroup);

                var entityIDFormGroup = _this47.fb.group({
                  ATTR_GUID: [''],
                  RELATION_ID: [relationID],
                  ATTR_NAME: [currentInvolveFormGroup.value.ROLE_ID + '_ENTITY_ID'],
                  ATTR_DESC: ['Entity ID of role ' + currentInvolveFormGroup.value.ROLE_ID],
                  DATA_ELEMENT: [null],
                  DATA_TYPE: [{
                    value: 1,
                    disabled: true
                  }],
                  DATA_LENGTH: [32],
                  DECIMAL: [null],
                  ORDER: [null],
                  PRIMARY_KEY: [false],
                  AUTO_INCREMENT: [false]
                });

                entityIDFormGroup.markAsDirty();
                attrFormArray.insert(attrFormArray.length - 1, entityIDFormGroup);
                attrFormArray.markAsDirty();
              }
            });
          }
        }, {
          key: "oldInvolve",
          value: function oldInvolve(formGroup) {
            return this.relationshipMeta.INVOLVES.findIndex(function (role) {
              return role.ROLE_ID === formGroup.get('ROLE_ID').value;
            }) !== -1;
          }
        }, {
          key: "onGoToRole",
          value: function onGoToRole(roleID) {
            this.router.navigate(['/model/role', roleID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this48 = this;

            if (this.isNewMode || !this.bypassProtection && this.relationshipForm && this.relationshipForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this48.modelService.sendDialogAnswer('OK');
                } else {
                  _this48.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this49 = this;

            if (!this.relationshipForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (!this.relationshipForm.valid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedRelationship['action'] = 'add';
              this.changedRelationship['RELATIONSHIP_ID'] = this.relationshipForm.controls['RELATIONSHIP_ID'].value;
            } else {
              this.changedRelationship['action'] = 'update';
              this.changedRelationship['RELATIONSHIP_ID'] = this.relationshipMeta.RELATIONSHIP_ID;
            }

            if (this.relationshipForm.controls['RELATIONSHIP_DESC'].dirty) {
              this.changedRelationship['RELATIONSHIP_DESC'] = this.relationshipForm.controls['RELATIONSHIP_DESC'].value;
            }

            if (this.isNewMode || this.relationshipForm.controls['VALID_PERIOD'].dirty) {
              this.changedRelationship['VALID_PERIOD'] = this.relationshipForm.controls['VALID_PERIOD'].value;
            }

            if (this.isNewMode || this.relationshipForm.controls['SINGLETON'].dirty) {
              this.changedRelationship['SINGLETON'] = this.relationshipForm.controls['SINGLETON'].value;
            }

            this.changedRelationship['ATTRIBUTES'] = this.attrComponent.processChangedAttributes();

            if (this._processChangedInvolves()) {
              // console.log(this.changedRelationship);
              this.entityService.saveRelationship(this.changedRelationship).subscribe(function (data) {
                return _this49._postActivityAfterSavingRelationship(data);
              });
            }
          }
        }, {
          key: "_processChangedInvolves",
          value: function _processChangedInvolves() {
            var _this50 = this;

            if (this.involveFormArray.length <= 2) {
              // An empty line is included
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

                var index = _this50.relationshipMeta.INVOLVES.findIndex(function (involve) {
                  return involveControl.get('ROLE_ID').value === involve.ROLE_ID;
                });

                if (index === -1) {
                  // New Add Case
                  action = 'add';
                } else {
                  // New Update Case
                  if (involveControl.dirty) {
                    action = 'update';
                  }
                }

                if (action) {
                  changedInvolves.push({
                    action: action,
                    ROLE_ID: involveControl.get('ROLE_ID').value,
                    CARDINALITY: involveControl.get('CARDINALITY').value,
                    DIRECTION: involveControl.get('DIRECTION').value
                  });
                }
              }); // Deletion Case

              this.relationshipMeta.INVOLVES.forEach(function (involve) {
                var index = _this50.involveFormArray.controls.findIndex(function (roleControl) {
                  return roleControl.get('ROLE_ID').value === involve.ROLE_ID;
                });

                if (index === -1) {
                  // The attribute must be deleted
                  var deletedRole = {
                    action: 'delete',
                    ROLE_ID: involve.ROLE_ID
                  };
                  changedInvolves.push(deletedRole);
                }
              });
            }

            return true;
          }
        }, {
          key: "_postActivityAfterSavingRelationship",
          value: function _postActivityAfterSavingRelationship(data) {
            var _this51 = this;

            this.changedRelationship = {};

            if (data[0] && data[0]['RELATIONSHIP_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/relationship/' + data[0]['RELATIONSHIP_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'RELATIONSHIP_SAVED', 'S', data[0]['RELATIONSHIP_ID'])
                  }
                });
              } else {
                this.readonly = true;
                this.relationshipForm.get('TIME_DEPENDENT').disable();
                this.relationshipForm.get('SINGLETON').disable();
                this.relationshipMeta = data[0];
                this.attributes = data[1].ATTRIBUTES;

                this._generateRelationshipForm();

                this.messageService.reportMessage('MODEL', 'RELATIONSHIP_SAVED', 'S', this.relationshipMeta.RELATIONSHIP_ID);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this51.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }]);

        return RelationshipDetailComponent;
      }();

      _RelationshipDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_6__.UniqueRelationshipValidator
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_13__.MessageService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_3__.ModelService
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_4__.DialogService
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService
        }];
      };

      _RelationshipDetailComponent.propDecorators = {
        attrComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
          args: [_attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_2__.AttributeMetaComponent, {
            "static": false
          }]
        }],
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_8__.SearchHelpComponent, {
            "static": false
          }]
        }]
      };
      _RelationshipDetailComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-relationship-detail',
        template: _raw_loader_relationship_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_relationship_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RelationshipDetailComponent);
      /***/
    },

    /***/
    89012:
    /*!**************************************************************!*\
      !*** ./src/app/model/relationship/relationship.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RelationshipComponent": function RelationshipComponent() {
          return (
            /* binding */
            _RelationshipComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_relationship_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./relationship.component.html */
      3087);
      /* harmony import */


      var _relationship_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./relationship.component.css */
      18164);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model.service */
      46461);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../identity.service */
      8934);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RelationshipComponent = /*#__PURE__*/function () {
        function RelationshipComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, RelationshipComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(RelationshipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this52 = this;

            this.searchTerms.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (term) {
              return _this52.entityService.listRelationship(term);
            })).subscribe(function (data) {
              _this52.relationshipList = data;
              var relationshipID;

              if (_this52.route.snapshot.firstChild) {
                relationshipID = _this52.route.snapshot.firstChild.paramMap.get('relationshipID');
              }

              if (relationshipID) {
                if (relationshipID === 'new') {
                  _this52._newRelationship();
                } else {
                  _this52.onSelect(_this52.relationshipList.find(function (relationship) {
                    return relationship.RELATIONSHIP_ID === relationshipID;
                  }));
                }
              }
            });
            this.searchRelationship(''); // The initial list

            this.modelService.theSelectedRelationship$.subscribe(function (data) {
              if (_this52.theSelectedRelationship) {
                _this52.theSelectedRelationship.RELATIONSHIP_ID = data['RELATIONSHIP_ID'];
                _this52.theSelectedRelationship.RELATIONSHIP_DESC = data['RELATIONSHIP_DESC'];
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this52.relationshipList[0] && !_this52.relationshipList[0].CREATE_TIME) {
                _this52.relationshipList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var relationshipID = _this52.route.snapshot.firstChild.paramMap.get('relationshipID');

                if (relationshipID) {
                  if (relationshipID === 'new') {
                    _this52.onSelect(_this52.relationshipList[0]);
                  } else {
                    _this52.onSelect(_this52.relationshipList.find(function (relationship) {
                      return relationship.RELATIONSHIP_ID === relationshipID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this52.isSearchListShown = data;
            });
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "onSelect",
          value: function onSelect(relationship) {
            if (relationship) {
              this.theSelectedRelationship = relationship;
              this.modelService.setSelectedRelationship(relationship);
            }
          }
        }, {
          key: "searchRelationship",
          value: function searchRelationship(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "newRelationship",
          value: function newRelationship() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('relationshipID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newRelationship();

              this.router.navigate(['/model/relationship/new']);
            }
          }
        }, {
          key: "_newRelationship",
          value: function _newRelationship() {
            this.theSelectedRelationship = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.RelationshipH();
            this.theSelectedRelationship.RELATIONSHIP_ID = 'new';
            this.theSelectedRelationship.RELATIONSHIP_DESC = 'description';
            this.theSelectedRelationship.VERSION_NO = 1;
            this.theSelectedRelationship.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedRelationship.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedRelationship(this.theSelectedRelationship);
            this.relationshipList.splice(0, 0, this.theSelectedRelationship);
          }
        }]);

        return RelationshipComponent;
      }();

      _RelationshipComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_2__.ModelService
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_9__.MessageService
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_3__.IdentityService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _RelationshipComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-relationship',
        template: _raw_loader_relationship_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_relationship_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RelationshipComponent);
      /***/
    },

    /***/
    38646:
    /*!*****************************************************************!*\
      !*** ./src/app/model/role/role-detail/role-detail.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoleDetailComponent": function RoleDetailComponent() {
          return (
            /* binding */
            _RoleDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_role_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./role-detail.component.html */
      88917);
      /* harmony import */


      var _role_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role-detail.component.css */
      1284);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../model.service */
      46461);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../dialog.service */
      51969);
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../msgStore */
      87534);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../model-validators */
      5021);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RoleDetailComponent = /*#__PURE__*/function () {
        function RoleDetailComponent(route, router, fb, uniqueRoleValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, RoleDetailComponent);

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
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_4__.msgStore, 'EN');
        }

        _createClass(RoleDetailComponent, [{
          key: "relationFormArray",
          get: function get() {
            return this.roleForm.get('RELATIONS');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this53 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(function (params) {
              var roleID = params.get('roleID');

              if (roleID === 'new') {
                var role = new jor_angular__WEBPACK_IMPORTED_MODULE_7__.RoleMeta();
                role.ROLE_ID = '';
                role.ROLE_DESC = '';
                role.RELATIONS = [];
                _this53.isNewMode = true;
                _this53.readonly = false;
                _this53.bypassProtection = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(role);
              } else {
                _this53.readonly = true;
                _this53.isNewMode = false;
                return _this53.entityService.getRole(roleID);
              }
            })).subscribe(function (data) {
              if ('msgName' in data) {
                _this53.messageService.clearMessages();

                _this53.roleMeta = null;
                _this53.roleForm = null;

                _this53.messageService.report(data);
              } else {
                _this53.messageService.clearMessages();

                if (history.state.message) {
                  _this53.messageService.report(history.state.message);
                }

                _this53.roleMeta = data;

                _this53._generateRoleForm();
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this53.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(control, rowID) {
            if (!this.relationSearchHelp) {
              this.relationSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_7__.SearchHelp();
              this.relationSearchHelp.OBJECT_NAME = 'Relation';

              this.relationSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listRelation(searchTerm);
                };
              }(this.entityService);

              this.relationSearchHelp.BEHAVIOUR = 'A';
              this.relationSearchHelp.MULTI = false;
              this.relationSearchHelp.FUZZY_SEARCH = true;
              this.relationSearchHelp.FIELDS = [{
                FIELD_NAME: 'RELATION_ID',
                LIST_HEADER_TEXT: 'Relation',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'RELATION_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.relationSearchHelp.READ_ONLY = this.readonly || this.oldRelation(control) && control.valid;
            }

            var afterExportFn = function (context, ruleIdx) {
              return function () {
                return context.onChangeRelationID(ruleIdx, true);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.relationSearchHelp, control, afterExportFn);
          }
        }, {
          key: "_generateRoleForm",
          value: function _generateRoleForm() {
            var _this54 = this;

            this.roleForm = this.fb.group({});
            this.roleForm.addControl('ROLE_ID', new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.roleMeta.ROLE_ID, {
              updateOn: 'blur'
            }));

            if (this.isNewMode) {
              this.roleForm.get('ROLE_ID').setValidators(this._validateRoleID);
              this.roleForm.get('ROLE_ID').setAsyncValidators(this.uniqueRoleValidator.validate.bind(this.uniqueRoleValidator));
            }

            this.roleForm.addControl('ROLE_DESC', new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.roleMeta.ROLE_DESC)); // Compose Involves

            var formArray = [];
            this.roleMeta.RELATIONS.forEach(function (relation) {
              formArray.push(_this54.fb.group({
                RELATION_ID: [relation.RELATION_ID],
                RELATION_DESC: [relation.RELATION_DESC],
                CARDINALITY: [{
                  value: relation.CARDINALITY,
                  disabled: _this54.readonly
                }]
              }));
            });

            if (this.isNewMode) {
              formArray.push(this.fb.group({
                RELATION_ID: [''],
                RELATION_DESC: [''],
                CARDINALITY: ['[0..1]']
              }));
            }

            this.roleForm.addControl('RELATIONS', new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArray(formArray));
          }
        }, {
          key: "_validateRoleID",
          value: function _validateRoleID(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Role ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this55 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Role?').subscribe(function (confirm) {
                if (confirm) {
                  _this55._switch2DisplayMode();

                  _this55.roleMeta = null;

                  _this55.modelService.sendDialogAnswer('OK');
                } else {
                  _this55.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.roleForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this55._generateRoleForm();

                    _this55.roleForm.reset(_this55.roleForm.value);

                    _this55._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
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
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            var lastIndex = this.relationFormArray.length - 1;

            while (lastIndex >= 0 && this.relationFormArray.controls[lastIndex].get('ROLE_ID').value.trim() === '') {
              this.relationFormArray.removeAt(lastIndex);
              lastIndex--;
            }

            this.relationFormArray.controls.forEach(function (relationFormGroup) {
              relationFormGroup.get('CARDINALITY').disable();
            });
          }
        }, {
          key: "onChangeRoleID",
          value: function onChangeRoleID() {
            this.modelService.updateRoleID(this.roleForm.get('ROLE_ID').value);
          }
        }, {
          key: "onChangeRoleDesc",
          value: function onChangeRoleDesc() {
            this.modelService.updateRoleDesc(this.roleForm.get('ROLE_DESC').value);
          }
        }, {
          key: "deleteRelation",
          value: function deleteRelation(index) {
            if (index !== this.relationFormArray.length - 1) {
              this.relationFormArray.removeAt(index);
              this.relationFormArray.markAsDirty();
            }
          }
        }, {
          key: "onChangeRelationID",
          value: function onChangeRelationID(index, isExportedFromSH) {
            var currentRelationFormGroup = this.relationFormArray.controls[index];

            if (this.relationFormArray.controls.findIndex(function (relationCtrl, i) {
              return i !== index && relationCtrl.get('RELATION_ID').value === currentRelationFormGroup.get('RELATION_ID').value;
            }) !== -1) {
              currentRelationFormGroup.get('RELATION_ID').setErrors({
                message: 'Duplicate Relations'
              });
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
                  currentRelationFormGroup.get('RELATION_ID').setErrors({
                    message: data['msgShortText']
                  });
                } else {
                  currentRelationFormGroup.get('RELATION_DESC').setValue(data);
                }
              });
            }
          }
        }, {
          key: "oldRelation",
          value: function oldRelation(formGroup) {
            return this.roleMeta.RELATIONS ? this.roleMeta.RELATIONS.findIndex(function (relation) {
              return relation.RELATION_ID === formGroup.get('RELATION_ID').value;
            }) !== -1 : false;
          }
        }, {
          key: "onGoToRelation",
          value: function onGoToRelation(relationID) {
            this.router.navigate(['/model/relation', relationID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this56 = this;

            if (this.isNewMode || !this.bypassProtection && this.roleForm && this.roleForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this56.modelService.sendDialogAnswer('OK');
                } else {
                  _this56.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this57 = this;

            if (!this.roleForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (!this.roleForm.valid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedRole['action'] = 'add';
              this.changedRole['ROLE_ID'] = this.roleForm.controls['ROLE_ID'].value;
            } else {
              this.changedRole['action'] = 'update';
              this.changedRole['ROLE_ID'] = this.roleMeta.ROLE_ID;
            }

            if (this.roleForm.controls['ROLE_DESC'].dirty) {
              this.changedRole['ROLE_DESC'] = this.roleForm.controls['ROLE_DESC'].value;
            }

            this._processChangedRelation();

            this.entityService.saveRole(this.changedRole).subscribe(function (data) {
              return _this57._postActivityAfterSavingRole(data);
            });
          }
        }, {
          key: "_processChangedRelation",
          value: function _processChangedRelation() {
            var _this58 = this;

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

              var index = _this58.roleMeta.RELATIONS.findIndex(function (relation) {
                return relationControl.get('RELATION_ID').value === relation.RELATION_ID;
              });

              if (index === -1) {
                // New Add Case
                action = 'add';
              } else {
                if (relationControl.dirty) {
                  // Change Case
                  action = 'update';
                }
              }

              if (action) {
                changedRelations.push({
                  action: action,
                  RELATION_ID: relationControl.get('RELATION_ID').value,
                  CARDINALITY: relationControl.get('CARDINALITY').value
                });
              }
            }); // Deletion Case

            this.roleMeta.RELATIONS.forEach(function (relation) {
              var index = _this58.relationFormArray.controls.findIndex(function (relationControl) {
                return relationControl.get('RELATION_ID').value === relation.RELATION_ID;
              });

              if (index === -1) {
                // The attribute must be deleted
                var deletedRelation = {
                  action: 'delete',
                  RELATION_ID: relation.RELATION_ID
                };
                changedRelations.push(deletedRelation);
              }
            });
          }
        }, {
          key: "_postActivityAfterSavingRole",
          value: function _postActivityAfterSavingRole(data) {
            var _this59 = this;

            this.changedRole = {};

            if (data && data['ROLE_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/role/' + data['ROLE_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'ROLE_SAVED', 'S', data['ROLE_ID'])
                  }
                });
              } else {
                this.readonly = true;
                this.roleMeta = data;

                this._generateRoleForm();

                this.messageService.reportMessage('MODEL', 'ROLE_SAVED', 'S', this.roleMeta.ROLE_ID);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this59.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }]);

        return RoleDetailComponent;
      }();

      _RoleDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_5__.UniqueRoleValidator
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_11__.MessageService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_2__.ModelService
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_3__.DialogService
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_7__.EntityService
        }];
      };

      _RoleDetailComponent.propDecorators = {
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_7__.SearchHelpComponent, {
            "static": false
          }]
        }]
      };
      _RoleDetailComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-role-detail',
        template: _raw_loader_role_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_role_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RoleDetailComponent);
      /***/
    },

    /***/
    23728:
    /*!**********************************************!*\
      !*** ./src/app/model/role/role.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoleComponent": function RoleComponent() {
          return (
            /* binding */
            _RoleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_role_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./role.component.html */
      1129);
      /* harmony import */


      var _role_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role.component.css */
      48750);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model.service */
      46461);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../identity.service */
      8934);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _RoleComponent = /*#__PURE__*/function () {
        function RoleComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, RoleComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(RoleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this60 = this;

            this.searchTerms.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (term) {
              return _this60.entityService.listRole(term);
            })).subscribe(function (data) {
              _this60.roleList = data;
              var roleID;

              if (_this60.route.snapshot.firstChild) {
                roleID = _this60.route.snapshot.firstChild.paramMap.get('roleID');
              }

              if (roleID) {
                if (roleID === 'new') {
                  _this60._newRole();
                } else {
                  _this60.onSelect(_this60.roleList.find(function (role) {
                    return role.ROLE_ID === roleID;
                  }));
                }
              }
            });
            this.searchRole(''); // The initial list

            this.modelService.theSelectedRole$.subscribe(function (data) {
              if (_this60.theSelectedRole) {
                _this60.theSelectedRole.ROLE_ID = data['ROLE_ID'];
                _this60.theSelectedRole.ROLE_DESC = data['ROLE_DESC'];
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this60.roleList[0] && !_this60.roleList[0].CREATE_TIME) {
                _this60.roleList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var roleID = _this60.route.snapshot.firstChild.paramMap.get('roleID');

                if (roleID) {
                  if (roleID === 'new') {
                    _this60.onSelect(_this60.roleList[0]);
                  } else {
                    _this60.onSelect(_this60.roleList.find(function (role) {
                      return role.ROLE_ID === roleID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this60.isSearchListShown = data;
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(role) {
            if (role) {
              this.theSelectedRole = role;
              this.modelService.setSelectedRole(role);
            }
          }
        }, {
          key: "searchRole",
          value: function searchRole(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "newRole",
          value: function newRole() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('roleID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newRole();

              this.router.navigate(['/model/role/new']);
            }
          }
        }, {
          key: "_newRole",
          value: function _newRole() {
            this.theSelectedRole = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.RoleH();
            this.theSelectedRole.ROLE_ID = 'new';
            this.theSelectedRole.ROLE_DESC = 'description';
            this.theSelectedRole.VERSION_NO = 1;
            this.theSelectedRole.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedRole.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedRole(this.theSelectedRole);
            this.roleList.splice(0, 0, this.theSelectedRole);
          }
        }]);

        return RoleComponent;
      }();

      _RoleComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_2__.ModelService
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_9__.MessageService
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_3__.IdentityService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _RoleComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-role',
        template: _raw_loader_role_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_role_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RoleComponent);
      /***/
    },

    /***/
    23735:
    /*!**************************************************************************************!*\
      !*** ./src/app/model/search-help/search-help-detail/search-help-detail.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchHelpDetailComponent": function SearchHelpDetailComponent() {
          return (
            /* binding */
            _SearchHelpDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_search_help_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./search-help-detail.component.html */
      97549);
      /* harmony import */


      var _search_help_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search-help-detail.component.css */
      3932);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../model-validators */
      5021);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../model.service */
      46461);
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../dialog.service */
      51969);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      25917);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _SearchHelpDetailComponent = /*#__PURE__*/function () {
        function SearchHelpDetailComponent(route, router, fb, uniqueSearchHelpValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, SearchHelpDetailComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.uniqueSearchHelpValidator = uniqueSearchHelpValidator;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dialogService = dialogService;
          this.entityService = entityService;
          this.readonly = true;
          this.isNewMode = false;
          this.changedSearchHelp = {};
          this.relationsOfEntity = [];
          this.bypassProtection = false;
          this.isSearchListShown = true;
          this.behaviours = [{
            key: 'A',
            value: 'Search automatically when popup'
          }, {
            key: 'M',
            value: 'Search manually'
          }];
          this.relationAttributesMap = {};
        }

        _createClass(SearchHelpDetailComponent, [{
          key: "searchHelpFieldsFormArray",
          get: function get() {
            return this.searchHelpForm.get('FIELDS');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this61 = this;

            this.route.paramMap.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (params) {
              var searchHelpID = params.get('searchHelpID');

              if (searchHelpID === 'new') {
                var searchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_6__.SearchHelpMeta();
                searchHelp.SEARCH_HELP_ID = '';
                searchHelp.SEARCH_HELP_DESC = '';
                searchHelp.BEHAVIOUR = 'A'; // A: Auto-Trigger Search, M: Manual-Trigger Search

                _this61.isNewMode = true;
                _this61.readonly = false;
                _this61.bypassProtection = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(searchHelp);
              } else {
                _this61.readonly = true;
                _this61.isNewMode = false;
                return _this61.entityService.getSearchHelp(searchHelpID);
              }
            })).subscribe(function (data) {
              if ('msgName' in data) {
                _this61.messageService.clearMessages();

                _this61.searchHelpMeta = null;
                _this61.searchHelpForm = null;

                _this61.messageService.report(data);
              } else {
                _this61.messageService.clearMessages();

                if (history.state.message) {
                  _this61.messageService.report(history.state.message);
                }

                _this61.searchHelpMeta = data;

                _this61._generateSearchHelpForm();

                _this61._getRelationsOfEntity(_this61.searchHelpForm, false);

                _this61.searchHelpFieldsFormArray.controls.forEach(function (field) {
                  return _this61._getAttributesOfRelation(field, false);
                });
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this61.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "_generateSearchHelpForm",
          value: function _generateSearchHelpForm() {
            var _this62 = this;

            if (this.searchHelpForm) {
              this.searchHelpForm.markAsPristine({
                onlySelf: false
              });
              this.searchHelpForm.get('SEARCH_HELP_ID').setValue(this.searchHelpMeta.SEARCH_HELP_ID);
              this.searchHelpForm.get('SEARCH_HELP_DESC').setValue(this.searchHelpMeta.SEARCH_HELP_DESC);
              this.searchHelpForm.get('ENTITY_ID').setValue(this.searchHelpMeta.ENTITY_ID);
              this.searchHelpForm.get('RELATION_ID').setValue(this.searchHelpMeta.RELATION_ID);
              this.searchHelpForm.get('BEHAVIOUR').setValue(this.searchHelpMeta.BEHAVIOUR);
              this.searchHelpForm.get('MULTI').setValue(this.searchHelpMeta.MULTI);
              this.searchHelpForm.get('FUZZY_SEARCH').setValue(this.searchHelpMeta.FUZZY_SEARCH);
              this.searchHelpFieldsFormArray.clear();

              if (this.readonly) {
                this.searchHelpForm.get('BEHAVIOUR').disable();
                this.searchHelpForm.get('MULTI').disable();
                this.searchHelpForm.get('FUZZY_SEARCH').disable();
                this.searchHelpForm.get('RELATION_ID').disable();
              }
            } else {
              this.searchHelpForm = this.fb.group({
                SEARCH_HELP_ID: [this.searchHelpMeta.SEARCH_HELP_ID, {
                  updateOn: 'blur'
                }],
                SEARCH_HELP_DESC: [this.searchHelpMeta.SEARCH_HELP_DESC],
                ENTITY_ID: [this.searchHelpMeta.ENTITY_ID],
                RELATION_ID: [{
                  value: this.searchHelpMeta.RELATION_ID,
                  disabled: this.readonly
                }],
                BEHAVIOUR: [{
                  value: this.searchHelpMeta.BEHAVIOUR,
                  disabled: this.readonly
                }],
                MULTI: [{
                  value: this.searchHelpMeta.MULTI,
                  disabled: this.readonly
                }],
                FUZZY_SEARCH: [{
                  value: this.searchHelpMeta.FUZZY_SEARCH,
                  disabled: this.readonly
                }],
                FIELDS: this.fb.array([])
              });
            }

            this._setNewModeState();

            if (this.searchHelpMeta.FIELDS) {
              this.searchHelpMeta.FIELDS.forEach(function (field) {
                _this62.searchHelpFieldsFormArray.push(_this62.fb.group({
                  RELATION_ID: [{
                    value: field.RELATION_ID,
                    disabled: _this62.readonly
                  }],
                  FIELD_NAME: [{
                    value: field.FIELD_NAME,
                    disabled: _this62.readonly
                  }],
                  FIELD_DESC: [field.FIELD_DESC],
                  IMPORT: [{
                    value: field.IMPORT,
                    disabled: _this62.readonly
                  }],
                  EXPORT: [{
                    value: field.EXPORT,
                    disabled: _this62.readonly
                  }],
                  IE_FIELD_NAME: [field.IE_FIELD_NAME],
                  LIST_POSITION: [field.LIST_POSITION],
                  FILTER_POSITION: [field.FILTER_POSITION],
                  FILTER_DISP_ONLY: [{
                    value: field.FILTER_DISP_ONLY,
                    disabled: _this62.readonly
                  }],
                  DEFAULT_VALUE: [field.DEFAULT_VALUE]
                }));
              });
            }
          }
        }, {
          key: "_setNewModeState",
          value: function _setNewModeState() {
            if (this.isNewMode) {
              this.searchHelpForm.get('SEARCH_HELP_ID').setValidators(this._validateSearchHelpID);
              this.searchHelpForm.get('SEARCH_HELP_ID').setAsyncValidators(this.uniqueSearchHelpValidator.validate.bind(this.uniqueSearchHelpValidator));
              this.searchHelpForm.get('BEHAVIOUR').enable();
              this.searchHelpForm.get('MULTI').enable();
              this.searchHelpForm.get('FUZZY_SEARCH').enable();
              this.searchHelpForm.get('RELATION_ID').enable();
              this.searchHelpForm.get('BEHAVIOUR').markAsDirty(); // Default value mark as dirty
            } else {
              this.searchHelpForm.get('SEARCH_HELP_ID').clearValidators();
              this.searchHelpForm.get('SEARCH_HELP_ID').clearAsyncValidators();
              this.searchHelpForm.get('SEARCH_HELP_ID').updateValueAndValidity();
            }
          }
        }, {
          key: "_validateSearchHelpID",
          value: function _validateSearchHelpID(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Search Help ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().length > 32) {
              return {
                message: 'Search Help ID must have length less than 32!'
              };
            }

            return null;
          }
        }, {
          key: "_validateEntityID",
          value: function _validateEntityID(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give an entity'
              };
            }

            return null;
          }
        }, {
          key: "_validateRelationID",
          value: function _validateRelationID(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a relation'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this63 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Search Help?').subscribe(function (confirm) {
                if (confirm) {
                  _this63._switch2DisplayMode();

                  _this63.searchHelpMeta = null;

                  _this63.modelService.sendDialogAnswer('OK');
                } else {
                  _this63.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.searchHelpForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this63._generateSearchHelpForm();

                    _this63.searchHelpForm.reset(_this63.searchHelpForm.value);

                    _this63._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this._switch2EditMode();
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            this.searchHelpForm.get('BEHAVIOUR').disable();
            this.searchHelpForm.get('MULTI').disable();
            this.searchHelpForm.get('FUZZY_SEARCH').disable();
            this.searchHelpForm.get('RELATION_ID').disable();
            this.searchHelpFieldsFormArray.controls.forEach(function (field) {
              field.get('RELATION_ID').disable();
              field.get('FIELD_NAME').disable();
              field.get('IMPORT').disable();
              field.get('EXPORT').disable();
              field.get('FILTER_DISP_ONLY').disable();
            });
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;
            this.searchHelpForm.get('BEHAVIOUR').enable();
            this.searchHelpForm.get('MULTI').enable();
            this.searchHelpForm.get('FUZZY_SEARCH').enable();
            this.searchHelpForm.get('RELATION_ID').enable();
            this.searchHelpFieldsFormArray.controls.forEach(function (field) {
              field.get('RELATION_ID').enable();
              field.get('FIELD_NAME').enable();
              field.get('IMPORT').enable();
              field.get('EXPORT').enable();
              field.get('FILTER_DISP_ONLY').enable();
            });
          }
        }, {
          key: "onChangeSearchHelpID",
          value: function onChangeSearchHelpID() {
            this.modelService.updateSearchHelpID(this.searchHelpForm.get('SEARCH_HELP_ID').value);
          }
        }, {
          key: "onChangeSearchHelpDesc",
          value: function onChangeSearchHelpDesc() {
            this.modelService.updateSearchHelpDesc(this.searchHelpForm.get('SEARCH_HELP_DESC').value);
          }
        }, {
          key: "onEntitySearchHelp",
          value: function onEntitySearchHelp(control) {
            if (!this.entitySearchHelp) {
              this.entitySearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_6__.SearchHelp();
              this.entitySearchHelp.OBJECT_NAME = 'Entity ID';

              this.entitySearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listEntityType(searchTerm);
                };
              }(this.entityService);

              this.entitySearchHelp.BEHAVIOUR = 'A';
              this.entitySearchHelp.MULTI = false;
              this.entitySearchHelp.FUZZY_SEARCH = true;
              this.entitySearchHelp.FIELDS = [{
                FIELD_NAME: 'ENTITY_ID',
                LIST_HEADER_TEXT: 'Entity',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'ENTITY_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.entitySearchHelp.READ_ONLY = this.readonly;
            }

            var afterExportFn = function (context) {
              return function () {
                return context.onChangeEntityID(control);
              };
            }(this).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.entitySearchHelp, control, afterExportFn);
          }
        }, {
          key: "onChangeEntityID",
          value: function onChangeEntityID(formGroup) {
            this._getRelationsOfEntity(formGroup, true);
          }
        }, {
          key: "_getRelationsOfEntity",
          value: function _getRelationsOfEntity(searchHelpForm, setDefault) {
            var _this64 = this;

            var domainEntityID = searchHelpForm.get('ENTITY_ID').value;

            if (!domainEntityID) {
              return;
            }

            this.entityService.getRelationMetaOfEntity(domainEntityID).subscribe(function (entityRelations) {
              if (entityRelations[0]['msgType'] === 'E') {
                searchHelpForm.get('ENTITY_ID').setErrors({
                  message: entityRelations[0]['msgShortText']
                });
              } else {
                _this64.relationsOfEntity = entityRelations.map(function (relationMeta) {
                  return relationMeta.RELATION_ID;
                }).filter(function (relationId) {
                  return relationId.substr(0, 2) !== 'rs';
                });

                if (setDefault) {
                  searchHelpForm.get('RELATION_ID').setValue(_this64.relationsOfEntity[0]);
                  searchHelpForm.get('RELATION_ID').markAsDirty();

                  _this64._getAttributesOfRelation(searchHelpForm, true);
                }
              }
            });
          }
        }, {
          key: "onChangeRelationID",
          value: function onChangeRelationID(formGroup) {
            this._getAttributesOfRelation(formGroup, true);
          }
        }, {
          key: "_getAttributesOfRelation",
          value: function _getAttributesOfRelation(formGroup, afterChanges) {
            var _this65 = this;

            var relationID = formGroup.get('RELATION_ID').value;

            if (!relationID) {
              return;
            }

            if (this.relationAttributesMap[relationID]) {
              if (afterChanges) {
                this._afterChangeRelationID(formGroup);
              } else {
                this.onChangeField(formGroup);
              }
            } else {
              this.entityService.getRelationMeta(relationID).subscribe(function (relationMeta) {
                _this65.relationAttributesMap[relationID] = relationMeta.ATTRIBUTES;

                if (afterChanges) {
                  _this65._afterChangeRelationID(formGroup);
                } else {
                  _this65.onChangeField(formGroup);
                }
              });
            }
          }
        }, {
          key: "_afterChangeRelationID",
          value: function _afterChangeRelationID(formGroup) {
            var _this66 = this;

            var relationID = formGroup.get('RELATION_ID').value;

            if (formGroup.get('FIELD_NAME')) {
              // Search help field level relation ID change
              formGroup.get('FIELD_NAME').setValue(this.relationAttributesMap[relationID][0]['ATTR_NAME']);
              formGroup.get('FIELD_NAME').markAsDirty();
              formGroup.get('FIELD_DESC').setValue(this.relationAttributesMap[relationID][0]['ATTR_DESC']);
            } else {
              // Search help head level relation ID change
              this.searchHelpFieldsFormArray.clear();
              this.relationAttributesMap[relationID].forEach(function (attribute) {
                _this66.searchHelpFieldsFormArray.push(_this66.fb.group({
                  RELATION_ID: [attribute.RELATION_ID],
                  FIELD_NAME: [attribute.ATTR_NAME],
                  FIELD_DESC: [attribute.ATTR_DESC],
                  IMPORT: [attribute.PRIMARY_KEY],
                  EXPORT: [attribute.PRIMARY_KEY],
                  IE_FIELD_NAME: [''],
                  LIST_POSITION: [attribute.ORDER],
                  FILTER_POSITION: [attribute.ORDER],
                  FILTER_DISP_ONLY: [false],
                  DEFAULT_VALUE: ['']
                }));
              });
              this.searchHelpFieldsFormArray.markAsDirty();
            }
          }
        }, {
          key: "onChangeField",
          value: function onChangeField(formGroup) {
            var relationID = formGroup.get('RELATION_ID').value;
            var currAttr = this.relationAttributesMap[relationID].find(function (attribute) {
              return attribute.ATTR_NAME === formGroup.get('FIELD_NAME').value;
            });
            formGroup.get('FIELD_DESC').setValue(currAttr.ATTR_DESC);
          }
        }, {
          key: "insertField",
          value: function insertField(index) {
            var mainRelationID = this.searchHelpForm.get('RELATION_ID').value;
            var firstAttribute = this.relationAttributesMap[mainRelationID][0];
            this.searchHelpFieldsFormArray.insert(index, this.fb.group({
              RELATION_ID: [mainRelationID],
              FIELD_NAME: [firstAttribute.ATTR_NAME],
              FIELD_DESC: [firstAttribute.ATTR_DESC],
              IMPORT: [firstAttribute.PRIMARY_KEY],
              EXPORT: [firstAttribute.PRIMARY_KEY],
              IE_FIELD_NAME: [''],
              LIST_POSITION: [0],
              FILTER_POSITION: [0],
              FILTER_DISP_ONLY: [false],
              DEFAULT_VALUE: ['']
            }));
          }
        }, {
          key: "deleteField",
          value: function deleteField(index) {
            if (this.searchHelpFieldsFormArray.length === 1) {
              this.messageService.reportMessage('MODEL', 'MINIMUM_ONE_SEARCH_FIELD', 'E');
              return;
            }

            this.searchHelpFieldsFormArray.removeAt(index);
            this.searchHelpFieldsFormArray.markAsDirty();
          }
        }, {
          key: "onGoToEntity",
          value: function onGoToEntity(entityID) {
            this.router.navigate(['/model/entity-type', entityID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this67 = this;

            if (this.isNewMode || !this.bypassProtection && this.searchHelpForm && this.searchHelpForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this67.modelService.sendDialogAnswer('OK');
                } else {
                  _this67.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this68 = this;

            if (!this.searchHelpForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (this.searchHelpForm.invalid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedSearchHelp['action'] = 'add';
              this.changedSearchHelp['SEARCH_HELP_ID'] = this.searchHelpForm.get('SEARCH_HELP_ID').value;
            } else {
              this.changedSearchHelp['action'] = 'update';
              this.changedSearchHelp['SEARCH_HELP_ID'] = this.searchHelpMeta.SEARCH_HELP_ID;
            }

            if (this.searchHelpForm.get('SEARCH_HELP_DESC').dirty) {
              this.changedSearchHelp['SEARCH_HELP_DESC'] = this.searchHelpForm.get('SEARCH_HELP_DESC').value;
            }

            if (this.searchHelpForm.get('BEHAVIOUR').dirty) {
              this.changedSearchHelp['BEHAVIOUR'] = this.searchHelpForm.get('BEHAVIOUR').value;
            }

            if (this.searchHelpForm.get('MULTI').dirty) {
              this.changedSearchHelp['MULTI'] = this.searchHelpForm.get('MULTI').value;
            }

            if (this.searchHelpForm.get('FUZZY_SEARCH').dirty) {
              this.changedSearchHelp['FUZZY_SEARCH'] = this.searchHelpForm.get('FUZZY_SEARCH').value;
            }

            if (this.searchHelpForm.get('ENTITY_ID').dirty) {
              this.changedSearchHelp['ENTITY_ID'] = this.searchHelpForm.get('ENTITY_ID').value;
            }

            if (this.searchHelpForm.get('RELATION_ID').dirty) {
              this.changedSearchHelp['RELATION_ID'] = this.searchHelpForm.get('RELATION_ID').value;
            }

            if (this.searchHelpForm.get('FIELDS').dirty) {
              this.changedSearchHelp['FIELDS'] = [];
              this.searchHelpForm.get('FIELDS').value.forEach(function (field) {
                if (field.FIELD_NAME) {
                  _this68.changedSearchHelp['FIELDS'].push(field);
                }
              });
            }

            this.entityService.saveSearchHelp(this.changedSearchHelp).subscribe(function (data) {
              return _this68._postActivityAfterSavingSearchHelp(data);
            });
          }
        }, {
          key: "_postActivityAfterSavingSearchHelp",
          value: function _postActivityAfterSavingSearchHelp(data) {
            var _this69 = this;

            this.changedSearchHelp = {};

            if (data['SEARCH_HELP_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/search-help/' + data['SEARCH_HELP_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'SEARCH_HELP_SAVED', 'S', data['SEARCH_HELP_ID'])
                  }
                });
              } else {
                this._switch2DisplayMode();

                this.searchHelpMeta = data;

                this._generateSearchHelpForm();

                this.searchHelpFieldsFormArray.controls.forEach(function (field) {
                  return _this69._getAttributesOfRelation(field, false);
                });
                this.messageService.reportMessage('MODEL', 'SEARCH_HELP_SAVED', 'S', data['SEARCH_HELP_ID']);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this69.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }]);

        return SearchHelpDetailComponent;
      }();

      _SearchHelpDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_2__.UniqueSearchHelpValidator
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_10__.MessageService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_3__.ModelService
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_4__.DialogService
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_6__.EntityService
        }];
      };

      _SearchHelpDetailComponent.propDecorators = {
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_6__.SearchHelpComponent, {
            "static": false
          }]
        }]
      };
      _SearchHelpDetailComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-search-help-detail',
        template: _raw_loader_search_help_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_help_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SearchHelpDetailComponent);
      /***/
    },

    /***/
    65021:
    /*!************************************************************!*\
      !*** ./src/app/model/search-help/search-help.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchHelpComponent": function SearchHelpComponent() {
          return (
            /* binding */
            _SearchHelpComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _raw_loader_search_help_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./search-help.component.html */
      63494);
      /* harmony import */


      var _search_help_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search-help.component.css */
      8751);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      43340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model.service */
      46461);
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ui-message-angular */
      23540);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../identity.service */
      8934);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _SearchHelpComponent = /*#__PURE__*/function () {
        function SearchHelpComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, SearchHelpComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.searchHelpList = [];
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(SearchHelpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this70 = this;

            this.searchTerms.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (term) {
              return _this70.entityService.listSearchHelp(term);
            })).subscribe(function (data) {
              _this70.searchHelpList = data;
              var searchHelpID;

              if (_this70.route.snapshot.firstChild) {
                searchHelpID = _this70.route.snapshot.firstChild.paramMap.get('searchHelpID');
              }

              if (searchHelpID) {
                if (searchHelpID === 'new') {
                  _this70._newSearchHelp();
                } else {
                  _this70.onSelect(_this70.searchHelpList.find(function (searchHelp) {
                    return searchHelp.SEARCH_HELP_ID === searchHelpID;
                  }));
                }
              }
            });
            this.searchSearchHelp(''); // The initial list

            this.modelService.theSelectedSearchHelp$.subscribe(function (data) {
              if (_this70.theSelectedSearchHelp) {
                _this70.theSelectedSearchHelp.SEARCH_HELP_ID = data['SEARCH_HELP_ID'];
                _this70.theSelectedSearchHelp.SEARCH_HELP_DESC = data['SEARCH_HELP_DESC'];
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this70.searchHelpList[0] && !_this70.searchHelpList[0].CREATE_TIME) {
                _this70.searchHelpList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var searchHelpID = _this70.route.snapshot.firstChild.paramMap.get('searchHelpID');

                if (searchHelpID) {
                  if (searchHelpID === 'new') {
                    _this70.onSelect(_this70.searchHelpList[0]);
                  } else {
                    _this70.onSelect(_this70.searchHelpList.find(function (searchHelp) {
                      return searchHelp.SEARCH_HELP_ID === searchHelpID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this70.isSearchListShown = data;
            });
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "onSelect",
          value: function onSelect(searchHelp) {
            if (searchHelp) {
              this.theSelectedSearchHelp = searchHelp;
              this.modelService.setSelectedSearchHelp(searchHelp);
            }
          }
        }, {
          key: "searchSearchHelp",
          value: function searchSearchHelp(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "newSearchHelp",
          value: function newSearchHelp() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('searchHelpID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newSearchHelp();

              this.router.navigate(['/model/search-help/new']);
            }
          }
        }, {
          key: "_newSearchHelp",
          value: function _newSearchHelp() {
            this.theSelectedSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_8__.SearchHelpMeta();
            this.theSelectedSearchHelp.SEARCH_HELP_ID = 'new';
            this.theSelectedSearchHelp.SEARCH_HELP_DESC = 'description';
            this.theSelectedSearchHelp.VERSION_NO = 1;
            this.theSelectedSearchHelp.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedSearchHelp.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedSearchHelp(this.theSelectedSearchHelp);
            this.searchHelpList.splice(0, 0, this.theSelectedSearchHelp);
          }
        }]);

        return SearchHelpComponent;
      }();

      _SearchHelpComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__.EntityService
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_2__.ModelService
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_9__.MessageService
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_3__.IdentityService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _SearchHelpComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-search-help',
        template: _raw_loader_search_help_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_help_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SearchHelpComponent);
      /***/
    },

    /***/
    25944:
    /*!*******************************************************************!*\
      !*** ./src/app/model/attribute-meta/attribute-meta.component.css ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-actions{\n  width: 6rem;\n}\n.dk-description{\n  min-width: 12rem;\n  max-width: 20rem;\n}\n.dk-dataElement{\n  min-width: 12rem;\n  max-width: 20rem;\n}\n.dk-number{\n  min-width: 4rem;\n  max-width: 6rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1tZXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoiYXR0cmlidXRlLW1ldGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGstYWN0aW9uc3tcbiAgd2lkdGg6IDZyZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIG1pbi13aWR0aDogMTJyZW07XG4gIG1heC13aWR0aDogMjByZW07XG59XG4uZGstZGF0YUVsZW1lbnR7XG4gIG1pbi13aWR0aDogMTJyZW07XG4gIG1heC13aWR0aDogMjByZW07XG59XG4uZGstbnVtYmVye1xuICBtaW4td2lkdGg6IDRyZW07XG4gIG1heC13aWR0aDogNnJlbTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    25145:
    /*!***************************************************************************************!*\
      !*** ./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.css ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-actions{\n  width: 4rem;\n  min-width: 4rem;\n  max-width: 4rem;\n}\n.dk-description{\n  width: 20rem;\n  min-width: 20rem;\n  max-width: 20rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZG9tYWluLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImRhdGEtZG9tYWluLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogNHJlbTtcbiAgbWluLXdpZHRoOiA0cmVtO1xuICBtYXgtd2lkdGg6IDRyZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiAyMHJlbTtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgbWF4LXdpZHRoOiAyMHJlbTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    84968:
    /*!*************************************************************!*\
      !*** ./src/app/model/data-domain/data-domain.component.css ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWRvbWFpbi5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    80653:
    /*!******************************************************************************************!*\
      !*** ./src/app/model/data-element/data-element-detail/data-element-detail.component.css ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWVsZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    52400:
    /*!***************************************************************!*\
      !*** ./src/app/model/data-element/data-element.component.css ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWVsZW1lbnQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    35190:
    /*!***************************************************************************************!*\
      !*** ./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.css ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-actions{\n  width: 3rem;\n  min-width: 3rem;\n  max-width: 3rem;\n}\n.dk-description{\n  width: 15rem;\n  min-width: 15rem;\n  max-width: 15rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eS10eXBlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImVudGl0eS10eXBlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogM3JlbTtcbiAgbWluLXdpZHRoOiAzcmVtO1xuICBtYXgtd2lkdGg6IDNyZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiAxNXJlbTtcbiAgbWluLXdpZHRoOiAxNXJlbTtcbiAgbWF4LXdpZHRoOiAxNXJlbTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    25332:
    /*!*************************************************************!*\
      !*** ./src/app/model/entity-type/entity-type.component.css ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRpdHktdHlwZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    19871:
    /*!*******************************************!*\
      !*** ./src/app/model/model.component.css ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-model-content {\n  margin-top: .5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibW9kZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay1tb2RlbC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogLjVyZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    20670:
    /*!******************************************************************************!*\
      !*** ./src/app/model/relation/relation-detail/relation-detail.component.css ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-actions{\n  width: 5rem;\n  min-width: 5rem;\n  max-width: 5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGF0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6InJlbGF0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiA1cmVtO1xuICBtaW4td2lkdGg6IDVyZW07XG4gIG1heC13aWR0aDogNXJlbTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    69854:
    /*!*******************************************************!*\
      !*** ./src/app/model/relation/relation.component.css ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxhdGlvbi5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    70144:
    /*!******************************************************************************************!*\
      !*** ./src/app/model/relationship/relationship-detail/relationship-detail.component.css ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxhdGlvbnNoaXAtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    18164:
    /*!***************************************************************!*\
      !*** ./src/app/model/relationship/relationship.component.css ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxhdGlvbnNoaXAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    1284:
    /*!******************************************************************!*\
      !*** ./src/app/model/role/role-detail/role-detail.component.css ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    48750:
    /*!***********************************************!*\
      !*** ./src/app/model/role/role.component.css ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    3932:
    /*!***************************************************************************************!*\
      !*** ./src/app/model/search-help/search-help-detail/search-help-detail.component.css ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-actions{\n  width: 4rem;\n  min-width: 4rem;\n  max-width: 4rem;\n}\n.dk-selection{\n  width: 15rem;\n  min-width: 10rem;\n}\n.dk-string{\n  width: 15rem;\n  min-width: 10rem;\n}\n.dk-number{\n  width: 10rem;\n  min-width: 5rem;\n}\n.dk-description{\n  width: 15rem;\n  min-width: 10rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1oZWxwLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNlYXJjaC1oZWxwLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogNHJlbTtcbiAgbWluLXdpZHRoOiA0cmVtO1xuICBtYXgtd2lkdGg6IDRyZW07XG59XG4uZGstc2VsZWN0aW9ue1xuICB3aWR0aDogMTVyZW07XG4gIG1pbi13aWR0aDogMTByZW07XG59XG4uZGstc3RyaW5ne1xuICB3aWR0aDogMTVyZW07XG4gIG1pbi13aWR0aDogMTByZW07XG59XG4uZGstbnVtYmVye1xuICB3aWR0aDogMTByZW07XG4gIG1pbi13aWR0aDogNXJlbTtcbn1cbi5kay1kZXNjcmlwdGlvbntcbiAgd2lkdGg6IDE1cmVtO1xuICBtaW4td2lkdGg6IDEwcmVtO1xufVxuIl19 */";
      /***/
    },

    /***/
    8751:
    /*!*************************************************************!*\
      !*** ./src/app/model/search-help/search-help.component.css ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtaGVscC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    88198:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/attribute-meta/attribute-meta.component.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mt-2\">\n  <div class=\"card-header\"><span class=\"fab fa-elementor\"></span> Attribute</div>\n  <div class=\"card-body\">\n    <table class=\"table table-bordered table-sm dk-table\" [formGroup]=\"parentForm\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Attribute Name</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Data Element</th>\n          <th scope=\"col\">Data Type</th>\n          <th scope=\"col\">Length</th>\n          <th scope=\"col\">Decimal</th>\n          <th scope=\"col\" title=\"Primary Key\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">PK</th>\n          <th scope=\"col\" title=\"Auto Incremental\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">AI</th>\n        </tr>\n      </thead>\n\n      <tbody formArrayName=\"ATTRIBUTES\">\n        <tr *ngFor=\"let attrFormGroup of formArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" id=\"delete\" [disabled]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                    (click)=\"deleteAttribute(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n            <button class=\"btn btn-sm\" type=\"button\" id=\"add\" [disabled]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                    (click)=\"insertAttribute(i)\" title=\"Insert\">\n              <span class=\"fas fa-plus\"></span>\n            </button>\n            <button class=\"btn btn-sm\" type=\"button\" id=\"switch\" [disabled]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                    (click)=\"switchBtwDEAndDT(i)\" title=\"Switch btw Data Element and Data Type\">\n              <span class=\"far fa-lightbulb\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"text\" formControlName=\"ATTR_NAME\" [readonly]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                   class=\"form-control form-control-sm\" (change)=\"onChangeAttributeName(i)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"text\" formControlName=\"ATTR_DESC\" class=\"form-control form-control-sm dk-description\"\n                   [readonly]=\"readonly || isFieldGray(attrFormGroup.value)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <div class=\"input-group dk-dataElement\">\n              <input type=\"text\" formControlName=\"DATA_ELEMENT\" [readonly]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                     class=\"form-control form-control-sm\" (change)=\"onChangeDataElement(i)\"\n                     (dblclick)=\"onGoToDataElement(attrFormGroup.value['DATA_ELEMENT'])\">\n              <div class=\"invalid-tooltip\">\n                {{attrFormGroup.get('DATA_ELEMENT').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchDataElement\"\n                        (click)=\"onSearchHelp(attrFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <select formControlName=\"DATA_TYPE\" (change)=\"onChangeDataType(attrFormGroup)\" class=\"form-control form-control-sm\">\n              <option *ngFor=\"let opt of dataTypes\" [value]=\"opt.key\">{{opt.value}}</option>\n            </select>\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"number\" formControlName=\"DATA_LENGTH\" class=\"form-control form-control-sm dk-number\"\n                   [readonly]=\"(+attrFormGroup.value.DATA_TYPE !== 1 && +attrFormGroup.value.DATA_TYPE !== 4) || readonly || isFieldGray(attrFormGroup.value)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"number\" formControlName=\"DECIMAL\" class=\"form-control form-control-sm dk-number\"\n                   [readonly]=\"+attrFormGroup.value.DATA_TYPE !== 4 || readonly || isFieldGray(attrFormGroup.value)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">\n            <input type=\"checkbox\" formControlName=\"PRIMARY_KEY\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">\n            <input type=\"checkbox\" formControlName=\"AUTO_INCREMENT\">\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    64928:
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.html ***!
      \******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"dataDomainMeta\" [formGroup]=\"dataDomainForm\">\n  <div class=\"form-group\">\n    <label for=\"dataDomain\" class=\"col-form-label form-control-sm\">Data Domain:\n      <span [class.ng-invalid]=\"dataDomainForm.get('DOMAIN_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{dataDomainForm.get('DOMAIN_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"dataDomain\" [readonly]=\"readonly || !isNewMode\"\n           (change)=\"onChangeDataDomainID()\" name=\"dataDomain\" formControlName=\"DOMAIN_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"dataDomain-desc\" class=\"col-form-label form-control-sm\">Data Domain Description:</label>\n    <textarea class=\"form-control\" id=\"dataDomain-desc\" name=\"dataDomain-desc\" rows=\"2\"\n              formControlName=\"DOMAIN_DESC\" [readonly]=\"readonly\" (change)=\"onChangeDataDomainDesc()\"></textarea>\n  </div>\n\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Data Type</div>\n    <div class=\"card-body\">\n      <div class=\"ml-2 mb-2 row\">\n        <select formControlName=\"DATA_TYPE\" (change)=\"onChangeDataType(dataDomainForm)\"\n                class=\"col-sm-8 col-lg-4 form-control form-control-sm\">\n          <option *ngFor=\"let opt of dataTypes\" [value]=\"opt.key\">{{opt.value}}</option>\n        </select>\n      </div>\n\n      <div class=\"ml-0 row\">\n        <div class=\"form-group col-8 col-sm-4 col-lg-2\">\n          <label class=\"col-form-label col-form-label-sm\" for=\"data-length\">Length:\n          </label>\n          <input type=\"number\" formControlName=\"DATA_LENGTH\" id=\"data-length\" name=\"data-length\"\n                 class=\"form-control form-control-sm\" [readonly]=\"readonly\" >\n          <span class=\"dk-invalid-feedback\">{{dataDomainForm.get('DATA_LENGTH').errors?.message}}</span>\n        </div>\n\n        <div class=\"form-group col-8 col-sm-4 col-lg-2\">\n          <label class=\"col-form-label col-form-label-sm\" for=\"decimal-place\">Decimal Place:\n          </label>\n          <input type=\"number\" formControlName=\"DECIMAL\" id=\"decimal-place\" name=\"decimal-place\"\n                 class=\"form-control form-control-sm\" [readonly]=\"readonly\">\n          <span class=\"dk-invalid-feedback\">{{dataDomainForm.get('DECIMAL').errors?.message}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">Domain Definition</div>\n    <div class=\"card-body\">\n      <div *ngIf=\"enableGeneralType\" class=\"card mb-3\">\n        <div class=\"ml-2 mt-2 custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"general-type\" name=\"DOMAIN_TYPE\"\n                 [value]=\"0\" formControlName=\"DOMAIN_TYPE\" (change)=\"onChangeDomainType(dataDomainForm)\">\n          <label class=\"custom-control-label\" for=\"general-type\">General Type</label>\n        </div>\n        <div class=\"card-body row\">\n          <div class=\"form-check col-sm-3 mx-3\">\n            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"UNSIGNED\" id=\"unsigned\" name=\"unsigned\">\n            <label class=\"form-check-label\" for=\"unsigned\">Unsigned</label>\n          </div>\n          <div class=\"form-check col-sm-3 mx-3\">\n            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"CAPITAL_ONLY\" id=\"CAPITAL_ONLY\" name=\"CAPITAL_ONLY\">\n            <label class=\"form-check-label\" for=\"CAPITAL_ONLY\">Capital Only</label>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"enableRegExpr\" class=\"card mb-3\">\n        <div class=\"ml-2 mt-2 custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"regular-expression\" name=\"DOMAIN_TYPE\"\n                 [value]=\"1\" formControlName=\"DOMAIN_TYPE\" (change)=\"onChangeDomainType(dataDomainForm)\">\n          <label class=\"custom-control-label\" for=\"regular-expression\">Regular Expression\n            <span [class.ng-invalid]=\"dataDomainForm.get('REG_EXPR').invalid\" class=\"dk-invalid-feedback\">\n              {{dataDomainForm.get('REG_EXPR').errors?.message}}\n            </span>\n          </label>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"REG_EXPR\" id=\"REG_EXPR\" name=\"REG_EXPR\"\n                   class=\"form-control form-control-sm\" [readonly]=\"readonly\" >\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"enableValueRelation\" class=\"card mb-2\">\n        <div class=\"ml-2 mt-2 custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"value-relation\" name=\"DOMAIN_TYPE\"\n                 [value]=\"2\" formControlName=\"DOMAIN_TYPE\" (change)=\"onChangeDomainType(dataDomainForm)\">\n          <label class=\"custom-control-label\" for=\"value-relation\">Value Entity Relation\n            <span [class.ng-invalid]=\"dataDomainForm.get('ENTITY_ID').invalid\" class=\"dk-invalid-feedback\">\n              {{dataDomainForm.get('ENTITY_ID').errors?.message}}\n            </span>\n          </label>\n        </div>\n        <div class=\"card-body row\">\n          <div class=\"input-group col-lg-4 ml-2 mb-3\">\n            <input type=\"text\" formControlName=\"ENTITY_ID\" id=\"ENTITY_ID\" name=\"ENTITY_ID\" placeholder=\"Entity Type\"\n                   class=\"form-control form-control-sm\" [readonly]=\"readonly\" (change)=\"onChangeEntityID(dataDomainForm)\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchEntity\" (click)=\"onEntitySearchHelp(dataDomainForm)\">\n                <span class=\"fas fa-search\"></span>\n              </button>\n            </div>\n          </div>\n          <select formControlName=\"RELATION_ID\" class=\"form-control form-control-sm col-lg-4 ml-4 mr-3\">\n            <option *ngFor=\"let relation of relationsOfEntity\" [value]=\"relation\">{{relation}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div *ngIf=\"enableArrayOrInterval\" class=\"card mb-3\">\n        <div class=\"ml-2 mt-2 row\">\n          <div class=\"custom-control custom-radio col-3\">\n            <input type=\"radio\" class=\"custom-control-input\" id=\"value-array\" name=\"DOMAIN_TYPE\"\n                   [value]=\"3\" formControlName=\"DOMAIN_TYPE\" (change)=\"onChangeDomainType(dataDomainForm)\">\n            <label class=\"custom-control-label\" for=\"value-array\">Value Array</label>\n          </div>\n          <div class=\"custom-control custom-radio col-3\">\n            <input type=\"radio\" class=\"custom-control-input\" id=\"value-interval\" name=\"DOMAIN_TYPE\"\n                   [value]=\"4\" formControlName=\"DOMAIN_TYPE\" (change)=\"onChangeDomainType(dataDomainForm)\">\n            <label class=\"custom-control-label\" for=\"value-interval\">Value Interval</label>\n          </div>\n        </div>\n\n        <div class=\"card-body\">\n          <table class=\"table table-bordered dk-table\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">Low Value</th>\n                <th *ngIf=\"dataDomainForm.get('DOMAIN_TYPE').value === 4\" scope=\"col\">High Value</th>\n                <th scope=\"col\">Description</th>\n                <th scope=\"col\">Actions</th>\n              </tr>\n            </thead>\n\n            <tbody formArrayName=\"DOMAIN_VALUES\">\n            <tr *ngFor=\"let domainValueForm of domainValueFormArray.controls; let i = index\">\n              <td [formGroup]=\"domainValueForm\">\n                <div class=\"input-group\">\n                  <input class=\"form-control\" type=\"text\" formControlName=\"LOW_VALUE\" maxlength=\"10\"\n                         [readonly]=\"readonly\" (change)=\"onChangeDomainValue(i)\">\n                  <div class=\"invalid-tooltip\">\n                    {{domainValueForm.get('LOW_VALUE').errors?.message}}\n                  </div>\n                </div>\n              </td>\n              <td *ngIf=\"dataDomainForm.get('DOMAIN_TYPE').value === 4\" [formGroup]=\"domainValueForm\">\n                <div class=\"input-group\">\n                  <input class=\"form-control\" type=\"text\" formControlName=\"HIGH_VALUE\"\n                         [readonly]=\"readonly\"  (change)=\"onChangeDomainValue(i)\">\n                  <div class=\"invalid-tooltip\">\n                    {{domainValueForm.get('HIGH_VALUE').errors?.message}}\n                  </div>\n                </div>\n              </td>\n              <td [formGroup]=\"domainValueForm\" class=\"dk-description\">\n                <input  class=\"form-control\" type=\"text\" formControlName=\"LOW_VALUE_TEXT\" maxlength=\"100\"\n                        [readonly]=\"readonly\">\n              </td>\n              <td class=\"dk-actions\">\n                <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"insertDomainValue(i)\" title=\"Insert\">\n                  <span class=\"fas fa-plus\"></span>\n                </button>\n                <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteDomainValue(i)\" title=\"Delete\">\n                  <span class=\"far fa-trash-alt\"></span>\n                </button>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    72750:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/data-domain/data-domain.component.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchDataDomain(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedDataDomain\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newDataDomian()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let dataDomain of dataDomainList\" routerLink=\"/model/data-domain/{{dataDomain.DOMAIN_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(dataDomain)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{dataDomain.DOMAIN_ID}}</h5>\n          <small>version: {{dataDomain.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{dataDomain.DOMAIN_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{dataDomain.LAST_CHANGE_BY}} @{{dataDomain.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    41384:
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/data-element/data-element-detail/data-element-detail.component.html ***!
      \*********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"dataElementMeta\" [formGroup]=\"dataElementForm\">\n  <div class=\"form-group\">\n    <label for=\"dataElement\" class=\"col-form-label form-control-sm\">Data Element:\n      <span [class.ng-invalid]=\"dataElementForm.get('ELEMENT_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{dataElementForm.get('ELEMENT_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"dataElement\" [readonly]=\"readonly || !isNewMode\"\n           (change)=\"onChangeDataElementID()\" name=\"dataElement\" formControlName=\"ELEMENT_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"dataElement-desc\" class=\"col-form-label form-control-sm\">Data Element Description:\n    </label>\n    <textarea class=\"form-control\" id=\"dataElement-desc\" name=\"dataElement-desc\" rows=\"2\"\n              formControlName=\"ELEMENT_DESC\" [readonly]=\"readonly\" (change)=\"onChangeDataElementDesc()\"></textarea>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Data Type</div>\n    <div class=\"card-body\">\n      <div class=\"ml-2 mb-3 row\">\n        <div class=\"col-8 col-lg-3 custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"use-domain\" name=\"USE_DOMAIN\"\n                 [value]=\"1\" formControlName=\"USE_DOMAIN\" (change)=\"onChangeUseDomain(dataElementForm)\" required>\n          <label class=\"custom-control-label\" for=\"use-domain\">Data Domain</label>\n        </div>\n        <div class=\"input-group col-8 col-lg-4\">\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"data-domain\" (change)=\"onChangeDataDomain(dataElementForm)\"\n                 [readonly]=\"readonly || !dataElementForm.get('USE_DOMAIN').value\" name=\"dataElement\" formControlName=\"DOMAIN_ID\"\n                 (dblclick)=\"onGoToDataDomain(dataElementForm.value['DOMAIN_ID'])\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchDomain\"\n                    (click)=\"onDataDomainSearchHelp(dataElementForm)\">\n              <span class=\"fas fa-search\"></span>\n            </button>\n          </div>\n        </div>\n        <span [class.ng-invalid]=\"dataElementForm.get('DOMAIN_ID').invalid\" class=\"dk-invalid-feedback\">\n          {{dataElementForm.get('DOMAIN_ID').errors?.required? 'A Data Domain is required': null}}\n          {{dataElementForm.get('DOMAIN_ID').errors?.message}}\n        </span>\n      </div>\n\n      <div class=\"ml-2 mb-2 row\">\n        <div class=\"col-8 col-lg-3 custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"use-data-type\" name=\"USE_DOMAIN\"\n                 [value]=\"0\" formControlName=\"USE_DOMAIN\" (change)=\"onChangeUseDomain(dataElementForm)\" required>\n          <label class=\"custom-control-label\" for=\"use-data-type\">Elementary Type</label>\n        </div>\n        <div class=\"input-group col-8 col-lg-4\">\n          <select formControlName=\"DATA_TYPE\" (change)=\"onChangeDataType(dataElementForm)\"\n                  class=\"form-control form-control-sm\">\n            <option *ngFor=\"let opt of dataTypes\" [value]=\"opt.key\">{{opt.value}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"ml-2 row\">\n        <div class=\"col-lg-3\"></div>\n        <div class=\"form-group col-4 col-lg-2\">\n          <label class=\"col-form-label col-form-label-sm\" for=\"data-length\">Length:\n          </label>\n          <input type=\"number\" formControlName=\"DATA_LENGTH\" id=\"data-length\" name=\"data-length\" class=\"form-control form-control-sm\"\n                 [readonly]=\"readonly\" >\n          <span class=\"dk-invalid-feedback\">{{dataElementForm.get('DATA_LENGTH').errors?.message}}</span>\n        </div>\n        <div class=\"form-group col-4 col-lg-2\">\n          <label class=\"col-form-label col-form-label-sm\" for=\"decimal-place\">Decimal Place:\n          </label>\n          <input type=\"number\" formControlName=\"DECIMAL\" id=\"decimal-place\" name=\"decimal-place\"\n                 class=\"form-control form-control-sm\" [readonly]=\"readonly\">\n          <span class=\"dk-invalid-feedback\">{{dataElementForm.get('DECIMAL').errors?.message}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Text</div>\n    <div class=\"card-body\">\n      <div class=\"ml-2 form-group row\">\n        <label class=\"col-form-label col-form-label-sm col-lg-3\" for=\"label-text\">Label Text</label>\n        <input type=\"text\" formControlName=\"LABEL_TEXT\" id=\"label-text\" name=\"label-text\"\n               class=\"form-control form-control-sm col-md-6\" [readonly]=\"readonly\">\n      </div>\n\n      <div class=\"ml-2 form-group row\">\n        <label class=\"col-form-label col-form-label-sm col-lg-3\" for=\"list-header-text\">List Header Text</label>\n        <input type=\"text\" formControlName=\"LIST_HEADER_TEXT\" id=\"list-header-text\" name=\"list-header-text\"\n               class=\"form-control form-control-sm col-md-6\" [readonly]=\"readonly\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Additional Attribute</div>\n    <div class=\"card-body\">\n      <div class=\"ml-2 form-group row\">\n        <label class=\"col-form-label col-form-label-sm col-lg-3\" for=\"search-help\">Search Help</label>\n        <div class=\"input-group col-8 col-lg-4\">\n          <input type=\"text\" formControlName=\"SEARCH_HELP_ID\" id=\"search-help\" name=\"search-help\"\n                 class=\"form-control form-control-sm\" [readonly]=\"readonly\" (change)=\"onChangeSearchHelp(dataElementForm)\"\n                 (dblclick)=\"onGoToSearchHelp(dataElementForm.value['SEARCH_HELP_ID'])\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchSearchHelp\"\n                    (click)=\"onSearchHelpSearchHelp(dataElementForm)\">\n              <span class=\"fas fa-search\"></span>\n            </button>\n          </div>\n        </div>\n        <span [class.ng-invalid]=\"dataElementForm.get('SEARCH_HELP_ID').invalid\" class=\"dk-invalid-feedback\">\n            {{dataElementForm.get('SEARCH_HELP_ID').errors?.message}}\n        </span>\n      </div>\n\n      <div class=\"ml-2 form-group row\">\n        <label class=\"col-form-label col-form-label-sm col-lg-3\" for=\"sh-export-field\">Export Field</label>\n        <div class=\"input-group col-8 col-lg-4\">\n          <select formControlName=\"SEARCH_HELP_EXPORT_FIELD\" class=\"form-control form-control-sm\" id=\"sh-export-field\">\n            <option *ngFor=\"let exportField of searchHelpExportField\" [value]=\"exportField\">{{exportField}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"ml-2 form-group row\">\n        <label class=\"col-form-label col-form-label-sm col-lg-3\" for=\"parameter\">Parameter</label>\n        <div class=\"input-group col-8 col-lg-4\">\n          <input type=\"text\" formControlName=\"PARAMETER_ID\" id=\"parameter\" name=\"parameter\"\n                 class=\"form-control form-control-sm\" [readonly]=\"readonly\">\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    23990:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/data-element/data-element.component.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchDataElement(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedDataElement\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newDataElement()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let dataElement of dataElementList\" routerLink=\"/model/data-element/{{dataElement.ELEMENT_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(dataElement)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{dataElement.ELEMENT_ID}}</h5>\n          <small>version: {{dataElement.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{dataElement.ELEMENT_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{dataElement.LAST_CHANGE_BY}} @{{dataElement.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    20715:
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.html ***!
      \******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"entityMeta\" [formGroup]=\"entityTypeForm\">\n  <div class=\"form-group\">\n    <label for=\"entity-type\" class=\"col-form-label form-control-sm\">Entity Type:\n      <span [class.ng-invalid]=\"entityTypeForm.get('ENTITY_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{entityTypeForm.get('ENTITY_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"entity-type\" [readonly]=\"readonly || !isNewMode\"\n           name=\"entity-type\" formControlName=\"ENTITY_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"entity-desc\" class=\"col-form-label form-control-sm\">Entity Description:</label>\n    <textarea class=\"form-control\" id=\"entity-desc\" name=\"entity-desc\" rows=\"2\"\n              formControlName=\"ENTITY_DESC\" [readonly]=\"readonly\" (change)=\"onChangeEntityDesc()\"></textarea>\n  </div>\n\n  <app-attribute-meta [readonly]=\"readonly\" [parentForm]=\"entityTypeForm\" [attributes]=\"attributes\"\n                      [relationID]=\"entityMeta.ENTITY_ID\" [isNewMode]=\"isNewMode\">\n  </app-attribute-meta>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-user-check\"></span> Role</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm dk-table\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">Action</th>\n            <th scope=\"col\">Role</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Conditional Attribute</th>\n            <th scope=\"col\">Conditional Value</th>\n          </tr>\n        </thead>\n\n        <tbody formArrayName=\"ROLES\">\n        <tr *ngFor=\"let roleFormGroup of roleFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRole(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"ROLE_ID\"\n                     [readonly]=\"readonly || oldRole(roleFormGroup) && roleFormGroup.valid\" (change)=\"onChangeRoleID(i)\"\n                     (dblclick)=\"onGoToRole(roleFormGroup.value['ROLE_ID'])\">\n              <div class=\"invalid-tooltip\">\n                {{roleFormGroup.get('ROLE_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRole\"\n                        (click)=\"onSearchHelp(roleFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <input type=\"text\" formControlName=\"ROLE_DESC\" readonly class=\"form-control form-control-sm dk-description\">\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <select formControlName=\"CONDITIONAL_ATTR\"  class=\"form-control form-control-sm\">\n              <option *ngFor=\"let opt of attrFormArray.controls\" [value]=\"opt.value.ATTR_NAME\">{{opt.value.ATTR_NAME}}</option>\n            </select>\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <input type=\"text\" formControlName=\"CONDITIONAL_VALUE\" [readonly]=\"readonly\" class=\"form-control form-control-sm\">\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    18276:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/entity-type/entity-type.component.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchEntityType(searchBox.value)\" >\n      </div>\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedEntityType\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newEntityType()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let entityType of entityTypeList\" routerLink=\"/model/entity-type/{{entityType.ENTITY_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(entityType)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{entityType.ENTITY_ID}}</h5>\n          <small>version: {{entityType.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{entityType.ENTITY_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{entityType.LAST_CHANGE_BY}} @{{entityType.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    14321:
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/model.component.html ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul class=\"nav nav-tabs mt-1\">\n  <li class=\"nav-item active\">\n    <a class=\"nav-link\" routerLink=\"/model/entity-type\" routerLinkActive=\"active\">Entity</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/role\" routerLinkActive=\"active\">Role</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/relation\" routerLinkActive=\"active\">Relation</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/relationship\" routerLinkActive=\"active\">Relationship</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/data-element\" routerLinkActive=\"active\">Data Element</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/data-domain\" routerLinkActive=\"active\">Data Domain</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/search-help\" routerLinkActive=\"active\">Search Help</a>\n  </li>\n</ul>\n\n<div class=\"dk-model-content\">\n  <router-outlet></router-outlet>\n</div>\n\n";
      /***/
    },

    /***/
    90185:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/relation/relation-detail/relation-detail.component.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"relationMeta\" [formGroup]=\"relationForm\">\n  <div class=\"form-group\">\n    <label for=\"relation\" class=\"col-form-label form-control-sm\">Relation:\n      <span [class.ng-invalid]=\"relationForm.get('RELATION_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{relationForm.get('RELATION_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"relation\" [readonly]=\"readonly || !isNewMode\"\n          name=\"relation\" formControlName=\"RELATION_ID\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"relation-desc\" class=\"col-form-label form-control-sm\">Relation Description:</label>\n    <textarea class=\"form-control\" id=\"relation-desc\" name=\"relation-desc\" rows=\"2\"\n              (change)=\"onChangeRelationDesc()\" formControlName=\"RELATION_DESC\" [readonly]=\"readonly\"></textarea>\n  </div>\n\n  <app-attribute-meta [readonly]=\"readonly\" [parentForm]=\"relationForm\" [attributes]=\"relationMeta.ATTRIBUTES\"\n                      [relationID]=\"relationMeta.RELATION_ID\" [isNewMode]=\"isNewMode\">\n  </app-attribute-meta>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-atlas\"></span> Association</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm dk-table\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Association</th>\n          <th scope=\"col\">Right Relation</th>\n          <th scope=\"col\">Cardinality</th>\n          <th scope=\"col\" title=\"Foreign Key Check\">FC</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"ASSOCIATIONS\">\n        <tr *ngFor=\"let associationFormGroup of associationFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteAssociation(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n            <button class=\"btn btn-sm\" type=\"button\" (click)=\"openFieldMapModal(i)\" title=\"Fields Mapping\">\n              <span class=\"fas fa-map-signs\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"associationFormGroup\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"ASSOCIATION_NAME\"\n                     [readonly]=\"readonly || oldAssociationName(associationFormGroup) && associationFormGroup.valid\"\n                     (change)=\"onChangeAssociationName(i)\">\n              <div class=\"invalid-tooltip\">\n                {{associationFormGroup.get('ASSOCIATION_NAME').errors?.message}}\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"associationFormGroup\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"RIGHT_RELATION_ID\"\n                     [readonly]=\"readonly\" (change)=\"onChangeRightRelationID(i)\"\n                     (dblclick)=\"onGoToRelation(associationFormGroup.value['RIGHT_RELATION_ID'])\">\n              <div class=\"invalid-tooltip\">\n                {{associationFormGroup.get('RIGHT_RELATION_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRelation\"\n                        (click)=\"onSearchHelp('RIGHT_RELATION_ID', associationFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"associationFormGroup\">\n            <select class=\"form-control form-control-sm\" formControlName=\"CARDINALITY\"\n                    (change)=\"onChangeCardinality(associationFormGroup)\">\n              <option>[0..1]</option>\n              <option>[1..1]</option>\n              <option>[0..n]</option>\n              <option>[1..n]</option>\n            </select>\n          </td>\n          <td [formGroup]=\"associationFormGroup\">\n            <input type=\"checkbox\" formControlName=\"FOREIGN_KEY_CHECK\">\n          </td>\n        </tr>\n\n        <div *ngIf=\"currentAssociationForm\" class=\"modal fade dk-modal-open\" [ngClass]=\"{'show': isFieldMapShown}\"\n             [ngStyle]=\"{'display': displayFieldMapModal}\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"detail\">Fields Mapping</h5>\n                <button type=\"button\" class=\"close\" (click)=\"closeFieldMapModal()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <table class=\"table table-bordered table-sm dk-table\" [formGroup]=\"currentAssociationForm\">\n                  <thead class=\"thead-light\">\n                  <tr>\n                    <th scope=\"col\">Action</th>\n                    <th scope=\"col\">Left Table Field</th>\n                    <th scope=\"col\">Right Table Field</th>\n                  </tr>\n                  </thead>\n\n                  <tbody formArrayName=\"FIELDS_MAPPING\">\n                    <tr *ngFor=\"let fieldMapFormGroup of fieldMapFormArray.controls; let i = index\">\n                      <td class=\"dk-actions\">\n                        <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteFieldMap(i)\" title=\"Delete\">\n                          <span class=\"far fa-trash-alt\"></span>\n                        </button>\n                      </td>\n                      <td [formGroup]=\"fieldMapFormGroup\">\n                        <div class=\"input-group\">\n                          <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"LEFT_FIELD\"\n                                 [readonly]=\"readonly || oldFieldMap(fieldMapFormGroup) && fieldMapFormGroup.valid\" (change)=\"onChangeLeftField(i)\">\n                          <div class=\"invalid-tooltip\">\n                            {{fieldMapFormGroup.get('LEFT_FIELD').errors?.message}}\n                          </div>\n                        </div>\n                      </td>\n                      <td [formGroup]=\"fieldMapFormGroup\">\n                        <div class=\"input-group\">\n                          <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"RIGHT_FIELD\"\n                                 [readonly]=\"readonly || oldFieldMap(fieldMapFormGroup) && fieldMapFormGroup.valid\" (change)=\"onChangeRightField(i)\">\n                          <div class=\"invalid-tooltip\">\n                            {{fieldMapFormGroup.get('RIGHT_FIELD').errors?.message}}\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"closeFieldMapModal()\">OK</button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n\n";
      /***/
    },

    /***/
    3487:
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/relation/relation.component.html ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchRelation(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedRelation\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newRelation()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let relation of relationList\" routerLink=\"/model/relation/{{relation.RELATION_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(relation)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{relation.RELATION_ID}}</h5>\n          <small>version: {{relation.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{relation.RELATION_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{relation.LAST_CHANGE_BY}} @{{relation.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    41240:
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/relationship/relationship-detail/relationship-detail.component.html ***!
      \*********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"relationshipMeta\" [formGroup]=\"relationshipForm\">\n  <div class=\"form-group\">\n    <label for=\"relationship\" class=\"col-form-label form-control-sm\">Relationship:\n      <span [class.ng-invalid]=\"relationshipForm.get('RELATIONSHIP_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{relationshipForm.get('RELATIONSHIP_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"relationship\" [readonly]=\"readonly || !isNewMode\"\n           name=\"relationship\" formControlName=\"RELATIONSHIP_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"relationship-desc\" class=\"col-form-label form-control-sm\">Relationship Description:</label>\n    <textarea class=\"form-control\" id=\"relationship-desc\" name=\"relationship-desc\" rows=\"2\"\n              formControlName=\"RELATIONSHIP_DESC\" [readonly]=\"readonly\" (change)=\"onChangeRelationshipDesc()\"></textarea>\n  </div>\n  <div class=\"row ml-2\">\n    <div class=\"col-8 col-lg-3 form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"timeDependent\" name=\"timeDependent\"\n             formControlName=\"TIME_DEPENDENT\" (change)=\"onChangeTimeDependency()\">\n      <label for=\"timeDependent\" class=\"form-check-label\">Time Dependent</label>\n    </div>\n    <div class=\"col-8 col-lg-4 form-group row mx-3\">\n      <label for=\"valid_period\" class=\"col-form-label form-control-sm\">Default Period of Validity(seconds):\n        <span [class.ng-invalid]=\"relationshipForm.get('VALID_PERIOD').invalid\" class=\"dk-invalid-feedback\">\n        {{relationshipForm.get('VALID_PERIOD').errors?.message}}\n      </span>\n      </label>\n      <input type=\"number\" class=\"form-control form-control-sm\" id=\"valid_period\" [readonly]=\"readonly\"\n             name=\"valid_period\" formControlName=\"VALID_PERIOD\">\n    </div>\n    <div class=\"col-8 col-lg-3 form-check\" >\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"singleton\" name=\"singleton\"\n             formControlName=\"SINGLETON\">\n      <label for=\"singleton\" class=\"form-check-label\">Singleton</label>\n    </div>\n  </div>\n\n  <app-attribute-meta [readonly]=\"readonly\" [parentForm]=\"relationshipForm\" [attributes]=\"attributes\"\n                      [relationID]=\"relationshipMeta.RELATIONSHIP_ID\" [isNewMode]=\"isNewMode\">\n  </app-attribute-meta>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-user-check\"></span> Involved Roles</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Role</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Cardinality</th>\n          <th scope=\"col\">Direction</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"INVOLVES\">\n        <tr *ngFor=\"let involveFormGroup of involveFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteInvolve(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"ROLE_ID\"\n                     [readonly]=\"readonly || oldInvolve(involveFormGroup) && involveFormGroup.valid\" (change)=\"onChangeRoleID(i)\"\n                     (dblclick)=\"onGoToRole(involveFormGroup.value['ROLE_ID'])\">\n              <div class=\"invalid-tooltip\">\n                {{involveFormGroup.get('ROLE_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRole\"\n                        (click)=\"onSearchHelp(involveFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <input type=\"text\" formControlName=\"ROLE_DESC\" readonly class=\"form-control form-control-sm dk-description\">\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <select class=\"form-control form-control-sm\" formControlName=\"CARDINALITY\">\n              <option>[1..1]</option>\n              <option>[1..n]</option>\n            </select>\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"DIRECTION\" [readonly]=\"readonly\">\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    3087:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/relationship/relationship.component.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchRelationship(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedRelationship\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newRelationship()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let relationship of relationshipList\" routerLink=\"/model/relationship/{{relationship.RELATIONSHIP_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(relationship)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{relationship.RELATIONSHIP_ID}}</h5>\n          <small>version: {{relationship.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{relationship.RELATIONSHIP_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{relationship.LAST_CHANGE_BY}} @{{relationship.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    88917:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/role/role-detail/role-detail.component.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"roleMeta\" [formGroup]=\"roleForm\">\n  <div class=\"form-group\">\n    <label for=\"role\" class=\"col-form-label form-control-sm\">Role:\n      <span [class.ng-invalid]=\"roleForm.get('ROLE_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{roleForm.get('ROLE_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"role\" [readonly]=\"readonly || !isNewMode\"\n           name=\"role\" formControlName=\"ROLE_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"role-desc\" class=\"col-form-label form-control-sm\">Role Description:</label>\n    <textarea class=\"form-control\" id=\"role-desc\" name=\"role-desc\" rows=\"2\"\n              formControlName=\"ROLE_DESC\" [readonly]=\"readonly\" (change)=\"onChangeRoleDesc()\"></textarea>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-user-check\"></span> Relation</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Relation</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Cardinality</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"RELATIONS\">\n        <tr *ngFor=\"let relationFormGroup of relationFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRelation(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"relationFormGroup\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"RELATION_ID\"\n                     [readonly]=\"readonly || oldRelation(relationFormGroup) && relationFormGroup.valid\" (change)=\"onChangeRelationID(i)\"\n                     (dblclick)=\"onGoToRelation(relationFormGroup.value['RELATION_ID'])\">\n              <div class=\"invalid-tooltip\">\n                {{relationFormGroup.get('RELATION_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRelation\"\n                        (click)=\"onSearchHelp(relationFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"relationFormGroup\">\n            <input type=\"text\" formControlName=\"RELATION_DESC\" readonly class=\"form-control form-control-sm dk-description\">\n          </td>\n          <td [formGroup]=\"relationFormGroup\">\n            <select class=\"form-control form-control-sm\" formControlName=\"CARDINALITY\">\n              <option>[0..1]</option>\n              <option>[1..1]</option>\n              <option>[0..n]</option>\n              <option>[1..n]</option>\n            </select>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    1129:
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/role/role.component.html ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchRole(searchBox.value)\" >\n      </div>\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedRole\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newRole()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let role of roleList\" routerLink=\"/model/role/{{role.ROLE_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(role)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{role.ROLE_ID}}</h5>\n          <small>version: {{role.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{role.ROLE_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{role.LAST_CHANGE_BY}} @{{role.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    97549:
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/search-help/search-help-detail/search-help-detail.component.html ***!
      \******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"searchHelpMeta\" [formGroup]=\"searchHelpForm\">\n  <div class=\"form-group\">\n    <label for=\"searchHelp\" class=\"col-form-label form-control-sm\">Search Help:\n      <span [class.ng-invalid]=\"searchHelpForm.get('SEARCH_HELP_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{searchHelpForm.get('SEARCH_HELP_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"searchHelp\" [readonly]=\"readonly || !isNewMode\"\n           (change)=\"onChangeSearchHelpID()\" name=\"searchHelp\" formControlName=\"SEARCH_HELP_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"searchHelp-desc\" class=\"col-form-label form-control-sm\">Search Help Description:</label>\n    <textarea class=\"form-control\" id=\"searchHelp-desc\" name=\"searchHelp-desc\" rows=\"2\"\n              formControlName=\"SEARCH_HELP_DESC\" [readonly]=\"readonly\" (change)=\"onChangeSearchHelpDesc()\"></textarea>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Search Help Definition</div>\n    <div class=\"card-body\">\n      <div class=\"card mb-2\">\n        <div class=\"ml-4 mt-2\">\n          <label class=\"col-form-label col-form-label-sm\" for=\"ENTITY_ID\">Entity and Relation:\n            <span [class.ng-invalid]=\"searchHelpForm.get('ENTITY_ID').invalid\" class=\"dk-invalid-feedback\">\n                  {{searchHelpForm.get('ENTITY_ID').errors?.message}}\n            </span>\n          </label>\n        </div>\n        <div class=\"card-body row\">\n          <div class=\"input-group col-lg-4 ml-1\">\n            <input type=\"text\" formControlName=\"ENTITY_ID\" id=\"ENTITY_ID\" name=\"ENTITY_ID\" placeholder=\"Entity Type\"\n                   class=\"form-control form-control-sm\" [readonly]=\"readonly\" (change)=\"onChangeEntityID(searchHelpForm)\"\n                   (dblclick)=\"onGoToEntity(searchHelpForm.get('ENTITY_ID').value)\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchEntity\"\n                      (click)=\"onEntitySearchHelp(searchHelpForm)\">\n                <span class=\"fas fa-search\"></span>\n              </button>\n            </div>\n          </div>\n          <select formControlName=\"RELATION_ID\" class=\"form-control form-control-sm col-lg-4 ml-2 mr-3\"\n                  (change)=\"onChangeRelationID(searchHelpForm)\">\n            <option *ngFor=\"let relation of relationsOfEntity\" [value]=\"relation\">{{relation}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"card mb-2\">\n        <div class=\"card-body row\">\n          <div class=\"form-group row col-lg-5 mr-2\">\n            <label class=\"col-form-label col-form-label-sm col-4 text-right\" for=\"behaviour\">Behaviour:</label>\n            <select formControlName=\"BEHAVIOUR\" class=\"form-control form-control-sm col-8\" id=\"behaviour\">\n              <option *ngFor=\"let opt of behaviours\" [value]=\"opt.key\">{{opt.value}}</option>\n            </select>\n          </div>\n          <div class=\"form-check col-lg-3 ml-4\">\n            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"MULTI\" id=\"Multiple\">\n            <label class=\"form-check-label\" for=\"Multiple\">Multiple Values</label>\n          </div>\n<!--          <div class=\"form-check col-lg-3 ml-4\">-->\n<!--            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"FUZZY_SEARCH\" id=\"fuzzySearch\">-->\n<!--            <label class=\"form-check-label\" for=\"fuzzySearch\">Fuzzy Search</label>-->\n<!--          </div>-->\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Search Help Fields</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered dk-table\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Relation</th>\n          <th scope=\"col\">Field Name</th>\n          <th scope=\"col\">Field Description</th>\n          <th scope=\"col\" title=\"Import the value to the filter\">I</th>\n          <th scope=\"col\" title=\"Export the value when selected\">E</th>\n          <th scope=\"col\">Alias</th>\n          <th scope=\"col\" title=\"Position in the list\">L.P.</th>\n          <th scope=\"col\" title=\"Position in the filter\">F.P.</th>\n          <th scope=\"col\" title=\"Display on in the filter\">Disp</th>\n          <th scope=\"col\" title=\"Default value in the filter\">Default</th>\n          <th scope=\"col\">Actions</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"FIELDS\">\n        <tr *ngFor=\"let fieldForm of searchHelpFieldsFormArray.controls; let i = index\">\n          <td [formGroup]=\"fieldForm\" class=\"dk-selection\">\n            <div class=\"input-group\">\n              <select formControlName=\"RELATION_ID\" class=\"form-control form-control-sm\"\n                      (change)=\"onChangeRelationID(fieldForm)\">\n                <option *ngFor=\"let relation of relationsOfEntity\" [value]=\"relation\">{{relation}}</option>\n              </select>\n            </div>\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-selection\">\n            <div class=\"input-group\">\n              <select formControlName=\"FIELD_NAME\" class=\"form-control form-control-sm\"\n                      (change)=\"onChangeField(fieldForm)\">\n                <option *ngFor=\"let attribute of relationAttributesMap[fieldForm.get('RELATION_ID').value]\"\n                        [value]=\"attribute['ATTR_NAME']\">{{attribute['ATTR_NAME']}}</option>\n              </select>\n            </div>\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-description\">\n            <input  type=\"text\" formControlName=\"FIELD_DESC\" class=\"form-control\" maxlength=\"100\" readonly>\n          </td>\n          <td [formGroup]=\"fieldForm\">\n            <input type=\"checkbox\" formControlName=\"IMPORT\">\n          </td>\n          <td [formGroup]=\"fieldForm\">\n            <input type=\"checkbox\" formControlName=\"EXPORT\">\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-string\">\n            <input  type=\"text\" formControlName=\"IE_FIELD_NAME\" class=\"form-control form-control-sm\"  [readonly]=\"readonly\">\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-number\">\n            <input type=\"number\" min=\"0\" formControlName=\"LIST_POSITION\" class=\"form-control form-control-sm\" [readonly]=\"readonly\">\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-number\">\n            <input type=\"number\" min=\"0\" formControlName=\"FILTER_POSITION\" class=\"form-control form-control-sm\" [readonly]=\"readonly\">\n          </td>\n          <td [formGroup]=\"fieldForm\">\n            <input type=\"checkbox\" formControlName=\"FILTER_DISP_ONLY\">\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-string\">\n            <input  type=\"text\" formControlName=\"DEFAULT_VALUE\" class=\"form-control form-control-sm\"  [readonly]=\"readonly\">\n          </td>\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"insertField(i)\" title=\"Insert\">\n              <span class=\"fas fa-plus\"></span>\n            </button>\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteField(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    63494:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/search-help/search-help.component.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchSearchHelp(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedSearchHelp\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newSearchHelp()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let searchHelp of searchHelpList\" routerLink=\"/model/search-help/{{searchHelp.SEARCH_HELP_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(searchHelp)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{searchHelp.SEARCH_HELP_ID}}</h5>\n          <small>version: {{searchHelp.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{searchHelp.SEARCH_HELP_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{searchHelp.LAST_CHANGE_BY}} @{{searchHelp.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_model_model_module_ts-es5.js.map