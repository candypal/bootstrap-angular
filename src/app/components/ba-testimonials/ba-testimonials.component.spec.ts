import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaTestimonialsComponent } from './ba-testimonials.component';

describe('BaTestimonialsComponent', () => {
  let component: BaTestimonialsComponent;
  let fixture: ComponentFixture<BaTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
