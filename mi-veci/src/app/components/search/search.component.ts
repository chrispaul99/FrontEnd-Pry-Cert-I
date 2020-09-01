import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NegocioService } from '../../services/Negocio/negocio.service';
import { ProductoService } from '../../services/Producto/producto.service';
import { DetalleService } from '../../services/Detalle/detalle.service';
import { Detalle } from 'src/app/models/Detalle/detalle';
import { Producto } from 'src/app/models/Producto/producto';
import { Negocio } from 'src/app/models/Negocio/negocio';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() title;
  @Input() idNegocio: number;
  @Output() mostrar = new EventEmitter<boolean>();
  productos: Producto[];
  negocios: Negocio[];
  pageActual = 1;
  mostrarProductos: boolean;
  mostrarNegocios: boolean;
  lista: Detalle[];
  constructor(
    private _negocioService: NegocioService,
    private _productoService: ProductoService,
    private _detalleService: DetalleService
    )
    { }

  ngOnInit(): void {
    this.lista = this._detalleService.getListaDetalles();
  }

  buscar(termino: string): void {
    this.mostrar.emit(true);
    console.log(termino);
    switch (this.title) {
      case 'Listado de Productos': { /** Buscar Productos */
        this.mostrarProductos = true;
        this._productoService.buscarProducto(this.idNegocio, termino).subscribe(
          result => {
            console.log(result);
            this.productos = result;
            if (result.length === 0){
              this.mostrar.emit(false);
              this.mostrarProductos = false;
            }
          }
        );
        break;
      }
      case 'Negocios Cercanos': { /** Buscar Negocios */
        this.mostrarNegocios = true;
        this._negocioService.buscarNegocio(termino).subscribe(
          result => {
            console.log(result);
            this.negocios = result;
            if (result.length === 0){
              this.mostrar.emit(false);
              this.mostrarNegocios = false;
            }
          }
        );
        break;
      }
      default:
        break;
    }
  }

  recibirDetalle($event): void {
    let indice = 0;
    let ban = false;
    if (this.lista.length === 0){
    this.lista.push($event);
    }
    else{
      this.lista.forEach(element => {
        if ($event.idDetalle === element.idDetalle){
          if ($event.cantidad === 0){
            this.lista.splice(indice, 1);
          }
          ban = true;
        }
        indice++;
      });
      if (!ban){
        this.lista.push($event);
      }
    }
  }
}
