import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { PlayingContentPage } from '../playing-content/playing-content';
import { PopoverController } from 'ionic-angular';
import { DeletingUserRegistrationPopoverComponent } from './../../components/deleting-user-registration-popover/deleting-user-registration-popover';
/**
 * Generated class for the ContentsCommentaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contents-commentary',
  templateUrl: 'contents-commentary.html',
})
export class ContentsCommentaryPage {

  tabBarElement: any;
  pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.pushPage = PlayingContentPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentsCommentaryPage');
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(DeletingUserRegistrationPopoverComponent, { cssClass: 'custom-popover' });
    popover.present({
      ev: ev
    });
  }
}
