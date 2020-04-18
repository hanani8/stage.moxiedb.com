import { TestBed } from '@angular/core/testing';

import { XrequestsService } from './xrequests.service';

describe('XrequestsService', () => {
  let service: XrequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XrequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
