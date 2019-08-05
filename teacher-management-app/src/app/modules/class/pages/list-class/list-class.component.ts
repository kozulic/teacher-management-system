import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { ClassList } from 'src/app/core/models/class.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ClassService } from 'src/app/core/services/class.service';
import { AuthTeacher } from 'src/app/core/models/auth-teacher.model';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.scss']
})
export class ListClassComponent implements OnInit {
  classes: ClassList[] = [];
  classCount = 0;
  loading = false;
  teacherId: string;

  constructor(
    public authService: AuthService,
    private classService: ClassService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.teacher.subscribe((teacher: AuthTeacher) => this.teacherId = teacher.teacher._id);
    this.loadClasses();
  }

  private loadClasses(): void {
    this.loading = true;
    this.classService.getClasses(this.teacherId)
    .pipe()
    .subscribe((classes: ClassList[]) => {
      this.classes = classes;
      this.loading = false;
      this.classCount = classes.length;
    });
  }

  private deleteClass(classId: string): void {
    console.log(`Class to delete: ${classId}`);
  }

  private addClass(): void {
    this.router.navigate(['./class']);
  }

  private editClass(classId: string): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        classId
      }
    };
    this.router.navigate(['./class'], navigationExtras);
  }

}
