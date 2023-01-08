import { Component, OnInit } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  // 1. create an observable object
  // when we work we work HttpClient we will not create Observables
  observable: Observable<string> = new Observable((observer)=>{
    // observer.next("A");
    // observer.next("B");
    // observer.next("C");
    // observer.next("D");
    // observer.next("E");
    setTimeout(()=>observer.next("A"), 1000);
    setTimeout(()=>observer.next("B"), 2000);
    setTimeout(()=>observer.next("C"), 3000);

    // an error occurred suddenenly here
    //setTimeout(()=>observer.error(new Error("Oops! Something went wrong!")), 4000);
    setTimeout(()=>observer.next("D"), 4000);
    setTimeout(()=>observer.next("E"), 5000);
    setTimeout(()=>observer.complete(), 5000);

  });

  // 2. other ways to create Observable object
  allData: string[] = ["RED", "BLUE", "GREEN"];
  observable1: Observable<any> = of(this.allData, 45, "Hello");

  // 3. other ways to create Observable object
  observable2: Observable<string> = from(this.allData);

  // 4. using map operator from rxjs
  observable3: Observable<string> = from(this.allData).pipe<string>(map((data)=>data.toLowerCase()));

  // 5. using filter operator from rxjs
  observable4: Observable<string> = from(this.allData).pipe<string>(filter((data)=>data.startsWith("B")));

  constructor() { }

  ngOnInit(): void {
  }

  start(){
    // here once the button is clicked in the template we want to start the subscription
    // this.observable.subscribe((value)=>{
    //   console.log(value);
    // })

    this.observable4.subscribe({
      next: (value)=> { console.log(value) },
      error: (err)=> { console.log(err.message) },
      complete: ()=> { console.log("streaming completed...")}
    })
  }

}
