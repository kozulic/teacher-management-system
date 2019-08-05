import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthTeacher } from '../models/auth-teacher.model';
import { TeacherLogin, TeacherRegister } from '../models/teacher.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private teacherSubject: BehaviorSubject<AuthTeacher>;
  public teacher: Observable<AuthTeacher>;

  constructor(private http: HttpClient) {
    this.teacherSubject = new BehaviorSubject<AuthTeacher>(JSON.parse(localStorage.getItem('teacher')));
    this.teacher = this.teacherSubject.asObservable();
  }

  public get currentTeacher(): AuthTeacher {
    return this.teacherSubject.value;
  }

  login(teacherData: TeacherLogin): Observable<AuthTeacher> {
    return this.http.post<AuthTeacher>(`${environment.api_url}/teacher/auth`, teacherData)
      .pipe(map(authTeacher => {
        if (authTeacher) {
          localStorage.setItem('teacher', JSON.stringify(authTeacher));
          this.teacherSubject.next(authTeacher);
        }
        return authTeacher;
      }));
  }

  register(teacherData: TeacherRegister): Observable<AuthTeacher> {
    return this.http.post<AuthTeacher>(`${environment.api_url}/teacher/register`, teacherData)
      .pipe(map(registeredTeacher => {
        if (registeredTeacher) {
          localStorage.setItem('teacher', JSON.stringify(registeredTeacher));
          this.teacherSubject.next(registeredTeacher);
        }
        return registeredTeacher;
      }));
  }

  logout(): void {
    localStorage.removeItem('teacher');
    this.teacherSubject.next(null);
  }
}
