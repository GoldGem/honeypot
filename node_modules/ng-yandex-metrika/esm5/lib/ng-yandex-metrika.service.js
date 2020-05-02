/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { DEFAULT_COUNTER_ID, YANDEX_COUNTERS_CONFIGS } from './ng-yandex-metrika.config';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function CallbackOptions() { }
if (false) {
    /** @type {?|undefined} */
    CallbackOptions.prototype.callback;
    /** @type {?|undefined} */
    CallbackOptions.prototype.ctx;
}
/**
 * @record
 */
export function CommonOptions() { }
if (false) {
    /** @type {?|undefined} */
    CommonOptions.prototype.params;
    /** @type {?|undefined} */
    CommonOptions.prototype.title;
}
/**
 * @record
 */
export function HitOptions() { }
if (false) {
    /** @type {?|undefined} */
    HitOptions.prototype.referer;
}
var Metrika = /** @class */ (function () {
    function Metrika(injector) {
        this.defaultCounterId = injector.get(DEFAULT_COUNTER_ID);
        this.counterConfigs = injector.get(YANDEX_COUNTERS_CONFIGS);
        this.positionToId = this.counterConfigs.map((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.id; }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    Metrika.getCounterNameById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return "yaCounter" + id;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    Metrika.getCounterById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return window[Metrika.getCounterNameById(id)];
    };
    /**
     * @param {?} extensions
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.addFileExtension = /**
     * @param {?} extensions
     * @param {?=} counterPosition
     * @return {?}
     */
    function (extensions, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var counter, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                    case 1:
                        counter = _a.sent();
                        counter.addFileExtension(extensions);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.warn('Counter is still loading');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.extLink = /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    function (url, options, counterPosition) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var counter, promise, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                    case 1:
                        counter = _a.sent();
                        promise = this.getCallbackPromise(options, url);
                        counter.extLink(url, options);
                        return [2 /*return*/, promise];
                    case 2:
                        error_2 = _a.sent();
                        console.warn('Counter is still loading');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.file = /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    function (url, options, counterPosition) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var counter, promise, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                    case 1:
                        counter = _a.sent();
                        promise = this.getCallbackPromise(options, url);
                        counter.file(url, options);
                        return [2 /*return*/, promise];
                    case 2:
                        error_3 = _a.sent();
                        console.warn('Counter is still loading');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.getClientID = /**
     * @param {?=} counterPosition
     * @return {?}
     */
    function (counterPosition) {
        /** @type {?} */
        var counter = this.getCounterByPosition(counterPosition);
        if (counter && counter.reachGoal) {
            return counter.getClientID();
        }
        console.warn('Counter is still loading');
    };
    /**
     * @param {?} userId
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.setUserID = /**
     * @param {?} userId
     * @param {?=} counterPosition
     * @return {?}
     */
    function (userId, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var counter, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                    case 1:
                        counter = _a.sent();
                        counter.setUserID(userId);
                        return [2 /*return*/, { userId: userId, counterPosition: counterPosition }];
                    case 2:
                        error_4 = _a.sent();
                        console.warn('Counter is still loading');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} params
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.userParams = /**
     * @param {?} params
     * @param {?=} counterPosition
     * @return {?}
     */
    function (params, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var counter, error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                    case 1:
                        counter = _a.sent();
                        counter.userParams(params);
                        return [2 /*return*/, { params: params, counterPosition: counterPosition }];
                    case 2:
                        error_5 = _a.sent();
                        console.warn('Counter is still loading');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} params
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.params = /**
     * @param {?} params
     * @param {?=} counterPosition
     * @return {?}
     */
    function (params, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var counter, error_6;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                    case 1:
                        counter = _a.sent();
                        counter.userParams(params);
                        return [2 /*return*/, { params: params, counterPosition: counterPosition }];
                    case 2:
                        error_6 = _a.sent();
                        console.warn('Counter is still loading');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.replacePhones = /**
     * @param {?=} counterPosition
     * @return {?}
     */
    function (counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var counter, error_7;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                    case 1:
                        counter = _a.sent();
                        counter.replacePhones();
                        return [2 /*return*/, { counterPosition: counterPosition }];
                    case 2:
                        error_7 = _a.sent();
                        console.warn('Counter is still loading');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.notBounce = /**
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    function (options, counterPosition) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var counter, promise, error_8;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                    case 1:
                        counter = _a.sent();
                        promise = this.getCallbackPromise(options, options);
                        counter.notBounce(options);
                        return [2 /*return*/, promise];
                    case 2:
                        error_8 = _a.sent();
                        console.warn('Counter is still loading');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} type
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.fireEvent = /**
     * @param {?} type
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    function (type, options, counterPosition) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var counter, promise, error_9;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                    case 1:
                        counter = _a.sent();
                        promise = this.getCallbackPromise(options, options);
                        counter.reachGoal(type, options.params, options.callback, options.ctx);
                        return [2 /*return*/, promise];
                    case 2:
                        error_9 = _a.sent();
                        console.error('error', error_9);
                        console.warn("'Event with type [" + type + "] can't be fired because counter is still loading'");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.hit = /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    function (url, options, counterPosition) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var counter, promise, error_10;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.counterIsLoaded(counterPosition)];
                    case 1:
                        counter = _a.sent();
                        promise = this.getCallbackPromise(options, options);
                        counter.hit(url, options);
                        return [2 /*return*/, promise];
                    case 2:
                        error_10 = _a.sent();
                        console.warn("'Hit for page [" + url + "] can't be fired because counter is still loading'");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} options
     * @param {?} resolveWith
     * @return {?}
     */
    Metrika.prototype.getCallbackPromise = /**
     * @private
     * @param {?} options
     * @param {?} resolveWith
     * @return {?}
     */
    function (options, resolveWith) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var optionsCallback = options.callback;
            options.callback = (/**
             * @return {?}
             */
            function () {
                if (optionsCallback) {
                    optionsCallback.call(this);
                }
                resolve(resolveWith);
            });
        }));
    };
    /**
     * @private
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.counterIsLoaded = /**
     * @private
     * @param {?=} counterPosition
     * @return {?}
     */
    function (counterPosition) {
        /** @type {?} */
        var counter = this.getCounterByPosition(counterPosition);
        if (counter && counter.reachGoal) {
            return Promise.resolve(counter);
        }
        else {
            return Promise.reject(counter);
        }
    };
    /**
     * @private
     * @param {?=} counterPosition
     * @return {?}
     */
    Metrika.prototype.getCounterByPosition = /**
     * @private
     * @param {?=} counterPosition
     * @return {?}
     */
    function (counterPosition) {
        /** @type {?} */
        var counterId = this.getCounterIdByPosition(counterPosition);
        return Metrika.getCounterById(counterId);
    };
    /**
     * @private
     * @param {?} counterPosition
     * @return {?}
     */
    Metrika.prototype.getCounterIdByPosition = /**
     * @private
     * @param {?} counterPosition
     * @return {?}
     */
    function (counterPosition) {
        return (counterPosition === undefined)
            ? this.defaultCounterId
            : this.positionToId[counterPosition];
    };
    Metrika.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Metrika.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ Metrika.ngInjectableDef = i0.defineInjectable({ factory: function Metrika_Factory() { return new Metrika(i0.inject(i0.INJECTOR)); }, token: Metrika, providedIn: "root" });
    return Metrika;
}());
export { Metrika };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Metrika.prototype.defaultCounterId;
    /**
     * @type {?}
     * @private
     */
    Metrika.prototype.counterConfigs;
    /**
     * @type {?}
     * @private
     */
    Metrika.prototype.positionToId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcteWFuZGV4LW1ldHJpa2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXlhbmRleC1tZXRyaWthLyIsInNvdXJjZXMiOlsibGliL25nLXlhbmRleC1tZXRyaWthLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQXVCLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBRTlHLHFDQUdDOzs7SUFGQyxtQ0FBcUI7O0lBQ3JCLDhCQUFVOzs7OztBQUdaLG1DQUdDOzs7SUFGQywrQkFBYTs7SUFDYiw4QkFBWTs7Ozs7QUFHZCxnQ0FFQzs7O0lBREMsNkJBQWlCOztBQUduQjtJQWdCRSxpQkFBWSxRQUFrQjtRQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBUyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBd0IsdUJBQXVCLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEVBQUUsRUFBVCxDQUFTLEVBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQVpNLDBCQUFrQjs7OztJQUF6QixVQUEwQixFQUFtQjtRQUMzQyxPQUFPLGNBQVksRUFBSSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU0sc0JBQWM7Ozs7SUFBckIsVUFBc0IsRUFBTztRQUMzQixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFRSyxrQ0FBZ0I7Ozs7O0lBQXRCLFVBQXVCLFVBQTZCLEVBQUUsZUFBd0I7Ozs7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QUMsQ0FBQSxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxpQ0FBZTs7Ozs7SUFBdkIsVUFBd0IsZUFBd0I7O1lBQ3hDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDO1FBQzFELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDaEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxzQ0FBb0I7Ozs7O0lBQTVCLFVBQTZCLGVBQXdCOztZQUM3QyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQztRQUM5RCxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRU8sd0NBQXNCOzs7OztJQUE5QixVQUErQixlQUF1QjtRQUNwRCxPQUFPLENBQUMsZUFBZSxLQUFLLFNBQVMsQ0FBQztZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkFyS0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFwQm9CLFFBQVE7OztrQkFBN0I7Q0F3TEMsQUF0S0QsSUFzS0M7U0FuS1ksT0FBTzs7Ozs7O0lBQ2xCLG1DQUFpQzs7Ozs7SUFDakMsaUNBQThDOzs7OztJQUM5QywrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBERUZBVUxUX0NPVU5URVJfSUQsIFlBTkRFWF9DT1VOVEVSU19DT05GSUdTLCBZYW5kZXhDb3VudGVyQ29uZmlnIH0gZnJvbSAnLi9uZy15YW5kZXgtbWV0cmlrYS5jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxiYWNrT3B0aW9ucyB7XG4gIGNhbGxiYWNrPzogKCkgPT4gYW55O1xuICBjdHg/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbW9uT3B0aW9ucyBleHRlbmRzIENhbGxiYWNrT3B0aW9ucyB7XG4gIHBhcmFtcz86IGFueTtcbiAgdGl0bGU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGl0T3B0aW9ucyBleHRlbmRzIENvbW1vbk9wdGlvbnMge1xuICByZWZlcmVyPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNZXRyaWthIHtcbiAgcHJpdmF0ZSBkZWZhdWx0Q291bnRlcklkOiBzdHJpbmc7XG4gIHByaXZhdGUgY291bnRlckNvbmZpZ3M6IFlhbmRleENvdW50ZXJDb25maWdbXTtcbiAgcHJpdmF0ZSBwb3NpdGlvblRvSWQ6IGFueVtdO1xuXG4gIHN0YXRpYyBnZXRDb3VudGVyTmFtZUJ5SWQoaWQ6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHJldHVybiBgeWFDb3VudGVyJHtpZH1gO1xuICB9XG5cbiAgc3RhdGljIGdldENvdW50ZXJCeUlkKGlkOiBhbnkpIHtcbiAgICByZXR1cm4gd2luZG93W01ldHJpa2EuZ2V0Q291bnRlck5hbWVCeUlkKGlkKV07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLmRlZmF1bHRDb3VudGVySWQgPSBpbmplY3Rvci5nZXQ8c3RyaW5nPihERUZBVUxUX0NPVU5URVJfSUQpO1xuICAgIHRoaXMuY291bnRlckNvbmZpZ3MgPSBpbmplY3Rvci5nZXQ8WWFuZGV4Q291bnRlckNvbmZpZ1tdPihZQU5ERVhfQ09VTlRFUlNfQ09ORklHUyk7XG4gICAgdGhpcy5wb3NpdGlvblRvSWQgPSB0aGlzLmNvdW50ZXJDb25maWdzLm1hcChjb25maWcgPT4gY29uZmlnLmlkKTtcbiAgfVxuXG4gIGFzeW5jIGFkZEZpbGVFeHRlbnNpb24oZXh0ZW5zaW9uczogc3RyaW5nIHwgc3RyaW5nW10sIGNvdW50ZXJQb3NpdGlvbj86IG51bWJlcikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb3VudGVyID0gYXdhaXQgdGhpcy5jb3VudGVySXNMb2FkZWQoY291bnRlclBvc2l0aW9uKTtcbiAgICAgIGNvdW50ZXIuYWRkRmlsZUV4dGVuc2lvbihleHRlbnNpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKCdDb3VudGVyIGlzIHN0aWxsIGxvYWRpbmcnKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBleHRMaW5rKHVybDogc3RyaW5nLCBvcHRpb25zOiBDb21tb25PcHRpb25zID0ge30sIGNvdW50ZXJQb3NpdGlvbj86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCB0aGlzLmNvdW50ZXJJc0xvYWRlZChjb3VudGVyUG9zaXRpb24pO1xuICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuZ2V0Q2FsbGJhY2tQcm9taXNlKG9wdGlvbnMsIHVybCk7XG4gICAgICBjb3VudGVyLmV4dExpbmsodXJsLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NvdW50ZXIgaXMgc3RpbGwgbG9hZGluZycpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZpbGUodXJsOiBzdHJpbmcsIG9wdGlvbnM6IEhpdE9wdGlvbnMgPSB7fSwgY291bnRlclBvc2l0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY291bnRlciA9IGF3YWl0IHRoaXMuY291bnRlcklzTG9hZGVkKGNvdW50ZXJQb3NpdGlvbik7XG4gICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5nZXRDYWxsYmFja1Byb21pc2Uob3B0aW9ucywgdXJsKTtcbiAgICAgIGNvdW50ZXIuZmlsZSh1cmwsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ291bnRlciBpcyBzdGlsbCBsb2FkaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2xpZW50SUQoY291bnRlclBvc2l0aW9uPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb3VudGVyID0gdGhpcy5nZXRDb3VudGVyQnlQb3NpdGlvbihjb3VudGVyUG9zaXRpb24pO1xuICAgIGlmIChjb3VudGVyICYmIGNvdW50ZXIucmVhY2hHb2FsKSB7XG4gICAgICByZXR1cm4gY291bnRlci5nZXRDbGllbnRJRCgpO1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oJ0NvdW50ZXIgaXMgc3RpbGwgbG9hZGluZycpO1xuICB9XG5cbiAgYXN5bmMgc2V0VXNlcklEKHVzZXJJZDogc3RyaW5nLCBjb3VudGVyUG9zaXRpb24/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb3VudGVyID0gYXdhaXQgdGhpcy5jb3VudGVySXNMb2FkZWQoY291bnRlclBvc2l0aW9uKTtcbiAgICAgIGNvdW50ZXIuc2V0VXNlcklEKHVzZXJJZCk7XG4gICAgICByZXR1cm4ge3VzZXJJZCwgY291bnRlclBvc2l0aW9ufTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKCdDb3VudGVyIGlzIHN0aWxsIGxvYWRpbmcnKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB1c2VyUGFyYW1zKHBhcmFtczogYW55LCBjb3VudGVyUG9zaXRpb24/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb3VudGVyID0gYXdhaXQgdGhpcy5jb3VudGVySXNMb2FkZWQoY291bnRlclBvc2l0aW9uKTtcbiAgICAgIGNvdW50ZXIudXNlclBhcmFtcyhwYXJhbXMpO1xuICAgICAgcmV0dXJuIHtwYXJhbXMsIGNvdW50ZXJQb3NpdGlvbn07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ291bnRlciBpcyBzdGlsbCBsb2FkaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcGFyYW1zKHBhcmFtczogYW55LCBjb3VudGVyUG9zaXRpb24/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb3VudGVyID0gYXdhaXQgdGhpcy5jb3VudGVySXNMb2FkZWQoY291bnRlclBvc2l0aW9uKTtcbiAgICAgIGNvdW50ZXIudXNlclBhcmFtcyhwYXJhbXMpO1xuICAgICAgcmV0dXJuIHtwYXJhbXMsIGNvdW50ZXJQb3NpdGlvbn07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ291bnRlciBpcyBzdGlsbCBsb2FkaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVwbGFjZVBob25lcyhjb3VudGVyUG9zaXRpb24/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb3VudGVyID0gYXdhaXQgdGhpcy5jb3VudGVySXNMb2FkZWQoY291bnRlclBvc2l0aW9uKTtcbiAgICAgIGNvdW50ZXIucmVwbGFjZVBob25lcygpO1xuICAgICAgcmV0dXJuIHtjb3VudGVyUG9zaXRpb259O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NvdW50ZXIgaXMgc3RpbGwgbG9hZGluZycpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG5vdEJvdW5jZShvcHRpb25zOiBDYWxsYmFja09wdGlvbnMgPSB7fSwgY291bnRlclBvc2l0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY291bnRlciA9IGF3YWl0IHRoaXMuY291bnRlcklzTG9hZGVkKGNvdW50ZXJQb3NpdGlvbik7XG4gICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5nZXRDYWxsYmFja1Byb21pc2Uob3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICBjb3VudGVyLm5vdEJvdW5jZShvcHRpb25zKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NvdW50ZXIgaXMgc3RpbGwgbG9hZGluZycpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZpcmVFdmVudCh0eXBlOiBzdHJpbmcsIG9wdGlvbnM6IENvbW1vbk9wdGlvbnMgPSB7fSwgY291bnRlclBvc2l0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY291bnRlciA9IGF3YWl0IHRoaXMuY291bnRlcklzTG9hZGVkKGNvdW50ZXJQb3NpdGlvbik7XG4gICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5nZXRDYWxsYmFja1Byb21pc2Uob3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICBjb3VudGVyLnJlYWNoR29hbCh0eXBlLCBvcHRpb25zLnBhcmFtcywgb3B0aW9ucy5jYWxsYmFjaywgb3B0aW9ucy5jdHgpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgY29uc29sZS53YXJuKGAnRXZlbnQgd2l0aCB0eXBlIFske3R5cGV9XSBjYW5cXCd0IGJlIGZpcmVkIGJlY2F1c2UgY291bnRlciBpcyBzdGlsbCBsb2FkaW5nJ2ApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGl0KHVybDogc3RyaW5nLCBvcHRpb25zOiBIaXRPcHRpb25zID0ge30sIGNvdW50ZXJQb3NpdGlvbj86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCB0aGlzLmNvdW50ZXJJc0xvYWRlZChjb3VudGVyUG9zaXRpb24pO1xuICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuZ2V0Q2FsbGJhY2tQcm9taXNlKG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgY291bnRlci5oaXQodXJsLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oYCdIaXQgZm9yIHBhZ2UgWyR7dXJsfV0gY2FuXFwndCBiZSBmaXJlZCBiZWNhdXNlIGNvdW50ZXIgaXMgc3RpbGwgbG9hZGluZydgKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FsbGJhY2tQcm9taXNlKG9wdGlvbnM6IGFueSwgcmVzb2x2ZVdpdGg6IGFueSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zQ2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrO1xuICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAob3B0aW9uc0NhbGxiYWNrKSB7XG4gICAgICAgICAgb3B0aW9uc0NhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXNvbHZlV2l0aCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3VudGVySXNMb2FkZWQoY291bnRlclBvc2l0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBjb3VudGVyID0gdGhpcy5nZXRDb3VudGVyQnlQb3NpdGlvbihjb3VudGVyUG9zaXRpb24pO1xuICAgIGlmIChjb3VudGVyICYmIGNvdW50ZXIucmVhY2hHb2FsKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvdW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoY291bnRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3VudGVyQnlQb3NpdGlvbihjb3VudGVyUG9zaXRpb24/OiBudW1iZXIpIHtcbiAgICBjb25zdCBjb3VudGVySWQgPSB0aGlzLmdldENvdW50ZXJJZEJ5UG9zaXRpb24oY291bnRlclBvc2l0aW9uKTtcbiAgICByZXR1cm4gTWV0cmlrYS5nZXRDb3VudGVyQnlJZChjb3VudGVySWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3VudGVySWRCeVBvc2l0aW9uKGNvdW50ZXJQb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIChjb3VudGVyUG9zaXRpb24gPT09IHVuZGVmaW5lZClcbiAgICAgID8gdGhpcy5kZWZhdWx0Q291bnRlcklkXG4gICAgICA6IHRoaXMucG9zaXRpb25Ub0lkW2NvdW50ZXJQb3NpdGlvbl07XG4gIH1cbn1cbiJdfQ==