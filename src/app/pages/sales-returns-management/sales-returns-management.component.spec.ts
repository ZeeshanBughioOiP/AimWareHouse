import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnsManagementComponent } from './sales-returns-management.component';

describe('SalesReturnsManagementComponent', () => {
  let component: SalesReturnsManagementComponent;
  let fixture: ComponentFixture<SalesReturnsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReturnsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReturnsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
