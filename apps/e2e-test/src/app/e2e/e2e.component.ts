import { MyUtilsService } from '@widgets-project/utils-service'; //utils-service';
import { extendedFunc } from '@widgets-project/my-utils';
import { Component, OnInit } from '@angular/core';
interface safeZone {
  from: number;
  to: number;
}
@Component({
  selector: 'widgets-project-e2e',
  templateUrl: './e2e.component.html',
  styleUrls: ['./e2e.component.css']
})
export class E2eComponent implements OnInit {
  firstNumber: number = null;
  secondNumber: number = null;
  operation: any = null;
  result: any = null;
  safeZone: safeZone = { from: 10, to: 20 };
  constructor(private utilsService: MyUtilsService) {} //private utilsService: MyUtilsService

  ngOnInit() {}

  calculate() {
    console.log(this.safeZone);
    if (this.testInput(this.firstNumber, this.secondNumber)) {
      this.result = "I'am not that dump!";
    } else {
      this.result = this.calculatingFunction(
        this.operation,
        this.firstNumber,
        this.secondNumber
      );
    }
  }
  testInput(firstNumber, secondNumber) {
    return  this.utilsService.extendedFunc(firstNumber, secondNumber);//isNaN(firstNumber) || isNaN(secondNumber);
  }
  calculatingFunction(operation, firstNumber, secondNumber) {
    switch (operation) {
      case 'add':
        return Number(firstNumber) + Number(secondNumber);
      case 'multiply':
        return firstNumber * secondNumber;
      case 'devide':
        return firstNumber / secondNumber;
    }
  }
  styleResult(): string{
    if (this.result < this.safeZone.from || this.result >this.safeZone.to ){
      return 'rgb(255,0,0)';
    } 
    return 'rgb(124,252,0)';
  }
}
