import { TestBed } from '@angular/core/testing';

import { PeliServiceService } from './peli-service.service';

describe('PeliServiceService', () => {
  let service: PeliServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
