import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelPrintingPastingComponent } from './label-printing-pasting.component';

describe('LabelPrintingPastingComponent', () => {
  let component: LabelPrintingPastingComponent;
  let fixture: ComponentFixture<LabelPrintingPastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelPrintingPastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelPrintingPastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
