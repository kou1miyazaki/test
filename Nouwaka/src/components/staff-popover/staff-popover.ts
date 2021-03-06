import { Component } from '@angular/core';

/**
 * Generated class for the StaffPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'staff-popover',
  templateUrl: 'staff-popover.html'
})
export class StaffPopoverComponent {

  searchQuery: string = '';
  items: string[];

  constructor() {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
    ];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
