import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  analyzeSentiment(text: string, lang: string): Observable<any> {

    const token = localStorage.getItem('token') || '';
    const params = new HttpParams().set('text', text).set('lang', lang).set('token', token);

    return this.httpClient.get(`${this.apiUrl}/sent/v1`, { params });
  }

  
}
