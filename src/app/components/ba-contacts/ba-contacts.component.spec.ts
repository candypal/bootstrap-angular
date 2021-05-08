import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaContactsComponent } from './ba-contacts.component';

describe('BaContactsComponent', () => {
  let component: BaContactsComponent;
  let fixture: ComponentFixture<BaContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
