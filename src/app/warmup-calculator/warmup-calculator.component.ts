import { Component } from '@angular/core';

@Component({
  selector: 'app-warmup-calculator',
  templateUrl: './warmup-calculator.component.html',
  styleUrls: ['./warmup-calculator.component.css']
})
export class WarmupCalculatorComponent {
  increments = [2.5, 5, 10];
  _barWeight = 20;
  _selectedIncrement: number;
  _targetWeight: number = 0;
  sets: [{
    weight: number,
    reps: number
  }];

  get selectedIncrement() {
    return this._selectedIncrement;
  }

  set selectedIncrement(selectedIncrement: number) {
    this._selectedIncrement = selectedIncrement;
    this.calculate();
  }

  get targetWeight() {
    return this._targetWeight;
  }

  set targetWeight(targetWeight: number) {
    this._targetWeight = targetWeight;
    this.calculate();
  }

  set barWeight(weight: number) {
    this._barWeight = weight;
    this.calculate();
  }

  calculate() {
    this.sets = [
      {
        weight: this._barWeight,
        reps: 5
      },
      {
        weight: this._barWeight,
        reps: 5
      }
    ];
    this.sets.push(
      {
        weight: this.round(this._barWeight + 0.25 * (this.targetWeight - this._barWeight)),
        reps: 5
      }
    );
    this.sets.push(
      {
        weight: this.round(this._barWeight + 0.5 * (this.targetWeight - this._barWeight)),
        reps: 3
      }
    );
    this.sets.push(
      {
        weight: this.round(this._barWeight + 0.75 * (this.targetWeight - this._barWeight)),
        reps: 2
      }
    );
  }

  round( weight: number, precision = this.selectedIncrement) {
    return (weight / precision) * precision;
  }
}
