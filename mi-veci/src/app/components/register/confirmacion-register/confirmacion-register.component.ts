import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { faUser, faIdCard, faMobileAlt, faSave, faEye, faKey, faEnvelope, faEyeSlash, faGlobeEurope, faCity, faBookmark, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models/Persona/persona';
import { StepChangedArgs, STEP_STATE, NgWizardService } from 'ng-wizard';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import { DireccionService } from 'src/app/services/Direccion/direccion.service';
import { Router } from '@angular/router';
import { EncryptService } from '../../../services/Encrypt/encrypt.service';
@Component({
  selector: 'app-confirmacion-register',
  templateUrl: './confirmacion-register.component.html',
  styleUrls: ['./confirmacion-register.component.css']
})
export class ConfirmacionRegisterComponent implements OnInit {
  faUser = faUser;
  faIdCard = faIdCard;
  famobile = faMobileAlt;
  faSave = faSave;
  facorreo = faEnvelope;
  fapassowrd = faKey;
  faeyeslash = faEyeSlash;
  faeyes = faEye;
  faDireccion = faGlobeEurope;
  faCiudad = faCity;
  fareferencia = faBookmark;
  farol = faUserShield;
  @Input() personal: Persona;
  // tslint:disable-next-line: whitespace
  id: number;
  title = 'Verifique si sus datos se encuentran correctamente ingresados';
  form: FormGroup;
  submitted = false;
  stepChangedArgs: StepChangedArgs;
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private direccionService: DireccionService, private personaService: PersonaService, private ngWizardService: NgWizardService, private formBuilder: FormBuilder,private EncrDecr: EncryptService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      correo: ['', [Validators.required], Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
      password: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      referencia: ['', [Validators.required]],
    });
    this.form.controls.nombres.disable();
    this.form.controls.apellidos.disable();
    this.form.controls.cedula.disable();
    this.form.controls.celular.disable();
    this.form.controls.rol.disable();
    this.form.controls.correo.disable();
    this.form.controls.password.disable();
    this.form.controls.ciudad.disable();
    this.form.controls.referencia.disable();
  }

  // tslint:disable-next-line: typedef
  get f(){
    return this.form.controls;
  }
  onSubmit(): void {

    this.submitted = true;

    if (this.form.invalid){
      console.error('Error en formulario');
      return;
    }
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', this.personal.password);
    this.personal.password = encrypted;
    this.direccionService.create(this.personal.Direccion).subscribe(
      result => {
        this.id = result.idDireccion;
        console.log(result);
      },
      error => {console.log(error); },
      () => {
        this.personal.idDireccion = this.id;
        this.personaService.create(this.personal).subscribe(
          result => {
            this.submitted = false;
            console.log(result);
          }
        );
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    );
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.personal = new Persona();
  }
}
