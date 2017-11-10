import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular/index';
/**
 * Generated class for the FilterByYamatoLanguageTagPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filter-by-yamato-language-tag-popover',
  templateUrl: 'filter-by-yamato-language-tag-popover.html'

})
export class FilterByYamatoLanguageTagPopoverComponent {
callbackTags:any;
  text: string;

  constructor(private params:NavParams,private viewCtrl: ViewController) {
    console.log('Hello FilterByYamatoLanguageTagPopoverComponent Component');
    this.text = 'Hello World';
    this.callbackTags = this.params.get('cba');
    //debugger;
    console.log(this.callbackTags);
  }
  goToDetails(item){
   this.viewCtrl.dismiss(item)
  }
}
