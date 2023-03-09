import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  myName: string;
  constructor() { 
    this.myName = 'Karina';
  }
  ngOnInit() {
  }

  
}