import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthTeacher } from 'src/app/core/models/auth-teacher.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  teacher: AuthTeacher;
  logged = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.teacher.subscribe((teacher: AuthTeacher) => this.teacher = teacher);
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/log-in']);
  }

}
