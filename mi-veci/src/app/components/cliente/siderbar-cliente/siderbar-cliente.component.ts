import { Component, OnInit } from '@angular/core';
import { faUserPlus, IconDefinition, faHome, faStar, faBoxOpen, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models/Persona/persona';

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

export const HIDEROUTES: RouteInfo[] = [
  { path: '/Productos', title: 'Productos',     icon: null,    class: ''  },
  // { path: '/comprobante', title: 'Comprobante',     icon:'',    class: 'd-lg-none' },
];

@Component({
  selector: 'app-siderbar-cliente',
  templateUrl: './siderbar-cliente.component.html',
  styleUrls: ['./siderbar-cliente.component.css']
})
export class SiderbarClienteComponent implements OnInit {

  faUser = faUser;
  faEdit = faUserEdit;
  persona: Persona;
  constructor() { }

  public menuItems: any[];
    // tslint:disable-next-line: typedef
    ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.persona = new Persona();
      const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
      this.persona.nombres = payLoad.Nombres;
      this.persona.apellidos = payLoad.Apellidos;
      this.persona.rol = payLoad.rol;
    }
}
