import { Contact } from './../models/contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root' // singleton(object can be used once)
})

export class ContactService {

  private REST_API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // Create Contact
  createContact(contactFormData: Contact): Promise<Contact> | Promise<any> { // 1. get the data from the component ts
    console.log(contactFormData);

    const createContactPromise = new Promise((resolve, reject) => {
      this.http.post(this.REST_API_URL, contactFormData)
        .toPromise()
        .then((res: Contact) => {
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log('It is over!');
        });
    });
    return createContactPromise as Promise<Contact> | Promise<any>;
  }

   // Listing all contacts
  getContacts(): Observable<Contact[]> {
    console.log('Inside Service');
    // 2. send the data to the rest api backend
    // 2.1 what is the rest api backend - https://jsonplaceholder.typicode.com/users
    // 2.2 what is the http method
    // 2.3 tool to use to sent
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: Contact[]) => { // 3. get the response from the rest api backend
        console.log(res);
        // filter, convert, merge, sort,
        return res; // 4. send it back to the component.ts
      }));
  }

  // contact Details by Id
  getContactById(id: string): Observable<Contact> {
    return this.http.get(this.REST_API_URL + '/' + id)
      .pipe(map((res: Contact) => {
        console.log(res);
        return res;
      }));
  }

  // Update Contact
  updateContact(contactData: Contact): Observable<Contact> {
    const URL = this.REST_API_URL + '/' + contactData.id;
    return this.http.put(URL, contactData)
      .pipe(map((res: Contact) => {
        console.log(res);
        return res;
      }));
  }

  // Delete Contact
  deleteContact(id: number): Observable<Contact> {
    const URL = this.REST_API_URL + '/' + id;
    return this.http.delete(URL)
      .pipe(map((res: Contact) => {
        console.log(res);
        return res;
      }));
  }
}
