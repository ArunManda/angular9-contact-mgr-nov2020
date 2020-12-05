import { Injectable } from '@angular/core';
// making the class as model by implementing interface
// model is the schema for the frontend

export interface IContact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

// facilitates dependency injectable
@Injectable({
  providedIn: 'root'
})

export class Contact implements IContact {

  id: number;
  name: string;
  phone: string;
  email: string;

  // util methods can come here
}
