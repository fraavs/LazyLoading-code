import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable = new Observable((observer) => {
    observer.next('Hello');
  }).subscribe({
    next(value) {
      console.log('Received value : ', value);
    },
    error(err) {
      console.log('Error : ', err);
    },
    complete() {
      console.log('Observable completed ...')
    }
  });
}
