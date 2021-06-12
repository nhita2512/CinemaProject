import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { SignupComponent } from '@/auth/signup/signup.component';

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent
    // currentRoute: ActivatedRouteSnapshot,
    // currentState: RouterStateSnapshot,
    // nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Return về true => cho phép rời khỏi component

    // Kiểm tra xem form bên trong component đã bị thay đổi hay chưa
    const isDirty = component.signupForm.dirty;

    if (isDirty) {
      return window.confirm('Are you sure you want to leave this page');
    }
  }
}
