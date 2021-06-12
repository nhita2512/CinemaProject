import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../service/storage-token.service';
const TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
// Phan Interceptor : giu nguyen Original
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private token: TokenStorageService
  ) {}
  // xu ly interceptor
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Get the authToken="";
    let authToken = '';
    if (localStorage.getItem('QuanTri')) {
      authToken = JSON.parse(localStorage.getItem('QuanTri')).accessToken;
    }
    // Clone the request and replace the original Header
    // Clone Headers, updated with the authorization
    const currentUser = this.authService.getCurrentUser();

    if (currentUser?.accessToken) {
      // user đã đăng nhập
      const authReq = request.clone({
        headers: request.headers.set(
          'Authorization',
          `Bearer ${currentUser.accessToken}`
        ),
      });
      return next.handle(authReq);
    }
  }
}
