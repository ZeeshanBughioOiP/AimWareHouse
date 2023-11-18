import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDesigningComponent } from './package-designing.component';

describe('PackageDesigningComponent', () => {
  let component: PackageDesigningComponent;
  let fixture: ComponentFixture<PackageDesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageDesigningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
