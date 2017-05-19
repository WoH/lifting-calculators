import { Component } from '@angular/core';

@Component({
  selector: 'app-warmup-calculator',
  templateUrl: './warmup-calculator.component.html',
  styleUrls: ['./warmup-calculator.component.css']
})
export class WarmupCalculatorComponent {
  public increments = [2.5, 5, 10];
  public sets: [{
    weight: number,
    reps: number
  }];
  private _barWeight = 20;
  private _useLbs = false;
  private _isDeadlift = false;
  private _selectedIncrement = 2.5;
  private _weight = 20;
  private _reps = 1;

  get selectedIncrement() {
    return this._selectedIncrement;
  }

  set selectedIncrement(selectedIncrement: number) {
    this._selectedIncrement = selectedIncrement;
    this.calculateWarmup();
  }

  get weight() {
    return this._weight;
  }

  set weight(targetWeight: number) {
    this._weight = targetWeight;
    this.calculateWarmup();
  }

  get reps() {
    return this._reps;
  }

  set reps(targetWeight: number) {
    this._reps = targetWeight;
    this.calculateWarmup();
  }

  get barWeight() {
    return this._barWeight;
  }

  set barWeight(weight: number) {
    this._barWeight = weight;
    this.calculateWarmup();
  }

  get isDeadlift () {
    return this._isDeadlift;
  }

  set isDeadlift(isDeadLift: boolean) {
    this._isDeadlift = isDeadLift;
    this.calculateInitialWeight();
  }

  get useLbs () {
    return this._useLbs;
  }

  set useLbs(useLbs: boolean) {
    this._useLbs = useLbs;
    this.calculateInitialWeight();
  }

  calculateWarmup() {
    const oneRepMax = Math.ceil(this.weight / (1.0278 - (0.0278 * this.reps)));
    const targetWeight = Math.ceil(oneRepMax * (1.0278 - (0.0278 * 5)));
    this.sets = [
      {
        weight: this.barWeight,
        reps: 5
      },
      {
        weight: this.barWeight,
        reps: 5
      }
    ];
    this.sets.push(
      {
        weight: this.round(this.barWeight + 0.25 * (targetWeight - this.barWeight)),
        reps: 5
      }
    );
    this.sets.push(
      {
        weight: this.round(this.barWeight + 0.5 * (targetWeight - this.barWeight)),
        reps: 3
      }
    );
    this.sets.push(
      {
        weight: this.round(this.barWeight + 0.75 * (targetWeight - this.barWeight)),
        reps: 2
      }
    );
  }

  round( weight: number, precision = this.selectedIncrement) {
    return Math.round(weight / precision) * precision;
  }

  calculateInitialWeight() {
    let barWeight: number;
    if(this.useLbs) {
      barWeight = this.isDeadlift ? 95 : 45;
    } else {
      barWeight = this.isDeadlift ? 40 : 20;
    }
    this.barWeight = barWeight;
    this.calculateWarmup();
  }
}
