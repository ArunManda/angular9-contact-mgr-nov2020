import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  @Input() age = '20'; // @input() makes age as custom property-- so that custom property binding can do..
  constructor() { }

  ngOnInit(): void {
  }

}
