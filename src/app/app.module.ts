import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Setting firebase key config
var firebaseConfig = {
  apiKey: "AIzaSyAd4t6ThuoE91L6ZTNbEqTwj0unSKzqZcE",
  authDomain: "angularfirebase-6ac2e.firebaseapp.com",
  databaseURL: "https://angularfirebase-6ac2e.firebaseio.com",
  projectId: "angularfirebase-6ac2e",
  storageBucket: "angularfirebase-6ac2e.appspot.com",
  messagingSenderId: "843294637474"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
