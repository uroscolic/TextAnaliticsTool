import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  checkSimilarity(text1: string, text2: string): Observable<any> {
    const token = localStorage.getItem('token') || '';
    
    const params = new HttpParams().set('text1', text1).set('text2', text2).set('token', token);
    const history = {
      timestamp: new Date(),
      method: 'GET',
      path: `${this.apiUrl}/sim/v1`,
      parms: [params.toString()]
    };


    this.historyService.addHistory(history);

    return this.httpClient.get(`${this.apiUrl}/sim/v1`, { params });
  }
}
