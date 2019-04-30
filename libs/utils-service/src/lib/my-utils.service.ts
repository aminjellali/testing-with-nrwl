import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyUtilsService {
  constructor() {}
  extendedFunc(firstNumber, secondNumber) {
    return  isNaN(firstNumber) || isNaN(secondNumber);
  }
}
