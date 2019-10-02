import { Injectable, Injector } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as _ from 'lodash';
import { toLogin } from './helper';

@Injectable({providedIn: 'root'})
export class ServiceNameService implements CanActivate, CanActivateChild, CanLoad {

    private url: string | null | undefined;
    
    constructor(
        private injector: Injector,
    ) { }

    private _isAuth(): boolean {
        return !_.isEmpty(sessionStorage.getItem('__token'));
    }

    private process(): boolean {
        // const res = CheckSimple(this.srv.get() as SimpleTokenModel);
        const res = this._isAuth();
        if (!res) {
            toLogin('/passport/signIn', this.injector, this.url);
        }
        return res;
    }

    // lazy loading
    /** @override */
    canLoad(route: Route, _segments: UrlSegment[]): boolean {
        this.url = route.path;
        return this.process();
    }

    // all children route
    /** @override */
    canActivateChild(_childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.url = state.url;
        return this.process();
    }

    // route
    /** @override */
    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.url = state.url;
        return this.process();
    }

}