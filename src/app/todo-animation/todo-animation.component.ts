import { style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-animation',
  templateUrl: './todo-animation.component.html',
  styleUrls: ['./todo-animation.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({backgroundColor: 'yellow', opacity: 0}),
        animate(2000, style({backgroundColor: 'transparent', opacity: 1}))
      ]),
      transition('* => void', [
        style({backgroundColor: 'transparent', opacity: 1}),
        animate(2000, style({backgroundColor: 'pink', opacity: 0}))
      ])
    ])
  ]
})
export class TodoAnimationComponent implements OnInit {

  work: string = '';
  toDoList: string[] = ['Call a Friend', 'Fill Gas', 'Clean the car'];

  constructor() { }

  ngOnInit(): void {
  }

  addToList(){
    this.toDoList.splice(0, 0, this.work); // this will add the work on the top of the array
    this.work = '';
  }

  removeFromList(eachWork: string){
    this.toDoList.splice(this.toDoList.indexOf(eachWork), 1);

  }
}
