import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private readonly apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  extractEntities(text: string, minConfidence: number, include: string): Observable<any> {

    
    const token = localStorage.getItem('token') || '';
    const params = new HttpParams().set('text', text).set('min_confidence', minConfidence).set('include', include).set('token', token);
    const history = {
      timestamp: new Date(),
      method: 'GET',
      path: `${this.apiUrl}/nex/v1`,
      parms: [params.toString()]
    };


    this.historyService.addHistory(history);

    return this.httpClient.get(`${this.apiUrl}/nex/v1`, { params });
    
  }
}
