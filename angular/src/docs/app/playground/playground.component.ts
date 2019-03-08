import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-playground',
  template: `
    <div className="row">
      <div className="example-spacing">
        <example-select-default></example-select-default>
      </div>
    </div>
  `,
})
export class PlaygroundComponent implements OnInit {

  ngOnInit() {}

}
