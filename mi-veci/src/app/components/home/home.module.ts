import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../../shared/pipes/shared/shared.module';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, BannerComponent, MainComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
  ]
})
export class HomeModule { }
