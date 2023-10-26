import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DashboardAdminComponent } from './pages/admin/dashboard-admin/dashboard-admin.component';
import { AddItemComponent } from './pages/admin/add-item/add-item.component';
import { AddItemUserComponent } from './pages/user/add-item-user/add-item-user.component';
import { UpdataItemComponent } from './pages/admin/updata-item/updata-item.component';
import { SinglItemComponent } from './pages/admin/singl-item/singl-item.component';
import { MangeUserComponent } from './pages/admin/mange-user/mange-user.component';
import { adminActiveGuard } from './guard/canActive/admin-active.guard';
import { loginActiveGuard } from './guard/canActive/login-active.guard';
import { userActiveGuard } from './guard/canActive/user-active.guard';
import { authDeactiveGuard } from './guard/DeActiveted/auth-deactive.guard';

const routes: Routes = [
  { path: 'login', canActivate:[loginActiveGuard], component: LoginComponent },
  {path: 'signUp', component: RegistrationComponent},
  {
    path: 'posts', children: [{
      path: '',
      component: PostsComponent
    },
    {
      path: ':id',
      component: SinglePostComponent
    }]
  },
  { path: 'posts/single', component: SinglePostComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'admin', canActivate:[adminActiveGuard] ,children: [{
      path: '',
      component: DashboardAdminComponent
    },
    {
      path: 'addItem',canDeactivate:[authDeactiveGuard],
      component: AddItemComponent
    },
    {
      path: 'update/:id',
      component: UpdataItemComponent
    },{
      path:'single/:id',
      component: SinglItemComponent
    },{
      path:'mange-user',
      component: MangeUserComponent
    }
  ]
  },
  {
    path: 'user', canActivate:[userActiveGuard], children: [{
      path: '',
      component: IndexComponent
    },
    {
      path: 'addItem',
      component: AddItemUserComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
