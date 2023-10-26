import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarAdminComponent } from './shared/navbar-admin/navbar-admin.component';
import { AddItemComponent } from './pages/admin/add-item/add-item.component';
import { DashboardAdminComponent } from './pages/admin/dashboard-admin/dashboard-admin.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AddItemUserComponent } from './pages/user/add-item-user/add-item-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdataItemComponent } from './pages/admin/updata-item/updata-item.component';
import { SinglItemComponent } from './pages/admin/singl-item/singl-item.component';
import { MangeUserComponent } from './pages/admin/mange-user/mange-user.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PostsComponent,
    SinglePostComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    NavbarAdminComponent,
    AddItemComponent,
    DashboardAdminComponent,
    AddItemUserComponent,
    UpdataItemComponent,
    SinglItemComponent,
    MangeUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS ,
    useClass : AuthInterceptor ,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
