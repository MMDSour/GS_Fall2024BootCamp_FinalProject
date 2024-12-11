import { Routes } from '@angular/router';
import {HomePageComponent} from './core/components/home/home-page.component';
import {UserListComponent} from './features/user/components/list/user-list.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'user/list', component: UserListComponent},
];
