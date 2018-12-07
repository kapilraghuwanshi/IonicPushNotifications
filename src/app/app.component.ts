import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FirebaseProviderService } from '../../src/app/firebase-provider.service';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform, private splashScreen: SplashScreen,
    private statusBar: StatusBar, private fcm: FirebaseProviderService, private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Get a FCM token
      this.fcm.getToken();
      // Listen to incoming messages
      this.fcm.listenToNotifications().pipe(
        tap(msg => {
          console.log("message" + msg.body);
        })).subscribe();
    })
    // this.fcm.onTokenRefresh().subscribe((token: string) => console.log(`Got a new token ${token}`));
  }
}
