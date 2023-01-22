import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // we should attach the token to the request header
    // but the request is immutable, means i cannot change it
    // so we clone the request and then add the heade and then send it

    let token = this.authService.retrieveToken(); // retrieve the token from sessionStorage

    let newRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` // Authorization: "Bearer "+token
      }
    });

    return next.handle(newRequest)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status == 401) {
          // means we have not logged in 
          // navigate to login component
        } else if (err.status == 403) {
          // means we are not authrozed to access the endpoint
          // navigate to forbiden component
        }
        return throwError(()=>new Error("Something went wrong in the backend!"))
      })
    );
  }
}
