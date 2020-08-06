import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Negocio } from '../../models/Negocio/negocio';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  url = 'https://localhost:44375/api/Negocios';
  private nombreNegocio: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  listarNegocios(): Observable<Negocio[]>{
    return this.http.get<Negocio[]>(this.url, this.httpOptions).pipe(retry(1));
  }

  setNombreNegocio(nombre: string): void{
    this.nombreNegocio = nombre;
  }

  getNombreNegocio(): string {
    return this.nombreNegocio;
  }
}
