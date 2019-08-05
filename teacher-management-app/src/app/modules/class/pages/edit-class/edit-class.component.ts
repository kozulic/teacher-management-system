import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';

import { AuthService } from 'src/app/core/services/auth.service';
import { ClassService } from 'src/app/core/services/class.service';
import { ClassEdit } from 'src/app/core/models/class.model';
import { AuthTeacher } from 'src/app/core/models/auth-teacher.model';
import { AlertService } from 'src/app/core/services/alert.service';


@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit {
  classForm: FormGroup;
  loading = false;
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

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.classId) {
        console.log(params.classId);
      }
    });

    this.classForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      subjects: this.fb.array([
        this.fb.control('')
      ])
    });

    this.authService.teacher.subscribe((teacher: AuthTeacher) => this.teacherId = teacher.teacher._id);
  }

  get subjects() {
    return this.classForm.get('subjects') as FormArray;
  }

  addSubject() {
    this.subjects.push(this.fb.control(''));
  }

  onSubmit() {
    this.loading = true;
    const classData: ClassEdit = {
      _id: null,
      name: this.classForm.controls['name'].value,
      description: this.classForm.controls['description'].value,
      subjects: this.classForm.controls['subjects'].value,
      owner: this.teacherId
    };

    this.classService.createClass(classData)
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

}
