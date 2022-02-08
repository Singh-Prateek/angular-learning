import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-service',
  templateUrl: './scroll-service.component.html',
  styleUrls: ['./scroll-service.component.scss']
})
export class ScrollServiceComponent implements OnInit {

  constructor(private readonly scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  logScrollPosition(type: 'anchor' | 'pos', value: string) {
    console.log('before', this.scroller.getScrollPosition());
    if (type === 'anchor') {
      this.scroller.scrollToAnchor(value);
    } else {
      this.scroller.scrollToPosition([0, +value]);
    }
    console.log('after', this.scroller.getScrollPosition());

  }

}
