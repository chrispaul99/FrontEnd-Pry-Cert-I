import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../../services/Pedido/pedido.service';
import Swal from 'sweetalert2';
import { Pedido } from 'src/app/models/Pedido/pedido';
import { ProductoService } from '../../../../services/Producto/producto.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-principal-comerciante',
  templateUrl: './principal-comerciante.component.html',
  styleUrls: ['./principal-comerciante.component.css']
})
export class PrincipalComercianteComponent implements OnInit {

  misPedidos: Pedido[];
  pedidosFilter: Pedido[];
  top5Pedidos:Pedido[]=[];
  TopProductos:any[]=[];
  constructor(private pedidosService:PedidoService, private productoService:ProductoService) { }

  ngOnInit(): void {
    this.getPedidos();
  }
  getPedidos(){
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.pedidosService.filtrar(payLoad.nameid,payLoad.rol).subscribe(
      result => {
        Swal.close();
        this.misPedidos = result;
      },(error)=>console.log(error),
      ()=>{
        this.pedidosFilter = this.misPedidos.filter(item=>item.estado == 'I');
        for (let index = this.pedidosFilter.length-1; index >= 0; index--) {
          this.top5Pedidos.push(this.pedidosFilter[index]);
          if(this.top5Pedidos.length==5){
            break;
          }
        }
       
      }
    );
    this.productoService.Stock10(payLoad.nameid).pipe(map((resp:any[])=>{
      return resp.map(({nombre,stock})=>({name:nombre,value:stock}))
    })).subscribe(productos=>{
      this.TopProductos = productos;
    });
  }
}
