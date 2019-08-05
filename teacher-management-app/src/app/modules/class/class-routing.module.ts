import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClassComponent } from './pages/list-class/list-class.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { EditClassComponent } from './pages/edit-class/edit-class.component';

const routes: Routes = [
  {
    path: '',
    component: ListClassComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'class',
    component: EditClassComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
