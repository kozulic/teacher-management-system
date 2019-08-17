import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';
import { StudentService } from 'src/app/core/services/student.service';
import { AuthTeacher } from 'src/app/core/models/auth-teacher.model';
import { Student } from 'src/app/core/models/student.model';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  studentForm: FormGroup;
  loading = false;
  teacherId: string;
  classId: string;
  studentId: string;
  student: Student;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private studentService: StudentService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {

    this.student = {
      _id: null,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: null,
      address: {
        street: '',
        streetNum: null,
        zipNum: null,
        city: ''
      },
      birthDate: null,
      sex: '',
      globalNote: '',
      class: this.classId,
      contacts: [],
      grades: [],
      notes: [],
      absences: [],
    };

    this.route.queryParams.subscribe(params => {
      if (params.classId) {
        this.classId = params.classId;
        this.student.class = this.classId;
      }
      if (params.studentId) {
        this.studentId = params.studentId;
        this.getStudent();
      }
    });

    // Init form
    this.studentForm = this.fb.group({
      firstName: [this.student.firstName, Validators.required],
      lastName: [this.student.lastName, Validators.required],
      email: [this.student.email, Validators.required],
      phoneNumber: [this.student.phoneNumber, Validators.required],
      address: this.fb.group({
        street: [this.student.address.street, Validators.required],
        streetNum: [this.student.address.streetNum, Validators.required],
        zipNum: [this.student.address.zipNum, Validators.required],
        city: [this.student.address.city, Validators.required],
      }),
      birthDate: [this.student.birthDate, Validators.required],
      sex: [this.student.sex, Validators.required],
      globalNote: [this.student.globalNote, Validators.required]
    });

    this.authService.teacher.subscribe((teacher: AuthTeacher) => this.teacherId = teacher.teacher._id);
  }

  onSubmit() {
    this.loading = true;

    this.student.firstName = this.studentForm.controls['firstName'].value;
    this.student.lastName = this.studentForm.controls['lastName'].value;
    this.student.email = this.studentForm.controls['email'].value;
    this.student.phoneNumber = this.studentForm.controls['phoneNumber'].value;
    this.student.address = this.studentForm.controls['address'].value;
    this.student.birthDate = this.studentForm.controls['birthDate'].value;
    this.student.sex = this.studentForm.controls['sex'].value;
    this.student.globalNote = this.studentForm.controls['globalNote'].value;
    console.log(this.student);

    if (this.studentId) {
      this.updateStudent();
    } else {
      this.addStudent();
    }
  }

  private addStudent(): void {
    this.studentService.createStudent(this.student)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/class', this.classId, 'students']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  private updateStudent(): void {
    this.studentService.updateStudent(this.student, this.studentId)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/class', this.classId, 'students']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  private getStudent(): void {
    this.loading = true;
    this.studentService.getStudent(this.studentId)
      .pipe()
      .subscribe((student: Student) => {
        this.student = student;
        // Update form
        this.studentForm.patchValue({
          firstName: this.student.firstName,
          lastName: this.student.lastName,
          email: this.student.email,
          phoneNumber: this.student.phoneNumber,
          address: this.student.address,
          birthDate: this.student.birthDate,
          sex: this.student.sex,
          globalNote: this.student.globalNote
        });

        this.loading = false;
      });
  }

}
