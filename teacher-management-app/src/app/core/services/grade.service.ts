import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { Grade, GradeBase } from '../models/grade.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeService extends ApiService<Grade, GradeBase, string> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.api_url}/grade`);
  }
}
