import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DisableAfterClickDirective } from '../disable-after-click.directive';
import { NumericTextboxDirective } from '../numeric-textbox.directive';

@Component({
    selector: 'app-attr-demo',
    templateUrl: './attr-demo.component.html',
    styleUrls: ['./attr-demo.component.scss'],
    standalone: true,
    imports: [NumericTextboxDirective, DisableAfterClickDirective]
})
export class AttrDemoComponent implements OnInit {

  disableState = false;

  disabledState$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  onObservableClick() {
    setTimeout(() => {
      this.disabledState$.next(false);
    }, 2000)
  }

  onTempState(target: DisableAfterClickDirective) {
    setTimeout(() => {
      target.disabled = false;
    }, 2500);
  }

}
