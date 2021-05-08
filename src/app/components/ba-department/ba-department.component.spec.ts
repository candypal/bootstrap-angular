import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaDepartmentComponent } from './ba-department.component';

describe('BaDepartmentComponent', () => {
  let component: BaDepartmentComponent;
  let fixture: ComponentFixture<BaDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
