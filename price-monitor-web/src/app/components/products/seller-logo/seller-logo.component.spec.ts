import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLogoComponent } from './seller-logo.component';

describe('SellerLogoComponent', () => {
  let component: SellerLogoComponent;
  let fixture: ComponentFixture<SellerLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerLogoComponent]
    });
    fixture = TestBed.createComponent(SellerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
