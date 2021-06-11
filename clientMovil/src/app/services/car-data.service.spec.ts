import { TestBed } from '@angular/core/testing';

import { CartDataService } from './car-data.service';

describe('CartDataService', () => {
  let service: CartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
