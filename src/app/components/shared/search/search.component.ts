import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() sendResultSearch: EventEmitter<string>;

  constructor() {
    this.sendResultSearch = new EventEmitter();
  }


  ngOnInit() {
  }


  /** handle form submit and get the data */
  handleSubmitForm(query: string) {
    // not allowed the user send a query empty
    if (query) {
      this.sendResultSearch.emit(query);
    }
  }

}
