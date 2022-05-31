import { TestBed } from '@angular/core/testing';

import { EndosoService } from './endoso.service';

describe('EndosoService', () => {
  let service: EndosoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndosoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
