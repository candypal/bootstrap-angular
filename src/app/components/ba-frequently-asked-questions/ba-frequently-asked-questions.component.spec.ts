import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaFrequentlyAskedQuestionsComponent } from './ba-frequently-asked-questions.component';

describe('BaFrequentlyAskedQuestionsComponent', () => {
  let component: BaFrequentlyAskedQuestionsComponent;
  let fixture: ComponentFixture<BaFrequentlyAskedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaFrequentlyAskedQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaFrequentlyAskedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
