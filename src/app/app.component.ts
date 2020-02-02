import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: FormioAuthService, private router: Router) {
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(['/user/login']);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  ngOnInit(){}
}
