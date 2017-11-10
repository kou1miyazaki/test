import { Component, } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular/index';
/**
 * Generated class for the ContentsSortingOrderPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contents-sorting-order-popover',
  templateUrl: 'contents-sorting-order-popover.html'
})
export class ContentsSortingOrderPopoverComponent {
  arrayOfText:[string];
  text: string;
  idText:any;
  constructor(private viewCtrl: ViewController) {
    console.log('Hello ContentsSortingOrderPopoverComponent Component');
    this.text = 'Hello World';
    this.arrayOfText = ["新着順","人気順","レベル順"];
  }
  goToDetails(id){
    if(id == "新着順"){
      this.idText = 1
    } 
    else if (id == "人気順"){
      this.idText = 2
    }
    else{
      this.idText = 3
    }
    this.viewCtrl.dismiss(this.idText)
  }
}

