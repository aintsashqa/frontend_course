import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { EmptyComponent } from './components/contacts-table/empty/empty.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    NavigationComponent,
    ContactsTableComponent,
    EmptyComponent,
    ContactEditComponent,
    AddContactComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
