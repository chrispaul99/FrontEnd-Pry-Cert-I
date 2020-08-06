import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email/email';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mainEmail: Email;
  constructor() { }

  ngOnInit(): void {
    this.mainEmail = new Email();
  }

}
