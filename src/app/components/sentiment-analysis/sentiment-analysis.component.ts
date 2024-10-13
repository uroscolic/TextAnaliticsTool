import { Component } from '@angular/core';
import { SentimentAnalysisService } from '../../services/sentiment-analysis.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sentiment-analysis',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sentiment-analysis.component.html',
  styleUrl: './sentiment-analysis.component.css'
})
export class SentimentAnalysisComponent {

  lang: string;
  text: string;
  type: string;
  score: number;

  constructor(private sentimentAnalysisService: SentimentAnalysisService) {
    this.lang = 'auto';
    this.text = '';
    this.type = '';
    this.score = 0;
  }

  analyzeSentiment() {
    this.sentimentAnalysisService.analyzeSentiment(this.text, this.lang).subscribe((res) => {
      this.type = res.sentiment.type;
      this.score = res.sentiment.score;
    });
  }

  getInterpolatedColor(score: number): string {
    //od 0 do 1
    const normalizedScore = (score + 1) / 2;
  
    let r: number, g: number, b: number;
  
    if (score < 0) {
      r = 255 - Math.floor(normalizedScore * 120);  // Od 255 do 165
      g = Math.floor(normalizedScore * 62);        // Od 0 do 42
      b = Math.floor(normalizedScore * 35);        // Od 0 do 42
    } else if(score > 0) {
      r = 135 - Math.floor(normalizedScore * 165); // Od 165 do 0
      g = 62 + Math.floor(normalizedScore * 213);  // Od 42 do 255
      b = 35 - Math.floor(normalizedScore * 42);   // Od 42 do 0
    }
    else {
      r = 135;
      g = 62;
      b = 35;
    }
  
    return `rgb(${r}, ${g}, ${b})`;
  }

}
