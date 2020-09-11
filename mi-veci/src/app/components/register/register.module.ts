import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { NavbarRegisterComponent } from './navbar-register/navbar-register.component';
import { PersonalRegisterComponent } from './personal-register/personal-register.component';
import { UbicacionRegisterComponent } from './ubicacion-register/ubicacion-register.component';
import { CredentialRegisterComponent } from './credential-register/credential-register.component';
import { ConfirmacionRegisterComponent } from './confirmacion-register/confirmacion-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RolPipe } from '../../shared/pipes/rol.pipe';
import { SharedModule } from 'src/app/shared/pipes/shared/shared.module';
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.arrows
};
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [RegisterComponent, NavbarRegisterComponent, PersonalRegisterComponent, UbicacionRegisterComponent, CredentialRegisterComponent, ConfirmacionRegisterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RegisterRoutingModule,
    NgWizardModule.forRoot(ngWizardConfig),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RegisterModule { }
