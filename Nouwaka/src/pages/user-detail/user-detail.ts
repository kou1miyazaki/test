import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tabs, Events } from 'ionic-angular';
/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})

export class UserDetailPage {
  public idItem;
  constructor(public navCtrl: NavController, public navParams: NavParams,events: Events) {
    this.idItem = navParams.get("idItem");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }
}
