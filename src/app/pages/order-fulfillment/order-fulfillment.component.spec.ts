import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFulfillmentComponent } from './order-fulfillment.component';

describe('OrderFulfillmentComponent', () => {
  let component: OrderFulfillmentComponent;
  let fixture: ComponentFixture<OrderFulfillmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFulfillmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFulfillmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
