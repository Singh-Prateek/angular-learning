import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushCounterComponent } from './push-counter.component';

describe('PushCounterComponent', () => {
  let component: PushCounterComponent;
  let fixture: ComponentFixture<PushCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
