import { Routes } from '@angular/router';
import {HomePageComponent} from './core/components/home/home-page.component';
import {UserListComponent} from './features/user/components/list/user-list.component';
import {AddUserComponent} from './features/user/components/add/add-user.component';
import {LoginComponent} from './features/authentication/components/login/login.component';
import {EditUserComponent} from './features/user/components/edit/edit-user.component';
import {ProductListComponent} from './features/product/components/list/product-list.component';
import {AddProductComponent} from './features/product/components/add/add-product.component';
import {EditProductComponent} from './features/product/components/edit/edit-product.component';
import {RoleGuardService} from './core/services/role-guard.service';

export const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'user/add', component: AddUserComponent , canActivate: [RoleGuardService] , data: {destination: '/user/list' }},
  { path: 'user/login' , component: LoginComponent},
  { path: 'user/edit/:id', component: EditUserComponent , canActivate: [RoleGuardService] , data: {destination: '/user/list' }},
  { path: 'product/list', component: ProductListComponent},
  { path: 'product/add', component: AddProductComponent , canActivate: [RoleGuardService] , data: {destination: '/product/list' }},
  { path: 'product/edit/:id', component: EditProductComponent , canActivate: [RoleGuardService] , data: {destination: '/product/list' }},
];
