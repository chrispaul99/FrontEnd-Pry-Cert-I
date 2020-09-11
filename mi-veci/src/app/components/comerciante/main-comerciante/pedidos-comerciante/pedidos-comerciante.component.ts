import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido/pedido';
import { PedidoService } from 'src/app/services/Pedido/pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos-comerciante',
  templateUrl: './pedidos-comerciante.component.html',
  styleUrls: ['./pedidos-comerciante.component.css']
})
export class PedidosComercianteComponent implements OnInit {

  misPedidos: Pedido[];
  pedidosFilter: Pedido[];
  pedidoSeleccionado: Pedido;
  elegido:string;
  opcionSeleccionada:string = "I";
  verSeleccion: string        = '';
  constructor(private pedidosService: PedidoService,) { }

  ngOnInit(): void {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    this.elegido = "I";
    this.getPedidos();
   
    
  }
  detalles(pedido: Pedido): void{
    this.pedidoSeleccionado = pedido;
    console.log(this.pedidoSeleccionado);
  }
  Confirmar(pedido:Pedido){
    pedido.estado = "P";
    pedido.tiempoOrder = "30 min";
    this.pedidosService.create(pedido).subscribe(result=>{
      console.log(result);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Pedido En Proceso",
        showConfirmButton: false,
        timer: 1500
      });
    });
  }
  Cancelar(pedido:Pedido){
    Swal.fire({
      title: 'Cancelar Pedido',
      text: '¿Esta seguro que desea cancelar el Pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
        if (result.value) {
          Swal.fire({
            allowOutsideClick: false,
            icon: 'info',
            text: 'Espere por favor...'
          });
          Swal.showLoading();
          pedido.estado = "C";
          this.pedidosService.create(pedido).subscribe(result=>{
            console.log(result);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: "Pedido Cancelado",
              showConfirmButton: false,
              timer: 1500
            });
          })
      }
    });
  }
  getPedidosFilter(estado:string){
    this.elegido = estado;
    console.log(estado);
    this.pedidosFilter=this.misPedidos.filter(item=>item.estado == estado);
  }
  getTodos(){
    this.elegido = 'T';
    this.pedidosFilter = this.misPedidos;
  }
  getPedidos(){
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.pedidosService.filtrar(payLoad.nameid,payLoad.rol).subscribe(
      result => {
        Swal.close();
        this.misPedidos = result;
      },(error)=>console.log(error),
      ()=>{
        this.pedidosFilter = this.misPedidos.filter(item=>item.estado == this.elegido);
      }
    );
  }
  capturar() {
    if(this.opcionSeleccionada !="T")
      this.getPedidosFilter(this.opcionSeleccionada);
    else
      this.getTodos();
}
}
