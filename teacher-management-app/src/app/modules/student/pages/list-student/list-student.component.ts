import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';
import { StudentService } from 'src/app/core/services/student.service';
import { AuthTeacher } from 'src/app/core/models/auth-teacher.model';
import { StudentList } from 'src/app/core/models/student.model';
import { ClassService } from 'src/app/core/services/class.service';
import { Class } from 'src/app/core/models/class.model';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  students: StudentList[] = [];
  class: Class;
  studentCount = 0;
  classId: string;
  teacherId: string;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    public studentService: StudentService,
    public classService: ClassService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.classId = params.get('id');
    });

    this.authService.teacher.subscribe((teacher: AuthTeacher) => this.teacherId = teacher.teacher._id);
    this.loadStudents();
    this.getClassDetails();
  }

  private addStudent(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        classId: this.classId
      }
    };
    this.router.navigate(['student/add'], navigationExtras);
  }

  private editStudent(studentId: string): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        studentId,
        classId: this.classId
      }
    };
    this.router.navigate(['/student/add'], navigationExtras);
  }

  private deleteStudent(studentId: string): void {

  }

  loadStudents(): void {
    this.loading = true;
    this.studentService.getStudents(this.classId)
      .pipe()
      .subscribe((students: StudentList[]) => {
        this.students = students;
        this.loading = false;
        this.studentCount = students.length;
      });
  }

  getClassDetails(): void {
    this.loading = true;
    this.classService.getClass(this.classId)
      .pipe()
      .subscribe((classDetails: Class) => {
        this.class = classDetails;
        this.loading = false;
      });
  }

}
