import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/Lista/lista.service';

@Component({
  selector: 'app-resumen-productos',
  templateUrl: './resumen-productos.component.html',
  styleUrls: ['./resumen-productos.component.scss']
})
export class ResumenProductosComponent implements OnInit {

  rutaRecibida: string;
  ban: boolean;

  constructor(private _listaService: ListaService) { }

  ngOnInit(): void {
    this.rutaRecibida = this._listaService.getRutaAnterior();
    if (this.rutaRecibida === 'contenedor-productos'){
      this.ban = true;
    } else if (this.rutaRecibida === 'resumen-pedidos'){
      this.ban = false;
    }
  }

}
