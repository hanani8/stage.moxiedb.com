import { TestBed } from '@angular/core/testing';

import { XuserCognitoService } from './xuser-cognito.service';

describe('XuserCognitoService', () => {
  let service: XuserCognitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XuserCognitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
