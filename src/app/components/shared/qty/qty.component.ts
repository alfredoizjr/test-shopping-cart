import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qty',
  templateUrl: './qty.component.html',
  styleUrls: ['./qty.component.css']
})
export class QtyComponent implements OnInit {


  @Output() sendResultQty: EventEmitter<Number>

  constructor() {
    this.sendResultQty = new EventEmitter();
  }

  ngOnInit() {
  }

  // emited the qty outside
  getQty(qty: number) {
    console.log(qty)
    this.sendResultQty.emit(qty);
  }

}
