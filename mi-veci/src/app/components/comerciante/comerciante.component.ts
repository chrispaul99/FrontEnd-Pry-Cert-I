import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faStar, faBoxOpen, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models/Persona/persona';
import { LoginService } from 'src/app/services/Login/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export interface RouteInfo {
  path: string;
  title: string;
  icon: IconDefinition;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/Comerciante/Main/Principal',     title: 'Menú Principal',         icon: faHome,       class: 'nav-item' },
  { path: '/Comerciante/Main/Negocios',          title: 'Negocios',        icon: faStar,      class: 'nav-item' },
  { path: '/Comerciante/Main/Pedidos',          title: 'Pedidos',        icon: faBoxOpen,      class: 'nav-item' },
]
  // { path: '/notifications', title: 'Comprobantes',     icon:'fa fa-file-text',    class: '' },
@Component({
  selector: 'app-comerciante',
  templateUrl: './comerciante.component.html',
  styleUrls: ['./comerciante.component.css']
})
export class ComercianteComponent implements OnInit {

  faUser = faUser;
  faEdit = faUserEdit;
  persona: Persona;
  public menuItems: any[];
  constructor(private auth: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.persona = new Persona();
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    this.persona.nombres = payLoad.Nombres;
    this.persona.apellidos = payLoad.Apellidos;
    this.persona.rol = payLoad.rol;
    this.persona.correo = payLoad.email;
    this.responsive();
    // Toggle Click Function
    // $('#menu-toggle').click((e) => {
    //  e.preventDefault();
    //  $('#wrapper').toggleClass('toggled');
    // });
  }

  logout(): void {
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
          this.router.navigate(['/login']);
      }
    });
  }

  responsive(): void {
    $(document).ready(() => {
      let toggle_sidebar = false;
      let minimize_sidebar = false;
      let nav_open = 0;
      let mini_sidebar = 0;

      if (!toggle_sidebar) {
        const toggle = $('.sidenav-toggler');
        toggle.on('click', () => {
          if (nav_open === 1){
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
      if (!minimize_sidebar){
        const minibutton = $('.toggle-sidebar');
        if ($('.wrapper').hasClass('sidebar_minimize')){
          mini_sidebar = 1;
          minibutton.addClass('toggled');
          minibutton.html('<i class="fa fa-times">');
        }
        minibutton.on('click', () => {
          if (mini_sidebar === 1) {
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
      $('.sidebar').hover(() => {
        if ($('.wrapper').hasClass('sidebar_minimize')){
          $('.wrapper').addClass('sidebar_minimize_hover');
        }
      }, () => {
        if ($('.wrapper').hasClass('sidebar_minimize')){
          $('.wrapper').removeClass('sidebar_minimize_hover');
        }
      });
    });
  }

}
