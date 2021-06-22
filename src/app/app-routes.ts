import {Routes} from '@angular/router';
import {OgrenciListelemeComponent} from './modules/ogrenci/ogrenci-listeleme/ogrenci-listeleme.component';
import {OgrenciEklemeComponent} from './modules/ogrenci/ogrenci-ekleme/ogrenci-ekleme.component';
import {OgrenciGuncellemeComponent} from './modules/ogrenci/ogrenci-guncelleme/ogrenci-guncelleme.component';
import {UserViewComponent} from './modules/ogrenci/user-view/user-view.component';
import {LoginComponent} from './modules/authentication/login/login.component';
import {RegisterComponent} from './modules/authentication/register/register.component';

export const routes: Routes = [{
    path: 'ogrenci-listeleme',
    component: OgrenciListelemeComponent,
  },
  {
    path: 'ogrenci-ekleme',
    component: OgrenciEklemeComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'ogrenci-guncelleme/:userId',
    component: OgrenciGuncellemeComponent,
  },
  {
    path: 'user-view/:userId',
    component: UserViewComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }];
