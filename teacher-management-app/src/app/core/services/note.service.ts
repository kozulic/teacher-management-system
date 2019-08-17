import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { Note } from '../models/note.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService extends ApiService<Note, Note, string> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.api_url}/note`);
  }
}
