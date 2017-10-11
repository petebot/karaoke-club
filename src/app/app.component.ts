import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;
  profilepages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    firebase.initializeApp({
      apiKey: "AIzaSyB8h9djJnD41GdbKc3M7uJtSEie0okOq7w",
      authDomain: "karaoke-club.firebaseapp.com",
      databaseURL: "https://karaoke-club.firebaseio.com",
      projectId: "karaoke-club",
      storageBucket: "gs://karaoke-club.appspot.com",
      messagingSenderId: "945722074491",
    });
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token, user);
      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
      console.log(errorMessage);
    });



    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: ProfilePage },
      { title: 'Song Book', component: TabsPage },
      { title: 'Log Out', component: TabsPage }
    ];

    this.profilepages = [
      { title: 'hmmm', component: TabsPage }
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
