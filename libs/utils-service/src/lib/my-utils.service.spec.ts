import { TestBed } from '@angular/core/testing';

import { MyUtilsService } from './my-utils.service';

describe('MyUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyUtilsService = TestBed.get(MyUtilsService);
    expect(service).toBeTruthy();
  });

  describe('from lib testing input func', () => {
    it('testing testInput function', () => {
      const firstNumber = 50;
      const secondNumber = 'hola';
      // const utils = new UtilModule();
      const service: MyUtilsService = TestBed.get(MyUtilsService);
      expect(service.extendedFunc(firstNumber, secondNumber)).toBe(true);
    });
  });
});
