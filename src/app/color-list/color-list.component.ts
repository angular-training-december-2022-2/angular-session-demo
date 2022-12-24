import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  allColors: string[] = ["RED", "BLUE", "GREEN"];

  constructor() { }

  ngOnInit(): void {
  }

  removeColor($event: any){
    // here we remove the color from the array allColors
    this.allColors.splice(this.allColors.indexOf($event), 1);
  }
}
