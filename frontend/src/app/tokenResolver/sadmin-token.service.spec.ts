import { TestBed } from '@angular/core/testing';

import { SadminTokenService } from './sadmin-token.service';

describe('SadminTokenService', () => {
  let service: SadminTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SadminTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
