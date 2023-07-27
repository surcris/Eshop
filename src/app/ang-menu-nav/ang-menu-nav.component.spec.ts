import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMenuNavComponent } from './ang-menu-nav.component';

describe('AngMenuNavComponent', () => {
  let component: AngMenuNavComponent;
  let fixture: ComponentFixture<AngMenuNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngMenuNavComponent]
    });
    fixture = TestBed.createComponent(AngMenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
