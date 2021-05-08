import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  modalDirect: Modal | undefined;
  @ViewChild('demoHomeModal') demoHomeModal: ElementRef<HTMLElement> | any;
  constructor() { }

  ngOnInit(): void {
    // this.modalDirect = new Modal(this.demoHomeModal, {});
  }

  ngAfterViewInit(): void {
    this.modalDirect = new Modal(this.demoHomeModal.nativeElement, {});
    console.log('ngAfterViewInit: %o', this.demoHomeModal);
  }

  open(element: Element): void {
    console.log('modal clicked|HomeComponent|element:%o', element);
    this.modalDirect = new Modal(element, {});
    this.modalDirect.show();
  }

}
