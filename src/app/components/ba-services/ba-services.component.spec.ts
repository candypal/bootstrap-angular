import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaServicesComponent } from './ba-services.component';

describe('BaServicesComponent', () => {
  let component: BaServicesComponent;
  let fixture: ComponentFixture<BaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
