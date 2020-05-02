import { CounterConfig, YandexCounterConfig } from './ng-yandex-metrika.config';
export declare function defaultCounterIdFactory(counterConfigs: CounterConfig | CounterConfig[], defaultCounter?: number | string): string | number;
export declare function defineDefaultId(counterConfigs: CounterConfig | CounterConfig[], defaultCounter?: number | string): string | number;
export declare function countersFactory(configs: CounterConfig | CounterConfig[]): (YandexCounterConfig & CounterConfig)[];
export declare function createConfigs(configs: CounterConfig | CounterConfig[]): (YandexCounterConfig & CounterConfig)[];
export declare function appInitializerFactory(counterConfigs: YandexCounterConfig[], platformId: any): any;
export declare function insertMetrika(counterConfigs: YandexCounterConfig[]): string;
export declare function createCounter(config: YandexCounterConfig): void;
export declare function getCounterNameById(id: string | number): string;
