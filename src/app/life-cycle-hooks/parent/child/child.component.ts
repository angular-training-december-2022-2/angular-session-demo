import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NavigationCancellationCode } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, 
                                        OnChanges, 
                                        OnDestroy, 
                                        DoCheck, 
                                        AfterViewInit,
                                        AfterViewChecked,
                                        AfterContentInit,
                                        AfterContentChecked {

  @Input() msgFromParent: string = 'initial value';

  constructor() {
    console.log('child constructor called...');
  }

  ngAfterContentChecked(): void {
    console.log('child ngAfterContentChecked called...');
  }

  ngAfterContentInit(): void {
    console.log('child ngAfterContentInit called...');
  }

  ngAfterViewChecked(): void {
    console.log('child ngAfterViewChecked called...');
  }

  ngAfterViewInit(): void {
    console.log('child ngAfterViewInit called...');
  }

  ngDoCheck(): void {
    console.log('child ngDoCheck called...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child ngOnChanges called...');
  }

  ngOnInit(): void {
    console.log('child ngOnInit called...');
  }

  ngOnDestroy(): void {
    console.log('child ngOnDestroy called...');
  }

}
