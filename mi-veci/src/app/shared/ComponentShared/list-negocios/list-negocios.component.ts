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
  negociosFilter:Negocio[];
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
  opcionSeleccionada:string = "T";
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
          this.capturar();
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
            this.capturar();
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
    if(this.rol == "C"){
      if(this.opcionSeleccionada !="T")
      this.NegociosArbiertos();
      else
      this.TodosNegocio();
    }
    else
      this.negociosFilter = this.negocios;
  }
}
