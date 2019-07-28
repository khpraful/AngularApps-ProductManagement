import { Component, Input, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Output() ratingChanged: EventEmitter<number> = new EventEmitter<number>();
  divWidth: number = 100;
  constructor() {

  }
  ngOnInit() {
   // this.divWidth = this.rating * (70 / 5);
  }

  ngOnChanges(){
    this.divWidth = this.rating * (70 / 5);
  }
  updateStarRating(): void {
    const newRating: number = parseInt(prompt("provide updated rating:", this.rating.toString()));
    this.ratingChanged.emit(newRating);
    console.log(newRating);
  }


}
