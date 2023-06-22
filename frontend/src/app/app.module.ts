import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/chat' },
  { path: 'chat', component: ChatComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ContactsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
