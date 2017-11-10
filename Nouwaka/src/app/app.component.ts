
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { WalkThroughPage } from '../pages/walkthrough/walkthrough';
import { Events } from 'ionic-angular';
import { UserDetailPage } from '../pages/user-detail/user-detail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< .mine
  rootPage: any ;
||||||| .r246
  rootPage: any = TabsPage;
=======
  rootPage: any;
>>>>>>> .r253

  constructor(private nativeStorage: NativeStorage,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.nativeStorage.getItem('token').then(
        data => {
          if (data) {
            console.log('1');
            this.rootPage = TabsPage;
          } else {
            console.log('2');
            this.rootPage = LoginPage;
          }
        },error =>{
          console.log('err'+error);
          this.rootPage = LoginPage;
        } 
      );
    });
  }
}


