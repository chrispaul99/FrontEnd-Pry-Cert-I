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

  delete(id:number): Observable<any> {
    return this.http.delete<any>(this.url+'/'+id, environment.httpOptions);
  }
  save(p: Producto): Observable<any> {
    const productoBody = JSON.stringify(p);
    if (p.idProducto === undefined) {
      return this.http.post<any>(this.url, productoBody, environment.httpOptions);
    }
    return this.http.put<any>(this.url, productoBody, environment.httpOptions);
  }
  Stock10(id:number):Observable<any>{
    return this.http.get<any>(this.url + '/Stock10/?id=' + id, environment.httpOptions).pipe(retry(1));
  }
}
