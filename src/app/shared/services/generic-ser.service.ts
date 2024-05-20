import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BASE_URL } from '../../core/auth/base-url.token';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenericSerService<T> {
  constructor(public http: HttpClient, @Inject(BASE_URL) private baseUrl: string) { }
  private URL = `${environment.baseUrl}${this.baseUrl}`;
  getAll() {
    console.log(this.URL);
      return this.http.get<T[]>(this.URL);
  }

  getById(id: number) {

    return this.http.get<T>(`${this.URL}/${id}`);
  }
  add(obj: T) {
    return this.http.post<T>(this.URL, obj);
  }
  update(obj: T, id:number) {
    return this.http.put<T>(`${this.URL}/${id}`, obj);
  }
  delete(id: number) {
    return this.http.delete<T>(`${this.URL}/${id}`);
  }
}
