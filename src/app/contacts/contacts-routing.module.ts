import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';


// configur routes
const routes: Routes = [
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent },
      { path: 'add', component: AddContactComponent },
      { path: ':id', component: ContactDetailsComponent } // id is the URL parameter
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registering routes
  ],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
