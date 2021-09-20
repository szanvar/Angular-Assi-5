import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  name : string = "Hello from First component";
  constructor() { }

  ngOnInit(): void {
  }

}
