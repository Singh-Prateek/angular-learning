import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconsDemoComponent } from './mat-icons-demo.component';

describe('MatIconsDemoComponent', () => {
  let component: MatIconsDemoComponent;
  let fixture: ComponentFixture<MatIconsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MatIconsDemoComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MatIconsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
