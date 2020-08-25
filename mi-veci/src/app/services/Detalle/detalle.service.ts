import { Injectable } from '@angular/core';
import { Detalle } from '../../models/Detalle/detalle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  url = 'https://localhost:44375/api/Detalles';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  listaDetalles: Detalle[] = [];
  
  constructor(private http: HttpClient) { }

  setListaDetalles(lista: Detalle[]): void{
    this.listaDetalles=lista;
  }

  getListaDetalles(): Detalle[] {
    return this.listaDetalles;
  }
  limpiarDetalles(): void{
    this.listaDetalles = [];
  }
}
