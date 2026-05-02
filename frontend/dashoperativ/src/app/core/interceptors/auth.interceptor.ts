import { isPlatformBrowser } from "@angular/common";
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject, PLATFORM_ID } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) =>
{
    const platformId = inject(PLATFORM_ID);
    let token = null;

    if (isPlatformBrowser(platformId)) {
        token = localStorage.getItem('token') || 'token_test_hc_123';
    }

    const isApiUrl = req.url.includes('/api');

    if (token && isApiUrl) {
        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('AuthInterceptor: Token added to request headers', req.url);
        return next(authReq);
    } 
    return next(req);    
}