import { Component, OnInit } from '@angular/core';
import { Observable, timer, EMPTY, of, from, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cursorPosition$?: Observable<{ x: number, y: number }>;

  ngOnInit(): void {
    this.cursorPosition$ = fromEvent<MouseEvent>(window, 'mousemove')
      .pipe(
        map((event) => ({ x: event.clientX, y: event.clientY }))
      );
  }
}
