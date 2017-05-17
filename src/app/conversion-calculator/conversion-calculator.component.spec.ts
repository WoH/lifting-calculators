import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionCalculatorComponent } from './conversion-calculator.component';

describe('ConversionCalculatorComponent', () => {
  let component: ConversionCalculatorComponent;
  let fixture: ComponentFixture<ConversionCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
