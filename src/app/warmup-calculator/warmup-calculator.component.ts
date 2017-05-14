import { Component } from '@angular/core';

@Component({
  selector: 'app-warmup-calculator',
  templateUrl: './warmup-calculator.component.html',
  styleUrls: ['./warmup-calculator.component.css']
})
export class WarmupCalculatorComponent {
  increments = [2.5, 5, 10];
  _barWeight = 20;
  _selectedIncrement = 2.5;
  _weight: number = 0;
  _reps: number = 1;
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

  get weight() {
    return this._weight;
  }

  set weight(targetWeight: number) {
    this._weight = targetWeight;
    this.calculate();
  }

  get reps() {
    return this._reps;
  }

  set reps(targetWeight: number) {
    this._reps = targetWeight;
    this.calculate();
  }

  set barWeight(weight: number) {
    this._barWeight = weight;
    this.calculate();
  }

  calculate() {
    let oneRepMax = Math.ceil(this.weight / (1.0278 - (0.0278 * this.reps)));
    let targetWeight = Math.ceil(oneRepMax * (1.0278 - (0.0278 * 5)));
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
        weight: this.round(this._barWeight + 0.25 * (targetWeight - this._barWeight)),
        reps: 5
      }
    );
    this.sets.push(
      {
        weight: this.round(this._barWeight + 0.5 * (targetWeight - this._barWeight)),
        reps: 3
      }
    );
    this.sets.push(
      {
        weight: this.round(this._barWeight + 0.75 * (targetWeight - this._barWeight)),
        reps: 2
      }
    );
  }

  round( weight: number, precision = this.selectedIncrement) {
    return Math.round(weight / precision) * precision;
  }
}
