import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOffer } from './interfaces';

const apiUrl = environment.apiUrl;

@Injectable()
export class OfferService {

  constructor(private http: HttpClient) { }

  loadOfferList(loadId:string, limit?: number): Observable<IOffer[]> {
    return this.http.get<IOffer[]>(
      `${apiUrl}/loads/:id/offers${limit ? `?limit=${limit}` : ''}`
    )
  }
}
