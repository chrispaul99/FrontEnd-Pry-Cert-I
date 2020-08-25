import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../../../../models/Pedido/pedido';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css']
})
export class ListadoClienteComponent implements OnInit {

  @Input() pedido:Pedido;
  pageActual: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
