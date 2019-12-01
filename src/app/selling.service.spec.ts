import { TestBed } from '@angular/core/testing';

import { SellingService } from './selling.service';

describe('SellingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellingService = TestBed.get(SellingService);
    expect(service).toBeTruthy();
  });
});
