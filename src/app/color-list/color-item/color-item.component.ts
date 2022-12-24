import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.css']
})
export class ColorItemComponent implements OnInit {

  @Input() receivedColor: string ='';

  @Output() removeEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  remove(color: string){
    // here we do not remove the color from the array 
    // because the array is not present here, it is present in the parent component

    // so we emit htis event to the parent component and the parent component will remove the color from the array
    // while emitting this event we will pass the color to the parent component

    // emitting is done with EventEmitters

    this.removeEmitter.emit(color); // in this line the event is emitted to the parent component
  }
}
