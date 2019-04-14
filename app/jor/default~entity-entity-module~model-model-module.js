(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~entity-entity-module~model-model-module"],{

/***/ "./node_modules/rxjs/internal/BehaviorSubject.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ../internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subject.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/SubjectSubscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        _this._parentSubscription = null;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        this._parentSubscription = null;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var tryCatch_1 = __webpack_require__(/*! ./util/tryCatch */ "./node_modules/rxjs/internal/util/tryCatch.js");
var errorObject_1 = __webpack_require__(/*! ./util/errorObject */ "./node_modules/rxjs/internal/util/errorObject.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function') {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            this._parent = parent;
        }
        else if (!_parents) {
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/errorObject.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/errorObject.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/noop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/internal/util/noop.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/tryCatch.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/tryCatch.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errorObject_1 = __webpack_require__(/*! ./errorObject */ "./node_modules/rxjs/internal/util/errorObject.js");
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
//# sourceMappingURL=tryCatch.js.map

/***/ }),

/***/ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ui-message-angular/fesm5/ui-message-angular.js ***!
  \*********************************************************************/
/*! exports provided: MessageService, MessageComponent, MessageModule, Message, messageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageType", function() { return messageType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
/** @enum {string} */
var messageType = {
    Error: 'E',
    Warning: 'W',
    Success: 'S',
    Information: 'I',
    Exception: 'X',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
        this.messageSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.msgTypePattern = 'SWEIX';
        this.msgStore = [];
        this.langu = 'EN';
    }
    /**
     * @return {?}
     */
    MessageService.prototype.getObservable = /**
     * @return {?}
     */
    function () {
        return this.messageSource.asObservable();
    };
    /**
     * Tell the message service what is the message storage(array) and language
     * msgStore: an Array that stores all messages in a session
     * {string} the language preferred in the session
     */
    /**
     * Tell the message service what is the message storage(array) and language
     * msgStore: an Array that stores all messages in a session
     * {string} the language preferred in the session
     * @param {?} msgStore
     * @param {?} langu
     * @return {?}
     */
    MessageService.prototype.setMessageStore = /**
     * Tell the message service what is the message storage(array) and language
     * msgStore: an Array that stores all messages in a session
     * {string} the language preferred in the session
     * @param {?} msgStore
     * @param {?} langu
     * @return {?}
     */
    function (msgStore, langu) {
        this.msgStore = msgStore;
        this.langu = langu;
    };
    /**
     * Add a message object into a message list
     * {Message} message
     */
    /**
     * Add a message object into a message list
     * {Message} message
     * @param {?} message
     * @return {?}
     */
    MessageService.prototype.add = /**
     * Add a message object into a message list
     * {Message} message
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (!message)
            return;
        this.messages.push(message);
        this.messageSource.next(this.messages);
    };
    /**
     * Report only one message at a time
     */
    /**
     * Report only one message at a time
     * @param {?} message
     * @return {?}
     */
    MessageService.prototype.report = /**
     * Report only one message at a time
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (!message)
            return;
        this.messages = [];
        this.messages.push(message);
        this.messageSource.next(this.messages);
    };
    /**
     * Report a message at a time based on msgCat, msgName, msgType
     * It is usually used for messages generated in client side(Angular)
     * msgCat
     * msgName
     * msgType
     * {string} args
     */
    /**
     * Report a message at a time based on msgCat, msgName, msgType
     * It is usually used for messages generated in client side(Angular)
     * msgCat
     * msgName
     * msgType
     * {string} args
     * @param {?} msgCat
     * @param {?} msgName
     * @param {?} msgType
     * @param {...?} args
     * @return {?}
     */
    MessageService.prototype.reportMessage = /**
     * Report a message at a time based on msgCat, msgName, msgType
     * It is usually used for messages generated in client side(Angular)
     * msgCat
     * msgName
     * msgType
     * {string} args
     * @param {?} msgCat
     * @param {?} msgName
     * @param {?} msgType
     * @param {...?} args
     * @return {?}
     */
    function (msgCat, msgName, msgType) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        this.report(this.generateMessage.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([msgCat, msgName, msgType], args)));
    };
    /**
     * Add a message to a list based on msgCat, msgName, msgType
     * It is usually used for messages generated in client side(Angular)
     * msgCat
     * msgName
     * msgType
     * {string} args
     */
    /**
     * Add a message to a list based on msgCat, msgName, msgType
     * It is usually used for messages generated in client side(Angular)
     * msgCat
     * msgName
     * msgType
     * {string} args
     * @param {?} msgCat
     * @param {?} msgName
     * @param {?} msgType
     * @param {...?} args
     * @return {?}
     */
    MessageService.prototype.addMessage = /**
     * Add a message to a list based on msgCat, msgName, msgType
     * It is usually used for messages generated in client side(Angular)
     * msgCat
     * msgName
     * msgType
     * {string} args
     * @param {?} msgCat
     * @param {?} msgName
     * @param {?} msgType
     * @param {...?} args
     * @return {?}
     */
    function (msgCat, msgName, msgType) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        this.add(this.generateMessage.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([msgCat, msgName, msgType], args)));
    };
    /**
     * Clear all the messages in the container(show in the UI)
     */
    /**
     * Clear all the messages in the container(show in the UI)
     * @return {?}
     */
    MessageService.prototype.clearMessages = /**
     * Clear all the messages in the container(show in the UI)
     * @return {?}
     */
    function () {
        this.messages = [];
        this.messageSource.next(this.messages);
    };
    /**
     * Remove a message from the list by its index(position)
     * idx
     */
    /**
     * Remove a message from the list by its index(position)
     * idx
     * @param {?} idx
     * @return {?}
     */
    MessageService.prototype.removeMessage = /**
     * Remove a message from the list by its index(position)
     * idx
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        this.messages.splice(idx, 1);
    };
    /**
     * Generate a message object based on msgCat, msgName, msgType from the message store array
     * The message store array is generated in client side.
     * It supports variable parameters for the placeholders' replacement in short and long texts.
     */
    /**
     * Generate a message object based on msgCat, msgName, msgType from the message store array
     * The message store array is generated in client side.
     * It supports variable parameters for the placeholders' replacement in short and long texts.
     * @param {?} msgCat
     * @param {?} msgName
     * @param {?} msgType
     * @param {...?} args
     * @return {?}
     */
    MessageService.prototype.generateMessage = /**
     * Generate a message object based on msgCat, msgName, msgType from the message store array
     * The message store array is generated in client side.
     * It supports variable parameters for the placeholders' replacement in short and long texts.
     * @param {?} msgCat
     * @param {?} msgName
     * @param {?} msgType
     * @param {...?} args
     * @return {?}
     */
    function (msgCat, msgName, msgType) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        this.checkInputParameters(msgCat, msgName, msgType);
        /** @type {?} */
        var message = this.msgStore.find(function (message) {
            return message.msgCat === msgCat && message.msgName === msgName;
        });
        if (message) {
            /** @type {?} */
            var msg = new Message();
            msg.msgCat = message.msgCat;
            msg.msgName = message.msgName;
            msg.msgType = msgType;
            msg.msgShortText = this.replacePlaceholdersInShortText(message.msgText[this.langu] ? message.msgText[this.langu].shortText : message.msgText['EN'].shortText, args);
            msg.msgLongText = this.replacePlaceholdersInLongText(message.msgText[this.langu] ? message.msgText[this.langu].longText : message.msgText['EN'].longText, args);
            return msg;
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @param {?} msgCat
     * @param {?} msgName
     * @param {?} msgType
     * @return {?}
     */
    MessageService.prototype.checkInputParameters = /**
     * @private
     * @param {?} msgCat
     * @param {?} msgName
     * @param {?} msgType
     * @return {?}
     */
    function (msgCat, msgName, msgType) {
        if (!msgCat)
            throw new Error('Message Category is missing!');
        if (!msgName)
            throw new Error('Message Name is missing');
        if (this.msgTypePattern.search(msgType) === -1)
            throw new Error('Message Type is invalid!');
    };
    /**
     * @private
     * @param {?} text
     * @param {?} args
     * @return {?}
     */
    MessageService.prototype.replacePlaceholdersInShortText = /**
     * @private
     * @param {?} text
     * @param {?} args
     * @return {?}
     */
    function (text, args) {
        /** @type {?} */
        var i = -1;
        return text.replace(/%s/g, function () {
            i++;
            return ((args[i] === undefined) ? '' : args[i]);
        });
    };
    /**
     * @private
     * @param {?} text
     * @param {?} args
     * @return {?}
     */
    MessageService.prototype.replacePlaceholdersInLongText = /**
     * @private
     * @param {?} text
     * @param {?} args
     * @return {?}
     */
    function (text, args) {
        return text.replace(/(%s)([1-99])/g, function (match, p1, p2) {
            /** @type {?} */
            var i = -1 + parseInt(p2);
            return ((args[i] === undefined) ? '' : args[i]);
        });
    };
    MessageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MessageService.ctorParameters = function () { return []; };
    /** @nocollapse */ MessageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function MessageService_Factory() { return new MessageService(); }, token: MessageService, providedIn: "root" });
    return MessageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
    }
    /**
     * @return {?}
     */
    MessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.messageService.getObservable().subscribe(function (messages) { return _this.messages = messages; });
    };
    /**
     * @param {?} msgType
     * @return {?}
     */
    MessageComponent.prototype.getMessageDisplayClass = /**
     * @param {?} msgType
     * @return {?}
     */
    function (msgType) {
        switch (msgType) {
            case messageType.Error: {
                return 'alert-danger';
            }
            case messageType.Warning: {
                return 'alert-warning';
            }
            case messageType.Success: {
                return 'alert-success';
            }
            case messageType.Information: {
                return 'alert-info';
            }
            case messageType.Exception: {
                return 'alert-danger';
            }
            default: {
                return 'alert-secondary';
            }
        }
    };
    /**
     * @param {?} msgType
     * @return {?}
     */
    MessageComponent.prototype.getCardDisplayClass = /**
     * @param {?} msgType
     * @return {?}
     */
    function (msgType) {
        switch (msgType) {
            case messageType.Error: {
                return 'card-danger';
            }
            case messageType.Warning: {
                return 'card-warning';
            }
            case messageType.Success: {
                return 'card-success';
            }
            case messageType.Information: {
                return 'card-info';
            }
            case messageType.Exception: {
                return 'card-danger';
            }
            default: {
                return '';
            }
        }
    };
    /**
     * @param {?} idx
     * @return {?}
     */
    MessageComponent.prototype.removeMessage = /**
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        this.messageService.removeMessage(idx);
    };
    /**
     * @param {?} idx
     * @return {?}
     */
    MessageComponent.prototype.toggleShowLongText = /**
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        if (this.messages[idx].showLongText) {
            this.messages[idx].showLongText = false;
        }
        else {
            this.messages.forEach(function (message) { return message.showLongText = false; });
            this.messages[idx].showLongText = true;
        }
        return false; // To forbid page refresh when clicking the link
    };
    MessageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'dk-message',
                    template: "<div *ngFor=\"let message of messages; index as idx;\" class=\"dk-message\">\n  <div class=\"card\" [ngClass]=\"getCardDisplayClass(message.msgType)\">\n    <div class=\"alert card-header\" [ngClass]=\"getMessageDisplayClass(message.msgType)\" role=\"alert\" >\n      <a class=\"alert-link \" (click)=\"toggleShowLongText(idx)\" href=\"#\" >\n        {{message.msgShortText}}\n      </a>\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"removeMessage(idx)\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n\n    <div *ngIf=\"message.msgLongText\" class=\"collapse\" [ngClass]=\"{'show': message.showLongText}\">\n      <div class=\"card-body\" [innerHtml]=\"message.msgLongText\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n",
                    styles: [".card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;color:inherit;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger .alert-link{color:#491217}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning .alert-link{color:#533f03}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info .alert-link{color:#062c33}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-link{font-weight:700}.close:not(:disabled):not(.disabled){cursor:pointer}.collapse:not(.show){display:none}.card-body{flex:1 1 auto;padding:1.25rem}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a{color:#007bff;background-color:transparent}button,select{text-transform:none}button,input{overflow:visible}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button{border-radius:0}.alert.card-header{margin-bottom:0}.dk-message{margin-bottom:.5rem}"]
                }] }
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = function () { return [
        { type: MessageService }
    ]; };
    return MessageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                    ],
                    declarations: [MessageComponent],
                    exports: [MessageComponent]
                },] }
    ];
    return MessageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ui-message-angular.js.map

/***/ }),

/***/ "./src/app/entity.service.ts":
/*!***********************************!*\
  !*** ./src/app/entity.service.ts ***!
  \***********************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./msgStore */ "./src/app/msgStore.ts");
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
var EntityService = /** @class */ (function () {
    function EntityService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.originalHost = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].originalHost;
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_5__["msgStore"], 'EN');
    }
    EntityService.prototype.listEntityID = function () {
        return this.http.get(this.originalHost + "/api/entity/EntityIDs").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityID')));
    };
    EntityService.prototype.getEntityMeta = function (entityID) {
        return this.http.get(this.originalHost + ("/api/entity/meta/" + entityID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityMeta')));
    };
    EntityService.prototype.searchEntities = function (queryObject) {
        return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchEntities')));
    };
    EntityService.prototype.getEntityInstance = function (instanceGUID) {
        return this.http.get(this.originalHost + ("/api/entity/instance/" + instanceGUID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityInstance')));
    };
    EntityService.prototype.getRelationMeta = function (relationID) {
        return this.http.get(this.originalHost + ("/api/relation/meta/" + relationID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationMeta')));
    };
    EntityService.prototype.getRelationMetaOfEntity = function (entityID) {
        return this.http.get(this.originalHost + ("/api/relation/meta/entity/" + entityID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationMetaOfEntity')));
    };
    EntityService.prototype.createEntityInstance = function (instance) {
        return this.http.post(this.originalHost + "/api/entity", instance, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('createEntityInstance')));
    };
    EntityService.prototype.changeEntityInstance = function (instance) {
        return this.http.put(this.originalHost + "/api/entity", instance, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('changeEntityInstance')));
    };
    EntityService.prototype.listEntityType = function (term) {
        return this.http.get(this.originalHost + ("/api/model/entity-type/list?term=" + term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityType')));
    };
    EntityService.prototype.getEntityTypeDesc = function (entityID) {
        return this.http.get(this.originalHost + ("/api/model/entity-type/desc/" + entityID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityTypeDesc')));
    };
    EntityService.prototype.saveEntityType = function (entityType) {
        return this.http.post(this.originalHost + "/api/model/entity-type", entityType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveEntityType')));
    };
    EntityService.prototype.listRelation = function (term) {
        return this.http.get(this.originalHost + ("/api/model/relation/list?term=" + term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRelation')));
    };
    EntityService.prototype.getRelationDesc = function (relationID) {
        return this.http.get(this.originalHost + ("/api/model/relation/desc/" + relationID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationDesc')));
    };
    EntityService.prototype.saveRelation = function (relation) {
        return this.http.post(this.originalHost + "/api/model/relation", relation, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRelation')));
    };
    EntityService.prototype.listRelationship = function (term) {
        return this.http.get(this.originalHost + ("/api/model/relationship/list?term=" + term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRelationship')));
    };
    EntityService.prototype.getRelationship = function (relationshipID) {
        return this.http.get(this.originalHost + ("/api/model/relationship/" + relationshipID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationship')));
    };
    EntityService.prototype.getRelationshipDesc = function (relationshipID) {
        return this.http.get(this.originalHost + ("/api/model/relationship/desc/" + relationshipID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationshipDesc')));
    };
    EntityService.prototype.saveRelationship = function (relationship) {
        return this.http.post(this.originalHost + "/api/model/relationship", relationship, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRelationship')));
    };
    EntityService.prototype.listRole = function (term) {
        return this.http.get(this.originalHost + ("/api/model/role/list?term=" + term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRole')));
    };
    EntityService.prototype.getRole = function (roleID) {
        return this.http.get(this.originalHost + ("/api/model/role/" + roleID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRole')));
    };
    EntityService.prototype.getRoleDesc = function (roleID) {
        return this.http.get(this.originalHost + ("/api/model/role/desc/" + roleID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDesc')));
    };
    EntityService.prototype.saveRole = function (role) {
        return this.http.post(this.originalHost + "/api/model/role", role, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRole')));
    };
    EntityService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            if (error.status === 401) {
                _this.messageService.addMessage('EXCEPTION', 'SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["messageType"].Exception);
            }
            else {
                _this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["messageType"].Exception, operation, error.message);
            }
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    EntityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], EntityService);
    return EntityService;
}());



/***/ }),

/***/ "./src/app/entity.ts":
/*!***************************!*\
  !*** ./src/app/entity.ts ***!
  \***************************/
/*! exports provided: Entity, Relationship, RelationshipInstance, PartnerInstance, EntityMeta, Attribute, Role, RoleRelation, RelationshipMeta, Involve, RelationMeta, Association, FieldsMappingPair, EntityRelation, Selection, Projection, QueryObject, Sort, EntityType, Relation, RelationshipH, RoleH, RoleMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relationship", function() { return Relationship; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipInstance", function() { return RelationshipInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerInstance", function() { return PartnerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityMeta", function() { return EntityMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRelation", function() { return RoleRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipMeta", function() { return RelationshipMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Involve", function() { return Involve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationMeta", function() { return RelationMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Association", function() { return Association; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsMappingPair", function() { return FieldsMappingPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityRelation", function() { return EntityRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projection", function() { return Projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryObject", function() { return QueryObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relation", function() { return Relation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipH", function() { return RelationshipH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleH", function() { return RoleH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleMeta", function() { return RoleMeta; });
// TODO Export these types in packaging
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());

var Relationship = /** @class */ (function () {
    function Relationship() {
    }
    return Relationship;
}());

var RelationshipInstance = /** @class */ (function () {
    function RelationshipInstance() {
    }
    return RelationshipInstance;
}());

var PartnerInstance = /** @class */ (function () {
    function PartnerInstance() {
    }
    return PartnerInstance;
}());

var EntityMeta = /** @class */ (function () {
    function EntityMeta() {
    }
    return EntityMeta;
}());

var Attribute = /** @class */ (function () {
    function Attribute() {
    }
    return Attribute;
}());

var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());

var RoleRelation = /** @class */ (function () {
    function RoleRelation() {
    }
    return RoleRelation;
}());

var RelationshipMeta = /** @class */ (function () {
    function RelationshipMeta() {
    }
    return RelationshipMeta;
}());

var Involve = /** @class */ (function () {
    function Involve() {
    }
    return Involve;
}());

var RelationMeta = /** @class */ (function () {
    function RelationMeta() {
    }
    return RelationMeta;
}());

var Association = /** @class */ (function () {
    function Association() {
    }
    return Association;
}());

var FieldsMappingPair = /** @class */ (function () {
    function FieldsMappingPair() {
    }
    return FieldsMappingPair;
}());

var EntityRelation = /** @class */ (function () {
    function EntityRelation() {
    }
    return EntityRelation;
}());

var Selection = /** @class */ (function () {
    function Selection() {
    }
    return Selection;
}());

var Projection = /** @class */ (function () {
    function Projection() {
    }
    return Projection;
}());

var QueryObject = /** @class */ (function () {
    function QueryObject() {
    }
    return QueryObject;
}());

var Sort = /** @class */ (function () {
    function Sort() {
    }
    return Sort;
}());

var EntityType = /** @class */ (function () {
    function EntityType() {
    }
    return EntityType;
}());

var Relation = /** @class */ (function () {
    function Relation() {
    }
    return Relation;
}());

var RelationshipH = /** @class */ (function () {
    function RelationshipH() {
    }
    return RelationshipH;
}());

var RoleH = /** @class */ (function () {
    function RoleH() {
    }
    return RoleH;
}());

var RoleMeta = /** @class */ (function () {
    function RoleMeta() {
    }
    return RoleMeta;
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
            EN: { shortText: 'Entity instance is not changed', longText: '' }
        }
    },
    { msgCat: 'ENTITY',
        msgName: 'ENTITY_SAVED',
        msgText: {
            EN: { shortText: 'Entity instance is saved', longText: '' }
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
            EN: { shortText: 'No Change is made!', longText: '' }
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
        msgName: 'RELATION_ID_MISSING',
        msgText: {
            EN: { shortText: 'Relation ID is missing', longText: '' }
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
        msgName: 'UNSAVED_NEW',
        msgText: {
            EN: { shortText: 'There is a unsaved new object existing, please save it first, then create another.', longText: '' }
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=default~entity-entity-module~model-model-module.js.map