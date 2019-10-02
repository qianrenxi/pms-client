import { async, TestBed } from '@angular/core/testing';
import { PmsProjectModule } from './pms-project.module';

describe('PmsProjectModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PmsProjectModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PmsProjectModule).toBeDefined();
  });
});
