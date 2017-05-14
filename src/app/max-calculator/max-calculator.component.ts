import { Component } from '@angular/core';

@Component({
  selector: 'app-max-calculator',
  templateUrl: './max-calculator.component.html',
  styleUrls: ['./max-calculator.component.css']
})
export class MaxCalculatorComponent {
  oneRepMax = 0;
  nRepMax = 0;
  _weight = 0;
  _reps = 1;
  _desiredReps = 1;

  set weight(weight: number) {
    this._weight = weight;
    this.recalculate();
  }

  set reps(reps: number) {
    this._reps = reps;
    this.recalculate();
  }

  set desiredReps(desiredReps: number) {
    this._desiredReps = desiredReps;
    this.recalculate();
  }

  get desiredReps() {
    return this._desiredReps;
  }

  get weight() {
    return this._weight;
  }

  get reps() {
    return this._reps;
  }

  private recalculate() {
    this.oneRepMax = this.reps === 0 ? 0 : Math.ceil(this.weight / (1.0278 - (0.0278 * this.reps)));
    this.nRepMax = Math.ceil(this.oneRepMax * (1.0278 - (0.0278 * this._desiredReps)));
  }
}
