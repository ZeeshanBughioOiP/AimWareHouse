import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringProfessionalPackagingDesignServicesComponent } from './hiring-professional-packaging-design-services.component';

describe('HiringProfessionalPackagingDesignServicesComponent', () => {
  let component: HiringProfessionalPackagingDesignServicesComponent;
  let fixture: ComponentFixture<HiringProfessionalPackagingDesignServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringProfessionalPackagingDesignServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringProfessionalPackagingDesignServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
