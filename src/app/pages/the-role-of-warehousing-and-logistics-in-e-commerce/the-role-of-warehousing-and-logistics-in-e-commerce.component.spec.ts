import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRoleOfWarehousingAndLogisticsInECommerceComponent } from './the-role-of-warehousing-and-logistics-in-e-commerce.component';

describe('TheRoleOfWarehousingAndLogisticsInECommerceComponent', () => {
  let component: TheRoleOfWarehousingAndLogisticsInECommerceComponent;
  let fixture: ComponentFixture<TheRoleOfWarehousingAndLogisticsInECommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheRoleOfWarehousingAndLogisticsInECommerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRoleOfWarehousingAndLogisticsInECommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
