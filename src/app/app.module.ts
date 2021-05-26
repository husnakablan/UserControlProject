import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './modules/app/app.component';
import { OgrenciListelemeComponent } from './modules/ogrenci/ogrenci-listeleme/ogrenci-listeleme.component';
import { OgrenciEklemeComponent } from './modules/ogrenci/ogrenci-ekleme/ogrenci-ekleme.component';
import {RouterModule} from '@angular/router';
import {routes} from './app-routes';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OgrenciGuncellemeComponent } from './modules/ogrenci/ogrenci-guncelleme/ogrenci-guncelleme.component';
import { PaginationComponent } from './modules/components/pagination/pagination.component';
import { ConfirmDialogComponent } from './modules/components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    OgrenciListelemeComponent,
    OgrenciEklemeComponent,
    OgrenciGuncellemeComponent,
    PaginationComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
