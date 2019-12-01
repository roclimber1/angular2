import { TestBed } from '@angular/core/testing';

import { SellingNewService } from './selling-new.service';

describe('SellingNewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellingNewService = TestBed.get(SellingNewService);
    expect(service).toBeTruthy();
  });
});
