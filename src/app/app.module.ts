import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserCrudComponent } from './components/user-crud/user-crud.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { UserService } from './services/user/user.service';
import { ImageService } from './services/image/image.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
  AppComponent,
  UserAddComponent,
  UserEditComponent,
  UserCrudComponent,
  UserDetailComponent,
  UserFormComponent,
  PageNotFoundComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  AppRoutingModule
  ],
  providers: [
  UserService, 
  ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
