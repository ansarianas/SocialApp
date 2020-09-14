import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {

                // 400 - Bad Request
                if (error.status === 400) {
                    const appError = error.error;
                    let modelState = '';
                    for (const key in appError.errors) {
                        if (appError.errors[key]) {
                            modelState += appError.errors[key] + '\n';
                        }
                    }
                    return throwError(modelState || appError);
                }

                // 401 - Unauthorized
                if (error.status === 401) {
                    return throwError(error.statusText);
                }

                // 500 - Internal Server Error
                if (error instanceof HttpErrorResponse) {
                    const appError = error.headers.get('Custom-Error');
                    if (appError) {
                        return throwError(appError);
                    }
                    const serverError = error.error;
                    let modelStateError = '';
                    if (serverError.errors && typeof serverError.error === 'object') {
                        for (const key in serverError.errors) {
                            if (serverError.errors[key]) {
                                modelStateError += serverError.errors[key] + '\n';
                            }
                        }
                        return throwError(modelStateError);
                    }
                }
            })
        );
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
