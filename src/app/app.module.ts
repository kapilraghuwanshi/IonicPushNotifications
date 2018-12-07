import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Firebase } from '@ionic-native/firebase/ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseProviderService } from './firebase-provider.service';

var firebaseConfig = {
  apiKey: "AIzaSyDIYe0QIUd-kfTdWnlUlF5r6GuNKMh28_k",
  authDomain: "fcmpushnotifs.firebaseapp.com",
  databaseURL: "https://fcmpushnotifs.firebaseio.com",
  projectId: "fcmpushnotifs",
  storageBucket: "fcmpushnotifs.appspot.com",
  messagingSenderId: "67846339869"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Firebase,
    FirebaseProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
