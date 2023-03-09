import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  standalone: true,
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  myName: string;
  constructor() { 
  this.myName = 'Karina';
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