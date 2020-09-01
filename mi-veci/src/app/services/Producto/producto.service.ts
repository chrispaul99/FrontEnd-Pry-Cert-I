import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, forkJoin } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Producto } from '../../models/Producto/producto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private id: number;
  url = 'https://localhost:44375/api/Productos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  // .get debe llamar al GET del backend donde se hacer el filtrado
  listarProductos(id: number): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url + '/' + id, this.httpOptions).pipe(retry(1));
  }

  lista(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url , this.httpOptions).pipe(retry(1));
  }

  buscarProducto(id: number, criterio: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + '/Search?id=' + id + '&&criterio=' + criterio, this.httpOptions);
  }
  getId(): number{
    return this.id;
  }

  setId(idActual: number): void{
    this.id = idActual;
  }
}
