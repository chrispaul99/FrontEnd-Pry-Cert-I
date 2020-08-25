import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NegocioService } from '../../../../../services/Negocio/negocio.service';
import { Negocio } from 'src/app/models/Negocio/negocio';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { environment } from 'src/environments/environment';
import { Producto } from '../../../../../models/Producto/producto';
import { ProductoService } from '../../../../../services/Producto/producto.service';
import { Detalle } from '../../../../../models/Detalle/detalle';
import { DetalleService } from '../../../../../services/Detalle/detalle.service';
@Component({
  selector: 'app-only-negocio',
  templateUrl: './only-negocio.component.html',
  styleUrls: ['./only-negocio.component.css']
})
export class OnlyNegocioComponent implements OnInit {

  negocio: Negocio;
  productos:Producto[];
  faplus = faPlusCircle;
  mapa: mapboxgl.Map;
  lista:Detalle[];
  pageActual: number = 1;
  loading: boolean = true;
  ubicacion:boolean = false;
  constructor(private router: Router,private negocioService: NegocioService, private activatedRoute: ActivatedRoute,private productosService: ProductoService,private detalleService: DetalleService) {
    /*this.router.events
.pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
.subscribe((events: RoutesRecognized[]) => {
  console.log('previous url', events[0].urlAfterRedirects);
  console.log('current url', events[1].urlAfterRedirects);
});*/
  }

  ngOnInit(): void {
    this.lista = this.detalleService.getListaDetalles();
    console.log("Detalles Iniciales");
    console.log(this.lista);
    this.negocio = new Negocio();
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id){
          this.negocioService.retrieve(params.id).subscribe(
            result => {
              this.negocio = result;
              this.productosService.listarProductos(this.negocio.idNegocio).subscribe(
                result => {
                  this.productos = result;
                },
                (error)=>console.log(error),
                ()=>{
                  this.loading = false;
                }    
              )
            },
          );
        }
      }
    );
  }
  verificarHorario(inicio: string, fin: string): boolean{
    if(inicio!=undefined && fin!=undefined){
    let horaActual = new Date();
    let horarioOpen = inicio.split(':');
    let horarioClose = fin.split(':');
    let Open = new Date();
    let Close = new Date();
    // tslint:disable-next-line: radix
    Open.setHours(parseInt(horarioOpen[0]),parseInt(horarioOpen[1]), parseInt(horarioOpen[2]));
    // tslint:disable-next-line: radix
    Close.setHours(parseInt(horarioClose[0]), parseInt(horarioClose[1]),parseInt(horarioClose[2]));
    if(Open.getTime() > Close.getTime()){
      // tslint:disable-next-line: radix
      Close.setHours(parseInt(horarioClose[0]) + 24, parseInt(horarioClose[1]),parseInt(horarioClose[2]));
       // tslint:disable-next-line: radix
      if(parseInt(horarioOpen[0]) > 12){
         // tslint:disable-next-line: radix
        Open.setHours(parseInt(horarioOpen[0]) - 12, parseInt(horarioOpen[1]), parseInt(horarioOpen[2]));
      }
    }
    return this.ControlHorario(Open.getTime(), Close.getTime(), horaActual.getTime());
    }
    
  }
  ControlHorario(Inicio: number, Fin: number, actual: number): boolean{
  if(Inicio === Fin){
    return true;
  }
  if( actual < Fin && actual >= Inicio)
  {
    return true;
  }
  return false;
  }
  direccion(){
    let lat = this.negocio.Direccion.latitud;
    let lon = this.negocio.Direccion.longitud;
    mapboxgl.accessToken = environment.mapboxkey;
    this.mapa = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lon,lat],
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
      let ban=false;
      if(this.lista.length == 0){
      this.lista.push($event);
      }
      else{
        this.lista.forEach(element => {
          if($event.idDetalle == element.idDetalle){
            if($event.cantidad == 0){
              this.lista.splice(indice, 1);
            }
            ban = true;
          }
          indice++;
        });
        if(!ban){
          this.lista.push($event);
        }
      }
  }
  enviarListado(){
    this.detalleService.setListaDetalles(this.lista);
    this.router.navigateByUrl('/Cliente/Main/Pedidos/MiLista/'+this.negocio.idNegocio);
    
  }
  horaApertura(inicio: string):string{
    if(inicio!=undefined){
      let Open = inicio.split(':');
      let horarioOpen = Open[0] + ':' + Open[1];
      return horarioOpen;
    }
  }
  horaCierre(fin: string):string{
    if(fin!=undefined){
      let Close = fin.split(':');
      let horarioClose = Close[0] + ':' + Close[1];
      return horarioClose;
    }
  }
}