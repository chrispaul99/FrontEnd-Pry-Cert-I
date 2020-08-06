import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/Lista/lista.service';
import { DetalleService } from 'src/app/services/Detalle/detalle.service';
import { ProductoService } from 'src/app/services/Producto/producto.service';
import { NegocioService } from 'src/app/services/Negocio/negocio.service';
import { Detalle } from 'src/app/models/Detalle/detalle';
import Swal from 'sweetalert2';

interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  constructor(
    private _listaService: ListaService,
    private _detalleService: DetalleService,
    private _productoService: ProductoService,
    private _negocioService: NegocioService
  )
  { }

  public tableData1: TableData;
  public negocio: string;
  rutaRecibida: string;
  ban: boolean;
  detalles: Detalle[];
  totalPago = 0;


  ngOnInit(): void {
    this.cargarData();
  }
  borrarItem(): void{
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'El producto se quitará de la lista.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quítalo!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Hecho!',
          'El producto se quito de la lista.',
          'success'
        );
      }
    });
  }

  cargarData(): void{
    this.detalles = this._detalleService.getListaDetalles();
    for (const i of this.detalles){
      this.totalPago += i.total;
    }
    this._listaService.setTotal(this.totalPago);
    this.negocio = this._negocioService.getNombreNegocio();
    this.tableData1 = {
        headerRow: [ 'Producto', 'Precio Unitario', 'Cantidad', 'Total'],
        dataRows: [
            ['Producto', '$$$', '1', '$36,738'],
            ['Producto', '$$$', '2', '$23,789'],
            ['Producto', '$$$', '2', '$56,142'],
            ['Producto', '$$$', '1', '$38,735'],
            ['Producto', '$$$', '8', '$63,542'],
            ['Producto', '$$$', '15', '$78,615']
        ]
    };
    this.rutaRecibida = this._listaService.getRutaAnterior();
    if (this.rutaRecibida === 'contenedor-productos'){
      this.ban = true;
    } else if (this.rutaRecibida === 'resumen-pedidos'){
      this.ban = false;
    }
  }

}
