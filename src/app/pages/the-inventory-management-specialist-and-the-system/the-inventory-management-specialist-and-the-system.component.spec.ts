import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInventoryManagementSpecialistAndTheSystemComponent } from './the-inventory-management-specialist-and-the-system.component';

describe('TheInventoryManagementSpecialistAndTheSystemComponent', () => {
  let component: TheInventoryManagementSpecialistAndTheSystemComponent;
  let fixture: ComponentFixture<TheInventoryManagementSpecialistAndTheSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheInventoryManagementSpecialistAndTheSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheInventoryManagementSpecialistAndTheSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
