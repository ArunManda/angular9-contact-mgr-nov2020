import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactsComponent } from './components/contacts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AddContactComponent,
    ContactDetailsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class ContactsModule { }
