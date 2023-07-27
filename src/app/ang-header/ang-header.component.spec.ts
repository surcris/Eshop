import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngHeaderComponent } from './ang-header.component';

describe('AngHeaderComponent', () => {
  let component: AngHeaderComponent;
  let fixture: ComponentFixture<AngHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngHeaderComponent]
    });
    fixture = TestBed.createComponent(AngHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
