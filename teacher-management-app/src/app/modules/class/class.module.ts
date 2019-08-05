import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ListClassComponent } from './pages/list-class/list-class.component';
import { EditClassComponent } from './pages/edit-class/edit-class.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClassRoutingModule
  ],
  declarations: [
    ListClassComponent,
    EditClassComponent]
})
export class ClassModule { }
