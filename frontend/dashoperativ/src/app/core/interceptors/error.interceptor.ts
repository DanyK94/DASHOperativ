import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http"
import { catchError, throwError } from "rxjs"

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            // Logging Errore
            console.error('HTTP Error Intercepted:', {
                status: error.status,
                message: error.message,
                url: error.url,
                body: error.error
            });
            //Gestione status codes
            if (error.status === 401) {
                console.warn('Unauthorized Access');
            }
            if (error.status === 403) {
                console.warn('Forbidden Access');
            }
            if (error.status === 404) {
                console.warn('Not Found');
            }
            if (error.status === 500) {
                console.warn('Internal Server Error');
            }
            return throwError(() => error);
        })
    )
}
