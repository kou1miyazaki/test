import { Component } from '@angular/core';

/**
 * Generated class for the FacilityPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'facility-popover',
  templateUrl: 'facility-popover.html'
})
export class FacilityPopoverComponent {

  text: string;

  constructor() {
    console.log('Hello FacilityPopoverComponent Component');
    this.text = 'Hello World';
  }

}
