import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailService } from './services/Email/email.service';
import { ServiceInterceptor } from './services/Interceptor/service.interceptor';
import { PersonaService } from './services/Persona/persona.service';
import { DireccionService } from './services/Direccion/direccion.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NegocioService } from './services/Negocio/negocio.service';
import { ListNegociosComponent } from './shared/ComponentShared/list-negocios/list-negocios.component';
import { DetalleNegocioComponent } from './shared/ComponentShared/detalle-negocio/detalle-negocio.component';
import { SharedModule } from './shared/pipes/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { UploadFileComponent } from './shared/ComponentShared/upload-file/upload-file.component';
import {CloudinaryModule} from '@cloudinary/angular-5.x';
import * as cloudinary from 'cloudinary-core';
import {CloudinarySettings} from './settings';
import { FileUploadModule } from 'ng2-file-upload';
import { ModalNegocioComponent } from './shared/ComponentShared/modal-negocio/modal-negocio.component';
import { EstadoPedidoPipe } from './shared/pipes/estado-pedido.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListNegociosComponent,
    DetalleNegocioComponent,
    UploadFileComponent,
    ModalNegocioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    CloudinaryModule.forRoot(cloudinary, CloudinarySettings),
    FileUploadModule,
  ],
  providers: [
    EmailService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    PersonaService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    DireccionService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    NegocioService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
