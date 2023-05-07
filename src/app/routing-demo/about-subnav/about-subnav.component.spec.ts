import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSubnavComponent } from './about-subnav.component';

describe('AboutSubnavComponent', () => {
  let component: AboutSubnavComponent;
  let fixture: ComponentFixture<AboutSubnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [AboutSubnavComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AboutSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
