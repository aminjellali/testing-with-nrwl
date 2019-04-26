import { extendedFunc } from "./index";

describe('from lib testing input func',()=>{
    it('testing testInput function', () => {
        const firstNumber = 50;
        const secondNumber = 'hola';
        expect(extendedFunc(firstNumber, secondNumber)).toBe(true);
      });
})