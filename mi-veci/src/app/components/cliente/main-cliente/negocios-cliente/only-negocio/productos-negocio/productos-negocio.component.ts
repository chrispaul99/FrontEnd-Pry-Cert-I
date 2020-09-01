import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../../../../models/Producto/producto';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Detalle } from '../../../../../../models/Detalle/detalle';
import Swal from 'sweetalert2';
import { DetalleService } from '../../../../../../services/Detalle/detalle.service';

@Component({
  selector: 'app-productos-negocio',
  templateUrl: './productos-negocio.component.html',
  styleUrls: ['./productos-negocio.component.css']
})
export class ProductosNegocioComponent implements OnInit {

  @Input() producto: Producto;
  @Output() miDetalle = new EventEmitter<Detalle>();
  detalle: Detalle;
  misProductos: Producto[] = [];
  cantidad = 0;
  faPlus = faPlus;
  famenos = faMinus;
  ban = true;
  vacio = true;
  constructor(private detalleService: DetalleService) { }

  ngOnInit(): void {
    this.verificarSeleccionado();
  }

  aumentar(): void{
    if (this.cantidad < this.producto.stock){
      this.cantidad++;
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'No se puede añadir más',
        showConfirmButton: false,
        timer: 1500
      });
    }
    this.actualizarLista();
  }
  disminuir(): void{
    if (this.cantidad > 0){
      this.cantidad--;
    }
    this.actualizarLista();
  }
  añadirLista(): void{
      for (let i = 1; i <= this.cantidad; i++){
        this.misProductos.push(this.producto);
    }
  }
  actualizarLista(): void{
    if (this.misProductos.length === 0){
      this.añadirLista();
    }
    else{
      if (this.misProductos.length < this.cantidad || this.misProductos.length > this.cantidad){
        this.misProductos = [];
        this.añadirLista();
      }
    }
    if (this.cantidad === 0){
      if (this.detalle !== undefined){
        this.eliminarDetalle();
      }
    }
  }
  crearDetalle(): void{
    if (this.cantidad > 0)
    {
      if (this.detalle === undefined){
          this.addDetalle();
      }
      else{
        this.detalleService.getListaDetalles().forEach(element => {
          if (this.detalle.idDetalle === element.idDetalle){
            element = this.calcularTotal(element);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Producto actualizado en su lista',
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
      }
    }
    else{
      if (this.detalle === undefined){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se ha registrado ningún producto',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  }
  addDetalle(): void{
    this.detalle = new Detalle();
    this.detalle.idDetalle = this.producto.idProducto;
    this.detalle.Producto = this.producto;
    this.detalle = this.calcularTotal(this.detalle);
    this.miDetalle.emit(this.detalle);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto añadido a su lista',
      showConfirmButton: false,
      timer: 1500
    });
  }

  verificarSeleccionado(): void{
    this.detalleService.getListaDetalles().forEach(element => {
      if (element.Producto.idProducto === this.producto.idProducto){
        this.cantidad = element.cantidad;
        this.detalle = element;
      }
    });
  }

  calcularTotal(element: Detalle): Detalle{
    element.cantidad = this.misProductos.length;
    element.total = this.producto.precio * element.cantidad;
    return element;
  }

  eliminarDetalle(): void{
    this.detalle = this.calcularTotal(this.detalle);
    this.miDetalle.emit(this.detalle);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto eliminado de la lista',
      showConfirmButton: false,
      timer: 1500
    });
    this.detalle = undefined;
  }
}
