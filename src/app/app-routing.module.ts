import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserInputComponent } from './user-input/user-input.component';

const routes: Routes = [
  {
    path: 'user/input', component: UserInputComponent
  },
  {
    path: 'user/register', component: UserRegisterComponent
  },
  {
    path: 'user/login', component: UserLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
