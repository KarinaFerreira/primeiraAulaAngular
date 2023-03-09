import { Component, OnInit } from '@angular/core';
import { MeComponent } from '../me/me.component';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [MeComponent],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { 

  }
  ngOnInit() {
  }

  name = 'my-app';
  
  timer = setInterval(()=>{
    this.counter = this.counter +1;
  }, 1000);
  counter: number = 0;

  getSeconds(){
    return Math.trunc(this.counter % 60);
  }

  getMinutes(){
    return Math.trunc(this.counter/60);
  }
}