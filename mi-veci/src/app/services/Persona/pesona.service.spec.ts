import { TestBed } from '@angular/core/testing';

import { PesonaService } from './pesona.service';

describe('PesonaService', () => {
  let service: PesonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
