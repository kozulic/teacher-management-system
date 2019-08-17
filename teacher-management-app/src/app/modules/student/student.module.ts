import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';

import { ListStudentComponent } from './pages/list-student/list-student.component';
import { DetailsStudentComponent } from './pages/details-student/details-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { EditAbsenceComponent } from './pages/edit-absence/edit-absence.component';
import { EditGradeComponent } from './pages/edit-grade/edit-grade.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ],
  declarations: [
    ListStudentComponent,
    DetailsStudentComponent,
    EditStudentComponent,
    EditAbsenceComponent,
    EditGradeComponent,
    EditContactComponent,
    EditNoteComponent
  ]
})
export class StudentModule { }
