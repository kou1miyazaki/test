import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { SettingPage } from '../setting/setting';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  openFilters() {
    debugger;
    console.log("hello");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
 
}
