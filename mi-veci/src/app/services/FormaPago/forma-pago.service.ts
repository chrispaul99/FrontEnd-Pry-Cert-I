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

  getFormaPago(): Observable<FormaPago[]> {
    return this.http.get<FormaPago[]>(this.url, this.httpOptions).pipe(retry(1));
  }
}
