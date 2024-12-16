import { Routes } from '@angular/router';
import {HomePageComponent} from './core/components/home/home-page.component';
import {UserListComponent} from './features/user/components/list/user-list.component';
import {AddUserComponent} from './features/user/components/add/add-user.component';
import {LoginComponent} from './features/authentication/components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'user/add', component: AddUserComponent},
  { path: 'user/login' , component: LoginComponent},
];
