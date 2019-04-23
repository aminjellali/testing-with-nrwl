import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglableMenuComponent } from './togglable-menu.component';

describe('TogglableMenuComponent', () => {
  let component: TogglableMenuComponent;
  let fixture: ComponentFixture<TogglableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglableMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
