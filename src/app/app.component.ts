import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>Understanding Async Pipe</h1>
    <p *ngFor="let v of value$ | async">{{v}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value$: Observable<number[]>;

  constructor() {
    this.value$ = new Observable<number[]>((observer) => {
      setTimeout(()=>{
        observer.next([1, 2, 3, 4, 5]);
        observer.complete();
      }, 1000);
    });
  }
}
