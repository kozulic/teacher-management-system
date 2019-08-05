import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Class, ClassList, Subject, ClassEdit } from '../models/class.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(
    private http: HttpClient
  ) { }

  public getClasses(teacherId: string): Observable<ClassList[]> {
    return this.http.get<ClassList[]>(`${environment.api_url}/class/teacher/${teacherId}`);
  }

  public getSubjects(classId): Observable<Subject> {
    return this.http.get<Subject>(`${environment.api_url}/class/${classId}/subjects`);
  }

  public getClass(classId): Observable<Class> {
    return this.http.get<Class>(`${environment.api_url}/class/${classId}`);
  }

  public createClass(newClass: ClassEdit): Observable<ClassEdit> {
    return this.http.post<ClassEdit>(`${environment.api_url}/class/`, newClass);
  }

  public updateClass(newClass: ClassEdit, classId: string): Observable<ClassEdit> {
    return this.http.put<ClassEdit>(`${environment.api_url}/class/${classId}`, newClass);
  }

  public deleteClass(classId: string): Observable<string> {
    return this.http.delete<string>(`${environment.api_url}/class/${classId}`);
  }

}
