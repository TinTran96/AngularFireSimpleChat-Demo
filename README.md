# AngularFireChat
Angular 4 app using AngularFire2 connect to Firebase Cloud Storage (Beta) to get data to page.

[AngularFire2 v5.0.0 on GitHub](https://github.com/angular/angularfire2).

### Setup Firebase guide
1. Go to [FireBase](https://firebase.google.com/) create Account and Project.
2. Select "Add firebase to your web app" to get the config information.

### Install guide:
Go to **src\app** edit **app.module.ts** with the firebase project config information

    var firebaseConfig = {
      apiKey: "AIzaSyAd4t6ThuoE91L6ZTNbEqTwj0unSKzqZcE",
      authDomain: "angularfirebase-6ac2e.firebaseapp.com",
      databaseURL: "https://angularfirebase-6ac2e.firebaseio.com",
      projectId: "angularfirebase-6ac2e",
      storageBucket: "angularfirebase-6ac2e.appspot.com",
      messagingSenderId: "843294637474"
    };

open cmd run

    npm install
    
then    

    ng serve --open
