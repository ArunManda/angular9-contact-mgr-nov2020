import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // have one variable to hold cartItems -- an array
  private currentCartItems: any[] = [
    {
      id: 2,
      name: 'Butter',
      category: 'Dairy',
      price: '$10',
      imageUrl: 'https://image.shutterstock.com/image-photo/piece-cheese-isolated-on-white-260nw-1416372146.jpg'
    }
  ];

  // step 1: create behaviour subject with default value for making it observable
  private cartItemList = new BehaviorSubject<any[]>(this.currentCartItems);

  // step 2: Make the cartItemsList as observable
  // create observable for  the above behavioursubject
  // so that any comp can sub to it
  latestCartItems: Observable<any[]> = this.cartItemList.asObservable(); // latestCartItems will be updated here

  constructor() { }

  updateCart(product: any): void {
    console.log(product);
    // send the above product to the backend to get it saved within cart.
    // handle success and error
    // if success do the following
    // keep the exisiting items and add one more into it
    this.latestCartItems.pipe(take(1)).subscribe( val => {
      console.log(val);
      console.log(...val); // spread operator
      const newArr = [...val, product];
      console.log(newArr);
      this.cartItemList.next(newArr);
    });

    // if error
    // return the error from here so as to display toast message from the comp
  }
}
