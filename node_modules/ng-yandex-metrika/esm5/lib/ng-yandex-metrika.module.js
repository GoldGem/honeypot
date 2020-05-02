/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { Metrika } from './ng-yandex-metrika.service';
import { DEFAULT_COUNTER_ID, DEFAULT_COUNTER_ID_AOT, YANDEX_COUNTERS_CONFIGS, YANDEX_COUNTERS_CONFIGS_AOT, } from './ng-yandex-metrika.config';
import { appInitializerFactory, countersFactory, defaultCounterIdFactory, } from './ng-yandex-metrika-config-factories';
var MetrikaModule = /** @class */ (function () {
    function MetrikaModule() {
    }
    /**
     * @param {?} configs
     * @param {?=} defaultCounterId
     * @return {?}
     */
    MetrikaModule.forRoot = /**
     * @param {?} configs
     * @param {?=} defaultCounterId
     * @return {?}
     */
    function (configs, defaultCounterId) {
        return {
            ngModule: MetrikaModule,
            providers: [
                {
                    provide: DEFAULT_COUNTER_ID_AOT,
                    useValue: defaultCounterId,
                },
                {
                    provide: YANDEX_COUNTERS_CONFIGS_AOT,
                    useValue: configs,
                },
                {
                    provide: DEFAULT_COUNTER_ID,
                    useFactory: defaultCounterIdFactory,
                    deps: [YANDEX_COUNTERS_CONFIGS_AOT, DEFAULT_COUNTER_ID_AOT],
                },
                {
                    provide: YANDEX_COUNTERS_CONFIGS,
                    useFactory: countersFactory,
                    deps: [YANDEX_COUNTERS_CONFIGS_AOT],
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInitializerFactory,
                    deps: [YANDEX_COUNTERS_CONFIGS, PLATFORM_ID],
                    multi: true,
                },
                {
                    provide: Metrika,
                    useClass: Metrika,
                    deps: [Injector, PLATFORM_ID],
                }
            ],
        };
    };
    MetrikaModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return MetrikaModule;
}());
export { MetrikaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcteWFuZGV4LW1ldHJpa2EubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcteWFuZGV4LW1ldHJpa2EvIiwic291cmNlcyI6WyJsaWIvbmcteWFuZGV4LW1ldHJpa2EubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RELE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2QiwyQkFBMkIsR0FDNUIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixHQUFHLE1BQU0sc0NBQXNDLENBQUM7QUFFeEg7SUFBQTtJQXVDQSxDQUFDOzs7Ozs7SUFwQ1EscUJBQU87Ozs7O0lBQWQsVUFBZSxPQUF3QyxFQUFFLGdCQUFrQztRQUN6RixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSwyQkFBMkI7b0JBQ3BDLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixVQUFVLEVBQUUsdUJBQXVCO29CQUNuQyxJQUFJLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxzQkFBc0IsQ0FBQztpQkFDNUQ7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsVUFBVSxFQUFFLGVBQWU7b0JBQzNCLElBQUksRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUNwQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLHFCQUFxQjtvQkFDakMsSUFBSSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsV0FBVyxDQUFDO29CQUM1QyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBdENGLFFBQVEsU0FBQyxFQUFFOztJQXVDWixvQkFBQztDQUFBLEFBdkNELElBdUNDO1NBdENZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIEluamVjdG9yLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWV0cmlrYSB9IGZyb20gJy4vbmcteWFuZGV4LW1ldHJpa2Euc2VydmljZSc7XG5pbXBvcnQge1xuICBDb3VudGVyQ29uZmlnLFxuICBERUZBVUxUX0NPVU5URVJfSUQsXG4gIERFRkFVTFRfQ09VTlRFUl9JRF9BT1QsXG4gIFlBTkRFWF9DT1VOVEVSU19DT05GSUdTLFxuICBZQU5ERVhfQ09VTlRFUlNfQ09ORklHU19BT1QsXG59IGZyb20gJy4vbmcteWFuZGV4LW1ldHJpa2EuY29uZmlnJztcbmltcG9ydCB7IGFwcEluaXRpYWxpemVyRmFjdG9yeSwgY291bnRlcnNGYWN0b3J5LCBkZWZhdWx0Q291bnRlcklkRmFjdG9yeSwgfSBmcm9tICcuL25nLXlhbmRleC1tZXRyaWthLWNvbmZpZy1mYWN0b3JpZXMnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgTWV0cmlrYU1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnczogQ291bnRlckNvbmZpZyB8IENvdW50ZXJDb25maWdbXSwgZGVmYXVsdENvdW50ZXJJZD86IG51bWJlciB8IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWV0cmlrYU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogREVGQVVMVF9DT1VOVEVSX0lEX0FPVCxcbiAgICAgICAgICB1c2VWYWx1ZTogZGVmYXVsdENvdW50ZXJJZCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFlBTkRFWF9DT1VOVEVSU19DT05GSUdTX0FPVCxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlncyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERFRkFVTFRfQ09VTlRFUl9JRCxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBkZWZhdWx0Q291bnRlcklkRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbWUFOREVYX0NPVU5URVJTX0NPTkZJR1NfQU9ULCBERUZBVUxUX0NPVU5URVJfSURfQU9UXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFlBTkRFWF9DT1VOVEVSU19DT05GSUdTLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNvdW50ZXJzRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbWUFOREVYX0NPVU5URVJTX0NPTkZJR1NfQU9UXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBhcHBJbml0aWFsaXplckZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1lBTkRFWF9DT1VOVEVSU19DT05GSUdTLCBQTEFURk9STV9JRF0sXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBNZXRyaWthLFxuICAgICAgICAgIHVzZUNsYXNzOiBNZXRyaWthLFxuICAgICAgICAgIGRlcHM6IFtJbmplY3RvciwgUExBVEZPUk1fSURdLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==