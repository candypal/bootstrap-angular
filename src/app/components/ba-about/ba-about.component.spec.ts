import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaAboutComponent } from './ba-about.component';

describe('BaAboutComponent', () => {
  let component: BaAboutComponent;
  let fixture: ComponentFixture<BaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
