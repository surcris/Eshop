import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngCateProduitComponent } from './ang-cate-produit.component';

describe('AngCateProduitComponent', () => {
  let component: AngCateProduitComponent;
  let fixture: ComponentFixture<AngCateProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngCateProduitComponent]
    });
    fixture = TestBed.createComponent(AngCateProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
