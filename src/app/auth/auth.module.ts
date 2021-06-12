import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';

// Import FormsModule, ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, SigninComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],

  exports: [SigninComponent, SignupComponent, AuthComponent],
})
export class AuthModule {}
