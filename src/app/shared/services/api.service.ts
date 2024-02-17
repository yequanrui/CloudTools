import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Method } from '@datas/api';
import { CLIENT_ID, CLIENT_SECRETS, GITHUB_API, IRepo } from '@datas/repo';
import { ICalendar, IHistoryToday, IRoolResp, ROLL_API, ROLL_APP_ID, ROLL_APP_SECRET } from '@datas/roll';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private utilService: UtilService) {}

  /**
   * 获取用户下的仓库列表
   * @param userName 用户名
   * @returns 仓库列表
   */
  getReposByUser(userName: string): Observable<IRepo[]> {
    const params: HttpParams = new HttpParams({ fromObject: { client_id: CLIENT_ID, client_secret: CLIENT_SECRETS } });
    return this.http.request<IRepo[]>(Method.Get, `${GITHUB_API}/users/${userName}/repos`, { params }).pipe(
      catchError((err) => {
        this.utilService.openToast(err);
        return of();
      }),
      map((res) => {
        return res || [];
      })
    );
  }

  /**
   * 获取指定日期的节假日和万年历信息
   * @param date 日期（格式：yyyyMMdd）
   * @param ignoreHoliday 是否忽略节假日，仅仅获取万年历，默认值false
   * @returns 节假日和万年历信息
   */
  getCalendar(date: string, ignoreHoliday = false) {
    const params: HttpParams = new HttpParams({ fromObject: { app_id: ROLL_APP_ID, app_secret: ROLL_APP_SECRET, ignoreHoliday } });
    return this.http.request<IRoolResp<ICalendar>>(Method.Get, `${ROLL_API}/holiday/single/${date}`, { params }).pipe(
      catchError((err) => {
        this.utilService.openToast(err);
        return of();
      }),
      map((res) => {
        return res.data;
      })
    );
  }

  /**
   * 获取已收录的历史上今天的所有信息
   * @param type 是否需要详情，0-不需要、1-需要，默认值为0，可不传
   * @returns 历史上今天的所有信息
   */
  getHistoryToday(type = 0) {
    const params: HttpParams = new HttpParams({ fromObject: { app_id: ROLL_APP_ID, app_secret: ROLL_APP_SECRET, type } });
    return this.http.request<IRoolResp<IHistoryToday[]>>(Method.Get, `${ROLL_API}/history/today`, { params }).pipe(
      catchError((err) => {
        this.utilService.openToast(err);
        return of();
      }),
      map((res) => {
        return res.data;
      })
    );
  }

  // 获取随机名言
  getRandomQuote() {}
}
