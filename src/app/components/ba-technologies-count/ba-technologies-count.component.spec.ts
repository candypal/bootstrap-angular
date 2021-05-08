import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaTechnologiesCountComponent } from './ba-technologies-count.component';

describe('BaTechnologiesCountComponent', () => {
  let component: BaTechnologiesCountComponent;
  let fixture: ComponentFixture<BaTechnologiesCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaTechnologiesCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaTechnologiesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
