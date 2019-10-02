import { async, TestBed } from '@angular/core/testing';
import { PmsTestModule } from './pms-test.module';

describe('PmsTestModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PmsTestModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PmsTestModule).toBeDefined();
  });
});
