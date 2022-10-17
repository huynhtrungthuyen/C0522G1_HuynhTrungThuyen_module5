import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1 = 0;
  num2 = 0;
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  getAddition() {
    this.result = this.num1 + this.num2;
  }

  getSubtraction() {
    this.result = this.num1 - this.num2;
  }

  getMultiplication() {
    this.result = this.num1 * this.num2;
  }

  getDivision() {
    if (this.num2 == 0) {
      this.result = "Cannot be divided by 0!";
    } else {
      this.result = this.num1 / this.num2;
    }
  }
}
