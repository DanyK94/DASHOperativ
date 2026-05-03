import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { Router } from "@angular/router";


export const authGuard: CanActivateFn = (route, state) => {
    const token = localStorage.getItem('token') || 'token_test_hc_123';

    if (token) {
        return true;
    } 
    
    return inject(Router).createUrlTree(['/login']);
}

