import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>Understanding Async Pipe</h1>
    <p>{{resolvePromise$ | async}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resolvePromise$: Promise<string>;

  constructor() {
    this.resolvePromise$ = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise executed');
      }, 2000);
    });
  }
}
