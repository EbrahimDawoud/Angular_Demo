import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BASE_URL } from '../../core/auth/base-url.token';

@Injectable({
  providedIn: 'root'
})
export class GenericSerService<T> {
  constructor(public http: HttpClient, @Inject(BASE_URL) private baseUrl: string) { }

  getAll() {
    console.log(this.baseUrl);
    return this.http.get<T[]>(this.baseUrl);
  }

  getById(id: number) {
    
    return this.http.get<T>(`${this.baseUrl}${id}`);
  }
  add(obj: T) {
    return this.http.post<T>(this.baseUrl, obj);
  }
  update(obj: T) {
    return this.http.put<T>(this.baseUrl, obj);
  }
  delete(id: number) {
    return this.http.delete<T>(`${this.baseUrl}${id}`);
  }
}
