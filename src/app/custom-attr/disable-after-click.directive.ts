import { Directive, HostBinding, Input, Output, OnInit, OnDestroy, EventEmitter, HostListener } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion'

@Directive({
    selector: 'input[appDisableAfterClick]',
    exportAs: 'disable-after-click',
    standalone: true
})
export class DisableAfterClickDirective implements OnInit, OnDestroy {

  private _disabled: boolean = false;
  private _disabled$: Observable<boolean> | undefined;
  private _disabledSink: Subscription | undefined;

  @HostBinding()
  @Input()
  get disabled() { return this._disabled; }
  set disabled(value: BooleanInput | Observable<boolean>) {
    if (value instanceof Observable) {
      this._disabled$ = value;
    }
    else {
      this._disabled = coerceBooleanProperty(value);
    }
  }

  @Output('disabledChange') onClickDisabled = new EventEmitter<boolean>()

  constructor() { }
  ngOnInit(): void {
    if (!!this._disabled$) {
      this._disabledSink = this._disabled$.subscribe(state => this._disabled = state);
    }
  }
  ngOnDestroy(): void {
    this._disabledSink?.unsubscribe();
    this.onClickDisabled.complete();
  }

  @HostListener('click')
  onClick() {
    this._disabled = true;
    this.onClickDisabled.emit(true);
  }
}
