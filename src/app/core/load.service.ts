import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoad, IOffer } from './interfaces';
const apiUrl = environment.apiUrl;

@Injectable()
export class LoadService {

  constructor(public http: HttpClient) { }

  create(body: {loading: string, unloading: string, startingFrom: string, tons: number, price: number, owner: string}): Observable<ILoad> {
    //console.log(body);
    return this.http.post<ILoad>(`${apiUrl}/data/loads`, body);
  }
  loadLoadList(): Observable<ILoad[]> {
    return this.http.get<ILoad[]>(`${apiUrl}/data/loads`);
  }

  loadLoadById(id: string): Observable<ILoad<IOffer>> {
    return this.http.get<ILoad<IOffer>>(`${apiUrl}/data/loads/${id}`);
  }
}
