import { Component, OnInit } from '@angular/core';
import { IconDefinition, faHome, faStar, faBoxOpen, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from 'src/app/models/Persona/persona';
import * as $ from 'jquery';
import { LoginService } from 'src/app/services/Login/login.service';

export interface RouteInfo {
  path: string;
  title: string;
  icon: IconDefinition;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/Cliente/Main/Inicio',     title: 'Menú Principal',         icon: faHome,       class: 'nav-item' },
  { path: '/Cliente/Main/Negocios',          title: 'Negocios',        icon: faStar,      class: 'nav-item' },
  { path: '/Cliente/Main/Pedidos',          title: 'Pedidos',        icon: faBoxOpen,      class: 'nav-item' },
  // { path: '/notifications', title: 'Comprobantes',     icon:'fa fa-file-text',    class: '' },
];
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  faUser = faUser;
  faEdit = faUserEdit;
  persona:Persona;
  public menuItems: any[];
  constructor(private auth:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.persona = new Persona();
      var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
      this.persona.nombres = payLoad.Nombres;
      this.persona.apellidos = payLoad.Apellidos;
      this.persona.rol = payLoad.rol;
      this.persona.correo = payLoad.email;
      this.responsive();
  }
  logout(){
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
          this.auth.logout();
          this.router.navigate(["/login"]);
      }
    });
    

  }
  responsive(){
    $(document).ready(function(){

	

      var toggle_sidebar = false,
      minimize_sidebar = false,
      nav_open = 0,
      mini_sidebar = 0;
  
      if(!toggle_sidebar) {
        var toggle = $('.sidenav-toggler');
        toggle.on('click', function(){
          if (nav_open == 1){
            $('.wrapper').removeClass('nav_open');
            toggle.removeClass('toggled');
            nav_open = 0;
          }  else {
            $('.wrapper').addClass('nav_open');
            toggle.addClass('toggled');
            nav_open = 1;
          }
        });
        toggle_sidebar = true;

      }
    
      if(!minimize_sidebar){
        var minibutton = $('.toggle-sidebar');
        if($('.wrapper').hasClass('sidebar_minimize')){
          mini_sidebar = 1;
          minibutton.addClass('toggled');
          minibutton.html('<i class="fa fa-times">');
        }
    
        minibutton.on('click', function() {
          if (mini_sidebar == 1) {
            $('.wrapper').removeClass('sidebar_minimize');
            minibutton.removeClass('toggled');
            minibutton.html('<i class="fa fa-bars"></i>');
            mini_sidebar = 0;
          } else {
            $('.wrapper').addClass('sidebar_minimize');
            minibutton.addClass('toggled');
            minibutton.html('<i class="fa fa-times">');
            mini_sidebar = 1;
          }
          $(window).resize();
        });
        minimize_sidebar = true;
      }
    
      $('.sidebar').hover(function() {
        if ($('.wrapper').hasClass('sidebar_minimize')){
          $('.wrapper').addClass('sidebar_minimize_hover');
        }
      }, function(){
        if ($('.wrapper').hasClass('sidebar_minimize')){
          $('.wrapper').removeClass('sidebar_minimize_hover');
        }
      });
    });
  }
}
