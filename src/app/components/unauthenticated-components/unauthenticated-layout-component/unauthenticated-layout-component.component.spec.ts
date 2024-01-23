import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthenticatedLayoutComponentComponent } from './unauthenticated-layout-component.component';

describe('UnauthenticatedLayoutComponentComponent', () => {
  let component: UnauthenticatedLayoutComponentComponent;
  let fixture: ComponentFixture<UnauthenticatedLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthenticatedLayoutComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnauthenticatedLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
