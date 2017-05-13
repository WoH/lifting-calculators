import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmupCalculatorComponent } from './warmup-calculator.component';

describe('WarmupCalculatorComponent', () => {
  let component: WarmupCalculatorComponent;
  let fixture: ComponentFixture<WarmupCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmupCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmupCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
