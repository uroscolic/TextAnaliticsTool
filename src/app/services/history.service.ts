import { Injectable } from '@angular/core';
import { History } from '../model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: History[] = [];
  constructor() { }

  addHistory(history: History) {
    this.history.push(history);
  }

  getHistory() {
    return this.history;
  }
}
