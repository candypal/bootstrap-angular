import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-ba-modal',
  templateUrl: './ba-modal.component.html',
  styleUrls: ['./ba-modal.component.scss']
})
export class BaModalComponent implements OnInit, AfterViewInit {

  modalDirect: Modal | undefined;
  @ViewChild('demoModal') demoModal: ElementRef<HTMLElement> | any;

  constructor(
    // private modal: Modal
  ) {
    console.log('constructor: %o', this.demoModal);
    // this.modalDirect = new bootstrap.Modal(this.input, {});
  }

  ngOnInit(): void {
    console.log('ngOnInit: %o', this.demoModal);
  }

  open(element: Element): void {
    this.modalDirect = new Modal(element, {});
    // this.modalDirect.Modal.open(element);
    // this.modal.show();
  }

  ngAfterViewInit(): void {
    this.modalDirect = new Modal(this.demoModal.nativeElement, {});
    console.log('ngAfterViewInit: %o', this.demoModal);
  }

}
