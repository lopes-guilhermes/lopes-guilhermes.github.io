import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GltButtonComponent } from './glt-button.component';

describe('GltButtonComponent', () => {
  let component: GltButtonComponent;
  let fixture: ComponentFixture<GltButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GltButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GltButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
