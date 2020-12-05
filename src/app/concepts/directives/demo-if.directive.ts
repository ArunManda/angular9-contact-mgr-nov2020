import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDemoIf]'
})
export class DemoIfDirective {

  constructor( private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<object>) {
    console.log(this.viewContainerRef); // Directive
    console.log(this.templateRef); // private

    const isAuth = false;

    if (isAuth) {
      // if true- the para would be inside the div
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
      // if not true- the div would not have anything inside
    }
  }
}
