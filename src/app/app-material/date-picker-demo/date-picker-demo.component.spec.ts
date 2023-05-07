import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerDemoComponent } from './date-picker-demo.component';

describe('DatePickerDemoComponent', () => {
  let component: DatePickerDemoComponent;
  let fixture: ComponentFixture<DatePickerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DatePickerDemoComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
