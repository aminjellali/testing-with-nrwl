import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { E2eComponent } from './e2e.component';

describe('E2eComponent', () => {
  let component: E2eComponent;
  let fixture: ComponentFixture<E2eComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [E2eComponent],
      imports: [BrowserModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('safe zone from should be', () => {
    expect(component.safeZone.from).toBe(10);
  });
  describe('testing calculating functions', () => {
    it('calculating function', () => {
      const operation = 'add';
      const firstNumber = 50;
      const secondNumber = 20;
      expect(
        component.calculatingFunction(operation, firstNumber, secondNumber)
      ).toBe(70);
    });
    it('calculating function', () => {
      const operation = 'multiply';
      const firstNumber = 50;
      const secondNumber = 20;
      expect(
        component.calculatingFunction(operation, firstNumber, secondNumber)
      ).toBe(1000);
    });
    it('calculating function', () => {
      const operation = 'devide';
      const firstNumber = 700;
      const secondNumber = 10;
      expect(
        component.calculatingFunction(operation, firstNumber, secondNumber)
      ).toBe(70);
    });
  });
  it('testing testInput function', () => {
    const firstNumber = 50;
    const secondNumber = 'hola';
    expect(component.testInput(firstNumber, secondNumber)).toBe(true);
  });
  describe('testing if the result is propertly colored', () => {
    it('testing color if not in safe zone', () => {
      component.result = 15;
      component.safeZone = { from: 50, to: 70 };
      expect(component.styleResult()).toBe('rgb(255,0,0)');
    });
    it('testing color if in safe zone', () => {
      component.result = 15;
      component.safeZone = { from: 10, to: 70 };
      expect(component.styleResult()).toBe('rgb(124,252,0)');
    });
  });
});
