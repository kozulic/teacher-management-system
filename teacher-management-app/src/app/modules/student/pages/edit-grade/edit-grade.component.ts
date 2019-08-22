import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';

import { Grade } from 'src/app/core/models/grade.model';
import { GradeService } from 'src/app/core/services/grade.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { ClassService } from 'src/app/core/services/class.service';
import { Subject } from 'src/app/core/models/class.model';

@Component({
  selector: 'app-edit-grade',
  templateUrl: './edit-grade.component.html',
  styleUrls: ['./edit-grade.component.scss']
})
export class EditGradeComponent implements OnInit {
  loading = false;
  grade: Grade;
  gradeForm: FormGroup;
  studentId: string;
  gradeId: string;
  studentClassId: string;
  classSujects: string[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private gradeService: GradeService,
    private alertService: AlertService,
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');

    this.grade = {
      _id: null,
      student: this.studentId,
      subject: '',
      grade: null,
      date: new Date(),
      note: ''
    };

    this.route.queryParams.subscribe(params => {
      if (params.studentClass) {
        this.studentClassId = params.studentClass;
        this.getClassSubjects();
      }
      if (params.gradeId) {
        this.gradeId = params.gradeId;
        this.getGrade();
      }
    });

    // Build form
    this.gradeForm = this.fb.group({
      subject: [this.grade.subject, Validators.required],
      grade: [this.grade.grade, Validators.required],
      date: [this.grade.date, Validators.required],
      note: [this.grade.note, Validators.required]
    });
  }

  onSubmit() {
    this.loading = true;

    this.grade.subject = this.gradeForm.controls['subject'].value;
    this.grade.grade = this.gradeForm.controls['grade'].value;
    this.grade.note = this.gradeForm.controls['note'].value;
    this.grade.date = new Date();

    if (this.gradeId) {
      this.updateGrade();
    } else {
      this.addGrade();
    }
  }

  private addGrade(): void {
    this.gradeService.create(this.grade)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/student', this.studentId]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  private updateGrade(): void {
    this.gradeService.update(this.gradeId, this.grade)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/student', this.studentId]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  private getGrade(): void {
    this.loading = true;
    this.gradeService.getById(this.gradeId)
      .pipe()
      .subscribe((grade: Grade) => {
        this.grade = grade;

        this.gradeForm.patchValue({
          subject: this.grade.subject,
          grade: this.grade.grade,
          date: this.grade.date,
          note: this.grade.note
        });

        this.loading = false;
      });
  }

  private getClassSubjects(): void {
    this.loading = true;
    this.classService.getSubjects(this.studentClassId)
      .pipe()
      .subscribe((response: Subject) => {
        this.classSujects = [ ...response.subjects ];
        this.loading = false;
      });
  }

}
