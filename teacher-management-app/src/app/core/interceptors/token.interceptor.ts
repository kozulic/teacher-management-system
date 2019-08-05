import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const teacher = this.authService.currentTeacher;

    if (teacher && teacher.token) {
      req = req.clone({
        setHeaders: {
          'x-access-token': `${teacher.token}`
        }
      });
    }

    return next.handle(req);
  }

}
