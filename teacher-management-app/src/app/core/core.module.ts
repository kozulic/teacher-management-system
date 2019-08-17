import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AlertService } from './services/alert.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ContactService } from './services/contact.service';
import { AbsenceService } from './services/absence.service';
import { GradeService } from './services/grade.service';
import { NoteService } from './services/note.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AlertService,
    ContactService,
    AbsenceService,
    GradeService,
    NoteService
  ],
  declarations: []
})
export class CoreModule { }
