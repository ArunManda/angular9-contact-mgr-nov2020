import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-menu >
        <li class="nav-item footer">
         <a class="nav-link" routerLink="/">Back to Top</a>
        </li>
      </app-menu>
      <p class="redText">Copyright 2020 | Arun Manda</p>
      <p class="greenText">Happy to develop during training in Nov 2020</p>
    </div>
  `,
  styles: [
    `
      .greenText {
        color: teal;
        font-size: 15px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
