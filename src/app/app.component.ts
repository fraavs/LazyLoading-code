import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>Understanding Async Pipe</h1>
    <p>Value from Observable: {{value$ | async}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value$: Observable<number>;

  constructor(){
    this.value$ = new Observable((observer)=> {
      setTimeout(()=>{
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
      }, 2000);
    });
  }
}
