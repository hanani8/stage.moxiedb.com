import { TestBed } from '@angular/core/testing';

import { IuserCognitoService } from './iuser-cognito.service';

describe('IuserCognitoService', () => {
  let service: IuserCognitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IuserCognitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
