import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({ providedIn: 'root' })
export class ApiService {
  baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getRepos(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${name}/repos`);
  }
}
