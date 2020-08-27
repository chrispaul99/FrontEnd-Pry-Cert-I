import { Component, OnInit, Input } from '@angular/core';
import { faUser, faIdCard, faMobileAlt, faEnvelope, faKey, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models/Persona/persona';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StepChangedArgs, STEP_STATE, NgWizardService } from 'ng-wizard';

@Component({
  selector: 'app-credential-register',
  templateUrl: './credential-register.component.html',
  styleUrls: ['./credential-register.component.css']
})
export class CredentialRegisterComponent implements OnInit {
  faUser = faUser;
  facorreo = faEnvelope;
  fapassowrd = faKey;
  faeyeslash = faEyeSlash;
  faeyes = faEye;
  @Input() personal: Persona;
  title = 'Datos de Inicio de Sesión';
  form: FormGroup;
  submitted = false;
  stepChangedArgs: StepChangedArgs;
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
  fieldTextType:boolean;
  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
     
    });
  }

  // tslint:disable-next-line: typedef
  get f(){
    return this.form.controls;
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
