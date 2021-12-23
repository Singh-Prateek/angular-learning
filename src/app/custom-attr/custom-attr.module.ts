import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericTextboxDirective } from './numeric-textbox.directive';
import { AttrDemoComponent } from './attr-demo/attr-demo.component';


@NgModule({
  declarations: [
    NumericTextboxDirective,
    AttrDemoComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumericTextboxDirective,
    AttrDemoComponent
  ]
})
export class CustomAttrModule { }
