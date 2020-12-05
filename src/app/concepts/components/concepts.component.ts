import { CebComponent } from './ceb/ceb.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [

    `
    .brownText {
      color: brown
    }
    `
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit{

  // string interpolation
  appName = 'Contact Manager App!';
  noOfDevelopers = 10;

  // property binding
  averageExp = 2;

  // for ngStyle
  myStyles: any = {
    backgroundColor: 'yellow',
    color: 'black'
  };

  // two way binding
  courseName = 'angular';

  dataReceivedFromChildComp: string;

  // ngSwitch related
  superhero = 'Hulk';

  // if static true-- the data would be available in ngoninit lifecycle hook
  @ViewChild(CebComponent, { static: true }) cebData: CebComponent;
  // if static false-- the data would be available in ngAfterViewInIt lifecycle hook

  // ngIf related
  isLoggedIn = true;

  // ngfor related
  skillList: string[] = [
    'HTML', 'CSS', 'JS'
  ];

  constructor() {
    console.log('Inside Constructor');
   }

  ngOnInit(): void {
    console.log('Inside ngOnInIt');
    console.log(this.cebData);
  }

  ngAfterViewInit(): void {
    console.log('Inside ngAfterViewInIt');
    console.log(this.cebData);
  }

  // event binding related
  clickMeHandler(event: any): void {
    console.log(event);
    event.target.innerHTML = 'Clicked';
    event.target.disabled = true;
  }

  setSaving(element: any, text: string): void {
    element.target.textContent = text;
    element.disabled = true;
  }

  profileLoadedHandler(event: any): void {
    // step:5 Display data in somewhere in the parent component
    alert('inside parent comp');
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }
}
