// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LifeHacks } from "../life-hacks"

@Component({
  selector: 'app-life-hacks-details',
  templateUrl: './life-hacks-details.component.html',
  styleUrls: ['./life-hacks-details.component.css']
})
export class LifeHacksDetailsComponent implements OnInit {
  // clickCounter: number = 0;
  // dislikeCounter: number = 0;

  @Input() lifehacks: LifeHacks;
  @Output() toDelete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.toDelete.emit(complete);
  }
  constructor() { }

  likeQuo = () => {
    document.getElementById('display').addEventListener('click', () => { like(1); });
    document.getElementById('dislike').addEventListener('click', () => { like(0); });
    function like(lk) {
      var likes, dlikes;


      likes = parseInt(document.getElementById('lk').innerText);
      dlikes = parseInt(document.getElementById('dlk').innerText);
      if (lk == 0) { dlikes ++; }
      else { likes ++; }
      if (likes <= 0) { likes = 0; } if (dlikes <= 0) { dlikes = 0; }
      document.getElementById('lk').innerText = likes;
      document.getElementById('dlk').innerText = dlikes;
    }
  }

  ngOnInit() {
  }
  // countClick() {
  //   this.clickCounter += 1;
  // }
  // countDislike() {
  //   this.dislikeCounter += 1;
  // }

}

