import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lista } from '../../models/Lista/lista';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  url = environment.url+"/Listas";
  private rutaAnt: string;
  private totalPago: number;
  private idLista: number;

  constructor(private http: HttpClient) { }

  create(l: Lista): Observable<any> {
    const listaBody = JSON.stringify(l);
    if (l.idLista === undefined) {
      return this.http.post<any>(this.url, listaBody, environment.httpOptions);
    }
    // return this.http.put<any>(this.url, alumnoBody, this.httpOptions);
  }

  recuperarTotal(id: number): Observable<Lista> {
    return this.http.get<Lista>(this.url + '/' + id, environment.httpOptions).pipe(
      retry(1)
    );
  }

  getRutaAnterior(): string {
    return this.rutaAnt;
  }

  setRutaAnterior(rutaActual: string): void{
    this.rutaAnt = rutaActual;
  }

  setTotal(t: number): void{
    this.totalPago = t;
  }

  getTotal(): number{
    return this.totalPago;
    this.totalPago = 0;
  }

  setIdLista(ls: number): void{
    this.idLista = ls;
    console.log(this.idLista);
  }

  getIdLista(): number{
    return this.idLista;
  }
}
