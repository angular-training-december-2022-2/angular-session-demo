import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  msgToChild: string = '';
  valueMsg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sending(){
    this.msgToChild = this.valueMsg;
  }
}
