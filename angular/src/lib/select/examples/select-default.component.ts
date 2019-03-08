import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-select-default',
  template: `
    <div class="medium-8 columns">
      <cui-select defaultValue="Select an option" (select)="onSelect($event)">
        <div cui-select-option class="select-option-custom-class" label="first option"></div>
        <div cui-select-option label="second option"></div>
      </cui-select>
  </div>
  `,
  styles: []
})
export class ExampleSelectDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onSelect (event) {
    console.log('custom onSelect is working');
  }

}
