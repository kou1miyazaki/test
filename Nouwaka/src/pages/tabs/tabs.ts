import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { UserListPage } from '../user-list/user-list';
import { PlayListPage } from '../play-list/play-list';
import { ChatModePage } from '../chat-mode/chat-mode';
import { SettingPage } from '../setting/setting';
import { SpeicifyingPeriodComponent } from './../../components/speicifying-period/speicifying-period';
import { ContentsCommentaryPage } from '../contents-commentary/contents-commentary';
import { RegisterUserComponent } from './../../components/Register-User/Register-User';
import { UserDetailPage } from '../user-detail/user-detail';

import { Events } from 'ionic-angular';
/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //active_background:string = 'url("../assets/image/NowakaButton/active_button.png") no-repeat center';
  active_background: string = '#89BA2A';
  rootPage : any;
  //deactive_background: string = 'url("../assets/image/NowakaButton/deactive_button.png") no-repeat center';
  deactive_background: string = '#979797';
  chatpage : string;
  playlistpage : string;
  userlistpage : string;
  disable : string;
  token: string;
  
  constructor(public navCtrl: NavController, public events: Events,public nativeStorage: NativeStorage) {
    this.nativeStorage.getItem('token').then((val) => {
      this.token = val;
    });
    this.rootPage = ChatModePage;
    this.chatpage = this.active_background;
    this.playlistpage = this.deactive_background;
    this.userlistpage = this.deactive_background;
    this.disable = "chat";

    events.subscribe('changeContentsCommentaryIntoRootPage', () => {
      this.contentsCommentaryPage();
    });

    events.subscribe('changeUserDetailIntoRootPage', (item) => {
      //debugger;
      console.log(item);
      this.userDetailPage(item);
    });
  }
  chatPage() {
    if(this.disable != 'chat'){
      this.rootPage = ChatModePage;
      this.chatpage = this.active_background;
      this.playlistpage = this.deactive_background;
      this.userlistpage = this.deactive_background;
      this.disable = "chat";
    }
  }
  playlistPage() {
    if(this.disable != 'playlist'){
      this.rootPage = PlayListPage;
      this.playlistpage = this.active_background;
      this.userlistpage = this.deactive_background;
      this.chatpage = this.deactive_background;
      this.disable = "playlist";
      console.log(this.token);
    }
  }
  userlistPage() {
    if(this.disable != 'userlist'){
      this.rootPage = UserListPage;
      this.userlistpage = this.active_background;
      this.chatpage = this.deactive_background;
      this.playlistpage = this.deactive_background;
      this.disable = "userlist";
    }
  }
  settingPage() {
    this.navCtrl.push(SettingPage);
  }
  contentsCommentaryPage() {
    this.navCtrl.push(ContentsCommentaryPage);
  }

  userDetailPage(item) {
    this.navCtrl.push(UserDetailPage,{
      idItem:item
    });
    
  }
}
