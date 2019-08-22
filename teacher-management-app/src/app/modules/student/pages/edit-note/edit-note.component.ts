import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/core/models/note.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { NoteService } from 'src/app/core/services/note.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  loading = false;
  note: Note;
  noteForm: FormGroup;
  studentId: string;
  noteId: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');

    this.note = {
      _id: null,
      student: this.studentId,
      text: '',
      date: new Date(),
    };

    this.route.queryParams.subscribe(params => {
      if (params.noteId) {
        this.noteId = params.noteId;
        this.getNote();
      }
    });

    // Build form
    this.noteForm = this.fb.group({
      text: [this.note.text, Validators.required],
      date: [this.note.date, Validators.required],
    });
  }

  onSubmit(): void {
    this.loading = false;

    this.note.text = this.noteForm.controls['text'].value;
    this.note.date = new Date();

    if (this.noteId) {
      this.editNote();
    } else {
      this.addNote();
    }
  }

  addNote(): void {
    this.noteService.create(this.note)
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

  editNote(): void {
    this.noteService.update(this.noteId, this.note)
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

  getNote(): void {
    this.loading = true;
    this.noteService.getById(this.noteId)
      .pipe()
      .subscribe((note: Note) => {
        this.note = note;

        this.noteForm.patchValue({
          text: this.note.text,
          date: this.note.date,
        });

        this.loading = false;
      });
  }

}
