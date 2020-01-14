import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LifeHacks } from '../life-hacks'

@Component({
  selector: 'app-life-hacks-form',
  templateUrl: './life-hacks-form.component.html',
  styleUrls: ['./life-hacks-form.component.css']
})
export class LifeHacksFormComponent implements OnInit {

  newLifeHacks = new LifeHacks(0,"","","",new Date());
  @Output() addQuote = new EventEmitter<LifeHacks>();
  
  submitQuote(){
    this.addQuote.emit(this.newLifeHacks);
  }
  constructor() { }

  ngOnInit() {
  }

}
