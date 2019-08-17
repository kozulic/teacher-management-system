import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T, TBase, ID> {
  constructor(
    protected http: HttpClient,
    protected baseUrl: string
  ) { }

  getAll(studentId: ID): Observable<TBase[]> {
    return this.http.get<TBase[]>(`${this.baseUrl}/student/${studentId}`);
  }

  getById(id: ID): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  create(t: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, t);
  }

  update(id: ID, t: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, t);
  }

  delete(id: ID): Observable<object> {
    return this.http.delete<object>(`${this.baseUrl}/${id}`);
  }
}
