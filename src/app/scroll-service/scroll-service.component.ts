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
    let [x,y] = this.scroller.getScrollPosition();
    console.log('before x:%s, y:%s', x,y );
    if (type === 'anchor') {
      this.scroller.scrollToAnchor(value);
    } else {
      this.scroller.scrollToPosition([0, +value]);
    }
    console.log('after', this.scroller.getScrollPosition());

  }

}
