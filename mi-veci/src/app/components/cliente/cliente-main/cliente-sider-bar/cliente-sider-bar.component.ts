import { Component, OnInit } from '@angular/core';
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
@Component({
  selector: 'app-cliente-sider-bar',
  templateUrl: './cliente-sider-bar.component.html',
  styleUrls: ['./cliente-sider-bar.component.scss']
})
export class ClienteSiderBarComponent implements OnInit {

  constructor() { }

  public menuItems: any[];
  ngOnInit() {
     
  }

}
