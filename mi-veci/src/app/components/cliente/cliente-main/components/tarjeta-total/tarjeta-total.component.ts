import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/Lista/lista.service';

@Component({
  selector: 'app-tarjeta-total',
  templateUrl: './tarjeta-total.component.html',
  styleUrls: ['./tarjeta-total.component.scss']
})
export class TarjetaTotalComponent implements OnInit {
  totalPago: number;

  constructor(private _listaService: ListaService) { }

  ngOnInit(): void {
    this.totalPago = this._listaService.getTotal();
    this._listaService.setTotal(this.totalPago);
  }

}
