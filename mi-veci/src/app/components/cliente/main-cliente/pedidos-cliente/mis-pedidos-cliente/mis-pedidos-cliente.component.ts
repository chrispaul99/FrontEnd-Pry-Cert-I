import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido/pedido';
import { PedidoService } from '../../../../../services/Pedido/pedido.service';

@Component({
  selector: 'app-mis-pedidos-cliente',
  templateUrl: './mis-pedidos-cliente.component.html',
  styleUrls: ['./mis-pedidos-cliente.component.css']
})
export class MisPedidosClienteComponent implements OnInit {

  misPedidos: Pedido[];
  pedidoSeleccionado: Pedido;
  constructor(private pedidosService: PedidoService,) { }

  ngOnInit(): void {
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.pedidosService.filtrar(payLoad.nameid).subscribe(
      result => {
        this.misPedidos = result;
      }
    );
  }
  detalles(pedido: Pedido): void{
    this.pedidoSeleccionado = pedido;
    console.log(this.pedidoSeleccionado);
  }
}
