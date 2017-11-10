import { Component } from '@angular/core';

/**
 * Generated class for the UserSortingOrderPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-sorting-order-popover',
  templateUrl: 'user-sorting-order-popover.html'
})
export class UserSortingOrderPopoverComponent {

  text: string;

  constructor() {
    console.log('Hello UserSortingOrderPopoverComponent Component');
    this.text = 'Hello World';
  }

}
