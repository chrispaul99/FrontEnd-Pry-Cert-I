import { Component, OnInit } from '@angular/core';
import { Negocio } from 'src/app/models/Negocio/negocio';
import { Producto } from 'src/app/models/Producto/producto';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Detalle } from 'src/app/models/Detalle/detalle';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;
import { NegocioService } from 'src/app/services/Negocio/negocio.service';
import { ProductoService } from 'src/app/services/Producto/producto.service';
import { DetalleService } from 'src/app/services/Detalle/detalle.service';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { LoginService } from '../../../services/Login/login.service';

@Component({
  selector: 'app-detalle-negocio',
  templateUrl: './detalle-negocio.component.html',
  styleUrls: ['./detalle-negocio.component.css']
})
export class DetalleNegocioComponent implements OnInit {

  negocio: Negocio;
  newProducto:Producto = new Producto();
  productoEdit:Producto;
  productos: Producto[];
  faplus = faPlusCircle;
  mapa: mapboxgl.Map;
  lista: Detalle[];
  pageActual = 1;
  loading = true;
  ubicacion = false;
  mostrarTarjetas = true;
  rol:string;
  id:number;
  tituloModal:string = "Añadir Producto";
  constructor(private router: Router,private auth:LoginService, private negocioService: NegocioService, private activatedRoute: ActivatedRoute, private productosService: ProductoService, private detalleService: DetalleService) {
  }

  ngOnInit(): void {
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.rol = payLoad.rol;
    this.id = payLoad.nameid;
    this.lista = this.detalleService.getListaDetalles();
    console.log('Detalles Iniciales');
    console.log(this.lista);
    this.negocio = new Negocio();
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id){
          this.negocioService.retrieve(params.id).subscribe(
            result => {
              this.negocio = result;
            },(error)=>console.log(error),
            ()=>{
              if(this.rol == "N"){
                if(this.id !=this.negocio.Comerciante.idPersona){
                  this.auth.verificarRol();
                }
                else{
                  this.listarProductos();
                }
              }
              else{
                this.listarProductos();
              }
            }
          );
        }
      }
    );
  }

  listarProductos(){
    this.productosService.listarProductos(this.negocio.idNegocio).subscribe(
      result => {
        this.productos = result;
      },
      (error) => console.log(error),
      () => {
        this.loading = false;
      }
    );
  }
  verificarHorario(inicio: string, fin: string): boolean{
    if (inicio !== undefined && fin !== undefined){
    let horaActual = new Date();
    let horarioOpen = inicio.split(':');
    let horarioClose = fin.split(':');
    let Open = new Date();
    let Close = new Date();
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
  direccion(): void{
    let lat = this.negocio.Direccion.latitud;
    let lon = this.negocio.Direccion.longitud;
    mapboxgl.accessToken = environment.mapboxkey;
    this.mapa = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lon, lat],
    zoom: 15
    });
    const marker = new mapboxgl.Marker({
      draggable: false
  })
      .setLngLat([lon, lat])
      .addTo(this.mapa);
    this.mapa.addControl(new mapboxgl.NavigationControl());
    this.mapa.addControl(new mapboxgl.GeolocateControl());
    this.mapa.addControl(new mapboxgl.FullscreenControl());
    this.ubicacion = true;
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
  enviarListado(): void{
    this.detalleService.setListaDetalles(this.lista);
    this.router.navigateByUrl('/Cliente/Main/Pedidos/MiLista/' + this.negocio.idNegocio);
  }
  horaApertura(inicio: string): string{
    if (inicio !== undefined){
      let Open = inicio.split(':');
      let horarioOpen = Open[0] + ':' + Open[1];
      return horarioOpen;
    }
  }
  horaCierre(fin: string): string{
    if (fin !== undefined){
      let Close = fin.split(':');
      let horarioClose = Close[0] + ':' + Close[1];
      return horarioClose;
    }
  }

  Ocultar($event): void{
    if ($event) {
      this.mostrarTarjetas = false;
    }
    else{
      this.mostrarTarjetas = true;
    }
  }
  Actualizar($event): void{
    console.log($event);
}

AbrirModal(){
  this.newProducto = new Producto();
  this.newProducto.idNegocio = this.negocio.idNegocio;
}
Editar($event){
  this.tituloModal = "Actualizar Producto";
  this.newProducto = $event;
  $("#staticBackdrop").modal('show');
}
}
