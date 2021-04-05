import {Routes} from '@angular/router';
import {OgrenciListelemeComponent} from './modules/ogrenci/ogrenci-listeleme/ogrenci-listeleme.component';
import {OgrenciEklemeComponent} from './modules/ogrenci/ogrenci-ekleme/ogrenci-ekleme.component';

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
    redirectTo: 'ogrenci-listeleme',
    pathMatch: 'full'
  }];
