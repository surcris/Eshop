import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngArticlesComponent } from './ang-articles.component';

describe('AngArticlesComponent', () => {
  let component: AngArticlesComponent;
  let fixture: ComponentFixture<AngArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngArticlesComponent]
    });
    fixture = TestBed.createComponent(AngArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
