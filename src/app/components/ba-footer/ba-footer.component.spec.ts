import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaFooterComponent } from './ba-footer.component';

describe('BaFooterComponent', () => {
  let component: BaFooterComponent;
  let fixture: ComponentFixture<BaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
