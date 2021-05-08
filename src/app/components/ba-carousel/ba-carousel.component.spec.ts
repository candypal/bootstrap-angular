import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaCarouselComponent } from './ba-carousel.component';

describe('BaCarouselComponent', () => {
  let component: BaCarouselComponent;
  let fixture: ComponentFixture<BaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
