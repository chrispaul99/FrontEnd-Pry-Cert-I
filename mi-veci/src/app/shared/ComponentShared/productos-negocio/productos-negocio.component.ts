import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/models/Producto/producto';
import { Detalle } from 'src/app/models/Detalle/detalle';
import { DetalleService } from 'src/app/services/Detalle/detalle.service';
import { ProductoService } from '../../../services/Producto/producto.service';


@Component({
  selector: 'app-productos-negocio',
  templateUrl: './productos-negocio.component.html',
  styleUrls: ['./productos-negocio.component.css']
})
export class ProductosNegocioComponent implements OnInit {

  @Input() producto: Producto;
  @Output() eliminado = new EventEmitter<boolean>();
  @Output() miDetalle = new EventEmitter<Detalle>();
  @Output() productoSelect = new EventEmitter<Producto>();
  detalle: Detalle;
  misProductos: Producto[] = [];
  cantidad = 0;
  faPlus = faPlus;
  famenos = faMinus;
  ban = true;
  vacio = true;
  rol:string;
  apertura=false;
  constructor(private detalleService: DetalleService,private productosService:ProductoService) { }

  ngOnInit(): void {
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.rol = payLoad.rol;
    this.verificarSeleccionado();
    this.apertura = this.verificarHorario(this.producto.Negocio.horarioInicial,this.producto.Negocio.horarioFinal);

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

  EliminarProducto(){
    Swal.fire({
      title: 'Eliminar Negocio',
      text: '¿Esta seguro que desea eliminar '+this.producto.nombre+' ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
        if (result.value) {
          this.productosService.delete(this.producto.idProducto).subscribe(result=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: "Negocio Eliminado Correctamente",
              showConfirmButton: false,
              timer: 1500
            });
          });
          this.eliminado.emit(true);
      }
    });
  }
  Editar(){
    this.productoSelect.emit(this.producto);
  }
  verificarHorario(inicio: string, fin: string): boolean{
    const horaActual = new Date();
    const horarioOpen = inicio.split(':');
    const horarioClose = fin.split(':');
    const Open = new Date();
    const Close = new Date();
    // tslint:disable-next-line: radix
    Open.setHours(parseInt(horarioOpen[0]), parseInt(horarioOpen[1]));
    // tslint:disable-next-line: radix
    Close.setHours(parseInt(horarioClose[0]), parseInt(horarioClose[1]));
    if (Open.getTime() > Close.getTime()){
      // tslint:disable-next-line: radix
      Close.setHours(parseInt(horarioClose[0]) + 24, parseInt(horarioClose[1]));
       // tslint:disable-next-line: radix
      if (parseInt(horarioOpen[0]) > 12){
         // tslint:disable-next-line: radix
        Open.setHours(parseInt(horarioOpen[0]) - 12, parseInt(horarioOpen[1]));
      }
    }
    return this.ControlHorario(Open.getTime(), Close.getTime(), horaActual.getTime());
  }

  ControlHorario(Inicio: number, Fin: number, actual: number): boolean{
    if (Inicio === Fin){
      return true;
    }
    if ( actual < Fin && actual >= Inicio)
    {
      return true;
    }
    return false;
    }
}
