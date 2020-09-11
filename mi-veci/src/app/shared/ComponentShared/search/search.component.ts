import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Detalle } from 'src/app/models/Detalle/detalle';
import { Producto } from 'src/app/models/Producto/producto';
import { Negocio } from 'src/app/models/Negocio/negocio';
import { NegocioService } from 'src/app/services/Negocio/negocio.service';
import { ProductoService } from 'src/app/services/Producto/producto.service';
import { DetalleService } from 'src/app/services/Detalle/detalle.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() title;
  @Input() tipo:string = "T";
  @Input() idNegocio: number;
  @Output() mostrar = new EventEmitter<boolean>();
  productos: Producto[];
  negocios: Negocio[];
  negociosFilter:Negocio[]=[];
  pageActual = 1;
  mostrarProductos: boolean;
  mostrarNegocios: boolean;
  loading: boolean;
  lista: Detalle[];
  id:number;
  constructor(
    private _negocioService: NegocioService,
    private _productoService: ProductoService,
    private _detalleService: DetalleService
    )
    { }

  ngOnInit(): void {
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.id= payLoad.nameid;
    this.loading = true;
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
            this.loading = false;
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
        this._negocioService.buscarNegocio(termino,0).subscribe(
          result => {
            this.loading = false;
            console.log(result);
            this.negocios = result;
            if (result.length === 0){
              this.mostrar.emit(false);
              this.mostrarNegocios = false;
            }
          },(error)=>console.log(error),
          ()=>this.capturar()
        );
        break;
      }
      case 'Mis Negocios': { /** Buscar Negocios */
        this.mostrarNegocios = true;
        this._negocioService.buscarNegocio(termino,this.id).subscribe(
          result => {
            this.loading = false;
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
  NegociosArbiertos(){
    this.negociosFilter = [];
    this.negocios.forEach(element => {
      if(this.verificarHorario(element.horarioInicial,element.horarioFinal)){
        this.negociosFilter.push(element);
      }
    });
  }
  TodosNegocio(){
    
    this.negociosFilter = this.negocios;
  }
  capturar() {
    console.log("entre");
    console.log(this.tipo);
    if(this.tipo !="T")
      this.NegociosArbiertos();
    else
      this.TodosNegocio();
    console.log(this.negociosFilter);
  }
  verificarHorario(inicio: string, fin: string): boolean{
    const horaActual = new Date();
    const horarioOpen = inicio.split(':');
    const horarioClose = fin.split(':');
    const Open = new Date();
    const Close = new Date();
    // tslint:disable-next-line: radix
    Open.setHours(parseInt(horarioOpen[0]), parseInt(horarioOpen[1]), parseInt(horarioOpen[2]));
    // tslint:disable-next-line: radix
    Close.setHours(parseInt(horarioClose[0]), parseInt(horarioClose[1]), parseInt(horarioClose[2]));
    if (Open.getTime() > Close.getTime()){
      // tslint:disable-next-line: radix
      Close.setHours(parseInt(horarioClose[0]) + 24, parseInt(horarioClose[1]), parseInt(horarioClose[2]));
       // tslint:disable-next-line: radix
      if (parseInt(horarioOpen[0]) > 12){
         // tslint:disable-next-line: radix
        Open.setHours(parseInt(horarioOpen[0]) - 12, parseInt(horarioOpen[1]), parseInt(horarioOpen[2]));
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
