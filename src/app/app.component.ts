import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>Understanding Async Pipe</h1>
    <p>{{value$ | async}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value$: Observable<any>;

  constructor() {
    this.value$ = new Observable((observer) => {
      setInterval(() => {
        const date = new Date();
        const estTime = date.toLocaleString('en-US',
          {
            timeZone: 'America/New_York',
            dateStyle: 'full',
            timeStyle: 'full'
          });
        observer.next(estTime);
      }, 1000);
    });
  }
}
