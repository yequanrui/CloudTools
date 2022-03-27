import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { GITHUB_API } from '@data/api';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private utilService: UtilService) {}

  getRepos(name: string): Observable<any> {
    return this.http.get<any>(`${GITHUB_API}/users/${name}/repos`).pipe(
      catchError((err) => {
        this.utilService.openToast(err);
        return of([]);
      }),
      map((res) => {
        return res || [];
      })
    );
  }
}
