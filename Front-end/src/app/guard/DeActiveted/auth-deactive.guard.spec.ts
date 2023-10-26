import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { authDeactiveGuard } from './auth-deactive.guard';

describe('authDeactiveGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authDeactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
