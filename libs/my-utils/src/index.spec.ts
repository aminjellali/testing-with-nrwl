import { extendedFunc } from "./lib/extending-if-contains-string";

describe('from lib testing input func',()=>{
    it('testing testInput function', () => {
        const firstNumber = 50;
        const secondNumber = 'hola';
        // const utils = new UtilModule();
        expect(extendedFunc(firstNumber, secondNumber)).toBe(true);
      });
})