import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

// TODO: config login url
const LOGIN_URL = `/account/signIn`;

@Injectable({providedIn: 'root'})
export class AuthenticationGuardService implements CanActivate {
    
    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router
    ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.authService.isAuthenticated) {
            return true;
        }
        // TODO: （刷新页面时需要从服务端加载认证信息），调用接口请求服务，加载认证信息（Observable）

        // 最终未认证的情况
        // TODO： 带上当前（之前）所在站点信息
        return this.router.parseUrl(LOGIN_URL);
    }
}