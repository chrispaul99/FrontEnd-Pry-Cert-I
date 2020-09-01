import { Component, OnInit, Input } from '@angular/core';
import { EmailService } from '../../../services/Email/email.service';
import { Email } from '../../../models/Email/email';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() email: Email;
  loading: boolean;
  form: FormGroup;
  submitted = false;
  constructor(private emailService: EmailService, private formBuilder: FormBuilder) {this.loading = false; }

  ngOnInit(): void {
     this.form = this.formBuilder.group({
      emisor: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      nombre: ['', [Validators.required]],
      destinatario: [''],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
  }
  // tslint:disable-next-line: typedef
  get f(){
    return this.form.controls;
  }

  onSubmit(): void {
    this.loading = true;
    this.submitted = true;

    if (this.form.invalid){
      this.loading = false;
      console.error('Error en formulario');
      return;
    }
    this.emailService.save(this.email).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.onReset();
        this.loading = false;
      }
    );
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.email = new Email();
  }

}
