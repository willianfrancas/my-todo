import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public authService: AuthService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            const authReq = request.clone({
                setHeaders: {
                    Authorization: token
                }
            })
            return next.handle(authReq)
                .pipe(
                    catchError(error => {
                        if (error instanceof HttpErrorResponse) {
                            if (error.status === 401) {
                                this.authService.logout();
                                this.router.navigateByUrl('/login');
                            }
                        }
                        return throwError(error);
                    }));
        }
        return next.handle(request);
    }
}
