import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngHomeComponent } from './ang-home.component';

describe('AngHomeComponent', () => {
  let component: AngHomeComponent;
  let fixture: ComponentFixture<AngHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngHomeComponent]
    });
    fixture = TestBed.createComponent(AngHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
