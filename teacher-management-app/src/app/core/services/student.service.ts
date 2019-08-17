import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { StudentList, Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(
    private http: HttpClient
  ) { }

  public getStudents(classId: string): Observable<StudentList[]> {
    return this.http.get<StudentList[]>(`${environment.api_url}/student/class/${classId}`);
  }

  public getStudent(studentId: string): Observable<Student> {
    return this.http.get<Student>(`${environment.api_url}/student/${studentId}`);
  }

  public createStudent(newStudent: Student): Observable<Student> {
    return this.http.post<Student>(`${environment.api_url}/student/`, newStudent);
  }

  public updateStudent(newStudent: Student, studentId: string): Observable<Student> {
    return this.http.put<Student>(`${environment.api_url}/student/${studentId}`, newStudent);
  }

  public deleteStudent(studentId: string): Observable<object> {
    return this.http.delete<object>(`${environment.api_url}/student/${studentId}`);
  }
}
