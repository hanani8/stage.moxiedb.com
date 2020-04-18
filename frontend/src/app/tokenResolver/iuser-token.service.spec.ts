import { TestBed } from '@angular/core/testing';

import { IuserTokenService } from './iuser-token.service';

describe('IuserTokenService', () => {
  let service: IuserTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IuserTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
