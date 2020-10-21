import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    const config = {
      apiKey: "AIzaSyBhZ_VypwhzWyHjQglwmxIx2BYK2yj-1m0",
      authDomain: "facture-it.firebaseapp.com",
      databaseURL: "https://facture-it.firebaseio.com",
      projectId: "facture-it",
      storageBucket: "facture-it.appspot.com",
      messagingSenderId: "723908828305",
      appId: "1:723908828305:web:bd0e7a54ade76f3040f330"
    };
    firebase.initializeApp(config);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
