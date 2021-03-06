import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericTextboxDirective } from './numeric-textbox.directive';
import { AttrDemoComponent } from './attr-demo/attr-demo.component';
import { DisableAfterClickDirective } from './disable-after-click.directive';


@NgModule({
  declarations: [
    NumericTextboxDirective,
    AttrDemoComponent,
    DisableAfterClickDirective¬†
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
