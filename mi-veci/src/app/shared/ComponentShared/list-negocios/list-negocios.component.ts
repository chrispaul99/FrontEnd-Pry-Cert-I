import { Component, OnInit } from '@angular/core';
import { Negocio } from 'src/app/models/Negocio/negocio';
import { faPhone, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { NegocioService } from 'src/app/services/Negocio/negocio.service';
import { DetalleService } from 'src/app/services/Detalle/detalle.service';
import { FormGroup } from '@angular/forms';
declare var $: any;
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { ComercianteService } from 'src/app/services/Comerciante/comerciante.service';
@Component({
  selector: 'app-list-negocios',
  templateUrl: './list-negocios.component.html',
  styleUrls: ['./list-negocios.component.css']
})
export class ListNegociosComponent implements OnInit {

  negocios: Negocio[];
  newNegocio:Negocio = new Negocio();
  open = false;
  famobile = faPhone;
  faCheck = faCheckCircle;
  fatimes = faTimesCircle;
  pageActual = 1;
  loading: boolean;
  mostrarTarjetas = true;
  titulo:string;
  rol:string;
  id:number;
  form: FormGroup;
  submitted = false;
  mapa: mapboxgl.Map;
  tituloModal:string = "Añadir Negocio";
  constructor(private negocioService: NegocioService, private detalleService: DetalleService,private comercianteService:ComercianteService,) { }

  ngOnInit(): void {
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.rol = payLoad.rol;
    this.id = payLoad.nameid;
    this.detalleService.setListaDetalles([]);
    this.list();
  }
  list(): void {
    this.loading = true;
    switch(this.rol){
      case "C":{
        this.titulo = "Negocios Cercanos";
        this.negocioService.listarNegocios().subscribe(result => {
          this.negocios = result;
        },
        (error) => console.log(error),
        () => {
          this.loading = false;
        }
        );
        break;
      }
      case "N":{
        this.titulo = "Mis Negocios";
        {
          this.negocioService.listarNegociosComerciante(this.id).subscribe(result => {
            this.negocios = result;
          },
          (error) => console.log(error),
          () => {
            this.loading = false;
          }
          );
        }
        break;
      }
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

  // tslint:disable-next-line: typedef
  get f(){
    return this.form.controls;
  }

  AbrirModal(){
    this.tituloModal = "Añadir Negocio";
    this.newNegocio = new Negocio();
    this.comercianteService.getComerciante(this.id).subscribe(result=>{
      console.log(result);
      this.newNegocio.idComerciante = result.idComerciante;
    });       
  }
  Editar($event){
    this.newNegocio = $event;
    this.tituloModal = "Actualizar Negocio";
    $("#staticBackdrop").modal('show');
  }
  
}
