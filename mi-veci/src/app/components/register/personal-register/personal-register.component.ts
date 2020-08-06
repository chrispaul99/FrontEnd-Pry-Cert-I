import { Component, OnInit, Input } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless, faMapMarked, faSchool, faList, faArchway, faSortNumericUp, faStar, faCalendarWeek, faCalendarDay, faTextHeight, faComment, faLightbulb, faFileArchive, faListUl, faBalanceScale, faBook, faMobileAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Persona } from '../../../models/Persona/persona';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { STEP_STATE, StepChangedArgs, NgWizardService } from 'ng-wizard';
@Component({
  selector: 'app-personal-register',
  templateUrl: './personal-register.component.html',
  styleUrls: ['./personal-register.component.css']
})
export class PersonalRegisterComponent implements OnInit {
  faUser = faUser;
  faIdCard = faIdCard;
  famobile = faMobileAlt;
  farol = faUserShield;
  @Input() personal: Persona;
  title = 'Datos Personales';
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
  constructor(private ngWizardService: NgWizardService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      rol: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line: typedef
  get f(){
    return this.form.controls;
  }
}
