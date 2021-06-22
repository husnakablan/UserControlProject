import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user';
import {environment} from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }
  private apiUrl = `${environment.apiUrl}/users`;
  getAll() {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
