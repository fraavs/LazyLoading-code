import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fetchData: string = '';
  isLoading: boolean = true;

  ngOnInit(): void {
    timer(3000).subscribe(() => {
      this.isLoading = false;
      this.fetchData = 'Timer function executed ...';
    })

  }
}
