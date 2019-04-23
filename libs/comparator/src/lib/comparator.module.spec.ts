import { async, TestBed } from '@angular/core/testing';
import { ComparatorModule } from './comparator.module';

describe('ComparatorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComparatorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComparatorModule).toBeDefined();
  });
});
