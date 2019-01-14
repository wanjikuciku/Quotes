import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  quotes = []

  addNewQuote(quote){
    let quoteLength= this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }

  deleteQuote(isComplete,index){
   if (isComplete){
    let toDelete=confirm('Are you sure you want to delete this quote')

    if(toDelete){
       this.quotes.splice(index,1)
    }
   }
  }

  constructor() { }

  ngOnInit() {
  }

}
