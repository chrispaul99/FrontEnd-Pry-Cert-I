import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/Lista/lista.service';

@Component({
  selector: 'app-resumen-pedidos',
  templateUrl: './resumen-pedidos.component.html',
  styleUrls: ['./resumen-pedidos.component.scss']
})
export class ResumenPedidosComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _listaService: ListaService) { }

  ngOnInit(): void {
    this._listaService.setRutaAnterior('resumen-pedidos');
  }


}
