import { Component, OnInit } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  myName: string;
  counter: number;
  constructor() { 
  this.myName = 'Karina';
  this.counter = 0;
  }

  ngOnInit() {
  }

}
