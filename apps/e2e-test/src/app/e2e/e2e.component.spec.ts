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
  it('calculating function', () => {
    const operation = 'add';
    const firstNumber = 50;
    const secondNumber = 20;
    expect(
      component.calculatingFunction(operation, firstNumber, secondNumber)
    ).toBe(70);
  });
  it('testing testInput function', () => {
    const firstNumber = 50;
    const secondNumber = 'hola';
    expect(component.testInput(firstNumber, secondNumber)).toBe(true);
  });
});
