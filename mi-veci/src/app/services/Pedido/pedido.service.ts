import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../../models/Pedido/pedido';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url = environment.url+"/Pedidos";
 
  constructor(private http: HttpClient) { }

  create(p: Pedido): Observable<any> {
    const pedidoBody = JSON.stringify(p);
    console.log(pedidoBody);
    if (p.idPedido === undefined) {
      return this.http.post<any>(this.url, pedidoBody, environment.httpOptions);
    }
    return this.http.put<any>(this.url, pedidoBody, environment.httpOptions);
  }

  filtrar(id: number,rol:string): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.url + '/MyOrders/?id=' + id+'&&rol='+rol, environment.httpOptions).pipe(retry(1));
  }
}
