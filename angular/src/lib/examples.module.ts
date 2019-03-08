import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AlertExamplesModule } from './alert/examples/examples.module';
import { BadgeExamplesModule } from './badge/examples/examples.module';
import { ButtonExamplesModule } from './button/examples/examples.module';
import { CheckboxExamplesModule } from './checkbox/examples/examples.module';
import { RadioExamplesModule } from './radio/examples/examples.module';
import { InputExamplesModule } from './input/examples/examples.module';
import { SelectExamplesModule } from './select/examples/select-examples.module';
import { ListExamplesModule } from './list/examples/list-examples.module';
import { ListItemExamplesModule } from './list-item/examples/list-item-examples.module';

@NgModule({
  imports: [
    AlertExamplesModule,
    BadgeExamplesModule,
    ButtonExamplesModule,
    CheckboxExamplesModule,
    RadioExamplesModule,
    InputExamplesModule,
    SelectExamplesModule,
    ListExamplesModule,
    ListItemExamplesModule,
  ],
  exports: [
    AlertExamplesModule,
    BadgeExamplesModule,
    ButtonExamplesModule,
    CheckboxExamplesModule,
    RadioExamplesModule,
    InputExamplesModule,
    SelectExamplesModule,
    ListExamplesModule,
    ListItemExamplesModule
  ],
  declarations: [],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class ExamplesModule { }
