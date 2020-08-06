import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/Lista/lista';
import { Detalle } from 'src/app/models/Detalle/detalle';
import { Pedido } from 'src/app/models/Pedido/pedido';
import { ProductoService } from 'src/app/services/Producto/producto.service';
import { DetalleService } from 'src/app/services/Detalle/detalle.service';
import { ListaService } from 'src/app/services/Lista/lista.service';
import { PedidoService } from 'src/app/services/Pedido/pedido.service';
import Swal from 'sweetalert2';
import { Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-enviar-cancelar',
  templateUrl: './tarjeta-enviar-cancelar.component.html',
  styleUrls: ['./tarjeta-enviar-cancelar.component.scss']
})

export class TarjetaEnviarCancelarComponent implements OnInit {
  public pagSig: any[];
  public pagAnt: any[];
  location: Location;
  idProducto: number;
  lista: Lista = {
    idLista: undefined,
    totalPagar: undefined,
  };
detalle: Detalle = {
  idDetalle: undefined,
  idProducto: undefined,
  idLista: undefined,
  cantidad: undefined,
  total: undefined,
  nombre: undefined,
  precio: undefined,
};
pedido: Pedido = {
  idPedido: undefined,
  fecha: undefined,
  documento: undefined,
  idCliente: undefined,
  idLista: undefined,
  idFormaPago: undefined,
  entregado: undefined,
  recibido: undefined,
};
private idLista: number;

  constructor(
    location: Location,
    private _productoService: ProductoService,
    private _detalleService: DetalleService,
    private _listaService: ListaService,
    private _pedidoService: PedidoService,
    private router : Router
  )
  {
    this.location = location;
  }

  ngOnInit(): void {
    this.idProducto = this._productoService.getId();
  }

  enviarLista(): void {
    this.lista.totalPagar = this._listaService.getTotal();
    /* Crear Lista */
    this._listaService.create(this.lista).subscribe(
      result => {
        /* Obtener idLista */
        this.idLista = result.idLista;
        this._detalleService.getListaDetalles().forEach(element => {
          this.detalle.idProducto = element.idProducto;
          this.detalle.idLista = this.idLista;
          this.detalle.cantidad = element.cantidad;
          this.detalle.total = element.total;
          /* Crear Detalle */
          this._detalleService.create(this.detalle).subscribe(det => console.log(det));
        });
        this.pedido.fecha = new Date();
        this.pedido.documento = 'pendiente';
        /* Obtener idCliente */
        this.pedido.idCliente = 3; // Obtener del token cuando se loguea
        this.pedido.idLista = this.idLista;
        this.pedido.idFormaPago = 1; // Solo este existe en la tabla actualmente
        this.pedido.entregado = false;
        this.pedido.recibido = false;
        /* Crear Pedido */
        this._pedidoService.create(this.pedido).subscribe(resultPedido => {
          console.log(resultPedido);
        });
      }
    );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu pedido fue enviado',
      showConfirmButton: false,
      timer: 1500
    }).then((result) => {
      this._detalleService.limpiarDetalles();
      this.router.navigate([' /Cliente/MainCliente/contenedor-negocios']);
     
    });
  }

  borrarLista($event): void {
    const link = document.getElementById('link');
    link.setAttribute('ng-reflect-router-link', `/contenedor-productos/${this.idProducto}`);
    link.setAttribute('href', `#contenedor-productos/${this.idProducto}`);
    $event.preventDefault();
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'La lista se borrará',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cancela esto',
      cancelButtonText: 'No, mejor no'
    }).then((result) => {
        if (result.value) {
          this._detalleService.limpiarDetalles();
          setTimeout(() => {
            this.router.navigate(['/Cliente/MainCliente/contenedor-productos']);
          }, 2000);
          Swal.fire(
          'Hecho',
          'La lista está vacía.',
          'info'
        );
      }
    });
  }
}
