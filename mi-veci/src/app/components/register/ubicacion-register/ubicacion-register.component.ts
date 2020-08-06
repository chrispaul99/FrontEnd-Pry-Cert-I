import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faCity, faSdCard, faGlobeEurope, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import { Direccion } from '../../../models/Direccion/direccion';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { environment } from 'src/environments/environment';
import { Persona } from '../../../models/Persona/persona';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-ubicacion-register',
  templateUrl: './ubicacion-register.component.html',
  styleUrls: ['./ubicacion-register.component.css']
})

export class UbicacionRegisterComponent implements OnInit {
  @ViewChild('ciudad') myButton: ElementRef;
  faDireccion = faGlobeEurope;
  faCiudad = faCity;
  fareferencia = faBookmark;
  @Input() ubicacion: Persona;
  title = 'Seleccione su ubicación';
  form: FormGroup;
  submitted = false;
  mapa: mapboxgl.Map;

  // tslint:disable-next-line: max-line-length
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ubicacion.direccion = new Direccion();
    this.form = this.formBuilder.group({
      ciudad: ['', [Validators.required]],
      referencia: ['', [Validators.required]],
      latitud: [''],
      longitud: [''],
    });
    this.form.controls.ciudad.disable();
    this.direccion();
  }
  // tslint:disable-next-line: typedef
  get f(){
    return this.form.controls;
  }
  // tslint:disable-next-line: typedef
  direccion(){
    mapboxgl.accessToken = environment.mapboxkey;
    this.mapa = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-78.183406, -1.831239],
    zoom: 6
    });
    this.mapa.addControl(new mapboxgl.NavigationControl());
    this.mapa.addControl(new mapboxgl.GeolocateControl());
    this.mapa.addControl(new mapboxgl.FullscreenControl());
    this.marcador();
}
// tslint:disable-next-line: typedef
marcador(){
    // tslint:disable-next-line: one-variable-per-declaration
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
        this.ubicacion.direccion.latitud = marker._lngLat.lat;
        this.ubicacion.direccion.longitud = marker._lngLat.lng;
        console.log('DRAG: ' + marker.getLngLat());
        this.ubicacion.direccion.ciudad = 'Ambato';
        this.ubicacion.direccion.referencia = 'Sede';
        });
        console.log('CLICK' + lon + ' / ' + lat);
        this.ubicacion.direccion.latitud = lat;
        this.ubicacion.direccion.longitud = lon;
        this.ubicacion.direccion.ciudad = 'Ambato';
        this.ubicacion.direccion.referencia = 'Sede';
        this.ubicacion.direccion.nombre = 'Dirección: ' + this.ubicacion.nombres + ' ' + this.ubicacion.apellidos;
        console.log(this.ubicacion.direccion.nombre);
    }
    });
    /*
    const marker = new mapboxgl.Marker({
        draggable : true
    })
    .setLngLat([lng,lat])
    .addTo(this.mapa)
    marker.on('drag',()=>{
        console.log(marker.getLngLat());
    })*/
}
}
