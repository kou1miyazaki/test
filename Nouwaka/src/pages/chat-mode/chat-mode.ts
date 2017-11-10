import { WalkThroughPage } from './../walkthrough/walkthrough';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SpeicifyingPeriodComponent } from './../../components/speicifying-period/speicifying-period';
/**
 * Generated class for the ChatModePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({  
  selector: 'page-chat-mode',
  templateUrl: 'chat-mode.html',
}) 
export class ChatModePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatModePage');
  }

  showWalkthroughModal() {
    let walkthroughPage = this.modalCtrl.create(WalkThroughPage);
    walkthroughPage.present();
  } 
  showSpecifyingPeriod() {
    let specifyingPeriod = this.modalCtrl.create(SpeicifyingPeriodComponent);
    specifyingPeriod.present();
  }
}
