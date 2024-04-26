import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSuggestionComponent } from './send-suggestion.component';

describe('SendSuggestionComponent', () => {
  let component: SendSuggestionComponent;
  let fixture: ComponentFixture<SendSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendSuggestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
