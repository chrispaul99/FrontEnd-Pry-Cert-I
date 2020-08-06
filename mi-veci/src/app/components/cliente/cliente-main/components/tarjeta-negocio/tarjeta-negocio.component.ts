import { Component, OnInit, Input } from '@angular/core';
import { NegocioService } from 'src/app/services/Negocio/negocio.service';

@Component({
  selector: 'app-tarjeta-negocio',
  templateUrl: './tarjeta-negocio.component.html',
  styleUrls: ['./tarjeta-negocio.component.scss']
})
export class TarjetaNegocioComponent implements OnInit {
  public listadoNegocios: any[];
  @Input() negocio: any = {};
  colorDelivery: string;
  colorReserva: string;

  // tslint:disable-next-line: variable-name
  constructor(private _negocioService: NegocioService) {}

  ngOnInit(): void {
    if (this.negocio.delivery){
      this.colorDelivery = 'success';
    }
    else{
      this.colorDelivery = 'danger';
    }
    if (this.negocio.reserva){
      this.colorReserva = 'success';
    }
    else{
      this.colorReserva = 'danger';
    }
  }

  enviarNombre(nombre: string): void{
    this._negocioService.setNombreNegocio(nombre);
  }
}
