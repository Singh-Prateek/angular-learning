import { Directive, HostBinding, Input, Output, OnInit, OnDestroy, EventEmitter, HostListener } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: 'input[appDisableAfterClick]',
  exportAs:'disable-after-click'
})
export class DisableAfterClickDirective implements OnInit, OnDestroy {

  private _disabled: boolean = false;
  private _disabled$: Observable<boolean> | undefined;
  private _disabledSink: Subscription | undefined;

  @HostBinding()
  @Input()
  set disabled(value: boolean | Observable<boolean>) {
    if (value instanceof Observable) {
      this._disabled$ = value;
    }
    else {
      this._disabled = value;
    }
  }
  get disabled() { return this._disabled; }

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