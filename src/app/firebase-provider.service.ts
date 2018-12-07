import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

@Injectable({
  providedIn: 'root'
})
export class FirebaseProviderService {

  constructor(public firebaseNative: Firebase, public afs: AngularFirestore, private platform: Platform) {

  }

  // Get permission from the user
  async getToken() {
    let token;
    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken();
      console.log('token in android - ' + token);
    }
    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    }
    if (this.platform.is('cordova')) {
      // diff for web PWA
      console.log('Inside browser platform in firebase-service');
    }

    return this.saveTokenToFirestore(token);
  }

  // Save the token to firestore
  private saveTokenToFirestore(token) {
    if (!token) {
      return;
    }
    const devicesCollection = this.afs.collection('devices');
    const docData = {
      token,
      userId: 'testUserId', // hardcoded for one id - user unique authId
    };
    return devicesCollection.doc(token).set(docData);
  }

  // Listen to incoming FCM messages
  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen();
    // diff for web PWA
  }

  onTokenRefresh() {

  }

}
