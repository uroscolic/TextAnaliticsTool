import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  detectLanguage(text: string, clean: boolean): Observable<any> {

    const token = localStorage.getItem('token') || '';
    const params = new HttpParams().set('text', text).set('clean', clean.toString()).set('token', token);
    const history = {
      timestamp: new Date(),
      method: 'GET',
      path: `${this.apiUrl}/li/v1`,
      parms: [params.toString()]
    };


    this.historyService.addHistory(history);

    return this.httpClient.get(`${this.apiUrl}/li/v1`, { params });
  }
}
