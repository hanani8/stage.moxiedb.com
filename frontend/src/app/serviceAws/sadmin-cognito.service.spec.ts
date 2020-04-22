import { TestBed } from '@angular/core/testing';

import { SadminCognitoService } from './sadmin-cognito.service';

describe('SadminCognitoService', () => {
  let service: SadminCognitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SadminCognitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
