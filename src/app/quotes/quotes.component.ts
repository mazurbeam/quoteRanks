import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quote: string;
  @Input() author: string;
  @Input() rating: number;
  @Input() index: number;

  @Output() voteUp = new EventEmitter();
  @Output() voteDown = new EventEmitter();
  @Output() deleteQuote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  up(event, index) {
    this.voteUp.emit(index)
  }

  down(event, index) {
    this.voteDown.emit(index)
  }

  delete(even, index){
    this.deleteQuote.emit(index);
  }
}
