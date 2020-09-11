import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../../services/Persona/persona.service';
import { Persona } from '../../../../models/Persona/persona';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { environment } from 'src/environments/environment';
import { LoginService } from '../../../../services/Login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  persona: Persona = new Persona();
  ubicacion:boolean;
  idDir: number;
  form: FormGroup;
  submitted = false;
  idCliente: number;
  mapa: mapboxgl.Map;

  constructor(
    private _personaService: PersonaService,
    private auth:LoginService,
    private formBuilder: FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.ubicacion =false;
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
        console.log(this.persona);
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
    Swal.fire({
      title: 'Actualizar Perfil',
      text: '¿Esta seguro que desea actualizar su perfil, si la respuesta es SI deberá volver a Iniciar Sesión',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
        if (result.value) {
          this.persona.idPersona = this.idCliente;
          this._personaService.create(this.persona).subscribe(
            result => {
              this.submitted = false;
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
          this.auth.logout();
          this.router.navigate(['/login']);
      }
    });
   
  }

  direccion(){
    let lat = this.persona.Direccion.latitud;
    let lon = this.persona.Direccion.longitud;
    let zoom = 15;
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
      const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([long, lati])
        .addTo(this.mapa);
    marker.on('dragend', () => {
    this.persona.Direccion.latitud = marker._lngLat.lat;
    this.persona.Direccion.longitud = marker._lngLat.lng;
    console.log('DRAG: ' + marker.getLngLat());
    });
  }
}
