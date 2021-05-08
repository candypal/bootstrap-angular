import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaDoctorsComponent } from './ba-doctors.component';

describe('BaDoctorsComponent', () => {
  let component: BaDoctorsComponent;
  let fixture: ComponentFixture<BaDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
