import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: 'input[numeric-textbox]',
    standalone: true
})
export class NumericTextboxDirective {

  readonly numRegex = /^\d+$/;
  constructor() { }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (!this.numRegex.test(event.key)) {
      this.setoutline();
      event.preventDefault();
    }
  }

  @HostBinding('style.outline') outline = 'inherit';
  
  setoutline(){
    this.outline = ".15em solid #FF9494";
    this.resetOutline();
  }
  
    resetOutline(){
      setTimeout(() => {
        this.outline = 'inherit'
      }, 250); //default unit is in milli seconds
    }
  
}
