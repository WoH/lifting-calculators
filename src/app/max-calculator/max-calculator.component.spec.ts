import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxCalculatorComponent } from './max-calculator.component';

describe('MaxCalculatorComponent', () => {
  let component: MaxCalculatorComponent;
  let fixture: ComponentFixture<MaxCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
