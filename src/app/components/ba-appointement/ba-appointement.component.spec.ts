import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaAppointementComponent } from './ba-appointement.component';

describe('BaAppointementComponent', () => {
  let component: BaAppointementComponent;
  let fixture: ComponentFixture<BaAppointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaAppointementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaAppointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
