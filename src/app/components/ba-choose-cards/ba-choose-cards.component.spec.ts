import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaChooseCardsComponent } from './ba-choose-cards.component';

describe('BaChooseCardsComponent', () => {
  let component: BaChooseCardsComponent;
  let fixture: ComponentFixture<BaChooseCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaChooseCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaChooseCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
