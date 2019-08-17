import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { Absence } from '../models/absence.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService extends ApiService<Absence, Absence, string> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.api_url}/absence`);
  }
}
