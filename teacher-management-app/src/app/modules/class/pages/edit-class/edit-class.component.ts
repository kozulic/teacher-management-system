import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';

import { AuthService } from 'src/app/core/services/auth.service';
import { ClassService } from 'src/app/core/services/class.service';
import { ClassEdit, Class } from 'src/app/core/models/class.model';
import { AuthTeacher } from 'src/app/core/models/auth-teacher.model';
import { AlertService } from 'src/app/core/services/alert.service';


@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit {
  loading = false;
  class: ClassEdit;
  classForm: FormGroup;
  teacherId: string;
  classId: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private classService: ClassService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.authService.teacher.subscribe((teacher: AuthTeacher) => this.teacherId = teacher.teacher._id);

    this.class = {
      _id: null,
      owner: this.teacherId,
      name: '',
      description: '',
      subjects: []
    };

    this.route.queryParams.subscribe(params => {
      if (params.classId) {
        this.classId = params.classId;
        this.getClass();
      }
    });

    this.classForm = this.fb.group({
      name: [this.class.name, Validators.required],
      description: [this.class.description, ''],
      subjects: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  get subjects() {
    return this.classForm.get('subjects') as FormArray;
  }

  addSubject() {
    this.subjects.push(this.fb.control(''));
  }

  onSubmit() {
    this.loading = true;

    this.class.name = this.classForm.controls['name'].value;
    this.class.description = this.classForm.controls['description'].value;
    this.class.owner = this.teacherId;

    if (this.classId) {
      this.editClass();
    } else {
      this.addClass();
    }
  }

  private addClass(): void {
    this.classService.createClass(this.class)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  private editClass(): void {
    this.classService.updateClass(this.class, this.classId)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  private getClass(): void {
    this.loading = true;
    this.classService.getClass(this.classId)
      .pipe()
      .subscribe((classDetails: Class) => {
        // Map values
        this.class._id = classDetails._id;
        this.class.name = classDetails.name;
        this.class.description = classDetails.description;
        this.class.subjects = classDetails.subjects;

        this.classForm.patchValue({
          name: this.class.name,
          description: this.class.description
        });

        this.loading = false;
      });
  }

}
