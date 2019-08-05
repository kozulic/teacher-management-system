import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListStudentComponent } from './pages/list-student/list-student.component';
import { DetailsStudentComponent } from './pages/details-student/details-student.component';
import { EditStudentComponent } from './modals/edit-student/edit-student.component';
import { EditAbsenceComponent } from './modals/edit-absence/edit-absence.component';
import { EditGradeComponent } from './modals/edit-grade/edit-grade.component';
import { EditContactComponent } from './modals/edit-contact/edit-contact.component';
import { EditNoteComponent } from './modals/edit-note/edit-note.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [ListStudentComponent, DetailsStudentComponent, EditStudentComponent, EditAbsenceComponent, EditGradeComponent, EditContactComponent, EditNoteComponent]
})
export class StudentModule { }
