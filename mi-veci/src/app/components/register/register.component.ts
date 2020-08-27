import { Component, OnInit, Input } from '@angular/core';
import { NgWizardConfig, THEME, StepChangedArgs, NgWizardService, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import { Persona } from 'src/app/models/Persona/persona';
import { LoginService } from '../../services/Login/login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Multi-Step Wizard';
  persona: Persona;
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    lang: {
      next: 'Siguiente', previous: 'Anterior'
    },
    // tslint:disable-next-line: max-line-length
  };

  constructor(private ngWizardService: NgWizardService, private personaService: PersonaService,private auth: LoginService) {
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.auth.sesionOpen();
    this.persona = new Persona();
  }

  // tslint:disable-next-line: typedef
  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  // tslint:disable-next-line: typedef
  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  // tslint:disable-next-line: typedef
  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  // tslint:disable-next-line: typedef
  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  // tslint:disable-next-line: typedef
  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }
}
