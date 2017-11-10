import { Component } from '@angular/core';

/**
 * Generated class for the DeletingUserRegistrationPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'deleting-user-registration-popover',
  templateUrl: 'deleting-user-registration-popover.html'
})
export class DeletingUserRegistrationPopoverComponent {

  text: string;

  constructor() {
    console.log('Hello DeletingUserRegistrationPopoverComponent Component');
    this.text = 'Hello World';
  }

}
