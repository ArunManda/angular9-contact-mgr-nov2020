import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // step:1 Create custom event
    // 1.1 Create a variable of EmitterEvent as class
  @Output() profileLoaded = new EventEmitter(); // 1.2 Make the object as custom event -- @output makes it custom event

    // 1.2 Make the variable as custom event

  personName = 'ArunManda';

  constructor() {
    console.log('Inside CebComponent constructor');
  }

  ngOnInit(): void {
    console.log('Inside CebComponent ngOnInit');
  }

  onLoadProfile(event: any): void {
    event.target.innerText = 'Loading Profile..';
    // Mocking an AJAX call
    setTimeout( () => {
      console.log('Data sent to parent comp is: ArunManda');
      event.target.innerText = 'Loaded Profile..';
      // step:2 Emit that custom event through program
      this.profileLoaded.emit(this.personName); // step:3 Send data along with the emitted event, send data to parent component
      // refer this comp's html for step 4 of CEB
    }, 5000);
  }
}
