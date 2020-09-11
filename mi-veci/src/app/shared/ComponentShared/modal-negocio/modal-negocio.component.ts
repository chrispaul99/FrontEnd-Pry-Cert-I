import { Component, OnInit, Input } from '@angular/core';
import { Negocio } from '../../../models/Negocio/negocio';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { environment } from '../../../../environments/environment.prod';
import { NegocioService } from '../../../services/Negocio/negocio.service';
import Swal from 'sweetalert2';
import { FileUploader,  ParsedResponseHeaders } from 'ng2-file-upload';
import { Producto } from '../../../models/Producto/producto';
import { ProductoService } from '../../../services/Producto/producto.service';

@Component({
  selector: 'app-modal-negocio',
  templateUrl: './modal-negocio.component.html',
  styleUrls: ['./modal-negocio.component.css']
})
export class ModalNegocioComponent implements OnInit {

  @Input() negocio:Negocio = new Negocio();
  @Input() producto:Producto = new Producto();
  @Input() title:string;
  form: FormGroup;  
  submitted: boolean = false;
  mapa: mapboxgl.Map;
  id:number;
  rol:string = "N";
  imagenFinal:FileUploader;
  ubicacion:boolean;
  constructor(private formBuilder: FormBuilder,private negocioService:NegocioService,private productoService:ProductoService) {
   }

  ngOnInit(): void {
    this.ubicacion =false;
    this.tipoModal();
  }
  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }
    this.SubirImagen();
  }
  get f(){
    return this.form.controls;
  }
  direccion(){
    let lat = this.negocio.Direccion.latitud;
    let lon = this.negocio.Direccion.longitud;
    let zoom = 15;
    if(this.title == "Añadir Negocio"){
      lon = (-78.183406).toString();
      lat = (-1.831239).toString();
      zoom = 6;
    }
    mapboxgl.accessToken = environment.mapboxkey;
    this.mapa = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lon, lat],
    zoom: zoom
    });
    this.mapa.addControl(new mapboxgl.NavigationControl());
    this.mapa.addControl(new mapboxgl.GeolocateControl());
    this.mapa.addControl(new mapboxgl.FullscreenControl());
    this.marcador(lon,lat);
    this.ubicacion = true;
}
// tslint:disable-next-line: typedef
marcador(long:string,lati:string){
    // tslint:disable-next-line: one-variable-per-declaration
    if(this.title == "Añadir Negocio"){
      let lat: string;
      let lon: string;
      let markerAux = null;
      this.mapa.on('click', (e) => {
      lat = JSON.stringify(e.lngLat.lat);
      lon = JSON.stringify(e.lngLat.lng);
      if (markerAux == null) {
          // tslint:disable-next-line: no-shadowed-variable
          const marker = new mapboxgl.Marker({
              draggable: true
          })
              .setLngLat([lon, lat])
              .addTo(this.mapa);
          markerAux = marker;
          marker.on('dragend', () => {
          this.negocio.Direccion.latitud = marker._lngLat.lat;
          this.negocio.Direccion.longitud = marker._lngLat.lng;
          console.log('DRAG: ' + marker.getLngLat());
          });
          console.log('CLICK' + lon + ' / ' + lat);
          this.negocio.Direccion.latitud = lat;
          this.negocio.Direccion.longitud = lon;
      }
      });
    }else{
      const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([long, lati])
        .addTo(this.mapa);
    marker.on('dragend', () => {
    this.negocio.Direccion.latitud = marker._lngLat.lat;
    this.negocio.Direccion.longitud = marker._lngLat.lng;
    console.log('DRAG: ' + marker.getLngLat());
    });
    }
  }
  recibirImagen($event): void {
   console.log($event);
   this.imagenFinal = $event;
}
  SubirImagen(){
    let url=null;
    if(this.imagenFinal!=undefined){
      this.imagenFinal.uploadAll();
      const upsertResponse = fileItem => {
        // Check if HTTP request was successful
        if (fileItem.status !== 200) {
          console.log('Upload to cloudinary Failed');
          console.log(fileItem);
          return false;
        }
        console.log(fileItem);
        console.log(fileItem.data.url);
        Swal.fire({
          allowOutsideClick: false,
          icon: 'info',
          text: 'Espere por favor...'
        });
        Swal.showLoading();
        return url = fileItem.data.url;
      }
      // Actualizar el modelo al finalizar la carga de un archivo
      this.imagenFinal.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) =>{
        upsertResponse(
          {
            file: item.file, status,
            data: JSON.parse(response),
          }
        );
        this.selectorServicio(url);
      }
    }else{
      this.tipoAlerta();
     
    }
  }
  RegistrarNegocioEnServidor(){
    this.negocioService.save(this.negocio).subscribe(result=>{
    this.tipoAlertaSinImagen();
    },(error)=>console.log(error),
    ()=>{
      window.location.reload();
    } );
  }

  RegistrarProductoEnServidor(){
    if(this.producto.stock>0){
      this.producto.disponibilidad = true;
    }
    else{
      this.producto.disponibilidad = false;
    }
    this.productoService.save(this.producto).subscribe(result=>{
      this.tipoAlertaSinImagen();
      },(error)=>console.log(error),
      ()=>{
        window.location.reload();
      } );
   
  }

  tipoModal(){
    console.log(this.title);
    switch(this.title){
      case "Añadir Negocio":{
        this.formularioNegocio();
        break;
      }
      case "Actualizar Negocio":{
        this.formularioNegocio();
        break;
      }
      case "Añadir Producto":{
        this.formularioProducto();
        break;
      }
      case "Actualizar Producto":{
        this.formularioProducto();
        break;
      }
      default:console.log("algo falli");break;
    }
  }
  selectorServicio(url:string){
    switch(this.title){
      case "Añadir Negocio":{
        this.negocio.imagen = url;
        this.RegistrarNegocioEnServidor();
        break;
      }
      case "Actualizar Negocio":{
        this.negocio.imagen = url;
        this.RegistrarNegocioEnServidor();
        break;
      }
      case "Añadir Producto":{
        this.producto.imagen = url;
        this.RegistrarProductoEnServidor();
        break;
      }
      case "Actualizar Producto":{
        this.producto.imagen = url;
        this.RegistrarProductoEnServidor();
        break;
      }
    }
  }
  formularioNegocio(){
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      categoria: ['', [Validators.required,Validators.minLength(2)]],
      descripcion: ['', [Validators.required]],
      horarioInicial: ['', [Validators.required]],
      horarioFinal: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      referencia: ['', [Validators.required]],  
      delivery: ['', [Validators.required]],  
      reserva: ['', [Validators.required]],  
    });
  }
  formularioProducto(){
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      categoria: ['', [Validators.required,Validators.minLength(2)]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      stock: ['', [Validators.required]],
    });
  }

  tipoAlertaSinImagen(){
    switch(this.title){
      case "Añadir Negocio":{
        Swal.close();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "Negocio "+this.negocio.nombre+" creado correctamente",
          showConfirmButton: false,
          timer: 1500
        });
        break;
      }
      case "Actualizar Negocio":{
        Swal.close();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "Negocio "+this.negocio.nombre+" actualizado correctamente",
          showConfirmButton: false,
          timer: 1500
        });
        break;
      }
      case "Añadir Producto":{
        Swal.close();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "Producto "+this.producto.nombre+" añadido correctamente",
          showConfirmButton: false,
          timer: 1500
        });
        break;
      }
      case "Actualizar Producto":{
        Swal.close();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "Producto "+this.producto.nombre+" actualizado correctamente",
          showConfirmButton: false,
          timer: 1500
        });
        break;
      }
    }
  }
  tipoAlerta(){
    switch(this.title){
      case "Añadir Negocio":{
        Swal.fire({
          title: this.title,
          text: 'Esta a punto de crear su negocio sin una imagen, ¿desea continuar?',
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
              this.selectorServicio(null);
          }
        });
        break;
      }
      case "Actualizar Negocio":{
        if(this.negocio.imagen==null){
          Swal.fire({
            title: this.title,
            text: 'Esta a punto de actualizar su negocio sin una imagen, ¿desea continuar?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
              if (result.value) {
                this.selectorServicio(null);
            }
          });
        }
        else{
          this.selectorServicio(this.negocio.imagen);
        }
       
        break;
      }
      case "Añadir Producto":{
        Swal.fire({
          title: this.title,
          text: 'Esta a punto de añadir un producto sin una imagen, ¿desea continuar?',
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
              this.selectorServicio(null);
          }
        });
        break;
      }
      case "Actualizar Producto":{
        if(this.producto.imagen == null){
          Swal.fire({
            title: this.title,
            text: 'Esta a punto de actualizar un producto sin una imagen, ¿desea continuar?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
              if (result.value) {
                this.selectorServicio(null);
            }
          });
        }
        else{
          this.selectorServicio(this.producto.imagen);
        }
        break;
      }
    }
  }
}
