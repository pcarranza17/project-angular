import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderInterceptor implements HttpInterceptor  {

	constructor() { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let request = req;
        request = req.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
              return throwError( err );
            })
        );
	}

}
