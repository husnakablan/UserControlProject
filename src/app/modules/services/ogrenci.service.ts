import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ogrenci} from '../model/ogrenci';

@Injectable({
  providedIn: 'root'
})
export class OgrenciService  {
  constructor(public http: HttpClient) {
  }

  private apiUrl = 'http://localhost:8081/employee';

  listele(): Observable<Ogrenci[]> {
    return this.http.get<Ogrenci[]>(this.apiUrl);
  }
  sorgula(value: Ogrenci ): Observable<Ogrenci[]> {
    return this.http.post<Ogrenci[]>(this.apiUrl + '/sorgula', value);
  }

  addEmployee(value: Ogrenci ): Observable<number>  {
    return this.http.post<number>(this.apiUrl , value);
}
}
