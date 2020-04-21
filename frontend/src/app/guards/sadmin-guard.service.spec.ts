import { TestBed } from '@angular/core/testing';

import { SadminGuardService } from './sadmin-guard.service';

describe('SadminGuardService', () => {
  let service: SadminGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SadminGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
