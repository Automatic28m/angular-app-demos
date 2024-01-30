import { TestBed } from '@angular/core/testing';

import { CheckSignInService } from './check-sign-in.service';

describe('CheckSignInService', () => {
  let service: CheckSignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckSignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
