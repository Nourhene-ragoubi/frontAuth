import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContainerComponent } from './home/container/container.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';

import { ForgotComponent } from './forgot/forgot.component';

import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './home/users/users.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchuserPipe } from './searchuser.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidbarComponent,
    SidebarComponent,
    ContainerComponent,
 
    LoginComponent,
    ForgotComponent,
    UsersComponent,
    SearchuserPipe,



  ],
  imports: [
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
