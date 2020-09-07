import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, forkJoin } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Producto } from '../../models/Producto/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private id: number;
  url = environment.url+"/Productos";

  constructor(private http: HttpClient) {
  }

  // .get debe llamar al GET del backend donde se hacer el filtrado
  listarProductos(id: number): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url + '/' + id, environment.httpOptions).pipe(retry(1));
  }

  lista(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url , environment.httpOptions).pipe(retry(1));
  }

  buscarProducto(id: number, criterio: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + '/Search?id=' + id + '&&criterio=' + criterio, environment.httpOptions);
  }
  getId(): number{
    return this.id;
  }

  setId(idActual: number): void{
    this.id = idActual;
  }
}
