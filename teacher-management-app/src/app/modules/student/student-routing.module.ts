import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListStudentComponent } from './pages/list-student/list-student.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { DetailsStudentComponent } from './pages/details-student/details-student.component';
import { EditGradeComponent } from './pages/edit-grade/edit-grade.component';
import { EditAbsenceComponent } from './pages/edit-absence/edit-absence.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';

const routes: Routes = [
  {
    path: 'class/:id/students',
    component: ListStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/add',
    component: EditStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/:id/grade',
    component: EditGradeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/:id/absence',
    component: EditAbsenceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/:id/contact',
    component: EditContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/:id/note',
    component: EditNoteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/:id',
    component: DetailsStudentComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
