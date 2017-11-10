import { Component, } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular/index';
/**
 * Generated class for the FilterBySeriesPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filter-by-series-popover',
  templateUrl: 'filter-by-series-popover.html'
})
export class FilterBySeriesPopoverComponent {
callback:any;
  text: string;

  constructor(private params:NavParams,private viewCtrl: ViewController) {
    console.log('Hello FilterBySeriesPopoverComponent Component');
    this.text = 'Hello World';
    this.callback = this.params.get('cbb');
   // debugger;
    console.log(this.callback);
  }
  goToDetails(item){
    this.viewCtrl.dismiss(item)
   }
}
