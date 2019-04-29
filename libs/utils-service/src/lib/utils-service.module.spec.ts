import { async, TestBed } from '@angular/core/testing';
import { UtilsServiceModule } from './utils-service.module';

describe('UtilsServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UtilsServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UtilsServiceModule).toBeDefined();
  });
});
