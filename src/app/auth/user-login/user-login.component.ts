import { Component, OnInit } from '@angular/core';
import { FormioAuthLoginComponent, FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends FormioAuthLoginComponent {
  constructor(service: FormioAuthService) {
    super(service);
  }
}
