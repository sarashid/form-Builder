import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';
import { RouterModule, Routes } from '@angular/router';
import { FormioAppConfig } from 'angular-formio/formio.config';
import { AppConfig } from './config';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { AuthModule } from './auth/auth.module';

const routes:Routes =[
  {
    path: 'form',
    // loadChildren: '() => import("./form/form.module").then(m => m.FormModule)'
    loadChildren: './form/form.module#FormModule'
  }
  ,
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FormioAuthService,
    { provide: FormioAppConfig, useValue: AppConfig },
    {provide: FormioAuthConfig, useValue: {
        login: {
          form: 'user/login'
        },
        register: {
          form: 'user/register'
        }
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
