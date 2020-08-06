import { Component, OnInit, Input } from '@angular/core';
import { Detalle } from '../../../../../models/Detalle/detalle';
import { DetalleService } from '../../../../../services/Detalle/detalle.service';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() producto: any = {};
  ban: boolean;
  detalle: Detalle = new Detalle();
  cantidad: number;

  // tslint:disable-next-line: variable-name
  constructor(private _detalleService: DetalleService) { }

  ngOnInit(): void {
    if (this.producto.stock === 0){
      this.ban = false;
    }
    else {
      this.ban = true;
    }
  }

  addDetalle(id: number, nombre: string, precio: number): void{
    this.detalle.idProducto = id;
    this.detalle.cantidad = this.cantidad;
    this.detalle.total = (this.cantidad * this.producto.precio);
    this.detalle.nombre = nombre;
    this.detalle.precio = precio;
    console.log(this.detalle);
    this._detalleService.setListaDetalles(this.detalle);
  }

}
