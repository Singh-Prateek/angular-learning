import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDemoComponent } from './attr-demo.component';

describe('AttrDemoComponent', () => {
  let component: AttrDemoComponent;
  let fixture: ComponentFixture<AttrDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AttrDemoComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
