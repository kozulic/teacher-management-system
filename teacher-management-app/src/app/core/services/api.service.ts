import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T, TBase, TEdit, ID> {
  constructor(
    private http: HttpClient,
    private baseUrl: string
  ) { }

  get(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl);
  }

  getById(id: ID): Observable<TBase> {
    return this.http.get<TBase>(`${this.baseUrl}/${id}`);
  }

  create(t: TEdit): Observable<TEdit> {
    return this.http.post<TEdit>(this.baseUrl, t);
  }

  update(id: ID, t: TEdit): Observable<TEdit> {
    return this.http.put<TEdit>(`${this.baseUrl}/${id}`, t);
  }

  delete(id: ID): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
