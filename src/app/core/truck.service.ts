import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOffer, ITruck } from './interfaces';
const apiUrl = environment.apiUrl;

@Injectable()
export class TruckService {

  constructor(public http: HttpClient) { }
  
  create(body: {loading: string, unloading: string, 
    startingFrom: number, validUntil: number, type: string, 
    tons: number, price: number}): Observable<ITruck> {
    //console.log(body);
    return this.http.post<ITruck>(`${apiUrl}/data/trucks`, body);
  }
  loadTruckList(): Observable<ITruck[]> {
    return this.http.get<ITruck[]>(`${apiUrl}/data/trucks`);
  }

  getById(id: string): Observable<ITruck<IOffer>> {
    return this.http.get<ITruck<IOffer>>(`${apiUrl}/data/trucks/${id}`);
  }
}
