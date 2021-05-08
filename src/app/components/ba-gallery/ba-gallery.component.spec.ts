import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaGalleryComponent } from './ba-gallery.component';

describe('BaGalleryComponent', () => {
  let component: BaGalleryComponent;
  let fixture: ComponentFixture<BaGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
