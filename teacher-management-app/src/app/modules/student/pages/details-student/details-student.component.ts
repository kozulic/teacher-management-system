import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import { StudentService } from 'src/app/core/services/student.service';
import { ContactService } from 'src/app/core/services/contact.service';
import { GradeService } from 'src/app/core/services/grade.service';
import { NoteService } from 'src/app/core/services/note.service';
import { AbsenceService } from 'src/app/core/services/absence.service';
import { Student } from 'src/app/core/models/student.model';
import { Absence } from 'src/app/core/models/absence.model';
import { ContactBase } from 'src/app/core/models/contact.model';
import { GradeBase } from 'src/app/core/models/grade.model';
import { Note } from 'src/app/core/models/note.model';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.scss']
})
export class DetailsStudentComponent implements OnInit {
  loading = false;
  studentId: string;
  student: Student;
  absences: Absence[] = [];
  contacts: ContactBase[] = [];
  grades: GradeBase[] = [];
  notes: Note[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private contactService: ContactService,
    private gradeService: GradeService,
    private noteService: NoteService,
    private absenceService: AbsenceService
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');

    this.getStudent();

    this.loadAbsences();
    this.loadContacts();
    this.loadGrades();
    this.loadNotes();
  }

  private addGrade(): void {
    console.log(this.student);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        studentClass: this.student.class
      }
    };

    this.router.navigate(['student', this.studentId, 'grade'], navigationExtras);
  }

  private addAbsence(): void {
    this.router.navigate(['student', this.studentId, 'absence']);
  }

  private addContact(): void {
    this.router.navigate(['student', this.studentId, 'contact']);
  }

  private addNote(): void {
    this.router.navigate(['student', this.studentId, 'note']);
  }

  private editAbsence(absenceId: string): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        absenceId
      }
    };
    this.router.navigate(['student', this.studentId, 'absence'], navigationExtras);
  }

  private deleteAbsence(absenceId: string): void {
    this.loading = true;
    this.absenceService.delete(absenceId)
    .pipe()
    .subscribe((response: object) => {
      this.loadAbsences();
      this.loading = false;
      console.log(response);
    });
  }

  private editContact(contactId: string): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        contactId
      }
    };
    this.router.navigate(['student', this.studentId, 'contact'], navigationExtras);
  }

  private deleteContact(contactId: string): void {
    this.loading = true;
    this.contactService.delete(contactId)
    .pipe()
    .subscribe((response: object) => {
      this.loadContacts();
      this.loading = false;
      console.log(response);
    });
  }

  private editGrade(gradeId: string): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        gradeId,
        studentClass: this.student.class
      }
    };
    this.router.navigate(['student', this.studentId, 'grade'], navigationExtras);
  }

  private deleteGrade(gradeId: string): void {
    this.loading = true;
    this.gradeService.delete(gradeId)
    .pipe()
    .subscribe((response: object) => {
      this.loadGrades();
      this.loading = false;
      console.log(response);
    });
  }

  private editNote(noteId: string): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        noteId
      }
    };
    this.router.navigate(['student', this.studentId, 'note'], navigationExtras);
  }

  private deleteNote(noteId: string): void {
    this.loading = true;
    this.noteService.delete(noteId)
    .pipe()
    .subscribe((response: object) => {
      this.loadNotes();
      this.loading = false;
      console.log(response);
    });
  }


  private loadAbsences(): void {
    this.loading = true;
    this.absenceService.getAll(this.studentId)
      .pipe()
      .subscribe((absences: Absence[]) => {
        this.absences = absences;
        this.loading = false;
      });
  }

  private loadContacts(): void {
    this.loading = true;
    this.contactService.getAll(this.studentId)
      .pipe()
      .subscribe((contacts: ContactBase[]) => {
        this.contacts = contacts;
        this.loading = false;
      });
  }

  private loadNotes(): void {
    this.loading = true;
    this.noteService.getAll(this.studentId)
      .pipe()
      .subscribe((notes: Note[]) => {
        this.notes = notes;
        this.loading = false;
      });
  }

  private loadGrades(): void {
    this.loading = true;
    this.gradeService.getAll(this.studentId)
      .pipe()
      .subscribe((grades: GradeBase[]) => {
        this.grades = grades;
        this.loading = false;
      });
  }

  private getStudent(): void {
    this.loading = true;
    this.studentService.getStudent(this.studentId)
      .pipe()
      .subscribe((student: Student) => {
        this.student = student;
        this.loading = false;
      });
  }

}
