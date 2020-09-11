import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../../models/Email/email';
import {Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url = environment.url+"/Email";
  constructor(private http: HttpClient) { }
  save(e: Email): Observable<any> {
    e.destinatario = 'miveci99@gmail.com';
    const emailBody = JSON.stringify(e);
    return this.http.post<any>(this.url, emailBody, environment.httpOptions);
  }
}
