import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/core/models/absence.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AbsenceService } from 'src/app/core/services/absence.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-absence',
  templateUrl: './edit-absence.component.html',
  styleUrls: ['./edit-absence.component.scss']
})
export class EditAbsenceComponent implements OnInit {
  loading = false;
  absence: Absence;
  absenceForm: FormGroup;
  studentId: string;
  absenceId: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private absenceService: AbsenceService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');

    this.absence = {
      _id: null,
      student: this.studentId,
      hours: null,
      reason: '',
      date: new Date(),
    };

    this.route.queryParams.subscribe(params => {
      if (params.absenceId) {
        this.absenceId = params.absenceId;
        this.getAbsence();
      }
    });

    // Build form
    this.absenceForm = this.fb.group({
      hours: [this.absence.hours, Validators.required],
      reason: [this.absence.reason, Validators.required],
      date: [this.absence.date, Validators.required],
    });
  }

  onSubmit(): void {
    this.loading = false;

    this.absence.hours = this.absenceForm.controls['hours'].value;
    this.absence.reason = this.absenceForm.controls['reason'].value;
    this.absence.date = new Date();

    if (this.absenceId) {
      this.editAbsence();
    } else {
      this.addAbsence();
    }
  }

  private addAbsence(): void {
    this.absenceService.create(this.absence)
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

  private editAbsence(): void {
    this.absenceService.update(this.absenceId, this.absence)
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

  private getAbsence(): void {
    this.loading = true;
    this.absenceService.getById(this.absenceId)
      .pipe()
      .subscribe((absence: Absence) => {
        this.absence = absence;

        this.absenceForm.patchValue({
          hours: this.absence.hours,
          reason: this.absence.reason,
          date: this.absence.date,
        });

        this.loading = false;
      });
  }

}
