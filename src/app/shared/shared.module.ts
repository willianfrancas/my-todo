import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlFieldErrorComponent } from './control-field-error/control-field-error.component';



@NgModule({
  declarations: [
    ControlFieldErrorComponent,
  ],
  exports: [
    ControlFieldErrorComponent,
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
