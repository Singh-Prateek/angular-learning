import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePhotoDescComponent } from './generate-photo-desc.component';

describe('GeneratePhotoDescComponent', () => {
  let component: GeneratePhotoDescComponent;
  let fixture: ComponentFixture<GeneratePhotoDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratePhotoDescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratePhotoDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
