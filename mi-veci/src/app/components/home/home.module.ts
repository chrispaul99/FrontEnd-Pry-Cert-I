import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { SharedModule } from '../../shared/pipes/shared/shared.module';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, BannerComponent, MainComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
