import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from './interfaces/user';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;//'http://localhost:3030'

@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }
  constructor(private http: HttpClient) { }

 login(data: { username: string; password: string }) {
    return this.http.post<IUser>(`${apiUrl}/users/login`, data).pipe(
      tap((user) => this.user = user)
    );
  }

  getProfile(): Observable<IUser> {
    return this.http.get<IUser>(`${apiUrl}/users/profile`).pipe(tap((user) => this.user = user));
    
  }

  register(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/users/register`, data);
  }

  logout() {
    return this.http.post<IUser>(`${apiUrl}/users/logout`, {}).pipe(
      tap(() => this.user = null)
    );
  }



  
  //logout() {
  //      return this.http.post(`${apiUrl}/users/logout`, {}, {withCredentials: true} );
  //    }

//  register(data: { email: string; password: string }) {
//    return this.http.post<IUser>(`/api/users/register`, data).pipe(
//      tap((user) => this.user = user)
//    );
//  }
//
//  
}
