import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormaPago } from '../../models/FormaPago/forma-pago';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormaPagoService {

  url = 'https://localhost:44375/api/FormadePago';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  buscar(id: number): Observable<FormaPago> {
    return this.http.get<FormaPago>(this.url + '/' + id, this.httpOptions).pipe(retry(1));
  }
}
