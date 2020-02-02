import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [
    CommonModule,
    FormioAuth,
    RouterModule.forChild(FormioAuthRoutes({
      login: UserLoginComponent
    }))
  ]
})
export class AuthModule { }
