import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertNavbarComponent } from './vert-navbar.component';

describe('VertNavbarComponent', () => {
  let component: VertNavbarComponent;
  let fixture: ComponentFixture<VertNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VertNavbarComponent]
    });
    fixture = TestBed.createComponent(VertNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
