import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../../../../../services/Detalle/detalle.service';
import { Detalle } from '../../../../../models/Detalle/detalle';
import { Lista } from '../../../../../models/Lista/lista';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { FormaPagoService } from '../../../../../services/FormaPago/forma-pago.service';
import { FormaPago } from '../../../../../models/FormaPago/forma-pago';
import { Pedido } from '../../../../../models/Pedido/pedido';
import { PedidoService } from '../../../../../services/Pedido/pedido.service';
import { NegocioService } from '../../../../../services/Negocio/negocio.service';
import { Negocio } from 'src/app/models/Negocio/negocio';
import { ArgumentOutOfRangeError } from 'rxjs';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ListaService } from '../../../../../services/Lista/lista.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  listado: Detalle[];
  lista: Lista = new Lista(); ;
  pedidoFinal:Pedido;
  formasPago:FormaPago[];
  pago:number;
  totalPagar:number = 0.00;
  negocio:Negocio;
  ban:boolean = false;
  verificador:boolean = true;
  tipo:string;
  form: FormGroup;
  loading:boolean = true;
  faPlus = faPlus;
  pageActual: number = 1;
  famenos = faMinus;
  constructor(private detalleService: DetalleService, private negocioService:NegocioService, private pedidoService:PedidoService,private formaPago: FormaPagoService,private router: Router,private activatedRoute: ActivatedRoute,private serviciolista:ListaService) {
   }

  ngOnInit(): void {
    this.pedidoFinal = new Pedido();
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id){
          this.listado = [];
          this.listado = this.detalleService.getListaDetalles();
          console.log(this.listado);
          this.verificarLista();
          this.validarLoading(params.id);
        }
      }
    );
   
  }
  verificarLista(){
    if(this.listado.length>0){
      this.verificador = false;
    }else{
      this.verificador = true;
    }
    this.calcularTotal();
  }
  validarLoading(negocio:number){
    this.negocio = new Negocio();
    this.negocioService.retrieve(negocio).subscribe(result=>{
      this.negocio = result;
    },(error)=>console.log(error),
    ()=>  {
      this.cambiar();
      this.loading=false;
    });
    this.calcularTotal();
    this.lista.Detalle = this.listado;
    this.modalPedido();
  }
  calcularTotal(){
    this.totalPagar=0.0;
    this.listado.forEach(element => {
      this.totalPagar+=element.total;
    });
    this.lista.totalPagar = this.totalPagar;
  }
  cambiar(){
    if(this.negocio.delivery == true && this.negocio.reserva == true){
      if(this.ban){
        this.ban=false;
        this.tipo = "Delivery";
      }
      else
      {
        this.tipo = "Reserva";
        this.ban = true;
      }
    }
    else{
      if(this.negocio.delivery){
        this.tipo = "Delivery";
      }
      if(this.negocio.reserva){
        this.tipo = "Reserva";
      }
    }
    this.lista.tipo = this.tipo;
    console.log(this.lista.tipo);
  }

  modalPedido(){
    this.formasPago=[];
    this.formaPago.getFormaPago().subscribe(result=> this.formasPago = result);
  }
  Enviar(){
    console.log(this.pedidoFinal);
    this.crearPedido();
    console.log('Paso!!!');
    console.log(this.pedidoFinal);
    this.pedidoService.create(this.pedidoFinal).subscribe(result=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "Lista de Compras enviada",
          showConfirmButton: false,
          timer: 1500
        });
    },(error)=>console.log(error),
    ()=>{
      //this.EnviarPedidos();
      this.router.navigate(['/Cliente/Main/Pedidos']);
      this.pedidoFinal = undefined;
      this.detalleService.setListaDetalles([]);
    } );
  }
  borrarLista(): void {
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
          this.detalleService.limpiarDetalles();
          Swal.fire(
          'Hecho',
          'La lista está vacía.',
          'info'
        );
        this.router.navigate(['/Cliente/Main/Negocios/Selected/'+this.negocio.idNegocio]);
      }
    });
  }
  borrarItem(id:number): void{
    let indice = 0;
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
        this.detalleService.getListaDetalles().forEach(element => {
          if(element.idDetalle == id){
            this.detalleService.getListaDetalles().splice(indice, 1);
          }
          indice++;
        });
        this.listado = this.detalleService.getListaDetalles();
        this.verificarLista();
        console.log("Listado local")
        console.log(this.detalleService.getListaDetalles());
        console.log("Listado de Vista");
        console.log(this.listado);
        Swal.fire(
          'Hecho!',
          'El producto se quito de la lista.',
          'success'
        );
      }
    });
  }
  aumentar(id:number){
    this.listado.forEach(element => {
      if(element.idDetalle == id){
        if(element.cantidad<element.Producto.stock){
          element.cantidad++;
          element.total = element.Producto.precio * element.cantidad;
        }
      }
    });
    this.calcularTotal();
  }
  disminuir(id: number){
    let indice = 0;
    this.listado.forEach(element => {
      if(element.idDetalle == id){
        if(element.cantidad>1){
          element.cantidad--;
          element.total = element.Producto.precio * element.cantidad;
        }else{
          this.listado.splice(indice,1);
        }
      }
      indice++;
    });
    this.verificarLista();
    console.log(this.listado);
  }

  crearPedido(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    this.pedidoFinal.Lista = this.lista;
    this.pedidoFinal.Lista.Detalle.forEach(detalle => {
      detalle.idDetalle = null;
      detalle.idProducto = detalle.Producto.idProducto;
    });
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var id = payLoad.nameid;
    this.pedidoFinal.idCliente = id;
    this.pedidoFinal.Persona = null;
    this.pedidoFinal.idFormaPago =1;
    this.pedidoFinal.FormaPago = null;
  }

  EnviarPedidos(){
    for (let i = 0; i < 100; i++) {
      this.pedidoService.create(this.pedidoFinal).subscribe(result=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "Lista de Compras enviada",
          showConfirmButton: false,
          timer: 1500
        });
    },(error)=>console.log(error),
    ()=>{
      //this.router.navigate(['/Cliente/Main/Pedidos']);
      //this.pedidoFinal = undefined;
      //this.detalleService.setListaDetalles([]);
      //console.log(this.detalleService.getListaDetalles());
    } );
    }
    
  }
}