import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../../models/Email/email';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url = 'https://localhost:44375/api/Email';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  save(e: Email): Observable<any> {
    e.destinatario = 'miveci99@gmail.com';
    const emailBody = JSON.stringify(e);
    return this.http.post<any>(this.url, emailBody, this.httpOptions);
  }
}
