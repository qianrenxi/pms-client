import { Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

export function toLogin(loginUrl: string, injector: Injector, url: string | null | undefined) {
    setTimeout(() => {
        if (/^https?:\/\//g.test(loginUrl!)) {
            injector.get(DOCUMENT).location.href = loginUrl as string;
        } else {
            injector.get<Router>(Router).navigate([loginUrl]);
        }
    });
}
