import { async, TestBed } from '@angular/core/testing';
import { PmsProductModule } from './pms-product.module';

describe('PmsProductModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PmsProductModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PmsProductModule).toBeDefined();
  });
});
