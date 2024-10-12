import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  checkSimilarity(text1: string, text2: string): Observable<any> {
    console.log(`TextSimilaritySerivce`);
    const token = localStorage.getItem('token') || '';
    
    const params = new HttpParams().set('text1', text1).set('text2', text2).set('token', token);

    return this.httpClient.get(`${this.apiUrl}/sim/v1`, { params });
  }
}
