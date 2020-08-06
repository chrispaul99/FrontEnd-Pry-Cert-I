import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto/producto';
import { ProductoService } from 'src/app/services/Producto/producto.service';
import { ActivatedRoute } from '@angular/router';
import { ListaService } from '../../../../../services/Lista/lista.service';

@Component({
  selector: 'app-contenedor-producto',
  templateUrl: './contenedor-producto.component.html',
  styleUrls: ['./contenedor-producto.component.scss']
})
export class ContenedorProductoComponent implements OnInit {
  productos: Producto[];

  // tslint:disable-next-line: variable-name
  constructor(private _listaService: ListaService, private _productoService: ProductoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Solo para que se visualice en la vista de resumen
    this._listaService.setRutaAnterior('contenedor-productos');
    this.list();
  }

  list(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params['id']){
          this._productoService.listarProductos(params['id']).subscribe(result => {
            this.productos = result;
            this._productoService.setId(params.id);
          });
        }
      }
    );
  }

}
