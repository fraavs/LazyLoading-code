import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable = new Observable<number>((observer) => {
    let count = 0;

    const interval = setInterval(() => {
      observer.next(count++);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Interval Cleared...');
    }

  });
  constructor() {
    const obs = this.observable.subscribe((data) => {
      console.log("Data: ", data);
    });

    setTimeout(() => {
      obs.unsubscribe();
      console.log('Unsubscribed');
    }, 5000);
  }
}
