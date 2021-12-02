import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContainerComponent} from './home/container/container.component';

import {LoginComponent} from './login/login.component';
import {ForgotComponent} from './forgot/forgot.component';
import {AuthGuard} from './guards/auth.guard';
import {UsersComponent} from './home/users/users.component';




const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: ContainerComponent},
      {path: 'clientlist', component: UsersComponent},
     
    
    ]
  },
  
  {path: 'login', component: LoginComponent},
  {path: 'forgot', component: ForgotComponent},


  // {path: 'register', component: RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
