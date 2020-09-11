import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/Pedido/pedido.service';
import { Pedido } from '../../../../models/Pedido/pedido';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-principal-cliente',
  templateUrl: './principal-cliente.component.html',
  styleUrls: ['./principal-cliente.component.css']
})
export class PrincipalClienteComponent implements OnInit {

  PedidoMasCaro:number;
  PedidoMaBarato:number;
  TotalPedido:number;
  UltimosPedidos:Pedido[];
  Top5Productos:any[]=[];
  constructor(private pedidosService: PedidoService) { }

  ngOnInit(): void {
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.pedidosService.PedidoMasBarato(payLoad.nameid).subscribe(result=>{
      this.PedidoMaBarato=result});
    this.pedidosService.PedidoMasCaro(payLoad.nameid).subscribe(result=>this.PedidoMasCaro = result);
    this.pedidosService.TotalPedidos(payLoad.nameid).subscribe(result=>this.TotalPedido = result);
    this.pedidosService.Top5Productos(payLoad.nameid).pipe(map((resp:any[])=>{
      return resp.map(({nombre,Veces})=>({name:nombre,value:Veces}))
    })).subscribe(productos=>{
      this.Top5Productos = productos;
    });
    this.pedidosService.UltimosPedidos(payLoad.nameid).subscribe(result=>this.UltimosPedidos = result);
  }

}
