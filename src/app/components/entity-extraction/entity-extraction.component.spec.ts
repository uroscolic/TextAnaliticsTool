import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityExtractionComponent } from './entity-extraction.component';

describe('EntityExtractionComponent', () => {
  let component: EntityExtractionComponent;
  let fixture: ComponentFixture<EntityExtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityExtractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityExtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
