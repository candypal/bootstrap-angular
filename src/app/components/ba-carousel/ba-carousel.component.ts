import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {Carousel, Modal} from 'bootstrap';

@Component({
  selector: 'app-ba-carousel',
  templateUrl: './ba-carousel.component.html',
  styleUrls: ['./ba-carousel.component.scss']
})
export class BaCarouselComponent implements OnInit, AfterViewInit {

  // modalDirect: Modal | undefined;
  // @ViewChild('demoModal') demoModal: any;
  @ViewChild('carouselElement') carouselElement: ElementRef<HTMLElement> | any;
  carouselRef!: Carousel;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.carouselRef = new Carousel(this.carouselElement.nativeElement, {
      slide: true
    });

    // this.modalDirect = new Modal(this.demoModal, {});
  }


  startSlide(): void {
    this.carouselRef.cycle();
  }

  stopSlide(): void {
    this.carouselRef.pause();
  }

  nextSlide(): void {
    this.carouselRef.next();
  }
}
