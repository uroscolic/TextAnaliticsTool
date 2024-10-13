import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextSimilarityService } from '../../services/text-similarity.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-text-similarity',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './text-similarity.component.html',
  styleUrl: './text-similarity.component.css'
})
export class TextSimilarityComponent {

  text1: string;
  text2: string;
  similarity: number;

  constructor(private textSimilarityService: TextSimilarityService) {
    this.text1 = '';
    this.text2 = '';
    this.similarity = 0;
  }

  checkSimilarity() {
    this.textSimilarityService.checkSimilarity(this.text1, this.text2)
      .subscribe((result: any) => {
        this.similarity = result.similarity;
      });
  }
}
