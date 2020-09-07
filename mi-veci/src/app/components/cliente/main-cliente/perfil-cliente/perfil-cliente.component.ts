import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../../services/Persona/persona.service';
import { DireccionService } from '../../../../services/Direccion/direccion.service';
import { Persona } from '../../../../models/Persona/persona';
import { Direccion } from '../../../../models/Direccion/direccion';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  persona: Persona = new Persona();
  direccion: Direccion = new Direccion();
  idDir: number;
  form: FormGroup;
  submitted = false;
  idCliente: number;
  mapa: mapboxgl.Map;

  constructor(
    private _personaService: PersonaService,
    private _direccionService: DireccionService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      referencia: ['', [Validators.required]],
      cedula: [''],
      correo: [''],
    });
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.idCliente = payLoad.nameid;
    console.log(payLoad);
    this._personaService.retrieve(this.idCliente).subscribe(
      result => {
        this.persona = result;
        this._direccionService.retrieve(result.idDireccion).subscribe(data => {
          this.direccion = data;
          // this.direccion.ciudad = data.ciudad;
          // this.direccion.referencia = data.referencia;
        },
        err => console.log(err),
        () => {
          this.verMapa();
        });
      }
    );
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error en el formulario',
      });
      return;
    }
    /** Armar la data de Persona y Direccion */
    this.persona.idPersona = this.idCliente;
    this._direccionService.retrieve(this.persona.idDireccion).subscribe(data => {
      this.idDir = data.idDireccion;
    },
    err => console.log(err),
    () => {
      this._personaService.create(this.persona).subscribe(
        result => {
          this.submitted = false;
          this.direccion.idDireccion = this.idDir;
          this._direccionService.create(this.direccion).subscribe();
        },
        er => console.log(er),
        () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Perfil Actualizado',
            showConfirmButton: false,
            timer: 1500
          });
        });
    });
  }

  verMapa(): void{
    const lat = this.direccion.latitud;
    const lon = this.direccion.longitud;
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
    // this.ubicacion = true;
  }

}
