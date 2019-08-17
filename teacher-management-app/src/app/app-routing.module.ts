import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'class',
    loadChildren: './modules/class/class.module#ClassModule'
  },
  {
    path: 'student',
    loadChildren: './modules/student/student.module#StudentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
