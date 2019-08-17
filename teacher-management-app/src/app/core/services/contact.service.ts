import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { ContactBase, Contact } from '../models/contact.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService<Contact, ContactBase, string> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.api_url}/contact`);
  }
}
