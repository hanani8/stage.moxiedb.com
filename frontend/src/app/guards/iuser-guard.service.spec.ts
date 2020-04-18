import { TestBed } from '@angular/core/testing';

import { IuserGuardService } from './iuser-guard.service';

describe('IuserGuardService', () => {
  let service: IuserGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IuserGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
