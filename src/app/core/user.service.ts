import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from './interfaces/user';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;//'http://localhost:3030'

@Injectable()
export class UserService {

  isLogged: boolean = false;
  
 user: IUser | null | undefined = undefined;
 
 constructor(private http: HttpClient) { }
  login(data: { username: string; password: string }) {
  this.isLogged = true;
  //console.log(localStorage);
   return this.http.post<IUser>(`${apiUrl}/users/login`, data).pipe(
     tap((user) => this.user = user)
   );
 }
 getProfile() {
   return this.http.get<IUser>(`${apiUrl}/users/profile`).pipe(tap((user) => this.user = user));
   
 }
 register(data:{ username: string; password: string }): Observable<IUser> {
   return this.http.post<IUser>(`${apiUrl}/users/register`, data);
 }
 logout() {
  this.isLogged = false;
  localStorage.clear();
  //console.log(localStorage);
   return this.http.post<IUser>(`${apiUrl}/users/logout`, {}).pipe(
     tap(() => this.user = null)
   );
 }
 
}
