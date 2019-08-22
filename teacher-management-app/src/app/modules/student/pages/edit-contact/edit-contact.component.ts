import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/core/services/contact.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  loading = false;
  contact: Contact;
  contactForm: FormGroup;
  studentId: string;
  contactId: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');

    this.contact = {
      _id: null,
      student: this.studentId,
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
      relationship: ''
    };

    this.route.queryParams.subscribe(params => {
      if (params.contactId) {
        this.contactId = params.contactId;
        this.getContact();
      }
    });

    // Init form
    this.contactForm = this.fb.group({
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      email: [this.contact.email],
      phoneNumber: [this.contact.phoneNumber],
      address: this.fb.group({
        street: [this.contact.address.street],
        streetNum: [this.contact.address.streetNum],
        zipNum: [this.contact.address.zipNum],
        city: [this.contact.address.city],
      }),
      relationship: [this.contact.relationship]
    });
  }

  onSubmit() {
    this.loading = true;

    this.contact.firstName = this.contactForm.controls['firstName'].value;
    this.contact.lastName = this.contactForm.controls['lastName'].value;
    this.contact.email = this.contactForm.controls['email'].value;
    this.contact.phoneNumber = this.contactForm.controls['phoneNumber'].value;
    this.contact.address = this.contactForm.controls['address'].value;
    this.contact.relationship = this.contactForm.controls['relationship'].value;

    console.log(this.contact);
    if (this.contactId) {
      this.editContact();
    } else {
      this.addContact();
    }
  }

  private addContact(): void {
    this.contactService.create(this.contact)
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

  private editContact(): void {
    this.contactService.update(this.contactId, this.contact)
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

  private getContact(): void {
    this.loading = true;
    this.contactService.getById(this.contactId)
      .pipe()
      .subscribe((contact: Contact) => {
        this.contact = contact;

        this.contactForm.patchValue({
          firstName: this.contact.firstName,
          lastName: this.contact.lastName,
          email: this.contact.email,
          phoneNumber: this.contact.phoneNumber,
          address: this.contact.address,
          relationship: this.contact.relationship
        });

        this.loading = false;
      });
  }

}
