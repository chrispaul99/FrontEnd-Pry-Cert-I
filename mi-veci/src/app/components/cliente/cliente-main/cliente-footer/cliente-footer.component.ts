import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-footer',
  templateUrl: './cliente-footer.component.html',
  styleUrls: ['./cliente-footer.component.scss']
})
export class ClienteFooterComponent implements OnInit {
  test: Date = new Date();
  constructor() { }

  ngOnInit(): void {
    
  }

}
