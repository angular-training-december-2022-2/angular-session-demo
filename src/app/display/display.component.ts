import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  message: string = 'Welcome All!!';
  movieName: string = '';
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  showMovieName(){
    this.movieName = 'Avengers: End Game';
  }

  incrementCounter(){
    this.counter++;
  }

  decrementCounter(){
    this.counter--;
  }

}
