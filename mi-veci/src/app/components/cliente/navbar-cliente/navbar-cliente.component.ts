import { Component, OnInit } from '@angular/core';
import { faBars, faEnvelope, faBell, faUserPlus, faPhone, faPhoneSlash, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../../services/Login/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from 'src/app/models/Persona/persona';

@Component({
  selector: 'app-navbar-cliente',
  templateUrl: './navbar-cliente.component.html',
  styleUrls: ['./navbar-cliente.component.css']
})
export class NavbarClienteComponent implements OnInit {
  faMenu = faBars;
  faCorreo = faEnvelope;
  faNotificacion = faBell;
  faUser = faUserPlus;
  faphone = faPhoneSlash;
  faoption = faEllipsisV;
  persona:Persona;
  constructor(private auth:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.persona = new Persona();
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.persona.nombres = payLoad.Nombres;
    this.persona.apellidos = payLoad.Apellidos;
    this.persona.correo = payLoad.email;
  }
  logout(){
    this.auth.logout();
    Swal.fire({
      title: 'Cerrar Sesión',
      text: '¿Esta seguro que desea cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
        if (result.value) {
          this.router.navigate(["/login"]);
      }
    });
    

  }
}
