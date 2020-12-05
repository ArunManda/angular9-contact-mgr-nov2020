import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

// this is an attribute directive
// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { // Dependency Injection

    console.log(`Inside constructor of colorizer of colorizerDirective`);
    console.log(this.elRef.nativeElement);

    // changing the background color using js
    const el = this.elRef.nativeElement;
    // el.style.backgroundColor = 'cyan';
    // el.style.color = 'red';

    this.renderer.setStyle(el, 'backgroundColor', 'lightblue');
    this.renderer.setStyle(el, 'color', 'red');
    // increase the height of the div by using setstyle
    this.renderer.setStyle(el, 'height', '200px');

    // create a <p> element and have a text 'success' inside. append the <p> element into the div
    const p = this.renderer.createElement('p');
    const text = this.renderer.createText('Success');
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(el, p);
  }

}
