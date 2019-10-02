import { async, TestBed } from '@angular/core/testing';
import { PmsMyModule } from './pms-my.module';

describe('PmsMyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PmsMyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PmsMyModule).toBeDefined();
  });
});
