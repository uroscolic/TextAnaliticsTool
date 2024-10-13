import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { CommonModule, DatePipe } from '@angular/common';
import { History } from '../../model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './history.component.html',
  providers: [DatePipe],
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  history: History[] = [];
  constructor(private historyService: HistoryService) {

  }

  ngOnInit() {
    this.history = this.historyService.getHistory();
  }



}
