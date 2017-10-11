import { Component } from '@angular/core';

/**
 * Generated class for the TopNavComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'top-nav',
  templateUrl: 'top-nav.html'
})
export class TopNavComponent {

  text: string;

  constructor() {
    console.log('Hello TopNavComponent Component');
    this.text = 'Hello World';
  }

}
