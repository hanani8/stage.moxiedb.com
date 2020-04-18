import { TestBed } from '@angular/core/testing';

import { XuserTokenService } from './xuser-token.service';

describe('XuserTokenService', () => {
  let service: XuserTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XuserTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
