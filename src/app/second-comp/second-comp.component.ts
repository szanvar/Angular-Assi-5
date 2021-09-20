import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {

  name : string = "Hello from Second component";
  display() : string
  {
     return this.name;
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
