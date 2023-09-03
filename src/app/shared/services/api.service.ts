import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { GITHUB_API, Method } from 'src/app/shared/datas/api';
import { CLIENT_ID, CLIENT_SECRETS, IRepo } from 'src/app/shared/datas/repo';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private utilService: UtilService) {}

  getRepos(name: string): Observable<IRepo[]> {
    const params: HttpParams = new HttpParams({ fromObject: { client_id: CLIENT_ID, client_secret: CLIENT_SECRETS } });
    return this.http.request<IRepo[]>(Method.Get, `${GITHUB_API}/users/${name}/repos`, { params }).pipe(
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
