import { Component, OnInit } from '@angular/core';
import { faUserPlus, IconDefinition, faHome, faStar, faBoxOpen, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  public menuItems: any[];
    // tslint:disable-next-line: typedef
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

}
