import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile:any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        console.log(user);
        this.userProfile = user;
      } else {
        console.log("There's no user here");
      }
    });
  }
  googleLogin():void {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider).then( () => {
      firebase.auth().getRedirectResult().then( result => {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token, user);
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error.message);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
