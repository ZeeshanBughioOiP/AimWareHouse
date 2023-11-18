import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalPackagingComponent } from './promotional-packaging.component';

describe('PromotionalPackagingComponent', () => {
  let component: PromotionalPackagingComponent;
  let fixture: ComponentFixture<PromotionalPackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalPackagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
