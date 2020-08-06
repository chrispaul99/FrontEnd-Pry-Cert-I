import { Injectable } from '@angular/core';
import { Detalle } from '../../models/Detalle/detalle';
import {Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface DetalleEnvio{
  idDetalle: number;
  idProducto: number;
  idLista: number;
  cantidad: number;
  total: number;
}

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

  private listaDetalles: any[] = [];
  private nuevoDetalle: DetalleEnvio = {
    idDetalle: undefined,
    idProducto: undefined,
    idLista: undefined,
    cantidad: undefined,
    total: undefined,
  };

  constructor(private http: HttpClient) { }

  create(d: Detalle): Observable<any> {
    this.nuevoDetalle.idDetalle = d.idDetalle;
    this.nuevoDetalle.idProducto = d.idProducto;
    this.nuevoDetalle.idLista = d.idLista;
    this.nuevoDetalle.cantidad = d.cantidad;
    this.nuevoDetalle.total = d.total;
    const detalleBody = JSON.stringify(this.nuevoDetalle);
    if (d.idDetalle === undefined) {
      return this.http.post<any>(this.url, detalleBody, this.httpOptions);
    }
    // return this.http.put<any>(this.url, alumnoBody, this.httpOptions);
  }

  setListaDetalles(detalle: Detalle): void{
    this.listaDetalles.push(detalle);
  }

  getListaDetalles(): Detalle[] {
    return this.listaDetalles;
  }

  limpiarDetalles(): void{
    this.listaDetalles = [];
  }
}
