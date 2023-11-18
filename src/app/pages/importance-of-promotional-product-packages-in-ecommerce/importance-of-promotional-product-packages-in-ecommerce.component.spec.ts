import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanceOfPromotionalProductPackagesInEcommerceComponent } from './importance-of-promotional-product-packages-in-ecommerce.component';

describe('ImportanceOfPromotionalProductPackagesInEcommerceComponent', () => {
  let component: ImportanceOfPromotionalProductPackagesInEcommerceComponent;
  let fixture: ComponentFixture<ImportanceOfPromotionalProductPackagesInEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportanceOfPromotionalProductPackagesInEcommerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanceOfPromotionalProductPackagesInEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
