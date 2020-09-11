import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormaPago } from '../../models/FormaPago/forma-pago';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormaPagoService {

  url = environment.url+"/FormadePago";
  constructor(private http: HttpClient) { }

  getFormaPago(): Observable<FormaPago[]> {
    return this.http.get<FormaPago[]>(this.url, environment.httpOptions).pipe(retry(1));
  }
}
