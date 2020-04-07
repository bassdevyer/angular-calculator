import {Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  addendA;
  addendB;
  result;


  add(): void {
    this.result = this.addendA + this.addendB;
  }
}
