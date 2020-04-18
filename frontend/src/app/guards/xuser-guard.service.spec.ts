import { TestBed } from '@angular/core/testing';

import { XuserGuardService } from './xuser-guard.service';

describe('XuserGuardService', () => {
  let service: XuserGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XuserGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
