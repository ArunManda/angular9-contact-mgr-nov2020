import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  randomText = 'something to convert';

  today = new Date();

  dummyText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eligendi corrupti dolore suscipit molestias ullam? ';

  constructor() { }

  ngOnInit(): void {
  }

}
