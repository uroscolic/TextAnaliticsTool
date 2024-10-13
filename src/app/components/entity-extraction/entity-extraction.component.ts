import { Component } from '@angular/core';
import { EntityExtractionService } from '../../services/entity-extraction.service';
import { FormsModule } from '@angular/forms';
import { Entity } from '../../model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entity-extraction',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './entity-extraction.component.html',
  styleUrl: './entity-extraction.component.css'
})
export class EntityExtractionComponent {

  text: string;
  minConfidence: number;
  include: string;
  abstractChecked: boolean;
  categoriesChecked: boolean;
  imageChecked: boolean;
  entities: Entity[] = [];


  constructor(private entityExtractionService: EntityExtractionService) {
    this.text = '';
    this.minConfidence = 0.6;
    this.include = '';
    this.abstractChecked = false;
    this.categoriesChecked = false;
    this.imageChecked = false;
  }

  extractEntities() {
    this.entities = [];
    this.makeIncludeString();
    this.entityExtractionService.extractEntities(this.text, this.minConfidence, this.include).subscribe((res) => {
      for(let annotation of res.annotations) {
        this.entities.push({
          abstract: annotation.abstract,
          categories: annotation.categories,
          image: annotation.image?.full
        });
      }
    });
  }

  makeIncludeString() {
    let includeArray: string[] = [];

    if (this.abstractChecked) {
      includeArray.push('abstract');
    }
    if (this.categoriesChecked) {
      includeArray.push('categories');
    }
    if (this.imageChecked) {
      includeArray.push('image');
    }
    this.include = includeArray.join(',');
    
  }

}
