import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaHeroComponent } from './ba-hero.component';

describe('BaHeroComponent', () => {
  let component: BaHeroComponent;
  let fixture: ComponentFixture<BaHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
