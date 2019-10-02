
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface UserToken {
    user: any;
}

// Config, to set sesstion timeout. local cache .et .
// Config, set App-Key name, and cache it .et .

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    
    get userToken(): UserToken {
        return this._userToken;
    }
    private _userToken: UserToken;
    
    get isAuthenticated() {
        return !!this.userToken; // && not timeout
    }

    constructor(
        private router: Router
    ) {
        this._loadFromStorage();
    }

    signIn(token: UserToken) {
        if (!token) {
            return ;
        }
        
        sessionStorage.setItem('__token', JSON.stringify(token));
        this._userToken = token;

        this.router.navigate(['/']);
    }

    signOut() {
        sessionStorage.removeItem('__token');
        this._userToken = null;

        this.router.navigate(['/account/signIn'])
    }

    private _loadFromStorage() {
        const tokenItem = sessionStorage.getItem('__token');
        if (!tokenItem) {
            return ;
        }
        
        this._userToken = JSON.parse(tokenItem);
    }

}