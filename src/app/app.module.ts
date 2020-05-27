import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import firebaseConfig from './firebase'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
/*import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';*/

/*export const firebaseConfig = {
  apiKey: 'AIzaSyCvFrTeqFgmHzQaZzlQz8YPJgtT7clJ1Z4',
  authDomain: 'move-on-1c40b.firebaseapp.com',
  databaseURL: 'https://move-on-1c40b.firebaseio.com',
  projectId: 'move-on-1c40b',
  storageBucket: 'move-on-1c40b.appspot.com',
  messagingSenderId: '402501752619',
  appId: '1:402501752619:web:1716d88b81558759c0976e'
};*/

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
    /*AngularFireDatabaseModule,
    AngularFireStorageModule*/
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
