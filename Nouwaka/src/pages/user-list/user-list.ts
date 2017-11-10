import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { StaffPopoverComponent } from './../../components/staff-popover/staff-popover';
import { FacilityPopoverComponent } from './../../components/facility-popover/facility-popover';
import { UserSortingOrderPopoverComponent } from './../../components/user-sorting-order-popover/user-sorting-order-popover';

import { UserDetailPage } from '../user-detail/user-detail';
import { Events } from 'ionic-angular';
import { RegisterUserComponent } from './../../components/Register-User/Register-User';
import { ModalController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  callEvent: Events;
  items : any;
  imgList:any;
  arraySearch:any;
  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams, public popoverCtrl: PopoverController, public modalCtrl: ModalController, public events: Events) {
    this.initializeItems();
    this.callEvent = events;
  }
  // set up item
  initializeItems() {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBZ3JlZW1lbnRJZCI6MSwiUmVwcmVzZW50YXRpdmVGbGciOjEsIklkIjoxfQ.ir2j7643em3L0GKEq2nH45FXHqCrSbD9owlliwI4OgA",
    });
   
    let options = new RequestOptions({
      headers: headers
    });

    this.http.get("http://nouwaka-api01k.azurewebsites.net/api/users",options).map(res => res.json()).subscribe(data => { 
      console.log(data);
      this.items = data.item;
      this.arraySearch = this.items;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }

  presentPopoverStaff(ev) {
    let popover = this.popoverCtrl.create(StaffPopoverComponent, { cssClass: 'custom-staff-popover' });
    popover.present({
      ev: ev
    });
  }

  presentPopoverFacility(ev) {
    let popover = this.popoverCtrl.create(FacilityPopoverComponent, { cssClass: 'custom-facility-popover' });
    popover.present({
      ev: ev
    });
  }

  presentPopoverUserSort(ev) {
    let popover = this.popoverCtrl.create(UserSortingOrderPopoverComponent, { cssClass: 'custom-userSort-popover' });
    popover.present({
      ev: ev
    });
  }

  goToUserDetailPage(item) {
    this.callEvent.publish('changeUserDetailIntoRootPage',item);
    console.log(item)
  }

  showUser() {
  
  let specifyingPeriod = this.modalCtrl.create(RegisterUserComponent);
  specifyingPeriod.present();
  }
  // search item
  getItems(ev: any) {
    // Reset items back to all of the items
   // this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    //debugger;
    if (val && val.trim() != '') {
     // debugger;
      this.arraySearch = this.items.filter((item) => {
        return (item.UserName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.arraySearch = this.items;
    }
  }
}
