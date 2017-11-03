# AngularFire SimpleChat App
Angular 4 app using AngularFire2 connect to Firebase Cloud Storage (Beta) to get data to page.

[Demo Here](https://angularfirebase-6ac2e.firebaseapp.com/).

[AngularFire2 v5.0.0 on GitHub](https://github.com/angular/angularfire2).

### Setup Firebase guide
1. Go to [FireBase](https://firebase.google.com/) create Account and Project.
2. Select **Add firebase to your web ap** to get the config information.
![Image of Firebase Config Information](https://github.com/TinTran96/AngularFireChat-Demo/blob/master/guide/1.JPG?raw=true)
3. Go to **Authentication**, choose tab **Sign-in method** enable Google Login
![Image of Firebase Config Information](https://github.com/TinTran96/AngularFireChat-Demo/blob/master/guide/2.JPG?raw=true)
4. Then go to **Database**, choose **Try firestore beta**, select **Start in test mode** then **Enable**.
![Image of Firebase Config Information](https://github.com/TinTran96/AngularFireChat-Demo/blob/master/guide/3.JPG?raw=true)


### Install guide:
First we need to install [Angular CLI](https://angular.io/guide/quickstart).

    npm install -g @angular/cli

Go to **src\app** edit **app.module.ts** with the firebase project config information

    var firebaseConfig = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };

open cmd run

    npm install
    
then    

    ng serve --open
