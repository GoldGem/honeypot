import { Injector } from '@angular/core';
export interface CallbackOptions {
    callback?: () => any;
    ctx?: any;
}
export interface CommonOptions extends CallbackOptions {
    params?: any;
    title?: any;
}
export interface HitOptions extends CommonOptions {
    referer?: string;
}
export declare class Metrika {
    private defaultCounterId;
    private counterConfigs;
    private positionToId;
    static getCounterNameById(id: string | number): string;
    static getCounterById(id: any): any;
    constructor(injector: Injector);
    addFileExtension(extensions: string | string[], counterPosition?: number): Promise<void>;
    extLink(url: string, options?: CommonOptions, counterPosition?: number): Promise<any>;
    file(url: string, options?: HitOptions, counterPosition?: number): Promise<any>;
    getClientID(counterPosition?: number): string;
    setUserID(userId: string, counterPosition?: number): Promise<any>;
    userParams(params: any, counterPosition?: number): Promise<any>;
    params(params: any, counterPosition?: number): Promise<any>;
    replacePhones(counterPosition?: number): Promise<any>;
    notBounce(options?: CallbackOptions, counterPosition?: number): Promise<any>;
    fireEvent(type: string, options?: CommonOptions, counterPosition?: number): Promise<any>;
    hit(url: string, options?: HitOptions, counterPosition?: number): Promise<any>;
    private getCallbackPromise;
    private counterIsLoaded;
    private getCounterByPosition;
    private getCounterIdByPosition;
}
