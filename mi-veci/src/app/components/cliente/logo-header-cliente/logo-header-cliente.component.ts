import { Component, OnInit } from '@angular/core';
import { faBars, faEnvelope, faBell, faUserPlus, faPhoneSlash, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logo-header-cliente',
  templateUrl: './logo-header-cliente.component.html',
  styleUrls: ['./logo-header-cliente.component.css']
})
export class LogoHeaderClienteComponent implements OnInit {
  faMenu = faBars;
  faCorreo = faEnvelope;
  faNotificacion = faBell;
  faUser = faUserPlus;
  faphone = faPhoneSlash;
  faoption = faEllipsisV;
  constructor() { }

  ngOnInit(): void {
  }

}
