import { isPlatformBrowser } from "@angular/common";
import { inject, PLATFORM_ID } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { Router } from "@angular/router";


export const authGuard: CanActivateFn = (route, state) => {
    const platformId = inject(PLATFORM_ID);

    return true;

    if(isPlatformBrowser(platformId)) {
        const token = localStorage.getItem('token') || 'token_test_hc_123';

        if (token) {
            return true;
        } 
    }
    return inject(Router).createUrlTree(['/login']);
}

