import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from '../../models/Pedido/pedido';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url = 'https://localhost:44375/api/Pedidos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  create(p: Pedido): Observable<any> {
    const pedidoBody = JSON.stringify(p);
    console.log(pedidoBody);
    if (p.idPedido === undefined) {
      return this.http.post<any>(this.url, pedidoBody, this.httpOptions);
    }
    // return this.http.put<any>(this.url, alumnoBody, this.httpOptions);
  }

  filtrar(id: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.url + '/MyOrders/?id=' + id, this.httpOptions).pipe(retry(1));
  }
}
