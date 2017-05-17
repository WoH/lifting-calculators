import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './conversion-calculator.component.html',
  styleUrls: ['./conversion-calculator.component.css']
})
export class ConversionCalculatorComponent {
  private _weightkg: number;
  private _weightlbs: number;

  get weightlbs(): number {
    return this._weightlbs;
  }

  set weightlbs(value: number) {
    this._weightlbs = value;
    this._weightkg = Math.round(value * 45.3592) / 100;
  }
  get weightkg(): number {
    return this._weightkg;
  }

  set weightkg(value: number) {
    this._weightkg = value;
    this._weightlbs = Math.round(value * 220.462) / 100;
  }
}
