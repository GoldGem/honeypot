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
export class Metrika {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.defaultCounterId = injector.get(DEFAULT_COUNTER_ID);
        this.counterConfigs = injector.get(YANDEX_COUNTERS_CONFIGS);
        this.positionToId = this.counterConfigs.map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.id));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    static getCounterNameById(id) {
        return `yaCounter${id}`;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    static getCounterById(id) {
        return window[Metrika.getCounterNameById(id)];
    }
    /**
     * @param {?} extensions
     * @param {?=} counterPosition
     * @return {?}
     */
    addFileExtension(extensions, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                counter.addFileExtension(extensions);
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    extLink(url, options = {}, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                /** @type {?} */
                const promise = this.getCallbackPromise(options, url);
                counter.extLink(url, options);
                return promise;
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    file(url, options = {}, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                /** @type {?} */
                const promise = this.getCallbackPromise(options, url);
                counter.file(url, options);
                return promise;
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?=} counterPosition
     * @return {?}
     */
    getClientID(counterPosition) {
        /** @type {?} */
        const counter = this.getCounterByPosition(counterPosition);
        if (counter && counter.reachGoal) {
            return counter.getClientID();
        }
        console.warn('Counter is still loading');
    }
    /**
     * @param {?} userId
     * @param {?=} counterPosition
     * @return {?}
     */
    setUserID(userId, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                counter.setUserID(userId);
                return { userId, counterPosition };
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?} params
     * @param {?=} counterPosition
     * @return {?}
     */
    userParams(params, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                counter.userParams(params);
                return { params, counterPosition };
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?} params
     * @param {?=} counterPosition
     * @return {?}
     */
    params(params, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                counter.userParams(params);
                return { params, counterPosition };
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?=} counterPosition
     * @return {?}
     */
    replacePhones(counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                counter.replacePhones();
                return { counterPosition };
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    notBounce(options = {}, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                /** @type {?} */
                const promise = this.getCallbackPromise(options, options);
                counter.notBounce(options);
                return promise;
            }
            catch (error) {
                console.warn('Counter is still loading');
            }
        });
    }
    /**
     * @param {?} type
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    fireEvent(type, options = {}, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                /** @type {?} */
                const promise = this.getCallbackPromise(options, options);
                counter.reachGoal(type, options.params, options.callback, options.ctx);
                return promise;
            }
            catch (error) {
                console.error('error', error);
                console.warn(`'Event with type [${type}] can\'t be fired because counter is still loading'`);
            }
        });
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @param {?=} counterPosition
     * @return {?}
     */
    hit(url, options = {}, counterPosition) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                const counter = yield this.counterIsLoaded(counterPosition);
                /** @type {?} */
                const promise = this.getCallbackPromise(options, options);
                counter.hit(url, options);
                return promise;
            }
            catch (error) {
                console.warn(`'Hit for page [${url}] can\'t be fired because counter is still loading'`);
            }
        });
    }
    /**
     * @private
     * @param {?} options
     * @param {?} resolveWith
     * @return {?}
     */
    getCallbackPromise(options, resolveWith) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const optionsCallback = options.callback;
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
    }
    /**
     * @private
     * @param {?=} counterPosition
     * @return {?}
     */
    counterIsLoaded(counterPosition) {
        /** @type {?} */
        const counter = this.getCounterByPosition(counterPosition);
        if (counter && counter.reachGoal) {
            return Promise.resolve(counter);
        }
        else {
            return Promise.reject(counter);
        }
    }
    /**
     * @private
     * @param {?=} counterPosition
     * @return {?}
     */
    getCounterByPosition(counterPosition) {
        /** @type {?} */
        const counterId = this.getCounterIdByPosition(counterPosition);
        return Metrika.getCounterById(counterId);
    }
    /**
     * @private
     * @param {?} counterPosition
     * @return {?}
     */
    getCounterIdByPosition(counterPosition) {
        return (counterPosition === undefined)
            ? this.defaultCounterId
            : this.positionToId[counterPosition];
    }
}
Metrika.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Metrika.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ Metrika.ngInjectableDef = i0.defineInjectable({ factory: function Metrika_Factory() { return new Metrika(i0.inject(i0.INJECTOR)); }, token: Metrika, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcteWFuZGV4LW1ldHJpa2Euc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXlhbmRleC1tZXRyaWthLyIsInNvdXJjZXMiOlsibGliL25nLXlhbmRleC1tZXRyaWthLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQXVCLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBRTlHLHFDQUdDOzs7SUFGQyxtQ0FBcUI7O0lBQ3JCLDhCQUFVOzs7OztBQUdaLG1DQUdDOzs7SUFGQywrQkFBYTs7SUFDYiw4QkFBWTs7Ozs7QUFHZCxnQ0FFQzs7O0lBREMsNkJBQWlCOztBQU1uQixNQUFNLE9BQU8sT0FBTzs7OztJQWFsQixZQUFZLFFBQWtCO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFTLGtCQUFrQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF3Qix1QkFBdUIsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFaRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBbUI7UUFDM0MsT0FBTyxZQUFZLEVBQUUsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFPO1FBQzNCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQVFLLGdCQUFnQixDQUFDLFVBQTZCLEVBQUUsZUFBd0I7O1lB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RU8sZUFBZSxDQUFDLGVBQXdCOztjQUN4QyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztRQUMxRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ2hDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsZUFBd0I7O2NBQzdDLFNBQVMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDO1FBQzlELE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxlQUF1QjtRQUNwRCxPQUFPLENBQUMsZUFBZSxLQUFLLFNBQVMsQ0FBQztZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFyS0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBcEJvQixRQUFROzs7Ozs7OztJQXNCM0IsbUNBQWlDOzs7OztJQUNqQyxpQ0FBOEM7Ozs7O0lBQzlDLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERFRkFVTFRfQ09VTlRFUl9JRCwgWUFOREVYX0NPVU5URVJTX0NPTkZJR1MsIFlhbmRleENvdW50ZXJDb25maWcgfSBmcm9tICcuL25nLXlhbmRleC1tZXRyaWthLmNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbGJhY2tPcHRpb25zIHtcbiAgY2FsbGJhY2s/OiAoKSA9PiBhbnk7XG4gIGN0eD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21tb25PcHRpb25zIGV4dGVuZHMgQ2FsbGJhY2tPcHRpb25zIHtcbiAgcGFyYW1zPzogYW55O1xuICB0aXRsZT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIaXRPcHRpb25zIGV4dGVuZHMgQ29tbW9uT3B0aW9ucyB7XG4gIHJlZmVyZXI/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1ldHJpa2Ege1xuICBwcml2YXRlIGRlZmF1bHRDb3VudGVySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjb3VudGVyQ29uZmlnczogWWFuZGV4Q291bnRlckNvbmZpZ1tdO1xuICBwcml2YXRlIHBvc2l0aW9uVG9JZDogYW55W107XG5cbiAgc3RhdGljIGdldENvdW50ZXJOYW1lQnlJZChpZDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgcmV0dXJuIGB5YUNvdW50ZXIke2lkfWA7XG4gIH1cblxuICBzdGF0aWMgZ2V0Q291bnRlckJ5SWQoaWQ6IGFueSkge1xuICAgIHJldHVybiB3aW5kb3dbTWV0cmlrYS5nZXRDb3VudGVyTmFtZUJ5SWQoaWQpXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHRoaXMuZGVmYXVsdENvdW50ZXJJZCA9IGluamVjdG9yLmdldDxzdHJpbmc+KERFRkFVTFRfQ09VTlRFUl9JRCk7XG4gICAgdGhpcy5jb3VudGVyQ29uZmlncyA9IGluamVjdG9yLmdldDxZYW5kZXhDb3VudGVyQ29uZmlnW10+KFlBTkRFWF9DT1VOVEVSU19DT05GSUdTKTtcbiAgICB0aGlzLnBvc2l0aW9uVG9JZCA9IHRoaXMuY291bnRlckNvbmZpZ3MubWFwKGNvbmZpZyA9PiBjb25maWcuaWQpO1xuICB9XG5cbiAgYXN5bmMgYWRkRmlsZUV4dGVuc2lvbihleHRlbnNpb25zOiBzdHJpbmcgfCBzdHJpbmdbXSwgY291bnRlclBvc2l0aW9uPzogbnVtYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCB0aGlzLmNvdW50ZXJJc0xvYWRlZChjb3VudGVyUG9zaXRpb24pO1xuICAgICAgY291bnRlci5hZGRGaWxlRXh0ZW5zaW9uKGV4dGVuc2lvbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NvdW50ZXIgaXMgc3RpbGwgbG9hZGluZycpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGV4dExpbmsodXJsOiBzdHJpbmcsIG9wdGlvbnM6IENvbW1vbk9wdGlvbnMgPSB7fSwgY291bnRlclBvc2l0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY291bnRlciA9IGF3YWl0IHRoaXMuY291bnRlcklzTG9hZGVkKGNvdW50ZXJQb3NpdGlvbik7XG4gICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5nZXRDYWxsYmFja1Byb21pc2Uob3B0aW9ucywgdXJsKTtcbiAgICAgIGNvdW50ZXIuZXh0TGluayh1cmwsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ291bnRlciBpcyBzdGlsbCBsb2FkaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmlsZSh1cmw6IHN0cmluZywgb3B0aW9uczogSGl0T3B0aW9ucyA9IHt9LCBjb3VudGVyUG9zaXRpb24/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb3VudGVyID0gYXdhaXQgdGhpcy5jb3VudGVySXNMb2FkZWQoY291bnRlclBvc2l0aW9uKTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmdldENhbGxiYWNrUHJvbWlzZShvcHRpb25zLCB1cmwpO1xuICAgICAgY291bnRlci5maWxlKHVybCwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKCdDb3VudGVyIGlzIHN0aWxsIGxvYWRpbmcnKTtcbiAgICB9XG4gIH1cblxuICBnZXRDbGllbnRJRChjb3VudGVyUG9zaXRpb24/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLmdldENvdW50ZXJCeVBvc2l0aW9uKGNvdW50ZXJQb3NpdGlvbik7XG4gICAgaWYgKGNvdW50ZXIgJiYgY291bnRlci5yZWFjaEdvYWwpIHtcbiAgICAgIHJldHVybiBjb3VudGVyLmdldENsaWVudElEKCk7XG4gICAgfVxuICAgIGNvbnNvbGUud2FybignQ291bnRlciBpcyBzdGlsbCBsb2FkaW5nJyk7XG4gIH1cblxuICBhc3luYyBzZXRVc2VySUQodXNlcklkOiBzdHJpbmcsIGNvdW50ZXJQb3NpdGlvbj86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCB0aGlzLmNvdW50ZXJJc0xvYWRlZChjb3VudGVyUG9zaXRpb24pO1xuICAgICAgY291bnRlci5zZXRVc2VySUQodXNlcklkKTtcbiAgICAgIHJldHVybiB7dXNlcklkLCBjb3VudGVyUG9zaXRpb259O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NvdW50ZXIgaXMgc3RpbGwgbG9hZGluZycpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVzZXJQYXJhbXMocGFyYW1zOiBhbnksIGNvdW50ZXJQb3NpdGlvbj86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCB0aGlzLmNvdW50ZXJJc0xvYWRlZChjb3VudGVyUG9zaXRpb24pO1xuICAgICAgY291bnRlci51c2VyUGFyYW1zKHBhcmFtcyk7XG4gICAgICByZXR1cm4ge3BhcmFtcywgY291bnRlclBvc2l0aW9ufTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKCdDb3VudGVyIGlzIHN0aWxsIGxvYWRpbmcnKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwYXJhbXMocGFyYW1zOiBhbnksIGNvdW50ZXJQb3NpdGlvbj86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCB0aGlzLmNvdW50ZXJJc0xvYWRlZChjb3VudGVyUG9zaXRpb24pO1xuICAgICAgY291bnRlci51c2VyUGFyYW1zKHBhcmFtcyk7XG4gICAgICByZXR1cm4ge3BhcmFtcywgY291bnRlclBvc2l0aW9ufTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKCdDb3VudGVyIGlzIHN0aWxsIGxvYWRpbmcnKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZXBsYWNlUGhvbmVzKGNvdW50ZXJQb3NpdGlvbj86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCB0aGlzLmNvdW50ZXJJc0xvYWRlZChjb3VudGVyUG9zaXRpb24pO1xuICAgICAgY291bnRlci5yZXBsYWNlUGhvbmVzKCk7XG4gICAgICByZXR1cm4ge2NvdW50ZXJQb3NpdGlvbn07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ291bnRlciBpcyBzdGlsbCBsb2FkaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbm90Qm91bmNlKG9wdGlvbnM6IENhbGxiYWNrT3B0aW9ucyA9IHt9LCBjb3VudGVyUG9zaXRpb24/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb3VudGVyID0gYXdhaXQgdGhpcy5jb3VudGVySXNMb2FkZWQoY291bnRlclBvc2l0aW9uKTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmdldENhbGxiYWNrUHJvbWlzZShvcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIGNvdW50ZXIubm90Qm91bmNlKG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybignQ291bnRlciBpcyBzdGlsbCBsb2FkaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmlyZUV2ZW50KHR5cGU6IHN0cmluZywgb3B0aW9uczogQ29tbW9uT3B0aW9ucyA9IHt9LCBjb3VudGVyUG9zaXRpb24/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb3VudGVyID0gYXdhaXQgdGhpcy5jb3VudGVySXNMb2FkZWQoY291bnRlclBvc2l0aW9uKTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmdldENhbGxiYWNrUHJvbWlzZShvcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIGNvdW50ZXIucmVhY2hHb2FsKHR5cGUsIG9wdGlvbnMucGFyYW1zLCBvcHRpb25zLmNhbGxiYWNrLCBvcHRpb25zLmN0eCk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignZXJyb3InLCBlcnJvcik7XG4gICAgICBjb25zb2xlLndhcm4oYCdFdmVudCB3aXRoIHR5cGUgWyR7dHlwZX1dIGNhblxcJ3QgYmUgZmlyZWQgYmVjYXVzZSBjb3VudGVyIGlzIHN0aWxsIGxvYWRpbmcnYClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoaXQodXJsOiBzdHJpbmcsIG9wdGlvbnM6IEhpdE9wdGlvbnMgPSB7fSwgY291bnRlclBvc2l0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY291bnRlciA9IGF3YWl0IHRoaXMuY291bnRlcklzTG9hZGVkKGNvdW50ZXJQb3NpdGlvbik7XG4gICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5nZXRDYWxsYmFja1Byb21pc2Uob3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICBjb3VudGVyLmhpdCh1cmwsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybihgJ0hpdCBmb3IgcGFnZSBbJHt1cmx9XSBjYW5cXCd0IGJlIGZpcmVkIGJlY2F1c2UgY291bnRlciBpcyBzdGlsbCBsb2FkaW5nJ2ApXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWxsYmFja1Byb21pc2Uob3B0aW9uczogYW55LCByZXNvbHZlV2l0aDogYW55KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnNDYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2s7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChvcHRpb25zQ2FsbGJhY2spIHtcbiAgICAgICAgICBvcHRpb25zQ2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc29sdmVXaXRoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvdW50ZXJJc0xvYWRlZChjb3VudGVyUG9zaXRpb24/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLmdldENvdW50ZXJCeVBvc2l0aW9uKGNvdW50ZXJQb3NpdGlvbik7XG4gICAgaWYgKGNvdW50ZXIgJiYgY291bnRlci5yZWFjaEdvYWwpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY291bnRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChjb3VudGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvdW50ZXJCeVBvc2l0aW9uKGNvdW50ZXJQb3NpdGlvbj86IG51bWJlcikge1xuICAgIGNvbnN0IGNvdW50ZXJJZCA9IHRoaXMuZ2V0Q291bnRlcklkQnlQb3NpdGlvbihjb3VudGVyUG9zaXRpb24pO1xuICAgIHJldHVybiBNZXRyaWthLmdldENvdW50ZXJCeUlkKGNvdW50ZXJJZCk7XG4gIH1cblxuICBwcml2YXRlIGdldENvdW50ZXJJZEJ5UG9zaXRpb24oY291bnRlclBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGNvdW50ZXJQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKVxuICAgICAgPyB0aGlzLmRlZmF1bHRDb3VudGVySWRcbiAgICAgIDogdGhpcy5wb3NpdGlvblRvSWRbY291bnRlclBvc2l0aW9uXTtcbiAgfVxufVxuIl19